'use client';

import * as React from 'react';
import Link from 'next/link';
import { VerseDisplay } from '@/components/verse-display';
import { SimpleVerseList } from '@/components/simple-verse-display';
import { LayerToggle, ViewToggles } from '@/components/layer-toggle';
import { useBibleStore } from '@/store/bible-store';
import { useKeyboardNavigation } from '@/hooks/use-keyboard-navigation';
import genesisChapter1Verses from '@/data/sample-genesis';
import johnChapter1Verses from '@/data/sample-john';
import { getVariantsForVerse } from '@/data/variants';
import { getBook, getNextBook, getPrevBook } from '@/data/books-metadata';
import { KeyboardShortcutsModal } from '@/components/keyboard-shortcuts-modal';
import { FontSizeControl, useFontSize } from '@/components/font-size-control';
import { VerseNumberToggle, useVerseNumbers } from '@/components/verse-number-toggle';
import { ReadingProgress } from '@/components/reading-progress';
import { fetchChapter, convertToSimpleVerses } from '@/lib/bible-api';

// Sample data mapping - rich data with morphology
function getRichChapterData(book: string, chapter: number) {
  if (book === 'Gen' && chapter === 1) {
    return genesisChapter1Verses;
  }
  if (book === 'John' && chapter === 1) {
    return johnChapter1Verses;
  }
  return null;
}

interface SimpleVerse {
  ref: string;
  verseNumber: number;
  text: string;
}

interface ChapterContentProps {
  bookCode: string;
  chapterNum: number;
}

export function ChapterContent({ bookCode, chapterNum }: ChapterContentProps) {
  const { navigateTo, setCurrentBook, setCurrentChapter, showKeyboardShortcuts, setShowKeyboardShortcuts } = useBibleStore();
  const { fontSize, setFontSize } = useFontSize();
  const { showVerseNumbers, toggleVerseNumbers } = useVerseNumbers();

  // State for fetched verses
  const [simpleVerses, setSimpleVerses] = React.useState<SimpleVerse[] | null>(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);
  const [translationName, setTranslationName] = React.useState<string>('');

  // Enable keyboard navigation
  useKeyboardNavigation();

  // Update store on mount
  React.useEffect(() => {
    setCurrentBook(bookCode);
    setCurrentChapter(chapterNum);
  }, [bookCode, chapterNum, setCurrentBook, setCurrentChapter]);

  const book = getBook(bookCode);
  const richVerses = getRichChapterData(bookCode, chapterNum);

  // Scroll to verse if URL has hash (e.g., #v5)
  React.useEffect(() => {
    const hash = window.location.hash;
    if (hash && hash.startsWith('#v')) {
      const verseId = hash.slice(1);
      const element = document.getElementById(verseId);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'center' });
          element.classList.add('bg-yellow-100', 'dark:bg-yellow-900/30');
          setTimeout(() => {
            element.classList.remove('bg-yellow-100', 'dark:bg-yellow-900/30');
          }, 2000);
        }, 500);
      }
    }
  }, [simpleVerses, richVerses]);

  // Fetch verses from API if no rich data available
  React.useEffect(() => {
    if (richVerses || !book) {
      setSimpleVerses(null);
      setLoading(false);
      setError(null);
      return;
    }

    let cancelled = false;
    setLoading(true);
    setError(null);

    fetchChapter(bookCode, chapterNum)
      .then((response) => {
        if (cancelled) return;
        if (response) {
          setSimpleVerses(convertToSimpleVerses(response));
          setTranslationName(response.translation_name || 'World English Bible');
        } else {
          setError('Failed to load chapter');
        }
      })
      .catch((err) => {
        if (!cancelled) {
          setError(err.message || 'Failed to load chapter');
        }
      })
      .finally(() => {
        if (!cancelled) {
          setLoading(false);
        }
      });

    return () => {
      cancelled = true;
    };
  }, [bookCode, chapterNum, richVerses, book]);

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
      <ReadingProgress />

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

      {/* Controls - only show full controls for rich data */}
      {richVerses && (
        <div className="bg-[var(--muted)] rounded-lg p-4 mb-8">
          <div className="flex flex-wrap items-center gap-6">
            <LayerToggle />
            <ViewToggles />
            <div className="border-l border-[var(--border)] pl-4 flex items-center gap-3">
              <FontSizeControl fontSize={fontSize} onFontSizeChange={setFontSize} />
              <VerseNumberToggle showVerseNumbers={showVerseNumbers} onToggle={toggleVerseNumbers} />
            </div>
          </div>
          <div className="mt-4 text-sm text-[var(--muted-foreground)] border-t border-[var(--border)] pt-4">
            <strong>Note:</strong> This is an AI-assisted draft translation. All translations should
            be verified against the original sources. Hover over words to see the underlying Hebrew or
            Greek text.
          </div>
        </div>
      )}

      {/* Simple controls for API-fetched content */}
      {!richVerses && simpleVerses && (
        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4 mb-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <div className="text-sm">
                <strong>Public Domain Text:</strong> {translationName}
              </div>
              <div className="text-xs text-[var(--muted-foreground)] mt-1">
                Enhanced morphological data and study tools are available for{' '}
                <Link href="/read/Gen/1/" className="text-[var(--accent)] hover:underline">Genesis 1</Link>
                {' '}and{' '}
                <Link href="/read/John/1/" className="text-[var(--accent)] hover:underline">John 1</Link>.
              </div>
            </div>
            <div className="flex items-center gap-3">
              <FontSizeControl fontSize={fontSize} onFontSizeChange={setFontSize} />
              <VerseNumberToggle showVerseNumbers={showVerseNumbers} onToggle={toggleVerseNumbers} />
            </div>
          </div>
        </div>
      )}

      {/* Rich verse display with full features */}
      {richVerses && (
        <div className={`max-w-3xl ${fontSize}`}>
          {richVerses.map((verse, index) => (
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
      )}

      {/* Loading state */}
      {loading && (
        <div className="max-w-3xl flex items-center justify-center py-12">
          <div className="text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[var(--accent)] mx-auto mb-4"></div>
            <p className="text-[var(--muted-foreground)]">Loading {book.name} {chapterNum}...</p>
          </div>
        </div>
      )}

      {/* Error state */}
      {error && !loading && (
        <div className="max-w-2xl bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-6">
          <h2 className="font-semibold mb-2">Error Loading Chapter</h2>
          <p className="text-[var(--muted-foreground)]">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="mt-4 px-4 py-2 bg-[var(--accent)] text-[var(--accent-foreground)] rounded text-sm"
          >
            Try Again
          </button>
        </div>
      )}

      {/* Simple verse display for API-fetched content */}
      {!richVerses && simpleVerses && !loading && (
        <SimpleVerseList
          verses={simpleVerses}
          className={fontSize}
          bookCode={bookCode}
          chapter={chapterNum}
          showVerseNumbers={showVerseNumbers}
        />
      )}

      {/* Navigation */}
      <nav className="flex justify-between items-center mt-8 pt-8 border-t border-[var(--border)]">
        <div className="flex flex-col gap-1">
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
          ) : getPrevBook(bookCode) ? (
            <Link
              href={`/read/${getPrevBook(bookCode)!.code}/${getPrevBook(bookCode)!.chapters}/`}
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
              <span className="text-sm">{getPrevBook(bookCode)!.name} {getPrevBook(bookCode)!.chapters}</span>
            </Link>
          ) : (
            <div />
          )}
        </div>

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

        <div className="flex flex-col gap-1 items-end">
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
          ) : getNextBook(bookCode) ? (
            <Link
              href={`/read/${getNextBook(bookCode)!.code}/1/`}
              className="flex items-center gap-2 text-[var(--accent)] hover:underline"
            >
              <span className="text-sm">{getNextBook(bookCode)!.name} 1</span>
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
        </div>
      </nav>

      {/* Keyboard shortcuts modal */}
      <KeyboardShortcutsModal
        open={showKeyboardShortcuts}
        onOpenChange={setShowKeyboardShortcuts}
      />
    </div>
  );
}
