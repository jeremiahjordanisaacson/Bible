'use client';

import * as React from 'react';
import Link from 'next/link';
import { VerseDisplay } from '@/components/verse-display';
import { LayerToggle, ViewToggles } from '@/components/layer-toggle';
import { useBibleStore } from '@/store/bible-store';
import { useKeyboardNavigation } from '@/hooks/use-keyboard-navigation';
import genesisChapter1Verses from '@/data/sample-genesis';
import johnChapter1Verses from '@/data/sample-john';
import { getVariantsForVerse } from '@/data/variants';
import { getBook } from '@/data/books-metadata';

// Sample data mapping
function getChapterData(book: string, chapter: number) {
  if (book === 'Gen' && chapter === 1) {
    return genesisChapter1Verses;
  }
  if (book === 'John' && chapter === 1) {
    return johnChapter1Verses;
  }
  return null;
}

interface ChapterContentProps {
  bookCode: string;
  chapterNum: number;
}

export function ChapterContent({ bookCode, chapterNum }: ChapterContentProps) {
  const { navigateTo, setCurrentBook, setCurrentChapter } = useBibleStore();

  // Enable keyboard navigation
  useKeyboardNavigation();

  // Update store on mount
  React.useEffect(() => {
    setCurrentBook(bookCode);
    setCurrentChapter(chapterNum);
  }, [bookCode, chapterNum, setCurrentBook, setCurrentChapter]);

  const book = getBook(bookCode);
  const verses = getChapterData(bookCode, chapterNum);

  // Navigation helpers
  const hasPrevChapter = chapterNum > 1;
  const hasNextChapter = book && chapterNum < book.chapters;

  if (!book) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-2xl font-bold mb-4">Book Not Found</h1>
          <p className="text-[var(--muted-foreground)] mb-8">
            The book &quot;{bookCode}&quot; is not available in the current dataset.
          </p>
          <Link
            href="/"
            className="px-4 py-2 bg-[var(--accent)] text-[var(--accent-foreground)] rounded"
          >
            Return Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <header className="mb-8">
        <div className="flex items-center gap-2 text-sm text-[var(--muted-foreground)] mb-2">
          <Link href="/" className="hover:text-[var(--accent)]">
            Home
          </Link>
          <span>/</span>
          <Link href={`/read/${bookCode}/1/`} className="hover:text-[var(--accent)]">
            {book.name}
          </Link>
          <span>/</span>
          <span>Chapter {chapterNum}</span>
        </div>
        <h1 className="text-3xl font-bold">
          {book.name} {chapterNum}
        </h1>
      </header>

      {/* Controls */}
      <div className="bg-[var(--muted)] rounded-lg p-4 mb-8">
        <div className="flex flex-wrap gap-6">
          <LayerToggle />
          <ViewToggles />
        </div>

        {/* Disclaimer */}
        <div className="mt-4 text-sm text-[var(--muted-foreground)] border-t border-[var(--border)] pt-4">
          <strong>Note:</strong> This is an AI-assisted draft translation. All translations should
          be verified against the original sources. Hover over words to see the underlying Hebrew or
          Greek text.
        </div>
      </div>

      {/* Verses */}
      {verses ? (
        <div className="max-w-3xl">
          {verses.map((verse, index) => (
            <VerseDisplay
              key={verse.ref}
              verseRef={verse.ref}
              verseNumber={index + 1}
              sourceTokens={verse.sourceTokens}
              translation={verse.translation as any}
              notes={(verse.notes || []) as any}
              variants={getVariantsForVerse(verse.ref)}
            />
          ))}
        </div>
      ) : (
        <div className="max-w-2xl bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg p-6">
          <h2 className="font-semibold mb-2">Sample Data Only</h2>
          <p className="text-[var(--muted-foreground)]">
            The full text for {book.name} {chapterNum} is not yet available. Currently, only sample
            data is included:
          </p>
          <ul className="mt-4 space-y-2">
            <li>
              <Link
                href="/read/Gen/1/"
                className="text-[var(--accent)] hover:underline"
              >
                Genesis 1:1-5
              </Link>{' '}
              — Hebrew Old Testament sample with study notes
            </li>
            <li>
              <Link
                href="/read/John/1/"
                className="text-[var(--accent)] hover:underline"
              >
                John 1:1-3
              </Link>{' '}
              — Greek New Testament sample with textual variants (John 1:18)
            </li>
          </ul>
        </div>
      )}

      {/* Navigation */}
      <nav className="flex justify-between items-center mt-8 pt-8 border-t border-[var(--border)]">
        {hasPrevChapter ? (
          <Link
            href={`/read/${bookCode}/${chapterNum - 1}/`}
            className="flex items-center gap-2 text-[var(--accent)] hover:underline"
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
              <path d="m15 18-6-6 6-6" />
            </svg>
            Chapter {chapterNum - 1}
          </Link>
        ) : (
          <div />
        )}

        {/* Chapter selector */}
        <div className="flex items-center gap-2">
          <label htmlFor="chapter-select" className="text-sm text-[var(--muted-foreground)]">
            Go to chapter:
          </label>
          <select
            id="chapter-select"
            value={chapterNum}
            onChange={(e) => navigateTo(bookCode, parseInt(e.target.value, 10))}
            className="px-3 py-1 border border-[var(--border)] rounded bg-[var(--background)]"
          >
            {Array.from({ length: book.chapters }, (_, i) => i + 1).map((ch) => (
              <option key={ch} value={ch}>
                {ch}
              </option>
            ))}
          </select>
        </div>

        {hasNextChapter ? (
          <Link
            href={`/read/${bookCode}/${chapterNum + 1}/`}
            className="flex items-center gap-2 text-[var(--accent)] hover:underline"
          >
            Chapter {chapterNum + 1}
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
              <path d="m9 18 6-6-6-6" />
            </svg>
          </Link>
        ) : (
          <div />
        )}
      </nav>
    </div>
  );
}
