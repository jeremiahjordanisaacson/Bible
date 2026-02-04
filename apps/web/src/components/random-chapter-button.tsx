'use client';

import * as React from 'react';
import { useRouter } from 'next/navigation';
import { allBooks } from '@/data/books-metadata';

export function RandomChapterButton() {
  const router = useRouter();

  const goToRandomChapter = () => {
    const randomBook = allBooks[Math.floor(Math.random() * allBooks.length)];
    const randomChapter = Math.floor(Math.random() * randomBook.chapters) + 1;
    router.push(`/read/${randomBook.code}/${randomChapter}/`);
  };

  return (
    <button
      onClick={goToRandomChapter}
      className="px-4 py-2 border border-[var(--border)] rounded-lg font-medium hover:bg-[var(--muted)] transition flex items-center gap-2"
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
        <path d="M2 18h1.4c1.3 0 2.5-.6 3.3-1.7l6.1-8.6c.7-1.1 2-1.7 3.3-1.7H22" />
        <path d="m18 2 4 4-4 4" />
        <path d="M2 6h1.9c1.5 0 2.9.9 3.6 2.2" />
        <path d="M22 18h-5.9c-1.3 0-2.6-.7-3.3-1.8l-.5-.8" />
        <path d="m18 14 4 4-4 4" />
      </svg>
      Random Chapter
    </button>
  );
}

export default RandomChapterButton;
