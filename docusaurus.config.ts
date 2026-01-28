import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Chess Endgames',
  tagline: 'Master the art of converting advantages into victories',
  favicon: 'img/favicon.ico',

  url: 'https://melvincarvalho.github.io',
  baseUrl: '/endgames/',
  organizationName: 'melvincarvalho',
  projectName: 'endgames',
  trailingSlash: false,
  deploymentBranch: 'gh-pages',

  onBrokenLinks: 'warn',

  future: {
    v4: true,
  },

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: '/',
          editUrl: 'https://github.com/melvincarvalho/endgames/tree/main/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/social-card.png',

    metadata: [
      {name: 'keywords', content: 'chess, endgames, endgame study, chess training, Lucena, Philidor, opposition'},
      {name: 'description', content: 'Comprehensive chess endgame documentation with themes and difficulty levels'},
      {property: 'og:type', content: 'website'},
    ],

    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },

    navbar: {
      title: 'Chess Endgames',
      logo: {
        alt: 'Chess Endgames Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: '/study-paths/overview',
          label: 'Study Paths',
          position: 'left',
        },
        {
          to: '/practice-puzzles',
          label: 'Puzzles',
          position: 'left',
        },
        {
          to: '/fundamentals/basic-checkmates/overview',
          label: 'Fundamentals',
          position: 'left',
        },
        {
          type: 'dropdown',
          label: 'By Material',
          position: 'left',
          items: [
            {label: 'Pawn Endgames', to: '/pawn-endgames/principles'},
            {label: 'Rook Endgames', to: '/rook-endgames/principles'},
            {label: 'Minor Pieces', to: '/minor-piece-endgames/overview'},
            {label: 'Queen Endgames', to: '/queen-endgames/overview'},
          ],
        },
        {
          to: '/strategic-themes/overview',
          label: 'Themes',
          position: 'left',
        },
        {
          href: 'https://github.com/melvincarvalho/endgames',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },

    footer: {
      style: 'dark',
      links: [
        {
          title: 'Study',
          items: [
            {label: 'Getting Started', to: '/getting-started/introduction'},
            {label: 'Study Paths', to: '/study-paths/overview'},
            {label: 'Practice Puzzles', to: '/practice-puzzles'},
            {label: 'Fundamentals', to: '/fundamentals/basic-checkmates/overview'},
          ],
        },
        {
          title: 'By Material',
          items: [
            {label: 'Pawn Endgames', to: '/pawn-endgames/principles'},
            {label: 'Rook Endgames', to: '/rook-endgames/principles'},
            {label: 'Minor Pieces', to: '/minor-piece-endgames/overview'},
          ],
        },
        {
          title: 'Resources',
          items: [
            {label: 'Glossary', to: '/reference/glossary'},
            {label: 'Book Recommendations', to: '/reference/books'},
            {label: 'GitHub', href: 'https://github.com/melvincarvalho/endgames'},
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Chess Endgames. Built with Docusaurus.`,
    },

    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },

    tableOfContents: {
      minHeadingLevel: 2,
      maxHeadingLevel: 4,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
