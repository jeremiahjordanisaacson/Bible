import { describe, it, expect, beforeEach } from 'vitest';
import {
  getVerseNotes,
  getVerseNote,
  saveVerseNote,
  deleteVerseNote,
  hasNote,
  getAllNotesForChapter,
} from '@/lib/verse-notes';

describe('verse-notes', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('starts with empty notes', () => {
    expect(getVerseNotes()).toEqual({});
  });

  it('saveVerseNote creates a note', () => {
    saveVerseNote('Gen.1.1', 'This is my note');
    const note = getVerseNote('Gen.1.1');
    expect(note).not.toBeNull();
    expect(note!.note).toBe('This is my note');
    expect(note!.ref).toBe('Gen.1.1');
  });

  it('saveVerseNote sets timestamps', () => {
    saveVerseNote('Gen.1.1', 'Test note');
    const note = getVerseNote('Gen.1.1');
    expect(note!.createdAt).toBeTruthy();
    expect(note!.updatedAt).toBeTruthy();
  });

  it('saveVerseNote updates existing note', () => {
    saveVerseNote('Gen.1.1', 'First version');
    saveVerseNote('Gen.1.1', 'Updated version');
    const note = getVerseNote('Gen.1.1');
    expect(note!.note).toBe('Updated version');
  });

  it('deleteVerseNote removes a note', () => {
    saveVerseNote('Gen.1.1', 'To delete');
    deleteVerseNote('Gen.1.1');
    expect(getVerseNote('Gen.1.1')).toBeNull();
  });

  it('hasNote returns correct boolean', () => {
    expect(hasNote('Gen.1.1')).toBe(false);
    saveVerseNote('Gen.1.1', 'Test');
    expect(hasNote('Gen.1.1')).toBe(true);
  });

  it('getAllNotesForChapter returns notes for a specific chapter', () => {
    saveVerseNote('Gen.1.1', 'Note 1');
    saveVerseNote('Gen.1.5', 'Note 5');
    saveVerseNote('Gen.2.1', 'Different chapter');
    const notes = getAllNotesForChapter('Gen', 1);
    expect(notes.length).toBe(2);
  });

  it('getAllNotesForChapter returns sorted by verse number', () => {
    saveVerseNote('Gen.1.5', 'Note 5');
    saveVerseNote('Gen.1.1', 'Note 1');
    saveVerseNote('Gen.1.3', 'Note 3');
    const notes = getAllNotesForChapter('Gen', 1);
    expect(notes[0].ref).toBe('Gen.1.1');
    expect(notes[1].ref).toBe('Gen.1.3');
    expect(notes[2].ref).toBe('Gen.1.5');
  });

  it('persists to localStorage', () => {
    saveVerseNote('Gen.1.1', 'Persisted');
    const raw = localStorage.getItem('verse-notes');
    expect(raw).not.toBeNull();
  });
});
