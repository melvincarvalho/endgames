---
sidebar_position: 3
title: Tablebase Guide
description: Using endgame tablebases for perfect play
---

# Endgame Tablebases

Tablebases contain perfect play for all positions with a limited number of pieces — every move is proven correct, with no guesswork.

## What Are Tablebases?

Databases computed by retrograde analysis showing the objective result (win/draw/lose) and optimal moves for every legal position with a small number of pieces. They represent **solved chess** for those material configurations.

## Reading Tablebase Results

Tablebases report two key values:

- **WDL (Win/Draw/Loss)** — The outcome with perfect play from both sides: `+2` (win), `0` (draw), or `-2` (loss). The ±2 distinguishes forced wins/losses from positions where the 50-move rule affects the outcome (shown as ±1).
- **DTZ (Distance to Zero)** — The number of moves to the next pawn move or capture (which resets the 50-move counter). A lower DTZ means the win (or draw defense) is faster. When studying technique, follow the moves that minimize DTZ.

## Tablebase Formats

| Format | Pieces | Notes |
|--------|--------|-------|
| Syzygy | Up to 7 | Modern compressed format — the current standard, used by all major engines (Stockfish, Komodo, etc.) |
| Nalimov | Up to 6 | Classic format — widely supported in older tools, larger file sizes |
| Lomonosov | Up to 8 | Complete but not publicly available for download |

## Online Tools

### Lichess Tablebase

**[lichess.org/analysis](https://lichess.org/analysis)** — Free, no account needed. Set up any position with 7 pieces or fewer and Lichess will show the tablebase result, DTZ, and optimal moves directly on the board. The easiest way to look up a position.

### Syzygy Tables Online

**[syzygy-tables.info](https://syzygy-tables.info/)** — Query any 7-piece position directly via FEN. Shows WDL and DTZ for every legal move, colour-coded so you can instantly see which moves win, draw, or lose.

## Offline / Local Setup

1. **Download Syzygy files** — Available from multiple mirrors (search "syzygy endgame tablebases download"). The 3-4-5 piece set is small (~1 GB); 6-piece is ~150 GB; 7-piece is ~18 TB.
2. **Configure your engine** — Stockfish supports Syzygy natively. Set the `SyzygyPath` option to the directory containing the files.
3. **Use a GUI** — Most chess GUIs (Arena, Cute Chess, Scid vs PC, Fritz) support tablebase probing once configured.

## When Tablebases Are Useful

- **Verify your analysis** — Check whether your assessment of a position is correct
- **Learn perfect technique** — Study the winning method for a material configuration to understand the underlying pattern
- **Resolve theoretical debates** — Some endgame questions were only settled by tablebases (e.g. certain rook + pawn vs rook positions)
- **Endgame composition** — Confirm that a study or puzzle is sound

## Limitations

- **Piece count** — Only useful for positions with few pieces (7 or fewer for publicly available data)
- **Not a substitute for understanding** — Looking up the answer doesn't teach you the technique; use tablebases to verify, then study the moves to learn *why*
- **Practical play** — Under time controls, you can't consult a tablebase; the goal is to internalise the patterns beforehand
