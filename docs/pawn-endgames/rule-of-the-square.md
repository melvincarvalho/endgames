---
sidebar_position: 3
title: Rule of the Square
description: Can the king catch the pawn?
---

import ChessBoard from '@site/src/components/ChessBoard';

# Rule of the Square

<span className="badge badge--beginner">Beginner</span>
<span className="badge badge--must-know">Must Know</span>

A quick visual method to determine if a king can catch a passed pawn.

## The Rule

Draw a square from the pawn to the promotion square. If the defending king can enter this square, it catches the pawn.

<ChessBoard fen="8/8/8/p7/8/8/8/5K2 w - - 0 1" />

The "square" of the a5 pawn extends to a5-a1-e1-e5. White's king on f1 **can** enter this square (Ke2 is one move), so the king catches the pawn.

## How to Find the Square

1. Draw a diagonal from the pawn to the promotion rank
2. Complete the square toward the defending king
3. If the king can step into the square, it catches the pawn

## Examples

### King Catches the Pawn

<ChessBoard fen="8/8/8/p7/8/8/4K3/8 w - - 0 1" />

White's king is on e2. The square is a5-a1-e1-e5. **Kd3** enters the square—king catches pawn!

### King Cannot Catch

<ChessBoard fen="8/8/8/p7/8/8/8/5K2 w - - 0 1" />

> ⚠️ **WARNING: diagram needs fixing** — The FEN shows the White king on f1, but from f1 the king CAN enter the square in one move (Ke2, and e2 is inside a5-a1-e1-e5). For a genuine "cannot catch" example the king should be on g1 (or farther). FEN to be corrected by Melvin.

With the corrected position, the king would be too far to enter the square, and the pawn promotes.

## With the King Supporting

When both kings are present, the rule becomes more complex. The supporting king can block.

## Practice

For any passed pawn position, ask:
1. Where is the promotion square?
2. What is the "square" of the pawn?
3. Can the defending king enter?

## Summary

The rule of the square is a quick visualization tool. Use it to assess pawn races at a glance.
