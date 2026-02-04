'use client';

import { create } from 'zustand';

export type TranslationLayerType = 'literal' | 'idiomatic' | 'literary';
export type TranslationProfile = 'maximal-literal' | 'academic' | 'readability';

interface BibleState {
  // Current navigation
  currentBook: string;
  currentChapter: number;
  currentVerse: number | null;

  // Display settings
  selectedLayer: TranslationLayerType;
  showStudyMode: boolean;
  showVariants: boolean;
  showNotes: boolean;

  // Highlighting
  highlightedTokenId: string | null;
  highlightedSpanId: string | null;

  // Search
  searchQuery: string;
  searchResults: Array<{ verseRef: string; text: string; highlights: string[] }>;

  // UI modals
  showKeyboardShortcuts: boolean;

  // Actions
  setCurrentBook: (book: string) => void;
  setCurrentChapter: (chapter: number) => void;
  setCurrentVerse: (verse: number | null) => void;
  setSelectedLayer: (layer: TranslationLayerType) => void;
  toggleStudyMode: () => void;
  toggleVariants: () => void;
  toggleNotes: () => void;
  setShowStudyMode: (show: boolean) => void;
  setShowNotes: (show: boolean) => void;
  setHighlightedToken: (tokenId: string | null) => void;
  setHighlightedSpan: (spanId: string | null) => void;
  setSearchQuery: (query: string) => void;
  navigateTo: (book: string, chapter: number, verse?: number) => void;
  setShowKeyboardShortcuts: (show: boolean) => void;
}

export const useBibleStore = create<BibleState>((set) => ({
  // Initial state
  currentBook: 'Gen',
  currentChapter: 1,
  currentVerse: null,

  selectedLayer: 'idiomatic',
  showStudyMode: false,
  showVariants: false,
  showNotes: true,

  highlightedTokenId: null,
  highlightedSpanId: null,

  searchQuery: '',
  searchResults: [],

  showKeyboardShortcuts: false,

  // Actions
  setCurrentBook: (book) => set({ currentBook: book, currentChapter: 1, currentVerse: null }),
  setCurrentChapter: (chapter) => set({ currentChapter: chapter, currentVerse: null }),
  setCurrentVerse: (verse) => set({ currentVerse: verse }),
  setSelectedLayer: (layer) => set({ selectedLayer: layer }),
  toggleStudyMode: () => set((state) => ({ showStudyMode: !state.showStudyMode })),
  toggleVariants: () => set((state) => ({ showVariants: !state.showVariants })),
  toggleNotes: () => set((state) => ({ showNotes: !state.showNotes })),
  setShowStudyMode: (show) => set({ showStudyMode: show }),
  setShowNotes: (show) => set({ showNotes: show }),
  setHighlightedToken: (tokenId) => set({ highlightedTokenId: tokenId }),
  setHighlightedSpan: (spanId) => set({ highlightedSpanId: spanId }),
  setSearchQuery: (query) => set({ searchQuery: query }),
  navigateTo: (book, chapter, verse) =>
    set({ currentBook: book, currentChapter: chapter, currentVerse: verse ?? null }),
  setShowKeyboardShortcuts: (show) => set({ showKeyboardShortcuts: show }),
}));
