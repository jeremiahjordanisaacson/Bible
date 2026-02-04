'use client';

import * as React from 'react';
import Link from 'next/link';
import { getBookmarks, removeBookmark, Bookmark } from '@/lib/bookmarks';
import { getBook } from '@/data/books-metadata';

export function BookmarksList() {
  const [bookmarks, setBookmarks] = React.useState<Bookmark[]>([]);

  React.useEffect(() => {
    setBookmarks(getBookmarks());
  }, []);

  const handleRemove = (ref: string) => {
    removeBookmark(ref);
    setBookmarks(getBookmarks());
  };

  if (bookmarks.length === 0) {
    return null;
  }

  return (
    <div className="bg-[var(--card)] border border-[var(--border)] rounded-lg p-4">
      <h3 className="font-semibold mb-3 flex items-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-4 h-4 text-[var(--accent)]"
        >
          <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" />
        </svg>
        Bookmarked Verses
      </h3>
      <ul className="space-y-2">
        {bookmarks.slice(0, 10).map((bookmark) => {
          const book = getBook(bookmark.bookCode);
          const bookName = book?.name || bookmark.bookCode;
          return (
            <li key={bookmark.ref} className="group flex items-start gap-2 text-sm">
              <Link
                href={`/read/${bookmark.bookCode}/${bookmark.chapter}/#v${bookmark.verse}`}
                className="flex-1 hover:text-[var(--accent)]"
              >
                <span className="font-medium">
                  {bookName} {bookmark.chapter}:{bookmark.verse}
                </span>
                <span className="text-[var(--muted-foreground)] ml-2 line-clamp-1">
                  {bookmark.text.slice(0, 80)}...
                </span>
              </Link>
              <button
                onClick={() => handleRemove(bookmark.ref)}
                className="opacity-0 group-hover:opacity-100 p-1 hover:text-red-500 transition-all"
                title="Remove bookmark"
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
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
              </button>
            </li>
          );
        })}
      </ul>
      {bookmarks.length > 10 && (
        <p className="text-xs text-[var(--muted-foreground)] mt-2">
          +{bookmarks.length - 10} more bookmarks
        </p>
      )}
    </div>
  );
}

export default BookmarksList;
