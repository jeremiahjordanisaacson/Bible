'use client';

import Link from 'next/link';
import { ReadingHistoryList } from '@/components/reading-history';
import { RandomChapterButton } from '@/components/random-chapter-button';

export default function HomePage() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <section className="text-center max-w-4xl mx-auto mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Open Bible Translation
        </h1>
        <p className="text-xl text-[var(--muted-foreground)] mb-8 max-w-2xl mx-auto">
          An open source, AI-assisted Bible translation platform. Every word traceable
          to the original Hebrew, Aramaic, and Greek sources.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Link
            href="/read/Gen/1/"
            className="px-6 py-3 bg-[var(--accent)] text-[var(--accent-foreground)] rounded-lg font-medium hover:opacity-90 transition"
          >
            Start Reading
          </Link>
          <Link
            href="/demo/"
            className="px-6 py-3 border border-[var(--border)] rounded-lg font-medium hover:bg-[var(--muted)] transition"
          >
            Component Demo
          </Link>
          <Link
            href="/about/"
            className="px-6 py-3 border border-[var(--border)] rounded-lg font-medium hover:bg-[var(--muted)] transition"
          >
            Learn More
          </Link>
          <RandomChapterButton />
        </div>
      </section>

      {/* Disclaimer Banner */}
      <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg p-4 mb-12 max-w-4xl mx-auto">
        <div className="flex gap-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-5 h-5 text-amber-600 dark:text-amber-400 flex-shrink-0 mt-0.5"
          >
            <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
            <path d="M12 9v4" />
            <path d="M12 17h.01" />
          </svg>
          <div className="text-sm text-amber-800 dark:text-amber-200">
            <strong>Draft Translations:</strong> All translations are AI-assisted drafts
            intended for human review. They are not authoritative texts. Always verify
            important readings against the original sources and established translations.
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        <FeatureCard
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" />
            </svg>
          }
          title="Source Transparency"
          description="Hover over any word to see the original Hebrew, Greek, or Aramaic text, transliteration, morphology, and lexicon references."
        />
        <FeatureCard
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
              <path d="M16 3h5v5" />
              <path d="M8 3H3v5" />
              <path d="M12 22v-8.3a4 4 0 0 0-1.172-2.872L3 3" />
              <path d="m15 9 6-6" />
            </svg>
          }
          title="Multiple Layers"
          description="Toggle between literal, idiomatic, and literary translations. See how meaning is conveyed differently in each approach."
        />
        <FeatureCard
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
              <path d="M12 20h9" />
              <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z" />
            </svg>
          }
          title="Study Notes"
          description="Access detailed notes explaining translation choices, alternative readings, and scholarly considerations."
        />
        <FeatureCard
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
              <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
              <polyline points="14 2 14 8 20 8" />
              <path d="M12 18v-6" />
              <path d="m9 15 3 3 3-3" />
            </svg>
          }
          title="Textual Variants"
          description="See where ancient manuscripts differ and understand the impact of variant readings on translation."
        />
        <FeatureCard
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
              <circle cx="12" cy="12" r="10" />
              <path d="m2 12 10 10M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
              <path d="M2 12h20" />
            </svg>
          }
          title="Multilingual"
          description="Designed to scale to many languages while maintaining alignment back to the original source texts."
        />
        <FeatureCard
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
              <path d="M9 18c-4.51 2-5-2-7-2" />
            </svg>
          }
          title="Open Source"
          description="Fully open source with a GitHub-based review workflow. Contribute translations, notes, or code."
        />
      </section>

      {/* Recent Reading */}
      <section className="max-w-4xl mx-auto mb-12">
        <div className="border border-[var(--border)] rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Continue Reading</h2>
          <ReadingHistoryList />
        </div>
      </section>

      {/* Keyboard Shortcuts */}
      <section className="max-w-4xl mx-auto mb-16">
        <div className="bg-[var(--muted)] rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Keyboard Shortcuts</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <div className="flex items-center gap-2">
              <kbd className="px-2 py-1 bg-[var(--background)] border border-[var(--border)] rounded">G</kbd>
              <span className="text-[var(--muted-foreground)]">Quick jump</span>
            </div>
            <div className="flex items-center gap-2">
              <kbd className="px-2 py-1 bg-[var(--background)] border border-[var(--border)] rounded">1/2/3</kbd>
              <span className="text-[var(--muted-foreground)]">Switch layer</span>
            </div>
            <div className="flex items-center gap-2">
              <kbd className="px-2 py-1 bg-[var(--background)] border border-[var(--border)] rounded">S</kbd>
              <span className="text-[var(--muted-foreground)]">Study mode</span>
            </div>
            <div className="flex items-center gap-2">
              <kbd className="px-2 py-1 bg-[var(--background)] border border-[var(--border)] rounded">?</kbd>
              <span className="text-[var(--muted-foreground)]">Help</span>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="max-w-4xl mx-auto mb-16">
        <h2 className="text-2xl font-bold mb-6">Quick Navigation</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="border border-[var(--border)] rounded-lg p-6">
            <h3 className="font-semibold mb-4">Old Testament</h3>
            <div className="flex flex-wrap gap-2">
              <BookLink code="Gen" name="Genesis" />
              <BookLink code="Exod" name="Exodus" />
              <BookLink code="Ps" name="Psalms" />
              <BookLink code="Isa" name="Isaiah" />
            </div>
            <p className="text-sm text-[var(--muted-foreground)] mt-4">
              Sample: Genesis 1 (Hebrew with full morphology)
            </p>
          </div>
          <div className="border border-[var(--border)] rounded-lg p-6">
            <h3 className="font-semibold mb-4">New Testament</h3>
            <div className="flex flex-wrap gap-2">
              <BookLink code="John" name="John" />
              <BookLink code="Rom" name="Romans" />
              <BookLink code="Gal" name="Galatians" />
              <BookLink code="Rev" name="Revelation" />
            </div>
            <p className="text-sm text-[var(--muted-foreground)] mt-4">
              Sample: John 1 (Greek with full morphology)
            </p>
          </div>
        </div>
      </section>

      {/* Popular Starting Points */}
      <section className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-6">Popular Starting Points</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <Link
            href="/read/Gen/1/"
            className="border border-[var(--border)] rounded-lg p-4 hover:border-[var(--accent)] transition group"
          >
            <div className="text-sm text-[var(--muted-foreground)] mb-1">Genesis 1</div>
            <div className="font-medium group-hover:text-[var(--accent)]">The Creation</div>
          </Link>
          <Link
            href="/read/John/1/"
            className="border border-[var(--border)] rounded-lg p-4 hover:border-[var(--accent)] transition group"
          >
            <div className="text-sm text-[var(--muted-foreground)] mb-1">John 1</div>
            <div className="font-medium group-hover:text-[var(--accent)]">The Word</div>
          </Link>
          <Link
            href="/read/Ps/23/"
            className="border border-[var(--border)] rounded-lg p-4 hover:border-[var(--accent)] transition group"
          >
            <div className="text-sm text-[var(--muted-foreground)] mb-1">Psalm 23</div>
            <div className="font-medium group-hover:text-[var(--accent)]">The Lord is My Shepherd</div>
          </Link>
          <Link
            href="/read/Matt/5/"
            className="border border-[var(--border)] rounded-lg p-4 hover:border-[var(--accent)] transition group"
          >
            <div className="text-sm text-[var(--muted-foreground)] mb-1">Matthew 5</div>
            <div className="font-medium group-hover:text-[var(--accent)]">Sermon on the Mount</div>
          </Link>
          <Link
            href="/read/Rom/8/"
            className="border border-[var(--border)] rounded-lg p-4 hover:border-[var(--accent)] transition group"
          >
            <div className="text-sm text-[var(--muted-foreground)] mb-1">Romans 8</div>
            <div className="font-medium group-hover:text-[var(--accent)]">Life in the Spirit</div>
          </Link>
          <Link
            href="/read/1Cor/13/"
            className="border border-[var(--border)] rounded-lg p-4 hover:border-[var(--accent)] transition group"
          >
            <div className="text-sm text-[var(--muted-foreground)] mb-1">1 Corinthians 13</div>
            <div className="font-medium group-hover:text-[var(--accent)]">The Love Chapter</div>
          </Link>
        </div>
      </section>
    </div>
  );
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="border border-[var(--border)] rounded-lg p-6 hover:border-[var(--accent)] transition">
      <div className="w-12 h-12 rounded-lg bg-[var(--muted)] flex items-center justify-center mb-4 text-[var(--accent)]">
        {icon}
      </div>
      <h3 className="font-semibold mb-2">{title}</h3>
      <p className="text-sm text-[var(--muted-foreground)]">{description}</p>
    </div>
  );
}

function BookLink({ code, name }: { code: string; name: string }) {
  return (
    <Link
      href={`/read/${code}/1/`}
      className="px-3 py-1.5 bg-[var(--muted)] rounded text-sm hover:bg-[var(--accent)] hover:text-[var(--accent-foreground)] transition"
    >
      {name}
    </Link>
  );
}
