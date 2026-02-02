import * as fs from 'fs';
import * as path from 'path';
import type { PipelineStage, PipelineConfig, PipelineContext } from '../pipeline';
import type {
  VerseTranslation,
  TranslationLayer,
  TranslatedSpan,
  LanguagePackMetadata,
  ReviewerOverride,
} from '@open-bible/schemas';

/**
 * Target language configurations
 */
export const TARGET_LANGUAGES: Record<string, {
  code: string;
  name: string;
  nativeName: string;
  direction: 'ltr' | 'rtl';
  script: string;
}> = {
  es: {
    code: 'es',
    name: 'Spanish',
    nativeName: 'Español',
    direction: 'ltr',
    script: 'Latin',
  },
  fr: {
    code: 'fr',
    name: 'French',
    nativeName: 'Français',
    direction: 'ltr',
    script: 'Latin',
  },
  de: {
    code: 'de',
    name: 'German',
    nativeName: 'Deutsch',
    direction: 'ltr',
    script: 'Latin',
  },
  ar: {
    code: 'ar',
    name: 'Arabic',
    nativeName: 'العربية',
    direction: 'rtl',
    script: 'Arabic',
  },
  zh: {
    code: 'zh',
    name: 'Chinese',
    nativeName: '中文',
    direction: 'ltr',
    script: 'Han',
  },
};

/**
 * Sample translations for Genesis 1:1 in multiple languages
 * These maintain alignment back to the original Hebrew tokens
 */
export const SAMPLE_MULTILINGUAL_TRANSLATIONS: Record<string, Record<string, VerseTranslation>> = {
  es: {
    'Gen.1.1': {
      verseRef: 'Gen.1.1',
      targetLanguage: 'es',
      profile: 'academic',
      layers: {
        literal: {
          type: 'literal',
          targetLanguage: 'es',
          text: 'En principio creó Dios los cielos y la tierra.',
          spans: [
            { id: 'Gen.1.1.es.lit.0', text: 'En principio', position: 0, sourceTokenIds: ['Gen.1.1.0'], confidence: 'high' },
            { id: 'Gen.1.1.es.lit.1', text: 'creó', position: 1, sourceTokenIds: ['Gen.1.1.1'], confidence: 'high' },
            { id: 'Gen.1.1.es.lit.2', text: 'Dios', position: 2, sourceTokenIds: ['Gen.1.1.2'], confidence: 'high' },
            { id: 'Gen.1.1.es.lit.3', text: 'los cielos', position: 3, sourceTokenIds: ['Gen.1.1.3', 'Gen.1.1.4'], confidence: 'high' },
            { id: 'Gen.1.1.es.lit.4', text: 'y', position: 4, sourceTokenIds: ['Gen.1.1.5'], confidence: 'high' },
            { id: 'Gen.1.1.es.lit.5', text: 'la tierra.', position: 5, sourceTokenIds: ['Gen.1.1.6'], confidence: 'high' },
          ],
          overallConfidence: 'high',
          humanReviewed: false,
        },
        idiomatic: {
          type: 'idiomatic',
          targetLanguage: 'es',
          text: 'En el principio, Dios creó los cielos y la tierra.',
          spans: [
            { id: 'Gen.1.1.es.idi.0', text: 'En el principio,', position: 0, sourceTokenIds: ['Gen.1.1.0'], confidence: 'high' },
            { id: 'Gen.1.1.es.idi.1', text: 'Dios creó', position: 1, sourceTokenIds: ['Gen.1.1.1', 'Gen.1.1.2'], confidence: 'high' },
            { id: 'Gen.1.1.es.idi.2', text: 'los cielos y la tierra.', position: 2, sourceTokenIds: ['Gen.1.1.3', 'Gen.1.1.4', 'Gen.1.1.5', 'Gen.1.1.6'], confidence: 'high' },
          ],
          overallConfidence: 'high',
          humanReviewed: false,
        },
      },
      metadata: {
        pipelineVersion: '0.1.0',
        generatedAt: new Date().toISOString(),
        engineId: 'multilingual-stub',
        engineVersion: '0.1.0',
        sourceDataVersion: '1.0.0',
      },
    },
  },
  fr: {
    'Gen.1.1': {
      verseRef: 'Gen.1.1',
      targetLanguage: 'fr',
      profile: 'academic',
      layers: {
        literal: {
          type: 'literal',
          targetLanguage: 'fr',
          text: 'Au commencement créa Dieu les cieux et la terre.',
          spans: [
            { id: 'Gen.1.1.fr.lit.0', text: 'Au commencement', position: 0, sourceTokenIds: ['Gen.1.1.0'], confidence: 'high' },
            { id: 'Gen.1.1.fr.lit.1', text: 'créa', position: 1, sourceTokenIds: ['Gen.1.1.1'], confidence: 'high' },
            { id: 'Gen.1.1.fr.lit.2', text: 'Dieu', position: 2, sourceTokenIds: ['Gen.1.1.2'], confidence: 'high' },
            { id: 'Gen.1.1.fr.lit.3', text: 'les cieux', position: 3, sourceTokenIds: ['Gen.1.1.3', 'Gen.1.1.4'], confidence: 'high' },
            { id: 'Gen.1.1.fr.lit.4', text: 'et', position: 4, sourceTokenIds: ['Gen.1.1.5'], confidence: 'high' },
            { id: 'Gen.1.1.fr.lit.5', text: 'la terre.', position: 5, sourceTokenIds: ['Gen.1.1.6'], confidence: 'high' },
          ],
          overallConfidence: 'high',
          humanReviewed: false,
        },
        idiomatic: {
          type: 'idiomatic',
          targetLanguage: 'fr',
          text: 'Au commencement, Dieu créa les cieux et la terre.',
          spans: [
            { id: 'Gen.1.1.fr.idi.0', text: 'Au commencement,', position: 0, sourceTokenIds: ['Gen.1.1.0'], confidence: 'high' },
            { id: 'Gen.1.1.fr.idi.1', text: 'Dieu créa', position: 1, sourceTokenIds: ['Gen.1.1.1', 'Gen.1.1.2'], confidence: 'high' },
            { id: 'Gen.1.1.fr.idi.2', text: 'les cieux et la terre.', position: 2, sourceTokenIds: ['Gen.1.1.3', 'Gen.1.1.4', 'Gen.1.1.5', 'Gen.1.1.6'], confidence: 'high' },
          ],
          overallConfidence: 'high',
          humanReviewed: false,
        },
      },
      metadata: {
        pipelineVersion: '0.1.0',
        generatedAt: new Date().toISOString(),
        engineId: 'multilingual-stub',
        engineVersion: '0.1.0',
        sourceDataVersion: '1.0.0',
      },
    },
  },
  de: {
    'Gen.1.1': {
      verseRef: 'Gen.1.1',
      targetLanguage: 'de',
      profile: 'academic',
      layers: {
        literal: {
          type: 'literal',
          targetLanguage: 'de',
          text: 'Im Anfang schuf Gott die Himmel und die Erde.',
          spans: [
            { id: 'Gen.1.1.de.lit.0', text: 'Im Anfang', position: 0, sourceTokenIds: ['Gen.1.1.0'], confidence: 'high' },
            { id: 'Gen.1.1.de.lit.1', text: 'schuf', position: 1, sourceTokenIds: ['Gen.1.1.1'], confidence: 'high' },
            { id: 'Gen.1.1.de.lit.2', text: 'Gott', position: 2, sourceTokenIds: ['Gen.1.1.2'], confidence: 'high' },
            { id: 'Gen.1.1.de.lit.3', text: 'die Himmel', position: 3, sourceTokenIds: ['Gen.1.1.3', 'Gen.1.1.4'], confidence: 'high' },
            { id: 'Gen.1.1.de.lit.4', text: 'und', position: 4, sourceTokenIds: ['Gen.1.1.5'], confidence: 'high' },
            { id: 'Gen.1.1.de.lit.5', text: 'die Erde.', position: 5, sourceTokenIds: ['Gen.1.1.6'], confidence: 'high' },
          ],
          overallConfidence: 'high',
          humanReviewed: false,
        },
        idiomatic: {
          type: 'idiomatic',
          targetLanguage: 'de',
          text: 'Am Anfang schuf Gott Himmel und Erde.',
          spans: [
            { id: 'Gen.1.1.de.idi.0', text: 'Am Anfang', position: 0, sourceTokenIds: ['Gen.1.1.0'], confidence: 'high' },
            { id: 'Gen.1.1.de.idi.1', text: 'schuf Gott', position: 1, sourceTokenIds: ['Gen.1.1.1', 'Gen.1.1.2'], confidence: 'high' },
            { id: 'Gen.1.1.de.idi.2', text: 'Himmel und Erde.', position: 2, sourceTokenIds: ['Gen.1.1.3', 'Gen.1.1.4', 'Gen.1.1.5', 'Gen.1.1.6'], confidence: 'high' },
          ],
          overallConfidence: 'high',
          humanReviewed: false,
        },
      },
      metadata: {
        pipelineVersion: '0.1.0',
        generatedAt: new Date().toISOString(),
        engineId: 'multilingual-stub',
        engineVersion: '0.1.0',
        sourceDataVersion: '1.0.0',
      },
    },
  },
};

/**
 * John 1:1 sample translations
 */
export const SAMPLE_JOHN_TRANSLATIONS: Record<string, Record<string, VerseTranslation>> = {
  es: {
    'John.1.1': {
      verseRef: 'John.1.1',
      targetLanguage: 'es',
      profile: 'academic',
      layers: {
        literal: {
          type: 'literal',
          targetLanguage: 'es',
          text: 'En el principio era el Verbo, y el Verbo estaba con Dios, y Dios era el Verbo.',
          spans: [
            { id: 'John.1.1.es.lit.0', text: 'En el principio', position: 0, sourceTokenIds: ['John.1.1.0', 'John.1.1.1'], confidence: 'high' },
            { id: 'John.1.1.es.lit.1', text: 'era', position: 1, sourceTokenIds: ['John.1.1.2'], confidence: 'high' },
            { id: 'John.1.1.es.lit.2', text: 'el Verbo,', position: 2, sourceTokenIds: ['John.1.1.3', 'John.1.1.4'], confidence: 'high' },
            { id: 'John.1.1.es.lit.3', text: 'y el Verbo estaba', position: 3, sourceTokenIds: ['John.1.1.5', 'John.1.1.6', 'John.1.1.7', 'John.1.1.8'], confidence: 'high' },
            { id: 'John.1.1.es.lit.4', text: 'con Dios,', position: 4, sourceTokenIds: ['John.1.1.9', 'John.1.1.10', 'John.1.1.11'], confidence: 'high' },
            { id: 'John.1.1.es.lit.5', text: 'y Dios era el Verbo.', position: 5, sourceTokenIds: ['John.1.1.12', 'John.1.1.13', 'John.1.1.14', 'John.1.1.15', 'John.1.1.16'], confidence: 'medium' },
          ],
          overallConfidence: 'high',
          humanReviewed: false,
        },
        idiomatic: {
          type: 'idiomatic',
          targetLanguage: 'es',
          text: 'En el principio existía la Palabra, y la Palabra estaba con Dios, y la Palabra era Dios.',
          spans: [
            { id: 'John.1.1.es.idi.0', text: 'En el principio existía la Palabra,', position: 0, sourceTokenIds: ['John.1.1.0', 'John.1.1.1', 'John.1.1.2', 'John.1.1.3', 'John.1.1.4'], confidence: 'high' },
            { id: 'John.1.1.es.idi.1', text: 'y la Palabra estaba con Dios,', position: 1, sourceTokenIds: ['John.1.1.5', 'John.1.1.6', 'John.1.1.7', 'John.1.1.8', 'John.1.1.9', 'John.1.1.10', 'John.1.1.11'], confidence: 'high' },
            { id: 'John.1.1.es.idi.2', text: 'y la Palabra era Dios.', position: 2, sourceTokenIds: ['John.1.1.12', 'John.1.1.13', 'John.1.1.14', 'John.1.1.15', 'John.1.1.16'], confidence: 'medium' },
          ],
          overallConfidence: 'high',
          humanReviewed: false,
        },
      },
      metadata: {
        pipelineVersion: '0.1.0',
        generatedAt: new Date().toISOString(),
        engineId: 'multilingual-stub',
        engineVersion: '0.1.0',
        sourceDataVersion: '1.0.0',
      },
    },
  },
  fr: {
    'John.1.1': {
      verseRef: 'John.1.1',
      targetLanguage: 'fr',
      profile: 'academic',
      layers: {
        literal: {
          type: 'literal',
          targetLanguage: 'fr',
          text: 'Au commencement était la Parole, et la Parole était avec Dieu, et Dieu était la Parole.',
          spans: [
            { id: 'John.1.1.fr.lit.0', text: 'Au commencement', position: 0, sourceTokenIds: ['John.1.1.0', 'John.1.1.1'], confidence: 'high' },
            { id: 'John.1.1.fr.lit.1', text: 'était', position: 1, sourceTokenIds: ['John.1.1.2'], confidence: 'high' },
            { id: 'John.1.1.fr.lit.2', text: 'la Parole,', position: 2, sourceTokenIds: ['John.1.1.3', 'John.1.1.4'], confidence: 'high' },
            { id: 'John.1.1.fr.lit.3', text: 'et la Parole était', position: 3, sourceTokenIds: ['John.1.1.5', 'John.1.1.6', 'John.1.1.7', 'John.1.1.8'], confidence: 'high' },
            { id: 'John.1.1.fr.lit.4', text: 'avec Dieu,', position: 4, sourceTokenIds: ['John.1.1.9', 'John.1.1.10', 'John.1.1.11'], confidence: 'high' },
            { id: 'John.1.1.fr.lit.5', text: 'et Dieu était la Parole.', position: 5, sourceTokenIds: ['John.1.1.12', 'John.1.1.13', 'John.1.1.14', 'John.1.1.15', 'John.1.1.16'], confidence: 'medium' },
          ],
          overallConfidence: 'high',
          humanReviewed: false,
        },
        idiomatic: {
          type: 'idiomatic',
          targetLanguage: 'fr',
          text: 'Au commencement était la Parole, la Parole était avec Dieu, et la Parole était Dieu.',
          spans: [
            { id: 'John.1.1.fr.idi.0', text: 'Au commencement était la Parole,', position: 0, sourceTokenIds: ['John.1.1.0', 'John.1.1.1', 'John.1.1.2', 'John.1.1.3', 'John.1.1.4'], confidence: 'high' },
            { id: 'John.1.1.fr.idi.1', text: 'la Parole était avec Dieu,', position: 1, sourceTokenIds: ['John.1.1.5', 'John.1.1.6', 'John.1.1.7', 'John.1.1.8', 'John.1.1.9', 'John.1.1.10', 'John.1.1.11'], confidence: 'high' },
            { id: 'John.1.1.fr.idi.2', text: 'et la Parole était Dieu.', position: 2, sourceTokenIds: ['John.1.1.12', 'John.1.1.13', 'John.1.1.14', 'John.1.1.15', 'John.1.1.16'], confidence: 'medium' },
          ],
          overallConfidence: 'high',
          humanReviewed: false,
        },
      },
      metadata: {
        pipelineVersion: '0.1.0',
        generatedAt: new Date().toISOString(),
        engineId: 'multilingual-stub',
        engineVersion: '0.1.0',
        sourceDataVersion: '1.0.0',
      },
    },
  },
  de: {
    'John.1.1': {
      verseRef: 'John.1.1',
      targetLanguage: 'de',
      profile: 'academic',
      layers: {
        literal: {
          type: 'literal',
          targetLanguage: 'de',
          text: 'Im Anfang war das Wort, und das Wort war bei Gott, und Gott war das Wort.',
          spans: [
            { id: 'John.1.1.de.lit.0', text: 'Im Anfang', position: 0, sourceTokenIds: ['John.1.1.0', 'John.1.1.1'], confidence: 'high' },
            { id: 'John.1.1.de.lit.1', text: 'war', position: 1, sourceTokenIds: ['John.1.1.2'], confidence: 'high' },
            { id: 'John.1.1.de.lit.2', text: 'das Wort,', position: 2, sourceTokenIds: ['John.1.1.3', 'John.1.1.4'], confidence: 'high' },
            { id: 'John.1.1.de.lit.3', text: 'und das Wort war', position: 3, sourceTokenIds: ['John.1.1.5', 'John.1.1.6', 'John.1.1.7', 'John.1.1.8'], confidence: 'high' },
            { id: 'John.1.1.de.lit.4', text: 'bei Gott,', position: 4, sourceTokenIds: ['John.1.1.9', 'John.1.1.10', 'John.1.1.11'], confidence: 'high' },
            { id: 'John.1.1.de.lit.5', text: 'und Gott war das Wort.', position: 5, sourceTokenIds: ['John.1.1.12', 'John.1.1.13', 'John.1.1.14', 'John.1.1.15', 'John.1.1.16'], confidence: 'medium' },
          ],
          overallConfidence: 'high',
          humanReviewed: false,
        },
        idiomatic: {
          type: 'idiomatic',
          targetLanguage: 'de',
          text: 'Am Anfang war das Wort, und das Wort war bei Gott, und das Wort war Gott.',
          spans: [
            { id: 'John.1.1.de.idi.0', text: 'Am Anfang war das Wort,', position: 0, sourceTokenIds: ['John.1.1.0', 'John.1.1.1', 'John.1.1.2', 'John.1.1.3', 'John.1.1.4'], confidence: 'high' },
            { id: 'John.1.1.de.idi.1', text: 'und das Wort war bei Gott,', position: 1, sourceTokenIds: ['John.1.1.5', 'John.1.1.6', 'John.1.1.7', 'John.1.1.8', 'John.1.1.9', 'John.1.1.10', 'John.1.1.11'], confidence: 'high' },
            { id: 'John.1.1.de.idi.2', text: 'und das Wort war Gott.', position: 2, sourceTokenIds: ['John.1.1.12', 'John.1.1.13', 'John.1.1.14', 'John.1.1.15', 'John.1.1.16'], confidence: 'medium' },
          ],
          overallConfidence: 'high',
          humanReviewed: false,
        },
      },
      metadata: {
        pipelineVersion: '0.1.0',
        generatedAt: new Date().toISOString(),
        engineId: 'multilingual-stub',
        engineVersion: '0.1.0',
        sourceDataVersion: '1.0.0',
      },
    },
  },
};

/**
 * Multilingual stage - generates translations for additional languages
 */
export const multilingualStage: PipelineStage = {
  name: 'multilingual',
  description: 'Generate translations for additional target languages',

  async run(config: PipelineConfig, context: PipelineContext): Promise<void> {
    const outputDir = path.join(config.outputDir, 'translations');

    // Process each configured target language beyond English
    const additionalLanguages = config.targetLanguages.filter(l => l !== 'en');

    for (const langCode of additionalLanguages) {
      const langConfig = TARGET_LANGUAGES[langCode];
      if (!langConfig) {
        context.warnings.push(`Unknown language code: ${langCode}`);
        continue;
      }

      console.log(`  Processing ${langConfig.name} (${langCode})...`);

      const langDir = path.join(outputDir, langCode);
      if (!fs.existsSync(langDir)) {
        fs.mkdirSync(langDir, { recursive: true });
      }

      // Generate language pack metadata
      const metadata: LanguagePackMetadata = {
        languageCode: langCode,
        languageName: langConfig.name,
        nativeName: langConfig.nativeName,
        direction: langConfig.direction,
        script: langConfig.script,
        version: '0.1.0',
        status: 'draft',
        includedBooks: ['Gen', 'John'],
        completion: {
          totalVerses: 2,
          translatedVerses: 2,
          reviewedVerses: 0,
          percentComplete: 100,
        },
        contributors: [],
        translationEngine: {
          id: 'multilingual-stub',
          version: '0.1.0',
        },
        license: {
          type: 'CC BY 4.0',
          url: 'https://creativecommons.org/licenses/by/4.0/',
        },
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        overrideFile: `overrides/${langCode}.json`,
      };

      // Write language metadata
      const metadataPath = path.join(langDir, 'metadata.json');
      fs.writeFileSync(metadataPath, JSON.stringify(metadata, null, 2));

      // Write sample translations
      const genTranslations = SAMPLE_MULTILINGUAL_TRANSLATIONS[langCode] || {};
      const johnTranslations = SAMPLE_JOHN_TRANSLATIONS[langCode] || {};

      if (Object.keys(genTranslations).length > 0) {
        const genPath = path.join(langDir, 'Gen.translations.json');
        fs.writeFileSync(genPath, JSON.stringify(genTranslations, null, 2));
      }

      if (Object.keys(johnTranslations).length > 0) {
        const johnPath = path.join(langDir, 'John.translations.json');
        fs.writeFileSync(johnPath, JSON.stringify(johnTranslations, null, 2));
      }

      // Create empty override file
      const overridesDir = path.join(langDir, 'overrides');
      if (!fs.existsSync(overridesDir)) {
        fs.mkdirSync(overridesDir, { recursive: true });
      }
      const overridePath = path.join(overridesDir, `${langCode}.json`);
      if (!fs.existsSync(overridePath)) {
        const emptyOverrides = {
          languageCode: langCode,
          overrides: [],
          count: 0,
          lastUpdated: new Date().toISOString(),
        };
        fs.writeFileSync(overridePath, JSON.stringify(emptyOverrides, null, 2));
      }
    }

    console.log(`  Processed ${additionalLanguages.length} additional languages`);
  },
};

/**
 * Get available target languages
 */
export function getAvailableLanguages(): Array<{
  code: string;
  name: string;
  nativeName: string;
  direction: 'ltr' | 'rtl';
}> {
  return Object.values(TARGET_LANGUAGES);
}

/**
 * Check if a language is supported
 */
export function isLanguageSupported(code: string): boolean {
  return code in TARGET_LANGUAGES;
}
