'use client';

import * as React from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  React.useEffect(() => {
    console.error('Application error:', error);
  }, [error]);

  return (
    <div className="container mx-auto px-4 py-24 text-center max-w-2xl">
      <div className="text-6xl mb-6" aria-hidden="true">⚠️</div>
      <h1 className="text-4xl font-bold mb-4">Something Went Wrong</h1>
      <p className="text-lg text-[var(--muted-foreground)] mb-8">
        An unexpected error occurred. This has been logged and we&apos;ll look into it.
      </p>
      <div className="flex gap-4 justify-center">
        <button
          onClick={reset}
          className="px-6 py-3 bg-[var(--accent)] text-[var(--accent-foreground)] rounded-lg font-medium hover:opacity-90 transition"
        >
          Try Again
        </button>
        <a
          href="/"
          className="px-6 py-3 border border-[var(--border)] rounded-lg font-medium hover:bg-[var(--muted)] transition"
        >
          Go Home
        </a>
      </div>
    </div>
  );
}
