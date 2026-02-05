'use client';

import * as React from 'react';

interface ExportButtonProps {
  bookName: string;
  chapter: number;
  getContent: () => string;
  getJsonData?: () => unknown;
}

function download(content: string, filename: string, mimeType: string) {
  const blob = new Blob([content], { type: `${mimeType};charset=utf-8` });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

export function ExportButton({ bookName, chapter, getContent, getJsonData }: ExportButtonProps) {
  const [open, setOpen] = React.useState(false);
  const ref = React.useRef<HTMLDivElement>(null);

  // Close on outside click
  React.useEffect(() => {
    if (!open) return;
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [open]);

  const handleTextExport = () => {
    download(getContent(), `${bookName}-Chapter-${chapter}.txt`, 'text/plain');
    setOpen(false);
  };

  const handleJsonExport = () => {
    if (getJsonData) {
      const data = getJsonData();
      download(JSON.stringify(data, null, 2), `${bookName}-Chapter-${chapter}.json`, 'application/json');
    } else {
      // Fallback: wrap text in a simple JSON structure
      download(JSON.stringify({ book: bookName, chapter, text: getContent() }, null, 2), `${bookName}-Chapter-${chapter}.json`, 'application/json');
    }
    setOpen(false);
  };

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen(!open)}
        className="p-2 rounded hover:bg-[var(--muted)] text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors no-print"
        title="Export chapter"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-4 h-4"
        >
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
          <polyline points="7 10 12 15 17 10" />
          <line x1="12" x2="12" y1="15" y2="3" />
        </svg>
      </button>

      {open && (
        <div className="absolute right-0 top-full mt-1 bg-[var(--background)] border border-[var(--border)] rounded-lg shadow-lg z-50 min-w-[160px]">
          <button
            onClick={handleTextExport}
            className="w-full px-3 py-2 text-left text-sm hover:bg-[var(--muted)] transition-colors rounded-t-lg"
          >
            Export as Text
          </button>
          <button
            onClick={handleJsonExport}
            className="w-full px-3 py-2 text-left text-sm hover:bg-[var(--muted)] transition-colors rounded-b-lg border-t border-[var(--border)]"
          >
            Export as JSON
          </button>
        </div>
      )}
    </div>
  );
}

export default ExportButton;
