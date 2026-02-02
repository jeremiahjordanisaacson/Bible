import { ChapterContent } from './chapter-content';

// Generate static params for static export
export function generateStaticParams() {
  return [
    { book: 'Gen', chapter: '1' },
    { book: 'John', chapter: '1' },
  ];
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
