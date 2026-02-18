'use client';

import * as React from 'react';
import Link from 'next/link';
import {
  getRegisteredChapters,
  getChapterVerses,
} from '@/data/chapter-registry';
import { getBook } from '@/data/books-metadata';

// Dynamically collect all verses from the chapter registry
function getAllVerses() {
  const chapters = getRegisteredChapters();
  const all: any[] = [];
  for (const key of chapters) {
    const [book, ch] = key.split('.');
    const verses = getChapterVerses(book, parseInt(ch, 10));
    all.push(...verses);
  }
  return all;
}

const allVerses = getAllVerses();

interface SearchResult {
  verseRef: string;
  bookName: string;
  chapter: number;
  verse: number;
  text: string;
  matchType: 'translation' | 'gloss' | 'lemma' | 'source';
  highlights: string[];
}

export default function SearchPage() {
  const [query, setQuery] = React.useState('');
  const [searchType, setSearchType] = React.useState<'all' | 'translation' | 'source' | 'lemma'>('all');
  const [results, setResults] = React.useState<SearchResult[]>([]);
  const [isSearching, setIsSearching] = React.useState(false);

  const getBookName = (code: string): string => {
    const book = getBook(code);
    return book ? book.name : code;
  };

  const performSearch = React.useCallback((searchQuery: string, type: string) => {
    if (!searchQuery.trim()) {
      setResults([]);
      return;
    }

    setIsSearching(true);
    const lowerQuery = searchQuery.toLowerCase();
    const searchResults: SearchResult[] = [];

    for (const verse of allVerses) {
      const [book, chapter, verseNum] = verse.ref.split('.');

      // Search in translation layers
      if (type === 'all' || type === 'translation') {
        const layers = (verse.translation?.layers || {}) as Record<string, { text?: string }>;
        for (const layerType of ['literal', 'idiomatic', 'literary']) {
          const layer = layers[layerType];
          if (layer?.text && layer.text.toLowerCase().includes(lowerQuery)) {
            searchResults.push({
              verseRef: verse.ref,
              bookName: getBookName(book),
              chapter: parseInt(chapter, 10),
              verse: parseInt(verseNum, 10),
              text: layer.text,
              matchType: 'translation',
              highlights: [searchQuery],
            });
            break; // Only add once per verse
          }
        }
      }

      // Search in glosses
      if (type === 'all' || type === 'source') {
        for (const token of verse.sourceTokens) {
          if (
            token.gloss.toLowerCase().includes(lowerQuery) ||
            token.glossExtended?.toLowerCase().includes(lowerQuery)
          ) {
            searchResults.push({
              verseRef: verse.ref,
              bookName: getBookName(book),
              chapter: parseInt(chapter, 10),
              verse: parseInt(verseNum, 10),
              text: `${token.gloss} (${token.text} - ${token.transliteration})`,
              matchType: 'gloss',
              highlights: [searchQuery],
            });
          }
        }
      }

      // Search in lemmas
      if (type === 'all' || type === 'lemma') {
        for (const token of verse.sourceTokens) {
          if (
            token.lemma.toLowerCase().includes(lowerQuery) ||
            token.lemmaTranslit?.toLowerCase().includes(lowerQuery)
          ) {
            searchResults.push({
              verseRef: verse.ref,
              bookName: getBookName(book),
              chapter: parseInt(chapter, 10),
              verse: parseInt(verseNum, 10),
              text: `Lemma: ${token.lemma} (${token.lemmaTranslit || token.transliteration}) - "${token.gloss}"`,
              matchType: 'lemma',
              highlights: [searchQuery],
            });
          }
        }
      }

      // Search in source text (transliteration)
      if (type === 'all' || type === 'source') {
        for (const token of verse.sourceTokens) {
          if (token.transliteration.toLowerCase().includes(lowerQuery)) {
            searchResults.push({
              verseRef: verse.ref,
              bookName: getBookName(book),
              chapter: parseInt(chapter, 10),
              verse: parseInt(verseNum, 10),
              text: `${token.text} (${token.transliteration}) - "${token.gloss}"`,
              matchType: 'source',
              highlights: [searchQuery],
            });
          }
        }
      }
    }

    // Deduplicate by verse + matchType
    const seen = new Set<string>();
    const dedupedResults = searchResults.filter((r) => {
      const key = `${r.verseRef}-${r.matchType}`;
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    });

    setResults(dedupedResults);
    setIsSearching(false);
  }, []);

  // Debounced search
  React.useEffect(() => {
    const timer = setTimeout(() => {
      performSearch(query, searchType);
    }, 300);
    return () => clearTimeout(timer);
  }, [query, searchType, performSearch]);

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8">Search</h1>

      {/* Search Form */}
      <div className="mb-8">
        <div className="flex gap-4 mb-4">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search translations, glosses, lemmas..."
            className="flex-1 px-4 py-3 border border-[var(--border)] rounded-lg bg-[var(--background)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
          />
        </div>

        {/* Search Type Filter */}
        <div className="flex gap-2">
          <SearchTypeButton
            label="All"
            value="all"
            current={searchType}
            onClick={() => setSearchType('all')}
          />
          <SearchTypeButton
            label="Translation"
            value="translation"
            current={searchType}
            onClick={() => setSearchType('translation')}
          />
          <SearchTypeButton
            label="Source Text"
            value="source"
            current={searchType}
            onClick={() => setSearchType('source')}
          />
          <SearchTypeButton
            label="Lemma"
            value="lemma"
            current={searchType}
            onClick={() => setSearchType('lemma')}
          />
        </div>
      </div>

      {/* Results */}
      {query && (
        <div className="mb-4 text-[var(--muted-foreground)]">
          {isSearching ? (
            'Searching...'
          ) : (
            <>
              Found {results.length} result{results.length !== 1 ? 's' : ''} for &quot;{query}&quot;
            </>
          )}
        </div>
      )}

      <div className="space-y-4">
        {results.map((result, index) => (
          <SearchResultCard key={`${result.verseRef}-${result.matchType}-${index}`} result={result} />
        ))}
      </div>

      {/* Sample Data Notice */}
      {results.length === 0 && query && !isSearching && (
        <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg p-6 mt-8">
          <h2 className="font-semibold mb-2">No Results Found</h2>
          <p className="text-[var(--muted-foreground)]">
            Search covers {getRegisteredChapters().length} chapters with morphological data across all 66 books.
            Try different search terms or a different search type.
          </p>
        </div>
      )}

      {/* Search Tips */}
      <div className="mt-12 border border-[var(--border)] rounded-lg p-6">
        <h2 className="font-semibold mb-4">Search Tips</h2>
        <ul className="space-y-2 text-[var(--muted-foreground)]">
          <li>
            <strong>Translation:</strong> Search for English words in the translation text
          </li>
          <li>
            <strong>Source Text:</strong> Search by transliteration (e.g., &quot;logos&quot;, &quot;elohim&quot;)
          </li>
          <li>
            <strong>Lemma:</strong> Search for dictionary forms of words
          </li>
          <li>
            <strong>Gloss:</strong> Search for literal word meanings
          </li>
        </ul>
        <div className="mt-4 pt-4 border-t border-[var(--border)]">
          <h3 className="font-semibold mb-2">Example Searches</h3>
          <div className="flex flex-wrap gap-2">
            {['beginning', 'logos', 'elohim', 'God', 'created', 'Word'].map((term) => (
              <button
                key={term}
                onClick={() => setQuery(term)}
                className="px-3 py-1 bg-[var(--muted)] rounded hover:bg-[var(--border)] transition"
              >
                {term}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function SearchTypeButton({
  label,
  value,
  current,
  onClick,
}: {
  label: string;
  value: string;
  current: string;
  onClick: () => void;
}) {
  const isActive = current === value;
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-lg text-sm transition ${
        isActive
          ? 'bg-[var(--accent)] text-[var(--accent-foreground)]'
          : 'bg-[var(--muted)] text-[var(--foreground)] hover:bg-[var(--border)]'
      }`}
    >
      {label}
    </button>
  );
}

function SearchResultCard({ result }: { result: SearchResult }) {
  const [book, chapter] = result.verseRef.split('.');

  const matchTypeLabels: Record<string, { label: string; color: string }> = {
    translation: { label: 'Translation', color: 'bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300' },
    gloss: { label: 'Gloss', color: 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300' },
    lemma: { label: 'Lemma', color: 'bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300' },
    source: { label: 'Source', color: 'bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-300' },
  };

  const typeInfo = matchTypeLabels[result.matchType] || {
    label: result.matchType,
    color: 'bg-gray-100 text-gray-800',
  };

  return (
    <Link
      href={`/read/${book}/${chapter}/#${result.verseRef}`}
      className="block border border-[var(--border)] rounded-lg p-4 hover:border-[var(--accent)] transition"
    >
      <div className="flex items-start justify-between mb-2">
        <span className="font-semibold">
          {result.bookName} {result.chapter}:{result.verse}
        </span>
        <span className={`text-xs px-2 py-0.5 rounded ${typeInfo.color}`}>{typeInfo.label}</span>
      </div>
      <p className="text-[var(--muted-foreground)]">{result.text}</p>
    </Link>
  );
}
