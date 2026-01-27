---
sidebar_position: 6
title: Bishop vs Knight
description: Evaluating which piece is better
---

import ChessBoard from '@site/src/components/ChessBoard';

# Bishop vs Knight

<span className="badge badge--advanced">Advanced</span>
<span className="badge badge--must-know">Must Know</span>

Neither piece is universally superior. The position determines which is better.

## General Principles

### Bishop is Better When:

1. **Open position** — Diagonals are clear
2. **Pawns on both flanks** — Long-range bishop dominates
3. **Passed pawn needs support** — Bishop supports from distance
4. **Knight has no outposts** — No stable squares for the knight

### Knight is Better When:

1. **Closed position** — Pawns block diagonals
2. **Fixed pawn structure** — Especially if pawns are on one color
3. **Outpost available** — Secure central square for knight
4. **Bishop is "bad"** — Blocked by its own pawns

## The Bishop's Advantage: Mobility

<ChessBoard fen="8/1p4k1/p5p1/P5B1/1P4K1/8/8/5n2 w - - 0 1" />

White's bishop controls both sides of the board simultaneously. The knight on f1 is far from the action.

**1.Kf4!** — White's king attacks the kingside while the bishop guards a5.

The knight cannot be in two places at once.

## The Knight's Advantage: Outposts

<ChessBoard fen="8/1p2k3/p3p3/P1p1P3/2P1N3/8/6K1/3b4 w - - 0 1" />

The knight on e4 is perfectly placed—supported by pawns, unassailable by the bishop. Black's bishop is "bad" (blocked by pawns on e6, c5).

White will win by bringing the king to support the knight.

## Pawns on Both Flanks: Bishop Wins

<ChessBoard fen="8/5k2/p4n1p/P5p1/6P1/5B1P/5K2/8 w - - 0 1" />

Pawns are spread across both wings. The bishop covers both sides; the knight must choose one.

**1.Bd5+ Ke7 2.Kg3!** — White's king improves while the bishop guards everything.

## Closed Position: Knight Wins

<ChessBoard fen="8/1p2k3/p1p1p3/P1PpPp2/1P1P1P2/8/2N5/4K2b w - - 0 1" />

All diagonals are blocked. The bishop is useless ("tall pawn"). The knight can jump over the pawns and dominate.

**1.Nd4!** — The knight maneuvers to f3 or e6, creating threats.

## Wrong-Colored Bishop

<ChessBoard fen="8/8/5k2/8/p7/8/B4K2/8 w - - 0 1" />

The bishop cannot control a1 (the promotion square). This is a draw—the king and bishop cannot drive Black's king from a1.

A knight would win this position:

<ChessBoard fen="8/8/5k2/8/p7/8/N4K2/8 w - - 0 1" />

**1.Ke3 Ke5 2.Kd3 Kd5 3.Kc4!** — White wins the pawn.

## Opposite-Colored Bishop Comparison

Bishop vs knight with opposite-colored bishops creates unique dynamics. See [Opposite-Color Bishops](/minor-piece-endgames/bishop-opposite-color).

## Practical Evaluation Checklist

Ask these questions:

1. Is the position open or closed?
2. Are there pawns on both wings?
3. Does the knight have an outpost?
4. Is the bishop "good" or "bad"?
5. What does the endgame look like after trades?

## Famous Example: Fischer vs Taimanov (1971)

Bobby Fischer famously converted bishop vs knight advantages by:
1. Keeping the position open
2. Restricting the knight
3. Creating weaknesses on both wings

## Exercises

### Exercise 1

<ChessBoard fen="8/5k2/2p3p1/1pP1Np1p/1P3P1P/6P1/8/5K2 w - - 0 1" />

Evaluate: Who stands better?

<details>
<summary>Solution</summary>

**White is better.** The knight on e5 is dominant—secure, centralized, and unassailable. If Black had a bishop, it would be "bad" (pawns on light squares).

White wins by maneuvering the king to support the knight invasion.

</details>

### Exercise 2

<ChessBoard fen="8/pp3k2/8/2p1B3/8/P7/1P3K2/2n5 w - - 0 1" />

Evaluate: Who stands better?

<details>
<summary>Solution</summary>

**White is better.** Pawns on both sides favor the bishop. The knight cannot cover a3 and the kingside simultaneously.

White plays **Ke3** and **Kd4**, dominating the center while the bishop controls both wings.

</details>

## Summary

1. **No universal winner** — Position determines piece value
2. **Open + both wings** = Bishop better
3. **Closed + outpost** = Knight better
4. **Bad bishop** = Often worse than knight
5. **Practical skill** = Recognizing which positions favor which piece
