---
sidebar_position: 4
title: Advanced Opposition
description: Distant opposition, diagonal opposition, and corresponding squares
---

import ChessBoard from '@site/src/components/ChessBoard';

# Advanced Opposition

<span className="badge badge--intermediate">Intermediate</span>

Beyond basic opposition lies a world of distant opposition, diagonal opposition, and the theory of corresponding squares.

## Distant Opposition

When kings are separated by 3, 5, or 7 squares (odd numbers) on a rank, file, or diagonal, the player NOT to move has distant opposition.

<ChessBoard fen="8/8/8/4k3/8/8/8/4K3 w - - 0 1" />

Five squares separate the kings. White to move does NOT have the opposition. Black does.

### The Rule of Odd Squares

**Odd number of squares between kings = the player NOT to move has opposition.**

- 1 square: Direct opposition
- 3 squares: Distant opposition
- 5 squares: Distant opposition
- 7 squares: Distant opposition

### Using Distant Opposition

<ChessBoard fen="8/8/8/4k3/8/8/8/4K3 b - - 0 1" />

Black to move. White has distant opposition.

After **1...Kd5 2.Kd2!** (maintaining opposition with 3 squares)
Or **1...Ke4 2.Ke2!** (taking direct opposition)

White maintains the opposition throughout and eventually reaches a key square.

## Diagonal Opposition

Opposition also exists on diagonals.

<ChessBoard fen="8/8/8/5k2/8/3K4/8/8 w - - 0 1" />

The kings are diagonally opposed with one square between them. The player NOT to move has the advantage.

### Diagonal Distant Opposition

<ChessBoard fen="8/8/7k/8/8/8/8/K7 w - - 0 1" />

The kings are on the same diagonal (a1-h8) with an odd number of squares between. White to move does not have opposition.

## Rectangular Opposition

When the kings form a rectangle on the board, more complex rules apply. The key principle: the player who can "shrink the rectangle" while maintaining the same number of squares has the advantage.

<ChessBoard fen="8/5k2/8/8/8/8/2K5/8 w - - 0 1" />

The kings form a rectangle. White plays **Kd3!** moving toward the same file as Black's king.

## Corresponding Squares (Related Squares)

In complex pawn positions, specific squares "correspond" to each other. If one king stands on a square, the other king must occupy the corresponding square to maintain the position.

### Simple Example

<ChessBoard fen="8/8/4k3/3p4/3P4/4K3/8/8 w - - 0 1" />

With blocked pawns, certain squares correspond:
- e3 corresponds to e6
- d3 corresponds to d6
- f3 corresponds to f6

If White's king is on e3, Black's king must be on e6 to hold. If White reaches d3 when Black is on e6, White wins.

### Finding Corresponding Squares

1. Identify the key squares for the attacker
2. Work backward to find which squares the defender needs
3. Number the squares that correspond to each other

This is an advanced technique used in complex king and pawn endgames.

## The Trebuchet

A special mutual zugzwang position where whoever moves loses.

<ChessBoard fen="8/8/8/1p1k4/1P6/3K4/8/8 w - - 0 1" />

Whoever moves must give way, allowing the opponent's king to advance.

- White to move: **Kc3 Kc4** or **Ke3 Ke4** — Black wins
- Black to move: **Kc4 Kc4** or **Ke4 Ke4** — White wins

This is why gaining the opposition (putting your opponent in this situation) is so valuable.

## Practical Application

<ChessBoard fen="8/8/8/8/3pk3/8/3K4/8 w - - 0 1" />

White to move. How should White play?

**1.Ke2!** — Taking the opposition. Now:
- **1...Kd4 2.Kd2** — Maintaining opposition
- **1...Kf4 2.Kf2** — Maintaining opposition
- **1...Ke5 2.Ke3** — Maintaining opposition

White keeps the opposition and prevents Black's king from advancing.

## Exercises

### Exercise 1

<ChessBoard fen="8/8/8/8/4k3/8/8/3K4 w - - 0 1" />

White to move. Does White have the opposition?

<details>
<summary>Solution</summary>

No! There are 3 squares between the kings (e3, e2, e1/d2), and White must move. **Ke2!** takes the opposition. After ...Kd4, Kd2 maintains it.

</details>

### Exercise 2

<ChessBoard fen="8/8/8/k7/8/8/8/4K3 w - - 0 1" />

White to move. How does White take the diagonal opposition?

<details>
<summary>Solution</summary>

**Kd2!** — Now the kings are on the a5-d2 diagonal with 3 squares between. White has distant diagonal opposition.

</details>

## Summary

1. **Distant opposition**: Odd number of squares, player not moving has advantage
2. **Diagonal opposition**: Same principles apply on diagonals
3. **Corresponding squares**: Advanced technique for complex positions
4. **Trebuchet**: Mutual zugzwang where moving loses
5. **Practice**: The only way to internalize these concepts
