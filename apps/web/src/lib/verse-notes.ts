'use client';

export interface VerseNote {
  ref: string;
  note: string;
  createdAt: number;
  updatedAt: number;
}

const STORAGE_KEY = 'verse-notes';

export function getVerseNotes(): Record<string, VerseNote> {
  if (typeof window === 'undefined') return {};
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : {};
  } catch {
    return {};
  }
}

export function getVerseNote(ref: string): VerseNote | null {
  const notes = getVerseNotes();
  return notes[ref] || null;
}

export function saveVerseNote(ref: string, note: string): VerseNote {
  const notes = getVerseNotes();
  const existing = notes[ref];
  const now = Date.now();

  const verseNote: VerseNote = {
    ref,
    note,
    createdAt: existing?.createdAt || now,
    updatedAt: now,
  };

  notes[ref] = verseNote;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(notes));
  return verseNote;
}

export function deleteVerseNote(ref: string): void {
  const notes = getVerseNotes();
  delete notes[ref];
  localStorage.setItem(STORAGE_KEY, JSON.stringify(notes));
}

export function hasNote(ref: string): boolean {
  return !!getVerseNote(ref);
}

export function getAllNotesForChapter(bookCode: string, chapter: number): VerseNote[] {
  const notes = getVerseNotes();
  const prefix = `${bookCode}.${chapter}.`;
  return Object.values(notes)
    .filter((note) => note.ref.startsWith(prefix))
    .sort((a, b) => {
      const aVerse = parseInt(a.ref.split('.').pop() || '0');
      const bVerse = parseInt(b.ref.split('.').pop() || '0');
      return aVerse - bVerse;
    });
}
