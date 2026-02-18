'use client';

import Link from 'next/link';
import * as React from 'react';

const LOCAL_STORAGE_KEYS = [
  { key: 'theme', purpose: 'Your light/dark mode preference' },
  { key: 'reading-theme', purpose: 'Reading theme (default, sepia, or night)' },
  { key: 'bible-font-size', purpose: 'Your preferred font size' },
  { key: 'line-spacing', purpose: 'Your preferred line spacing' },
  { key: 'bible-show-verse-numbers', purpose: 'Whether verse numbers are shown' },
  { key: 'reading-history', purpose: 'Recently read chapters (for "Continue Reading")' },
  { key: 'bookmarks', purpose: 'Your bookmarked verses' },
  { key: 'verse-notes', purpose: 'Personal notes you add to verses' },
];

export default function PrivacyPage() {
  const [cleared, setCleared] = React.useState(false);

  const clearAllData = () => {
    LOCAL_STORAGE_KEYS.forEach(({ key }) => localStorage.removeItem(key));
    setCleared(true);
    setTimeout(() => setCleared(false), 3000);
  };

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Overview</h2>
        <p className="text-[var(--muted-foreground)] leading-relaxed mb-4">
          Open Bible Translation is committed to your privacy. This is a static website
          hosted on GitHub Pages. We do not collect personal information, use cookies,
          or run analytics or tracking scripts.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Data We Store</h2>
        <p className="text-[var(--muted-foreground)] mb-4">
          We use your browser&apos;s <strong>localStorage</strong> (not cookies) to save your
          preferences locally on your device. This data never leaves your browser and is
          never sent to any server.
        </p>
        <div className="border border-[var(--border)] rounded-lg overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-[var(--muted)]">
                <th className="text-left px-4 py-3 font-semibold">Data</th>
                <th className="text-left px-4 py-3 font-semibold">Purpose</th>
              </tr>
            </thead>
            <tbody>
              {LOCAL_STORAGE_KEYS.map(({ key, purpose }) => (
                <tr key={key} className="border-t border-[var(--border)]">
                  <td className="px-4 py-3 font-mono text-xs text-[var(--muted-foreground)]">{key}</td>
                  <td className="px-4 py-3 text-[var(--foreground)]">{purpose}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">External Services</h2>
        <p className="text-[var(--muted-foreground)] mb-4">
          When viewing chapters without rich morphological data, the app fetches Bible text
          from the <a href="https://bible-api.com" target="_blank" rel="noopener noreferrer" className="text-[var(--accent)] hover:underline">bible-api.com</a> public
          API. This request includes the book and chapter you are reading but no personal
          information. We do not control bible-api.com&apos;s privacy practices.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">No Cookies or Tracking</h2>
        <ul className="list-disc list-inside space-y-2 text-[var(--muted-foreground)]">
          <li>No cookies are set by this website</li>
          <li>No analytics or tracking scripts (no Google Analytics, no Plausible, etc.)</li>
          <li>No advertising or remarketing</li>
          <li>No third-party social media widgets that track you</li>
          <li>No server-side logging of your visits (GitHub Pages serves static files)</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Your Rights</h2>
        <p className="text-[var(--muted-foreground)] mb-4">
          Since all data is stored locally in your browser, you have full control:
        </p>
        <ul className="list-disc list-inside space-y-2 text-[var(--muted-foreground)] mb-6">
          <li>View your stored data in your browser&apos;s Developer Tools (Application → Local Storage)</li>
          <li>Delete individual items or all stored data at any time</li>
          <li>Use the button below to clear all Open Bible data from your browser</li>
        </ul>
        <button
          onClick={clearAllData}
          className="px-6 py-3 border border-red-300 dark:border-red-800 text-red-700 dark:text-red-400 rounded-lg font-medium hover:bg-red-50 dark:hover:bg-red-900/20 transition"
        >
          {cleared ? '✓ All data cleared' : 'Clear All Stored Data'}
        </button>
        {cleared && (
          <p className="mt-2 text-sm text-green-600 dark:text-green-400" aria-live="polite">
            All locally stored preferences and data have been removed.
          </p>
        )}
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Contact</h2>
        <p className="text-[var(--muted-foreground)]">
          If you have questions about this privacy policy, please{' '}
          <a
            href="https://github.com/jeremiahjordanisaacson/Bible/issues"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--accent)] hover:underline"
          >
            open an issue on GitHub
          </a>.
        </p>
      </section>

      <div className="text-sm text-[var(--muted-foreground)] border-t border-[var(--border)] pt-6">
        Last updated: February 2026
      </div>
    </div>
  );
}
