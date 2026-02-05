'use client';

import * as React from 'react';
import Link from 'next/link';
import { getCrossReferences, type CrossReference } from '@/data/cross-references';

interface CrossReferencesProps {
  verseRef: string;
}

const relationshipColors: Record<string, string> = {
  parallel: 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300',
  allusion: 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300',
  quotation: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300',
  thematic: 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300',
  fulfillment: 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300',
};

function formatRef(ref: string): string {
  return ref.replace(/\./g, ' ').replace(/(\d+)$/, ':$1').replace(/-/, '-');
}

function refToPath(ref: string): string {
  const parts = ref.split('.');
  if (parts.length >= 2) {
    return `/read/${parts[0]}/${parts[1]}/`;
  }
  return '#';
}

export function CrossReferences({ verseRef }: CrossReferencesProps) {
  const refs = getCrossReferences(verseRef);
  const [expanded, setExpanded] = React.useState(false);

  if (refs.length === 0) return null;

  return (
    <div className="mt-1 mb-2">
      <button
        onClick={() => setExpanded(!expanded)}
        className="text-xs text-[var(--accent)] hover:underline flex items-center gap-1"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3 h-3">
          <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
          <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
        </svg>
        {refs.length} cross-reference{refs.length > 1 ? 's' : ''}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className={`w-3 h-3 transition-transform ${expanded ? 'rotate-180' : ''}`}
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>

      {expanded && (
        <div className="mt-2 space-y-2 pl-4 border-l-2 border-[var(--accent)]/30">
          {refs.map((ref, i) => (
            <div key={i} className="text-xs">
              <div className="flex items-center gap-2 mb-0.5">
                <Link
                  href={refToPath(ref.targetRef)}
                  className="font-medium text-[var(--accent)] hover:underline"
                >
                  {formatRef(ref.targetRef)}
                </Link>
                <span className={`px-1.5 py-0.5 rounded text-[10px] font-medium ${relationshipColors[ref.relationship] || ''}`}>
                  {ref.relationship}
                </span>
              </div>
              <p className="text-[var(--muted-foreground)] italic">&ldquo;{ref.targetText}&rdquo;</p>
              {ref.note && (
                <p className="text-[var(--muted-foreground)] mt-0.5">{ref.note}</p>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
