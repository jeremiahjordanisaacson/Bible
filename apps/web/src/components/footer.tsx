import Link from 'next/link';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--border)] mt-16 no-print">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          {/* Navigation */}
          <div>
            <h3 className="font-semibold mb-3">Navigate</h3>
            <ul className="space-y-2 text-sm text-[var(--muted-foreground)]">
              <li><Link href="/read/Gen/1/" className="hover:text-[var(--foreground)]">Start Reading</Link></li>
              <li><Link href="/search/" className="hover:text-[var(--foreground)]">Search</Link></li>
              <li><Link href="/stats/" className="hover:text-[var(--foreground)]">Statistics</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold mb-3">Resources</h3>
            <ul className="space-y-2 text-sm text-[var(--muted-foreground)]">
              <li><Link href="/about/" className="hover:text-[var(--foreground)]">About</Link></li>
              <li><Link href="/licenses/" className="hover:text-[var(--foreground)]">Licenses</Link></li>
              <li><Link href="/privacy/" className="hover:text-[var(--foreground)]">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Sample Data */}
          <div>
            <h3 className="font-semibold mb-3">Popular Chapters</h3>
            <ul className="space-y-2 text-sm text-[var(--muted-foreground)]">
              <li><Link href="/read/Gen/1/" className="hover:text-[var(--foreground)]">Genesis 1 (Hebrew)</Link></li>
              <li><Link href="/read/Psa/23/" className="hover:text-[var(--foreground)]">Psalm 23 (Hebrew)</Link></li>
              <li><Link href="/read/John/1/" className="hover:text-[var(--foreground)]">John 1 (Greek)</Link></li>
              <li><Link href="/read/Rom/8/" className="hover:text-[var(--foreground)]">Romans 8 (Greek)</Link></li>
            </ul>
          </div>

          {/* Project */}
          <div>
            <h3 className="font-semibold mb-3">Project</h3>
            <ul className="space-y-2 text-sm text-[var(--muted-foreground)]">
              <li>
                <a
                  href="https://github.com/jeremiahjordanisaacson/Bible"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[var(--foreground)] flex items-center gap-1"
                >
                  GitHub
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" x2="21" y1="14" y2="3" />
                  </svg>
                </a>
              </li>
              <li><span className="text-xs">MIT License (Code)</span></li>
              <li><span className="text-xs">CC BY 4.0 (Translations)</span></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[var(--border)] pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-[var(--muted-foreground)]">
          <div>
            &copy; {currentYear} Open Bible Translation Project
          </div>
          <div className="text-xs">
            All translations are AI-assisted drafts. Not authoritative texts.
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
