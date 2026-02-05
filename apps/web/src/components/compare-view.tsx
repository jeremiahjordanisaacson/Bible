'use client';

import * as React from 'react';
import type { VerseTranslation, SourceToken } from '@open-bible/schemas';

interface CompareViewProps {
  verseRef: string;
  verseNumber: number;
  translation: VerseTranslation;
  sourceTokens: SourceToken[];
}

const layerLabels: Record<string, { label: string; desc: string }> = {
  literal: { label: 'Literal', desc: 'Word-for-word from the original' },
  idiomatic: { label: 'Idiomatic', desc: 'Natural, meaning-based' },
  literary: { label: 'Literary', desc: 'Poetic, literary rendering' },
};

export function CompareView({ verseRef, verseNumber, translation, sourceTokens }: CompareViewProps) {
  const layers = translation.layers;
  const availableLayers = Object.entries(layers).filter(([, layer]) => layer != null);

  if (availableLayers.length === 0) return null;

  return (
    <div className="mb-6 rounded-lg border border-[var(--border)] overflow-hidden" id={`v${verseNumber}`}>
      {/* Verse header */}
      <div className="bg-[var(--muted)] px-4 py-2 flex items-center justify-between border-b border-[var(--border)]">
        <span className="font-semibold text-sm">{verseRef.replace(/\./g, ' ').replace(/(\d+)$/, ':$1')}</span>
        <span className="text-xs text-[var(--muted-foreground)]">
          {availableLayers.length} translation layer{availableLayers.length > 1 ? 's' : ''}
        </span>
      </div>

      {/* Source text */}
      <div className="px-4 py-3 bg-amber-50/50 dark:bg-amber-900/10 border-b border-[var(--border)]">
        <div className="text-xs font-medium text-[var(--muted-foreground)] mb-1">Original</div>
        <div className="flex flex-wrap gap-1" dir={sourceTokens[0]?.language === 'hebrew' ? 'rtl' : 'ltr'}>
          {sourceTokens.map((token) => (
            <span
              key={token.id}
              className="inline-block px-1 py-0.5 text-lg font-serif"
              title={`${token.transliteration} — ${token.gloss}`}
            >
              {token.text}
            </span>
          ))}
        </div>
      </div>

      {/* Translation layers side by side */}
      <div className={`grid grid-cols-1 ${availableLayers.length >= 2 ? 'md:grid-cols-2' : ''} ${availableLayers.length >= 3 ? 'lg:grid-cols-3' : ''}`}>
        {availableLayers.map(([key, layer]) => {
          const info = layerLabels[key] || { label: key, desc: '' };
          const confidence = layer!.overallConfidence;
          return (
            <div key={key} className="p-4 border-b md:border-b-0 md:border-r last:border-r-0 border-[var(--border)]">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-bold uppercase tracking-wide text-[var(--accent)]">
                  {info.label}
                </span>
                {confidence && (
                  <span className={`text-xs px-1.5 py-0.5 rounded ${
                    confidence === 'high' ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300' :
                    confidence === 'medium' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300' :
                    'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300'
                  }`}>
                    {confidence}
                  </span>
                )}
              </div>
              <p className="text-sm leading-relaxed">{layer!.text}</p>
              <div className="text-xs text-[var(--muted-foreground)] mt-2">{info.desc}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
