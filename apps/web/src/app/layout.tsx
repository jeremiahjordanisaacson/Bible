import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Open Bible Translation',
  description: 'An open source, AI-assisted Bible translation platform with radical transparency',
  keywords: ['Bible', 'translation', 'Hebrew', 'Greek', 'open source', 'interlinear'],
  authors: [{ name: 'Open Bible Translation Project' }],
  openGraph: {
    title: 'Open Bible Translation',
    description: 'Transparent, AI-assisted Bible translation with source text verification',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
          <header className="border-b border-[var(--border)] sticky top-0 bg-[var(--background)] z-50">
            <div className="container mx-auto px-4 h-14 flex items-center justify-between">
              <a href="/" className="font-semibold text-lg flex items-center gap-2">
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
              </a>
              <nav className="flex items-center gap-6">
                <a href="/read/" className="text-sm hover:text-[var(--accent)]">Read</a>
                <a href="/search/" className="text-sm hover:text-[var(--accent)]">Search</a>
                <a href="/about/" className="text-sm hover:text-[var(--accent)]">About</a>
              </nav>
            </div>
          </header>
          <main className="flex-1">
            {children}
          </main>
          <footer className="border-t border-[var(--border)] py-8 mt-auto">
            <div className="container mx-auto px-4">
              <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="text-sm text-[var(--muted-foreground)]">
                  <p>
                    Open Bible Translation Project - AI-assisted translation drafts for human review.
                  </p>
                  <p className="mt-1">
                    All translations are drafts and should be verified against the original sources.
                  </p>
                </div>
                <div className="flex gap-4 text-sm">
                  <a href="/about/" className="hover:text-[var(--accent)]">About</a>
                  <a href="/licenses/" className="hover:text-[var(--accent)]">Licenses</a>
                  <a
                    href="https://github.com/jeremiahjordanisaacson/Bible"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[var(--accent)]"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
