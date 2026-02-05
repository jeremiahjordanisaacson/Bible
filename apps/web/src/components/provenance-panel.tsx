'use client';

import * as React from 'react';
import type { VerseTranslation } from '@open-bible/schemas';

interface ProvenancePanelProps {
  translation: VerseTranslation;
  verseRef: string;
}

export function ProvenancePanel({ translation, verseRef }: ProvenancePanelProps) {
  const [expanded, setExpanded] = React.useState(false);
  const meta = translation.metadata;

  return (
    <div className="rounded border border-[var(--border)] bg-[var(--muted)] text-xs mb-4">
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full flex items-center justify-between px-3 py-2 hover:bg-[var(--accent)]/10 transition-colors"
        aria-expanded={expanded}
      >
        <span className="flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5">
            <circle cx="12" cy="12" r="10" />
            <path d="M12 16v-4" />
            <path d="M12 8h.01" />
          </svg>
          <span className="font-medium">Data Provenance</span>
        </span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className={`w-3.5 h-3.5 transition-transform ${expanded ? 'rotate-180' : ''}`}
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>

      {expanded && (
        <div className="px-3 pb-3 space-y-2 border-t border-[var(--border)] pt-2">
          <div className="grid grid-cols-2 gap-2">
            <div>
              <span className="text-[var(--muted-foreground)]">Verse Reference</span>
              <div className="font-mono">{verseRef}</div>
            </div>
            <div>
              <span className="text-[var(--muted-foreground)]">Pipeline Version</span>
              <div className="font-mono">{meta.pipelineVersion || 'unknown'}</div>
            </div>
            <div>
              <span className="text-[var(--muted-foreground)]">Engine</span>
              <div className="font-mono">{meta.engineId || 'unknown'} v{meta.engineVersion || '?'}</div>
            </div>
            <div>
              <span className="text-[var(--muted-foreground)]">Source Data</span>
              <div className="font-mono">v{meta.sourceDataVersion || '?'}</div>
            </div>
            <div>
              <span className="text-[var(--muted-foreground)]">Generated</span>
              <div className="font-mono">
                {meta.generatedAt ? new Date(meta.generatedAt).toLocaleDateString() : 'unknown'}
              </div>
            </div>
            <div>
              <span className="text-[var(--muted-foreground)]">Profile</span>
              <div className="font-mono">{translation.profile}</div>
            </div>
          </div>

          <div className="pt-2 border-t border-[var(--border)]">
            <div className="flex items-center gap-1 text-[var(--muted-foreground)]">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3 h-3">
                <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                <line x1="12" y1="9" x2="12" y2="13" />
                <line x1="12" y1="17" x2="12.01" y2="17" />
              </svg>
              This translation is an AI-generated draft. It has not been fully reviewed by human scholars.
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
