import React from 'react';

type Difficulty = 'beginner' | 'intermediate' | 'advanced' | 'master';

interface DifficultyBadgeProps {
  level: Difficulty;
  mustKnow?: boolean;
}

const labels: Record<Difficulty, string> = {
  beginner: 'Beginner',
  intermediate: 'Intermediate',
  advanced: 'Advanced',
  master: 'Master',
};

/**
 * Badge component showing difficulty level
 */
export default function DifficultyBadge({
  level,
  mustKnow = false
}: DifficultyBadgeProps): React.ReactElement {
  return (
    <>
      <span className={`badge badge--${level}`}>
        {labels[level]}
      </span>
      {mustKnow && (
        <span className="badge badge--must-know">
          Must Know
        </span>
      )}
    </>
  );
}
