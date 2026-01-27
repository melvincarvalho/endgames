---
sidebar_position: 2
title: King + Queen vs King
description: The simplest checkmate technique
---

import ChessBoard from '@site/src/components/ChessBoard';

# King + Queen vs King

<span className="badge badge--beginner">Beginner</span>
<span className="badge badge--must-know">Must Know</span>

The easiest basic checkmate. Master this first.

## The Goal

Drive the enemy king to the edge of the board, then deliver checkmate with your king's assistance.

## Key Principles

1. **Restrict the king** — Use the queen to cut off squares
2. **Avoid stalemate** — Always leave the enemy king a legal move until mate
3. **Bring up your king** — The king must help deliver the final blow

## The Technique

### Step 1: Restrict with the Queen

Use the queen to create a barrier, confining the enemy king to a smaller and smaller area.

<ChessBoard fen="8/8/8/4k3/8/8/8/4K2Q w - - 0 1" />

White plays **Qc6**, cutting off the king from the c-file and 6th rank.

### Step 2: Drive to the Edge

Continue restricting until the king reaches the edge.

<ChessBoard fen="8/4k3/2Q5/8/8/8/4K3/8 w - - 0 1" />

The king is being pushed toward the 8th rank.

### Step 3: Bring Up Your King

<ChessBoard fen="4k3/2Q5/8/8/8/4K3/8/8 w - - 0 1" />

White's king approaches to assist with the checkmate.

### Step 4: Deliver Checkmate

<ChessBoard fen="4k3/4Q3/4K3/8/8/8/8/8 w - - 0 1" />

**Qe7#** — The queen delivers checkmate with the king's support.

## Stalemate Trap!

Be careful not to give stalemate:

<ChessBoard fen="k7/8/1K6/8/8/8/8/Q7 w - - 0 1" />

**Qa7??** would be stalemate! The king has no legal moves but isn't in check.

Instead, **Qb1** and then **Qa2#**.

## Practice Positions

Set up these positions and practice delivering checkmate:

1. `8/8/8/8/4k3/8/8/4K2Q w - - 0 1` — Standard position
2. `4k3/8/8/8/8/8/8/Q3K3 w - - 0 1` — King in corner
3. `8/8/8/3k4/8/8/8/Q3K3 w - - 0 1` — Central king

**Goal**: Deliver checkmate in under 15 moves from any position.

## Summary

1. Queen restricts the enemy king
2. Drive the king to the edge
3. Bring up your king
4. Deliver mate (avoid stalemate!)
