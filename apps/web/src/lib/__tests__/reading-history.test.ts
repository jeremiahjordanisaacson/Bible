import { describe, it, expect, beforeEach } from 'vitest';
import {
  getReadingHistory,
  addToReadingHistory,
  clearReadingHistory,
} from '@/lib/reading-history';

describe('reading-history', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('starts with empty history', () => {
    expect(getReadingHistory()).toEqual([]);
  });

  it('adds a reading history entry', () => {
    addToReadingHistory('Gen', 1);
    const history = getReadingHistory();
    expect(history.length).toBe(1);
    expect(history[0].bookCode).toBe('Gen');
    expect(history[0].chapter).toBe(1);
  });

  it('keeps at most 10 entries', () => {
    for (let i = 1; i <= 15; i++) {
      addToReadingHistory('Gen', i);
    }
    const history = getReadingHistory();
    expect(history.length).toBeLessThanOrEqual(10);
  });

  it('most recent entry is first', () => {
    addToReadingHistory('Gen', 1);
    addToReadingHistory('Gen', 2);
    const history = getReadingHistory();
    expect(history[0].chapter).toBe(2);
  });

  it('clearReadingHistory empties the list', () => {
    addToReadingHistory('Gen', 1);
    clearReadingHistory();
    expect(getReadingHistory()).toEqual([]);
  });

  it('persists to localStorage', () => {
    addToReadingHistory('Gen', 1);
    const raw = localStorage.getItem('bible-reading-history');
    expect(raw).not.toBeNull();
  });
});
