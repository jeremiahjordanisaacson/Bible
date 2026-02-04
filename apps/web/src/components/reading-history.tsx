'use client';

import * as React from 'react';
import Link from 'next/link';
import { getReadingHistory, clearReadingHistory, type ReadingHistoryEntry } from '@/lib/reading-history';
import { getBook } from '@/data/books-metadata';

export function ReadingHistoryList() {
  const [history, setHistory] = React.useState<ReadingHistoryEntry[]>([]);

  React.useEffect(() => {
    setHistory(getReadingHistory());
  }, []);

  const handleClear = () => {
    clearReadingHistory();
    setHistory([]);
  };

  if (history.length === 0) {
    return (
      <div className="text-sm text-[var(--muted-foreground)]">
        No reading history yet. Start reading to see your recent chapters here.
      </div>
    );
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-3">
        <span className="text-sm text-[var(--muted-foreground)]">
          {history.length} recent {history.length === 1 ? 'chapter' : 'chapters'}
        </span>
        <button
          onClick={handleClear}
          className="text-xs text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors"
        >
          Clear
        </button>
      </div>
      <div className="flex flex-wrap gap-2">
        {history.map((entry) => {
          const book = getBook(entry.bookCode);
          if (!book) return null;
          return (
            <Link
              key={`${entry.bookCode}-${entry.chapter}-${entry.timestamp}`}
              href={`/read/${entry.bookCode}/${entry.chapter}/`}
              className="px-3 py-1.5 bg-[var(--muted)] rounded text-sm hover:bg-[var(--accent)] hover:text-[var(--accent-foreground)] transition"
            >
              {book.name} {entry.chapter}
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default ReadingHistoryList;
