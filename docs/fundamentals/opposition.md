---
sidebar_position: 6
title: Opposition
description: The fundamental concept of king vs king battles
---

import ChessBoard from '@site/src/components/ChessBoard';

# Opposition

<span className="badge badge--beginner">Beginner</span>
<span className="badge badge--must-know">Must Know</span>

Opposition is the most important concept in king and pawn endgames. Master this before anything else.

## What Is Opposition?

When two kings stand on the same rank, file, or diagonal with one square between them, they are "in opposition." The player who does **not** have to move has the opposition—an advantage.

<ChessBoard fen="8/8/8/4k3/8/4K3/8/8 w - - 0 1" />

White to move: Black has the opposition.
Black to move: White has the opposition.

## Why Does It Matter?

The side with opposition can force the enemy king to retreat or step aside, gaining ground.

### Example: White Has Opposition

<ChessBoard fen="8/8/8/4k3/8/4K3/8/8 b - - 0 1" />

Black to move must retreat or go sideways:
- **...Kd5** allows **Kd3** (White gains space)
- **...Ke6** allows **Ke4** (White advances)
- **...Kf5** allows **Kf3** (White follows)

## Types of Opposition

### Direct Opposition

One square between the kings on a rank or file.

<ChessBoard fen="8/8/4k3/8/4K3/8/8/8 w - - 0 1" />

### Diagonal Opposition

One square between the kings diagonally.

<ChessBoard fen="8/8/5k2/8/3K4/8/8/8 w - - 0 1" />

### Distant Opposition

Multiple squares between, but still effective. Same rule: the side NOT to move holds it.

<ChessBoard fen="8/8/8/4k3/8/8/8/4K3 w - - 0 1" />

**Rule for distant opposition**: If there's an odd number of squares between the kings, the side not to move has the opposition.

## Opposition in Practice

### Winning with Opposition

<ChessBoard fen="8/4k3/8/4K3/4P3/8/8/8 w - - 0 1" />

White to move: **Kf5!** (takes opposition). After ...Kf7 Ke5, White's king supports the pawn.

### Losing Without Opposition

<ChessBoard fen="8/8/4k3/8/4K3/4P3/8/8 w - - 0 1" />

White to move must be careful. **Ke5?** allows ...Ke7! (Black takes opposition). **Kd4** allows ...Kd6. The king needs to maneuver to gain opposition.

## Taking the Opposition

**Principle**: Move your king to face the enemy king with one square between.

<ChessBoard fen="8/8/8/3k4/8/8/3K4/8 w - - 0 1" />

White plays **Kd3!** — now if Black moves, White gains ground.

## Exercises

### Exercise 1

<ChessBoard fen="8/8/8/8/3k4/8/8/3K4 w - - 0 1" />

White to move. How does White take the opposition?

<details>
<summary>Solution</summary>

**Kd2!** — Taking direct opposition. Black must yield ground.

</details>

### Exercise 2

<ChessBoard fen="8/8/2k5/8/8/8/2K5/8 w - - 0 1" />

White to move. Does White have the opposition?

<details>
<summary>Solution</summary>

No! White must move, so Black has the opposition. Any king move allows Black to maintain or improve position.

</details>

## Summary

1. Opposition = kings facing each other with one square between
2. The player NOT to move has the advantage
3. Use opposition to advance your king or support pawn promotion
4. Distant opposition follows the "odd squares" rule
