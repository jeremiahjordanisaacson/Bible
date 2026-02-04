'use client';

import * as React from 'react';

export function TextSelectionMenu() {
  const [position, setPosition] = React.useState<{ x: number; y: number } | null>(null);
  const [selectedText, setSelectedText] = React.useState('');
  const [copied, setCopied] = React.useState(false);

  React.useEffect(() => {
    const handleSelectionChange = () => {
      const selection = window.getSelection();
      if (selection && selection.toString().trim().length > 0) {
        const range = selection.getRangeAt(0);
        const rect = range.getBoundingClientRect();
        setSelectedText(selection.toString());
        setPosition({
          x: rect.left + rect.width / 2,
          y: rect.top - 10,
        });
      } else {
        setPosition(null);
        setCopied(false);
      }
    };

    const handleMouseUp = () => {
      setTimeout(handleSelectionChange, 10);
    };

    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('selectionchange', handleSelectionChange);

    return () => {
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('selectionchange', handleSelectionChange);
    };
  }, []);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(selectedText);
      setCopied(true);
      setTimeout(() => {
        setPosition(null);
        setCopied(false);
      }, 1000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  if (!position) return null;

  return (
    <div
      className="fixed z-50 -translate-x-1/2 -translate-y-full"
      style={{ left: position.x, top: position.y }}
    >
      <button
        onClick={handleCopy}
        className="px-3 py-1.5 bg-[var(--foreground)] text-[var(--background)] rounded-lg shadow-lg text-sm flex items-center gap-2 hover:opacity-90 transition-opacity"
      >
        {copied ? (
          <>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
              <polyline points="20 6 9 17 4 12" />
            </svg>
            Copied!
          </>
        ) : (
          <>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
              <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
              <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
            </svg>
            Copy
          </>
        )}
      </button>
    </div>
  );
}

export default TextSelectionMenu;
