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

<ChessBoard fen="8/8/8/2Pp4/3P4/8/5k2/2K5 w - - 0 1" />

The c5-pawn is a **protected passed pawn**:
- It's passed (no enemy pawn can stop it on the b-, c-, or d-file)
- It's protected by the d4-pawn, which guards c5 *diagonally*

Because d4 covers c5, **Black's king can never capture the c5-pawn** — stepping onto c5 would walk straight into the d4-pawn.

### Key Properties

1. **Cannot be captured by the king** — The protecting pawn guards it
2. **Ties down enemy pieces** — Must be constantly watched
3. **Frees your king** — Your king can attack elsewhere
4. **Promotion threat** — Always looming

## The Basic Winning Technique

<ChessBoard fen="8/8/4k3/2Pp4/3P4/8/8/4K3 w - - 0 1" />

Black's king is tied to watching the c5-pawn. White's king is free to roam:

**1.Kf2 Kf6 2.Ke3** — White's king heads for the kingside. Black's king cannot both shadow it and guard the passer forever.

White is winning: the protected passer is a permanent asset that occupies Black while White's king creates a second front.

## Creating a Protected Passed Pawn

### Method 1: Advance a Phalanx

<ChessBoard fen="8/8/4k3/2p1p3/1PPP4/8/8/4K3 w - - 0 1" />

**1.d5!** — Advancing the centre pawn. Now the d5-pawn is **protected by c4** and passed — Black's king cannot touch it.

From here White's extra, untouchable passer decides the game.

### Method 2: A Free King

<ChessBoard fen="8/3k4/8/2pP4/2P5/8/8/4K3 w - - 0 1" />

Here the d5-pawn is already a protected passer (guarded by c4). It needs no babysitting:

**1.Ke2!** — White's king sets off for the kingside. Black's king is glued to the d5-pawn's promotion path, so White invades and wins on the other wing.

## Protected Passed Pawn vs King + Pawn

<ChessBoard fen="8/8/4k3/2Pp4/3P4/8/6p1/6K1 w - - 0 1" />

Both sides have an extra pawn — White the protected passer on c5, Black a runner on g2. Who wins?

**1.Kxg2!** — White scoops the runner. Now White's king is active **and** the protected c5-pawn still ties Black down — White is winning.

The lesson: the protected passer's real value is that it **shackles the enemy king**, freeing yours to decide matters elsewhere.

## The "Squeeze" Technique

<ChessBoard fen="8/8/4k3/p1Pp4/P2P4/8/6K1/8 w - - 0 1" />

White has a protected passer on c5 (the a-pawns are balanced).

**1.Kg3 Kf5 2.Kf3** — White manoeuvres the free king toward the queenside. With Black tied to c5, White outflanks and breaks through.

## When Protected Passed Pawns Don't Win

### Blocked Position

<ChessBoard fen="8/8/2k5/2Pp4/2pP4/8/8/4K3 w - - 0 1" />

White has a protected passer on c5, but the position is locked (Black's c4- and d5-pawns jam the structure) and neither king can break in.

**1.Kd2 Kd7 2.Kc3 Ke7 3.Kc2 Kd8** — Just shuffling; it's a draw. A protected passer is only decisive if your king can make progress *somewhere*.

### Wrong Side of the Board

<ChessBoard fen="8/8/8/7p/3Pp2P/2P5/8/2K2k2 w - - 0 1" />

White's protected passer (d4, guarded by c3) is far from the action, while Black's king and h-pawn fight on the kingside. A passer marooned on the wrong wing may not be enough — here Black's kingside counterplay holds the balance.

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

**1.Kf3!** — With Black's king tied to the c5-passer, White's king marches to the kingside.

**1...Kd7 2.Kf4 Ke6 3.Kg5** — White infiltrates and wins. The protected passer on c5 did its job: it pinned Black's king to one side of the board.

</details>

### Exercise 2

<ChessBoard fen="8/8/8/1pp5/1Pp5/2P5/5k2/2K5 w - - 0 1" />

White to move. Find the winning breakthrough.

<details>
<summary>Solution</summary>

**1.bxc5!** — The breakthrough. White wins a pawn, and the resulting passed c-pawn runs while Black's king is stuck on the kingside.

**1...Ke3 2.c6 Kf4 3.c7 Kg5 4.c8=Q** — White promotes. (Note that the natural-looking 1.c4 is impossible — c4 is occupied by Black's pawn.)

</details>

### Exercise 3

<ChessBoard fen="8/6k1/4p3/3pPp2/3P1P2/8/8/6K1 w - - 0 1" />

Evaluate the position. Does White's protected passed pawn win?

<details>
<summary>Solution</summary>

**Draw with correct play.**

White has a protected passer on e5 (guarded by d4 and f4), but the position is completely blocked.

**1.Kf2 Kf7 2.Ke3 Ke7 3.Kd3 Kd7 4.Kc3 Kc7** — Neither king can break through.

The pawns on both sides are fixed, creating a fortress.

</details>

### Exercise 4

<ChessBoard fen="8/8/4k3/2Pp4/3P4/8/8/2K5 w - - 0 1" />

White to move. Find the winning plan.

<details>
<summary>Solution</summary>

**1.Kc2!** — Not rushing. The c5-passer is guarded by d4 and Black's king is pinned to it, so White's king sets off:

**1...Kf5 2.Kc3 Ke6 3.Kb4 Kd7 4.Kb5** — White's king reaches the queenside and breaks through. The protected passer made the invasion possible.

</details>

## Summary

1. **Protected passed pawn** — A passed pawn defended diagonally by another pawn
2. **Cannot be captured** — The enemy king can't take it
3. **Ties down the opponent** — Their king must babysit it
4. **Frees your king** — The real value: your king roams while theirs is stuck
5. **Create one** — Advance a pawn phalanx or break to make a protected passer
6. **Limits** — Blocked positions or a passer on the wrong wing may only draw
