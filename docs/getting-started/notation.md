---
sidebar_position: 3
title: Chess Notation
description: A quick reference for algebraic notation and FEN strings
---

# Chess Notation

This guide uses standard algebraic notation and FEN strings. Here's a quick reference.

## Algebraic Notation

### Pieces

| Symbol | Piece |
|--------|-------|
| K | King |
| Q | Queen |
| R | Rook |
| B | Bishop |
| N | Knight |
| (none) | Pawn |

### Moves

- **e4** — Pawn to e4
- **Nf3** — Knight to f3
- **Bxc6** — Bishop captures on c6
- **O-O** — Kingside castling
- **O-O-O** — Queenside castling
- **e8=Q** — Pawn promotes to queen
- **Rd1+** — Rook to d1, check
- **Qh7#** — Queen to h7, checkmate

### Disambiguation

When two identical pieces can move to the same square:

- **Rad1** — Rook from the a-file to d1
- **R1d3** — Rook from the 1st rank to d3
- **Qh4e1** — Queen from h4 to e1 (rare)

## FEN Notation

FEN (Forsyth-Edwards Notation) describes a position in a single line.

### Example

```
rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1
```

This is the starting position.

### Structure

```
[piece placement] [side to move] [castling] [en passant] [halfmove] [fullmove]
```

1. **Piece placement**: Ranks 8 to 1, separated by `/`. Lowercase = black, uppercase = white. Numbers = empty squares.

2. **Side to move**: `w` (white) or `b` (black)

3. **Castling rights**: `K` (white kingside), `Q` (white queenside), `k` (black kingside), `q` (black queenside), or `-` if none

4. **En passant target**: The square behind a pawn that just moved two squares, or `-`

5. **Halfmove clock**: Moves since last pawn move or capture (for 50-move rule)

6. **Fullmove number**: Increments after black's move

### Endgame FEN Examples

| Position | FEN |
|----------|-----|
| K+Q vs K | `4k3/8/8/8/8/8/8/4K2Q w - - 0 1` |
| Lucena | `1K1k4/1P6/8/8/8/8/r7/2R5 w - - 0 1` |
| Philidor | `8/8/8/8/4k3/4p3/4K3/4R3 w - - 0 1` |

## Using FEN

1. Copy the FEN string from any position in this guide
2. Paste into [Lichess Analysis](https://lichess.org/analysis) or your preferred tool
3. Analyze with engine assistance or practice against Stockfish
