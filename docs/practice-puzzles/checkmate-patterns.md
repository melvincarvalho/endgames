---
sidebar_position: 4
title: Checkmate Patterns
description: Master essential checkmating patterns
---

import PuzzleBoard from '@site/src/components/PuzzleBoard';

# Checkmate Patterns

<span className="badge badge--advanced">Patterns</span>

These mating patterns appear constantly in endgames. Burn them into your memory!

---

## Two Bishops Mate

### Puzzle 1: Diagonal Squeeze

<PuzzleBoard
  fen="7k/5K2/6B1/8/8/8/3B4/8 w - - 0 1"
  solution={['d2c3']}
  title="Two Bishops Setup"
  description="The two bishops cover every escape square — deliver mate."
  hint="Create a diagonal barrier to restrict the king."
/>

### Puzzle 2: Corner Mate

<PuzzleBoard
  fen="k7/8/1K6/8/5B2/7B/8/8 w - - 0 1"
  solution={['h3g2']}
  title="Drive to the Corner"
  description="Force the king into the corner for mate."
  hint="Use both bishops to control key diagonals."
/>

---

## Bishop + Knight Mate

### Puzzle 3: Wrong Corner Trap

<PuzzleBoard
  fen="k7/2K5/8/8/8/8/2BN4/8 w - - 0 1"
  solution={['d2e4', 'a8a7', 'c2d3']}
  title="B+N Coordination"
  description="Start pushing the king toward the correct corner."
  hint="The king must be driven to the corner matching your bishop's color."
/>

### Puzzle 4: Knight Dance

<PuzzleBoard
  fen="7k/5K2/8/6N1/8/8/3B4/8 w - - 0 1"
  solution={['d2c3']}
  title="Knight Maneuver"
  description="The bishop and knight combine to mate the cornered king."
  hint="The knight needs to control key escape squares."
/>

---

## Queen Checkmates

### Puzzle 5: Staircase Mate

<PuzzleBoard
  fen="7k/8/6K1/8/8/8/8/1Q6 w - - 0 1"
  solution={['b1b8']}
  title="Staircase Pattern"
  description="Deliver mate using the staircase pattern."
  hint="Control the escape squares with your queen."
/>

### Puzzle 6: Kiss of Death

<PuzzleBoard
  fen="6k1/5ppp/8/8/8/8/5PPP/3Q2K1 w - - 0 1"
  solution={['d1d8']}
  title="Queen Infiltration"
  description="Infiltrate with the queen to create mating threats."
  hint="The queen is most powerful when close to the enemy king."
/>

---

## Rook + Minor Piece

### Puzzle 7: Rook + Bishop Mate

<PuzzleBoard
  fen="6k1/5ppp/8/8/1B6/8/5PPP/R5K1 w - - 0 1"
  solution={['a1a8']}
  title="R+B Coordination"
  description="Use the bishop to support the rook's attack."
  hint="The bishop controls key diagonal squares."
/>

### Puzzle 8: Rook + Knight Mate

<PuzzleBoard
  fen="2r3k1/8/8/5N2/8/8/8/R5K1 w - - 0 1"
  solution={['f5e7', 'g8f7', 'e7c8']}
  title="R+N Attack"
  description="Coordinate rook and knight for threats."
  hint="Knights are great at forking!"
/>

---

## Classic Patterns

### Puzzle 9: Anastasia's Mate

<PuzzleBoard
  fen="8/4N1pk/8/8/8/3R4/8/4K3 w - - 0 1"
  solution={['d3h3']}
  title="Anastasia Pattern"
  description="A knight and rook deliver this famous mate."
  hint="The knight restricts the king on the h-file."
/>

### Puzzle 10: Arabian Mate

<PuzzleBoard
  fen="7k/R7/5N2/8/8/8/6K1/8 w - - 0 1"
  solution={['a7h7']}
  title="Arabian Mate"
  description="The classic knight and rook checkmate."
  hint="The knight covers the escape square."
/>

---

## Progress Tracker

| Puzzle | Pattern | Status |
|--------|---------|--------|
| 1 | Two Bishops | &#9744; |
| 2 | Corner Mate | &#9744; |
| 3 | B+N Coord | &#9744; |
| 4 | Knight Dance | &#9744; |
| 5 | Staircase | &#9744; |
| 6 | Kiss of Death | &#9744; |
| 7 | R+B Mate | &#9744; |
| 8 | R+N Attack | &#9744; |
| 9 | Anastasia | &#9744; |
| 10 | Arabian | &#9744; |

---

**Congratulations!** You've completed all puzzle sets. Keep practicing to maintain your skills!

[Back to Puzzle Overview](./)
