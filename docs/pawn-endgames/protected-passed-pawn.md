---
sidebar_position: 11
title: Protected Passed Pawn
description: More than half a victory
---

import ChessBoard from '@site/src/components/ChessBoard';

# Protected Passed Pawn

<span className="badge badge--intermediate">Intermediate</span>
<span className="badge badge--must-know">Must Know</span>

> "A protected passed pawn is more than half a victory." — Aron Nimzowitsch

A **protected passed pawn** is a passed pawn defended by another pawn. It's one of the most powerful advantages in chess endgames.

## What Makes It Special

<ChessBoard fen="8/8/8/3Pp3/3P4/8/5k2/2K5 w - - 0 1" />

The d5-pawn is a **protected passed pawn**:
- It's passed (no enemy pawn can block or capture it)
- It's protected by the d4-pawn

### Key Properties

1. **Cannot be captured by the king** — The protecting pawn guards it
2. **Ties down enemy pieces** — Must be constantly watched
3. **Frees your king** — Your king can attack elsewhere
4. **Promotion threat** — Always looming

## The Basic Winning Technique

<ChessBoard fen="8/8/4k3/3Pp3/3P4/8/8/4K3 w - - 0 1" />

Black's king is tied to stopping d5. White's king is free:

**1.Kd2 Kd6 2.Kc3 Kc7 3.Kb4!** — Heading for the e5-pawn.

**3...Kd6 4.Kb5 Kd7 5.Kc5** — Now threatening both d6 and Kxe5.

**5...Kc7 6.Kxe5 Kd7 7.Kf6** — White wins.

The protected passed pawn occupied Black's king while White's king invaded.

## Creating a Protected Passed Pawn

### Method 1: Pawn Sacrifice

<ChessBoard fen="8/8/4k3/2p5/1pPp4/1P1P4/8/4K3 w - - 0 1" />

**1.c5!** — Sacrificing to create a protected passer.

**1...bxc5** (if **1...Kxc5 2.bxc4** wins the d4-pawn)

**2.b4! cxb4 3.d4** — Now d4 is a protected passed pawn!

### Method 2: Pawn Exchange

<ChessBoard fen="8/3k4/8/2pP4/2P5/8/8/4K3 w - - 0 1" />

**1.d6!** — Not taking.

**1...Kxd6 2.Kd2 Kd7 3.Kc3 Kc6 4.Kd4** — White wins the c5-pawn and the game.

If **1...Kc8 2.Kd2 Kd7 3.Kc3 Kxd6 4.Kd4** — Same result.

The passed pawn forced a winning king position.

## Protected Passed Pawn vs King + Pawn

<ChessBoard fen="8/8/3k4/3Pp3/3P4/8/6p1/6K1 w - - 0 1" />

Both sides have passed pawns. Who wins?

**1.Kxg2 Kxd5 2.Kf3 Kxd4 3.Ke2** — Draw (K+P vs K, Black's e-pawn).

Wrong approach! The protected passed pawn shouldn't be captured so easily.

**1.d6!! Kxd6 2.d5!** — Now White has a simple passed pawn, but Black's king is far.

**2...exd5?? 3.Kxg2** — White wins the pawn race!

Or **2...Kxd5 3.Kxg2 Ke4 4.Kf2** — Drawn, but better than losing.

The protected passer's real value: **tying down the enemy king**.

## The "Squeeze" Technique

<ChessBoard fen="8/8/4k3/p2Pp3/P2P4/8/6K1/8 w - - 0 1" />

White has a protected passed pawn on d5. The a-pawns are balanced.

**1.Kf3 Kf6 2.Ke4 Ke6 3.d6!** — Breaking through.

**3...Kxd6 4.Kxe5** — Now White's king dominates.

**4...Kc5 5.Ke6 Kb4 6.d5 Kxa4 7.d6** — White promotes first.

## When Protected Passed Pawns Don't Win

### Blocked Position

<ChessBoard fen="8/8/3k4/3Pp3/3Pp3/4P3/8/4K3 w - - 0 1" />

White has a protected passer, but the position is blocked. Neither side can make progress.

### Wrong Side of the Board

<ChessBoard fen="8/8/8/7p/3Pp2P/3P4/8/2K2k2 w - - 0 1" />

White's protected passer is on d4, but Black's king is on the kingside with a pawn. This could be a race that Black wins.

## Practical Guidelines

| Situation | Result |
|-----------|--------|
| Protected passer + active king | Usually winning |
| Protected passer vs distant pawn | Calculate the race |
| Protected passer in blocked position | May be drawn |
| Multiple protected passers | Decisive advantage |

## Exercises

### Exercise 1

<ChessBoard fen="8/8/2k5/2Pp4/3P4/8/5K2/8 w - - 0 1" />

White to move. How should White proceed?

<details>
<summary>Solution</summary>

**1.Ke3!** — King heads toward the d5-pawn.

**1...Kd6** (defending d5)

**2.Kd3 Kc6 3.Kc3 Kb5 4.Kb3!** — Threatening Ka4-Ka5-Kb6.

**4...Kc6 5.Ka4 Kd6 6.Kb5** — The protected passer on c5 allowed White's king to invade.

**6...Kc7 7.Kxd5** — Won.

</details>

### Exercise 2

<ChessBoard fen="8/8/8/1pp5/1Pp5/2P5/5k2/2K5 w - - 0 1" />

White to move. Create a protected passed pawn.

<details>
<summary>Solution</summary>

**1.c4!!** — The key break.

**1...bxc4** (forced, otherwise cxb5)

**2.b5!** — Now b5 is a protected passed pawn!

**2...Ke3 3.Kf1 Kd3 4.Ke1 Kc3 5.Kd1** — White holds the c4-pawn at bay.

The b5-pawn will eventually decide the game.

</details>

### Exercise 3

<ChessBoard fen="8/6k1/4p3/3pPp2/3P1P2/8/8/6K1 w - - 0 1" />

Evaluate the position. Does White's protected passed pawn win?

<details>
<summary>Solution</summary>

**Draw with correct play.**

White has a protected passer on e5, but the position is too blocked.

**1.Kf2 Kf7 2.Ke3 Ke7 3.Kd3 Kd7 4.Kc3 Kc7** — Neither king can break through.

If **5.Kb4 Kb6** — Black defends.

The pawns on both sides are fixed, creating a fortress.

</details>

### Exercise 4

<ChessBoard fen="8/8/8/2Ppk3/3P4/8/8/2K5 w - - 0 1" />

White to move. Find the winning plan.

<details>
<summary>Solution</summary>

**1.Kc2!** — Not rushing.

**1...Kd6 2.Kc3 Kc7 3.Kc4!** — Attacking d5.

**3...Kc6 4.d5+!** — The breakthrough.

**4...Kxc5** (if Kxd5, c6 and promotes)

**5.d6 Kc6 6.d7** — White promotes. Won.

The protected passer supported the breakthrough sacrifice.

</details>

## Summary

1. **Protected passed pawn** — Passed pawn defended by another pawn
2. **Cannot be captured** — The enemy king can't take it
3. **Ties down the opponent** — Their king must babysit
4. **Frees your king** — To attack elsewhere
5. **Winning technique** — Use king freedom to win other pawns
6. **"More than half a victory"** — Often decisive in practice
