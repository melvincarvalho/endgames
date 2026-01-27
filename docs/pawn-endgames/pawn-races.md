---
sidebar_position: 6
title: Pawn Races
description: When both sides have passed pawns racing to promote
---

import ChessBoard from '@site/src/components/ChessBoard';

# Pawn Races

<span className="badge badge--intermediate">Intermediate</span>

When both sides have passed pawns racing to promote, precise calculation decides the outcome.

## The Basic Question

Who promotes first, and does it matter?

<ChessBoard fen="8/p7/8/8/8/8/7P/8 w - - 0 1" />

Both pawns are 5 squares from promotion. White moves first, so White promotes first. But is that enough to win?

## Counting Tempi

### Step 1: Count Moves to Promote

For each pawn, count the squares to the promotion rank.

<ChessBoard fen="8/1p6/8/8/8/8/5P2/8 w - - 0 1" />

- White's pawn: f2-f3-f4-f5-f6-f7-f8 = 6 moves
- Black's pawn: b7-b6-b5-b4-b3-b2-b1 = 6 moves

With equal moves, the player who moves first promotes first.

### Step 2: Check for Checks

After promotion, is there a winning check?

<ChessBoard fen="8/8/7k/8/8/8/P6p/K7 w - - 0 1" />

After **1.a4 h1=Q+ 2.Kb2**, Black's queen gives check, winning a tempo. This changes everything!

### Step 3: Can the Queen Stop the Pawn?

A queen can usually stop a pawn unless it's on the 7th rank with king support.

## The Queen vs. Pawn Race

When one side promotes first, can they stop the other pawn?

<ChessBoard fen="8/8/8/8/p7/8/7P/8 w - - 0 1" />

- White: 6 moves to promote
- Black: 4 moves to promote

Black promotes first! After **1.h4 a3 2.h5 a2 3.h6 a1=Q 4.h7**, Black has a queen but White's pawn is on h7.

Can the queen stop it? **4...Qh1!** — Yes, easily.

## Critical Distances

### Queen Stops Pawn

A queen can always stop a pawn on the 6th rank or below (with rare exceptions involving stalemate).

### Pawn on 7th Rank

If the pawn reaches the 7th with king support, the queen may not be able to stop it.

<ChessBoard fen="8/7P/6K1/8/8/8/8/q7 w - - 0 1" />

White promotes! The queen cannot prevent h8=Q.

## Promotion with Check

A check after promotion gains a crucial tempo.

<ChessBoard fen="8/8/8/k7/8/8/p6P/7K w - - 0 1" />

**1.h4 a1=Q+ 2.Kh2 Qb1** — Black's check forced White to waste a move. Now Black wins the pawn race.

## The Skewer/Fork After Promotion

Sometimes the promoted queen can win the enemy queen.

<ChessBoard fen="8/8/8/8/8/8/P1k4p/7K w - - 0 1" />

**1.a4 h1=Q+ 2.Kg2 Qg1+ 3.Kf3 Qf1+ 4.Ke4** and the checks run out. Then **4...Kd2 5.a5 Qb1 6.a6 Qa2 7.a7 Qxa7**

But sometimes the geometry favors a fork:

**If the kings are diagonally aligned**, one queen may be able to skewer or fork.

## Complex Example

<ChessBoard fen="8/8/6k1/8/p7/8/6PP/6K1 w - - 0 1" />

Count carefully:
- Black's a-pawn: a4-a3-a2-a1 = 4 moves to promote
- White's pawns: Can one outrace?

**1.h4!** (not g4? a3 2.g5 a2 3.g6 a1=Q 4.g7 Qa7!)

**1...a3 2.h5 a2 3.h6 a1=Q 4.h7!**

Now **4...Qf6 5.h8=Q Qxh8 6.g4!** — White's second pawn is a runner!

Having **two passed pawns** often wins pawn races even when behind initially.

## King Position Matters

<ChessBoard fen="8/8/8/6k1/8/p7/7P/7K w - - 0 1" />

**1.h4 a2 2.h5 a1=Q 3.h6 Qf6 4.h7 Qf1+ 5.Kh2 Qf4+ 6.Kh3 Qf5+** — Black's king position allows perpetual check harassment!

Compare to:

<ChessBoard fen="8/8/8/8/8/p5k1/7P/7K w - - 0 1" />

**1.h4 a2 2.h5 a1=Q 3.h6 Qa8 4.h7** — The queen stops the pawn easily, but Black's king is safer.

## Exercises

### Exercise 1

<ChessBoard fen="8/8/8/8/6k1/p7/7P/6K1 w - - 0 1" />

White to move. What's the result?

<details>
<summary>Solution</summary>

**1.h4 a2 2.h5 a1=Q+ 3.Kh2 Qb2+ 4.Kh3 Qc3+ 5.Kh4**

Black has checks but they run out. **5...Qd4+ 6.Kh5 Qd1+ 7.Kh6 Qd2+ 8.Kg6!** and the pawn promotes. **Draw** — both have queens.

</details>

### Exercise 2

<ChessBoard fen="8/8/8/k7/7p/P7/8/K7 w - - 0 1" />

Who wins this pawn race?

<details>
<summary>Solution</summary>

Both pawns need 5 moves. White moves first, so **1.a4 h3 2.a5 h2 3.a6 h1=Q 4.a7 Qa1+ 5.Kb2 Qb1+ 6.Kc3 Qa1+**

White cannot escape checks while defending the pawn. But after **6...Qc1+ 7.Kd4 Qd2+ 8.Ke5**, the a-pawn promotes. **Draw** — both sides get queens.

</details>

## Summary

1. **Count moves** to promotion for both pawns
2. **Check for checks** — promotion with check wins a tempo
3. **Queen vs pawn** — Queen usually wins unless pawn is on 7th with king
4. **King position** — Determines check possibilities
5. **Two pawns** — Often beat one even when behind in the race
