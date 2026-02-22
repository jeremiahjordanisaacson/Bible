import { describe, it, expect, beforeEach } from 'vitest';
import {
  getBookmarks,
  addBookmark,
  removeBookmark,
  isBookmarked,
  toggleBookmark,
} from '@/lib/bookmarks';

describe('bookmarks', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('starts with empty bookmarks', () => {
    expect(getBookmarks()).toEqual([]);
  });

  it('addBookmark adds a bookmark', () => {
    addBookmark({ ref: 'Gen.1.1', bookCode: 'Gen', chapter: 1, verse: 1, text: 'In the beginning' });
    const bookmarks = getBookmarks();
    expect(bookmarks.length).toBe(1);
    expect(bookmarks[0].ref).toBe('Gen.1.1');
  });

  it('addBookmark prevents duplicates', () => {
    const bm = { ref: 'Gen.1.1', bookCode: 'Gen', chapter: 1, verse: 1, text: 'Test' };
    addBookmark(bm);
    addBookmark(bm);
    expect(getBookmarks().length).toBe(1);
  });

  it('removeBookmark removes by ref', () => {
    addBookmark({ ref: 'Gen.1.1', bookCode: 'Gen', chapter: 1, verse: 1, text: 'Test' });
    addBookmark({ ref: 'Gen.1.2', bookCode: 'Gen', chapter: 1, verse: 2, text: 'Test2' });
    removeBookmark('Gen.1.1');
    const bookmarks = getBookmarks();
    expect(bookmarks.length).toBe(1);
    expect(bookmarks[0].ref).toBe('Gen.1.2');
  });

  it('isBookmarked returns correct boolean', () => {
    expect(isBookmarked('Gen.1.1')).toBe(false);
    addBookmark({ ref: 'Gen.1.1', bookCode: 'Gen', chapter: 1, verse: 1, text: 'Test' });
    expect(isBookmarked('Gen.1.1')).toBe(true);
  });

  it('toggleBookmark adds when not bookmarked', () => {
    const result = toggleBookmark({ ref: 'Gen.1.1', bookCode: 'Gen', chapter: 1, verse: 1, text: 'Test' });
    expect(result).toBe(true);
    expect(isBookmarked('Gen.1.1')).toBe(true);
  });

  it('toggleBookmark removes when already bookmarked', () => {
    addBookmark({ ref: 'Gen.1.1', bookCode: 'Gen', chapter: 1, verse: 1, text: 'Test' });
    const result = toggleBookmark({ ref: 'Gen.1.1', bookCode: 'Gen', chapter: 1, verse: 1, text: 'Test' });
    expect(result).toBe(false);
    expect(isBookmarked('Gen.1.1')).toBe(false);
  });

  it('persists to localStorage', () => {
    addBookmark({ ref: 'Gen.1.1', bookCode: 'Gen', chapter: 1, verse: 1, text: 'Test' });
    const raw = localStorage.getItem('bible-bookmarks');
    expect(raw).not.toBeNull();
    const parsed = JSON.parse(raw!);
    expect(parsed.length).toBe(1);
  });
});
