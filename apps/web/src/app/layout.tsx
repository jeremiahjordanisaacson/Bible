import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Open Bible Translation',
  description: 'An open source, AI-assisted Bible translation platform with radical transparency',
  keywords: ['Bible', 'translation', 'Hebrew', 'Greek', 'open source', 'interlinear'],
  authors: [{ name: 'Open Bible Translation Project' }],
  metadataBase: new URL('https://jeremiahjordanisaacson.github.io/Bible'),
  openGraph: {
    title: 'Open Bible Translation',
    description: 'Transparent, AI-assisted Bible translation with source text verification',
    type: 'website',
    siteName: 'Open Bible Translation',
  },
  twitter: {
    card: 'summary',
    title: 'Open Bible Translation',
    description: 'Transparent, AI-assisted Bible translation with source text verification',
  },
  alternates: {
    canonical: '/',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  var root = document.documentElement;
                  if (theme === 'dark') {
                    root.classList.add('dark');
                  } else if (theme === 'light') {
                    root.classList.add('light');
                  } else {
                    // system preference
                    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
                      root.classList.add('dark');
                    }
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className={inter.className}>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[100] focus:px-4 focus:py-2 focus:bg-[var(--accent)] focus:text-[var(--accent-foreground)] focus:rounded focus:outline-none"
        >
          Skip to content
        </a>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main id="main-content" className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
