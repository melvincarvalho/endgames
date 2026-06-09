---
sidebar_position: 14
title: Connected Passed Pawns
description: Two passed pawns on adjacent files defend each other as they advance — and on the sixth rank they even beat a rook
---

import ChessBoard from '@site/src/components/ChessBoard';
import PuzzleBoard from '@site/src/components/PuzzleBoard';

# Connected Passed Pawns

<span className="badge badge--intermediate">Intermediate</span>
<span className="badge badge--must-know">Must Know</span>

**Connected passed pawns** are two (or more) [passed pawns](/pawn-endgames/protected-passed-pawn) on adjacent files. Their strength is that they **defend each other's advance** — and a pair of them, far enough up the board, can overwhelm even a rook.

## The Self-Defending Mechanism

<ChessBoard fen="8/8/1P6/2P5/8/8/8/K6k w - - 0 1" />

Look at how the pawns cover each other:

- The **c5-pawn guards b6** (it captures diagonally onto b6 and d6), so the b-pawn is safe on b6.
- The **b6-pawn guards c7**, the very square the c-pawn wants next.

Each pawn protects the square in front of the other. So they **leapfrog** up the board: advance one to a square the other defends, then advance the second to a square the first now defends.

## They March on Their Own

Because they defend each other, connected passers don't need their king's help to make progress — if the enemy king is too far away, they simply run.

<ChessBoard fen="8/8/8/1PP5/8/8/6k1/K7 w - - 0 1" />

White to move; Black's king is far away:

**1.b6 Kf2 2.b7 Kf3 3.c6 Ke4 4.c7** — and one pawn queens next move. The king never gets close enough to touch either pawn, because capturing one would mean stepping in front of the other.

This is the engine's verdict too: with both kings out of the way, the pawns win outright.

## Two Connected Passers on the Sixth Beat a Rook

This is the famous rule worth knowing cold: **two connected passed pawns on the sixth rank defeat a lone rook.** The rook simply cannot stop both — to take one, it must let the other promote.

<PuzzleBoard
  fen="r6k/8/1PP5/8/8/8/8/6K1 w - - 0 1"
  solution={['c6c7', 'a8c8', 'b6b7', 'c8c7', 'b7b8q']}
  title="White to play: the pawns outrun the rook"
/>

**1.c7!** — threatening c8=Q. **1...Rc8** blockades the c-pawn, but now **2.b7!** attacks the rook. **2...Rxc7** removes the c-pawn — and **3.b8=Q+** promotes the other one with check. The rook gave itself up for one pawn; the second queens.

## …But Not on the Fifth

The "sixth rank" condition is doing real work. Pull the same pawns back one rank and the rook gets **behind** them, and the defense not only holds — it wins.

<ChessBoard fen="r6k/8/8/1PP5/8/8/8/6K1 b - - 0 1" />

Here Black plays **1...Rb8!**, getting behind the b-pawn. Now the pawns can no longer advance together: pushing one drops it to the rook, and the rook mops up. Engine evaluation: the **rook side is winning**.

The takeaway: connected passers are a battering ram, but the rook must be denied the chance to get *behind* them. On the sixth, the pawns are too fast; on the fifth, they aren't.

## Against a Lone King

Two healthy connected passers beat a lone king even when it sits in front of them, **provided the attacker's king can come up to help**:

<ChessBoard fen="8/8/3k4/8/3PP3/8/8/4K3 b - - 0 1" />

The defending king on d6 blockades, but it cannot hold both files forever — once White's king arrives, one pawn breaks through. A lone king only draws when the pawns are too far back and it can blockade them on the squares in front before help arrives.

## Summary

1. **Mutual defense** — Each pawn guards the advance square of the other; they leapfrog forward.
2. **They run on their own** — A distant king can't stop connected passers; capturing one walks into the other.
3. **Sixth rank beats a rook** — Two connected passers on the sixth queen by force; the rook can only trade for one.
4. **Fifth rank does not** — If the rook gets behind them, the pawns fall. Speed is everything.
5. **King help finishes the job** — Against a defending king, bring your own king up to force the breakthrough.

## Related topics

- [Protected passed pawn](/pawn-endgames/protected-passed-pawn)
- [Outside passed pawn](/pawn-endgames/outside-passed-pawn)
- [Rule of the square](/pawn-endgames/rule-of-the-square)
