---
sidebar_position: 4
title: Stalemate Resources
description: Saving lost positions through stalemate
---

import ChessBoard from '@site/src/components/ChessBoard';

# Stalemate Resources

<span className="badge badge--intermediate">Intermediate</span>

When losing badly, stalemate may be your only hope. Many "lost" positions can be saved by creative stalemate tricks.

## What Is Stalemate?

Stalemate occurs when a player:
1. Is NOT in check
2. Has NO legal moves

Result: **Draw**

## Basic Stalemate Patterns

### King in the Corner

<ChessBoard fen="7k/8/6K1/5Q2/8/8/8/8 w - - 0 1" />

White is winning (K+Q vs K), but must take care. With the king on g6 covering g7 and h7, the only escape left is g8.

**Qf7??** = **Stalemate!** The queen covers g8 (along the f7–g8 diagonal) without checking h8 — Black has no move and isn't in check.

Correct: **Qf8#** — the same idea, but now the queen checks along the 8th rank. Always ask whether your "winning" move leaves the enemy stalemated.

### Piece Sacrifice for Stalemate

<ChessBoard fen="7k/5K2/4Q3/8/8/8/8/6r1 b - - 0 1" />

Black is lost — but the king is boxed in by White's king (g8, g7 covered) and queen (h7 covered).

**1...Rg6+!!** — Offering the rook with check.

**2.Qxg6** = **Stalemate!** With the rook gone and the queen now on g6 (covering h7), Black has no legal move. Black gave away the rook to draw.

## Stalemate Traps

### The Deliberate Pin

<ChessBoard fen="R7/8/8/8/8/8/p7/k1K5 b - - 0 1" />

Black is down a whole rook, but look closely: the king is cornered on a1 (b1 and b2 covered by White's king), and the a2-pawn is **pinned** to the king by the rook on a8 — it cannot move.

Black has no legal move and isn't in check: **stalemate**, a draw.

## Throwing Away Material — When It Fails

<ChessBoard fen="4k3/8/2K5/8/8/8/8/7Q w - - 0 1" />

White wins easily here (K+Q vs K). Sacrificing for stalemate only works if the king is truly trapped — otherwise it just loses faster:

<ChessBoard fen="4k3/8/2K5/8/8/8/8/r6Q b - - 0 1" />

Black tries: **1...Ra6+ 2.Kb5 Ra5+ 3.Kxa5** — but this is **not** stalemate: Black's king still has d7, d8, e7, f7 and f8. The sacrifice only throws away the rook.

The lesson: a stalemate sacrifice needs the king already boxed in.

## Positional Stalemate

### King Trapped by Own Pawns

<ChessBoard fen="5k2/5P2/5K2/8/8/8/8/8 b - - 0 1" />

**Black to move — stalemate!** The pawn covers e8 and g8, White's king covers e7 and g7, and f8 is the king's own square. This is the trap the *winning* side must avoid.

To win the same material, keep the king on the right square first:

<ChessBoard fen="5k2/8/4KP2/8/8/8/8/8 w - - 0 1" />

**1.f7!** — With the king on **e6** (not f6), Black's king has the g7-square. **1...Kg7 2.Ke7** and the pawn promotes. No stalemate.

### Pawn Barriers

<ChessBoard fen="8/5pkp/6p1/8/8/5PPK/7P/8 w - - 0 1" />

White would like to break through, but the pawn structure is a fortress — **the position is a draw**. Pushing pawns to force matters only helps Black liquidate into a dead-drawn (and sometimes stalemated) ending. Sometimes the right plan is to make no progress at all.

## Stalemate in Queen Endgames

<ChessBoard fen="7K/8/8/8/8/5Q2/p7/k7 b - - 0 1" />

A queen normally crushes a lone pawn — but **not a rook-pawn (or bishop-pawn) when the attacking king is too far away**. Here Black's king shelters on a1 in front of the a2-pawn. Every time the queen comes close enough to control b1, Black is **stalemated** unless White concedes the draw. With the king on h8, White cannot arrive in time: **it's a draw.**

(If White's king were near the corner, the queen *would* win — the draw depends entirely on the king's distance.)

## For the Winning Side: Avoiding Stalemate

### Always Check Escapes

Before every move, ask: **"Does my opponent have any legal move?"**

### Common Stalemate Blunders

1. **King in the corner + a quiet queen move** — the most common (see above)
2. **Capturing the opponent's last mobile piece** — check for stalemate *before* you take
3. **Pushing a pawn that removes the enemy's only move**

## Exercises

### Exercise 1

<ChessBoard fen="8/6R1/7p/5k2/8/8/8/4K3 w - - 0 1" />

Black to move. Can Black find stalemate chances?

<details>
<summary>Solution</summary>

Probably not enough — but it's worth trying. **1...Kf4** heads toward the corner, hoping White gets careless when grabbing the h6-pawn.

The defender's job in a lost position: steer toward positions where one careless capture or pawn push could stalemate you.

</details>

### Exercise 2

<ChessBoard fen="7k/5R1P/8/8/8/8/8/6K1 w - - 0 1" />

White to move and win — carefully!

<details>
<summary>Solution</summary>

Black's king is already nearly stalemated (g7 is covered by the rook, g8 by the h7-pawn, h7 is defended). A **quiet move loses the win**:

**1.Kg2??** = **Stalemate!** Black has no legal move.

Instead, **give a check**: **1.Rf8+! Kg7 2.h8=Q+** and White is up a queen and rook. When the enemy king has no moves, you must check, not wait.

</details>

### Exercise 3

<ChessBoard fen="7k/4Q3/8/8/8/8/8/4K3 w - - 0 1" />

White to move. Find the win without stalemating.

<details>
<summary>Solution</summary>

The queen alone can only stalemate the cornered king — **the king must help**.

**1.Kf2! Kg8 2.Ke3 Kh8 3.Ke4** — White marches the king toward the corner. Once it reaches the 6th rank, White mates (checkmate in six from the start). At every move, confirm Black still has a legal reply.

</details>

## Summary

1. **Stalemate** = no legal moves, not in check, = draw
2. **Sacrifice material** = give away pieces *only when the king is already boxed in*
3. **Pin or trap** = a pinned pawn or a cornered king can produce stalemate
4. **Rook-pawn + distant king** = even a queen may only draw
5. **For the attacker** = always verify the opponent has a legal move — especially with the king in the corner
