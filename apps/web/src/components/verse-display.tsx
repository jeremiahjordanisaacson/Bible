'use client';

import * as React from 'react';
import { TokenPopover } from './token-popover';
import { useBibleStore } from '@/store/bible-store';
import type { SourceToken, VerseTranslation, StudyNote, TranslatedSpan, VerseVariants } from '@open-bible/schemas';
import { VariantDisplay } from './variant-display';

interface VerseDisplayProps {
  verseRef: string;
  verseNumber: number;
  sourceTokens: SourceToken[];
  translation: VerseTranslation;
  notes?: StudyNote[];
  variants?: VerseVariants | null;
  showSource?: boolean;
}

export function VerseDisplay({
  verseRef,
  verseNumber,
  sourceTokens,
  translation,
  notes = [],
  variants = null,
  showSource = false,
}: VerseDisplayProps) {
  const { selectedLayer, showStudyMode, showNotes, highlightedTokenId, setHighlightedToken } =
    useBibleStore();

  const currentLayer = translation.layers[selectedLayer] || translation.layers.idiomatic;

  // Build a map from token IDs to spans for quick lookup
  const tokenToSpanMap = React.useMemo(() => {
    const map = new Map<string, TranslatedSpan>();
    if (currentLayer) {
      for (const span of currentLayer.spans) {
        for (const tokenId of span.sourceTokenIds) {
          map.set(tokenId, span);
        }
      }
    }
    return map;
  }, [currentLayer]);

  // Find token by ID
  const getToken = (tokenId: string) => sourceTokens.find((t) => t.id === tokenId);

  // Check if token is highlighted
  const isTokenHighlighted = (tokenId: string) => {
    if (!highlightedTokenId) return false;
    // In study mode, highlight all tokens in the same span
    if (showStudyMode) {
      const highlightedSpan = tokenToSpanMap.get(highlightedTokenId);
      const currentSpan = tokenToSpanMap.get(tokenId);
      return highlightedSpan && currentSpan && highlightedSpan.id === currentSpan.id;
    }
    return tokenId === highlightedTokenId;
  };

  // Render translation spans with hover functionality
  const renderTranslation = () => {
    if (!currentLayer) return null;

    return (
      <div className="translation-text leading-relaxed">
        {currentLayer.spans.map((span) => {
          const tokens = span.sourceTokenIds.map(getToken).filter(Boolean) as SourceToken[];
          const primaryToken = tokens[0];
          const isHighlighted = span.sourceTokenIds.some(isTokenHighlighted);

          if (!primaryToken) {
            return (
              <span key={span.id} className="mr-1">
                {span.text}
              </span>
            );
          }

          return (
            <TokenPopover
              key={span.id}
              token={primaryToken}
              span={span}
              onOpenChange={(open) => {
                if (open) {
                  setHighlightedToken(primaryToken.id);
                } else {
                  setHighlightedToken(null);
                }
              }}
            >
              <span
                className={`token cursor-pointer ${isHighlighted ? 'highlighted' : ''}`}
                onMouseEnter={() => setHighlightedToken(primaryToken.id)}
                onMouseLeave={() => setHighlightedToken(null)}
              >
                {span.text}
              </span>
            </TokenPopover>
          );
        })}
      </div>
    );
  };

  // Render source tokens (Hebrew/Greek)
  const renderSource = () => {
    const isRTL = sourceTokens[0]?.language === 'hebrew' || sourceTokens[0]?.language === 'aramaic';
    const textClass = isRTL ? 'hebrew-text' : 'greek-text';

    return (
      <div className={`source-text ${textClass} ${isRTL ? 'text-right' : ''} leading-loose`}>
        {sourceTokens.map((token) => {
          const isHighlighted = isTokenHighlighted(token.id);

          return (
            <TokenPopover
              key={token.id}
              token={token}
              span={tokenToSpanMap.get(token.id)}
              onOpenChange={(open) => {
                if (open) {
                  setHighlightedToken(token.id);
                } else {
                  setHighlightedToken(null);
                }
              }}
            >
              <span
                className={`token cursor-pointer inline-block mx-1 ${isHighlighted ? 'highlighted' : ''}`}
                onMouseEnter={() => setHighlightedToken(token.id)}
                onMouseLeave={() => setHighlightedToken(null)}
              >
                {token.text}
              </span>
            </TokenPopover>
          );
        })}
      </div>
    );
  };

  // Render study notes
  const renderNotes = () => {
    if (!showNotes || notes.length === 0) return null;

    return (
      <div className="notes-section mt-4 space-y-3">
        {notes.map((note) => (
          <div
            key={note.id}
            className={`note p-3 bg-[var(--muted)] rounded-lg border-l-4 confidence-${note.confidence}`}
          >
            <div className="flex items-start justify-between">
              <div>
                <span className="text-xs uppercase tracking-wide text-[var(--muted-foreground)]">
                  {note.category.replace('-', ' ')}
                </span>
                <h4 className="font-semibold mt-1">{note.title}</h4>
              </div>
              {note.isContested && (
                <span className="text-xs bg-amber-100 text-amber-800 px-2 py-0.5 rounded">
                  Contested
                </span>
              )}
            </div>
            <div className="mt-2 text-sm prose prose-sm max-w-none">
              {note.content.split('\n\n').map((paragraph, i) => (
                <p key={i} className="mb-2 whitespace-pre-wrap">
                  {paragraph}
                </p>
              ))}
            </div>
            {note.positions && note.positions.length > 0 && (
              <div className="mt-3 border-t border-[var(--border)] pt-3">
                <div className="text-xs uppercase tracking-wide text-[var(--muted-foreground)] mb-2">
                  Scholarly Positions
                </div>
                <div className="space-y-2">
                  {note.positions.map((pos, i) => (
                    <div key={i} className="text-sm">
                      <span className="font-medium">{pos.name}:</span>{' '}
                      <span className="text-[var(--muted-foreground)]">{pos.description}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    );
  };

  return (
    <article
      id={verseRef}
      className={`verse-container py-4 ${showStudyMode ? 'study-mode' : ''}`}
    >
      <div className="flex gap-4">
        {/* Verse number */}
        <div className="verse-ref font-bold text-[var(--muted-foreground)] select-none w-12 text-right flex-shrink-0">
          {verseNumber}
        </div>

        {/* Content */}
        <div className="flex-1">
          {/* Source text (if enabled or in study mode) */}
          {(showSource || showStudyMode) && (
            <div className="source-section mb-3 pb-3 border-b border-[var(--border)]">
              {renderSource()}
            </div>
          )}

          {/* Translation */}
          {renderTranslation()}

          {/* Confidence indicator */}
          {currentLayer && (
            <div className="mt-2 flex items-center gap-2 text-xs text-[var(--muted-foreground)]">
              <span
                className={`w-2 h-2 rounded-full ${
                  {
                    high: 'bg-confidence-high',
                    medium: 'bg-confidence-medium',
                    low: 'bg-confidence-low',
                    uncertain: 'bg-confidence-uncertain',
                  }[currentLayer.overallConfidence]
                }`}
              />
              <span>{currentLayer.overallConfidence} confidence</span>
              {!currentLayer.humanReviewed && (
                <span className="text-amber-600">• AI draft</span>
              )}
            </div>
          )}

          {/* Notes */}
          {renderNotes()}

          {/* Variants */}
          {showStudyMode && variants && variants.variantCount > 0 && (
            <VariantDisplay variants={variants} />
          )}
        </div>
      </div>
    </article>
  );
}
