---
sidebar_position: 5
title: Triangulation
description: Losing a tempo to gain zugzwang
---

import ChessBoard from '@site/src/components/ChessBoard';

# Triangulation

<span className="badge badge--intermediate">Intermediate</span>
<span className="badge badge--must-know">Must Know</span>

Triangulation is the art of **transferring the move to your opponent**. You reach a position that would be winning if only it were *their* turn — so you "lose a tempo," either by walking your king in a triangle or by spending a spare pawn move. With no such waiting move of their own, the opponent falls into zugzwang.

## The Concept

In many king-and-pawn endings the player *to move* is worse off — moving their king means giving way. If you can hand that obligation to your opponent, you win. Triangulation does exactly that.

## Winning by Outflanking

<ChessBoard fen="8/3k4/8/3Pp3/4P3/3K4/8/8 w - - 0 1" />

White has a **protected passed pawn** on d5 (guarded by e4), but Black's king blockades from d7. Charging straight ahead achieves nothing — so White's king sidesteps to lose a tempo and outflank:

**1.Kc4! Kd6 2.Kb5 Kd7 3.Kc5** — White's king has worked its way to c5. Black cannot keep guarding the d-pawn *and* meet the king's invasion. White wins (Stockfish: decisive).

## A Spare Tempo

<ChessBoard fen="8/3k4/4p3/3KP3/8/P7/8/8 w - - 0 1" />

Here the e-pawns are locked and the kings mirror each other — king moves alone get nowhere. But the **a-pawn is a reserve tempo**:

**1.Kc5 Kc7 2.a4!** — passing the move. Now Black must give way: **2...Kb7 3.Kd6 Kb6 4.Kxe6** and White's e-pawn marches home. The spare pawn move did the same job a king triangle would.

## When Triangulation Fails

<ChessBoard fen="8/2k5/8/8/2K5/8/8/8 w - - 0 1" />

With no pawns and equal king mobility, neither side can ever be put in zugzwang — whatever White tries, Black mirrors it. **Draw.** Triangulation only wins when *your* king has a waiting move and the opponent's does not.

## Exercises

### Exercise 1

<ChessBoard fen="8/8/2k5/8/2K5/8/2P5/8 w - - 0 1" />

White to move. How does White win?

<details>
<summary>Solution</summary>

White's king is already ahead of the pawn, so it escorts it through:

**1.c3 Kd6 2.Kb5 Kd5 3.c4+** — the pawn rolls forward under the king's protection and queens. White wins.

</details>

### Exercise 2

<ChessBoard fen="8/8/4k3/4p3/4P3/4K3/8/8 w - - 0 1" />

Can White win with triangulation here?

<details>
<summary>Solution</summary>

**No — draw.** Black has exactly the same squares as White (d6/e6/f6 mirror d3/e3/f3). Whatever triangle White walks, Black walks the matching one and never runs out of waiting moves. The position is a dead draw.

</details>

## Summary

1. **Triangulation** transfers the move to your opponent
2. **The tool**: lose a tempo — a king triangle, or a spare pawn move
3. **The result**: the opponent is in zugzwang and must give way
4. **Requirement**: *you* have a waiting move and *they* don't
5. **Counter**: if the opponent has equal waiting moves, it's a draw

## Related topics

- [Opposition deep](/pawn-endgames/opposition-deep)
- [Key squares](/pawn-endgames/key-squares)
