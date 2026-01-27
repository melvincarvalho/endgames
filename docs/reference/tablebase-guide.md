---
sidebar_position: 3
title: Tablebase Guide
description: Using endgame tablebases for perfect play
---

# Endgame Tablebases

Tablebases contain perfect play for all positions with a limited number of pieces.

## What Are Tablebases?

Databases computed by retrograde analysis showing the objective result (win/draw/lose) and optimal moves for every legal position.

## Available Tablebases

| Pieces | Name | Notes |
|--------|------|-------|
| Up to 6 | Nalimov | Classic, widely supported |
| Up to 7 | Syzygy | Modern, compressed format |
| Up to 8 | Lomonosov | Complete but not publicly available |

## How to Use

### Online

- [Syzygy Tables](https://syzygy-tables.info/) — Query any 7-piece position
- [Lichess Analysis](https://lichess.org/analysis) — Integrated tablebase lookup

### Local

Download Syzygy files and configure your engine to use them.

## Practical Applications

1. **Verify your analysis** — Check if your assessment is correct
2. **Learn perfect technique** — Study tablebase moves to understand patterns
3. **Resolve debates** — Some theoretical positions were only proven by tablebases

## Limitations

- Only useful for low piece counts
- Don't replace understanding with lookup
- Time controls may not allow consultation
