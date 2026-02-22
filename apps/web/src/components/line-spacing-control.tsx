'use client';

import * as React from 'react';

export type LineSpacing = 'compact' | 'normal' | 'relaxed';

const STORAGE_KEY = 'line-spacing';

const spacingOptions: { value: LineSpacing; label: string }[] = [
  { value: 'compact', label: 'Compact' },
  { value: 'normal', label: 'Normal' },
  { value: 'relaxed', label: 'Relaxed' },
];

export function useLineSpacing() {
  const [spacing, setSpacingState] = React.useState<LineSpacing>('normal');

  React.useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY) as LineSpacing | null;
    if (stored && ['compact', 'normal', 'relaxed'].includes(stored)) {
      setSpacingState(stored);
    }
  }, []);

  const setSpacing = (newSpacing: LineSpacing) => {
    setSpacingState(newSpacing);
    localStorage.setItem(STORAGE_KEY, newSpacing);
  };

  return { spacing, setSpacing };
}

export function getSpacingClass(spacing: LineSpacing): string {
  switch (spacing) {
    case 'compact':
      return 'leading-snug';
    case 'relaxed':
      return 'leading-loose';
    default:
      return 'leading-relaxed';
  }
}

interface LineSpacingControlProps {
  spacing: LineSpacing;
  onSpacingChange: (spacing: LineSpacing) => void;
}

export function LineSpacingControl({ spacing, onSpacingChange }: LineSpacingControlProps) {
  return (
    <div className="flex items-center gap-2">
      <label className="text-xs text-[var(--muted-foreground)] whitespace-nowrap">
        Spacing:
      </label>
      <div className="flex bg-[var(--background)] border border-[var(--border)] rounded-lg overflow-hidden">
        {spacingOptions.map((option) => (
          <button
            key={option.value}
            onClick={() => onSpacingChange(option.value)}
            className={`px-3 py-2 text-xs transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center ${
              spacing === option.value
                ? 'bg-[var(--accent)] text-[var(--accent-foreground)]'
                : 'hover:bg-[var(--muted)] text-[var(--muted-foreground)]'
            }`}
            title={option.label}
            aria-label={`Line spacing: ${option.label}`}
            aria-pressed={spacing === option.value}
          >
            {option.value === 'compact' ? (
              <svg viewBox="0 0 16 16" fill="currentColor" className="w-3 h-3">
                <rect x="2" y="3" width="12" height="1" />
                <rect x="2" y="6" width="12" height="1" />
                <rect x="2" y="9" width="12" height="1" />
                <rect x="2" y="12" width="12" height="1" />
              </svg>
            ) : option.value === 'normal' ? (
              <svg viewBox="0 0 16 16" fill="currentColor" className="w-3 h-3">
                <rect x="2" y="2" width="12" height="1" />
                <rect x="2" y="6" width="12" height="1" />
                <rect x="2" y="10" width="12" height="1" />
                <rect x="2" y="14" width="12" height="1" />
              </svg>
            ) : (
              <svg viewBox="0 0 16 16" fill="currentColor" className="w-3 h-3">
                <rect x="2" y="1" width="12" height="1" />
                <rect x="2" y="6" width="12" height="1" />
                <rect x="2" y="11" width="12" height="1" />
              </svg>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}

export default LineSpacingControl;
