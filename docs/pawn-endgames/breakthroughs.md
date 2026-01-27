---
sidebar_position: 7
title: Pawn Breakthroughs
description: Sacrificing pawns to create a passed pawn
---

import ChessBoard from '@site/src/components/ChessBoard';

# Pawn Breakthroughs

<span className="badge badge--intermediate">Intermediate</span>
<span className="badge badge--must-know">Must Know</span>

A pawn breakthrough is a forced sacrifice of one or more pawns to create an unstoppable passed pawn.

## The Classic 3 vs 3 Breakthrough

<ChessBoard fen="8/8/8/ppp5/PPP5/8/8/8 w - - 0 1" />

White has three pawns facing three pawns. It seems like nothing can be done—any pawn that advances gets captured. But there's a breakthrough!

### The Solution

**1.b5!**

This pawn sacrifice opens the gates.

<ChessBoard fen="8/8/8/pPp5/P1P5/8/8/8 b - - 0 1" />

Black must capture:

**Option A: 1...cxb5**
After **2.c5! bxc5 3.a5** — The a-pawn is unstoppable!

<ChessBoard fen="8/8/8/PpP5/8/8/8/8 b - - 0 1" />

**Option B: 1...axb5**
After **2.a5! bxa5 3.c5** — The c-pawn is unstoppable!

<ChessBoard fen="8/8/8/ppP5/8/8/8/8 b - - 0 1" />

Either way, White creates a passed pawn that queens.

## Why It Works

The breakthrough works because:
1. The middle pawn **opens two files** when captured
2. The opponent can only defend **one** of the resulting passed pawns
3. The other pawn marches to promotion

## The Key Pattern

```
Before:          After b5:         After cxb5, c5:
p p p            p P p             p . P
P P P            P . P             . p .
                 (captures)         (passed!)
```

The sacrifice creates a 2-on-1 situation on one of the wings.

## Defensive Implications

If you're on the defensive side, **don't allow this pawn structure**! Keep your pawns mobile and don't create the setup that allows the breakthrough.

## Variations of the Breakthrough

### Immediate Breakthrough

<ChessBoard fen="8/8/8/1pp5/1PP5/P7/8/8 w - - 0 1" />

**1.b5!** creates the same pattern. After **1...cxb5 2.c5!** or **1...axb5 2.a5!**

### With Kings Present

<ChessBoard fen="8/6k1/8/ppp5/PPP5/8/6K1/8 w - - 0 1" />

The breakthrough still works, but you must check if your king can support the promotion or stop the opponent's counterplay.

### Failed Breakthrough

<ChessBoard fen="8/8/8/ppp5/PPP5/8/8/8 b - - 0 1" />

With Black to move, **1...b4!** and after **2.axb4 a4!** or **2.cxb4 c4!** — Black breaks through instead!

**Whoever moves first wins the breakthrough race.**

## Complex Example

<ChessBoard fen="8/5k2/8/1ppp4/1PPP4/8/5K2/8 w - - 0 1" />

**1.c5!** starts the breakthrough.

After **1...dxc5 2.d5! cxd5 3.b5!** — The b-pawn is a passer!

Or **1...bxc5 2.b5! cxb5 3.d5!** — The d-pawn is a passer!

The kings race to support/stop the pawn, and calculation determines the winner.

## Breakthrough on the Wing

<ChessBoard fen="8/5ppp/8/5PPP/8/8/8/8 w - - 0 1" />

**1.g6!** creates the breakthrough on the kingside.

**1...fxg6 2.f6! gxf6 3.h6** — or —
**1...hxg6 2.h6! gxh6 3.f6** — passed pawn!

## Exercises

### Exercise 1

<ChessBoard fen="8/8/ppp5/PPP5/8/8/8/8 w - - 0 1" />

White to move. Execute the breakthrough.

<details>
<summary>Solution</summary>

**1.b6! axb6** (or cxb6) **2.a6!** (or **2.c6!** if ...cxb6)

The surviving pawn promotes.

</details>

### Exercise 2

<ChessBoard fen="8/3k4/8/2ppp3/2PPP3/8/3K4/8 w - - 0 1" />

White to move. Is there a winning breakthrough?

<details>
<summary>Solution</summary>

**1.d5! exd5** (best) **2.c5! dxc5 3.e5!** — The e-pawn runs.

Now **3...Ke6 4.Ke3 Kxe5 5.Kd3** and White wins the c5 and d5 pawns, but must calculate if Black's c-pawn is dangerous. In fact, White wins the pawn race.

</details>

### Exercise 3

<ChessBoard fen="8/8/8/ppp5/PPP5/8/8/8 b - - 0 1" />

Black to move. Who wins?

<details>
<summary>Solution</summary>

Black wins with **1...b4! 2.cxb4** (or axb4) **2...c4!** (or **2...a4!**)

The player who moves first in this structure wins the breakthrough.

</details>

## Summary

1. **3 vs 3 breakthrough**: Middle pawn sacrifices to create a passed pawn
2. **Key insight**: The sacrifice creates a 2-on-1 situation
3. **First to move wins**: In mutual breakthrough positions, tempo is everything
4. **Defense**: Avoid creating the vulnerable pawn structure
5. **With kings**: Calculate whether the pawn promotes or gets stopped
