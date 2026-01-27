---
sidebar_position: 2
title: Queen vs Pawn
description: Stopping a pawn on the 7th rank
---

import ChessBoard from '@site/src/components/ChessBoard';

# Queen vs Pawn

<span className="badge badge--intermediate">Intermediate</span>
<span className="badge badge--must-know">Must Know</span>

Can a queen stop an advanced pawn? Usually yes—but the technique matters, and there are important exceptions.

## The Winning Technique

### Step 1: Give Checks to Approach

The queen uses checks to bring the king closer to the pawn.

<ChessBoard fen="8/1P6/8/8/8/2k5/8/4K2Q w - - 0 1" />

**1.Qc6+!** — Check, forcing the king to block.

**1...Kb2 2.Qb5+!** — Another check, coming closer.

**2...Kc2 3.Qa4+** — And again.

### Step 2: Pin or Win the Pawn

Eventually the queen reaches a position to either:
- Pin the pawn with the king approaching
- Win the pawn with a fork
- Force the king to block, allowing Kf2-e3-d4, etc.

<ChessBoard fen="8/1Pk5/8/8/Q7/8/5K2/8 w - - 0 1" />

**1.Qf4+!** (or many other checks) forcing **1...Kb6 2.Qb8!** — Pinning the pawn. Now White's king approaches.

## The Three Exceptions

There are three pawn types that can sometimes draw:

### 1. Rook Pawn (a or h file)

<ChessBoard fen="8/8/8/8/8/K7/p7/k7 b - - 0 1" />

**Draw!** The king can hide in the corner:

**1...Kb1 2.Qb4+ Ka1!** — The queen has no check that doesn't allow promotion or lead to stalemate.

### 2. Bishop Pawn (c or f file)

<ChessBoard fen="8/8/8/8/8/2K5/2p5/2k5 b - - 0 1" />

Black to move: **1...Kb1!** — Defending the pawn.

Now **2.Qb4+ Ka2! 3.Qc4+ Kb2!** — The king oscillates, and the checking distance is too short.

If **4.Qb4+ Kc1!** threatening c1=Q. The queen cannot prevent promotion without allowing stalemate.

**Draw!** (But only if the defending king reaches this ideal setup.)

### 3. Central Pawn in Specific Positions

Central pawns (d and e files) almost always lose—the queen has more checking room. But rare positions with stalemate can draw.

## Why Rook/Bishop Pawns Draw

The key is the **lack of checking distance**. With the king in front of these pawns and near the corner, the queen runs out of useful checks.

## Winning Against Exceptions

The winning side must prevent the king from reaching the "fortress" position:

<ChessBoard fen="8/8/8/8/K7/8/p7/4Q2k w - - 0 1" />

Here the king is too far. **1.Qe1+! Kh2 2.Qa1!** — Stopping promotion.

**2...Kg3 3.Kb3** — The king approaches, and White wins.

## Practical Guidelines

| Pawn Type | Position | Result |
|-----------|----------|--------|
| d/e pawn | Any | Queen wins |
| c/f pawn | King NOT in front | Queen wins |
| c/f pawn | King in front, near promotion | Draw |
| a/h pawn | King NOT in corner | Queen wins |
| a/h pawn | King in corner | Draw |

## Exercises

### Exercise 1

<ChessBoard fen="8/8/8/8/8/1K6/1p6/1k6 w - - 0 1" />

White to move. What's the result?

<details>
<summary>Solution</summary>

**Draw!** This is the bishop pawn exception.

The black king is perfectly placed. **1.Qc4+ Kb2 2.Qb4+ Ka1!** and White cannot prevent ...b1=Q without stalemate.

</details>

### Exercise 2

<ChessBoard fen="8/8/8/5K2/8/8/p7/k7 w - - 0 1" />

White to move. Can White win?

<details>
<summary>Solution</summary>

**Yes!** The black king is in the corner (good for Black), but White's king is close enough.

**1.Ke4! Kb1 2.Kd3 Kc1 3.Qf4+ Kb1 4.Qb4+ Ka1 5.Kc2** — White wins the pawn.

The key: White's king got close before Black could set up the fortress.

</details>

### Exercise 3

<ChessBoard fen="Q7/8/8/8/8/8/p4K2/k7 w - - 0 1" />

White to move. What's the result?

<details>
<summary>Solution</summary>

**White wins!**

**1.Qe4+** (or many other approaches) **1...Ka2 2.Qc2** — Not allowing ...Kb1.

**2...Ka1 3.Qc1+** — The king must leave. **3...Ka2 4.Qb2#** (or **4.Kf1** and wins the pawn).

</details>

## Summary

1. **Queen usually wins** — Use checks to bring the king closer
2. **Rook pawns** — Draw if king reaches the corner
3. **Bishop pawns** — Draw if king is perfectly placed in front
4. **Central pawns** — Always lose (queen has checking room)
5. **Prevent the fortress** — Win by keeping the king away from the safe zone
