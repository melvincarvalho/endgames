import React from 'react';

interface LichessEmbedProps {
  studyId: string;
  chapterId?: string;
  width?: number;
  height?: number;
}

/**
 * Embed a Lichess study for interactive game viewing
 */
export default function LichessEmbed({
  studyId,
  chapterId,
  width = 600,
  height = 400
}: LichessEmbedProps): React.ReactElement {
  const src = chapterId
    ? `https://lichess.org/study/embed/${studyId}/${chapterId}`
    : `https://lichess.org/study/embed/${studyId}`;

  return (
    <div className="chess-viewer">
      <iframe
        src={src}
        width={width}
        height={height}
        frameBorder={0}
        style={{ display: 'block', margin: '0 auto' }}
        title="Lichess Study"
      />
    </div>
  );
}
