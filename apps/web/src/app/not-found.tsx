'use client';

import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="container mx-auto px-4 py-24 text-center max-w-2xl">
      <div className="text-6xl mb-6" aria-hidden="true">📖</div>
      <h1 className="text-4xl font-bold mb-4">Page Not Found</h1>
      <p className="text-lg text-[var(--muted-foreground)] mb-8">
        The page you&apos;re looking for doesn&apos;t exist. It may have been moved or the URL might be incorrect.
      </p>
      <div className="flex gap-4 justify-center flex-wrap">
        <Link
          href="/"
          className="px-6 py-3 bg-[var(--accent)] text-[var(--accent-foreground)] rounded-lg font-medium hover:opacity-90 transition"
        >
          Go Home
        </Link>
        <Link
          href="/books/"
          className="px-6 py-3 border border-[var(--border)] rounded-lg font-medium hover:bg-[var(--muted)] transition"
        >
          Browse Books
        </Link>
        <Link
          href="/search/"
          className="px-6 py-3 border border-[var(--border)] rounded-lg font-medium hover:bg-[var(--muted)] transition"
        >
          Search
        </Link>
      </div>
    </div>
  );
}
