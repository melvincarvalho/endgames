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

<ChessBoard fen="8/8/1p2k3/1P2p3/4P3/4K3/8/8 w - - 0 1" />

White's b5 pawn is an **outside passed pawn**—it's far from the e4/e5 pawn pair. Black's king must stop it, but that takes it far from the kingside.

## Why It's Powerful

The outside passed pawn creates a **two-front war**:

1. The enemy king must stop your passed pawn
2. Meanwhile, your king attacks pawns on the other side

The defender cannot be in two places at once.

## Classic Example

<ChessBoard fen="8/8/1p2k3/1P2p3/4P3/4K3/8/8 w - - 0 1" />

**1.Kd3!** — White's king heads toward the kingside pawns.

**1...Kd6** — Black guards the e-pawn but ignores the b-pawn.

**2.b6!** — The outside passer advances.

**2...Kc6 3.Ke3!** — White's king prepares to take e5 if Black captures b6.

**3...Kxb6 4.Kf4!** — Now White wins e5.

**4...Kc5 5.Kxe5** — White has won a pawn.

<ChessBoard fen="8/8/1p6/2k1K3/4P3/8/8/8 b - - 0 1" />

White's king is active, and the e4 pawn will advance to victory.

## The Decoy Mechanism

Think of the outside passed pawn as a **decoy**:

1. Push the outside pawn to force the king to chase it
2. Use the time to penetrate with your king
3. Capture the remaining pawns or create a second passer

## Calculating the Win

<ChessBoard fen="8/p7/P4k2/5p2/5P2/5K2/8/8 w - - 0 1" />

Count the tempi:
- Black's king needs ~5 moves to capture a6 and return
- White's king needs ~3 moves to capture f5

White wins the race: **1.Ke3 Ke6 2.Kd4 Kd6 3.Kc4!**

Now Black must choose: stop White's king or capture a6?

**3...Kxa6 4.Kd5 Kb5 5.Ke5** — White wins f5 and has a won king + pawn endgame.

## Creating an Outside Passed Pawn

Sometimes you must trade pawns to create the outside passer.

<ChessBoard fen="8/5k2/p1p5/P1P5/8/5K2/8/8 w - - 0 1" />

**1.c6!** — Sacrificing to create an outside passer.

**1...Kxc6 2.Ke4!** — Now the a-pawn is an outside passer, and White's king heads for Black's a-pawn.

## When It Doesn't Work

The outside passed pawn is not always winning:

### King Can Guard Both Sides

<ChessBoard fen="8/8/1p1k4/1P1p4/3P4/3K4/8/8 w - - 0 1" />

Here Black's king on d6 can guard both b6 and the d-pawns. The position is drawn.

### Pawns Too Close

<ChessBoard fen="8/8/2pk4/2Pp4/3P4/3K4/8/8 w - - 0 1" />

The c5 pawn is not "outside" enough—it's adjacent to the main pawns. Less decoy value.

## Exercises

### Exercise 1

<ChessBoard fen="8/8/1p2k3/1P6/6p1/6P1/6K1/8 w - - 0 1" />

White to move. Win with the outside passed pawn.

<details>
<summary>Solution</summary>

**1.Kf3!** (heading to the queenside)

**1...Kd6 2.Ke4 Kc5 3.b6!**

Now **3...Kxb6 4.Kf4** wins the g-pawn, or **3...Kc6 4.Kf4 Kxb6 5.Kxg4** and White wins.

</details>

### Exercise 2

<ChessBoard fen="8/p7/k7/P7/8/8/4Kp2/8 w - - 0 1" />

Can White win with the outside passed pawn?

<details>
<summary>Solution</summary>

No! Black's f-pawn is too close to promotion. After **1.Ke2 Kb5 2.Kxf2 Kxa5**, the game is drawn (a-pawn vs nothing, but king is close enough).

White must first deal with the f-pawn: **1.Kf1! Kb5 2.Kf2 Kxa5 3.Kf1!** (opposition) — but this is still drawn.

</details>

### Exercise 3

<ChessBoard fen="8/5k2/p7/P2p4/3P4/3K4/8/8 w - - 0 1" />

White to move. How does White win?

<details>
<summary>Solution</summary>

**1.Ke3!** (preparing to go kingside or queenside)

**1...Ke6 2.Kf4 Kd6 3.Kg5!** (heading for the a6 pawn)

**3...Kc6** (to protect a6) **4.Kf6! Kb5 5.Ke5** — White wins the d5 pawn.

Or **3...Kc5 4.Kf5! Kxd4 5.Ke6** — White wins the race (d-pawn vs a-pawn).

</details>

## Summary

1. **Outside passed pawn** = passed pawn far from the main action
2. **Decoy effect** = forces enemy king away, freeing your king
3. **Two-front war** = defender cannot be everywhere
4. **Key technique** = push the outside passer while your king invades
5. **Not always winning** = calculate whether the decoy gains enough time
