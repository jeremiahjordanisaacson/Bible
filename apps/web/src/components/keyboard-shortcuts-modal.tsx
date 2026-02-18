'use client';

import * as React from 'react';
import * as Dialog from '@radix-ui/react-dialog';

interface ShortcutItem {
  key: string;
  description: string;
}

const shortcuts: ShortcutItem[] = [
  { key: '←', description: 'Previous chapter' },
  { key: '→', description: 'Next chapter' },
  { key: '1', description: 'Switch to Literal translation' },
  { key: '2', description: 'Switch to Idiomatic translation' },
  { key: '3', description: 'Switch to Literary translation' },
  { key: 'S', description: 'Toggle Study Mode' },
  { key: 'N', description: 'Toggle Notes' },
  { key: 'C', description: 'Toggle Compare View' },
  { key: 'V', description: 'Toggle Variants' },
  { key: 'G', description: 'Quick jump to reference' },
  { key: '?', description: 'Show this help' },
];

interface KeyboardShortcutsModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function KeyboardShortcutsModal({ open, onOpenChange }: KeyboardShortcutsModalProps) {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50 z-50" />
        <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[var(--background)] border border-[var(--border)] rounded-lg shadow-lg p-6 w-[400px] max-w-[90vw] z-50">
          <Dialog.Title className="text-lg font-semibold mb-4">
            Keyboard Shortcuts
          </Dialog.Title>

          <div className="space-y-2">
            {shortcuts.map((shortcut) => (
              <div
                key={shortcut.key}
                className="flex items-center justify-between py-2 border-b border-[var(--border)] last:border-0"
              >
                <span className="text-[var(--muted-foreground)]">
                  {shortcut.description}
                </span>
                <kbd className="px-2 py-1 bg-[var(--muted)] border border-[var(--border)] rounded text-sm font-mono">
                  {shortcut.key}
                </kbd>
              </div>
            ))}
          </div>

          <div className="mt-6 pt-4 border-t border-[var(--border)] text-sm text-[var(--muted-foreground)]">
            Shortcuts are disabled when typing in input fields.
          </div>

          <Dialog.Close asChild>
            <button
              className="absolute top-4 right-4 text-[var(--muted-foreground)] hover:text-[var(--foreground)]"
              aria-label="Close"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-5 h-5"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

export default KeyboardShortcutsModal;
