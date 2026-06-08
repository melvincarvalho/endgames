#!/usr/bin/env python3
"""Link-gate: every internal markdown link must resolve to a real page.

Docusaurus is configured with onBrokenLinks: 'throw', but that only fires at
build time (post-merge). This runs in CI on every PR so a broken internal link
can never land on main. Builds the set of valid routes from docs/ + src/pages/
(routeBasePath is '/', so a file docs/a/b.md is served at /a/b), honours any
`slug:` frontmatter override, then checks every `](/...)` link in the docs.
External links (http/https/mailto) and pure anchors (#...) are ignored.
"""
import sys, re, glob, os

linkre = re.compile(r'\]\((/[^)\s]+)\)')
slugre = re.compile(r'^slug:\s*(\S+)\s*$', re.M)


def route_for(path):
    """Default Docusaurus route for a docs/ or src/pages/ file (routeBasePath '/')."""
    rel = path.split('/', 1)[1]              # drop the docs/ or src/pages/ prefix
    rel = re.sub(r'\.(md|mdx|tsx|jsx|js)$', '', rel)
    if rel.endswith('/index') or rel == 'index':
        rel = rel[: -len('index')].rstrip('/')
    return '/' + rel if rel else '/'


# 1. Build the set of valid routes
valid = {'/'}
for base in ('docs', 'src/pages'):
    for f in glob.glob(f'{base}/**/*.*', recursive=True):
        if not f.endswith(('.md', '.mdx', '.tsx', '.jsx', '.js')):
            continue
        valid.add(route_for(f))
        try:
            head = open(f, encoding='utf-8').read(2000)
        except Exception:
            continue
        m = slugre.search(head)
        if m:
            slug = m.group(1).strip().strip('"\'')
            if slug.startswith('/'):
                valid.add(slug.rstrip('/') or '/')

# 2. Check every internal link in the docs
fails = []
for f in sorted(glob.glob('docs/**/*.md', recursive=True)):
    for i, line in enumerate(open(f, encoding='utf-8'), 1):
        for target in linkre.findall(line):
            route = target.split('#', 1)[0].split('?', 1)[0].rstrip('/') or '/'
            if route in valid:
                continue
            # tolerate links to static assets that exist on disk
            if os.path.exists('static' + route) or os.path.exists(route.lstrip('/')):
                continue
            fails.append(f"{f}:{i}: broken internal link -> {target}")

if fails:
    print("Broken internal links:\n" + "\n".join(fails))
    sys.exit(1)
print(f"link-check OK — {len(valid)} routes, all internal links resolve")
