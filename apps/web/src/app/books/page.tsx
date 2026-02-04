'use client';

import Link from 'next/link';
import {
  allBooks,
  oldTestamentBooks,
  newTestamentBooks,
  categories,
  getBooksByCategory,
  bibleStats,
} from '@/data/books-metadata';

export default function BooksPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <header className="mb-8">
        <h1 className="text-3xl font-bold mb-2">All Books of the Bible</h1>
        <p className="text-[var(--muted-foreground)]">
          {bibleStats.totalBooks} books &middot; {bibleStats.totalChapters.toLocaleString()} chapters
        </p>
      </header>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Old Testament */}
        <div>
          <div className="sticky top-4 bg-[var(--background)] pb-4 z-10">
            <h2 className="text-xl font-bold flex items-center gap-2">
              <span className="px-2 py-1 bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-200 rounded text-xs">
                OT
              </span>
              Old Testament
            </h2>
            <p className="text-sm text-[var(--muted-foreground)] mt-1">
              {bibleStats.oldTestamentBooks} books &middot; {bibleStats.oldTestamentChapters} chapters
            </p>
          </div>

          {categories
            .filter((cat) => getBooksByCategory(cat).some((b) => b.testament === 'OT'))
            .map((category) => (
              <div key={category} className="mb-6">
                <h3 className="text-sm font-semibold text-[var(--muted-foreground)] uppercase tracking-wide mb-2">
                  {category}
                </h3>
                <div className="space-y-1">
                  {getBooksByCategory(category)
                    .filter((b) => b.testament === 'OT')
                    .map((book) => (
                      <BookRow key={book.code} book={book} hasRichData={book.code === 'Gen'} />
                    ))}
                </div>
              </div>
            ))}
        </div>

        {/* New Testament */}
        <div>
          <div className="sticky top-4 bg-[var(--background)] pb-4 z-10">
            <h2 className="text-xl font-bold flex items-center gap-2">
              <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 rounded text-xs">
                NT
              </span>
              New Testament
            </h2>
            <p className="text-sm text-[var(--muted-foreground)] mt-1">
              {bibleStats.newTestamentBooks} books &middot; {bibleStats.newTestamentChapters} chapters
            </p>
          </div>

          {categories
            .filter((cat) => getBooksByCategory(cat).some((b) => b.testament === 'NT'))
            .map((category) => (
              <div key={category} className="mb-6">
                <h3 className="text-sm font-semibold text-[var(--muted-foreground)] uppercase tracking-wide mb-2">
                  {category}
                </h3>
                <div className="space-y-1">
                  {getBooksByCategory(category)
                    .filter((b) => b.testament === 'NT')
                    .map((book) => (
                      <BookRow key={book.code} book={book} hasRichData={book.code === 'John'} />
                    ))}
                </div>
              </div>
            ))}
        </div>
      </div>

      <div className="mt-8 pt-8 border-t border-[var(--border)] text-sm text-[var(--muted-foreground)]">
        <p className="mb-2">
          <span className="inline-flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-green-500" />
            Rich study data with morphology, notes, and textual variants
          </span>
        </p>
        <p>All books available in World English Bible (WEB) - public domain translation.</p>
      </div>
    </div>
  );
}

interface BookRowProps {
  book: {
    code: string;
    name: string;
    chapters: number;
    language: string;
  };
  hasRichData: boolean;
}

function BookRow({ book, hasRichData }: BookRowProps) {
  return (
    <Link
      href={`/read/${book.code}/1/`}
      className={`flex items-center justify-between p-2 rounded hover:bg-[var(--muted)] transition-colors group ${
        hasRichData ? 'bg-green-50 dark:bg-green-900/10' : ''
      }`}
    >
      <div className="flex items-center gap-2">
        {hasRichData && <span className="w-2 h-2 rounded-full bg-green-500" />}
        <span className="font-medium group-hover:text-[var(--accent)]">{book.name}</span>
      </div>
      <div className="flex items-center gap-4 text-sm text-[var(--muted-foreground)]">
        <span>{book.chapters} ch</span>
        <span className="capitalize text-xs">{book.language}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <path d="m9 18 6-6-6-6" />
        </svg>
      </div>
    </Link>
  );
}
