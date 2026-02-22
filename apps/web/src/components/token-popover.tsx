'use client';

import * as React from 'react';
import * as Popover from '@radix-ui/react-popover';
import type { SourceToken, TranslatedSpan } from '@open-bible/schemas';

interface TokenPopoverProps {
  token: SourceToken;
  span?: TranslatedSpan;
  children: React.ReactNode;
  onOpenChange?: (open: boolean) => void;
}

export function TokenPopover({ token, span, children, onOpenChange }: TokenPopoverProps) {
  const languageLabel = {
    hebrew: 'Hebrew',
    greek: 'Greek',
    aramaic: 'Aramaic',
  }[token.language];

  const languageClass = {
    hebrew: 'hebrew-text text-source-hebrew',
    greek: 'greek-text text-source-greek',
    aramaic: 'hebrew-text text-source-aramaic',
  }[token.language];

  return (
    <Popover.Root onOpenChange={onOpenChange}>
      <Popover.Trigger asChild>{children}</Popover.Trigger>
      <Popover.Portal>
        <Popover.Content
          className="popover-content bg-[var(--background)] border border-[var(--border)] rounded-lg shadow-lg p-4 z-50 w-80"
          sideOffset={5}
        >
          {/* Original Text */}
          <div className="mb-4">
            <div className="text-xs text-[var(--muted-foreground)] uppercase tracking-wide mb-1">
              {languageLabel}
            </div>
            <div className={`text-2xl ${languageClass}`} lang={token.language === 'hebrew' || token.language === 'aramaic' ? 'he' : 'el'} dir={token.language === 'hebrew' || token.language === 'aramaic' ? 'rtl' : 'ltr'}>{token.text}</div>
            <div className="text-sm text-[var(--muted-foreground)] italic mt-1">
              {token.transliteration}
            </div>
          </div>

          {/* Lemma and Gloss */}
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <div className="text-xs text-[var(--muted-foreground)] uppercase tracking-wide mb-1">
                Lemma
              </div>
              <div className={languageClass}>{token.lemma}</div>
              {token.lemmaTranslit && (
                <div className="text-xs text-[var(--muted-foreground)]">{token.lemmaTranslit}</div>
              )}
            </div>
            <div>
              <div className="text-xs text-[var(--muted-foreground)] uppercase tracking-wide mb-1">
                Gloss
              </div>
              <div className="font-medium">{token.gloss}</div>
              {token.glossExtended && (
                <div className="text-xs text-[var(--muted-foreground)] mt-1">
                  {token.glossExtended}
                </div>
              )}
            </div>
          </div>

          {/* Morphology */}
          {token.morphology && (
            <div className="mb-4">
              <div className="text-xs text-[var(--muted-foreground)] uppercase tracking-wide mb-2">
                Morphology
              </div>
              <div className="flex flex-wrap gap-1">
                <MorphBadge label="POS" value={token.morphology.pos} />
                {token.morphology.person && (
                  <MorphBadge label="Person" value={`${token.morphology.person}p`} />
                )}
                {token.morphology.gender && (
                  <MorphBadge label="Gender" value={token.morphology.gender.slice(0, 1)} />
                )}
                {token.morphology.number && (
                  <MorphBadge label="Number" value={token.morphology.number.slice(0, 1)} />
                )}
                {token.morphology.tense && (
                  <MorphBadge label="Tense" value={token.morphology.tense} />
                )}
                {token.morphology.voice && (
                  <MorphBadge label="Voice" value={token.morphology.voice} />
                )}
                {token.morphology.mood && (
                  <MorphBadge label="Mood" value={token.morphology.mood} />
                )}
                {token.morphology.case && (
                  <MorphBadge label="Case" value={token.morphology.case} />
                )}
                {token.morphology.state && (
                  <MorphBadge label="State" value={token.morphology.state} />
                )}
                {token.morphology.stem && (
                  <MorphBadge label="Stem" value={token.morphology.stem} />
                )}
              </div>
              {token.morphology.rawCode && (
                <div className="text-xs text-[var(--muted-foreground)] mt-2 font-mono">
                  Code: {token.morphology.rawCode}
                </div>
              )}
            </div>
          )}

          {/* Strong's Number */}
          {token.strongs && (
            <div className="mb-4">
              <div className="text-xs text-[var(--muted-foreground)] uppercase tracking-wide mb-1">
                Strong&apos;s
              </div>
              <a
                href={`https://www.blueletterbible.org/lexicon/${token.strongs.toLowerCase()}/kjv/wlc/0-1/`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--accent)] hover:underline font-mono"
              >
                {token.strongs}
              </a>
            </div>
          )}

          {/* Translation Span Info */}
          {span && (
            <div className="border-t border-[var(--border)] pt-3 mt-3">
              <div className="text-xs text-[var(--muted-foreground)] uppercase tracking-wide mb-1">
                Translation
              </div>
              <div className="font-medium">{span.text}</div>
              <div className="flex items-center gap-2 mt-2">
                <ConfidenceBadge level={span.confidence} />
                {span.hasImplied && (
                  <span className="text-xs bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-300 px-2 py-0.5 rounded">
                    Contains implied words
                  </span>
                )}
              </div>
              {span.alternatives && span.alternatives.length > 0 && (
                <div className="mt-2">
                  <div className="text-xs text-[var(--muted-foreground)]">Alternatives:</div>
                  {span.alternatives.map((alt, i) => (
                    <div key={i} className="text-sm mt-1">
                      <span className="font-medium">{alt.text}</span>
                      <span className="text-[var(--muted-foreground)]"> — {alt.reason}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          <Popover.Arrow className="fill-[var(--background)]" />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}

function MorphBadge({ label, value }: { label: string; value: string }) {
  return (
    <span className="morph-badge" title={label}>
      {value}
    </span>
  );
}

function ConfidenceBadge({ level }: { level: string }) {
  const styles: Record<string, { color: string; icon: string }> = {
    high: { color: 'bg-confidence-high/20 text-green-700 dark:text-green-400', icon: '●' },
    medium: { color: 'bg-confidence-medium/20 text-yellow-700 dark:text-yellow-400', icon: '■' },
    low: { color: 'bg-confidence-low/20 text-orange-700 dark:text-orange-400', icon: '◆' },
    uncertain: { color: 'bg-confidence-uncertain/20 text-red-700 dark:text-red-400', icon: '▲' },
  };
  const style = styles[level] || { color: 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300', icon: '○' };

  return (
    <span className={`text-xs px-2 py-0.5 rounded ${style.color}`}>
      <span aria-hidden="true">{style.icon} </span>{level} confidence
    </span>
  );
}
