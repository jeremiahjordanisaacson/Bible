/**
 * Reading history management using localStorage
 */

export interface ReadingHistoryEntry {
  bookCode: string;
  chapter: number;
  timestamp: number;
}

const STORAGE_KEY = 'bible-reading-history';
const MAX_ENTRIES = 10;

export function getReadingHistory(): ReadingHistoryEntry[] {
  if (typeof window === 'undefined') return [];

  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return [];
    return JSON.parse(stored);
  } catch {
    return [];
  }
}

export function addToReadingHistory(bookCode: string, chapter: number): void {
  if (typeof window === 'undefined') return;

  try {
    const history = getReadingHistory();

    // Remove existing entry for this book/chapter
    const filtered = history.filter(
      (entry) => !(entry.bookCode === bookCode && entry.chapter === chapter)
    );

    // Add new entry at the beginning
    const newEntry: ReadingHistoryEntry = {
      bookCode,
      chapter,
      timestamp: Date.now(),
    };

    const updated = [newEntry, ...filtered].slice(0, MAX_ENTRIES);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  } catch {
    // Ignore localStorage errors
  }
}

export function clearReadingHistory(): void {
  if (typeof window === 'undefined') return;
  localStorage.removeItem(STORAGE_KEY);
}
