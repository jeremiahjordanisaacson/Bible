import { describe, it, expect } from 'vitest';
import {
  allBooks,
  oldTestamentBooks,
  newTestamentBooks,
  categories,
  getBook,
  getBooksByCategory,
  getNextBook,
  getPrevBook,
  bibleStats,
} from '@/data/books-metadata';

describe('books-metadata', () => {
  it('has exactly 66 books', () => {
    expect(allBooks.length).toBe(66);
  });

  it('OT has 39 books, NT has 27 books', () => {
    expect(oldTestamentBooks.length).toBe(39);
    expect(newTestamentBooks.length).toBe(27);
  });

  it('all books have required fields', () => {
    for (const book of allBooks) {
      expect(book.code).toBeTruthy();
      expect(book.name).toBeTruthy();
      expect(book.chapters).toBeGreaterThan(0);
      expect(['OT', 'NT']).toContain(book.testament);
      expect(['hebrew', 'greek', 'aramaic']).toContain(book.language);
      expect(book.order).toBeGreaterThan(0);
      expect(book.category).toBeTruthy();
    }
  });

  it('book codes are unique', () => {
    const codes = allBooks.map(b => b.code);
    expect(new Set(codes).size).toBe(codes.length);
  });

  it('book orders are sequential', () => {
    for (let i = 0; i < allBooks.length; i++) {
      expect(allBooks[i].order).toBe(i + 1);
    }
  });

  it('total chapters is 1189', () => {
    const total = allBooks.reduce((sum, b) => sum + b.chapters, 0);
    expect(total).toBe(1189);
  });

  it('Genesis has 50 chapters', () => {
    const gen = getBook('Gen');
    expect(gen).not.toBeNull();
    expect(gen!.chapters).toBe(50);
  });

  it('Revelation has 22 chapters', () => {
    const rev = getBook('Rev');
    expect(rev).not.toBeNull();
    expect(rev!.chapters).toBe(22);
  });

  it('getBook returns null for unknown code', () => {
    expect(getBook('FakeBook')).toBeUndefined();
  });

  it('categories has 10 entries', () => {
    expect(categories.length).toBe(10);
  });

  it('every book category exists in categories list', () => {
    for (const book of allBooks) {
      expect(categories).toContain(book.category);
    }
  });

  it('getBooksByCategory returns books', () => {
    const pentateuch = getBooksByCategory('Pentateuch');
    expect(pentateuch.length).toBe(5);
    expect(pentateuch[0].code).toBe('Gen');
  });

  it('getNextBook returns Exodus after Genesis', () => {
    const next = getNextBook('Gen');
    expect(next).not.toBeNull();
    expect(next!.code).toBe('Exod');
  });

  it('getNextBook returns undefined after Revelation', () => {
    expect(getNextBook('Rev')).toBeUndefined();
  });

  it('getPrevBook returns Genesis before Exodus', () => {
    const prev = getPrevBook('Exod');
    expect(prev).not.toBeNull();
    expect(prev!.code).toBe('Gen');
  });

  it('getPrevBook returns undefined before Genesis', () => {
    expect(getPrevBook('Gen')).toBeUndefined();
  });

  it('bibleStats has correct total books and chapters', () => {
    expect(bibleStats.totalBooks).toBe(66);
    expect(bibleStats.totalChapters).toBe(1189);
  });

  it('Psalms has 150 chapters (most of any book)', () => {
    const psa = getBook('Ps');
    expect(psa).toBeDefined();
    expect(psa!.chapters).toBe(150);
  });

  it('OT books are all hebrew or aramaic', () => {
    for (const book of oldTestamentBooks) {
      expect(['hebrew', 'aramaic']).toContain(book.language);
    }
  });

  it('NT books are all greek', () => {
    for (const book of newTestamentBooks) {
      expect(book.language).toBe('greek');
    }
  });
});
