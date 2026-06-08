---
sidebar_position: 2
title: Queen vs Pawn
description: Stopping a pawn on the 7th rank
---

import ChessBoard from '@site/src/components/ChessBoard';

# Queen vs Pawn

<span className="badge badge--intermediate">Intermediate</span>
<span className="badge badge--must-know">Must Know</span>

Can a queen stop an advanced pawn? Usually yes — but the technique matters, and there are important exceptions.

## The Winning Technique

The queen alone cannot win — it must **bring its king to the pawn**. The method: check the enemy king so that it is forced to block its own pawn, which gives White a free tempo to march the king closer.

<ChessBoard fen="4K3/8/8/8/7Q/8/3p4/3k4 w - - 0 1" />

The black king shields its d2-pawn. White wins by repeatedly gaining tempi with checks and walking the king in:

**1.Kd7! Ke2 2.Qe4+ Kf2 3.Qd3** — pinning the pawn down. With the king approaching square by square, White rounds up the d-pawn and wins.

A central (d- or e-) pawn always loses this way: the queen has plenty of checking room.

## The Exceptions

Two pawn types can hold a draw **if the defending king is already next to the pawn near the promotion square** — the queen runs out of useful checks.

### Rook Pawn (a- or h-file)

<ChessBoard fen="7K/7Q/8/8/8/8/p7/k7 w - - 0 1" />

**Draw.** The black king shuffles a1–b2. Whenever it reaches a1 it threatens ...a1=Q, so White must keep checking — but the checks never gain a tempo:

**1.Kg7 Kb2 2.Qh2+ Kb1 3.Qg1+ Kb2** — no progress. White's king can never come closer, and forcing the king onto a1 only invites stalemate.

### Bishop Pawn (c- or f-file)

<ChessBoard fen="7K/8/8/8/3Q4/8/2p5/2k5 w - - 0 1" />

**Draw**, for the same reason. When White pins the pawn, ...Kc1 threatens ...c1=Q, and capturing the pawn stalemates the king in the corner:

**1.Qa1+ Kd2 2.Qa5+ Kd1 3.Qd5+ Kc1** — the king keeps slipping back to the c1/c2 fortress.

### Central Pawn (d- or e-file)

Central pawns **always lose** — the queen has the checking room to drive the king away and bring its own king in.

## Beating the Exception

The draws only work when the strong king is **far away**. If it is already close, even a rook-pawn falls:

<ChessBoard fen="7Q/8/8/8/8/2K5/p7/k7 w - - 0 1" />

With White's king on c3, the corner is no refuge: **1.Qh1#** — the king and queen combine to mate at once. The defender draws *only* if it reaches the fortress before the enemy king arrives.

## Practical Guidelines

| Pawn Type | Position | Result |
|-----------|----------|--------|
| d/e pawn | Any | Queen wins |
| c/f pawn | King NOT in front | Queen wins |
| c/f pawn | King in front, near promotion | Draw |
| a/h pawn | King NOT in corner | Queen wins |
| a/h pawn | King in corner, enemy king far | Draw |

## Exercises

### Exercise 1

<ChessBoard fen="7K/8/8/8/4Q3/8/2p5/2k5 w - - 0 1" />

White to move. What's the result?

<details>
<summary>Solution</summary>

**Draw.** This is the bishop-pawn exception: the black king sits in front of the c2-pawn near the corner.

**1.Qb4 Kd1 2.Qb3 Kd2** — White cannot make progress: pinning the pawn allows ...Kc1 with the promotion threat, and taking it stalemates. With White's king stuck on h8, it's a draw.

</details>

### Exercise 2

<ChessBoard fen="7K/8/8/8/8/5Q2/p7/k7 w - - 0 1" />

White to move. Can White win?

<details>
<summary>Solution</summary>

**No — draw.** Black already has the rook-pawn fortress (king on a1, pawn on a2), and White's king is all the way back on h8. The queen can check forever, but it can never gain the tempo to bring the king in. **Draw.**

</details>

### Exercise 3

<ChessBoard fen="Q7/8/8/8/8/8/p4K2/k7 w - - 0 1" />

White to move. What's the result?

<details>
<summary>Solution</summary>

**White wins.** Here the king is already close (f2), so the rook-pawn fortress fails.

**1.Ke2!** — marching in. Black cannot hold a1 *and* push the pawn; White's king arrives and White wins the pawn (or mates). It's the mirror of the "Beating the Exception" idea — proximity beats the fortress.

</details>

## Summary

1. **Queen usually wins** — but only by using checks to bring the *king* closer
2. **Rook pawns** — draw if the king reaches the corner before the enemy king
3. **Bishop pawns** — draw if the king sits in front near promotion
4. **Central pawns** — always lose (the queen has checking room)
5. **Proximity decides** — a close enemy king beats every fortress
