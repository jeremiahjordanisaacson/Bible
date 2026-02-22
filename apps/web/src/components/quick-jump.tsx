'use client';

import * as React from 'react';
import * as Popover from '@radix-ui/react-popover';
import { allBooks, getBook } from '@/data/books-metadata';

interface QuickJumpProps {
  onNavigate: (bookCode: string, chapter: number) => void;
}

export function QuickJump({ onNavigate }: QuickJumpProps) {
  const [open, setOpen] = React.useState(false);
  const [input, setInput] = React.useState('');
  const [error, setError] = React.useState('');
  const inputRef = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    if (open && inputRef.current) {
      inputRef.current.focus();
    }
  }, [open]);

  const parseReference = (text: string): { bookCode: string; chapter: number } | null => {
    const trimmed = text.trim().toLowerCase();

    // Try to match "book chapter" or "book chapter:verse" patterns
    const match = trimmed.match(/^(.+?)\s*(\d+)(?::\d+)?$/);
    if (!match) return null;

    const bookInput = match[1].trim();
    const chapter = parseInt(match[2], 10);

    // Find matching book
    const book = allBooks.find(
      (b) =>
        b.code.toLowerCase() === bookInput ||
        b.name.toLowerCase() === bookInput ||
        b.name.toLowerCase().startsWith(bookInput)
    );

    if (!book) return null;
    if (chapter < 1 || chapter > book.chapters) return null;

    return { bookCode: book.code, chapter };
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = parseReference(input);
    if (result) {
      onNavigate(result.bookCode, result.chapter);
      setOpen(false);
      setInput('');
      setError('');
    } else {
      setError('Invalid reference. Try "John 3" or "Genesis 1"');
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      setOpen(false);
    }
  };

  // Listen for global keyboard shortcut
  React.useEffect(() => {
    const handleGlobalKeyDown = (e: KeyboardEvent) => {
      if (
        e.key === 'g' &&
        !e.metaKey &&
        !e.ctrlKey &&
        !(e.target instanceof HTMLInputElement) &&
        !(e.target instanceof HTMLTextAreaElement)
      ) {
        e.preventDefault();
        setOpen(true);
      }
    };

    window.addEventListener('keydown', handleGlobalKeyDown);
    return () => window.removeEventListener('keydown', handleGlobalKeyDown);
  }, []);

  return (
    <Popover.Root open={open} onOpenChange={setOpen}>
      <Popover.Trigger asChild>
        <button
          className="p-2 rounded hover:bg-[var(--muted)] text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors"
          title="Quick jump (G)"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-5 h-5"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
          </svg>
        </button>
      </Popover.Trigger>

      <Popover.Portal>
        <Popover.Content
          className="z-50 bg-[var(--background)] border border-[var(--border)] rounded-lg shadow-lg p-4 w-[300px]"
          sideOffset={8}
        >
          <form onSubmit={handleSubmit}>
            <label htmlFor="quick-jump-input" className="block text-sm font-medium mb-2">
              Go to reference
            </label>
            <input
              id="quick-jump-input"
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => {
                setInput(e.target.value);
                setError('');
              }}
              onKeyDown={handleKeyDown}
              placeholder="e.g., John 3, Genesis 1"
              className="w-full px-3 py-2 border border-[var(--border)] rounded bg-[var(--background)] text-[var(--foreground)] placeholder:text-[var(--muted-foreground)]"
              aria-describedby={error ? 'quick-jump-error' : undefined}
              aria-invalid={error ? true : undefined}
            />
            {error && (
              <p id="quick-jump-error" className="mt-2 text-sm text-red-500" role="alert">{error}</p>
            )}
            <div className="mt-3 flex justify-between items-center">
              <span className="text-xs text-[var(--muted-foreground)]">
                Press <kbd className="px-1 py-0.5 bg-[var(--muted)] rounded text-xs">G</kbd> to open
              </span>
              <button
                type="submit"
                className="px-3 py-1 bg-[var(--accent)] text-[var(--accent-foreground)] rounded text-sm"
              >
                Go
              </button>
            </div>
          </form>
          <Popover.Arrow className="fill-[var(--border)]" />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}

export default QuickJump;
