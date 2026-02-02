'use client';

import * as React from 'react';
import * as Popover from '@radix-ui/react-popover';
import type { VerseVariants, VariantUnit, VariantReading } from '@open-bible/schemas';

interface VariantDisplayProps {
  variants: VerseVariants;
  className?: string;
}

/**
 * Component for displaying textual variants for a verse
 */
export function VariantDisplay({ variants, className = '' }: VariantDisplayProps) {
  if (!variants || variants.variantCount === 0) return null;

  return (
    <div className={`variant-display mt-4 ${className}`}>
      <div className="text-xs uppercase tracking-wide text-[var(--muted-foreground)] mb-2 flex items-center gap-2">
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
        Textual Variants ({variants.variantCount})
      </div>

      <div className="space-y-4">
        {variants.variants.map((variant) => (
          <VariantUnitDisplay key={variant.id} variant={variant} />
        ))}
      </div>
    </div>
  );
}

interface VariantUnitDisplayProps {
  variant: VariantUnit;
}

function VariantUnitDisplay({ variant }: VariantUnitDisplayProps) {
  const [expanded, setExpanded] = React.useState(false);

  const significanceColors: Record<string, string> = {
    major: 'bg-red-100 text-red-800 border-red-300',
    significant: 'bg-amber-100 text-amber-800 border-amber-300',
    moderate: 'bg-yellow-100 text-yellow-800 border-yellow-300',
    minor: 'bg-blue-100 text-blue-800 border-blue-300',
    orthographic: 'bg-gray-100 text-gray-600 border-gray-300',
  };

  const categoryIcons = {
    substitution: '↔',
    addition: '+',
    omission: '−',
    transposition: '⇄',
    spelling: 'Aa',
  };

  return (
    <div className={`variant-unit border rounded-lg overflow-hidden ${
      variant.significance === 'major' ? 'border-red-200' : 'border-[var(--border)]'
    }`}>
      {/* Header */}
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full px-4 py-3 flex items-center justify-between bg-[var(--muted)] hover:bg-[var(--muted)]/80 transition-colors"
      >
        <div className="flex items-center gap-3">
          <span className="text-lg font-mono">{categoryIcons[variant.category]}</span>
          <div className="text-left">
            <span className="font-medium">
              {variant.readings[0]?.text}
            </span>
            {variant.readings.length > 1 && (
              <span className="text-[var(--muted-foreground)]">
                {' '}vs{' '}
                <span className="font-medium">{variant.readings[1]?.text}</span>
              </span>
            )}
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className={`text-xs px-2 py-0.5 rounded border ${significanceColors[variant.significance]}`}>
            {variant.significance}
          </span>
          <svg
            className={`w-4 h-4 transition-transform ${expanded ? 'rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </button>

      {/* Expanded content */}
      {expanded && (
        <div className="p-4 space-y-4">
          {/* Impact explanation */}
          {variant.impactExplanation && (
            <div className="text-sm text-[var(--muted-foreground)] italic">
              {variant.impactExplanation}
            </div>
          )}

          {/* Readings */}
          <div className="space-y-3">
            {variant.readings.map((reading, index) => (
              <ReadingDisplay key={reading.id} reading={reading} index={index} />
            ))}
          </div>

          {/* References */}
          {variant.references && variant.references.length > 0 && (
            <div className="text-xs text-[var(--muted-foreground)] border-t pt-3 mt-3">
              <span className="font-medium">References: </span>
              {variant.references.join('; ')}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

interface ReadingDisplayProps {
  reading: VariantReading;
  index: number;
}

function ReadingDisplay({ reading, index }: ReadingDisplayProps) {
  const isOmission = reading.text === '(omitted)';

  return (
    <div className={`reading p-3 rounded ${
      reading.isPrimary
        ? 'bg-emerald-50 border border-emerald-200'
        : 'bg-[var(--card)] border border-[var(--border)]'
    }`}>
      <div className="flex items-start justify-between mb-2">
        <div>
          {/* Greek/Hebrew text */}
          <div className={`text-lg ${isOmission ? 'italic text-[var(--muted-foreground)]' : 'greek-text'}`}>
            {reading.text}
          </div>
          {/* Transliteration */}
          {reading.transliteration && (
            <div className="text-sm text-[var(--muted-foreground)]">
              {reading.transliteration}
            </div>
          )}
          {/* Translation */}
          {reading.translation && (
            <div className="text-sm font-medium mt-1">
              &ldquo;{reading.translation}&rdquo;
            </div>
          )}
        </div>
        {reading.isPrimary && (
          <span className="text-xs bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded">
            Primary
          </span>
        )}
      </div>

      {/* Manuscript witnesses */}
      <div className="flex flex-wrap gap-1 mt-2">
        {reading.witnesses.map((witness) => (
          <WitnessChip key={witness} witness={witness} />
        ))}
      </div>

      {/* Traditions */}
      {reading.traditions && reading.traditions.length > 0 && (
        <div className="text-xs mt-2 text-[var(--muted-foreground)]">
          <span className="font-medium">Tradition: </span>
          {reading.traditions.join(', ')}
        </div>
      )}

      {/* Note */}
      {reading.note && (
        <div className="text-xs mt-2 text-[var(--muted-foreground)] italic">
          {reading.note}
        </div>
      )}
    </div>
  );
}

interface WitnessChipProps {
  witness: string;
}

function WitnessChip({ witness }: WitnessChipProps) {
  // Map common manuscript sigla to descriptions
  const witnessDescriptions: Record<string, string> = {
    'P66': 'Papyrus 66 (c. 200 CE) - Early John manuscript',
    'P75': 'Papyrus 75 (c. 225 CE) - Early Luke/John',
    'P74': 'Papyrus 74 (7th c.) - Acts/Catholic Epistles',
    '01': 'Sinaiticus (4th c.) - Complete NT',
    '03': 'Vaticanus (4th c.) - Almost complete Bible',
    'B': 'Vaticanus (4th c.) - Almost complete Bible',
    'A': 'Alexandrinus (5th c.) - Almost complete Bible',
    'C': 'Ephraemi Rescriptus (5th c.) - Palimpsest',
    'C*': 'Ephraemi Rescriptus - Original hand',
    'C\u00B3': 'Ephraemi Rescriptus - Third corrector',
    'D': 'Bezae (5th c.) - Gospels/Acts bilingual',
    'L': 'Regius (8th c.) - Gospels',
    'W': 'Washingtonianus (5th c.) - Gospels',
    'Θ': 'Koridethi (9th c.) - Gospels',
    'Ψ': 'Athous Lavrensis (9th c.) - Gospels+Epistles',
    'f¹': 'Family 1 - Group of minuscules',
    'f¹³': 'Family 13 (Ferrar group) - Group of minuscules',
    '33': 'Minuscule 33 - "Queen of cursives"',
    '61': 'Minuscule 61 - Contains Comma Johanneum',
    '629': 'Minuscule 629',
    '1555': 'Minuscule 1555',
    '28': 'Minuscule 28',
    'Byz': 'Byzantine text-type (majority text)',
    'TR': 'Textus Receptus',
    '048': 'Uncial 048',
  };

  // Handle special characters in witness names
  const normalizedWitness = witness.replace('א', '01').replace('*', '');

  // Hebrew letter Aleph for Sinaiticus
  const displayWitness = witness === '01' ? 'א' : witness;

  const description = witnessDescriptions[witness] ||
                     witnessDescriptions[normalizedWitness] ||
                     `Manuscript ${witness}`;

  return (
    <Popover.Root>
      <Popover.Trigger asChild>
        <button className="px-2 py-0.5 text-xs bg-[var(--muted)] rounded hover:bg-[var(--muted)]/80 transition-colors font-mono">
          {displayWitness}
        </button>
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content
          className="bg-[var(--popover)] text-[var(--popover-foreground)] rounded-lg shadow-lg p-3 max-w-xs z-50 border border-[var(--border)]"
          sideOffset={5}
        >
          <div className="text-sm">
            <div className="font-semibold font-mono text-lg">{displayWitness}</div>
            <div className="text-[var(--muted-foreground)] mt-1">{description}</div>
          </div>
          <Popover.Arrow className="fill-[var(--popover)]" />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}

export default VariantDisplay;
