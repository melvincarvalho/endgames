---
sidebar_position: 4
title: King + Two Bishops vs King
description: Coordinating two bishops for checkmate
---

import ChessBoard from '@site/src/components/ChessBoard';

# King + Two Bishops vs King

<span className="badge badge--intermediate">Intermediate</span>
<span className="badge badge--must-know">Must Know</span>

More complex than Q or R checkmates, but the bishops work together beautifully once you understand the technique.

## The Goal

The king can only be checkmated in a corner. Use the bishops to drive the king to the corner, then deliver mate.

## Key Principles

1. **Bishops work together** — They control adjacent diagonals, creating an impassable barrier
2. **Drive to the corner** — Checkmate only occurs in the corner
3. **King must help** — Your king assists in restricting the enemy king
4. **Avoid stalemate** — The corner creates stalemate risks

## The Technique

### Step 1: Centralize Your Pieces

<ChessBoard fen="8/8/4k3/8/3BB3/8/4K3/8 w - - 0 1" />

Start by centralizing your bishops and king.

### Step 2: Create the Diagonal Barrier

<ChessBoard fen="8/8/4k3/5B2/4B3/8/4K3/8 w - - 0 1" />

Place the bishops on adjacent diagonals. The king cannot cross this barrier.

### Step 3: Push the King to the Edge

<ChessBoard fen="8/5k2/4B3/5B2/8/4K3/8/8 w - - 0 1" />

Coordinate your king and bishops to restrict the enemy king further.

### Step 4: Drive to the Corner

<ChessBoard fen="7k/5B2/6KB/8/8/8/8/8 w - - 0 1" />

The king is trapped in the corner.

### Step 5: Checkmate

<ChessBoard fen="7k/5B2/5BK1/8/8/8/8/8 w - - 0 1" />

**Bf6#** — The bishops cover all escape squares.

## The Diagonal Barrier Concept

The key insight: two bishops on adjacent diagonals create an impenetrable wall.

```
. . . . . . . .
. . . . . B . .
. . . . B . . .
. . . . . . . .
```

The enemy king cannot cross from the lower-left to the upper-right.

## Practice Positions

1. `8/8/8/4k3/8/8/8/4KBB1 w - - 0 1` — Central start
2. `8/8/8/8/8/4k3/8/BB2K3 w - - 0 1` — Bishops on queenside
3. `4k3/8/8/8/8/8/8/2B1KB2 w - - 0 1` — King near edge

**Goal**: Deliver checkmate in under 25 moves.

## Summary

1. Centralize your pieces
2. Create a diagonal barrier with the bishops
3. Use your king to push the enemy king toward a corner
4. Shrink the barrier as you approach the corner
5. Deliver checkmate (watch for stalemate!)
