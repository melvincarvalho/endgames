---
sidebar_position: 12
title: Same-Side Pawns (4v3, 3v2)
description: When extra pawns aren't enough
---

import ChessBoard from '@site/src/components/ChessBoard';

# Same-Side Pawns: 4 vs 3 and 3 vs 2

<span className="badge badge--advanced">Advanced</span>
<span className="badge badge--must-know">Must Know</span>

When all pawns are on one side of the board, an extra pawn often **isn't enough to win**. Understanding these positions is crucial for both attacking and defending.

## The Core Principle

With pawns only on one flank:
- The defender can **blockade** effectively
- The attacking king has **no second front**
- Creating a passed pawn is **difficult or impossible**
- Many positions are **theoretical draws**

## 4 vs 3 on the Kingside

### The Drawing Setup for Black

<ChessBoard fen="8/8/6k1/5pp1/5P1P/6P1/6K1/8 w - - 0 1" />

Black has the ideal defensive structure: **f5-g5** with king on g6.

**1.h5+ Kh6!** — Not fearing the pawn.

**2.Kf3 Kg7 3.Ke3 Kh6 4.Kf3 Kg7** — Black holds. White cannot break through.

### The Optimal Defensive Pawn Structure

For Black defending 3 vs 4:
- **f6-g7-h6** or **f7-g6-h5** — Flexible, hard to break
- **f5-g5** (with h-pawn traded) — Very solid
- King on **g6, g7, or h6** — Central to the defense

For White attacking 4 vs 3:
- Try to achieve **g4-g5** break
- Or create a passed h-pawn via h4-h5

### When White Wins

<ChessBoard fen="8/5p2/5kp1/7p/5PPP/8/6K1/8 w - - 0 1" />

White's pawns are more advanced. Black's structure is compromised.

**1.g5+! Ke6 2.Kg3 Kf5 3.Kh4!** — Threatening Kxh5.

**3...Kg6 4.f5+!** — The breakthrough.

**4...gxf5 5.Kxh5** — White wins the pawn ending.

**Key insight**: White won because Black's pawns were on the 6th/7th rank (passive), not actively blockading.

## 3 vs 2 on the Kingside

### Standard Drawing Position

<ChessBoard fen="8/8/6k1/6p1/5pP1/5P2/6K1/8 w - - 0 1" />

Black defends with the **g5-f4** structure:

**1.Kf2 Kf6 2.Ke2 Ke6 3.Kd3 Kf6** — Black's king covers everything.

**4.Ke4 Ke6 5.Kd4 Kd6 6.Kc4 Kc6** — White cannot outflank. Draw.

### When the Extra Pawn Wins

<ChessBoard fen="8/6k1/8/5pP1/5P2/8/6K1/8 w - - 0 1" />

White's g-pawn is further advanced:

**1.Kf3 Kf7 2.Ke3 Ke6 3.Kd4 Kd6 4.g6!** — Breakthrough.

**4...Ke6 5.g7 Kf7 6.Kd5** — White wins the f-pawns and queens.

**Key insight**: Advanced pawns create breakthrough opportunities.

## Same-Side Pawns: General Principles

### For the Defender (fewer pawns)

1. **Keep pawns flexible** — Don't fix them prematurely
2. **Maintain a blockade** — Pawns on dark squares if opponent has light-squared pawn majority
3. **King in front of pawns** — Not behind them
4. **Don't trade pawns** — Each trade helps the attacker
5. **Ideal setups**: f6-g7-h6, f7-g6-h5, or g6-h5 (2 pawns)

### For the Attacker (more pawns)

1. **Create a passed pawn** — The only way to win
2. **Advance pawns together** — Don't create isolated weaknesses
3. **Use the king actively** — Outflanking is key
4. **Look for pawn breaks** — g4-g5 or h4-h5 breakthroughs
5. **Trade pawns when possible** — Simplifies the win

## The Critical Pawn Breaks

### g4-g5 Break (4 vs 3)

<ChessBoard fen="8/5pk1/6p1/5p1p/5P1P/6P1/6K1/8 w - - 0 1" />

**1.g4!** — Challenging Black's structure.

**1...fxg4** (forced, otherwise g5 locks things up)

**2.f5! gxf5 3.Kf3** — Now White has a passed h-pawn AND the f5-pawn is weak.

**3...Kf6 4.Kf4 Ke6 5.Kxf5** — White wins.

### h4-h5 Break (4 vs 3)

<ChessBoard fen="8/5pk1/6p1/5p2/5PPP/8/6K1/8 w - - 0 1" />

**1.h5! gxh5 2.gxh5** — Now the h-pawn is a passer.

**2...Kh6 3.Kf3 Kxh5 4.Ke3 Kg4 5.Kd4** — White's king invades while Black captures the h-pawn.

The break created winning chances through distraction.

## Rook Endgames: 4 vs 3 and 3 vs 2

The same principles apply but with more drawing chances:

### 4 vs 3 with Rooks

<ChessBoard fen="8/5pkp/6p1/5P2/6PP/8/r7/4R1K1 w - - 0 1" />

This is **theoretically drawn** with correct defense:
- Black keeps the rook active (checking from the side)
- King stays near the pawns
- Don't allow White's king to advance

### 3 vs 2 with Rooks

<ChessBoard fen="8/5pk1/6p1/8/5PP1/8/r7/4R1K1 w - - 0 1" />

**Even more drawn** than 4 vs 3. The defender has an easier task with fewer pawns to manage.

## Practical Examples

### Example 1: Failed Breakthrough

<ChessBoard fen="8/8/5k2/5p1p/5P1P/6PK/8/8 w - - 0 1" />

**1.g4? hxg4+ 2.Kxg4 Kg6!** — Opposition.

**3.h5+ Kh6 4.Kf3 Kxh5 5.Ke3 Kg4** — Draw.

White's break didn't work because Black's king was well-placed.

### Example 2: Successful Outflanking

<ChessBoard fen="8/8/8/5pkp/5p1P/5P2/5KP1/8 w - - 0 1" />

**1.Ke2! Ke5 2.Kd3 Kd5 3.g4!** — Breaking through.

**3...hxg4 4.fxg4 Ke5 5.h5!** — Now the h-pawn decides.

**5...Kf6 6.Kd4 Kg5 7.Kxf4** — White wins.

White's king reached a dominant position first.

## Exercises

### Exercise 1

<ChessBoard fen="8/8/6k1/5ppp/5P1P/6P1/6K1/8 w - - 0 1" />

White to move. Can White win?

<details>
<summary>Solution</summary>

**Draw with correct defense.**

**1.hxg5 Kxg5 2.Kf3 Kf6!** — Opposition.

**3.Kf4 Kg6 4.g4 hxg4 5.Kxg4 Kf6** — Draw.

Or **1.Kf3 Kf6 2.Ke3 Ke6 3.Kd4 Kd6** — Black holds.

The ideal defensive structure (f5-g5-h5) makes this a fortress.

</details>

### Exercise 2

<ChessBoard fen="8/6k1/5p2/5Pp1/6Pp/7P/6K1/8 w - - 0 1" />

White to move. Evaluate.

<details>
<summary>Solution</summary>

**White wins!** Black's pawns are badly placed.

**1.Kf3! Kf7 2.Ke4 Ke7 3.Kd5!** — Outflanking.

**3...Kd7 4.Ke5** — Zugzwang approaching.

**4...Ke7 5.Kd5 Kd7 6.Ke4 Ke7 7.Kf4 Kf7 8.Kxg5** — Won.

Black's pawn structure (f6-g5-h4) was too passive.

</details>

### Exercise 3

<ChessBoard fen="8/8/5k2/6p1/5pPp/5P1P/8/5K2 w - - 0 1" />

White to move. 3 vs 2, what's the result?

<details>
<summary>Solution</summary>

**Draw.**

**1.Ke2 Ke5 2.Kd3 Kd5 3.Kc3 Kc5** — Black has the opposition.

**4.Kb3 Kb5 5.Ka3 Ka5** — White cannot outflank.

The pawns are blocked, and neither king can break through.

</details>

### Exercise 4

<ChessBoard fen="8/5pk1/5bp1/7p/5P1P/6P1/5BK1/8 w - - 0 1" />

Same-side pawns with bishops. What's the result?

<details>
<summary>Solution</summary>

**Likely drawn** — Same-color bishops don't change the fundamental blockade.

If bishops were traded, it would be a standard 3 vs 3 draw.

With bishops, **1.Be3 Kf8 2.Kf3 Ke7 3.Ke4 Kd7** — Still blocked.

Neither side can break through. The position is a fortress.

</details>

## Summary

1. **Same-side pawns favor the defender** — No second front to attack
2. **4 vs 3**: Often drawn with correct pawn structure (f6-g7-h5 or similar)
3. **3 vs 2**: Even more easily drawn
4. **Key defensive ideas**: Flexible pawns, king in front, maintain blockade
5. **Key attacking ideas**: Pawn breaks (g4-g5, h4-h5), outflanking, trade pawns
6. **With rooks**: Even more drawing chances
7. **Know both sides**: Attack and defense techniques are equally important
