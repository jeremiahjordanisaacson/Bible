'use client';

import * as React from 'react';
import Link from 'next/link';
import { getAllStrongsNumbers, getStrongsIndex, searchByGloss, type StrongsEntry } from '@/data/strongs-index';

export default function StudyIndexPage() {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [filter, setFilter] = React.useState<'all' | 'hebrew' | 'greek'>('all');

  const index = React.useMemo(() => getStrongsIndex(), []);
  const allNumbers = React.useMemo(() => getAllStrongsNumbers(), []);

  const filteredEntries = React.useMemo(() => {
    let entries: StrongsEntry[];

    if (searchQuery.trim()) {
      entries = searchByGloss(searchQuery);
    } else {
      entries = Array.from(index.values())
        .sort((a, b) => b.totalOccurrences - a.totalOccurrences);
    }

    if (filter !== 'all') {
      entries = entries.filter(e => e.language === filter);
    }

    return entries.slice(0, 100); // Limit to 100 for performance
  }, [searchQuery, filter, index]);

  const hebrewCount = React.useMemo(() =>
    allNumbers.filter(n => n.startsWith('H')).length, [allNumbers]);
  const greekCount = React.useMemo(() =>
    allNumbers.filter(n => n.startsWith('G')).length, [allNumbers]);

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-4xl font-bold mb-4">Word Study</h1>
      <p className="text-[var(--muted-foreground)] mb-8">
        Explore {allNumbers.length.toLocaleString()} unique Hebrew and Greek words found across the Bible
        with Strong&apos;s concordance numbers, morphological data, and every occurrence.
      </p>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4 mb-8">
        <div className="bg-[var(--muted)] rounded-lg p-4 text-center">
          <div className="text-2xl font-bold">{allNumbers.length.toLocaleString()}</div>
          <div className="text-sm text-[var(--muted-foreground)]">Total Words</div>
        </div>
        <div className="bg-[var(--muted)] rounded-lg p-4 text-center">
          <div className="text-2xl font-bold">{hebrewCount.toLocaleString()}</div>
          <div className="text-sm text-[var(--muted-foreground)]">Hebrew Words</div>
        </div>
        <div className="bg-[var(--muted)] rounded-lg p-4 text-center">
          <div className="text-2xl font-bold">{greekCount.toLocaleString()}</div>
          <div className="text-sm text-[var(--muted-foreground)]">Greek Words</div>
        </div>
      </div>

      {/* Search & Filter */}
      <div className="mb-8" role="search">
        <div className="flex gap-4 mb-4">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by English meaning, transliteration, or Strong's number..."
            className="flex-1 px-4 py-3 border border-[var(--border)] rounded-lg bg-[var(--background)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
            aria-label="Search word study"
          />
        </div>
        <div className="flex gap-2">
          {(['all', 'hebrew', 'greek'] as const).map(f => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-2 rounded-lg text-sm transition min-h-[44px] ${
                filter === f
                  ? 'bg-[var(--accent)] text-[var(--accent-foreground)]'
                  : 'bg-[var(--muted)] text-[var(--foreground)] hover:bg-[var(--border)]'
              }`}
              aria-pressed={filter === f}
            >
              {f === 'all' ? 'All' : f === 'hebrew' ? '🔤 Hebrew' : '🔤 Greek'}
            </button>
          ))}
        </div>
      </div>

      {/* Results */}
      <div className="mb-4 text-sm text-[var(--muted-foreground)]">
        Showing {filteredEntries.length} of {allNumbers.length} words
        {searchQuery && <> matching &quot;{searchQuery}&quot;</>}
      </div>

      <div className="space-y-3">
        {filteredEntries.map(entry => (
          <Link
            key={entry.strongs}
            href={`/study/${entry.strongs}/`}
            className="block border border-[var(--border)] rounded-lg p-4 hover:border-[var(--accent)] transition group"
          >
            <div className="flex items-start justify-between mb-2">
              <div>
                <span className="font-mono text-sm text-[var(--accent)] mr-2">{entry.strongs}</span>
                <span
                  className="text-lg font-semibold mr-2"
                  lang={entry.language === 'hebrew' ? 'he' : 'el'}
                  dir={entry.language === 'hebrew' ? 'rtl' : 'ltr'}
                >
                  {entry.lemma}
                </span>
                <span className="text-[var(--muted-foreground)] italic">
                  ({entry.lemmaTranslit})
                </span>
              </div>
              <span className={`text-xs px-2 py-1 rounded ${
                entry.language === 'hebrew'
                  ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300'
                  : 'bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300'
              }`}>
                {entry.language}
              </span>
            </div>
            <div className="text-[var(--muted-foreground)]">
              <span className="font-medium text-[var(--foreground)]">&quot;{entry.primaryGloss}&quot;</span>
              {entry.glosses.length > 1 && (
                <span className="ml-2 text-sm">
                  + {entry.glosses.length - 1} more meaning{entry.glosses.length > 2 ? 's' : ''}
                </span>
              )}
            </div>
            <div className="mt-2 flex items-center gap-4 text-xs text-[var(--muted-foreground)]">
              <span>{entry.totalOccurrences} occurrence{entry.totalOccurrences !== 1 ? 's' : ''}</span>
              <span>{Object.keys(entry.bookDistribution).length} book{Object.keys(entry.bookDistribution).length !== 1 ? 's' : ''}</span>
            </div>
          </Link>
        ))}
      </div>

      {filteredEntries.length === 0 && (
        <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg p-6 mt-8">
          <h2 className="font-semibold mb-2">No Results Found</h2>
          <p className="text-[var(--muted-foreground)]">
            Try different search terms or clear the language filter.
          </p>
        </div>
      )}
    </div>
  );
}
