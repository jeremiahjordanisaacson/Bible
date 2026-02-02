import * as fs from 'fs';
import * as path from 'path';
import type { PipelineStage, PipelineConfig, PipelineContext } from '../pipeline';
import type { SourceToken, VerseTokens, SourceLanguage } from '@open-bible/schemas';

/**
 * Tokenize stage - breaks source text into tokens with morphology
 */
export const tokenizeStage: PipelineStage = {
  name: 'tokenize',
  description: 'Tokenize source text and attach morphology',

  async run(config: PipelineConfig, context: PipelineContext): Promise<void> {
    const outputDir = path.join(config.outputDir, 'tokens');
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    // Process each dataset
    for (const dataset of context.datasets) {
      if (dataset.contentType !== 'source-text') continue;

      for (const bookCode of dataset.books) {
        // Skip if not in filter
        if (config.books && config.books.length > 0 && !config.books.includes(bookCode)) {
          continue;
        }

        const language = dataset.languages[0] as SourceLanguage;
        console.log(`  Processing ${bookCode} (${language})...`);

        // For now, create stub output
        // In production, this would parse actual source files
        const outputPath = path.join(outputDir, `${bookCode}.tokens.json`);

        if (!fs.existsSync(outputPath) || config.force) {
          const stubData = createStubTokenData(bookCode, language);
          fs.writeFileSync(outputPath, JSON.stringify(stubData, null, 2));
        }

        if (!context.processedBooks.includes(bookCode)) {
          context.processedBooks.push(bookCode);
        }
      }
    }

    console.log(`  Tokenized ${context.processedBooks.length} books`);
  },
};

/**
 * Create stub token data for demonstration
 */
function createStubTokenData(bookCode: string, language: SourceLanguage): Record<string, VerseTokens> {
  // This is placeholder data - in production, parse actual source files
  return {
    [`${bookCode}.1.1`]: {
      verseRef: `${bookCode}.1.1`,
      language,
      tokens: [],
      tokenCount: 0,
    },
  };
}

/**
 * Parse Hebrew text into tokens
 */
export function tokenizeHebrew(text: string, verseRef: string): SourceToken[] {
  // Split on whitespace, handling maqqef (־) as word connector
  const words = text.split(/\s+/).filter(w => w.length > 0);
  const tokens: SourceToken[] = [];

  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    tokens.push({
      id: `${verseRef}.${i}`,
      language: 'hebrew',
      text: word,
      transliteration: transliterateHebrew(word),
      lemma: word, // Would need lexicon lookup
      gloss: '', // Would need lexicon lookup
      position: i,
    });
  }

  return tokens;
}

/**
 * Parse Greek text into tokens
 */
export function tokenizeGreek(text: string, verseRef: string): SourceToken[] {
  // Split on whitespace and punctuation
  const words = text.split(/[\s\.,;:·]+/).filter(w => w.length > 0);
  const tokens: SourceToken[] = [];

  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    tokens.push({
      id: `${verseRef}.${i}`,
      language: 'greek',
      text: word,
      transliteration: transliterateGreek(word),
      lemma: word, // Would need lexicon lookup
      gloss: '', // Would need lexicon lookup
      position: i,
    });
  }

  return tokens;
}

/**
 * Simple Hebrew transliteration (placeholder)
 */
function transliterateHebrew(text: string): string {
  // This is a very simplified transliteration
  // A real implementation would handle vowels, dagesh, etc.
  const map: Record<string, string> = {
    'א': "'", 'ב': 'b', 'ג': 'g', 'ד': 'd', 'ה': 'h',
    'ו': 'w', 'ז': 'z', 'ח': 'ḥ', 'ט': 'ṭ', 'י': 'y',
    'כ': 'k', 'ך': 'k', 'ל': 'l', 'מ': 'm', 'ם': 'm',
    'נ': 'n', 'ן': 'n', 'ס': 's', 'ע': 'ʿ', 'פ': 'p',
    'ף': 'p', 'צ': 'ṣ', 'ץ': 'ṣ', 'ק': 'q', 'ר': 'r',
    'שׁ': 'š', 'שׂ': 'ś', 'ש': 'š', 'ת': 't',
  };

  return text.replace(/[\u0591-\u05C7]/g, '') // Remove cantillation/vowels
    .split('')
    .map(c => map[c] || c)
    .join('');
}

/**
 * Simple Greek transliteration (placeholder)
 */
function transliterateGreek(text: string): string {
  const map: Record<string, string> = {
    'α': 'a', 'β': 'b', 'γ': 'g', 'δ': 'd', 'ε': 'e',
    'ζ': 'z', 'η': 'ē', 'θ': 'th', 'ι': 'i', 'κ': 'k',
    'λ': 'l', 'μ': 'm', 'ν': 'n', 'ξ': 'x', 'ο': 'o',
    'π': 'p', 'ρ': 'r', 'σ': 's', 'ς': 's', 'τ': 't',
    'υ': 'u', 'φ': 'ph', 'χ': 'ch', 'ψ': 'ps', 'ω': 'ō',
    'Α': 'A', 'Β': 'B', 'Γ': 'G', 'Δ': 'D', 'Ε': 'E',
    'Ζ': 'Z', 'Η': 'Ē', 'Θ': 'Th', 'Ι': 'I', 'Κ': 'K',
    'Λ': 'L', 'Μ': 'M', 'Ν': 'N', 'Ξ': 'X', 'Ο': 'O',
    'Π': 'P', 'Ρ': 'R', 'Σ': 'S', 'Τ': 'T', 'Υ': 'U',
    'Φ': 'Ph', 'Χ': 'Ch', 'Ψ': 'Ps', 'Ω': 'Ō',
  };

  // Remove diacritics and transliterate
  return text.normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .split('')
    .map(c => map[c] || c)
    .join('');
}
