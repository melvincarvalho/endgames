---
sidebar_position: 5
title: King + Bishop + Knight vs King
description: The most difficult basic checkmate
---

import ChessBoard from '@site/src/components/ChessBoard';

# King + Bishop + Knight vs King

<span className="badge badge--advanced">Advanced</span>

The most difficult basic checkmate. Many strong players struggle with this. Fortunately, it's rare in practice.

## The Challenge

Unlike other basic checkmates:
- The king can only be mated in a corner **of the bishop's color**
- The technique is non-intuitive
- Requires up to 33 moves (close to the 50-move limit)

## Should You Learn This?

**Honest assessment**: This position occurs rarely (perhaps once every few hundred games). If you're below 1800, your time is better spent on other endgames.

However, knowing the technique demonstrates deep endgame understanding and will save you in that one critical game.

## The Goal

Drive the enemy king to a corner that matches your bishop's color.

<ChessBoard fen="k7/8/1K6/8/8/5B2/8/7N w - - 0 1" />

With a light-squared bishop, you must drive the king to a1 or h8 (light corners).

## The W-Maneuver

The key technique for transferring the king from the "wrong" corner to the "right" corner.

### Position Before W-Maneuver

<ChessBoard fen="7k/8/5K2/8/8/5B2/6N1/8 w - - 0 1" />

The king is in h8 (dark corner), but our bishop is light-squared. We need to drive it to a1 or h8... wait, h8 is dark. We need a1.

### The W-Path

The knight and bishop coordinate to push the king along a W-shaped path:

h8 → g8 → f8 → e8 → d8 → c8 → b8 → a8 → a7 → a6... → a1

This is done through careful piece coordination.

## Key Concepts

### 1. Control the "Right" Diagonal

<ChessBoard fen="8/8/8/8/8/8/k1K5/2B2N2 w - - 0 1" />

The bishop controls the a3-f8 diagonal, preventing escape.

### 2. Knight Covers Opposite Color

The knight covers squares the bishop cannot reach.

### 3. King Must Lead

Your king must be active in restricting the enemy king.

## Simplified Method

1. **Centralize** all your pieces
2. **Push to any corner** using standard techniques
3. **If wrong corner**: Execute W-maneuver to transfer to correct corner
4. **Deliver mate** in the bishop's corner

## Practice Resources

Due to the complexity, we recommend:

1. [Lichess Practice](https://lichess.org/practice/checkmates/piece-checkmates-i/BJy6fEDf/dW7KIuoY) — Interactive trainer
2. Practice against Stockfish (set to mate mode)

## The 50-Move Concern

With perfect play, this checkmate requires up to 33 moves. Under time pressure, errors can push you past 50 moves. Practice until you can execute confidently in under 40 moves.

## Summary

1. This is the hardest basic checkmate
2. Drive the king to a corner matching the bishop's color
3. Use the W-maneuver to transfer from the wrong corner
4. Practice with online tools before attempting in games
5. Prioritize other endgames unless you're 1800+
