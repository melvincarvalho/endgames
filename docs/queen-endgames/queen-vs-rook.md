---
sidebar_position: 3
title: Queen vs Rook
description: The winning technique for Q vs R
---

import ChessBoard from '@site/src/components/ChessBoard';

# Queen vs Rook

<span className="badge badge--advanced">Advanced</span>

The queen wins against the rook, but the technique requires precision and can take up to 31 moves of perfect play.

## The Advantage

The queen is worth approximately 9 points, the rook 5. But unlike material advantages with minor pieces, the queen vs rook is almost always winning (with rare fortress exceptions).

## The Winning Method

### Step 1: Centralize

<ChessBoard fen="8/8/8/3Q4/8/8/5rk1/6K1 w - - 0 1" />

Keep the queen centralized where it controls maximum squares.

### Step 2: Restrict the King

Use the queen to limit the defending king's movement, pushing it toward the edge.

### Step 3: Separate King and Rook

The rook defends best when near its king. Force them apart.

### Step 4: Fork or Pin

Win the rook through tactical means—forks, skewers, or pins.

## Basic Position

<ChessBoard fen="8/8/8/8/5Q2/8/4r3/4K1k1 w - - 0 1" />

White plays **Qg3+!**

**1...Kf1 2.Qf3+ Kg1 3.Qe3+ Kf1 4.Qd3+ Kg1 5.Qd1+!**

Now **5...Kf2 6.Qxe2+** wins the rook, or **5...Kh2 6.Qd5** restricting the rook further.

## The Philidor Position (Q vs R)

<ChessBoard fen="1Q6/8/8/8/8/1r6/1k6/1K6 w - - 0 1" />

A key defensive formation. Black's rook shields the king.

**1.Qe5+ Rc3!** — The rook interposes, maintaining the shield.

**2.Qe2+ Rc2 3.Qe5+ Rc3** — Black holds by keeping the rook between queen and king.

But White can improve by maneuvering the queen to force the rook to an inferior square.

## Breaking the Defense

<ChessBoard fen="1Q6/8/8/8/8/1rk5/8/1K6 w - - 0 1" />

**1.Qf4!** — Threatening Qf3+, winning the rook.

**1...Rb8 2.Qe3+ Kd4 3.Qd2+** — The king is pushed to the edge.

Eventually the queen creates a winning fork or pin.

## Drawing Fortress (Rare)

<ChessBoard fen="8/8/8/8/4k3/8/2r5/K3Q3 b - - 0 1" />

In some positions with the rook actively checking and the queen's king poorly placed, a fortress can hold:

**1...Rc1+ 2.Kb2 Rc2+ 3.Kb3 Rc3+ 4.Kb4 Rc4+**

The rook perpetually checks, and the queen cannot shield without losing the attack.

But these fortresses are rare and require precise defense.

## Practical Considerations

### Time Pressure

Q vs R requires many moves of precise play. In time trouble, both sides can blunder.

### 50-Move Rule

Perfect defense can take the attacker close to 50 moves. Know the technique well!

### Psychological Pressure

The defender must stay alert for 30+ moves. The attacker should remain patient.

## Exercises

### Exercise 1

<ChessBoard fen="8/8/8/3Q4/8/8/3rk3/4K3 w - - 0 1" />

White to move. Win the rook.

<details>
<summary>Solution</summary>

**1.Qg5+! Kd1** (or **1...Kf1 2.Qg1+ Ke2 3.Qg2**)

**2.Qa5!** — Pinning the rook!

**2...Ke2 3.Qxd2+** — Won.

</details>

### Exercise 2

<ChessBoard fen="8/8/8/4Q3/8/8/1k1r4/2K5 w - - 0 1" />

White to move. How should White proceed?

<details>
<summary>Solution</summary>

**1.Qe5+!** — Checking and attacking the rook.

**1...Kc3 2.Qxd5** — Won, or **1...Kb3 2.Qe3+ Ka2 3.Qxd2** — Won.

Central queen with active checks wins quickly.

</details>

## Summary

1. **Queen wins** — With correct technique
2. **Method** — Centralize, restrict king, separate pieces, fork/pin
3. **Can take 30+ moves** — Patience required
4. **Fortresses exist** — But rare and require precise defense
5. **Practice** — Know the patterns to win confidently
