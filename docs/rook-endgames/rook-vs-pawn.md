---
sidebar_position: 2
title: Rook vs Pawn
description: When the rook fights a lone pawn
---

import ChessBoard from '@site/src/components/ChessBoard';

# Rook vs Pawn

<span className="badge badge--intermediate">Intermediate</span>

Can a rook stop a passed pawn? Usually yes—but the technique matters, especially when the pawn is advanced.

## Basic Principle

The rook is overwhelmingly superior to a pawn. But when the pawn is on the 6th or 7th rank with king support, things get complicated.

## Rook Easily Wins

<ChessBoard fen="8/2R5/8/3p4/3k4/8/8/4K3 w - - 0 1" />

The pawn is on d5, far from promotion. The rook simply attacks from behind or the side, and the king cannot shelter the pawn.

**1.Rd7!** wins the pawn immediately.

## Critical: Pawn on 6th Rank

<ChessBoard fen="8/8/3p4/3k4/8/8/8/R3K3 w - - 0 1" />

Pawn on 6th, king supporting. White wins, but must be careful:

**1.Rd1!** — Attack from behind. After **1...Ke5 2.Ke2 Ke4 3.Rd4+ Ke3 4.Rxd6** — rook captures.

## Critical: Pawn on 7th Rank

This is where technique matters most.

### Winning Position

<ChessBoard fen="8/3p4/8/3k4/8/8/8/R3K3 w - - 0 1" />

**1.Rd1! Ke4 2.Ke2!** — Closing in.

**2...d5 3.Kd2!** — The rook + king box in the pawn.

The key: **cut off the king** from supporting the pawn.

### Drawing Position (for Black)

<ChessBoard fen="8/3pk3/8/8/8/8/8/R3K3 w - - 0 1" />

Black's king is **in front** of the pawn. This is the critical defensive formation.

**1.Rd1 Ke6!** — Black stays in front.

The rook cannot simultaneously stop the pawn AND drive away the king. This is often a draw.

## The "Long Side" Principle

The rook should attack from the **long side** of the board—the side with more space.

<ChessBoard fen="8/6pk/8/8/8/8/8/R3K3 w - - 0 1" />

Wrong: **Ra8?** — The king escapes checks via the g-file.

Right: **Ra1!** — Attack from the long side (a-file). After **1...Kg6 2.Rg1+ Kf6 3.Rf1+ Ke6 4.Re1+** — the king cannot escape the checks.

## Pawn on 7th with Adjacent King

<ChessBoard fen="8/5pk1/8/8/8/8/8/R6K w - - 0 1" />

The pawn is one square from promotion, king adjacent. This is **drawn** if Black plays correctly:

**1.Ra8 Kh7! 2.Ra7 Kg7!** — The king stays near the pawn.

White cannot make progress. The pawn blocks the rook's checking distance.

## The Rook Pawn Exception

Rook pawns (a/h files) are special because the king can hide in the corner.

<ChessBoard fen="k7/P7/8/8/8/8/8/R6K w - - 0 1" />

**Draw!** Black's king reaches a8. White's rook cannot drive it away without allowing ...Kxa7 or stalemate.

## Exercises

### Exercise 1

<ChessBoard fen="8/8/8/4p3/4k3/8/8/R3K3 w - - 0 1" />

White to move. Win the pawn.

<details>
<summary>Solution</summary>

**1.Ra4+! Kf5 2.Kf2!** (approaching)

Now if **2...e4 3.Ra5+ Ke6 4.Ke3** — The pawn is lost.

Or **2...Ke6 3.Ke3** — Same result.

</details>

### Exercise 2

<ChessBoard fen="8/1p6/1k6/8/8/8/8/R3K3 w - - 0 1" />

White to move. Can White win?

<details>
<summary>Solution</summary>

Yes! **1.Ra8!** (cutting off the king from above)

**1...b5 2.Kd2 Kb7 3.Ra5 b4 4.Kc2** — White's king approaches and the pawn falls.

Key: Attack from behind when the pawn is not yet on the 7th.

</details>

### Exercise 3

<ChessBoard fen="7k/7p/8/8/8/8/8/R6K w - - 0 1" />

White to move. What's the result?

<details>
<summary>Solution</summary>

**Draw!** This is the rook pawn exception.

**1.Ra8+ Kg7 2.Ra7+ Kh6 3.Ra8 Kg7** — The king oscillates between g7 and h6/h8.

White cannot make progress. **1.Kg2 Kg7 2.Kf3 Kf7** etc.—the king escapes but the position remains drawn.

</details>

## Summary

1. **Rook easily beats pawns** on the 5th rank or below
2. **Pawn on 6th**: Usually the rook wins with correct technique
3. **Pawn on 7th**: Depends on king position—king in front often draws
4. **Long side principle**: Attack from the side with more squares
5. **Rook pawn exception**: Often draws due to corner stalemate
