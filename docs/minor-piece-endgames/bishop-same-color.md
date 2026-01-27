---
sidebar_position: 2
title: Same-Color Bishops
description: When both bishops travel the same color squares
---

import ChessBoard from '@site/src/components/ChessBoard';

# Same-Color Bishop Endgames

<span className="badge badge--intermediate">Intermediate</span>

When both players have bishops on the same color, the stronger side has good winning chances—unlike opposite-colored bishops, which tend to draw.

## Why Same-Color Bishops Matter

With same-colored bishops:
- The bishops **can challenge each other**
- A material advantage is usually **convertible**
- The better bishop often **dominates** the worse one
- **Pawn structure** becomes critical

## Key Principles

### 1. Bishop Activity

The active bishop beats the passive one.

<ChessBoard fen="8/1p4k1/p3p3/P3P3/8/5B2/6K1/5b2 w - - 0 1" />

White's bishop is active (controlling d5, e6, and the a6-c8 diagonal). Black's bishop on f1 is passive—restricted by its own pawns on e6 and b7.

**1.Bd5!** — Dominating the position.

**1...Kf8 2.Kf3 Bc4 3.Bxc4** — Trading bishops leaves a won pawn ending.

### 2. Pawns on Opposite Color

Place pawns on the **opposite color** of your bishop when possible.

<ChessBoard fen="8/5k2/p1p3p1/P1P3P1/8/5B2/6K1/8 w - - 0 1" />

White's pawns are on dark squares (a5, c5, g5), leaving light-square diagonals open for the bishop. This is an ideal setup.

### 3. Creating Weaknesses

Attack pawns fixed on your bishop's color.

<ChessBoard fen="8/pp2bk2/4p3/4P1p1/6P1/1B2K3/8/8 w - - 0 1" />

Black's pawns on e6, g5, a7 are all on light squares—the same color as both bishops. White's bishop can pressure them:

**1.Kd4 Kf8 2.Kc5!** — Threatening Kd6.

**2...Ke8 3.Bc4** — Attacking e6. The bishop dominates.

## The "Wrong Rook Pawn" Exception

Even with same-colored bishops, the **wrong rook pawn** draws:

<ChessBoard fen="8/8/8/8/p7/K7/B7/k7 w - - 0 1" />

White cannot win. The bishop doesn't control a1, and Black's king cannot be driven out.

**1.Bc4 Ka2 2.Bd5+ Ka1!** — Stalemate threats. White cannot make progress.

## Bishop + Pawn vs Bishop

### Winning Cases

<ChessBoard fen="8/8/8/5B2/3P4/3K4/8/3b3k w - - 0 1" />

A **central pawn** usually wins:

**1.Kc4 Kg2 2.d5 Kf3 3.d6 Ke4 4.Be6!** — Protecting the pawn while blocking the diagonal.

**4...Bf3 5.d7 Bxd7 6.Bxd7** — Won.

### Drawing Cases

<ChessBoard fen="B7/8/k7/P7/8/8/K7/1b6 b - - 0 1" />

When the defending bishop can sacrifice for the pawn:

**1...Bc2!** — Black sets up the blockade.

**2.Kb3 Bb1! 3.Bc6 Kb6 4.Bd5 Ka7** — The bishop holds the a6 and a8 squares. Draw.

## Two Pawns Up

### Winning Technique

<ChessBoard fen="8/pp6/8/1P4k1/P7/8/5B2/4K3 w - - 0 1" />

With connected passed pawns, the stronger side wins methodically:

**1.Kd2 Kf5 2.Kc3 Ke5 3.Kb4!** — The king supports the pawns.

**3...Kd5 4.Be3!** — Preparing a5.

**4...Kc6 5.a5 bxa5+ 6.Kxa5** — The b-pawn queens.

### Defensive Resources

The defender should:
1. Keep the bishop active (not passive)
2. Blockade pawns if possible
3. Attack the pawns with king and bishop together

<ChessBoard fen="8/8/8/PP3k2/8/5b2/8/2K5 b - - 0 1" />

Despite being two pawns down, Black can draw:

**1...Ke4! 2.b6 Kd5 3.a6 Kc6!** — The king catches both pawns. Draw.

## Complex Example

<ChessBoard fen="8/1p3pk1/p5p1/P1B3P1/1P6/8/6K1/3b4 w - - 0 1" />

White is a pawn up with better bishop activity.

**1.Kf3!** — Centralizing the king.

**1...Kf8 2.Ke4 Ke7 3.Kd5 Kd7 4.Be3!** — The bishop improves while maintaining control.

**4...Kc7 5.Bc5!** — Zugzwang approaching.

**5...Kd7 6.Bf8! g5 7.Ke5** — White's king penetrates decisively.

## Practical Guidelines

| Situation | Assessment |
|-----------|------------|
| Pawn up, active bishop | Usually winning |
| Pawn up, passive bishop | May only draw |
| Two pawns up | Normally winning |
| Wrong rook pawn | Draw even with extra pawn |
| All pawns on one side | Harder to win |

## Exercises

### Exercise 1

<ChessBoard fen="8/1p2k3/p5p1/P5P1/1P6/4B3/6K1/4b3 w - - 0 1" />

White to move. How should White proceed?

<details>
<summary>Solution</summary>

**1.Kf3!** — King activation first.

**1...Kd6 2.Ke4 Kc6 3.Kd4 Bf2+ 4.Ke5!** — Ignoring the check.

**4...Bb6 5.Bf4!** — The bishop prevents ...Kb5 and prepares to support the b-pawn.

**5...Bc5 6.Be3!** — Trading bishops leads to a won pawn ending.

White wins by eventually breaking through on one wing.

</details>

### Exercise 2

<ChessBoard fen="8/5p2/4bkp1/8/5PP1/4BK2/8/8 w - - 0 1" />

White to move. Evaluate and play.

<details>
<summary>Solution</summary>

**Equal position** — But White can try:

**1.g5+! Kf5** (1...Ke7? 2.Bc5+ wins the f-pawn)

**2.Bd4 Bd5 3.Ke3 Ke6 4.Kd3 Kd6** — The position is blocked.

Neither side can make progress. **Draw** with correct play.

</details>

### Exercise 3

<ChessBoard fen="8/8/1p6/1P2k3/P7/4K3/2B5/1b6 w - - 0 1" />

White to move. Can White win?

<details>
<summary>Solution</summary>

**Yes!** The connected passed pawns are too strong.

**1.Kd3! Kd5 2.Be4+! Kc5 3.Kc3** — Now the king supports both pawns.

**3...Be4 4.a5! bxa5 5.b6** — The pawn queens.

The bishop cannot stop both pawns simultaneously.

</details>

## Summary

1. **Same-color bishops** — Material advantages usually convert
2. **Activity is key** — The active bishop dominates the passive one
3. **Pawns opposite color** — Keep pawns off your bishop's color
4. **Wrong rook pawn** — Draws even with extra pawn
5. **Two pawns up** — Usually winning, but technique matters
