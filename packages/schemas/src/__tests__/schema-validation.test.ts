import { describe, it, expect } from 'vitest';
import {
  SourceToken,
  Morphology,
  VerseTranslation,
  StudyNote,
  NoteCategory,
  PartOfSpeech,
  AlignmentMapping,
  VariantUnit,
  SourceLanguage,
  ConfidenceLevel,
  TranslationLayerType,
  AlignmentType,
} from '../index';
import {
  validateSourceToken,
  validateTranslation,
  validateAlignment,
  validateNotes,
  validateVariants,
  validateVerseRef,
  batchValidate,
} from '../validators';

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function makeSourceToken(overrides: Record<string, unknown> = {}) {
  return {
    id: 'Gen.1.1.0',
    language: 'hebrew',
    text: '\u05D1\u05E8\u05D0\u05E9\u05D9\u05EA', // bereshit
    transliteration: "b'reshit",
    lemma: '\u05E8\u05D0\u05E9\u05D9\u05EA',
    gloss: 'beginning',
    position: 0,
    ...overrides,
  };
}

function makeStudyNote(overrides: Record<string, unknown> = {}) {
  return {
    id: 'note-1',
    verseRef: 'Gen.1.1',
    category: 'translation-choice',
    title: 'Word choice for reshit',
    content: 'The Hebrew word reshit can mean beginning or first.',
    confidence: 'high',
    authorType: 'ai',
    metadata: {
      generatedAt: '2025-01-01T00:00:00Z',
    },
    ...overrides,
  };
}

// ---------------------------------------------------------------------------
// SourceToken validation
// ---------------------------------------------------------------------------

describe('SourceToken validation', () => {
  it('accepts a valid minimal SourceToken', () => {
    const result = SourceToken.safeParse(makeSourceToken());
    expect(result.success).toBe(true);
  });

  it('accepts a SourceToken with morphology and lexicon refs', () => {
    const token = makeSourceToken({
      morphology: {
        pos: 'noun',
        gender: 'feminine',
        number: 'singular',
        state: 'construct',
      },
      lexiconRefs: [{ lexicon: 'strongs', entryId: 'H7225' }],
      strongs: 'H7225',
      isCompound: false,
    });
    const result = SourceToken.safeParse(token);
    expect(result.success).toBe(true);
  });

  it('rejects a SourceToken missing required fields', () => {
    const result = SourceToken.safeParse({ id: 'Gen.1.1.0' });
    expect(result.success).toBe(false);
  });

  it('rejects a SourceToken with invalid language', () => {
    const result = SourceToken.safeParse(makeSourceToken({ language: 'latin' }));
    expect(result.success).toBe(false);
  });

  it('rejects a SourceToken with negative position', () => {
    const result = SourceToken.safeParse(makeSourceToken({ position: -1 }));
    expect(result.success).toBe(false);
  });
});

// ---------------------------------------------------------------------------
// Morphology validation
// ---------------------------------------------------------------------------

describe('Morphology validation', () => {
  it('accepts a valid Hebrew verb morphology', () => {
    const morph = {
      pos: 'verb',
      person: '3',
      gender: 'masculine',
      number: 'singular',
      tense: 'perfect',
      voice: 'active',
      stem: 'qal',
    };
    const result = Morphology.safeParse(morph);
    expect(result.success).toBe(true);
  });

  it('accepts Hebrew mood with cohortative', () => {
    const morph = {
      pos: 'verb',
      mood: 'cohortative',
      person: '1',
      number: 'singular',
    };
    const result = Morphology.safeParse(morph);
    expect(result.success).toBe(true);
  });

  it('accepts Greek case nominative', () => {
    const morph = {
      pos: 'noun',
      case: 'nominative',
      gender: 'masculine',
      number: 'singular',
    };
    const result = Morphology.safeParse(morph);
    expect(result.success).toBe(true);
  });

  it('accepts Greek case genitive', () => {
    const morph = {
      pos: 'noun',
      case: 'genitive',
      gender: 'neuter',
      number: 'plural',
    };
    const result = Morphology.safeParse(morph);
    expect(result.success).toBe(true);
  });

  it('rejects invalid part of speech', () => {
    const morph = { pos: 'determiner' };
    const result = Morphology.safeParse(morph);
    expect(result.success).toBe(false);
  });

  it('rejects invalid case value', () => {
    const morph = { pos: 'noun', case: 'ablative' };
    const result = Morphology.safeParse(morph);
    expect(result.success).toBe(false);
  });
});

// ---------------------------------------------------------------------------
// VerseTranslation validation
// ---------------------------------------------------------------------------

describe('VerseTranslation validation', () => {
  it('accepts a valid VerseTranslation with all layers', () => {
    const makeLayer = (type: string) => ({
      type,
      targetLanguage: 'en',
      spans: [
        {
          id: `Gen.1.1.en.${type}.0`,
          text: 'In the beginning',
          position: 0,
          sourceTokenIds: ['Gen.1.1.0'],
          confidence: 'high',
        },
      ],
      text: 'In the beginning',
      overallConfidence: 'high',
      humanReviewed: false,
    });

    const translation = {
      verseRef: 'Gen.1.1',
      targetLanguage: 'en',
      profile: 'academic',
      layers: {
        literal: makeLayer('literal'),
        idiomatic: makeLayer('idiomatic'),
        literary: makeLayer('literary'),
      },
      metadata: {
        pipelineVersion: '0.1.0',
        generatedAt: '2025-01-01T00:00:00Z',
        engineId: 'stub',
        engineVersion: '0.1.0',
        sourceDataVersion: '1.0.0',
      },
    };

    const result = VerseTranslation.safeParse(translation);
    expect(result.success).toBe(true);
  });

  it('accepts a VerseTranslation with only one layer', () => {
    const translation = {
      verseRef: 'Gen.1.1',
      targetLanguage: 'en',
      profile: 'readability',
      layers: {
        idiomatic: {
          type: 'idiomatic',
          targetLanguage: 'en',
          spans: [],
          text: '',
          overallConfidence: 'medium',
          humanReviewed: false,
        },
      },
      metadata: {
        pipelineVersion: '0.1.0',
        generatedAt: '2025-01-01T00:00:00Z',
        engineId: 'stub',
        engineVersion: '0.1.0',
        sourceDataVersion: '1.0.0',
      },
    };

    const result = VerseTranslation.safeParse(translation);
    expect(result.success).toBe(true);
  });

  it('rejects a VerseTranslation with invalid profile', () => {
    const result = VerseTranslation.safeParse({
      verseRef: 'Gen.1.1',
      targetLanguage: 'en',
      profile: 'casual', // not a valid profile
      layers: {},
      metadata: {
        pipelineVersion: '0.1.0',
        generatedAt: '2025-01-01T00:00:00Z',
        engineId: 'stub',
        engineVersion: '0.1.0',
        sourceDataVersion: '1.0.0',
      },
    });
    expect(result.success).toBe(false);
  });
});

// ---------------------------------------------------------------------------
// StudyNote validation
// ---------------------------------------------------------------------------

describe('StudyNote validation', () => {
  it('accepts a valid StudyNote with translation-choice category', () => {
    const result = StudyNote.safeParse(makeStudyNote());
    expect(result.success).toBe(true);
  });

  it('accepts a StudyNote with historical category', () => {
    const result = StudyNote.safeParse(makeStudyNote({ category: 'historical' }));
    expect(result.success).toBe(true);
  });

  it('accepts a StudyNote with structural category', () => {
    const result = StudyNote.safeParse(makeStudyNote({ category: 'structural' }));
    expect(result.success).toBe(true);
  });

  it('accepts a StudyNote with chronological category', () => {
    const result = StudyNote.safeParse(makeStudyNote({ category: 'chronological' }));
    expect(result.success).toBe(true);
  });

  it('accepts a StudyNote with geographical category', () => {
    const result = StudyNote.safeParse(makeStudyNote({ category: 'geographical' }));
    expect(result.success).toBe(true);
  });

  it('accepts a StudyNote with narrative category', () => {
    const result = StudyNote.safeParse(makeStudyNote({ category: 'narrative' }));
    expect(result.success).toBe(true);
  });

  it('accepts a StudyNote with intertextual category', () => {
    const result = StudyNote.safeParse(makeStudyNote({ category: 'intertextual' }));
    expect(result.success).toBe(true);
  });

  it('rejects a StudyNote with invalid category', () => {
    const result = StudyNote.safeParse(makeStudyNote({ category: 'random' }));
    expect(result.success).toBe(false);
  });
});

// ---------------------------------------------------------------------------
// NoteCategory enum
// ---------------------------------------------------------------------------

describe('NoteCategory enum', () => {
  it('includes all expected category values', () => {
    const expectedCategories = [
      'translation-choice',
      'alternative',
      'grammatical',
      'lexical',
      'cultural',
      'theological',
      'textual',
      'interpretive',
      'cross-reference',
      'idiom',
      'uncertain',
      'historical',
      'structural',
      'chronological',
      'geographical',
      'narrative',
      'intertextual',
    ];
    for (const cat of expectedCategories) {
      expect(NoteCategory.safeParse(cat).success).toBe(true);
    }
  });
});

// ---------------------------------------------------------------------------
// PartOfSpeech enum
// ---------------------------------------------------------------------------

describe('PartOfSpeech enum', () => {
  it('includes proper_noun', () => {
    expect(PartOfSpeech.safeParse('proper_noun').success).toBe(true);
  });

  it('includes interrogative', () => {
    expect(PartOfSpeech.safeParse('interrogative').success).toBe(true);
  });

  it('includes relative_particle', () => {
    expect(PartOfSpeech.safeParse('relative_particle').success).toBe(true);
  });

  it('rejects unknown POS values not in the enum', () => {
    expect(PartOfSpeech.safeParse('determiner').success).toBe(false);
  });
});

// ---------------------------------------------------------------------------
// Alignment validation
// ---------------------------------------------------------------------------

describe('Alignment validation', () => {
  it('accepts a valid AlignmentMapping', () => {
    const mapping = {
      id: 'align-1',
      sourceTokenIds: ['Gen.1.1.0'],
      targetSpanId: 'Gen.1.1.en.literal.0',
      type: 'direct',
      confidence: 'high',
    };
    const result = AlignmentMapping.safeParse(mapping);
    expect(result.success).toBe(true);
  });

  it('rejects an AlignmentMapping with invalid type', () => {
    const mapping = {
      id: 'align-1',
      sourceTokenIds: ['Gen.1.1.0'],
      targetSpanId: 'span-0',
      type: 'unknown-type',
      confidence: 'high',
    };
    const result = AlignmentMapping.safeParse(mapping);
    expect(result.success).toBe(false);
  });

  it('validates all alignment types', () => {
    const types = ['direct', 'phrase', 'expansion', 'idiom', 'implicit', 'reorder'];
    for (const t of types) {
      expect(AlignmentType.safeParse(t).success).toBe(true);
    }
  });
});

// ---------------------------------------------------------------------------
// Variant validation
// ---------------------------------------------------------------------------

describe('Variant validation', () => {
  it('accepts a valid VariantUnit', () => {
    const variant = {
      id: 'var-1',
      verseRef: 'John.1.18',
      sourceTokenIds: ['John.1.18.3'],
      startPosition: 3,
      endPosition: 3,
      readings: [
        {
          id: 'reading-1',
          text: '\u03BC\u03BF\u03BD\u03BF\u03B3\u03B5\u03BD\u03AE\u03C2 \u03B8\u03B5\u03CC\u03C2',
          transliteration: 'monogenes theos',
          witnesses: ['P66', 'P75', 'B'],
          traditions: ['Alexandrian'],
          isPrimary: true,
        },
        {
          id: 'reading-2',
          text: '\u03BC\u03BF\u03BD\u03BF\u03B3\u03B5\u03BD\u03AE\u03C2 \u03C5\u1F31\u03CC\u03C2',
          transliteration: 'monogenes huios',
          witnesses: ['A', 'C'],
          traditions: ['Byzantine'],
          isPrimary: false,
        },
      ],
      significance: 'major',
      impactExplanation: 'Affects whether the passage reads "only-begotten God" or "only-begotten Son".',
      category: 'substitution',
    };
    const result = VariantUnit.safeParse(variant);
    expect(result.success).toBe(true);
  });

  it('rejects a VariantUnit with invalid significance', () => {
    const variant = {
      id: 'var-1',
      verseRef: 'Gen.1.1',
      sourceTokenIds: ['Gen.1.1.0'],
      startPosition: 0,
      endPosition: 0,
      readings: [],
      significance: 'critical', // not in enum
      impactExplanation: 'test',
      category: 'addition',
    };
    const result = VariantUnit.safeParse(variant);
    expect(result.success).toBe(false);
  });
});

// ---------------------------------------------------------------------------
// Validators utility functions
// ---------------------------------------------------------------------------

describe('validateVerseRef', () => {
  it('accepts valid verse references', () => {
    expect(validateVerseRef('Gen.1.1')).toBe(true);
    expect(validateVerseRef('Matt.28.20')).toBe(true);
    expect(validateVerseRef('Psa.119.176')).toBe(true);
  });

  it('rejects invalid verse references', () => {
    expect(validateVerseRef('gen.1.1')).toBe(false); // lowercase first char
    expect(validateVerseRef('Gen11')).toBe(false);    // missing dots
    expect(validateVerseRef('')).toBe(false);
  });
});

describe('validateSourceToken function', () => {
  it('returns valid:true for a correct token', () => {
    const result = validateSourceToken(makeSourceToken());
    expect(result.valid).toBe(true);
    expect(result.errors).toHaveLength(0);
  });

  it('returns valid:false with errors for an incorrect token', () => {
    const result = validateSourceToken({ id: 'bad' });
    expect(result.valid).toBe(false);
    expect(result.errors.length).toBeGreaterThan(0);
  });
});

describe('batchValidate', () => {
  it('reports correct counts for mixed valid/invalid items', () => {
    const items = [makeSourceToken(), { id: 'bad' }, makeSourceToken({ id: 'Gen.1.1.1' })];
    const result = batchValidate(items, validateSourceToken);
    expect(result.totalItems).toBe(3);
    expect(result.validItems).toBe(2);
    expect(result.invalidItems).toBe(1);
  });
});
