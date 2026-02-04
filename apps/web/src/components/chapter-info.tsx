'use client';

import { getBook } from '@/data/books-metadata';

interface ChapterInfoProps {
  bookCode: string;
  chapter: number;
  verseCount: number;
  wordCount?: number;
}

export function ChapterInfo({ bookCode, chapter, verseCount, wordCount }: ChapterInfoProps) {
  const book = getBook(bookCode);
  if (!book) return null;

  return (
    <div className="flex flex-wrap gap-4 text-xs text-[var(--muted-foreground)]">
      <span>{verseCount} verses</span>
      {wordCount && <span>{wordCount.toLocaleString()} words</span>}
      <span>
        Chapter {chapter} of {book.chapters}
      </span>
      <span className="capitalize">{book.language}</span>
    </div>
  );
}

export default ChapterInfo;
