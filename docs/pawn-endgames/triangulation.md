---
sidebar_position: 5
title: Triangulation
description: Losing a tempo to gain zugzwang
---

import ChessBoard from '@site/src/components/ChessBoard';

# Triangulation

<span className="badge badge--intermediate">Intermediate</span>
<span className="badge badge--must-know">Must Know</span>

Triangulation is the technique of moving your king in a triangle to transfer the move to your opponent, creating zugzwang.

## The Concept

Sometimes you reach a position that would be winning if only it were your opponent's turn. Triangulation achieves exactly this—you "waste" a move by maneuvering your king in a triangle.

## Classic Example

<ChessBoard fen="8/8/8/2k5/3p4/3K4/3P4/8 w - - 0 1" />

White wants to play Kc3 when Black's king is on c5. But it's White's move. Direct play fails:

**1.Kc3? Kd5!** — Black takes the opposition and holds.

### The Solution: Triangulate

**1.Ke3!** — Starting the triangle

<ChessBoard fen="8/8/8/2k5/3p4/4K3/3P4/8 b - - 0 1" />

**1...Kd5** (Black has no useful waiting move)

**2.Kd3!** — Second leg of the triangle

<ChessBoard fen="8/8/8/3k4/3p4/3K4/3P4/8 b - - 0 1" />

**2...Kc5 3.Kc3!** — The triangle is complete

<ChessBoard fen="8/8/8/2k5/3p4/2K5/3P4/8 b - - 0 1" />

Now it's the SAME POSITION as the start, but with Black to move! Black is in zugzwang:

- **3...Kd5 4.Kb4** — White wins the d4 pawn
- **3...Kb5 4.Kxd4** — White wins the d4 pawn

## Why It Works

The key: White's king has THREE squares forming a triangle (d3, e3, and the path between). Black's king only has TWO useful squares (c5 and d5). By visiting three squares while Black visits two, White transfers the move.

```
White's triangle:     Black's squares:
    Ke3                   Kc5
   /    \                  |
  Kd3--Kc3                Kd5
```

## Requirements for Triangulation

1. **Your king has more space** — Access to three squares in a triangle
2. **Opponent's king is restricted** — Only two useful squares
3. **The resulting position is zugzwang** — Moving loses for the opponent

## Another Example

<ChessBoard fen="8/8/8/8/1k6/8/1PK5/8 w - - 0 1" />

White wants to advance but direct play stalls:

**1.Kc3 Kc5 2.Kb3 Kb5** — Neither side makes progress

### Triangulation Solution

**1.Kd3!** — Starting the triangle

**1...Kc5 2.Kc3 Kb5 3.Kb3!**

Now Black must give way:
- **3...Kc5 4.Ka4!** — White's king infiltrates
- **3...Ka5 4.Kc4** — White advances

## Complex Triangulation

Sometimes the triangle is larger or involves more squares.

<ChessBoard fen="8/8/2k5/8/2K5/8/2P5/8 w - - 0 1" />

White's king can use Kd4, Kd3, Kc3, Kb3, Kb4 — multiple triangulation routes exist.

The principle remains: maneuver to transfer the move while the opponent runs out of waiting moves.

## When Triangulation Fails

If your opponent also has three squares, they can counter-triangulate:

<ChessBoard fen="8/2k5/8/8/2K5/8/8/8 w - - 0 1" />

Both kings have equal mobility. Triangulation won't create zugzwang because Black can mirror White's maneuvers.

## Exercises

### Exercise 1

<ChessBoard fen="8/8/8/5k2/4p3/4K3/4P3/8 w - - 0 1" />

White to move. Find the winning triangulation.

<details>
<summary>Solution</summary>

**1.Kd3!** (not Kf3 Kf4)

**1...Ke5** (only move)

**2.Ke3!**

Now if **2...Kf5 3.Kf3!** — Same position, Black to move. Black is in zugzwang.

**3...Ke5 4.Kg4** and White wins the e4 pawn.

</details>

### Exercise 2

<ChessBoard fen="8/8/4k3/4p3/4P3/4K3/8/8 w - - 0 1" />

Can White win with triangulation?

<details>
<summary>Solution</summary>

No! Black has the same three squares as White (d6/e6/f6 mirrors d3/e3/f3). Black can counter-triangulate, and the position is drawn.

</details>

## Summary

1. **Triangulation** transfers the move to your opponent
2. **Requirements**: Your king has 3 squares, opponent has 2
3. **Result**: Opponent falls into zugzwang
4. **Key skill**: Recognizing when triangulation is possible
5. **Counter**: If opponent has equal squares, triangulation fails

Triangulation is one of the most elegant techniques in chess. Master it, and you'll win many endgames that others draw.
