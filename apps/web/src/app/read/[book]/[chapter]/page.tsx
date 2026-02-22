import { ChapterContent } from './chapter-content';
import { allBooks, getBook } from '@/data/books-metadata';
import type { Metadata } from 'next';

// Generate static params for all 1,189 chapters in the Bible
export function generateStaticParams() {
  const params: { book: string; chapter: string }[] = [];

  for (const book of allBooks) {
    for (let chapter = 1; chapter <= book.chapters; chapter++) {
      params.push({
        book: book.code,
        chapter: String(chapter),
      });
    }
  }

  return params;
}

interface PageProps {
  params: {
    book: string;
    chapter: string;
  };
}

export function generateMetadata({ params }: PageProps): Metadata {
  const book = getBook(params.book);
  const bookName = book ? book.name : params.book;
  const chapter = params.chapter;

  return {
    title: `${bookName} ${chapter} — Open Bible Translation`,
    description: `Read ${bookName} chapter ${chapter} with original Hebrew/Greek text, morphological analysis, and multiple translation layers.`,
    openGraph: {
      title: `${bookName} ${chapter} — Open Bible Translation`,
      description: `${bookName} ${chapter} with source text transparency, interlinear data, and study notes.`,
      type: 'article',
    },
    twitter: {
      card: 'summary',
      title: `${bookName} ${chapter} — Open Bible Translation`,
      description: `${bookName} ${chapter} with source text transparency and study notes.`,
    },
    alternates: {
      canonical: `/read/${params.book}/${chapter}/`,
    },
  };
}

export default function ChapterPage({ params }: PageProps) {
  const bookCode = params.book;
  const chapterNum = parseInt(params.chapter, 10);
  const book = getBook(bookCode);
  const bookName = book ? book.name : bookCode;
  const baseUrl = 'https://jeremiahjordanisaacson.github.io/Bible';

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    name: `${bookName} ${chapterNum}`,
    headline: `${bookName} ${chapterNum} — Open Bible Translation`,
    description: `Read ${bookName} chapter ${chapterNum} with original Hebrew/Greek text, morphological analysis, and multiple translation layers.`,
    url: `${baseUrl}/read/${bookCode}/${chapterNum}/`,
    isPartOf: {
      '@type': 'Book',
      name: bookName,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Open Bible Translation Project',
    },
    inLanguage: ['en', book?.testament === 'OT' ? 'he' : 'el'],
  };

  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${baseUrl}/` },
      { '@type': 'ListItem', position: 2, name: 'Books', item: `${baseUrl}/books` },
      { '@type': 'ListItem', position: 3, name: bookName, item: `${baseUrl}/read/${bookCode}/1/` },
      { '@type': 'ListItem', position: 4, name: `Chapter ${chapterNum}` },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <ChapterContent bookCode={bookCode} chapterNum={chapterNum} />
    </>
  );
}
