'use client';

import * as React from 'react';

interface ChapterSearchProps {
  onSearch: (query: string) => void;
  resultCount?: number;
}

export function ChapterSearch({ onSearch, resultCount }: ChapterSearchProps) {
  const [isOpen, setIsOpen] = React.useState(false);
  const [query, setQuery] = React.useState('');
  const inputRef = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'f') {
        e.preventDefault();
        setIsOpen(true);
        setTimeout(() => inputRef.current?.focus(), 100);
      }
      if (e.key === 'Escape') {
        setIsOpen(false);
        setQuery('');
        onSearch('');
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [onSearch]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    onSearch(value);
  };

  const handleClose = () => {
    setIsOpen(false);
    setQuery('');
    onSearch('');
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => {
          setIsOpen(true);
          setTimeout(() => inputRef.current?.focus(), 100);
        }}
        className="p-2 rounded hover:bg-[var(--muted)] text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors no-print"
        title="Search in chapter (Ctrl+F)"
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
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.3-4.3" />
        </svg>
      </button>
    );
  }

  return (
    <div className="flex items-center gap-2 bg-[var(--background)] border border-[var(--border)] rounded-lg px-2 py-1 no-print">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-4 h-4 text-[var(--muted-foreground)]"
      >
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.3-4.3" />
      </svg>
      <input
        ref={inputRef}
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Search..."
        className="bg-transparent border-none outline-none text-sm w-32 placeholder:text-[var(--muted-foreground)]"
      />
      {query && resultCount !== undefined && (
        <span className="text-xs text-[var(--muted-foreground)]">
          {resultCount} {resultCount === 1 ? 'match' : 'matches'}
        </span>
      )}
      <button
        onClick={handleClose}
        className="p-1 hover:text-[var(--foreground)] text-[var(--muted-foreground)]"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-3 h-3"
        >
          <path d="M18 6 6 18" />
          <path d="m6 6 12 12" />
        </svg>
      </button>
    </div>
  );
}

export function highlightSearchMatches(text: string, query: string): React.ReactNode {
  if (!query || query.length < 2) return text;

  const regex = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
  const parts = text.split(regex);

  return parts.map((part, i) =>
    regex.test(part) ? (
      <mark key={i} className="bg-yellow-300 dark:bg-yellow-700 rounded px-0.5">
        {part}
      </mark>
    ) : (
      part
    )
  );
}

export default ChapterSearch;
