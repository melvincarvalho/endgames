---
sidebar_position: 3
title: King + Rook vs King
description: The essential rook checkmate technique
---

import ChessBoard from '@site/src/components/ChessBoard';

# King + Rook vs King

<span className="badge badge--beginner">Beginner</span>
<span className="badge badge--must-know">Must Know</span>

More technical than the queen checkmate, but still straightforward. The key is "building a box."

## The Goal

Use the rook to cut off the enemy king, shrink its space, and deliver checkmate on the edge with your king's help.

## Key Principles

1. **Cut off the king** — The rook creates a barrier
2. **Shrink the box** — Reduce the king's space rank by rank (or file by file)
3. **Opposition** — Use your king to force the enemy king back
4. **Patience** — This takes more moves than the queen mate

## The Technique: Building a Box

### Step 1: Cut Off the King

<ChessBoard fen="8/8/8/4k3/8/8/4R3/4K3 w - - 0 1" />

The rook on e2 cuts off the king from ranks 1-2. The king is confined to a "box."

### Step 2: Approach with Your King

<ChessBoard fen="8/8/8/4k3/4K3/8/4R3/8 w - - 0 1" />

Bring your king up to support shrinking the box.

### Step 3: Shrink the Box

When your king is ready, use the rook to push the enemy king back.

<ChessBoard fen="8/8/4k3/8/4K3/4R3/8/8 w - - 0 1" />

**Re5+** forces the king to the edge.

### Step 4: Repeat Until Edge

<ChessBoard fen="4k3/8/4K3/4R3/8/8/8/8 w - - 0 1" />

The enemy king is on the edge. Now use opposition to deliver mate.

### Step 5: Checkmate

<ChessBoard fen="4k3/4R3/4K3/8/8/8/8/8 w - - 0 1" />

**Re8#** — Checkmate!

## The Waiting Move

Sometimes your king is in position, but moving the rook gives check too early. Use a "waiting move":

<ChessBoard fen="3k4/8/3K4/4R3/8/8/8/8 w - - 0 1" />

If the king were on e6, Re8 would be mate. But it's White's move. Solution: **Ra5** (waiting move), then after ...Ke8, **Ra8#**.

## Common Mistakes

1. **Checking too early** — Don't give random checks. Improve your king's position first.
2. **Not using opposition** — Your king must face the enemy king to push it back.

## Practice Positions

1. `8/8/8/8/3k4/8/8/R3K3 w - - 0 1` — Central king
2. `7k/8/8/8/8/8/8/R3K3 w - - 0 1` — Corner king
3. `8/8/3k4/8/8/8/8/4K2R w - - 0 1` — Rook on wrong side

**Goal**: Deliver checkmate in under 20 moves.

## Summary

1. Cut off the king with the rook (build a box)
2. Bring your king to support
3. Use opposition to push the enemy king to the edge
4. Shrink the box rank by rank
5. Deliver checkmate on the back rank
