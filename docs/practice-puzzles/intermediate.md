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
  fen="1K1k4/1P6/8/8/8/8/r7/5R2 w - - 0 1"
  solution={['f1d1', 'd8e7', 'd1d4']}
  title="Lucena: Bridge Building"
  description="Build the famous bridge to shelter your king from checks."
  hint="Bring the rook to the 4th rank to create a shield."
  orientation="white"
/>

### Puzzle 2: King March

<PuzzleBoard
  fen="2K5/2P5/4k3/8/8/8/r7/3R4 w - - 0 1"
  solution={['d1d4', 'a2c2', 'c8d8']}
  title="Lucena: Shelter the King"
  description="March your king out, using the rook as a shield."
  hint="Step forward with the king, then prepare the rook shield."
  orientation="white"
/>

---

## Philidor Position

### Puzzle 3: Third Rank Defense

<PuzzleBoard
  fen="4k3/r7/8/3KP3/8/8/8/1R6 b - - 0 1"
  solution={['a7a6', 'b1b8', 'e8d7']}
  title="Philidor: Cut Off the King"
  description="Black to move. Establish the drawing setup."
  hint="Place your rook on the 6th rank to prevent king advancement."
  orientation="black"
/>

### Puzzle 4: Checking from Behind

<PuzzleBoard
  fen="4k3/1R6/r3P3/3K4/8/8/8/8 b - - 0 1"
  solution={['a6a1', 'b7b8', 'e8e7']}
  title="Philidor: Perpetual Checks"
  description="Black draws with checks from behind."
  hint="Once the pawn advances, switch to checking from behind."
  orientation="black"
/>

---

## Rook Activity

### Puzzle 5: Active Rook

<PuzzleBoard
  fen="8/R7/8/4k3/8/8/4P3/r5K1 w - - 0 1"
  solution={['a7a1', 'e5d4', 'g1f2']}
  title="Activate Your Rook"
  description="Use your rook actively to tie down the enemy king."
  hint="Cut off the king with your rook."
/>

### Puzzle 6: Rook Behind Passer

<PuzzleBoard
  fen="r7/8/8/P7/8/8/4K1k1/R7 w - - 0 1"
  solution={['a5a6', 'a8e8', 'e2d3']}
  title="Rook Behind the Pawn"
  description="The golden rule: place your rook behind passed pawns."
  hint="Support the pawn from behind, then advance your king."
/>

---

## Tactical Motifs

### Puzzle 7: Back Rank Threat

<PuzzleBoard
  fen="6k1/5ppp/8/8/8/8/8/R5K1 w - - 0 1"
  solution={['a1a8']}
  title="Use the Back Rank"
  description="Black's king is boxed in by its own pawns — deliver mate on the back rank."
  hint="Threaten the back rank to gain freedom."
/>

### Puzzle 8: Skewer

<PuzzleBoard
  fen="8/8/8/2k3r1/8/8/8/R3K3 w - - 0 1"
  solution={['a1a5', 'c5d4', 'a5g5']}
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
