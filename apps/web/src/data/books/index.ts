/**
 * Central book data index
 * Manages loading and accessing verse data for all books
 */

import type { SourceToken, VerseTranslation, StudyNote } from '@open-bible/schemas';
import { allBooks, getBook, type BookMetadata } from '../books-metadata';

export interface VerseData {
  ref: string;
  sourceTokens: SourceToken[];
  translation: VerseTranslation;
  notes: StudyNote[];
}

export interface ChapterData {
  bookCode: string;
  chapter: number;
  verses: VerseData[];
}

// Registry of loaded book data
const bookDataRegistry: Record<string, Record<number, VerseData[]>> = {};

// Register book data
export function registerBookData(bookCode: string, chapter: number, verses: VerseData[]) {
  if (!bookDataRegistry[bookCode]) {
    bookDataRegistry[bookCode] = {};
  }
  bookDataRegistry[bookCode][chapter] = verses;
}

// Get chapter data
export function getChapterData(bookCode: string, chapter: number): VerseData[] | null {
  return bookDataRegistry[bookCode]?.[chapter] || null;
}

// Check if chapter has data
export function hasChapterData(bookCode: string, chapter: number): boolean {
  return !!bookDataRegistry[bookCode]?.[chapter];
}

// Get all available chapters for a book
export function getAvailableChapters(bookCode: string): number[] {
  const bookData = bookDataRegistry[bookCode];
  if (!bookData) return [];
  return Object.keys(bookData).map(Number).sort((a, b) => a - b);
}

// Get all books with data
export function getBooksWithData(): string[] {
  return Object.keys(bookDataRegistry);
}

// Get statistics
export function getDataStats() {
  const booksWithData = getBooksWithData();
  let totalVerses = 0;
  let totalChapters = 0;

  for (const bookCode of booksWithData) {
    const chapters = getAvailableChapters(bookCode);
    totalChapters += chapters.length;
    for (const chapter of chapters) {
      const verses = getChapterData(bookCode, chapter);
      if (verses) {
        totalVerses += verses.length;
      }
    }
  }

  return {
    booksWithData: booksWithData.length,
    totalBooks: allBooks.length,
    chaptersWithData: totalChapters,
    versesWithData: totalVerses,
  };
}

// Export types
export type { BookMetadata };
export { allBooks, getBook };
