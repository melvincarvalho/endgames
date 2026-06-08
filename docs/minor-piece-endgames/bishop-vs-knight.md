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

The knight on f1 is stranded in the corner, far from the action, while the bishop covers both wings. White's king simply walks over and wins it:

**1.Kf3 Kf7 2.Kg2 Ke6 3.Kxf1** — A whole piece for nothing. A short-range knight stuck offside is a serious liability.

## The Knight's Advantage: Outposts

<ChessBoard fen="8/3k4/3Np3/2p1P3/2P5/P4K2/8/3b4 w - - 0 1" />

The knight on **d6** is a textbook outpost: a dark square the light-squared bishop can *never* attack, supported by the e5-pawn. Black's bishop is "bad," hemmed in by its own pawns. Crucially, White's extra a3-pawn sits on a **dark** square — also untouchable by the light bishop.

**1.Ke3** — The king joins in. With a dominant knight and a safe extra pawn, White is winning (Stockfish: about +3).

## Pawns on Both Flanks: Bishop Wins

<ChessBoard fen="8/5k2/p4n1p/P5p1/6P1/5B1P/5K2/8 w - - 0 1" />

Pawns are spread across both wings, and the bishop's long reach lets it strike where the knight cannot defend:

**1.Bb7! Ke6 2.Bxa6** — The bishop reaches across the board and wins a pawn. The knight could never have covered both flanks at once. White is winning.

## Closed Position: Knight is Better

<ChessBoard fen="8/1p2k3/p1p1p3/P1PpPp2/1P1P1P2/8/2N5/4K2b w - - 0 1" />

Every diagonal is blocked — the bishop on h1 is a glorified "tall pawn." The knight hops around the fixed structure to reach an outpost:

**1.Ne3!** — (1.Nd4 is impossible — White's own pawn sits on d4.) The knight reroutes via d1 toward c3 and the holes in Black's position. White is clearly better (about +2); the bishop has nothing to do.

## Wrong-Colored Bishop

A bishop is **colour-bound**. With a rook-pawn whose promotion square is the *wrong* colour, even bishop + pawn cannot win:

<ChessBoard fen="7k/8/6KP/8/8/8/B7/8 w - - 0 1" />

The promotion square h8 is **dark**, but the bishop is **light** — it can never control h8 or drive Black's king from the corner. **Draw.**

A knight is not colour-bound, so the same material **wins**:

<ChessBoard fen="7k/8/6KP/8/8/8/N7/8 w - - 0 1" />

**1.Nc3!** — The knight escorts the pawn, covering the squares the king needs. White drives the black king away and promotes. **White wins.**

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

<ChessBoard fen="8/4k3/2p1b1p1/1pP1Np1p/1P3P1P/6P1/8/5K2 w - - 0 1" />

Evaluate: who stands better, and why?

<details>
<summary>Solution</summary>

**White is much better.** The knight on e5 is a monster — secure, central, and supported — while Black's bishop on e6 is "bad," boxed in by its own pawns on light squares.

In fact White wins material at once: **1.Nxc6+!** forks the king and wins the c6-pawn. White is winning.

</details>

### Exercise 2

<ChessBoard fen="8/pp3k2/7p/4B3/8/P6P/1P3K2/2n5 w - - 0 1" />

Evaluate: which side would you rather have?

<details>
<summary>Solution</summary>

**White is somewhat better.** With pawns on both wings, the bishop is the more useful piece — it can shift from defending the queenside to attacking the kingside in a single move, while the knight on c1 is offside.

**1.Ke3** and **2.Kd4** centralises the king; the bishop holds both flanks. It's only a small edge (the engine calls it roughly half a pawn), but it's White who presses.

</details>

## Summary

1. **No universal winner** — Position determines piece value
2. **Open + both wings** = Bishop better
3. **Closed + outpost** = Knight better
4. **Bad bishop** = Often worse than a knight
5. **Colour-bound** = A wrong-coloured bishop can't win a rook-pawn; a knight can

## Related topics

- [Knight endgames](/minor-piece-endgames/knight-endgames)
- [Good vs bad bishop](/minor-piece-endgames/good-vs-bad-bishop)
- [Opposite-colour bishops](/minor-piece-endgames/bishop-opposite-color)
