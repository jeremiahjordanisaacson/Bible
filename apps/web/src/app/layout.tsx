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
          <Footer />
        </div>
      </body>
    </html>
  );
}
