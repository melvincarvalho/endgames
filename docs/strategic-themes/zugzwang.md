---
sidebar_position: 2
title: Zugzwang
description: When any move loses
---

import ChessBoard from '@site/src/components/ChessBoard';

# Zugzwang

<span className="badge badge--intermediate">Intermediate</span>
<span className="badge badge--must-know">Must Know</span>

**Zugzwang** (German: "compulsion to move") is a situation where a player would prefer to pass, but must make a move that worsens their position.

## The Concept

In most chess positions, having the move is an advantage. But in zugzwang, having the move is a **disadvantage**—every legal move makes things worse.

## Classic Example

<ChessBoard fen="8/8/8/4k3/8/4K3/4P3/8 w - - 0 1" />

White to move: **1.Kd3? Kd5!** — Black takes opposition, draws.

But if Black had to move:
- **1...Kd5 2.Kf4!** — White flanks and wins
- **1...Kf5 2.Kd4!** — Same idea

The player who must move loses.

## Mutual Zugzwang

When BOTH players would be worse off moving, it's called **mutual zugzwang**.

<ChessBoard fen="8/8/8/2k5/3p4/3K4/3P4/8 w - - 0 1" />

- White to move loses: **1.Kc3 Kd5** (or similar) — Black wins the pawn race
- Black to move loses: **1...Kd5 2.Kb4** — White wins the d4 pawn

This is why [triangulation](/pawn-endgames/triangulation) is so powerful—it transfers the move to the opponent.

## Recognizing Zugzwang

Look for these signs:

1. **Piece-limited positions** — Few pieces, limited mobility
2. **Optimal placement** — All pieces are on their best squares
3. **No useful waiting moves** — Every move worsens something

## Creating Zugzwang

### With Triangulation

<ChessBoard fen="8/8/8/1k6/1P6/1K6/8/8 w - - 0 1" />

White wants Black to move. **1.Kc3!** (triangulating)

**1...Ka4** forced. **2.Kc4!** — Now Black is in zugzwang.

**2...Ka5 3.Kc5 Ka4 4.Kb6** — White wins.

### With a Passed Pawn

<ChessBoard fen="8/8/8/2kp4/8/2KP4/8/8 w - - 0 1" />

**1.Kd2!** — White "wastes" a tempo.

**1...Kd6** (Black must guard d5) **2.Ke3 Ke5 3.Kf3!**

Now **3...Kf5 4.d4** — White breaks through.

## Famous Zugzwang Positions

### The Trebuchet

<ChessBoard fen="8/8/8/1p1k4/1P6/3K4/8/8 w - - 0 1" />

Pure mutual zugzwang. Whoever moves must give way:
- **1.Ke3 Ke4** or **1.Kc3 Kc4** — Black wins
- **1...Ke4 2.Kc4** or **1...Kc4 2.Ke4** — White wins

### Reti-like Zugzwang

<ChessBoard fen="6k1/5ppp/8/8/8/8/5PPP/6K1 w - - 0 1" />

After some maneuvering, positions arise where one side must weaken their pawn structure.

## Zugzwang in Practice

### Not Just King Endgames

Zugzwang occurs with pieces too:

<ChessBoard fen="5k2/5P2/5K2/8/8/8/8/r7 w - - 0 1" />

Black's rook must guard f8. **1.Ke6!** — Zugzwang!

**1...Ra8 2.f8=Q+** or **1...Ra6+ 2.Ke7 Ra7+ 3.Ke8** — The rook runs out of checks.

### Breaking Fortress with Zugzwang

<ChessBoard fen="8/5pk1/6p1/5P2/4K3/8/8/8 w - - 0 1" />

Direct **1.fxg6? fxg6** is drawn. But:

**1.Ke5!** — Threatens f6 and Kf6.

**1...gxf5** (forced to break) **2.Kxf5** — Now White wins the f-pawn.

## Exercises

### Exercise 1

<ChessBoard fen="8/8/8/8/3pk3/8/3K4/8 w - - 0 1" />

Is this zugzwang? Who wins?

<details>
<summary>Solution</summary>

Yes, mutual zugzwang!

- White to move: **1.Ke2 Ke5** (opposition) — Draw
- Black to move: **1...Kf4 2.Kd3 Kf3 3.Kxd4** — White wins

</details>

### Exercise 2

<ChessBoard fen="8/6k1/6P1/6K1/8/8/8/8 w - - 0 1" />

White to move. How to win?

<details>
<summary>Solution</summary>

**1.Kf5!** — Zugzwang!

**1...Kf8 2.Kf6 Kg8 3.g7 Kh7 4.Kf7** — Promotion.

Or **1...Kh6 2.Kf6 Kh7 3.g7** — Same.

</details>

## Summary

1. **Zugzwang** = being forced to make a losing move
2. **Mutual zugzwang** = whoever moves loses
3. **Common in endgames** = fewer pieces, less flexibility
4. **Create it** = through triangulation or tempo moves
5. **Recognize it** = optimal positions where any change is bad
