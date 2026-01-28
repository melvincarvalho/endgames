---
sidebar_position: 2
title: Beginner Puzzles
description: Essential endgame puzzles for beginners
---

import PuzzleBoard from '@site/src/components/PuzzleBoard';

# Beginner Puzzles

<span className="badge badge--beginner">Beginner</span>

Master these fundamental positions before moving on. Each puzzle tests a critical endgame skill.

---

## King + Queen Checkmates

### Puzzle 1: Back Rank Mate

<PuzzleBoard
  fen="6k1/8/6K1/8/8/8/8/7Q w - - 0 1"
  solution={['h1h8']}
  title="Deliver Checkmate"
  description="White to move. Find the checkmate in one!"
  hint="Use the back rank."
/>

### Puzzle 2: Box Method Setup

<PuzzleBoard
  fen="8/8/8/3k4/8/8/8/K6Q w - - 0 1"
  solution={['h1d1', 'd5e5', 'd1d4']}
  title="Restrict the King"
  description="Start the box method - cut off the king's escape."
  hint="Use the queen to create a barrier."
/>

---

## King + Rook Checkmates

### Puzzle 3: Rook Mate

<PuzzleBoard
  fen="8/8/8/8/8/k7/8/KR6 w - - 0 1"
  solution={['b1b3']}
  title="Checkmate in One"
  description="White to move and checkmate."
  hint="The rook delivers mate with king support."
/>

### Puzzle 4: Pushing the King

<PuzzleBoard
  fen="8/8/8/8/3k4/8/8/KR6 w - - 0 1"
  solution={['b1b4', 'd4c3', 'a1b2']}
  title="Drive the King Back"
  description="Use your rook to push the enemy king to the edge."
  hint="Cut off ranks or files, then bring your king closer."
/>

---

## King + Pawn Endings

### Puzzle 5: Opposition Win

<PuzzleBoard
  fen="8/8/8/3k4/8/3PK3/8/8 w - - 0 1"
  solution={['e3e4', 'd5d6', 'e4e5']}
  title="Win with Opposition"
  description="White to move. Use opposition to promote the pawn."
  hint="Move your king forward to gain opposition."
/>

### Puzzle 6: Key Square

<PuzzleBoard
  fen="8/8/3k4/8/3PK3/8/8/8 w - - 0 1"
  solution={['e4e5', 'd6d7', 'e5d5']}
  title="Seize the Key Square"
  description="White to move. Reach a key square to guarantee promotion."
  hint="Key squares for a d-pawn on d4 are c6, d6, and e6."
/>

---

## Quick Mates

### Puzzle 7: Two Rooks Mate

<PuzzleBoard
  fen="6k1/8/8/8/8/8/R7/R3K3 w - - 0 1"
  solution={['a1a8']}
  title="Ladder Mate"
  description="Finish the ladder checkmate!"
  hint="Alternate rooks on ranks."
/>

### Puzzle 8: Queen + King Teamwork

<PuzzleBoard
  fen="7k/8/5K2/8/8/8/8/7Q w - - 0 1"
  solution={['h1h2', 'h8g8', 'h2h8']}
  title="Cornered King"
  description="Force checkmate in the corner."
  hint="Use queen checks to push the king, then deliver mate."
/>

---

## Progress Tracker

| Puzzle | Topic | Status |
|--------|-------|--------|
| 1 | Queen Back Rank | &#9744; |
| 2 | Box Method | &#9744; |
| 3 | Rook Mate | &#9744; |
| 4 | Pushing King | &#9744; |
| 5 | Opposition | &#9744; |
| 6 | Key Squares | &#9744; |
| 7 | Ladder Mate | &#9744; |
| 8 | Q+K Mate | &#9744; |

---

**Completed all puzzles?** Move on to [Intermediate Puzzles](/practice-puzzles/intermediate)!
