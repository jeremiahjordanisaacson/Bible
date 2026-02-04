'use client';

import * as React from 'react';
import Link from 'next/link';
import * as Popover from '@radix-ui/react-popover';
import {
  allBooks,
  categories,
  getBooksByCategory,
  type BookMetadata,
} from '@/data/books-metadata';

// Books with rich morphological data (sample data)
const RICH_DATA_BOOKS = new Set(['Gen', 'John']);

function hasRichData(bookCode: string): boolean {
  return RICH_DATA_BOOKS.has(bookCode);
}

interface BookNavProps {
  currentBook?: string;
}

export function BookNav({ currentBook }: BookNavProps) {
  const [open, setOpen] = React.useState(false);
  const [selectedTestament, setSelectedTestament] = React.useState<'OT' | 'NT'>('OT');

  const otCategories = categories.filter((cat) =>
    getBooksByCategory(cat).some((b) => b.testament === 'OT')
  );
  const ntCategories = categories.filter((cat) =>
    getBooksByCategory(cat).some((b) => b.testament === 'NT')
  );

  const displayCategories = selectedTestament === 'OT' ? otCategories : ntCategories;

  const currentBookData = allBooks.find((b) => b.code === currentBook);

  return (
    <Popover.Root open={open} onOpenChange={setOpen}>
      <Popover.Trigger asChild>
        <button
          className="text-sm hover:text-[var(--accent)] flex items-center gap-1"
          aria-label="Select book"
        >
          {currentBookData ? currentBookData.name : 'Read'}
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
            <path d="m6 9 6 6 6-6" />
          </svg>
        </button>
      </Popover.Trigger>

      <Popover.Portal>
        <Popover.Content
          className="z-50 bg-[var(--background)] border border-[var(--border)] rounded-lg shadow-lg w-[400px] max-h-[70vh] overflow-hidden"
          sideOffset={8}
          align="start"
        >
          {/* Testament Tabs */}
          <div className="flex border-b border-[var(--border)]">
            <button
              onClick={() => setSelectedTestament('OT')}
              className={`flex-1 px-4 py-3 text-sm font-medium transition-colors ${
                selectedTestament === 'OT'
                  ? 'bg-[var(--muted)] text-[var(--foreground)]'
                  : 'text-[var(--muted-foreground)] hover:text-[var(--foreground)]'
              }`}
            >
              Old Testament
              <span className="ml-2 text-xs text-[var(--muted-foreground)]">39 books</span>
            </button>
            <button
              onClick={() => setSelectedTestament('NT')}
              className={`flex-1 px-4 py-3 text-sm font-medium transition-colors ${
                selectedTestament === 'NT'
                  ? 'bg-[var(--muted)] text-[var(--foreground)]'
                  : 'text-[var(--muted-foreground)] hover:text-[var(--foreground)]'
              }`}
            >
              New Testament
              <span className="ml-2 text-xs text-[var(--muted-foreground)]">27 books</span>
            </button>
          </div>

          {/* Book Grid */}
          <div className="p-4 overflow-y-auto max-h-[calc(70vh-52px)]">
            {displayCategories.map((category) => {
              const books = getBooksByCategory(category).filter(
                (b) => b.testament === selectedTestament
              );
              if (books.length === 0) return null;

              return (
                <div key={category} className="mb-4 last:mb-0">
                  <h3 className="text-xs font-semibold text-[var(--muted-foreground)] uppercase tracking-wide mb-2">
                    {category}
                  </h3>
                  <div className="grid grid-cols-3 gap-1">
                    {books.map((book) => (
                      <BookLink
                        key={book.code}
                        book={book}
                        isActive={book.code === currentBook}
                        hasRichData={hasRichData(book.code)}
                        onClick={() => setOpen(false)}
                      />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Footer */}
          <div className="border-t border-[var(--border)] px-4 py-2 text-xs text-[var(--muted-foreground)]">
            <span className="inline-flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-green-500" />
              Rich study data (Genesis, John)
            </span>
            <span className="ml-3">All 66 books available</span>
          </div>

          <Popover.Arrow className="fill-[var(--border)]" />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}

interface BookLinkProps {
  book: BookMetadata;
  isActive: boolean;
  hasRichData: boolean;
  onClick: () => void;
}

function BookLink({ book, isActive, hasRichData, onClick }: BookLinkProps) {
  return (
    <Link
      href={`/read/${book.code}/1/`}
      onClick={onClick}
      className={`
        px-2 py-1.5 rounded text-sm transition-colors relative
        ${isActive
          ? 'bg-[var(--accent)] text-[var(--accent-foreground)]'
          : hasRichData
            ? 'bg-green-50 dark:bg-green-900/20 hover:bg-green-100 dark:hover:bg-green-900/30 text-[var(--foreground)]'
            : 'hover:bg-[var(--muted)] text-[var(--foreground)]'
        }
      `}
      title={`${book.name} (${book.chapters} chapters)${hasRichData ? ' - Rich study data' : ''}`}
    >
      <span className="truncate block">{book.name}</span>
      {hasRichData && !isActive && (
        <span className="absolute top-1 right-1 w-1.5 h-1.5 rounded-full bg-green-500" />
      )}
    </Link>
  );
}

export default BookNav;
