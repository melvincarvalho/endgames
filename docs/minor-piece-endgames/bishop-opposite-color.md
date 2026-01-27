---
sidebar_position: 3
title: Opposite-Color Bishops
description: Drawing tendencies and winning exceptions
---

import ChessBoard from '@site/src/components/ChessBoard';

# Opposite-Color Bishop Endgames

<span className="badge badge--advanced">Advanced</span>
<span className="badge badge--must-know">Must Know</span>

Opposite-colored bishop endings have a notorious reputation: "The drawing tendency." But understanding when they draw and when they don't is essential knowledge.

## The Core Concept

Each bishop controls squares the other **cannot touch**. This creates unique dynamics:

- The defender can blockade on "safe" squares
- The attacker cannot use the bishop to evict the blocking pieces
- Extra pawns may not be enough to win

## The Classic Blockade

<ChessBoard fen="8/8/8/3k4/3P4/2K5/8/2b2B2 w - - 0 1" />

White has an extra pawn, but this is a **dead draw**.

**1.Kc4 Bc2!** — The bishop blockades from a safe light square.

**2.Be2 Bb3+ 3.Kc3 Bc2** — White cannot make progress. The dark-squared bishop cannot attack the light-squared blockade.

## Why Extra Pawns Don't Always Help

<ChessBoard fen="8/8/2p5/2Pk4/3P4/3K4/3B4/2b5 w - - 0 1" />

Even with **two extra pawns**, White cannot win:

**1.Ke3 Bb2 2.Bf4 Bc1+!** — The bishop holds both pawns.

**3.Kd3 Bb2 4.Be5 Ba3** — Black's bishop oscillates between a3 and c1, controlling both d4 and c5.

The pawns are on dark squares, but Black's bishop controls those squares. White's bishop cannot help.

## When Opposite Colors DO Win

### 1. Pawns on Both Sides

<ChessBoard fen="8/pp5k/8/5PP1/8/6K1/8/2B3b1 w - - 0 1" />

This is **winning for White**. The bishop cannot cover both wings:

**1.Kf4 Kg7 2.Ke5!** — The king invades.

**2...Kf7 3.f6** — Now either f6-f7-f8=Q or the king penetrates via e6.

Black's bishop can only cover one side of the board.

### 2. Connected Passed Pawns (Far Advanced)

<ChessBoard fen="8/8/3PP3/8/8/6k1/5b2/4K3 w - - 0 1" />

Connected passed pawns on the 6th rank usually win:

**1.Kd2!** — Shielding from checks.

**1...Kf4 2.Kc3 Ke5 3.Kc4 Be3 4.d7!** — One pawn diverts the bishop.

**4...Bxd7 5.exd7** — The pawn queens.

### 3. King Penetration

<ChessBoard fen="8/p7/Pp3k2/1P6/8/5K2/B7/5b2 w - - 0 1" />

If the attacking king can invade, even one extra pawn can win:

**1.Ke4 Ke6 2.Kd4 Kd6 3.Bb1!** — Clearing the way.

**3...Kc7 4.Kc5 Bd3 5.Be4!** — Dominating.

**5...Be2 6.Kb4 Bd1 7.Ka5** — The king reaches a7, winning the a-pawn and the game.

### 4. The "Two Diagonals" Rule

A critical guideline: If your passed pawns control **two different diagonals**, you can often win.

<ChessBoard fen="8/8/8/1Pk5/P7/8/6B1/4K2b w - - 0 1" />

The a and b pawns are on different diagonals (a4-e8 and b5-f1). Black's bishop cannot cover both:

**1.Kd2 Kc4 2.Kc2!** — The king shields.

**2...Bf3 3.Bd5+ Bxd5 4.b6** — One pawn promotes.

## The Rule of 7 Squares

A rough guideline: With opposite-colored bishops, the attacker needs pawns spanning at least **7 files** to reliably win.

<ChessBoard fen="8/p4p1k/8/8/1PP5/8/5K2/2B3b1 w - - 0 1" />

Pawns from b4 to f7 span 5 files. This is likely a **draw** with correct defense.

<ChessBoard fen="8/p6p/8/8/1P4P1/8/5K2/2B3b1 w - - 0 1" />

Pawns from b4 to h7 span 7 files. This is **winning** for White.

## Defensive Technique

### Create a Fortress

<ChessBoard fen="8/8/4k3/3pPp2/3P1P2/8/8/3bK2B w - - 0 1" />

Black draws by blockading:

**1.Kd2 Bc2! 2.Kc3 Bd1** — The bishop patrols c2-d1-e2, keeping the white king out.

**3.Bg2 Kd7 4.Bh3 Ke6** — Nothing breaks through. Draw.

### Keep Your Bishop Active

<ChessBoard fen="8/8/2p1k3/1pP1p3/1P2P3/8/6K1/B6b w - - 0 1" />

**1...Bg2!** is correct—keeping the bishop active and flexible.

Not **1...Bf3?** which locks the bishop in.

### Use Your King

<ChessBoard fen="8/1p4k1/1P4p1/6P1/8/8/4K3/B6b w - - 0 1" />

**1...Kf7! 2.Kd3 Ke6 3.Kc4 Kd6** — The king blockades b6.

White cannot make progress.

## Famous Example: Fischer's Technique

Fischer was a master at winning opposite-color bishop endings through king activity and creating weaknesses on both wings.

<ChessBoard fen="8/1p3pkp/p5p1/P7/1P6/6P1/5PKP/3B2b1 w - - 0 1" />

White to play would maneuver:
1. Advance kingside pawns to create weaknesses
2. Use the king to attack one side
3. Switch to the other side when the bishop moves

The defender cannot cover both flanks.

## Exercises

### Exercise 1

<ChessBoard fen="8/8/4k3/8/3PP3/8/8/3bK2B w - - 0 1" />

White to move. Can White win?

<details>
<summary>Solution</summary>

**Yes, but it requires technique.**

**1.Kd2! Kd6 2.Kd3 Bc2+ 3.Ke3 Bd1 4.d5!** — Creating separation.

**4...Kc5 5.e5!** — Now the pawns are too far apart.

**5...Kxd5 6.e6!** — One pawn promotes.

Connected passed pawns on the 5th rank win if they can advance together.

</details>

### Exercise 2

<ChessBoard fen="8/p6p/8/1Pk5/1P6/8/6K1/2B3b1 w - - 0 1" />

White to move. What's the result?

<details>
<summary>Solution</summary>

**Draw with correct defense.**

**1.Kf3 Bd4 2.Ke4 Bc3 3.Kd3 Kb6** — Black's bishop and king cover everything.

**4.Kc4 Bf6 5.Bd2 Bg7** — The bishop covers b2 from the long diagonal.

White cannot make progress. The pawns don't span enough files.

</details>

### Exercise 3

<ChessBoard fen="8/p5kp/6p1/8/PP6/8/5K2/2B3b1 w - - 0 1" />

White to move. How should White proceed?

<details>
<summary>Solution</summary>

**White wins with king invasion.**

**1.Ke3 Kf6 2.Kd4 Ke6 3.Kc5 Kd7 4.Kb6!** — The king invades.

**4...Kc8 5.a5!** — Creating the breakthrough.

**5...Bf2 6.b5 axb5 7.a6** — The pawn promotes.

The pawns spanned enough files (a to h), and the king penetrated.

</details>

## Summary

1. **Drawing tendency** — But not automatic draws
2. **Blockade defense** — Works when pawns are on one wing
3. **Pawns on both wings** — Usually winning for the attacker
4. **Connected passers** — Win if far enough advanced (6th rank)
5. **Rule of 7 squares** — Pawns spanning 7+ files usually win
6. **King activity** — The key factor in winning these endings
