#!/usr/bin/env python3
"""Engine-gate: every FEN must be a legal/renderable position and every
PuzzleBoard solution must be a legal sequence. Run in CI to stop chess
regressions. Uses python-chess (and Stockfish if present, though not required
for these structural checks)."""
import sys, re, glob, chess

fenre = re.compile(r'fen="([^"]+)"')
pbre  = re.compile(r'<PuzzleBoard\b(.*?)/>', re.S)
solre = re.compile(r"solution=\{\[([^\]]*)\]\}")
titre = re.compile(r'title="([^"]+)"')

# Status flags that are BENIGN for a static teaching diagram (king-less pawn /
# structure diagrams render fine). Everything else is a hard failure.
BENIGN = {int(chess.STATUS_NO_WHITE_KING | chess.STATUS_NO_BLACK_KING),
          int(chess.STATUS_NO_BLACK_KING),
          int(chess.STATUS_NO_WHITE_KING)}

fails = []
for f in sorted(glob.glob("docs/**/*.md", recursive=True)):
    text = open(f).read()
    # 1. FEN legality (multi-king / impossible positions break rendering)
    for fen in fenre.findall(text):
        try:
            b = chess.Board(fen); st = int(b.status())
        except Exception as e:
            fails.append(f"{f}: unparseable FEN '{fen}' ({e})"); continue
        if not b.is_valid() and st not in BENIGN:
            fails.append(f"{f}: illegal FEN '{fen}' (status {st})")
    # 2. PuzzleBoard solutions must replay legally
    for m in pbre.finditer(text):
        blk = m.group(1); fm = fenre.search(blk)
        if not fm: continue
        title = (titre.search(blk).group(1) if titre.search(blk) else "?")
        sm = solre.search(blk)
        sol = [x.strip().strip("'\"") for x in sm.group(1).split(',')] if sm else []
        try:
            b = chess.Board(fm.group(1))
        except Exception:
            fails.append(f"{f}: puzzle '{title}' unparseable FEN"); continue
        if not b.is_valid():
            fails.append(f"{f}: puzzle '{title}' illegal FEN (status {int(b.status())})"); continue
        for i, mv in enumerate(sol):
            try:
                move = chess.Move.from_uci(mv)
            except Exception:
                fails.append(f"{f}: puzzle '{title}' bad move '{mv}'"); break
            if move not in b.legal_moves:
                fails.append(f"{f}: puzzle '{title}' illegal solution move #{i+1} '{mv}'"); break
            b.push(move)

if fails:
    print(f"\n❌ Chess content check FAILED — {len(fails)} issue(s):\n")
    for x in fails: print("  -", x)
    sys.exit(1)
print("✅ Chess content check passed: all FENs legal and all puzzle solutions sound.")
