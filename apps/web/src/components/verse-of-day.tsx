'use client';

import * as React from 'react';
import Link from 'next/link';
import { getVerseOfDay } from '@/lib/verse-of-day';

export function VerseOfDay() {
  const [verse, setVerse] = React.useState<ReturnType<typeof getVerseOfDay> | null>(null);

  React.useEffect(() => {
    setVerse(getVerseOfDay());
  }, []);

  if (!verse) {
    return null;
  }

  return (
    <Link
      href={`/read/${verse.book}/${verse.chapter}/`}
      className="block border border-[var(--border)] rounded-lg p-6 hover:border-[var(--accent)] transition group"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="text-sm text-[var(--muted-foreground)] mb-1">Verse of the Day</div>
          <div className="font-medium text-lg group-hover:text-[var(--accent)] transition-colors">
            {verse.ref}
          </div>
          <div className="text-[var(--muted-foreground)] mt-1">{verse.summary}</div>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-5 h-5 text-[var(--muted-foreground)] group-hover:text-[var(--accent)] transition-colors flex-shrink-0"
        >
          <path d="M5 12h14" />
          <path d="m12 5 7 7-7 7" />
        </svg>
      </div>
    </Link>
  );
}

export default VerseOfDay;
