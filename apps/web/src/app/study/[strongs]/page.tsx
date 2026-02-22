import { WordStudyContent } from './word-study-content';
import { getAllStrongsNumbers, getStrongsEntry } from '@/data/strongs-index';
import type { Metadata } from 'next';

export function generateStaticParams() {
  const numbers = getAllStrongsNumbers();
  return numbers.map(strongs => ({ strongs }));
}

interface PageProps {
  params: { strongs: string };
}

export function generateMetadata({ params }: PageProps): Metadata {
  const entry = getStrongsEntry(params.strongs);
  if (!entry) {
    return { title: `${params.strongs} — Word Study` };
  }

  return {
    title: `${entry.lemmaTranslit} (${params.strongs}) — Word Study — Open Bible Translation`,
    description: `Study the ${entry.language} word ${entry.lemmaTranslit} (${entry.lemma}), meaning "${entry.primaryGloss}". Found ${entry.totalOccurrences} times across ${Object.keys(entry.bookDistribution).length} books.`,
    alternates: { canonical: `/study/${params.strongs}/` },
  };
}

export default function WordStudyPage({ params }: PageProps) {
  return <WordStudyContent strongs={params.strongs} />;
}
