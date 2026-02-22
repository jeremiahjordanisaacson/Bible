'use client';

import * as React from 'react';
import { getVerseNote, saveVerseNote, deleteVerseNote } from '@/lib/verse-notes';

interface VerseNoteButtonProps {
  bookCode: string;
  chapter: number;
  verse: number;
}

export function VerseNoteButton({ bookCode, chapter, verse }: VerseNoteButtonProps) {
  const ref = `${bookCode}.${chapter}.${verse}`;
  const [isOpen, setIsOpen] = React.useState(false);
  const [note, setNote] = React.useState('');
  const [hasExistingNote, setHasExistingNote] = React.useState(false);
  const textareaRef = React.useRef<HTMLTextAreaElement>(null);

  React.useEffect(() => {
    const existing = getVerseNote(ref);
    if (existing) {
      setNote(existing.note);
      setHasExistingNote(true);
    } else {
      setNote('');
      setHasExistingNote(false);
    }
  }, [ref]);

  const handleOpen = () => {
    setIsOpen(true);
    setTimeout(() => textareaRef.current?.focus(), 100);
  };

  const handleSave = () => {
    if (note.trim()) {
      saveVerseNote(ref, note.trim());
      setHasExistingNote(true);
    } else {
      deleteVerseNote(ref);
      setHasExistingNote(false);
    }
    setIsOpen(false);
  };

  const handleDelete = () => {
    deleteVerseNote(ref);
    setNote('');
    setHasExistingNote(false);
    setIsOpen(false);
  };

  return (
    <>
      <button
        onClick={handleOpen}
        className={`p-1 rounded hover:bg-[var(--muted)] transition-colors ${
          hasExistingNote ? 'text-[var(--accent)]' : 'text-[var(--muted-foreground)] hover:text-[var(--accent)]'
        }`}
        title={hasExistingNote ? 'Edit note' : 'Add note'}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill={hasExistingNote ? 'currentColor' : 'none'}
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-4 h-4"
        >
          <path d="M12 20h9" />
          <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z" />
        </svg>
      </button>

      {isOpen && (
        // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
          onClick={() => setIsOpen(false)}
          onKeyDown={(e) => { if (e.key === 'Escape') setIsOpen(false); }}
          role="dialog"
          aria-modal="true"
          aria-label={hasExistingNote ? 'Edit verse note' : 'Add verse note'}
        >
          {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions */}
          <div
            className="bg-[var(--background)] border border-[var(--border)] rounded-lg shadow-lg p-4 w-full max-w-md m-4"
            onClick={(e) => e.stopPropagation()}
            role="document"
          >
            <label htmlFor={`verse-note-${verse}`} className="font-semibold mb-2 block">
              {hasExistingNote ? 'Edit Note' : 'Add Note'}
            </label>
            <p className="text-sm text-[var(--muted-foreground)] mb-3">
              Verse {verse}
            </p>
            <textarea
              id={`verse-note-${verse}`}
              ref={textareaRef}
              value={note}
              onChange={(e) => setNote(e.target.value)}
              placeholder="Write your personal note..."
              className="w-full h-32 p-2 border border-[var(--border)] rounded bg-[var(--background)] resize-none focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
            />
            <div className="flex justify-between mt-3">
              <div>
                {hasExistingNote && (
                  <button
                    onClick={handleDelete}
                    className="px-3 py-1.5 text-sm text-red-500 hover:text-red-600"
                  >
                    Delete
                  </button>
                )}
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => setIsOpen(false)}
                  className="px-3 py-1.5 text-sm text-[var(--muted-foreground)] hover:text-[var(--foreground)]"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSave}
                  className="px-3 py-1.5 text-sm bg-[var(--accent)] text-[var(--accent-foreground)] rounded"
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default VerseNoteButton;
