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
        case '?':
          setShowKeyboardShortcuts(true);
          break;
      }
    },
    [setSelectedLayer, showStudyMode, setShowStudyMode, showNotes, setShowNotes, setShowKeyboardShortcuts]
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
