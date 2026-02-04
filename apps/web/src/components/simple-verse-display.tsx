'use client';

import { CopyVerseButton } from './copy-verse-button';
import { ShareVerseButton } from './share-verse-button';
import { BookmarkButton } from './bookmark-button';
import { VerseNoteButton } from './verse-note-button';

interface SimpleVerseDisplayProps {
  verseRef: string;
  verseNumber: number;
  text: string;
  bookCode?: string;
  chapter?: number;
  showVerseNumbers?: boolean;
}

export function SimpleVerseDisplay({ verseRef, verseNumber, text, bookCode, chapter, showVerseNumbers = true }: SimpleVerseDisplayProps) {
  return (
    <div id={`v${verseNumber}`} className="mb-4 leading-relaxed group flex items-start gap-2 transition-colors rounded-sm px-1 -mx-1">
      <div className="flex-1">
        {showVerseNumbers && (
          <sup className="text-[var(--muted-foreground)] mr-1 font-medium">
            {verseNumber}
          </sup>
        )}
        <span className="text-[var(--foreground)]">{text}</span>
      </div>
      <div className="opacity-0 group-hover:opacity-100 transition-opacity flex gap-1">
        <CopyVerseButton verseRef={verseRef} text={text} />
        {bookCode && chapter && (
          <>
            <ShareVerseButton
              verseRef={verseRef}
              bookCode={bookCode}
              chapter={chapter}
              verse={verseNumber}
            />
            <BookmarkButton
              bookCode={bookCode}
              chapter={chapter}
              verse={verseNumber}
              text={text}
            />
            <VerseNoteButton
              bookCode={bookCode}
              chapter={chapter}
              verse={verseNumber}
            />
          </>
        )}
      </div>
    </div>
  );
}

interface SimpleVerseListProps {
  verses: Array<{ ref: string; verseNumber: number; text: string }>;
  translationName?: string;
  className?: string;
  bookCode?: string;
  chapter?: number;
  showVerseNumbers?: boolean;
}

export function SimpleVerseList({ verses, translationName, className, bookCode, chapter, showVerseNumbers = true }: SimpleVerseListProps) {
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
          bookCode={bookCode}
          chapter={chapter}
          showVerseNumbers={showVerseNumbers}
        />
      ))}
    </div>
  );
}

export default SimpleVerseList;
