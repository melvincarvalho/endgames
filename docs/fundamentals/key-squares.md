---
sidebar_position: 8
title: Key Squares
description: Critical squares for pawn promotion
---

import ChessBoard from '@site/src/components/ChessBoard';

# Key Squares

<span className="badge badge--intermediate">Intermediate</span>
<span className="badge badge--must-know">Must Know</span>

Key squares are specific squares that, if occupied by the attacking king, guarantee pawn promotion regardless of who moves.

## The Concept

Every pawn has "key squares." If your king reaches one, the pawn promotes by force.

## Key Squares by Pawn Position

### Pawn on 2nd-4th Rank

The key squares are **two ranks ahead of the pawn**, three squares wide.

<ChessBoard fen="8/8/8/8/8/2PKP3/8/8 w - - 0 1" />

For a pawn on d3, the key squares are c5, d5, and e5.

### Pawn on 5th Rank

The key squares are **one and two ranks ahead**, three squares wide.

<ChessBoard fen="8/8/2PKP3/3P4/8/8/8/8 w - - 0 1" />

For a pawn on d5, key squares include c6, d6, e6, c7, d7, e7.

### Pawn on 6th Rank

Almost any king position works. The pawn is very close to promotion.

## Using Key Squares

<ChessBoard fen="8/8/8/3k4/8/8/3PK3/8 w - - 0 1" />

White's goal: reach c4, d4, or e4 (key squares for the d2 pawn).

After **Ke3 Ke5 Kd3 Kd5 Kc3!** — White takes the opposition and will reach a key square.

## Why Key Squares Work

Once the attacking king reaches a key square, it controls enough space to:

1. **Block the defending king** from getting in front of the pawn
2. **Escort the pawn** to promotion
3. **Handle any defensive attempts**

## Key Squares vs Opposition

These concepts work together:

- **Opposition** is the technique to reach key squares
- **Key squares** are the goal

<ChessBoard fen="8/8/8/2k5/8/2K5/2P5/8 w - - 0 1" />

White uses opposition: **Kd3!** (Black has opposition, but it's distant). Eventually, White reaches a key square and wins.

## Practice: Finding Key Squares

### Position 1

<ChessBoard fen="8/8/8/8/2k5/8/2P5/2K5 w - - 0 1" />

What are the key squares for the c2 pawn?

<details>
<summary>Solution</summary>

b4, c4, d4 (two ranks ahead). White needs to reach one of these to guarantee promotion.

</details>

### Position 2

<ChessBoard fen="8/8/8/3P4/8/3K4/8/8 w - - 0 1" />

What are the key squares for the d5 pawn?

<details>
<summary>Solution</summary>

c6, d6, e6, c7, d7, e7. With the pawn on the 5th rank, there are six key squares.

</details>

## The Rook Pawn Exception

Rook pawns (a and h files) have fewer key squares because the edge of the board limits the king's options. This makes them harder to promote.

<ChessBoard fen="8/8/8/8/8/K7/P7/8 w - - 0 1" />

Key squares for a-pawn: only b7 and b8. Much harder to reach!

## Summary

1. Key squares guarantee pawn promotion if your king reaches them
2. For pawns on 2nd-4th ranks: key squares are 2 ranks ahead, 3 squares wide
3. Use opposition to reach key squares
4. Rook pawns have fewer key squares (harder to win)
