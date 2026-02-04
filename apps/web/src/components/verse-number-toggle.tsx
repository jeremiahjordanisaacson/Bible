'use client';

import * as React from 'react';

const STORAGE_KEY = 'bible-show-verse-numbers';

export function useVerseNumbers() {
  const [showVerseNumbers, setShowVerseNumbers] = React.useState(true);

  React.useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored !== null) {
      setShowVerseNumbers(stored === 'true');
    }
  }, []);

  const toggleVerseNumbers = React.useCallback(() => {
    setShowVerseNumbers((prev) => {
      const next = !prev;
      localStorage.setItem(STORAGE_KEY, String(next));
      return next;
    });
  }, []);

  return { showVerseNumbers, toggleVerseNumbers };
}

interface VerseNumberToggleProps {
  showVerseNumbers: boolean;
  onToggle: () => void;
}

export function VerseNumberToggle({ showVerseNumbers, onToggle }: VerseNumberToggleProps) {
  return (
    <button
      onClick={onToggle}
      className={`
        flex items-center gap-2 px-3 py-1.5 rounded text-sm transition-colors
        ${showVerseNumbers
          ? 'bg-[var(--accent)] text-[var(--accent-foreground)]'
          : 'bg-[var(--muted)] text-[var(--muted-foreground)] hover:bg-[var(--border)]'
        }
      `}
      title={showVerseNumbers ? 'Hide verse numbers' : 'Show verse numbers'}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-4 h-4"
      >
        <path d="M4 7V4h16v3" />
        <path d="M9 20h6" />
        <path d="M12 4v16" />
      </svg>
      <span>123</span>
    </button>
  );
}

export default VerseNumberToggle;
