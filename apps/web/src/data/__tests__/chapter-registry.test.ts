import { describe, it, expect } from 'vitest';
import {
  getRegisteredChapters,
  hasRichChapterData,
  getRichVerseNumbers,
  getChapterVerses,
  getRichVerseData,
} from '@/data/chapter-registry';

describe('chapter-registry', () => {
  it('returns registered chapters', () => {
    const chapters = getRegisteredChapters();
    expect(chapters.length).toBeGreaterThan(0);
    expect(chapters).toContain('Gen.1');
  });

  it('has at least 100 chapters registered', () => {
    const chapters = getRegisteredChapters();
    expect(chapters.length).toBeGreaterThanOrEqual(100);
  });

  it('chapter keys follow Book.Chapter format', () => {
    const chapters = getRegisteredChapters();
    for (const key of chapters) {
      expect(key).toMatch(/^[A-Za-z0-9]+\.\d+$/);
    }
  });

  it('hasRichChapterData returns true for Gen 1', () => {
    expect(hasRichChapterData('Gen', 1)).toBe(true);
  });

  it('hasRichChapterData returns false for nonexistent book', () => {
    expect(hasRichChapterData('FakeBook', 1)).toBe(false);
  });

  it('getRichVerseNumbers returns an array of numbers for Gen 1', () => {
    const nums = getRichVerseNumbers('Gen', 1);
    expect(nums.length).toBeGreaterThan(0);
    for (const n of nums) {
      expect(typeof n).toBe('number');
      expect(n).toBeGreaterThanOrEqual(1);
    }
  });

  it('getChapterVerses returns verse data with expected shape', () => {
    const verses = getChapterVerses('Gen', 1);
    expect(verses.length).toBeGreaterThan(0);
    const first = verses[0];
    expect(first).toHaveProperty('ref');
    expect(first.ref).toMatch(/^Gen\.1\.\d+$/);
  });

  it('getRichVerseData returns data for existing verse', () => {
    const data = getRichVerseData('Gen', 1, 1);
    expect(data).not.toBeNull();
    if (data) {
      expect(data.ref).toBe('Gen.1.1');
    }
  });

  it('getRichVerseData returns null for nonexistent verse', () => {
    expect(getRichVerseData('Gen', 1, 9999)).toBeNull();
  });

  it('most registered chapters have at least 1 verse', () => {
    const chapters = getRegisteredChapters();
    let withVerses = 0;
    for (const key of chapters) {
      const [book, ch] = key.split('.');
      const verses = getChapterVerses(book, parseInt(ch, 10));
      if (verses.length > 0) withVerses++;
    }
    // At least 90% of registered chapters should have verses
    expect(withVerses / chapters.length).toBeGreaterThan(0.9);
  });

  it('verse data contains sourceTokens array', () => {
    const verses = getChapterVerses('Gen', 1);
    for (const v of verses.slice(0, 5)) {
      expect(v).toHaveProperty('sourceTokens');
      expect(Array.isArray(v.sourceTokens)).toBe(true);
      expect(v.sourceTokens.length).toBeGreaterThan(0);
    }
  });

  it('source tokens have required fields', () => {
    const verses = getChapterVerses('Gen', 1);
    const token = verses[0].sourceTokens[0];
    expect(token).toHaveProperty('text');
    expect(token).toHaveProperty('transliteration');
    expect(token).toHaveProperty('lemma');
    expect(token).toHaveProperty('gloss');
    expect(token).toHaveProperty('strongs');
    expect(token).toHaveProperty('morphology');
    expect(token).toHaveProperty('language');
  });
});
