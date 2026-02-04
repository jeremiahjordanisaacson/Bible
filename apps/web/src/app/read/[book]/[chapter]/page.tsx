import { ChapterContent } from './chapter-content';
import { allBooks } from '@/data/books-metadata';

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

export default function ChapterPage({ params }: PageProps) {
  const bookCode = params.book;
  const chapterNum = parseInt(params.chapter, 10);

  return <ChapterContent bookCode={bookCode} chapterNum={chapterNum} />;
}
