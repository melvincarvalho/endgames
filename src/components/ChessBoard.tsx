import React from 'react';
import { Chessboard } from 'react-chessboard';

interface ChessBoardProps {
  fen: string;
  width?: number;
  orientation?: 'white' | 'black';
}

/**
 * Static chessboard component for displaying a position from FEN
 */
export default function ChessBoard({
  fen,
  width = 400,
  orientation = 'white'
}: ChessBoardProps): React.ReactElement {
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
        />
      </div>
      <div className="fen-display">
        <strong>FEN:</strong> {fen}
      </div>
    </div>
  );
}
