'use client';

export interface Bookmark {
  ref: string;
  bookCode: string;
  chapter: number;
  verse: number;
  text: string;
  createdAt: number;
}

const STORAGE_KEY = 'bible-bookmarks';

export function getBookmarks(): Bookmark[] {
  if (typeof window === 'undefined') return [];
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
}

export function addBookmark(bookmark: Omit<Bookmark, 'createdAt'>): Bookmark {
  const bookmarks = getBookmarks();
  const existing = bookmarks.find((b) => b.ref === bookmark.ref);
  if (existing) return existing;

  const newBookmark: Bookmark = {
    ...bookmark,
    createdAt: Date.now(),
  };
  bookmarks.unshift(newBookmark);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(bookmarks.slice(0, 100)));
  return newBookmark;
}

export function removeBookmark(ref: string): void {
  const bookmarks = getBookmarks();
  const filtered = bookmarks.filter((b) => b.ref !== ref);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(filtered));
}

export function isBookmarked(ref: string): boolean {
  return getBookmarks().some((b) => b.ref === ref);
}

export function toggleBookmark(bookmark: Omit<Bookmark, 'createdAt'>): boolean {
  if (isBookmarked(bookmark.ref)) {
    removeBookmark(bookmark.ref);
    return false;
  } else {
    addBookmark(bookmark);
    return true;
  }
}
