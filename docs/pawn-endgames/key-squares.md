---
sidebar_position: 9
title: Key Squares
description: The fundamental concept behind pawn promotion
---

import ChessBoard from '@site/src/components/ChessBoard';

# Key Squares

<span className="badge badge--intermediate">Intermediate</span>
<span className="badge badge--must-know">Must Know</span>

> "Opposition and such are merely tools to get to the key squares." — Fundamental endgame principle

Key squares are the **real goal** in king and pawn endgames. Opposition is just a means to reach them.

## What Are Key Squares?

Key squares are squares that, if the attacking king reaches them, **guarantee pawn promotion** regardless of where the defending king stands.

<ChessBoard fen="8/8/8/8/3PK3/8/5k2/8 w - - 0 1" />

For this d4-pawn, the key squares are **c6, d6, and e6**. If White's king reaches any of these squares, the pawn promotes by force.

## Key Squares by Pawn Position

### Pawns on 2nd-4th Rank

For pawns that haven't crossed the middle of the board, there are **3 key squares**, located **two ranks ahead** of the pawn.

<ChessBoard fen="8/8/8/2KPK3/3*3/8/5k2/8 w - - 0 1" />

**d2-pawn**: Key squares are c4, d4, e4
**d3-pawn**: Key squares are c5, d5, e5
**d4-pawn**: Key squares are c6, d6, e6

### Pawns on 5th Rank

Once the pawn reaches the 5th rank, there are **6 key squares** on two ranks.

<ChessBoard fen="8/8/2KKK3/2KPK3/8/8/5k2/8 w - - 0 1" />

**d5-pawn**: Key squares are c6, d6, e6, c7, d7, e7

### Pawns on 6th Rank

<ChessBoard fen="8/2KKK3/2KPK3/8/8/8/5k2/8 w - - 0 1" />

**d6-pawn**: Key squares are c7, d7, e7, c8, d8, e8

### Pawns on 7th Rank

For a pawn on the 7th rank, the key squares are the three squares touching the promotion square.

<ChessBoard fen="2KKK3/3P4/8/8/8/8/5k2/8 w - - 0 1" />

**d7-pawn**: Key squares are c8, d8, e8

## Rook Pawns Are Special

Rook pawns (a and h files) have only **2 key squares** because one side is blocked by the edge of the board.

<ChessBoard fen="8/8/KK6/P7/8/8/5k2/8 w - - 0 1" />

**a5-pawn**: Key squares are only a7 and b7 (not c7—too far).

This is why rook pawns are harder to promote and have many drawing resources.

## Using Key Squares in Practice

### Example 1: Reaching the Key Square

<ChessBoard fen="8/8/8/8/3P4/8/3K2k1/8 w - - 0 1" />

White needs to reach c6, d6, or e6. The path:

**1.Ke3!** — Heading for the key squares.

**1...Kf7 2.Kd3** (not rushing the pawn) **2...Ke6 3.Kc4!**

**3...Kd6 4.d5!** — Now White has the opposition with the pawn on the 5th rank.

**4...Kd7 5.Kc5** — Key square reached! The pawn promotes.

### Example 2: Defending Against Key Squares

<ChessBoard fen="8/8/3k4/8/3PK3/8/8/8 b - - 0 1" />

Black must prevent White from reaching c6, d6, or e6.

**1...Kc6!** — Occupying a key square first!

**2.Ke5 Kd7!** — Maintaining opposition.

**3.d5 Kd8! 4.Kd6** — Stalemate threat forces...

**4.d6 Kd8 5.Ke6 Ke8 6.d7+ Kd8 7.Kd6** — Stalemate! Draw.

## Opposition vs Key Squares

Opposition is valuable because it **helps reach key squares**. But key squares are the fundamental concept.

<ChessBoard fen="8/8/8/3k4/8/3PK3/8/8 w - - 0 1" />

White has the opposition. Why does it matter? Because it helps reach d5 (key square):

**1.Ke4 Ke6 2.d4 Kd6 3.Kf5!** — Outflanking.

**3...Kd7 4.Ke5 Ke7 5.d5 Kd7 6.d6!** — White wins.

The opposition was the tool; reaching key squares was the goal.

## Key Squares with Multiple Pawns

With more pawns, the concept extends. The key squares become the squares that allow your king to either:
- Support pawn promotion, or
- Win enemy pawns

<ChessBoard fen="8/8/5k2/3p4/3P4/3K4/8/8 w - - 0 1" />

The key squares here are c5 and e5 — squares that outflank Black's defense of d5.

**1.Ke4! Ke6 2.Kf4!** — Threatening Ke5.

**2...Kd6 3.Kf5 Kd7 4.Ke5** — Key square reached. White wins the d5-pawn.

## Exercises

### Exercise 1

<ChessBoard fen="8/8/8/8/8/4P3/4K3/1k6 w - - 0 1" />

What are the key squares for the e3-pawn?

<details>
<summary>Solution</summary>

**d5, e5, and f5.**

Key squares are two ranks ahead of pawns on ranks 2-4. The e3-pawn's key squares are on the 5th rank: d5, e5, f5.

White wins with **1.Kf3! Kd2 2.Kf4 Ke2 3.Ke4** (reaching a key square vicinity) and eventually reaching d5, e5, or f5.

</details>

### Exercise 2

<ChessBoard fen="8/5k2/8/4K3/4P3/8/8/8 w - - 0 1" />

White to move. Can White reach a key square?

<details>
<summary>Solution</summary>

**Yes!** The key squares for e4 are d6, e6, f6.

**1.Kd6!** — Directly to a key square.

**1...Ke8 2.e5 Kf7 3.e6+ Ke8 4.e7** — And promotes.

White's king was already close enough to seize a key square immediately.

</details>

### Exercise 3

<ChessBoard fen="8/8/8/p7/k7/8/1K6/8 w - - 0 1" />

What are the key squares for Black's a5-pawn? Can Black reach them?

<details>
<summary>Solution</summary>

**Key squares: a3 and b3** (rook pawns have only 2 key squares).

Black's king is on a4. Can it reach a3 or b3?

**1...Kb4?? 2.Ka2!** — White gets opposition.

**1...a4! 2.Ka2 Kb4 3.Kb2 a3+ 4.Ka2 Ka4** — Now **5.Ka1 Kb3!** — Key square reached! **6.Kb1 a2+ 7.Ka1 Ka3** — Stalemate? No! **7...Kc2** and **8...a1=Q**.

Actually the correct winning method requires precision. The point is that reaching key squares a3/b3 wins.

</details>

### Exercise 4

<ChessBoard fen="8/3k4/8/3PK3/8/8/8/8 w - - 0 1" />

What are the key squares for the d5-pawn? Does White already occupy one?

<details>
<summary>Solution</summary>

**Key squares: c6, d6, e6, c7, d7, e7** (6 squares for a 5th-rank pawn).

White's king is on e5 — **not** a key square (it's on the 5th rank with the pawn, not ahead of it).

**1.Ke6?** would be check/stalemate issues. Better:

**1.d6! Ke8 2.Ke6** — Now e6 is effectively a key square because the pawn is on d6.

**2...Kd8 3.d7 Kc7 4.Ke7** — White wins.

The key squares shift as the pawn advances!

</details>

## Summary

1. **Key squares** — The squares that guarantee promotion if the king reaches them
2. **3 key squares** — For pawns on ranks 2-4, two ranks ahead
3. **6 key squares** — For pawns on ranks 5-6, on two ranks ahead
4. **Rook pawns** — Only 2 key squares (edge of board)
5. **Opposition is a tool** — Key squares are the goal
6. **Squares shift** — As the pawn advances, key squares change
