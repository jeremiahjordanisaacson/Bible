'use client';

import * as React from 'react';
import Link from 'next/link';
import { VerseDisplay } from '@/components/verse-display';
import { VariantDisplay } from '@/components/variant-display';
import { LayerToggle, ViewToggles } from '@/components/layer-toggle';
import { TokenPopover } from '@/components/token-popover';
import { useBibleStore } from '@/store/bible-store';
import { genesis1_1_tokens, genesis1_1_translation, genesis1_1_notes } from '@/data/sample-genesis';
import { john1_18_variants } from '@/data/variants';
import type { SourceToken } from '@open-bible/schemas';

export default function DemoPage() {
  const { selectedLayer, setSelectedLayer, showStudyMode, setShowStudyMode } = useBibleStore();

  // Sample token for standalone popover demo
  const sampleToken: SourceToken = {
    id: 'demo.1',
    language: 'hebrew',
    text: 'בְּרֵאשִׁית',
    transliteration: 'bərēʾšîṯ',
    lemma: 'רֵאשִׁית',
    lemmaTranslit: 'rēʾšîṯ',
    gloss: 'In beginning',
    glossExtended: 'In the beginning, at the start',
    morphology: {
      pos: 'noun',
      gender: 'feminine',
      number: 'singular',
      state: 'absolute',
      rawCode: 'Ncfsa',
    },
    strongs: 'H7225',
    position: 0,
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <header className="mb-8">
        <div className="flex items-center gap-2 text-sm text-[var(--muted-foreground)] mb-2">
          <Link href="/" className="hover:text-[var(--accent)]">
            Home
          </Link>
          <span>/</span>
          <span>Component Demo</span>
        </div>
        <h1 className="text-3xl font-bold">Component Showcase</h1>
        <p className="text-[var(--muted-foreground)] mt-2">
          Interactive demonstration of the UI components used in the Open Bible Translation platform.
        </p>
      </header>

      {/* Section: Token Popover */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 pb-2 border-b border-[var(--border)]">
          Token Popover
        </h2>
        <p className="text-[var(--muted-foreground)] mb-4">
          Hover or click on a word to see detailed linguistic information including morphology,
          Strong&apos;s numbers, and cross-references.
        </p>
        <div className="bg-[var(--muted)] p-6 rounded-lg">
          <div className="flex items-center gap-4">
            <span className="text-[var(--muted-foreground)]">Try it:</span>
            <TokenPopover token={sampleToken}>
              <span className="hebrew-text text-3xl cursor-pointer hover:text-[var(--accent)] transition-colors">
                {sampleToken.text}
              </span>
            </TokenPopover>
            <span className="text-sm text-[var(--muted-foreground)]">
              ({sampleToken.transliteration})
            </span>
          </div>
        </div>
      </section>

      {/* Section: Translation Layers */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 pb-2 border-b border-[var(--border)]">
          Translation Layers
        </h2>
        <p className="text-[var(--muted-foreground)] mb-4">
          Toggle between different translation approaches: literal (word-for-word),
          idiomatic (thought-for-thought), and literary (artistic).
        </p>
        <div className="bg-[var(--muted)] p-6 rounded-lg mb-4">
          <LayerToggle />
        </div>
        <div className="p-4 border border-[var(--border)] rounded-lg">
          <div className="text-sm text-[var(--muted-foreground)] mb-2">
            Current layer: <span className="font-medium">{selectedLayer}</span>
          </div>
          <div className="text-lg">
            {genesis1_1_translation.layers[selectedLayer]?.text || 'Select a layer'}
          </div>
        </div>
      </section>

      {/* Section: View Toggles */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 pb-2 border-b border-[var(--border)]">
          View Toggles
        </h2>
        <p className="text-[var(--muted-foreground)] mb-4">
          Control the display of study mode, notes, and source text.
        </p>
        <div className="bg-[var(--muted)] p-6 rounded-lg">
          <ViewToggles />
        </div>
      </section>

      {/* Section: Full Verse Display */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 pb-2 border-b border-[var(--border)]">
          Verse Display
        </h2>
        <p className="text-[var(--muted-foreground)] mb-4">
          Complete verse rendering with source text, translation, confidence indicators,
          and study notes. Enable &quot;Study Mode&quot; above to see the full experience.
        </p>
        <div className="border border-[var(--border)] rounded-lg p-4">
          <VerseDisplay
            verseRef="Gen.1.1"
            verseNumber={1}
            sourceTokens={genesis1_1_tokens}
            translation={genesis1_1_translation}
            notes={genesis1_1_notes}
          />
        </div>
      </section>

      {/* Section: Textual Variants */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 pb-2 border-b border-[var(--border)]">
          Textual Variants
        </h2>
        <p className="text-[var(--muted-foreground)] mb-4">
          Display manuscript variant readings with supporting witnesses and scholarly analysis.
          This shows the famous John 1:18 variant between &quot;only begotten God&quot; and
          &quot;only begotten Son.&quot;
        </p>
        <div className="border border-[var(--border)] rounded-lg p-4">
          <VariantDisplay variants={john1_18_variants} />
        </div>
      </section>

      {/* Section: Confidence Indicators */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 pb-2 border-b border-[var(--border)]">
          Confidence Indicators
        </h2>
        <p className="text-[var(--muted-foreground)] mb-4">
          Visual indicators for translation confidence levels help users understand
          where there is certainty vs. areas needing review.
        </p>
        <div className="bg-[var(--muted)] p-6 rounded-lg space-y-4">
          <div className="flex items-center gap-3">
            <span className="w-3 h-3 rounded-full bg-confidence-high"></span>
            <span className="font-medium">High Confidence</span>
            <span className="text-[var(--muted-foreground)]">
              - Clear, well-attested translation
            </span>
          </div>
          <div className="flex items-center gap-3">
            <span className="w-3 h-3 rounded-full bg-confidence-medium"></span>
            <span className="font-medium">Medium Confidence</span>
            <span className="text-[var(--muted-foreground)]">
              - Some scholarly debate
            </span>
          </div>
          <div className="flex items-center gap-3">
            <span className="w-3 h-3 rounded-full bg-confidence-low"></span>
            <span className="font-medium">Low Confidence</span>
            <span className="text-[var(--muted-foreground)]">
              - Significant uncertainty
            </span>
          </div>
          <div className="flex items-center gap-3">
            <span className="w-3 h-3 rounded-full bg-confidence-uncertain"></span>
            <span className="font-medium">Uncertain</span>
            <span className="text-[var(--muted-foreground)]">
              - Highly contested or speculative
            </span>
          </div>
        </div>
      </section>

      {/* Section: Keyboard Navigation */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 pb-2 border-b border-[var(--border)]">
          Keyboard Shortcuts
        </h2>
        <p className="text-[var(--muted-foreground)] mb-4">
          Navigate efficiently with keyboard shortcuts.
        </p>
        <div className="bg-[var(--muted)] p-6 rounded-lg">
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center gap-3">
              <kbd className="px-2 py-1 bg-[var(--background)] rounded border border-[var(--border)] font-mono text-sm">
                1
              </kbd>
              <span>Literal layer</span>
            </div>
            <div className="flex items-center gap-3">
              <kbd className="px-2 py-1 bg-[var(--background)] rounded border border-[var(--border)] font-mono text-sm">
                2
              </kbd>
              <span>Idiomatic layer</span>
            </div>
            <div className="flex items-center gap-3">
              <kbd className="px-2 py-1 bg-[var(--background)] rounded border border-[var(--border)] font-mono text-sm">
                3
              </kbd>
              <span>Literary layer</span>
            </div>
            <div className="flex items-center gap-3">
              <kbd className="px-2 py-1 bg-[var(--background)] rounded border border-[var(--border)] font-mono text-sm">
                S
              </kbd>
              <span>Toggle study mode</span>
            </div>
            <div className="flex items-center gap-3">
              <kbd className="px-2 py-1 bg-[var(--background)] rounded border border-[var(--border)] font-mono text-sm">
                N
              </kbd>
              <span>Toggle notes</span>
            </div>
            <div className="flex items-center gap-3">
              <kbd className="px-2 py-1 bg-[var(--background)] rounded border border-[var(--border)] font-mono text-sm">
                ?
              </kbd>
              <span>Show help</span>
            </div>
          </div>
        </div>
      </section>

      {/* Back to reading */}
      <div className="text-center">
        <Link
          href="/read/Gen/1/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--accent)] text-[var(--accent-foreground)] rounded-lg hover:opacity-90 transition-opacity"
        >
          Try the Reading View
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  );
}
