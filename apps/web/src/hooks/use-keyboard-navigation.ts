'use client';

import { useEffect, useCallback } from 'react';
import { useBibleStore } from '@/store/bible-store';

/**
 * Hook for keyboard navigation and shortcuts
 */
export function useKeyboardNavigation() {
  const {
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
      // Don't trigger shortcuts when typing in inputs
      if (
        event.target instanceof HTMLInputElement ||
        event.target instanceof HTMLTextAreaElement ||
        event.target instanceof HTMLSelectElement
      ) {
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
          // Navigate to previous chapter
          {
            const prev = document.querySelector('a[href*="/read/"][href$="/"]') as HTMLAnchorElement;
            if (prev && prev.textContent?.includes('Chapter')) prev.click();
          }
          break;
        case 'ArrowRight':
          // Navigate to next chapter
          {
            const links = document.querySelectorAll('a[href*="/read/"][href$="/"]');
            const next = links[links.length - 1] as HTMLAnchorElement;
            if (next && next.textContent?.includes('Chapter')) next.click();
          }
          break;
        case '?':
          setShowKeyboardShortcuts(true);
          break;
      }
    },
    [setSelectedLayer, showStudyMode, setShowStudyMode, showNotes, setShowNotes, setShowKeyboardShortcuts, toggleCompareView, toggleProvenance, toggleVariants]
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
