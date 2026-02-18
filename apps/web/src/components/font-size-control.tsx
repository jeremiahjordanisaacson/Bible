'use client';

import * as React from 'react';

const FONT_SIZES = [
  { label: 'S', value: 'text-sm', description: 'Small' },
  { label: 'M', value: 'text-base', description: 'Medium' },
  { label: 'L', value: 'text-lg', description: 'Large' },
  { label: 'XL', value: 'text-xl', description: 'Extra Large' },
];

const STORAGE_KEY = 'bible-font-size';

export function useFontSize() {
  const [fontSize, setFontSize] = React.useState('text-base');

  React.useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored && FONT_SIZES.some(s => s.value === stored)) {
      setFontSize(stored);
    }
  }, []);

  const updateFontSize = React.useCallback((size: string) => {
    setFontSize(size);
    localStorage.setItem(STORAGE_KEY, size);
  }, []);

  return { fontSize, setFontSize: updateFontSize };
}

interface FontSizeControlProps {
  fontSize: string;
  onFontSizeChange: (size: string) => void;
}

export function FontSizeControl({ fontSize, onFontSizeChange }: FontSizeControlProps) {
  return (
    <div className="flex items-center gap-1">
      <span className="text-xs text-[var(--muted-foreground)] mr-2">Size:</span>
      {FONT_SIZES.map((size) => (
        <button
          key={size.value}
          onClick={() => onFontSizeChange(size.value)}
          className={`
            px-2 py-1 text-xs rounded transition-colors
            ${fontSize === size.value
              ? 'bg-[var(--accent)] text-[var(--accent-foreground)]'
              : 'bg-[var(--muted)] hover:bg-[var(--border)] text-[var(--muted-foreground)]'
            }
          `}
          title={size.description}
          aria-label={`Font size: ${size.description}`}
          aria-pressed={fontSize === size.value}
        >
          {size.label}
        </button>
      ))}
    </div>
  );
}

export default FontSizeControl;
