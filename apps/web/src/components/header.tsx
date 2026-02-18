'use client';

import * as React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ThemeToggle } from './theme-toggle';
import { BookNav } from './book-nav';
import { QuickJump } from './quick-jump';

export function Header() {
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const handleQuickJump = (bookCode: string, chapter: number) => {
    router.push(`/read/${bookCode}/${chapter}/`);
    setMobileMenuOpen(false);
  };

  return (
    <header className="border-b border-[var(--border)] sticky top-0 bg-[var(--background)] z-50" role="banner">
      <div className="container mx-auto px-4 h-14 flex items-center justify-between">
        <Link href="/" className="font-semibold text-lg flex items-center gap-2" aria-label="Open Bible — Home">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-6 h-6"
          >
            <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
          </svg>
          <span className="hidden sm:inline">Open Bible</span>
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center gap-4" aria-label="Main navigation">
          <BookNav />
          <Link href="/books/" className="text-sm hover:text-[var(--accent)]">
            All Books
          </Link>
          <Link href="/search/" className="text-sm hover:text-[var(--accent)]">
            Search
          </Link>
          <Link href="/stats/" className="text-sm hover:text-[var(--accent)]">
            Stats
          </Link>
          <Link href="/about/" className="text-sm hover:text-[var(--accent)]">
            About
          </Link>
          <div className="ml-2 border-l border-[var(--border)] pl-4 flex items-center gap-2">
            <QuickJump onNavigate={handleQuickJump} />
            <ThemeToggle />
          </div>
        </nav>

        {/* Mobile controls */}
        <div className="flex md:hidden items-center gap-2">
          <ThemeToggle />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg hover:bg-[var(--muted)] transition-colors"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {mobileMenuOpen && (
        <nav className="md:hidden border-t border-[var(--border)] bg-[var(--background)]" aria-label="Mobile navigation">
          <div className="container mx-auto px-4 py-4 space-y-3">
            <Link href="/books/" className="block py-2 text-sm hover:text-[var(--accent)]" onClick={() => setMobileMenuOpen(false)}>
              📚 All Books
            </Link>
            <Link href="/search/" className="block py-2 text-sm hover:text-[var(--accent)]" onClick={() => setMobileMenuOpen(false)}>
              🔍 Search
            </Link>
            <Link href="/stats/" className="block py-2 text-sm hover:text-[var(--accent)]" onClick={() => setMobileMenuOpen(false)}>
              📊 Statistics
            </Link>
            <Link href="/about/" className="block py-2 text-sm hover:text-[var(--accent)]" onClick={() => setMobileMenuOpen(false)}>
              ℹ️ About
            </Link>
            <Link href="/privacy/" className="block py-2 text-sm hover:text-[var(--accent)]" onClick={() => setMobileMenuOpen(false)}>
              🔒 Privacy
            </Link>
            <div className="pt-3 border-t border-[var(--border)]">
              <QuickJump onNavigate={handleQuickJump} />
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}

export default Header;
