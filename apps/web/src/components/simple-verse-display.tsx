'use client';

interface SimpleVerseDisplayProps {
  verseNumber: number;
  text: string;
}

export function SimpleVerseDisplay({ verseNumber, text }: SimpleVerseDisplayProps) {
  return (
    <div className="mb-4 leading-relaxed">
      <sup className="text-[var(--muted-foreground)] mr-1 font-medium">
        {verseNumber}
      </sup>
      <span className="text-[var(--foreground)]">{text}</span>
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
          verseNumber={verse.verseNumber}
          text={verse.text}
        />
      ))}
    </div>
  );
}

export default SimpleVerseList;
