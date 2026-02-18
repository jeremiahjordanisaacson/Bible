'use client';

import * as React from 'react';

export type ReadingTheme = 'default' | 'sepia' | 'night';

const STORAGE_KEY = 'reading-theme';

const themes: { value: ReadingTheme; label: string; icon: React.ReactNode }[] = [
  {
    value: 'default',
    label: 'Default',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
        <circle cx="12" cy="12" r="5" />
        <line x1="12" y1="1" x2="12" y2="3" />
        <line x1="12" y1="21" x2="12" y2="23" />
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
        <line x1="1" y1="12" x2="3" y2="12" />
        <line x1="21" y1="12" x2="23" y2="12" />
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
      </svg>
    ),
  },
  {
    value: 'sepia',
    label: 'Sepia',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
      </svg>
    ),
  },
  {
    value: 'night',
    label: 'Night',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
      </svg>
    ),
  },
];

export function useReadingTheme() {
  const [theme, setThemeState] = React.useState<ReadingTheme>('default');

  React.useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY) as ReadingTheme | null;
    if (stored && ['default', 'sepia', 'night'].includes(stored)) {
      setThemeState(stored);
    }
  }, []);

  const setTheme = (newTheme: ReadingTheme) => {
    setThemeState(newTheme);
    localStorage.setItem(STORAGE_KEY, newTheme);
  };

  return { theme, setTheme };
}

interface ReadingThemeSelectorProps {
  theme: ReadingTheme;
  onThemeChange: (theme: ReadingTheme) => void;
}

export function ReadingThemeSelector({ theme, onThemeChange }: ReadingThemeSelectorProps) {
  return (
    <div className="flex items-center gap-1 bg-[var(--background)] border border-[var(--border)] rounded-lg p-1">
      {themes.map((t) => (
        <button
          key={t.value}
          onClick={() => onThemeChange(t.value)}
          className={`p-1.5 rounded transition-colors ${
            theme === t.value
              ? 'bg-[var(--accent)] text-[var(--accent-foreground)]'
              : 'hover:bg-[var(--muted)] text-[var(--muted-foreground)]'
          }`}
          title={t.label}
        >
          {t.icon}
        </button>
      ))}
    </div>
  );
}

interface ReadingThemeWrapperProps {
  theme: ReadingTheme;
  children: React.ReactNode;
}

export function ReadingThemeWrapper({ theme, children }: ReadingThemeWrapperProps) {
  const themeStyles: Record<ReadingTheme, React.CSSProperties> = {
    default: {},
    sepia: {
      '--foreground': '#5c4b37',
      '--background': '#f4ecd8',
      '--muted': '#e8dcc6',
      '--muted-foreground': '#7a6b58',
      '--border': '#d4c4a8',
      '--accent': '#8b5e3c',
      '--accent-foreground': '#ffffff',
    } as React.CSSProperties,
    night: {
      '--foreground': '#e0e0e0',
      '--background': '#1a1a2e',
      '--muted': '#2a2a42',
      '--muted-foreground': '#9898b0',
      '--border': '#3a3a55',
      '--accent': '#6c8aec',
      '--accent-foreground': '#ffffff',
    } as React.CSSProperties,
  };

  const bgClasses: Record<ReadingTheme, string> = {
    default: '',
    sepia: 'bg-[#f4ecd8] text-[#5c4b37]',
    night: 'bg-[#1a1a2e] text-[#e0e0e0]',
  };

  return (
    <div
      className={`min-h-full rounded-lg transition-colors ${bgClasses[theme]}`}
      style={themeStyles[theme]}
    >
      {children}
    </div>
  );
}

export default ReadingThemeSelector;
