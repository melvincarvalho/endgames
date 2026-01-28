import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  mainSidebar: [
    {
      type: 'category',
      label: 'Getting Started',
      collapsed: false,
      items: [
        'getting-started/introduction',
        'getting-started/how-to-use',
        'getting-started/notation',
      ],
    },
    {
      type: 'category',
      label: 'Study Paths',
      collapsed: false,
      items: [
        'study-paths/overview',
        'study-paths/beginner',
        'study-paths/intermediate',
        'study-paths/advanced',
      ],
    },
    {
      type: 'category',
      label: 'Practice Puzzles',
      collapsed: false,
      items: [
        'practice-puzzles/index',
        'practice-puzzles/beginner',
        'practice-puzzles/intermediate',
        'practice-puzzles/checkmate-patterns',
      ],
    },
    {
      type: 'category',
      label: 'Fundamentals',
      collapsed: true,
      items: [
        {
          type: 'category',
          label: 'Basic Checkmates',
          items: [
            'fundamentals/basic-checkmates/overview',
            'fundamentals/basic-checkmates/queen-mate',
            'fundamentals/basic-checkmates/rook-mate',
            'fundamentals/basic-checkmates/two-bishops-mate',
            'fundamentals/basic-checkmates/bishop-knight-mate',
          ],
        },
        'fundamentals/king-activity',
        'fundamentals/opposition',
        'fundamentals/key-squares',
      ],
    },
    {
      type: 'category',
      label: 'Pawn Endgames',
      collapsed: true,
      items: [
        'pawn-endgames/principles',
        'pawn-endgames/king-pawn-vs-king',
        'pawn-endgames/rule-of-the-square',
        'pawn-endgames/key-squares',
        'pawn-endgames/opposition-deep',
        'pawn-endgames/triangulation',
        'pawn-endgames/rook-pawn-special',
        'pawn-endgames/pawn-races',
        'pawn-endgames/breakthroughs',
        'pawn-endgames/outside-passed-pawn',
        'pawn-endgames/protected-passed-pawn',
        'pawn-endgames/pawn-majorities',
        'pawn-endgames/same-side-pawns',
      ],
    },
    {
      type: 'category',
      label: 'Rook Endgames',
      collapsed: true,
      items: [
        'rook-endgames/principles',
        'rook-endgames/rook-vs-pawn',
        'rook-endgames/lucena-position',
        'rook-endgames/philidor-position',
        'rook-endgames/rook-pawn-vs-rook',
        'rook-endgames/active-rook',
      ],
    },
    {
      type: 'category',
      label: 'Minor Piece Endgames',
      collapsed: true,
      items: [
        'minor-piece-endgames/overview',
        'minor-piece-endgames/bishop-same-color',
        'minor-piece-endgames/bishop-opposite-color',
        'minor-piece-endgames/good-vs-bad-bishop',
        'minor-piece-endgames/knight-endgames',
        'minor-piece-endgames/bishop-vs-knight',
      ],
    },
    {
      type: 'category',
      label: 'Queen Endgames',
      collapsed: true,
      items: [
        'queen-endgames/overview',
        'queen-endgames/queen-vs-pawn',
        'queen-endgames/queen-vs-rook',
      ],
    },
    {
      type: 'category',
      label: 'Strategic Themes',
      collapsed: true,
      items: [
        'strategic-themes/overview',
        'strategic-themes/zugzwang',
        'strategic-themes/fortresses',
        'strategic-themes/stalemate-resources',
        'strategic-themes/principle-of-two-weaknesses',
        'strategic-themes/do-not-hurry',
      ],
    },
    {
      type: 'category',
      label: 'Reference',
      collapsed: true,
      items: [
        'reference/glossary',
        'reference/books',
        'reference/tablebase-guide',
      ],
    },
  ],
};

export default sidebars;
