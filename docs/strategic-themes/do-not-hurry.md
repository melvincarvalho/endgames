---
sidebar_position: 6
title: Do Not Hurry
description: Patience in won positions
---

import ChessBoard from '@site/src/components/ChessBoard';

# Do Not Hurry

<span className="badge badge--advanced">Advanced</span>

> "In endgames, do not hurry." — Mikhail Shereshevsky

One of the most important yet hardest endgame principles: when you have a winning position, don't rush.

## The Principle

In a won endgame, there's no need to force matters immediately. Instead:

1. **Improve your pieces** to their optimal squares
2. **Restrict your opponent** further
3. **Only strike when everything is perfect**

Premature action often allows counterplay or throws away the win.

## Why Players Hurry

- **Time pressure** — "I need to win before I flag!"
- **Impatience** — "I want to finish this"
- **Fear** — "What if my opponent finds a defense?"
- **Calculation fatigue** — "I'll just play and see"

All of these lead to errors.

## Classic Example

<ChessBoard fen="8/8/4k3/R7/4K3/8/3r4/8 w - - 0 1" />

White has a winning position—the rook is active, the king centralized. But how to convert?

**Wrong: 1.Ra6+?** — Checking without purpose.

**1...Ke7 2.Ra7+ Ke6** — We're back where we started. Nothing accomplished.

**Right: 1.Kf4!** — Improving the king.

**1...Rc2 2.Kg5!** — Still improving. No rush to check.

**2...Kf7 3.Ra7+ Kf8 4.Kf6** — Now the position is perfect, and White wins.

## The Improvement Technique

Before executing your winning plan, ask:

1. **Is my king on its best square?**
2. **Are my pieces maximally active?**
3. **Is my opponent maximally restricted?**

If any answer is "no," improve first.

## Example: King Improvement

<ChessBoard fen="8/5pk1/6p1/6P1/5P2/4K3/8/8 w - - 0 1" />

White is winning (passed pawn, better king). But direct play stumbles:

**Wrong: 1.f5?** — Premature.

**1...gxf5 2.g6+ fxg6** — Now it's a draw (wrong-colored bishop pattern even without bishops).

**Right: 1.Kf4!** (improving the king)

**1...Kf8 2.Ke5 Ke7 3.f5!** — Now it works.

**3...gxf5 4.Kxf5 Kf7 5.g6+ Kg7 6.Kg5** — Winning.

The difference? White's king reached a dominant position first.

## Example: Piece Improvement

<ChessBoard fen="2R5/4k3/4p3/4P3/8/8/1r6/4K3 w - - 0 1" />

White's rook is strong on c8, but the king is passive. Don't hurry with the rook:

**Wrong: 1.Rc7+?** — Checking without clear purpose.

**1...Ke8 2.Ra7 Rb1+ 3.Ke2 Rb2+ 4.Ke3 Rb3+** — Black has counterplay.

**Right: 1.Ke2!** — Activating the king.

**1...Rb7 2.Ke3 Rb3+ 3.Kd4** — The king is safe now.

**3...Rb1 4.Rc7+ Ke8 5.Kc5** — White wins methodically.

## When You SHOULD Hurry

Not every position allows patience:

1. **Pawn races** — You must calculate and act
2. **Opponent's counterplay is real** — Stop it before it develops
3. **Time pressure** — Practical necessity
4. **Clear forced win** — No need to show off

But in most technically won positions, slow is smooth, and smooth is fast.

## Practical Guidelines

| Situation | Do Not Hurry | Hurry |
|-----------|--------------|-------|
| King can improve | ✅ | |
| Pieces can centralize | ✅ | |
| Opponent is passive | ✅ | |
| Opponent has counterplay | | ✅ |
| Forced win is clear | | ✅ |
| Time trouble | | ✅ |

## Exercises

### Exercise 1

<ChessBoard fen="8/5pk1/4p3/4P3/8/4K3/3R4/8 w - - 0 1" />

White to move. What's the correct approach?

<details>
<summary>Solution</summary>

**Do not hurry!**

**1.Kf4!** — Improve the king first.

**1...Kf8 2.Kg5 Ke7 3.Kg6** — Now White dominates.

Not **1.Rd7+? Ke8 2.Rd6 Kf7** — Slower and more complex.

</details>

### Exercise 2

<ChessBoard fen="8/8/1p2k3/1P6/2K5/8/6r1/5R2 w - - 0 1" />

White to move. Hurry or don't hurry?

<details>
<summary>Solution</summary>

**Do not hurry.**

**1.Rf6+!** looks tempting but after **1...Ke5 2.Rxb6 Rc2+** Black has counterplay.

Better: **1.Kb4!** — Controlling c5, preparing Kc5 or Ka5.

**1...Rb2+ 2.Ka5 Ra2+ 3.Kb6** — Now the b-pawn is protected, and White wins.

</details>

## Summary

1. **Do not hurry** = improve before striking
2. **King first** = centralize and activate
3. **Restrict opponent** = before breaking through
4. **Exceptions exist** = counterplay, time pressure, forced wins
5. **Patience wins games** = premature action loses them
