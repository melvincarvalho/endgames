---
sidebar_position: 8
title: Outside Passed Pawn
description: The decoy advantage
---

import ChessBoard from '@site/src/components/ChessBoard';

# Outside Passed Pawn

<span className="badge badge--intermediate">Intermediate</span>
<span className="badge badge--must-know">Must Know</span>

An outside passed pawn is a passed pawn far from the main pawn mass. It acts as a decoy, diverting the enemy king and allowing yours to win material elsewhere.

## The Concept

<ChessBoard fen="8/8/4k3/5p2/P3KP2/8/8/8 w - - 0 1" />

White's a4-pawn is an **outside passed pawn** — far away on the queenside, while the kings sit next to the locked f-pawns. Black's king must leave the kingside to stop it, and that decision loses the game.

## Why It's Powerful

The outside passed pawn creates a **two-front war**:

1. The enemy king must stop your passed pawn
2. Meanwhile, your king attacks pawns on the other side

The defender cannot be in two places at once.

## Classic Example

<ChessBoard fen="8/8/4k3/5p2/P3KP2/8/8/8 w - - 0 1" />

**1.Kd4!** — White's king heads for the queenside *and* the centre. **1...Kd6 2.a5 Kc6** — Black's king is dragged over to halt the runner.

**3.Ke5! Kb5 4.Kxf5** — While Black chews on the a-pawn, White's king grabs f5 and the kingside falls. White is winning.

## The Decoy Mechanism

Think of the outside passed pawn as a **decoy**:

1. Push the outside pawn to force the king to chase it
2. Use the time to penetrate with your king
3. Capture the remaining pawns or create a second passer

## Calculating the Win

<ChessBoard fen="8/8/5k2/P4p2/5P2/5K2/8/8 w - - 0 1" />

Sometimes the passer simply outruns the king. Count the moves with the **rule of the square**:

**1.a6 Ke7 2.a7 Kd6 3.a8=Q** — Black's king started too far away; the pawn queens by itself. Always check whether the enemy king is inside the pawn's "square" before relying on it.

## Creating an Outside Passed Pawn

Sometimes you must trade pawns to *create* the outside passer.

<ChessBoard fen="8/5k2/p7/P7/1P6/5K2/8/8 w - - 0 1" />

**1.b5! axb5 2.a6!** — The point: the b-pawn deflects Black's a-pawn off the a-file, and now White's a-pawn runs unopposed. **2...Ke6 3.Ke4** and the a-pawn promotes while Black's king is nowhere near.

## When It Doesn't Work

The outside passed pawn is not always winning.

### Rook Pawns and Counterplay

<ChessBoard fen="8/8/k7/P7/8/5K2/5p2/8 w - - 0 1" />

Here White's outside passer is a **rook pawn**, blockaded by Black's king, and Black has a dangerous f-pawn of his own. **1.Kxf2 Kxa5** — both passers fall and it's a **draw**. A rook-pawn decoy that the enemy king can simply blockade often isn't enough.

### Locked Pawns

<ChessBoard fen="8/8/3k4/1p1p4/1P1P4/3K4/8/8 w - - 0 1" />

When the pawns are fixed head-to-head, no one has a passer at all — neither king can break in. **A draw.** The decoy only works if the outside pawn is genuinely *passed* and far enough from the defending king.

## Exercises

### Exercise 1

<ChessBoard fen="8/8/4k3/1P4p1/6P1/5K2/8/8 w - - 0 1" />

White to move. Win with the outside passed pawn.

<details>
<summary>Solution</summary>

**1.Ke4!** — Heading for the g5-pawn, using the b-passer as bait.

**1...Kd7 2.Kf5 Kc7 3.Kxg5** — Black's king chases the b-pawn while White's king wins the kingside. White is winning.

</details>

### Exercise 2

<ChessBoard fen="8/8/k7/P7/8/5K2/5p2/8 w - - 0 1" />

Can White win with the outside passed pawn?

<details>
<summary>Solution</summary>

**No.** The a-pawn is a rook pawn that Black's king already blockades, and Black has counterplay with the f-pawn.

**1.Kxf2 Kxa5** — both pawns disappear and the bare kings draw. The "outside passer" never got going.

</details>

### Exercise 3

<ChessBoard fen="8/5k2/8/P2p4/3P4/3K4/8/8 w - - 0 1" />

White to move. How does White win?

<details>
<summary>Solution</summary>

**1.a6!** — The passer is far from Black's king on f7; it simply runs.

**1...Ke6 2.a7 Kd7 3.Kc3** — Black's king cannot catch the a-pawn and also hold d5. The pawn queens (or White wins d5). White is winning.

</details>

## Summary

1. **Outside passed pawn** = a *passed* pawn far from the main action
2. **Decoy effect** = forces the enemy king away, freeing your king
3. **Two-front war** = the defender cannot be everywhere
4. **Key technique** = push the outside passer while your king invades
5. **Not always winning** = a rook-pawn the king can blockade, or fully locked pawns, may only draw — count the tempi first

## Related topics

- [Protected passed pawn](/pawn-endgames/protected-passed-pawn)
- [Pawn races](/pawn-endgames/pawn-races)
- [Pawn majorities](/pawn-endgames/pawn-majorities)
