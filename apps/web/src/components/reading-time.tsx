'use client';

interface ReadingTimeProps {
  wordCount: number;
  wordsPerMinute?: number;
}

export function ReadingTime({ wordCount, wordsPerMinute = 200 }: ReadingTimeProps) {
  if (!wordCount || wordCount === 0) return null;

  const minutes = Math.ceil(wordCount / wordsPerMinute);

  return (
    <span className="inline-flex items-center gap-1 text-xs text-[var(--muted-foreground)]">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-3 h-3"
      >
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
      {minutes} min read
    </span>
  );
}

export default ReadingTime;
