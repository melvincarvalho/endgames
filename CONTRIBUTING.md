# Contributing to Chess Endgames

Thank you for contributing! This guide covers the basics.

## Chess Accuracy

All chess positions, puzzles and analysis lines on this site must be **legal and engine-checked**.

- Every FEN must represent a legal position (correct piece counts, valid square occupancy, legal side-to-move with no king in check by the non-moving side).
- Every puzzle solution must be sound — the stated solution must actually work against best defense.
- Position evaluations (win/draw/loss) must be accurate.

## CI: chess-check

A CI engine-gate (`chess-check`) runs on every pull request. It executes `scripts/chess-check.py`, which:

- Validates every FEN in `<ChessBoard>` and `<PuzzleBoard>` tags
- Checks puzzle solutions for soundness using Stockfish

**If the check fails, the PR cannot be merged.** Fix the flagged positions before requesting review.

## Before Submitting

1. Run the checker locally:

   ```bash
   pip install chess
   python scripts/chess-check.py
   ```

2. Fix any errors it reports.

3. Keep edits **docs-only** — only modify Markdown files under `docs/`. Do not change build config, CI, or code files without prior discussion.

## Making a PR

1. Fork or branch from `main`.
2. Make your change (one logical change per PR).
3. Push and open a pull request.
4. Wait for the `chess-check` CI to pass.
5. Address any review feedback.

That's it — thanks for helping improve the guide!
