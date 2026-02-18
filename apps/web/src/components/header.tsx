'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ThemeToggle } from './theme-toggle';
import { BookNav } from './book-nav';
import { QuickJump } from './quick-jump';

export function Header() {
  const router = useRouter();

  const handleQuickJump = (bookCode: string, chapter: number) => {
    router.push(`/read/${bookCode}/${chapter}/`);
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
          Open Bible
        </Link>
        <nav className="flex items-center gap-4" aria-label="Main navigation">
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
      </div>
    </header>
  );
}

export default Header;
