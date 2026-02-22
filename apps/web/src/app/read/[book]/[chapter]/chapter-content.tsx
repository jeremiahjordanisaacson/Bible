'use client';

import * as React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { VerseDisplay } from '@/components/verse-display';
import { SimpleVerseDisplay } from '@/components/simple-verse-display';
import { LayerToggle, ViewToggles } from '@/components/layer-toggle';
import { useBibleStore } from '@/store/bible-store';
import { useKeyboardNavigation } from '@/hooks/use-keyboard-navigation';
import {
  getRichVerseData,
  hasRichChapterData,
  getRichVerseNumbers,
} from '@/data/chapter-registry';
import { getVariantsForVerse } from '@/data/variants';
import { getBook, getNextBook, getPrevBook } from '@/data/books-metadata';
import { KeyboardShortcutsModal } from '@/components/keyboard-shortcuts-modal';
import { FontSizeControl, useFontSize } from '@/components/font-size-control';
import { VerseNumberToggle, useVerseNumbers } from '@/components/verse-number-toggle';
import { ReadingProgress } from '@/components/reading-progress';
import { PrintButton } from '@/components/print-button';
import { FullscreenButton } from '@/components/fullscreen-button';
import { ExportButton } from '@/components/export-button';
import { ReadingThemeSelector, ReadingThemeWrapper, useReadingTheme } from '@/components/reading-theme';
import { TextToSpeech } from '@/components/text-to-speech';
import { LineSpacingControl, useLineSpacing, getSpacingClass } from '@/components/line-spacing-control';
import { ChapterSearch } from '@/components/chapter-search';
import { ScrollToTop } from '@/components/scroll-to-top';
import { ChapterInfo } from '@/components/chapter-info';
import { TextSelectionMenu } from '@/components/text-selection-menu';
import { CompareView } from '@/components/compare-view';
import { ProvenancePanel } from '@/components/provenance-panel';
import { fetchChapter, convertToSimpleVerses } from '@/lib/bible-api';
import { addToReadingHistory } from '@/lib/reading-history';

// Rich data functions provided by chapter-registry.ts

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
  const router = useRouter();
  const { setCurrentBook, setCurrentChapter, showKeyboardShortcuts, setShowKeyboardShortcuts, showCompareView, toggleCompareView, showProvenance, toggleProvenance } = useBibleStore();
  const { fontSize, setFontSize } = useFontSize();
  const { showVerseNumbers, toggleVerseNumbers } = useVerseNumbers();
  const { theme, setTheme } = useReadingTheme();
  const { spacing, setSpacing } = useLineSpacing();

  // State for fetched verses (always fetch for full chapter coverage)
  const [simpleVerses, setSimpleVerses] = React.useState<SimpleVerse[] | null>(null);
  const [loading, setLoading] = React.useState(false);
  const hasRichData = hasRichChapterData(bookCode, chapterNum);
  const richVerseNumbers = getRichVerseNumbers(bookCode, chapterNum);
  const [error, setError] = React.useState<string | null>(null);
  const [translationName, setTranslationName] = React.useState<string>('');
  const [searchQuery, setSearchQuery] = React.useState('');

  // Enable keyboard navigation
  useKeyboardNavigation();

  // Update store on mount
  React.useEffect(() => {
    setCurrentBook(bookCode);
    setCurrentChapter(chapterNum);
    addToReadingHistory(bookCode, chapterNum);
  }, [bookCode, chapterNum, setCurrentBook, setCurrentChapter]);

  const book = getBook(bookCode);

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
  }, [simpleVerses]);

  // Always fetch API verses for full chapter coverage
  React.useEffect(() => {
    if (!book) {
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
  }, [bookCode, chapterNum, book]);

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
        <div className="flex items-center justify-between">
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
          <div className="flex items-center gap-1">
            <ChapterSearch
              onSearch={setSearchQuery}
              resultCount={searchQuery.length >= 2 ? (
                (simpleVerses || []).filter(v => v.text.toLowerCase().includes(searchQuery.toLowerCase())).length
              ) : undefined}
            />
            <TextToSpeech
              getText={() => {
                const verses = simpleVerses || [];
                return verses.map(v => `Verse ${v.verseNumber}. ${v.text}`).join(' ');
              }}
            />
            <FullscreenButton />
            <ExportButton
              bookName={book.name}
              chapter={chapterNum}
              getContent={() => {
                const verses = simpleVerses || [];
                const header = `${book.name} ${chapterNum}\n${'='.repeat(book.name.length + String(chapterNum).length + 1)}\n\n`;
                const content = verses.map(v => `${v.verseNumber}. ${v.text}`).join('\n\n');
                return header + content;
              }}
            />
            <PrintButton />
          </div>
        </div>
        <h1 className="text-3xl font-bold">
          {book.name} {chapterNum}
        </h1>
        <div className="mt-2">
          <ChapterInfo
            bookCode={bookCode}
            chapter={chapterNum}
            verseCount={simpleVerses?.length || 0}
            wordCount={simpleVerses?.reduce((count, v) => count + v.text.split(/\s+/).length, 0)}
          />
        </div>
      </header>

      {/* Controls */}
      {simpleVerses && (
        <div className={`rounded-lg p-4 mb-8 ${hasRichData ? 'bg-[var(--muted)]' : 'bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800'}`}>
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              {hasRichData ? (
                <>
                  <div className="flex items-center gap-4 mb-2">
                    <LayerToggle />
                    <ViewToggles />
                  </div>
                  <div className="flex items-center gap-2 mt-1">
                    <button
                      onClick={toggleCompareView}
                      className={`text-xs px-2 py-1 rounded border transition-colors ${showCompareView ? 'bg-[var(--accent)] text-[var(--accent-foreground)] border-[var(--accent)]' : 'border-[var(--border)] hover:bg-[var(--accent)]/10'}`}
                    >
                      Compare Layers
                    </button>
                    <button
                      onClick={toggleProvenance}
                      className={`text-xs px-2 py-1 rounded border transition-colors ${showProvenance ? 'bg-[var(--accent)] text-[var(--accent-foreground)] border-[var(--accent)]' : 'border-[var(--border)] hover:bg-[var(--accent)]/10'}`}
                    >
                      Provenance
                    </button>
                    <span className="text-xs text-[var(--muted-foreground)]">
                      {richVerseNumbers.length} verses with study data
                    </span>
                  </div>
                </>
              ) : (
                <>
                  <div className="text-sm">
                    <strong>Source:</strong> {translationName}
                  </div>
                  <div className="text-xs text-[var(--muted-foreground)] mt-1">
                    Morphological study data available for key chapters across all 66 books.
                    Try{' '}
                    <Link href="/read/Gen/1/" className="text-[var(--accent)] hover:underline">Genesis 1</Link>,{' '}
                    <Link href="/read/Psa/23/" className="text-[var(--accent)] hover:underline">Psalm 23</Link>, or{' '}
                    <Link href="/read/John/1/" className="text-[var(--accent)] hover:underline">John 1</Link>.
                  </div>
                </>
              )}
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <FontSizeControl fontSize={fontSize} onFontSizeChange={setFontSize} />
              <LineSpacingControl spacing={spacing} onSpacingChange={setSpacing} />
              <VerseNumberToggle showVerseNumbers={showVerseNumbers} onToggle={toggleVerseNumbers} />
              <ReadingThemeSelector theme={theme} onThemeChange={setTheme} />
            </div>
          </div>
        </div>
      )}

      {/* Loading state */}
      {loading && (
        <div className="max-w-3xl" aria-busy="true" aria-label="Loading chapter">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="flex gap-4 py-4 animate-pulse">
              <div className="w-12 h-5 bg-[var(--muted)] rounded flex-shrink-0" />
              <div className="flex-1 space-y-2">
                <div className="h-4 bg-[var(--muted)] rounded w-full" />
                <div className="h-4 bg-[var(--muted)] rounded w-5/6" />
                <div className="h-4 bg-[var(--muted)] rounded w-3/4" />
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Error state */}
      {error && !loading && (
        <div className="max-w-2xl bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-6" role="alert">
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

      {/* Verse display - combines rich data where available with API data */}
      {simpleVerses && !loading && (
        <ReadingThemeWrapper theme={theme}>
          <div className={`max-w-3xl ${fontSize} ${getSpacingClass(spacing)} p-4`}>
            {simpleVerses.map((verse) => {
              const richVerse = getRichVerseData(bookCode, chapterNum, verse.verseNumber);
              if (richVerse) {
                if (showCompareView) {
                  return (
                    <React.Fragment key={verse.ref}>
                      {showProvenance && (
                        <ProvenancePanel translation={richVerse.translation as any} verseRef={richVerse.ref} />
                      )}
                      <CompareView
                        verseRef={richVerse.ref}
                        verseNumber={verse.verseNumber}
                        translation={richVerse.translation as any}
                        sourceTokens={richVerse.sourceTokens}
                      />
                    </React.Fragment>
                  );
                }
                return (
                  <React.Fragment key={verse.ref}>
                    {showProvenance && (
                      <ProvenancePanel translation={richVerse.translation as any} verseRef={richVerse.ref} />
                    )}
                    <VerseDisplay
                      verseRef={richVerse.ref}
                      verseNumber={verse.verseNumber}
                      sourceTokens={richVerse.sourceTokens}
                      translation={richVerse.translation as any}
                      notes={(richVerse.notes || []) as any}
                      variants={getVariantsForVerse(richVerse.ref)}
                    />
                  </React.Fragment>
                );
              }
              return (
                <SimpleVerseDisplay
                  key={verse.ref}
                  verseRef={verse.ref}
                  verseNumber={verse.verseNumber}
                  text={verse.text}
                  bookCode={bookCode}
                  chapter={chapterNum}
                  showVerseNumbers={showVerseNumbers}
                />
              );
            })}
          </div>
        </ReadingThemeWrapper>
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
            onChange={(e) => router.push(`/read/${bookCode}/${e.target.value}/`)}
            className="px-3 py-1 border border-[var(--border)] rounded bg-[var(--background)]"
            aria-label={`Select chapter of ${book.name}`}
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

      {/* Scroll to top button */}
      <ScrollToTop />

      {/* Text selection copy menu */}
      <TextSelectionMenu />
    </div>
  );
}
