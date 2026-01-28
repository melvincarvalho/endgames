import React, { useState, useCallback } from 'react';
import { Chessboard } from 'react-chessboard';
import { Chess } from 'chess.js';

interface PuzzleProps {
  fen: string;
  solution: string[]; // Array of moves in UCI format (e.g., ['e2e4', 'e7e5'])
  hint?: string;
  title?: string;
  description?: string;
  orientation?: 'white' | 'black';
}

type SquareStyles = Record<string, React.CSSProperties>;

export default function PuzzleBoard({
  fen,
  solution,
  hint,
  title,
  description,
  orientation = 'white',
}: PuzzleProps) {
  const [game, setGame] = useState(new Chess(fen));
  const [currentMoveIndex, setCurrentMoveIndex] = useState(0);
  const [status, setStatus] = useState<'playing' | 'correct' | 'wrong' | 'complete'>('playing');
  const [showHint, setShowHint] = useState(false);
  const [message, setMessage] = useState('Your turn - find the best move!');
  const [highlightSquares, setHighlightSquares] = useState<SquareStyles>({});

  const resetPuzzle = useCallback(() => {
    setGame(new Chess(fen));
    setCurrentMoveIndex(0);
    setStatus('playing');
    setShowHint(false);
    setMessage('Your turn - find the best move!');
    setHighlightSquares({});
  }, [fen]);

  const makeOpponentMove = useCallback((gameCopy: Chess, moveIdx: number) => {
    // Opponent's response (if exists)
    const opponentMove = solution[moveIdx];
    if (opponentMove) {
      setTimeout(() => {
        try {
          const from = opponentMove.slice(0, 2);
          const to = opponentMove.slice(2, 4);
          const promotion = opponentMove.length > 4 ? opponentMove[4] : undefined;

          gameCopy.move({ from, to, promotion });
          setGame(new Chess(gameCopy.fen()));
          setCurrentMoveIndex(moveIdx + 1);

          // Highlight opponent's move
          setHighlightSquares({
            [from]: { backgroundColor: 'rgba(255, 170, 0, 0.4)' },
            [to]: { backgroundColor: 'rgba(255, 170, 0, 0.4)' },
          });

          // Check if puzzle is complete
          if (moveIdx + 1 >= solution.length) {
            setStatus('complete');
            setMessage('Excellent! Puzzle complete!');
          } else {
            setMessage('Correct! Keep going...');
          }
        } catch {
          // Invalid opponent move in solution
        }
      }, 500);
    } else {
      // No more moves - puzzle complete
      setStatus('complete');
      setMessage('Excellent! Puzzle complete!');
    }
  }, [solution]);

  const onDrop = useCallback(
    (sourceSquare: string, targetSquare: string, piece: string) => {
      if (status === 'complete' || status === 'wrong') return false;

      const gameCopy = new Chess(game.fen());

      // Try to make the move
      try {
        const promotion = piece[1]?.toLowerCase() === 'p' &&
          (targetSquare[1] === '8' || targetSquare[1] === '1') ? 'q' : undefined;

        const move = gameCopy.move({
          from: sourceSquare,
          to: targetSquare,
          promotion,
        });

        if (!move) return false;

        // Check if this is the correct move
        const expectedMove = solution[currentMoveIndex];
        const playerMove = sourceSquare + targetSquare + (promotion || '');

        if (playerMove === expectedMove ||
            (playerMove.slice(0, 4) === expectedMove.slice(0, 4) && expectedMove.length === 4)) {
          // Correct move!
          setGame(gameCopy);
          setStatus('correct');

          // Highlight correct move
          setHighlightSquares({
            [sourceSquare]: { backgroundColor: 'rgba(0, 255, 0, 0.4)' },
            [targetSquare]: { backgroundColor: 'rgba(0, 255, 0, 0.4)' },
          });

          // Make opponent's response
          makeOpponentMove(gameCopy, currentMoveIndex + 1);
          return true;
        } else {
          // Wrong move
          setStatus('wrong');
          setMessage('Not quite - try again!');
          setHighlightSquares({
            [sourceSquare]: { backgroundColor: 'rgba(255, 0, 0, 0.4)' },
            [targetSquare]: { backgroundColor: 'rgba(255, 0, 0, 0.4)' },
          });

          // Reset after a moment
          setTimeout(() => {
            setGame(new Chess(game.fen()));
            setStatus('playing');
            setHighlightSquares({});
            setMessage('Try again - find the best move!');
          }, 1000);
          return false;
        }
      } catch {
        return false;
      }
    },
    [game, solution, currentMoveIndex, status, makeOpponentMove]
  );

  const statusColors: Record<string, string> = {
    playing: '#667EEA',
    correct: '#10B981',
    wrong: '#EF4444',
    complete: '#FFD700',
  };

  return (
    <div className="puzzle-container">
      {title && <h3 className="puzzle-title">{title}</h3>}
      {description && <p className="puzzle-description">{description}</p>}

      <div className="puzzle-board-wrapper">
        <Chessboard
          position={game.fen()}
          onPieceDrop={onDrop}
          boardWidth={400}
          boardOrientation={orientation}
          customBoardStyle={{
            borderRadius: '8px',
            boxShadow: '0 8px 30px rgba(0, 0, 0, 0.2)',
          }}
          customLightSquareStyle={{ backgroundColor: '#F0D9B5' }}
          customDarkSquareStyle={{ backgroundColor: '#B58863' }}
          customSquareStyles={highlightSquares}
        />
      </div>

      <div className="puzzle-status" style={{ borderColor: statusColors[status] }}>
        <span className="puzzle-message">{message}</span>
        <span className="puzzle-progress">
          Move {Math.floor(currentMoveIndex / 2) + 1} of {Math.ceil(solution.length / 2)}
        </span>
      </div>

      <div className="puzzle-controls">
        {hint && (
          <button
            className="puzzle-btn puzzle-btn-hint"
            onClick={() => setShowHint(!showHint)}
          >
            {showHint ? 'Hide Hint' : 'Show Hint'}
          </button>
        )}
        <button
          className="puzzle-btn puzzle-btn-reset"
          onClick={resetPuzzle}
        >
          Reset
        </button>
      </div>

      {showHint && hint && (
        <div className="puzzle-hint">
          <strong>Hint:</strong> {hint}
        </div>
      )}
    </div>
  );
}
