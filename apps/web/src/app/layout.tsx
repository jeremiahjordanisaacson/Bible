import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/header';

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
          <Header />
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
