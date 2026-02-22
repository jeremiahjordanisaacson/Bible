import { describe, it, expect, vi, beforeEach } from 'vitest';
import { getApiBookName, fetchChapter, convertToSimpleVerses, type BibleApiResponse } from '@/lib/bible-api';

describe('bible-api', () => {
  describe('getApiBookName', () => {
    it('maps Gen to Genesis', () => {
      expect(getApiBookName('Gen')).toBe('Genesis');
    });

    it('maps John to John', () => {
      expect(getApiBookName('John')).toBe('John');
    });

    it('maps Rev to Revelation', () => {
      expect(getApiBookName('Rev')).toBe('Revelation');
    });

    it('returns code unchanged if not mapped', () => {
      expect(getApiBookName('Unknown')).toBe('Unknown');
    });
  });

  describe('convertToSimpleVerses', () => {
    const mockResponse: BibleApiResponse = {
      reference: 'Genesis 1',
      text: 'In the beginning God created...',
      translation_id: 'web',
      translation_name: 'World English Bible',
      translation_note: '',
      verses: [
        { book_id: 'Gen', book_name: 'Genesis', chapter: 1, verse: 1, text: '  In the beginning  ' },
        { book_id: 'Gen', book_name: 'Genesis', chapter: 1, verse: 2, text: '  The earth was  ' },
      ],
    };

    it('converts API verses to simple format', () => {
      const result = convertToSimpleVerses(mockResponse);
      expect(result.length).toBe(2);
      expect(result[0]).toEqual({
        ref: 'Gen.1.1',
        verseNumber: 1,
        text: 'In the beginning',
      });
    });

    it('trims whitespace from text', () => {
      const result = convertToSimpleVerses(mockResponse);
      expect(result[0].text).toBe('In the beginning');
      expect(result[1].text).toBe('The earth was');
    });
  });

  describe('fetchChapter', () => {
    beforeEach(() => {
      vi.restoreAllMocks();
    });

    it('returns data on successful fetch', async () => {
      const mockData: BibleApiResponse = {
        reference: 'Genesis 1',
        text: 'test',
        translation_id: 'web',
        translation_name: 'World English Bible',
        translation_note: '',
        verses: [{ book_id: 'Gen', book_name: 'Genesis', chapter: 1, verse: 1, text: 'Test' }],
      };

      vi.spyOn(globalThis, 'fetch').mockResolvedValue({
        ok: true,
        json: () => Promise.resolve(mockData),
      } as Response);

      const result = await fetchChapter('Gen', 1);
      expect(result).not.toBeNull();
      expect(result!.reference).toBe('Genesis 1');
    });

    it('returns null on HTTP error', async () => {
      vi.spyOn(globalThis, 'fetch').mockResolvedValue({
        ok: false,
        status: 404,
      } as Response);

      const result = await fetchChapter('Gen', 1);
      expect(result).toBeNull();
    });

    it('returns null on network error', async () => {
      vi.spyOn(globalThis, 'fetch').mockRejectedValue(new Error('Network error'));

      const result = await fetchChapter('Gen', 1);
      expect(result).toBeNull();
    });
  });
});
