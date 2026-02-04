'use client';

import * as React from 'react';
import { toggleBookmark, isBookmarked } from '@/lib/bookmarks';

interface BookmarkButtonProps {
  bookCode: string;
  chapter: number;
  verse: number;
  text: string;
}

export function BookmarkButton({ bookCode, chapter, verse, text }: BookmarkButtonProps) {
  const ref = `${bookCode}.${chapter}.${verse}`;
  const [bookmarked, setBookmarked] = React.useState(false);

  React.useEffect(() => {
    setBookmarked(isBookmarked(ref));
  }, [ref]);

  const handleClick = () => {
    const result = toggleBookmark({
      ref,
      bookCode,
      chapter,
      verse,
      text: text.slice(0, 200),
    });
    setBookmarked(result);
  };

  return (
    <button
      onClick={handleClick}
      className="p-1 rounded hover:bg-[var(--muted)] text-[var(--muted-foreground)] hover:text-[var(--accent)] transition-colors"
      title={bookmarked ? 'Remove bookmark' : 'Add bookmark'}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill={bookmarked ? 'currentColor' : 'none'}
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={`w-4 h-4 ${bookmarked ? 'text-[var(--accent)]' : ''}`}
      >
        <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" />
      </svg>
    </button>
  );
}

export default BookmarkButton;
