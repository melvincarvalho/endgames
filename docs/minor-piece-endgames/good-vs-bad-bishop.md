---
sidebar_position: 4
title: Good vs Bad Bishop
description: Evaluating bishop quality
---

import ChessBoard from '@site/src/components/ChessBoard';

# Good vs Bad Bishop

<span className="badge badge--intermediate">Intermediate</span>
<span className="badge badge--must-know">Must Know</span>

> "A bad bishop is not a bishop at all—it's a tall pawn." — Nimzowitsch

Understanding bishop quality is fundamental to endgame play.

## Definitions

### Good Bishop

A bishop is "good" when:
- Pawns are on the **opposite color**
- Diagonals are **open**
- The bishop has **active scope**

<ChessBoard fen="8/pp3k2/8/5p2/5P2/8/PP3K2/3B4 w - - 0 1" />

White's bishop is excellent—the white pawns (a2, b2, f4) are on dark squares, leaving the light-squared bishop free.

### Bad Bishop

A bishop is "bad" when:
- Pawns are on the **same color**
- Diagonals are **blocked**
- The bishop is **restricted**

<ChessBoard fen="8/pp3k2/4p3/3pPp2/3P1P2/8/PP3K2/3B4 w - - 0 1" />

Now White's bishop is terrible—blocked by pawns on d4, e5. It has almost no scope.

## The Impact of Bad Bishops

### Defensive Weakness

<ChessBoard fen="8/pp2k3/4p3/3pP3/3P4/8/PP3K2/3B4 w - - 0 1" />

White's bad bishop cannot defend the weak squares b3, c4, d3. Black's king can invade via these squares.

**1...Kd7 2.Ke3 Kc6 3.Kd3 Kb5** — The king penetrates.

### Effective Material Disadvantage

A bad bishop often plays like **no piece at all**:

<ChessBoard fen="8/1p2k3/p3p3/P1p1P3/2P1B3/8/6K1/8 w - - 0 1" />

Despite having a bishop, White cannot use it effectively. Black can play for the win with king maneuvering.

## Converting the Advantage

### Good Bishop vs Bad Bishop

<ChessBoard fen="8/1p1b2k1/p3p1p1/P3Pp1p/1P3P1P/6P1/8/4B1K1 w - - 0 1" />

White has the good bishop (pawns on dark squares). Black's bishop is imprisoned.

**1.Bf2! Kf7 2.Be3 Ke7 3.Bd4!** — The bishop dominates.

**3...Kf7 4.Kf2 Be8 5.Ke3 Bd7 6.Kd3** — White's king invades while Black's bishop watches helplessly.

### Creating Weaknesses

<ChessBoard fen="8/1p1b1k2/p3p1p1/P5P1/1P1B1P2/8/6K1/8 w - - 0 1" />

**1.Bc5!** — Threatening Be7.

**1...Bc8 2.Be3 Ke7 3.Bg5+ Kf7 4.f5!** — Opening lines.

**4...exf5 5.Bd2!** — Now f5 is weak, and the bishop can attack both f5 and a6.

## Improving a Bad Bishop

### Method 1: Trade It

<ChessBoard fen="8/pp3k2/4p3/3pP3/3P4/8/PP3K2/3B4 w - - 0 1" />

White should seek to trade the bad bishop for Black's pieces—even for a knight.

### Method 2: Move It Outside the Pawn Chain

<ChessBoard fen="8/pp3k2/4p3/3pP3/3P4/B7/PP6/5K2 w - - 0 1" />

**1.Bb4!** — The bishop escapes to an active square outside the pawn chain.

**1...Ke7 2.Bc5+** — Now it's active.

### Method 3: Change the Pawn Structure

<ChessBoard fen="8/pp3k2/4p3/3pPp2/3P1P2/8/PPB2K2/8 w - - 0 1" />

If possible, advance or trade pawns to free the bishop:

**1.a4!** followed by **b4-b5** can change the structure.

### Method 4: Put the Bishop on a Different Diagonal

<ChessBoard fen="8/pp3k2/4p3/3pP3/3P4/8/PP3KB1/8 w - - 0 1" />

**1.Bh3!** — Targeting e6 instead of being blocked on the b1-h7 diagonal.

## Famous Example: The "Tall Pawn"

<ChessBoard fen="8/1p2k3/p1p1p3/P1PpPp2/1P1P1P2/8/8/4BK2 w - - 0 1" />

White's bishop is completely useless—it cannot move without allowing ...Kd6 or ...Kf6.

Despite material equality, **Black is effectively a piece up** because the bishop does nothing.

## The "Active Bad Bishop"

A bad bishop can become good if placed actively:

<ChessBoard fen="8/pp6/4p1k1/3pPp2/3P1P2/2B5/PP6/6K1 w - - 0 1" />

On c3, the bishop is "bad" (blocked by d4, e5) but also **active**—it controls important squares and can't easily be attacked.

This is sometimes called an "active bad bishop"—not as good as a truly good bishop, but far better than a passive one.

## Practical Evaluation Checklist

When assessing a bishop:

1. **Are most pawns on the same or opposite color?**
2. **Is the center open or closed?**
3. **Can the bishop reach an active diagonal?**
4. **Can the bishop be improved through trades or pawn moves?**
5. **Is the bishop inside or outside the pawn chain?**

## Exercises

### Exercise 1

<ChessBoard fen="8/pp2k3/2p1p3/2PpP3/1P1P4/8/P4K2/4B3 w - - 0 1" />

Evaluate: Good or bad bishop?

<details>
<summary>Solution</summary>

**Bad bishop.**

White's pawns on d4, e5, c5 are all on light squares, severely restricting the bishop. It has only one diagonal (a6-c8) that isn't blocked.

Black should maneuver the king to the kingside, where the bishop can't defend.

</details>

### Exercise 2

<ChessBoard fen="8/1p3k2/p3p3/P1pnPp2/2P2P2/8/1B3K2/8 w - - 0 1" />

White has a bad bishop, Black has a knight. Evaluate.

<details>
<summary>Solution</summary>

**Black is better.**

The knight on d5 is perfectly placed—stable, central, and can reach both wings. The bishop is restricted by its own pawns.

Black should play ...Ke7-d7-c6 followed by ...Nb4 or ...Nc3, creating threats while White can only wait.

</details>

### Exercise 3

<ChessBoard fen="8/pp3k2/4p3/3pP3/3P4/8/PP6/B4K2 w - - 0 1" />

How can White improve the bad bishop?

<details>
<summary>Solution</summary>

**1.Bb2!** — Getting outside the pawn chain.

**1...Ke7 2.Bc3!** — Now the bishop defends d4 and eyes a5 or g7.

Better still: **1.Ke2 Ke7 2.Kd3 Kd7 3.Bb2 Kc6 4.Ba3!** — The bishop reaches the a3-f8 diagonal, where it's much more active.

</details>

### Exercise 4

<ChessBoard fen="8/p4k2/1p2p1p1/3pP1P1/1P1P4/P7/5K2/4B3 w - - 0 1" />

Plan for White with the "bad" bishop.

<details>
<summary>Solution</summary>

**1.Bd2!** — Getting the bishop outside the pawn chain.

**1...Ke7 2.Bc3 Kd7 3.Ke3 Kc6 4.Kd3 Kb5 5.Ba5!** — The bishop is now "good"—active on a5-d8 diagonal.

**5...b6 6.Bb4!** — Controlling key squares. The bishop is transformed.

</details>

## Summary

1. **Good bishop** — Pawns on opposite color, open diagonals
2. **Bad bishop** — Pawns on same color, blocked diagonals
3. **"Tall pawn"** — A truly bad bishop is nearly useless
4. **Improve it** — Trade, move outside pawn chain, change structure
5. **Active bad bishop** — Better than passive, but not ideal
6. **Practical impact** — Bad bishops can cost half a piece in effective value
