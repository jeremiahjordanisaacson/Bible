'use client';

import * as React from 'react';
import Link from 'next/link';
import { getStrongsEntry } from '@/data/strongs-index';
import { getBook } from '@/data/books-metadata';

export function WordStudyContent({ strongs }: { strongs: string }) {
  const entry = getStrongsEntry(strongs);

  // Hooks must be called unconditionally
  const morphPatterns = React.useMemo(() => {
    if (!entry) return [];
    const patterns = new Map<string, number>();
    for (const occ of entry.occurrences) {
      const key = occ.morphology.pos;
      patterns.set(key, (patterns.get(key) || 0) + 1);
    }
    return Array.from(patterns.entries()).sort((a, b) => b[1] - a[1]);
  }, [entry]);

  const sortedBooks = React.useMemo(() => {
    if (!entry) return [];
    return Object.entries(entry.bookDistribution)
      .sort((a, b) => b[1] - a[1]);
  }, [entry]);

  const uniqueOccurrences = React.useMemo(() => {
    if (!entry) return [];
    const seen = new Set<string>();
    return entry.occurrences.filter(occ => {
      if (seen.has(occ.ref)) return false;
      seen.add(occ.ref);
      return true;
    });
  }, [entry]);

  const maxCount = sortedBooks.length > 0 ? Math.max(...sortedBooks.map(([, c]) => c)) : 1;

  if (!entry) {
    return (
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-4xl font-bold mb-4">Word Not Found</h1>
        <p className="text-[var(--muted-foreground)] mb-4">
          No data found for Strong&apos;s number {strongs}.
        </p>
        <Link href="/study" className="text-[var(--accent)] hover:underline">
          ← Back to Word Study
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      {/* Breadcrumb */}
      <nav className="mb-6 text-sm text-[var(--muted-foreground)]">
        <Link href="/study" className="hover:text-[var(--accent)]">Word Study</Link>
        <span className="mx-2">›</span>
        <span>{strongs}</span>
      </nav>

      {/* Header */}
      <div className="mb-8">
        <div className="flex items-start gap-4 mb-4">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="font-mono text-lg text-[var(--accent)]">{strongs}</span>
              <span className={`text-xs px-2 py-1 rounded ${
                entry.language === 'hebrew'
                  ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300'
                  : 'bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300'
              }`}>
                {entry.language}
              </span>
            </div>
            <h1
              className="text-4xl font-bold mb-2"
              lang={entry.language === 'hebrew' ? 'he' : 'el'}
              dir={entry.language === 'hebrew' ? 'rtl' : 'ltr'}
            >
              {entry.lemma}
            </h1>
            <p className="text-xl text-[var(--muted-foreground)] italic mb-2">
              {entry.lemmaTranslit}
            </p>
            <p className="text-lg">
              &quot;{entry.primaryGloss}&quot;
            </p>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-[var(--muted)] rounded-lg p-4 text-center">
          <div className="text-2xl font-bold">{entry.totalOccurrences}</div>
          <div className="text-xs text-[var(--muted-foreground)]">Total Uses</div>
        </div>
        <div className="bg-[var(--muted)] rounded-lg p-4 text-center">
          <div className="text-2xl font-bold">{uniqueOccurrences.length}</div>
          <div className="text-xs text-[var(--muted-foreground)]">Unique Verses</div>
        </div>
        <div className="bg-[var(--muted)] rounded-lg p-4 text-center">
          <div className="text-2xl font-bold">{Object.keys(entry.bookDistribution).length}</div>
          <div className="text-xs text-[var(--muted-foreground)]">Books</div>
        </div>
        <div className="bg-[var(--muted)] rounded-lg p-4 text-center">
          <div className="text-2xl font-bold">{entry.glosses.length}</div>
          <div className="text-xs text-[var(--muted-foreground)]">Meanings</div>
        </div>
      </div>

      {/* All Meanings */}
      {entry.glosses.length > 1 && (
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3">Meanings</h2>
          <div className="flex flex-wrap gap-2">
            {entry.glosses.map(gloss => (
              <span key={gloss} className="px-3 py-1 bg-[var(--muted)] rounded-full text-sm">
                {gloss}
              </span>
            ))}
          </div>
        </section>
      )}

      {/* Morphology Patterns */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">Parts of Speech</h2>
        <div className="flex flex-wrap gap-2">
          {morphPatterns.map(([pos, count]) => (
            <span key={pos} className="px-3 py-1 bg-[var(--muted)] rounded text-sm">
              {pos} <span className="text-[var(--muted-foreground)]">({count}×)</span>
            </span>
          ))}
        </div>
      </section>

      {/* Book Distribution Chart */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">Distribution by Book</h2>
        <div className="space-y-2">
          {sortedBooks.map(([bookCode, count]) => {
            const book = getBook(bookCode);
            const bookName = book ? book.name : bookCode;
            const pct = (count / maxCount) * 100;
            return (
              <div key={bookCode} className="flex items-center gap-3">
                <Link
                  href={`/read/${bookCode}/1/`}
                  className="w-28 text-sm text-[var(--accent)] hover:underline truncate"
                >
                  {bookName}
                </Link>
                <div className="flex-1 bg-[var(--muted)] rounded-full h-4 overflow-hidden">
                  <div
                    className="h-full bg-[var(--accent)] rounded-full transition-all"
                    style={{ width: `${pct}%` }}
                  />
                </div>
                <span className="text-sm text-[var(--muted-foreground)] w-8 text-right">{count}</span>
              </div>
            );
          })}
        </div>
      </section>

      {/* All Occurrences */}
      <section>
        <h2 className="text-xl font-semibold mb-3">
          All Occurrences ({uniqueOccurrences.length})
        </h2>
        <div className="space-y-3">
          {uniqueOccurrences.map((occ) => {
            const [book, chapter, verse] = occ.ref.split('.');
            const bookMeta = getBook(book);
            const bookName = bookMeta ? bookMeta.name : book;
            return (
              <Link
                key={occ.ref}
                href={`/read/${book}/${chapter}/#v${verse}`}
                className="block border border-[var(--border)] rounded-lg p-3 hover:border-[var(--accent)] transition"
              >
                <div className="flex items-center gap-3 mb-1">
                  <span className="font-semibold text-sm">
                    {bookName} {chapter}:{verse}
                  </span>
                  <span className="text-xs px-1.5 py-0.5 rounded bg-[var(--muted)] text-[var(--muted-foreground)]">
                    {occ.morphology.pos}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <span
                    lang={entry.language === 'hebrew' ? 'he' : 'el'}
                    dir={entry.language === 'hebrew' ? 'rtl' : 'ltr'}
                    className="font-semibold"
                  >
                    {occ.text}
                  </span>
                  <span className="text-[var(--muted-foreground)] italic">
                    ({occ.transliteration})
                  </span>
                  <span className="text-[var(--muted-foreground)]">
                    — &quot;{occ.gloss}&quot;
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
}
