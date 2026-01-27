---
sidebar_position: 4
title: The Philidor Position
description: The drawing technique for R+P vs R defense
---

import ChessBoard from '@site/src/components/ChessBoard';

# The Philidor Position

<span className="badge badge--intermediate">Intermediate</span>
<span className="badge badge--must-know">Must Know</span>

The essential defensive technique when your opponent has a rook and pawn. Named after François-André Danican Philidor (1726-1795).

## The Position

<ChessBoard fen="8/8/8/8/3pk3/8/3K4/3R4 w - - 0 1" />

Black has:
- Pawn on 6th rank (not 7th yet)
- King supporting the pawn

White's goal: **Draw by preventing pawn promotion.**

## The Defensive Technique

### Key Principle: Third Rank Defense

**Place your rook on the 3rd rank** (from your perspective), cutting off the enemy king.

<ChessBoard fen="8/8/8/8/3pk3/3R4/3K4/8 b - - 0 1" />

The rook on d3 prevents the black king from advancing. The pawn cannot advance safely.

### Why the Third Rank?

1. **Blocks the king** — The enemy king cannot cross the 3rd rank
2. **Maintains flexibility** — The rook can switch to checking from behind
3. **Preserves drawing chances** — Even if the pawn advances

## When the Pawn Advances

If Black pushes the pawn to the 7th rank, switch to **checking from behind**.

<ChessBoard fen="8/3p4/4k3/8/8/8/3K4/3R4 w - - 0 1" />

After ...d2, White plays **Rd1**, and then gives infinite checks from behind. The king cannot escape the checks without losing the pawn.

## The Full Drawing Method

### Phase 1: Third Rank Defense

<ChessBoard fen="8/8/8/4k3/3p4/3R4/3K4/8 b - - 0 1" />

Keep the rook on the 3rd rank while the pawn is on the 4th, 5th, or 6th.

### Phase 2: Switch to Checking

Once the pawn reaches the 7th rank:

<ChessBoard fen="8/3pk3/8/8/8/3R4/3K4/8 w - - 0 1" />

**1. Rd1!** — Now the rook checks from behind.

After 1...Ke6 2. Re1+ Kd6 3. Rd1+ (continue checking)

The king cannot shelter from checks without abandoning the pawn.

## Why This Works

1. **Checking distance** — The rook far from the pawn can check indefinitely
2. **No shelter** — Without a second pawn or piece to block checks, the king is exposed
3. **Pawn stuck** — The pawn cannot promote while under check

## Common Mistakes (for the Defender)

### Too Passive

<ChessBoard fen="8/8/8/4k3/3p4/8/3K4/3R4 b - - 0 1" />

White's rook on d1 is too passive. Black advances with ...Ke4, ...d3, ...Ke3, and wins.

### Rook on the Wrong Side

The rook must have **checking distance**. If it's on the same side as the enemy king, checks don't work.

## Practice Position

<ChessBoard fen="8/8/3k4/3p4/8/8/3K4/3R4 w - - 0 1" />

White to move. What's the drawing technique?

<details>
<summary>Solution</summary>

**1. Rd3!** — Third rank defense. Wait until the pawn advances to the 7th, then switch to checking from behind.

</details>

## Philidor vs Lucena

| Position | Pawn Location | Result |
|----------|---------------|--------|
| Lucena | 7th rank, king in front | Win |
| Philidor | 6th rank (or below) | Draw |

The battle in R+P vs R is often: Can the attacker reach a Lucena? Can the defender maintain a Philidor?

## Summary

1. **Third rank defense** — Rook on 3rd rank blocks the enemy king
2. **Wait patiently** — Maintain position until pawn advances
3. **Switch to checking** — When pawn reaches 7th, check from behind
4. **Infinite checks** — The king cannot escape without losing the pawn

This is the counterpart to Lucena. Know both positions cold.
