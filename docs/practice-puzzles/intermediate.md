---
sidebar_position: 3
title: Intermediate Puzzles
description: Rook endgame puzzles for intermediate players
---

import PuzzleBoard from '@site/src/components/PuzzleBoard';

# Intermediate Puzzles

<span className="badge badge--intermediate">Intermediate</span>

These puzzles test your knowledge of critical rook endgame techniques.

---

## Lucena Position

### Puzzle 1: Building the Bridge

<PuzzleBoard
  fen="1K6/5R2/8/8/8/8/1kp5/8 w - - 0 1"
  solution={['f7f2', 'b2c3', 'f2f4']}
  title="Lucena: Bridge Building"
  description="Build the famous bridge to shelter your king from checks."
  hint="Bring the rook to the 4th rank to create a shield."
  orientation="white"
/>

### Puzzle 2: King March

<PuzzleBoard
  fen="4K3/3PR3/8/8/8/8/3rk3/8 w - - 0 1"
  solution={['e8f7', 'e2f3', 'e7e4']}
  title="Lucena: Shelter the King"
  description="March your king out, using the rook as a shield."
  hint="Step forward with the king, then prepare the rook shield."
  orientation="white"
/>

---

## Philidor Position

### Puzzle 3: Third Rank Defense

<PuzzleBoard
  fen="8/8/8/8/3Pk3/8/3K4/r7 b - - 0 1"
  solution={['a1a6']}
  title="Philidor: Cut Off the King"
  description="Black to move. Establish the drawing setup."
  hint="Place your rook on the 6th rank to prevent king advancement."
  orientation="black"
/>

### Puzzle 4: Checking from Behind

<PuzzleBoard
  fen="8/3P4/3K4/8/4k3/8/8/r7 b - - 0 1"
  solution={['a1a8', 'd6c7', 'a8a7', 'c7c8', 'a7a8']}
  title="Philidor: Perpetual Checks"
  description="Black draws with checks from behind."
  hint="Once the pawn advances, switch to checking from behind."
  orientation="black"
/>

---

## Rook Activity

### Puzzle 5: Active Rook

<PuzzleBoard
  fen="8/8/4k3/r7/R7/4K3/4P3/8 w - - 0 1"
  solution={['a4a6', 'e6e5', 'a6a5']}
  title="Activate Your Rook"
  description="Use your rook actively to tie down the enemy king."
  hint="Cut off the king with your rook."
/>

### Puzzle 6: Rook Behind Passer

<PuzzleBoard
  fen="8/8/8/k7/8/1P6/8/1R2K3 w - - 0 1"
  solution={['b1b2', 'a5a4', 'e1d2']}
  title="Rook Behind the Pawn"
  description="The golden rule: place your rook behind passed pawns."
  hint="Support the pawn from behind, then advance your king."
/>

---

## Tactical Motifs

### Puzzle 7: Back Rank Threat

<PuzzleBoard
  fen="8/5pk1/5Rp1/8/6PP/8/6K1/1r6 w - - 0 1"
  solution={['f6a6', 'b1b2', 'g2f3']}
  title="Use the Back Rank"
  description="The threat of mate creates winning chances."
  hint="Threaten the back rank to gain freedom."
/>

### Puzzle 8: Skewer

<PuzzleBoard
  fen="8/8/8/8/8/R4k2/5r2/5K2 w - - 0 1"
  solution={['a3a8', 'f2f7', 'a8f8']}
  title="Rook Skewer"
  description="Use a skewer to win material."
  hint="Check the king and win the rook."
/>

---

## Progress Tracker

| Puzzle | Topic | Status |
|--------|-------|--------|
| 1 | Lucena Bridge | &#9744; |
| 2 | Lucena King March | &#9744; |
| 3 | Philidor 3rd Rank | &#9744; |
| 4 | Philidor Checks | &#9744; |
| 5 | Active Rook | &#9744; |
| 6 | Rook Behind PP | &#9744; |
| 7 | Back Rank | &#9744; |
| 8 | Skewer | &#9744; |

---

**Ready for more?** Try [Checkmate Patterns](./checkmate-patterns)!
