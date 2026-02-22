import { describe, it, expect, beforeEach } from 'vitest';
import { useBibleStore } from '@/store/bible-store';

describe('bible-store', () => {
  beforeEach(() => {
    // Reset store to defaults
    useBibleStore.setState({
      currentBook: 'Gen',
      currentChapter: 1,
      currentVerse: null,
      selectedLayer: 'idiomatic',
      showStudyMode: false,
      showVariants: false,
      showNotes: true,
      showCompareView: false,
      showProvenance: false,
      highlightedTokenId: null,
      highlightedSpanId: null,
      searchQuery: '',
      searchResults: [],
      showKeyboardShortcuts: false,
    });
  });

  it('has correct default state', () => {
    const state = useBibleStore.getState();
    expect(state.currentBook).toBe('Gen');
    expect(state.currentChapter).toBe(1);
    expect(state.currentVerse).toBeNull();
    expect(state.selectedLayer).toBe('idiomatic');
    expect(state.showStudyMode).toBe(false);
    expect(state.showNotes).toBe(true);
  });

  it('setCurrentBook updates book and resets chapter/verse', () => {
    useBibleStore.getState().setCurrentBook('John');
    const state = useBibleStore.getState();
    expect(state.currentBook).toBe('John');
    expect(state.currentChapter).toBe(1);
    expect(state.currentVerse).toBeNull();
  });

  it('setCurrentChapter updates chapter and resets verse', () => {
    useBibleStore.getState().setCurrentChapter(5);
    const state = useBibleStore.getState();
    expect(state.currentChapter).toBe(5);
    expect(state.currentVerse).toBeNull();
  });

  it('setCurrentVerse updates verse', () => {
    useBibleStore.getState().setCurrentVerse(10);
    expect(useBibleStore.getState().currentVerse).toBe(10);
  });

  it('setSelectedLayer changes layer', () => {
    useBibleStore.getState().setSelectedLayer('literal');
    expect(useBibleStore.getState().selectedLayer).toBe('literal');

    useBibleStore.getState().setSelectedLayer('literary');
    expect(useBibleStore.getState().selectedLayer).toBe('literary');
  });

  it('toggleStudyMode toggles', () => {
    expect(useBibleStore.getState().showStudyMode).toBe(false);
    useBibleStore.getState().toggleStudyMode();
    expect(useBibleStore.getState().showStudyMode).toBe(true);
    useBibleStore.getState().toggleStudyMode();
    expect(useBibleStore.getState().showStudyMode).toBe(false);
  });

  it('toggleVariants toggles', () => {
    expect(useBibleStore.getState().showVariants).toBe(false);
    useBibleStore.getState().toggleVariants();
    expect(useBibleStore.getState().showVariants).toBe(true);
  });

  it('toggleNotes toggles', () => {
    expect(useBibleStore.getState().showNotes).toBe(true);
    useBibleStore.getState().toggleNotes();
    expect(useBibleStore.getState().showNotes).toBe(false);
  });

  it('toggleCompareView toggles', () => {
    expect(useBibleStore.getState().showCompareView).toBe(false);
    useBibleStore.getState().toggleCompareView();
    expect(useBibleStore.getState().showCompareView).toBe(true);
  });

  it('toggleProvenance toggles', () => {
    expect(useBibleStore.getState().showProvenance).toBe(false);
    useBibleStore.getState().toggleProvenance();
    expect(useBibleStore.getState().showProvenance).toBe(true);
  });

  it('navigateTo sets book, chapter, and optional verse', () => {
    useBibleStore.getState().navigateTo('Psa', 23, 1);
    const state = useBibleStore.getState();
    expect(state.currentBook).toBe('Psa');
    expect(state.currentChapter).toBe(23);
    expect(state.currentVerse).toBe(1);
  });

  it('navigateTo without verse sets verse to null', () => {
    useBibleStore.getState().navigateTo('Rev', 22);
    expect(useBibleStore.getState().currentVerse).toBeNull();
  });

  it('setHighlightedToken updates', () => {
    useBibleStore.getState().setHighlightedToken('token-1');
    expect(useBibleStore.getState().highlightedTokenId).toBe('token-1');
    useBibleStore.getState().setHighlightedToken(null);
    expect(useBibleStore.getState().highlightedTokenId).toBeNull();
  });

  it('setSearchQuery updates', () => {
    useBibleStore.getState().setSearchQuery('beginning');
    expect(useBibleStore.getState().searchQuery).toBe('beginning');
  });

  it('setShowKeyboardShortcuts updates', () => {
    useBibleStore.getState().setShowKeyboardShortcuts(true);
    expect(useBibleStore.getState().showKeyboardShortcuts).toBe(true);
  });
});
