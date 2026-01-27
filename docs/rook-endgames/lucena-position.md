---
sidebar_position: 3
title: The Lucena Position
description: The winning technique for R+P vs R with pawn on the 7th
---

import ChessBoard from '@site/src/components/ChessBoard';

# The Lucena Position

<span className="badge badge--intermediate">Intermediate</span>
<span className="badge badge--must-know">Must Know</span>

The most important winning position in rook endgames. Named after Luis Ramírez de Lucena (15th century), though the analysis was likely by later authors.

## The Position

<ChessBoard fen="1K1k4/1P6/8/8/8/8/r7/2R5 w - - 0 1" />

White has:
- Pawn on the 7th rank (b7)
- King in front of the pawn
- Rook behind, cutting off Black's king

Black's rook gives checks from the side. **How does White escape?**

## The Winning Technique: Building a Bridge

### Step 1: Lift the Rook to the 4th Rank

<ChessBoard fen="1K1k4/1P6/8/8/8/8/r7/2R5 w - - 0 1" />

**1. Rc4!**

This move prepares to block checks. The rook will become a "bridge" for the king.

### Step 2: Advance the King

After 1...Ra1 2. Kc7 Rc1+ 3. Kb6 Rb1+ 4. Kc6 Rc1+ 5. Kb5 Rb1+

<ChessBoard fen="8/1P1k4/8/1K6/2R5/8/8/1r6 w - - 0 1" />

The king has emerged, but checks continue.

### Step 3: Block with the Rook (The Bridge!)

**6. Rb4!**

<ChessBoard fen="8/1P1k4/8/1K6/1R6/8/8/1r6 b - - 0 1" />

The rook interposes, blocking the check. Black cannot stop b8=Q.

## Why Does This Work?

The rook on the 4th rank:
1. **Gives the king room** to escape checks
2. **Blocks future checks** by interposing
3. **Supports promotion** once the king is safe

## Key Concepts

### The "Building a Bridge" Name

The rook creates a "bridge" between the checking rook and the king, allowing safe passage for promotion.

### Which Files Work?

The Lucena works for center and bishop pawns. **Rook pawns (a and h files) are different**—the king has less room to escape.

### Starting Position Requirements

You need:
- Pawn on 7th rank
- King in front of the pawn
- Rook able to reach the 4th rank

## Practice the Technique

Set up this position and practice:

`1K1k4/1P6/8/8/8/8/r7/2R5 w - - 0 1`

Play through: 1. Rc4 Ra1 2. Kc7 Rc1+ 3. Kb6 Rb1+ 4. Kc6 Rc1+ 5. Kb5 Rb1+ 6. Rb4!

## Alternate Variations

### Black Tries Different Checks

After 1. Rc4 Ra2 (not Ra1):
- 2. Kc7 Rc2+ 3. Kb6 Rb2+ 4. Kc6 Rc2+ 5. Kb5 Rb2+ 6. Rb4! Same technique.

### Black's Rook Stays Passive

After 1. Rc4 Ke7:
- 2. Kc7 Ra7 3. Rc5! (cutting off Black's king) and the pawn promotes.

## Common Mistakes

1. **Moving the rook to the wrong rank** — Must be 4th rank for the bridge to work
2. **Rushing the king out too early** — Play Rc4 first
3. **Forgetting to interpose** — The bridge is the key!

## Summary

1. **Rc4!** — Lift the rook to the 4th rank
2. **March the king out** — Endure the checks
3. **Rb4!** — Block with the rook (build the bridge)
4. **Promote** — Victory!

The Lucena is the single most important rook endgame pattern. Know it by heart.
