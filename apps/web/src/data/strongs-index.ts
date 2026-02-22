/**
 * Strong's Concordance Index
 * Scans all registered chapter data and builds an index of every Strong's number
 * with all its occurrences across the Bible.
 */

import { getRegisteredChapters, getChapterVerses } from './chapter-registry';

export interface StrongsOccurrence {
  ref: string;        // e.g., "Gen.1.1"
  text: string;       // Original language text
  transliteration: string;
  gloss: string;
  glossExtended?: string;
  morphology: {
    pos: string;
    [key: string]: string | undefined;
  };
}

export interface StrongsEntry {
  strongs: string;           // e.g., "H430" or "G3056"
  lemma: string;             // Root word in original language
  lemmaTranslit: string;     // Transliterated root
  language: string;          // "hebrew", "greek", or "aramaic"
  primaryGloss: string;      // Most common English gloss
  glosses: string[];         // All unique glosses found
  occurrences: StrongsOccurrence[];
  bookDistribution: Record<string, number>; // book code -> count
  totalOccurrences: number;
}

let _index: Map<string, StrongsEntry> | null = null;

/**
 * Build or retrieve the Strong's concordance index
 */
export function getStrongsIndex(): Map<string, StrongsEntry> {
  if (_index) return _index;

  _index = new Map();
  const chapters = getRegisteredChapters();

  for (const key of chapters) {
    const [book, ch] = key.split('.');
    const verses = getChapterVerses(book, parseInt(ch, 10));

    for (const verse of verses) {
      if (!verse.sourceTokens) continue;

      for (const token of verse.sourceTokens) {
        if (!token.strongs) continue;

        const strongs = token.strongs;
        let entry = _index.get(strongs);

        if (!entry) {
          entry = {
            strongs,
            lemma: token.lemma || '',
            lemmaTranslit: token.lemmaTranslit || token.transliteration || '',
            language: token.language || 'hebrew',
            primaryGloss: token.gloss || '',
            glosses: [],
            occurrences: [],
            bookDistribution: {},
            totalOccurrences: 0,
          };
          _index.set(strongs, entry);
        }

        // Add occurrence
        entry.occurrences.push({
          ref: verse.ref,
          text: token.text,
          transliteration: token.transliteration,
          gloss: token.gloss,
          glossExtended: token.glossExtended,
          morphology: token.morphology || { pos: 'unknown' },
        });

        // Track glosses
        if (token.gloss && !entry.glosses.includes(token.gloss)) {
          entry.glosses.push(token.gloss);
        }

        // Track book distribution
        entry.bookDistribution[book] = (entry.bookDistribution[book] || 0) + 1;
        entry.totalOccurrences++;
      }
    }
  }

  return _index;
}

/**
 * Get a single Strong's entry
 */
export function getStrongsEntry(strongs: string): StrongsEntry | null {
  const index = getStrongsIndex();
  return index.get(strongs) || null;
}

/**
 * Get all Strong's numbers available
 */
export function getAllStrongsNumbers(): string[] {
  const index = getStrongsIndex();
  return Array.from(index.keys()).sort();
}

/**
 * Search Strong's entries by English gloss
 */
export function searchByGloss(query: string): StrongsEntry[] {
  const index = getStrongsIndex();
  const lower = query.toLowerCase();
  const results: StrongsEntry[] = [];

  for (const entry of index.values()) {
    if (
      entry.primaryGloss.toLowerCase().includes(lower) ||
      entry.glosses.some(g => g.toLowerCase().includes(lower)) ||
      entry.lemmaTranslit.toLowerCase().includes(lower)
    ) {
      results.push(entry);
    }
  }

  return results.sort((a, b) => b.totalOccurrences - a.totalOccurrences);
}

/**
 * Get Strong's entries filtered by language
 */
export function getStrongsByLanguage(language: 'hebrew' | 'greek' | 'aramaic'): StrongsEntry[] {
  const index = getStrongsIndex();
  return Array.from(index.values())
    .filter(e => e.language === language)
    .sort((a, b) => b.totalOccurrences - a.totalOccurrences);
}
