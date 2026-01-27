import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/endgames/markdown-page',
    component: ComponentCreator('/endgames/markdown-page', '953'),
    exact: true
  },
  {
    path: '/endgames/',
    component: ComponentCreator('/endgames/', '0d2'),
    routes: [
      {
        path: '/endgames/',
        component: ComponentCreator('/endgames/', '5e7'),
        routes: [
          {
            path: '/endgames/',
            component: ComponentCreator('/endgames/', '2fa'),
            routes: [
              {
                path: '/endgames/fundamentals/basic-checkmates/bishop-knight-mate',
                component: ComponentCreator('/endgames/fundamentals/basic-checkmates/bishop-knight-mate', '5c2'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/endgames/fundamentals/basic-checkmates/overview',
                component: ComponentCreator('/endgames/fundamentals/basic-checkmates/overview', '348'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/endgames/fundamentals/basic-checkmates/queen-mate',
                component: ComponentCreator('/endgames/fundamentals/basic-checkmates/queen-mate', '2be'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/endgames/fundamentals/basic-checkmates/rook-mate',
                component: ComponentCreator('/endgames/fundamentals/basic-checkmates/rook-mate', '5d8'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/endgames/fundamentals/basic-checkmates/two-bishops-mate',
                component: ComponentCreator('/endgames/fundamentals/basic-checkmates/two-bishops-mate', '6e4'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/endgames/fundamentals/key-squares',
                component: ComponentCreator('/endgames/fundamentals/key-squares', '72d'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/endgames/fundamentals/king-activity',
                component: ComponentCreator('/endgames/fundamentals/king-activity', '33b'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/endgames/fundamentals/opposition',
                component: ComponentCreator('/endgames/fundamentals/opposition', 'e06'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/endgames/getting-started/how-to-use',
                component: ComponentCreator('/endgames/getting-started/how-to-use', '4ee'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/endgames/getting-started/introduction',
                component: ComponentCreator('/endgames/getting-started/introduction', '5a3'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/endgames/getting-started/notation',
                component: ComponentCreator('/endgames/getting-started/notation', '42b'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/endgames/minor-piece-endgames/bishop-opposite-color',
                component: ComponentCreator('/endgames/minor-piece-endgames/bishop-opposite-color', 'a93'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/endgames/minor-piece-endgames/bishop-same-color',
                component: ComponentCreator('/endgames/minor-piece-endgames/bishop-same-color', 'f94'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/endgames/minor-piece-endgames/bishop-vs-knight',
                component: ComponentCreator('/endgames/minor-piece-endgames/bishop-vs-knight', '648'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/endgames/minor-piece-endgames/good-vs-bad-bishop',
                component: ComponentCreator('/endgames/minor-piece-endgames/good-vs-bad-bishop', '8c3'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/endgames/minor-piece-endgames/knight-endgames',
                component: ComponentCreator('/endgames/minor-piece-endgames/knight-endgames', '408'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/endgames/minor-piece-endgames/overview',
                component: ComponentCreator('/endgames/minor-piece-endgames/overview', '921'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/endgames/pawn-endgames/breakthroughs',
                component: ComponentCreator('/endgames/pawn-endgames/breakthroughs', '8e9'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/endgames/pawn-endgames/key-squares',
                component: ComponentCreator('/endgames/pawn-endgames/key-squares', '9cd'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/endgames/pawn-endgames/king-pawn-vs-king',
                component: ComponentCreator('/endgames/pawn-endgames/king-pawn-vs-king', '67d'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/endgames/pawn-endgames/opposition-deep',
                component: ComponentCreator('/endgames/pawn-endgames/opposition-deep', '1bf'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/endgames/pawn-endgames/outside-passed-pawn',
                component: ComponentCreator('/endgames/pawn-endgames/outside-passed-pawn', '70b'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/endgames/pawn-endgames/pawn-majorities',
                component: ComponentCreator('/endgames/pawn-endgames/pawn-majorities', 'aca'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/endgames/pawn-endgames/pawn-races',
                component: ComponentCreator('/endgames/pawn-endgames/pawn-races', 'bbb'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/endgames/pawn-endgames/principles',
                component: ComponentCreator('/endgames/pawn-endgames/principles', 'bb1'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/endgames/pawn-endgames/protected-passed-pawn',
                component: ComponentCreator('/endgames/pawn-endgames/protected-passed-pawn', '812'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/endgames/pawn-endgames/rook-pawn-special',
                component: ComponentCreator('/endgames/pawn-endgames/rook-pawn-special', 'e8c'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/endgames/pawn-endgames/rule-of-the-square',
                component: ComponentCreator('/endgames/pawn-endgames/rule-of-the-square', '8d8'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/endgames/pawn-endgames/same-side-pawns',
                component: ComponentCreator('/endgames/pawn-endgames/same-side-pawns', '558'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/endgames/pawn-endgames/triangulation',
                component: ComponentCreator('/endgames/pawn-endgames/triangulation', '67e'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/endgames/queen-endgames/overview',
                component: ComponentCreator('/endgames/queen-endgames/overview', '60b'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/endgames/queen-endgames/queen-vs-pawn',
                component: ComponentCreator('/endgames/queen-endgames/queen-vs-pawn', '8ac'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/endgames/queen-endgames/queen-vs-rook',
                component: ComponentCreator('/endgames/queen-endgames/queen-vs-rook', '3d6'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/endgames/reference/books',
                component: ComponentCreator('/endgames/reference/books', '855'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/endgames/reference/glossary',
                component: ComponentCreator('/endgames/reference/glossary', 'bf5'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/endgames/reference/tablebase-guide',
                component: ComponentCreator('/endgames/reference/tablebase-guide', '15a'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/endgames/rook-endgames/active-rook',
                component: ComponentCreator('/endgames/rook-endgames/active-rook', '84a'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/endgames/rook-endgames/lucena-position',
                component: ComponentCreator('/endgames/rook-endgames/lucena-position', '628'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/endgames/rook-endgames/philidor-position',
                component: ComponentCreator('/endgames/rook-endgames/philidor-position', '781'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/endgames/rook-endgames/principles',
                component: ComponentCreator('/endgames/rook-endgames/principles', 'c62'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/endgames/rook-endgames/rook-pawn-vs-rook',
                component: ComponentCreator('/endgames/rook-endgames/rook-pawn-vs-rook', 'f74'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/endgames/rook-endgames/rook-vs-pawn',
                component: ComponentCreator('/endgames/rook-endgames/rook-vs-pawn', 'eff'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/endgames/strategic-themes/do-not-hurry',
                component: ComponentCreator('/endgames/strategic-themes/do-not-hurry', '900'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/endgames/strategic-themes/fortresses',
                component: ComponentCreator('/endgames/strategic-themes/fortresses', '035'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/endgames/strategic-themes/overview',
                component: ComponentCreator('/endgames/strategic-themes/overview', 'd5c'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/endgames/strategic-themes/principle-of-two-weaknesses',
                component: ComponentCreator('/endgames/strategic-themes/principle-of-two-weaknesses', 'e90'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/endgames/strategic-themes/stalemate-resources',
                component: ComponentCreator('/endgames/strategic-themes/stalemate-resources', '145'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/endgames/strategic-themes/zugzwang',
                component: ComponentCreator('/endgames/strategic-themes/zugzwang', 'ea6'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/endgames/study-paths/advanced',
                component: ComponentCreator('/endgames/study-paths/advanced', 'c1f'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/endgames/study-paths/beginner',
                component: ComponentCreator('/endgames/study-paths/beginner', '732'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/endgames/study-paths/intermediate',
                component: ComponentCreator('/endgames/study-paths/intermediate', '5de'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/endgames/study-paths/overview',
                component: ComponentCreator('/endgames/study-paths/overview', '630'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/endgames/',
                component: ComponentCreator('/endgames/', '471'),
                exact: true
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
