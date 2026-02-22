'use client';

import { useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { useBibleStore } from '@/store/bible-store';
import { getBook, getNextBook, getPrevBook } from '@/data/books-metadata';

/**
 * Hook for keyboard navigation and shortcuts
 */
export function useKeyboardNavigation() {
  const router = useRouter();
  const {
    currentBook,
    currentChapter,
    selectedLayer,
    setSelectedLayer,
    showStudyMode,
    setShowStudyMode,
    showNotes,
    setShowNotes,
    setShowKeyboardShortcuts,
    toggleCompareView,
    toggleProvenance,
    toggleVariants,
  } = useBibleStore();

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      // Escape always works — close modals/popovers
      if (event.key === 'Escape') {
        setShowKeyboardShortcuts(false);
        // Blur active element to close Radix popovers
        if (document.activeElement instanceof HTMLElement) {
          document.activeElement.blur();
        }
        return;
      }

      // Don't trigger shortcuts when typing in inputs
      if (
        event.target instanceof HTMLInputElement ||
        event.target instanceof HTMLTextAreaElement ||
        event.target instanceof HTMLSelectElement
      ) {
        return;
      }

      // / or Ctrl+K to focus search
      if (event.key === '/' || (event.key === 'k' && (event.metaKey || event.ctrlKey))) {
        event.preventDefault();
        const searchInput = document.querySelector('input[aria-label="Search morphological data"]') as HTMLInputElement
          || document.querySelector('input[aria-label="Search in chapter"]') as HTMLInputElement;
        if (searchInput) {
          searchInput.focus();
        } else {
          router.push('/search');
        }
        return;
      }

      // Layer shortcuts
      switch (event.key) {
        case '1':
          setSelectedLayer('literal');
          break;
        case '2':
          setSelectedLayer('idiomatic');
          break;
        case '3':
          setSelectedLayer('literary');
          break;
        case 's':
        case 'S':
          setShowStudyMode(!showStudyMode);
          break;
        case 'n':
        case 'N':
          setShowNotes(!showNotes);
          break;
        case 'c':
        case 'C':
          toggleCompareView();
          break;
        case 'p':
        case 'P':
          toggleProvenance();
          break;
        case 'v':
        case 'V':
          toggleVariants();
          break;
        case 'ArrowLeft':
          if (currentBook && currentChapter) {
            if (currentChapter > 1) {
              router.push(`/read/${currentBook}/${currentChapter - 1}/`);
            } else {
              const prev = getPrevBook(currentBook);
              if (prev) router.push(`/read/${prev.code}/${prev.chapters}/`);
            }
          }
          break;
        case 'ArrowRight':
          if (currentBook && currentChapter) {
            const book = getBook(currentBook);
            if (book && currentChapter < book.chapters) {
              router.push(`/read/${currentBook}/${currentChapter + 1}/`);
            } else {
              const next = getNextBook(currentBook);
              if (next) router.push(`/read/${next.code}/1/`);
            }
          }
          break;
        case '?':
          setShowKeyboardShortcuts(true);
          break;
      }
    },
    [router, currentBook, currentChapter, setSelectedLayer, showStudyMode, setShowStudyMode, showNotes, setShowNotes, setShowKeyboardShortcuts, toggleCompareView, toggleProvenance, toggleVariants]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  return {
    selectedLayer,
    showStudyMode,
    showNotes,
  };
}

export default useKeyboardNavigation;
