'use client';

import * as React from 'react';
import * as Toggle from '@radix-ui/react-toggle';
import { useBibleStore, type TranslationLayerType } from '@/store/bible-store';

const LAYER_INFO: Record<TranslationLayerType, { label: string; description: string; color: string }> = {
  literal: {
    label: 'Literal',
    description: 'Word-for-word translation, preserving Hebrew/Greek word order where possible',
    color: 'bg-layer-literal',
  },
  idiomatic: {
    label: 'Idiomatic',
    description: 'Meaning-based translation in natural English',
    color: 'bg-layer-idiomatic',
  },
  literary: {
    label: 'Literary',
    description: 'Poetic/literary rendering emphasizing style and rhythm',
    color: 'bg-layer-literary',
  },
};

export function LayerToggle() {
  const { selectedLayer, setSelectedLayer } = useBibleStore();

  return (
    <div className="flex flex-col gap-2">
      <div className="text-xs uppercase tracking-wide text-[var(--muted-foreground)]">
        Translation Layer
      </div>
      <div className="flex gap-1">
        {(Object.keys(LAYER_INFO) as TranslationLayerType[]).map((layer) => {
          const info = LAYER_INFO[layer];
          const isSelected = selectedLayer === layer;

          return (
            <button
              key={layer}
              onClick={() => setSelectedLayer(layer)}
              className={`
                px-3 py-1.5 text-sm rounded-md transition-all
                ${isSelected
                  ? `${info.color} text-white`
                  : 'bg-[var(--muted)] text-[var(--foreground)] hover:bg-[var(--border)]'
                }
              `}
              title={info.description}
            >
              {info.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export function ViewToggles() {
  const { showStudyMode, showNotes, showVariants, toggleStudyMode, toggleNotes, toggleVariants } =
    useBibleStore();

  return (
    <div className="flex flex-col gap-2">
      <div className="text-xs uppercase tracking-wide text-[var(--muted-foreground)]">
        View Options
      </div>
      <div className="flex gap-2">
        <Toggle.Root
          pressed={showStudyMode}
          onPressedChange={toggleStudyMode}
          className={`
            layer-toggle px-3 py-1.5 text-sm rounded-md
            ${showStudyMode
              ? 'bg-[var(--accent)] text-[var(--accent-foreground)]'
              : 'bg-[var(--muted)] text-[var(--foreground)]'
            }
          `}
          aria-label="Toggle study mode"
        >
          Study Mode
        </Toggle.Root>
        <Toggle.Root
          pressed={showNotes}
          onPressedChange={toggleNotes}
          className={`
            layer-toggle px-3 py-1.5 text-sm rounded-md
            ${showNotes
              ? 'bg-[var(--accent)] text-[var(--accent-foreground)]'
              : 'bg-[var(--muted)] text-[var(--foreground)]'
            }
          `}
          aria-label="Toggle notes"
        >
          Notes
        </Toggle.Root>
        <Toggle.Root
          pressed={showVariants}
          onPressedChange={toggleVariants}
          className={`
            layer-toggle px-3 py-1.5 text-sm rounded-md
            ${showVariants
              ? 'bg-[var(--accent)] text-[var(--accent-foreground)]'
              : 'bg-[var(--muted)] text-[var(--foreground)]'
            }
          `}
          aria-label="Toggle variants"
        >
          Variants
        </Toggle.Root>
      </div>
    </div>
  );
}
