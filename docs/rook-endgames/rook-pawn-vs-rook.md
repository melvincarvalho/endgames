---
sidebar_position: 5
title: Rook Pawn vs Rook
description: Special cases with a-pawn or h-pawn
---

import ChessBoard from '@site/src/components/ChessBoard';

# Rook Pawn (a/h) Endgames

<span className="badge badge--advanced">Advanced</span>

Rook pawns create special difficulties because the edge of the board restricts maneuvering.

## Why Rook Pawns Are Different

With center or bishop pawns, the Lucena technique "builds a bridge" using the 4th rank. With rook pawns, there's no room on one side—the king can't escape checks.

<ChessBoard fen="K7/P7/8/8/8/8/7r/5k2 w - - 0 1" />

White has the pawn on a7 with king in front. But can White win?

## The Short Side / Long Side Principle

The defending rook should be on the **short side** (between the pawn and the edge), forcing the attacking king to escape to the **long side** where there's more room for checks.

<ChessBoard fen="K7/P7/8/8/8/8/7r/5k2 w - - 0 1" />

Black's rook is on the **long side** (h-file). This is wrong!

**Correct defense**: Rook on the **short side** (b-file or c-file).

## Defending with the Short Side Rook

<ChessBoard fen="K7/P1k5/8/8/8/8/r7/8 w - - 0 1" />

Black's rook is on the a-file (short side), and Black's king is nearby. This is a **draw**.

**1.Kb8 Rb2+ 2.Kc8 Ra2!** — The rook returns to the short side.

White cannot make progress. The king cannot escape the checks without losing the pawn.

## The Winning Zone

For the attacker to win, the defending king must be far away (unable to help), AND the rook must be poorly placed.

<ChessBoard fen="K7/P7/8/8/8/8/7r/7k w - - 0 1" />

Black's king is in the corner—completely useless. But can White win?

**1.Kb7 Rb2+ 2.Ka6 Ra2+ 3.Kb5 Rb2+ 4.Ka4 Ra2+ 5.Kb3** — White escapes!

The long side has enough room. White wins.

## The Vancura Position (Drawing Technique)

<ChessBoard fen="K7/P7/8/8/8/8/6k1/r7 w - - 0 1" />

Black's rook on the a-file, Black's king on the long side. Can Black draw?

**1.Kb7 Rb1+ 2.Ka6 Ra1+ 3.Kb6 Rb1+ 4.Ka5 Ra1+ 5.Kb4 Ra6!**

The **Vancura position**: Black's rook attacks from the side (6th rank), preventing both king escape and pawn advance.

<ChessBoard fen="K7/P7/r7/8/1K6/8/6k1/8 w - - 0 1" />

After **Ra6!**, White cannot make progress:
- If **a8=Q**, then **Rxa8**
- If **Kb5**, then **Ra1** (rook goes behind)
- If **Kc5**, then **Ra1** (same)

**Draw!**

## Summary of Rook Pawn Principles

| Attacker's Position | Defender's Position | Result |
|---------------------|---------------------|--------|
| King in front of pawn | Rook on short side, king nearby | Draw |
| King in front of pawn | Rook on long side, king far | Win |
| King behind pawn | Any reasonable defense | Draw |

## Practical Guidelines

### For the Attacker
1. Get your king in front of the pawn
2. Force the defending rook to the wrong side
3. Escape via the long side

### For the Defender
1. Keep your rook on the short side
2. Keep your king close if possible
3. Use the Vancura defense if needed

## Exercises

### Exercise 1

<ChessBoard fen="K7/P7/8/8/4k3/8/1r6/8 w - - 0 1" />

White to move. What's the result?

<details>
<summary>Solution</summary>

**Draw!** Black's rook is on the short side.

**1.Kb8 Rb1+ 2.Kc7 Ra1!** — Back to the short side.

**3.Kb7 Rb1+ 4.Ka6 Ra1+** — White cannot escape the checks.

</details>

### Exercise 2

<ChessBoard fen="K7/P7/8/8/4k3/8/7r/8 w - - 0 1" />

White to move. What's the result?

<details>
<summary>Solution</summary>

**White wins!** Black's rook is on the wrong side (long side).

**1.Kb7 Rb2+ 2.Ka6 Ra2+ 3.Kb5 Rb2+ 4.Ka4!** — The king escapes toward the long side.

**4...Ra2+ 5.Kb3 Ra1 6.a8=Q** — Promotion!

</details>

### Exercise 3

<ChessBoard fen="8/P7/8/8/5k2/K7/8/r7 w - - 0 1" />

Can White win?

<details>
<summary>Solution</summary>

**Draw!** White's king is behind the pawn—a losing formation.

**1.Kb4 Rb1+ 2.Kc5 Ra1** — Black's rook controls the a-file.

White cannot get the king in front of the pawn without losing it. Draw.

</details>

## Summary

1. **Rook pawns** are harder to promote due to edge restrictions
2. **Short side defense**: Rook between pawn and edge = drawing resource
3. **Long side escape**: Attacker needs room to flee checks
4. **Vancura position**: Side attack on the 6th rank holds
5. **King position**: Must be in front for winning chances
