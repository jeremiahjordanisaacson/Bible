'use client';

import { CopyVerseButton } from './copy-verse-button';

interface SimpleVerseDisplayProps {
  verseRef: string;
  verseNumber: number;
  text: string;
}

export function SimpleVerseDisplay({ verseRef, verseNumber, text }: SimpleVerseDisplayProps) {
  return (
    <div className="mb-4 leading-relaxed group flex items-start gap-2">
      <div className="flex-1">
        <sup className="text-[var(--muted-foreground)] mr-1 font-medium">
          {verseNumber}
        </sup>
        <span className="text-[var(--foreground)]">{text}</span>
      </div>
      <div className="opacity-0 group-hover:opacity-100 transition-opacity">
        <CopyVerseButton verseRef={verseRef} text={text} />
      </div>
    </div>
  );
}

interface SimpleVerseListProps {
  verses: Array<{ ref: string; verseNumber: number; text: string }>;
  translationName?: string;
  className?: string;
}

export function SimpleVerseList({ verses, translationName, className }: SimpleVerseListProps) {
  return (
    <div className={`max-w-3xl ${className || ''}`}>
      {translationName && (
        <div className="mb-4 text-sm text-[var(--muted-foreground)] italic">
          {translationName}
        </div>
      )}
      {verses.map((verse) => (
        <SimpleVerseDisplay
          key={verse.ref}
          verseRef={verse.ref}
          verseNumber={verse.verseNumber}
          text={verse.text}
        />
      ))}
    </div>
  );
}

export default SimpleVerseList;
