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

  return <ChapterContent bookCode={bookCode} chapterNum={chapterNum} />;
}
