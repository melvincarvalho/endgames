import React from 'react';
import { Chessboard } from 'react-chessboard';

interface ChessBoardProps {
  fen: string;
  width?: number;
  orientation?: 'white' | 'black';
  /** Squares to mark (e.g. key squares), shown as green dots. */
  highlightSquares?: string[];
}

/**
 * Static chessboard component for displaying a position from FEN.
 * Pass `highlightSquares` to mark squares (e.g. key squares) as green dots,
 * instead of placing illegal marker pieces on the board.
 */
export default function ChessBoard({
  fen,
  width = 400,
  orientation = 'white',
  highlightSquares = []
}: ChessBoardProps): React.ReactElement {
  const customSquareStyles = Object.fromEntries(
    highlightSquares.map((sq) => [
      sq,
      {
        background:
          'radial-gradient(circle, rgba(38, 166, 65, 0.55) 26%, transparent 28%)',
      },
    ])
  );
  return (
    <div className="chess-viewer">
      <div className="chess-viewer-board" style={{ maxWidth: width }}>
        <Chessboard
          position={fen}
          boardOrientation={orientation}
          arePiecesDraggable={false}
          customBoardStyle={{
            borderRadius: '4px',
            boxShadow: '0 2px 10px rgba(0, 0, 0, 0.2)',
          }}
          customDarkSquareStyle={{ backgroundColor: '#B58863' }}
          customLightSquareStyle={{ backgroundColor: '#F0D9B5' }}
          customSquareStyles={customSquareStyles}
        />
      </div>
      <div className="fen-display">
        <strong>FEN:</strong> {fen}
      </div>
    </div>
  );
}
