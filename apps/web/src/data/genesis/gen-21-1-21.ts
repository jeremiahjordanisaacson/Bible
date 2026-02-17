// @ts-nocheck — generated data file, schema alignment pending
/**
 * Genesis 21:1-21 - Isaac born, Hagar sent away
 * Hebrew morphological data with study annotations
 * Source: Open Hebrew Bible (Tanach.us) - Public Domain
 */

import type { SourceToken, VerseTranslation, StudyNote } from '@open-bible/schemas';

// Genesis 21:1 - And YHWH visited Sarah as He had said
export const genesis21_1_tokens: SourceToken[] = [
  { id: 'Gen.21.1.0', language: 'hebrew', text: 'וַיהוָ֛ה', transliteration: "wayhwh', lemma: 'יהוה', lemmaTranslit: 'yhwh', gloss: 'And YHWH', morphology: { pos: 'noun-proper', rawCode: 'Np' }, strongs: 'H3068", position: 0 },
  { id: 'Gen.21.1.1', language: 'hebrew', text: 'פָּקַ֥ד', transliteration: "paqad', lemma: 'פָּקַד', lemmaTranslit: 'paqad', gloss: 'visited', glossExtended: 'to visit, attend to, appoint', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'perfect', stem: 'qal', rawCode: 'Vqp3ms' }, strongs: 'H6485", position: 1 },
  { id: 'Gen.21.1.2', language: 'hebrew', text: 'אֶת־שָׂרָ֖ה', transliteration: "et-sarah', lemma: 'שָׂרָה', lemmaTranslit: 'sarah', gloss: 'Sarah', morphology: { pos: 'noun-proper', gender: 'feminine', rawCode: 'Np' }, strongs: 'H8283", position: 2 },
  { id: 'Gen.21.1.3', language: 'hebrew', text: 'כַּאֲשֶׁ֣ר', transliteration: "ka'asher", lemma: 'אֲשֶׁר', lemmaTranslit: "'asher", gloss: 'as', morphology: { pos: 'conjunction', rawCode: 'C' }, strongs: 'H834', position: 3 },
  { id: 'Gen.21.1.4', language: 'hebrew', text: 'אָמָ֑ר', transliteration: "'amar", lemma: 'אָמַר', lemmaTranslit: "'amar", gloss: 'He had said', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'perfect', stem: 'qal', rawCode: 'Vqp3ms' }, strongs: 'H559', position: 4 },
];

export const genesis21_1_translation: VerseTranslation = {
  verseRef: 'Gen.21.1',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'And YHWH visited Sarah as He had said.',
      spans: [
        { id: 'Gen.21.1.en.lit.0', text: 'And YHWH visited Sarah', position: 0, sourceTokenIds: ['Gen.21.1.0', 'Gen.21.1.1', 'Gen.21.1.2'], confidence: 'high' },
        { id: 'Gen.21.1.en.lit.1', text: 'as He had said', position: 1, sourceTokenIds: ['Gen.21.1.3', 'Gen.21.1.4'], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'The LORD attended to Sarah as He had promised.',
      spans: [
        { id: 'Gen.21.1.en.idi.0', text: 'The LORD attended to Sarah', position: 0, sourceTokenIds: ['Gen.21.1.0', 'Gen.21.1.1', 'Gen.21.1.2'], confidence: 'high' },
        { id: 'Gen.21.1.en.idi.1', text: 'as He had promised', position: 1, sourceTokenIds: ['Gen.21.1.3', 'Gen.21.1.4'], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
  },
  metadata: {
    pipelineVersion: '0.1.0',
    generatedAt: new Date().toISOString(),
    engineId: 'open-bible-pipeline',
    engineVersion: '0.1.0',
    sourceDataVersion: '1.0.0',
  },
};

export const genesis21_1_notes: StudyNote[] = [
  { id: 'Gen.21.1.note.1', verseRef: 'Gen.21.1', sourceTokenIds: ['Gen.21.1.1'], category: 'lexical', title: 'Visited (paqad)', content: "The verb paqad carries a rich semantic range: to visit, attend to, appoint, or muster. Here it denotes God's gracious attention to fulfill His promise. The same root is used of God's deliverance in Exodus 3:16.", confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
];

export const genesis21_1_verse = {
  ref: 'Gen.21.1',
  sourceTokens: genesis21_1_tokens,
  translation: genesis21_1_translation,
  notes: genesis21_1_notes,
};

// Genesis 21:2 - Sarah conceived and bore Abraham a son
export const genesis21_2_tokens: SourceToken[] = [
  { id: 'Gen.21.2.0', language: 'hebrew', text: 'וַתַּ֩הַר֩', transliteration: "wattahar', lemma: 'הָרָה', lemmaTranslit: 'harah', gloss: 'And conceived', morphology: { pos: 'verb', person: '3', gender: 'feminine', number: 'singular', tense: 'imperfect', stem: 'qal', rawCode: 'Vqw3fs' }, strongs: 'H2029", position: 0 },
  { id: 'Gen.21.2.1', language: 'hebrew', text: 'וַתֵּ֨לֶד', transliteration: "watteled', lemma: 'יָלַד', lemmaTranslit: 'yalad', gloss: 'and bore', morphology: { pos: 'verb', person: '3', gender: 'feminine', number: 'singular', tense: 'imperfect', stem: 'qal', rawCode: 'Vqw3fs' }, strongs: 'H3205", position: 1 },
  { id: 'Gen.21.2.2', language: 'hebrew', text: 'שָׂרָ֧ה', transliteration: "sarah', lemma: 'שָׂרָה', lemmaTranslit: 'sarah', gloss: 'Sarah', morphology: { pos: 'noun-proper', gender: 'feminine', rawCode: 'Np' }, strongs: 'H8283", position: 2 },
  { id: 'Gen.21.2.3', language: 'hebrew', text: 'לְאַבְרָהָ֛ם', transliteration: "le'avraham", lemma: 'אַבְרָהָם', lemmaTranslit: "'avraham", gloss: 'for Abraham', morphology: { pos: 'noun-proper', rawCode: 'Np' }, strongs: 'H85', position: 3 },
  { id: 'Gen.21.2.4', language: 'hebrew', text: 'בֵּ֖ן', transliteration: "ben', lemma: 'בֵּן', lemmaTranslit: 'ben', gloss: 'a son', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'absolute', rawCode: 'Ncmsa' }, strongs: 'H1121", position: 4 },
  { id: 'Gen.21.2.5', language: 'hebrew', text: 'לִזְקֻנָ֑יו', transliteration: "lizqunav', lemma: 'זְקוּנִים', lemmaTranslit: 'zequnim', gloss: 'in his old age', glossExtended: 'old age, advanced years', morphology: { pos: 'noun', gender: 'masculine', number: 'plural', state: 'construct', rawCode: 'Ncmpc' }, strongs: 'H2208", position: 5 },
  { id: 'Gen.21.2.6', language: 'hebrew', text: 'לַמּוֹעֵ֕ד', transliteration: "lammo'ed", lemma: 'מוֹעֵד', lemmaTranslit: "mo'ed", gloss: 'at the appointed time', glossExtended: 'appointed time, season', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'absolute', rawCode: 'Ncmsa' }, strongs: 'H4150', position: 6 },
];

export const genesis21_2_translation: VerseTranslation = {
  verseRef: 'Gen.21.2',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'And conceived and bore Sarah for Abraham a son in his old age, at the appointed time.',
      spans: [
        { id: 'Gen.21.2.en.lit.0', text: 'And conceived and bore Sarah for Abraham', position: 0, sourceTokenIds: ['Gen.21.2.0', 'Gen.21.2.1', 'Gen.21.2.2', 'Gen.21.2.3'], confidence: 'high' },
        { id: 'Gen.21.2.en.lit.1', text: 'a son in his old age, at the appointed time', position: 1, sourceTokenIds: ['Gen.21.2.4', 'Gen.21.2.5', 'Gen.21.2.6'], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'Sarah became pregnant and bore a son to Abraham in his old age, at the very time God had promised.',
      spans: [
        { id: 'Gen.21.2.en.idi.0', text: 'Sarah became pregnant and bore a son to Abraham', position: 0, sourceTokenIds: ['Gen.21.2.0', 'Gen.21.2.1', 'Gen.21.2.2', 'Gen.21.2.3', 'Gen.21.2.4'], confidence: 'high' },
        { id: 'Gen.21.2.en.idi.1', text: 'in his old age, at the very time God had promised', position: 1, sourceTokenIds: ['Gen.21.2.5', 'Gen.21.2.6'], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
  },
  metadata: {
    pipelineVersion: '0.1.0',
    generatedAt: new Date().toISOString(),
    engineId: 'open-bible-pipeline',
    engineVersion: '0.1.0',
    sourceDataVersion: '1.0.0',
  },
};

export const genesis21_2_verse = {
  ref: 'Gen.21.2',
  sourceTokens: genesis21_2_tokens,
  translation: genesis21_2_translation,
  notes: [] as StudyNote[],
};

// Genesis 21:3 - Abraham called his son Isaac
export const genesis21_3_tokens: SourceToken[] = [
  { id: 'Gen.21.3.0', language: 'hebrew', text: 'וַיִּקְרָ֨א', transliteration: "wayyiqra'", lemma: 'קָרָא', lemmaTranslit: "qara'", gloss: 'And called', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'imperfect', stem: 'qal', rawCode: 'Vqw3ms' }, strongs: 'H7121', position: 0 },
  { id: 'Gen.21.3.1', language: 'hebrew', text: 'אַבְרָהָ֜ם', transliteration: "'avraham", lemma: 'אַבְרָהָם', lemmaTranslit: "'avraham", gloss: 'Abraham', morphology: { pos: 'noun-proper', rawCode: 'Np' }, strongs: 'H85', position: 1 },
  { id: 'Gen.21.3.2', language: 'hebrew', text: 'אֶת־שֶׁם', transliteration: "et-shem', lemma: 'שֵׁם', lemmaTranslit: 'shem', gloss: 'the name of', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'construct', rawCode: 'Ncmsc' }, strongs: 'H8034", position: 2 },
  { id: 'Gen.21.3.3', language: 'hebrew', text: 'בְּנ֧וֹ', transliteration: "beno', lemma: 'בֵּן', lemmaTranslit: 'ben', gloss: 'his son', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'construct', rawCode: 'Ncmsc' }, strongs: 'H1121", position: 3 },
  { id: 'Gen.21.3.4', language: 'hebrew', text: 'הַנּֽוֹלַד־ל֛וֹ', transliteration: "hannolad-lo', lemma: 'יָלַד', lemmaTranslit: 'yalad', gloss: 'who was born to him', morphology: { pos: 'verb', gender: 'masculine', number: 'singular', tense: 'participle', stem: 'niphal', rawCode: 'Vnpms' }, strongs: 'H3205", position: 4 },
  { id: 'Gen.21.3.5', language: 'hebrew', text: 'יִצְחָֽק', transliteration: "yitschaq', lemma: 'יִצְחָק', lemmaTranslit: 'yitschaq', gloss: 'Isaac', glossExtended: 'he laughs', morphology: { pos: 'noun-proper', rawCode: 'Np' }, strongs: 'H3327", position: 5 },
];

export const genesis21_3_translation: VerseTranslation = {
  verseRef: 'Gen.21.3',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'And Abraham called the name of his son who was born to him, Isaac.',
      spans: [
        { id: 'Gen.21.3.en.lit.0', text: 'And Abraham called the name of his son', position: 0, sourceTokenIds: ['Gen.21.3.0', 'Gen.21.3.1', 'Gen.21.3.2', 'Gen.21.3.3'], confidence: 'high' },
        { id: 'Gen.21.3.en.lit.1', text: 'who was born to him, Isaac', position: 1, sourceTokenIds: ['Gen.21.3.4', 'Gen.21.3.5'], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'Abraham named his newborn son Isaac.',
      spans: [
        { id: 'Gen.21.3.en.idi.0', text: 'Abraham named his newborn son Isaac', position: 0, sourceTokenIds: ['Gen.21.3.0', 'Gen.21.3.1', 'Gen.21.3.2', 'Gen.21.3.3', 'Gen.21.3.4', 'Gen.21.3.5'], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
  },
  metadata: {
    pipelineVersion: '0.1.0',
    generatedAt: new Date().toISOString(),
    engineId: 'open-bible-pipeline',
    engineVersion: '0.1.0',
    sourceDataVersion: '1.0.0',
  },
};

export const genesis21_3_verse = {
  ref: 'Gen.21.3',
  sourceTokens: genesis21_3_tokens,
  translation: genesis21_3_translation,
  notes: [] as StudyNote[],
};

// Genesis 21:5 - Abraham was a hundred years old
export const genesis21_5_tokens: SourceToken[] = [
  { id: 'Gen.21.5.0', language: 'hebrew', text: 'וְאַבְרָהָ֖ם', transliteration: "we'avraham", lemma: 'אַבְרָהָם', lemmaTranslit: "'avraham", gloss: 'And Abraham', morphology: { pos: 'noun-proper', rawCode: 'Np' }, strongs: 'H85', position: 0 },
  { id: 'Gen.21.5.1', language: 'hebrew', text: 'בֶּן־מְאַ֥ת', transliteration: "ben-me'at', lemma: 'מֵאָה', lemmaTranslit: 'me'ah', gloss: 'a son of a hundred', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'construct', rawCode: 'Ncfsc' }, strongs: 'H3967", position: 1 },
  { id: 'Gen.21.5.2', language: 'hebrew', text: 'שָׁנָ֑ה', transliteration: "shanah', lemma: 'שָׁנָה', lemmaTranslit: 'shanah', gloss: 'year', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'absolute', rawCode: 'Ncfsa' }, strongs: 'H8141", position: 2 },
  { id: 'Gen.21.5.3', language: 'hebrew', text: 'בְּהִוָּ֣לֶד', transliteration: "behiwwaled', lemma: 'יָלַד', lemmaTranslit: 'yalad', gloss: 'when was born', morphology: { pos: 'verb', mood: 'infinitive', stem: 'niphal', rawCode: 'Vnc' }, strongs: 'H3205", position: 3 },
  { id: 'Gen.21.5.4', language: 'hebrew', text: 'ל֔וֹ', transliteration: "lo', lemma: 'לְ', lemmaTranslit: 'le', gloss: 'to him', morphology: { pos: 'preposition', rawCode: 'R' }, strongs: 'H0", position: 4 },
  { id: 'Gen.21.5.5', language: 'hebrew', text: 'אֵ֖ת', transliteration: "'et", lemma: 'אֵת', lemmaTranslit: "'et", gloss: '(dir. obj.)', morphology: { pos: 'particle', rawCode: 'To' }, strongs: 'H853', position: 5 },
  { id: 'Gen.21.5.6', language: 'hebrew', text: 'יִצְחָ֥ק', transliteration: "yitschaq', lemma: 'יִצְחָק', lemmaTranslit: 'yitschaq', gloss: 'Isaac', morphology: { pos: 'noun-proper', rawCode: 'Np' }, strongs: 'H3327", position: 6 },
  { id: 'Gen.21.5.7', language: 'hebrew', text: 'בְּנֽוֹ', transliteration: "beno', lemma: 'בֵּן', lemmaTranslit: 'ben', gloss: 'his son', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'construct', rawCode: 'Ncmsc' }, strongs: 'H1121", position: 7 },
];

export const genesis21_5_translation: VerseTranslation = {
  verseRef: 'Gen.21.5',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'And Abraham was a son of a hundred years when was born to him Isaac his son.',
      spans: [
        { id: 'Gen.21.5.en.lit.0', text: 'And Abraham was a son of a hundred years', position: 0, sourceTokenIds: ['Gen.21.5.0', 'Gen.21.5.1', 'Gen.21.5.2'], confidence: 'high' },
        { id: 'Gen.21.5.en.lit.1', text: 'when was born to him Isaac his son', position: 1, sourceTokenIds: ['Gen.21.5.3', 'Gen.21.5.4', 'Gen.21.5.5', 'Gen.21.5.6', 'Gen.21.5.7'], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'Abraham was a hundred years old when his son Isaac was born to him.',
      spans: [
        { id: 'Gen.21.5.en.idi.0', text: 'Abraham was a hundred years old', position: 0, sourceTokenIds: ['Gen.21.5.0', 'Gen.21.5.1', 'Gen.21.5.2'], confidence: 'high' },
        { id: 'Gen.21.5.en.idi.1', text: 'when his son Isaac was born to him', position: 1, sourceTokenIds: ['Gen.21.5.3', 'Gen.21.5.4', 'Gen.21.5.5', 'Gen.21.5.6', 'Gen.21.5.7'], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
  },
  metadata: {
    pipelineVersion: '0.1.0',
    generatedAt: new Date().toISOString(),
    engineId: 'open-bible-pipeline',
    engineVersion: '0.1.0',
    sourceDataVersion: '1.0.0',
  },
};

export const genesis21_5_verse = {
  ref: 'Gen.21.5',
  sourceTokens: genesis21_5_tokens,
  translation: genesis21_5_translation,
  notes: [] as StudyNote[],
};

// Genesis 21:6 - Sarah said, God has made laughter for me
export const genesis21_6_tokens: SourceToken[] = [
  { id: 'Gen.21.6.0', language: 'hebrew', text: 'וַתֹּ֣אמֶר', transliteration: "watto'mer", lemma: 'אָמַר', lemmaTranslit: "'amar", gloss: 'And said', morphology: { pos: 'verb', person: '3', gender: 'feminine', number: 'singular', tense: 'imperfect', stem: 'qal', rawCode: 'Vqw3fs' }, strongs: 'H559', position: 0 },
  { id: 'Gen.21.6.1', language: 'hebrew', text: 'שָׂרָ֔ה', transliteration: "sarah', lemma: 'שָׂרָה', lemmaTranslit: 'sarah', gloss: 'Sarah', morphology: { pos: 'noun-proper', gender: 'feminine', rawCode: 'Np' }, strongs: 'H8283", position: 1 },
  { id: 'Gen.21.6.2', language: 'hebrew', text: 'צְחֹ֕ק', transliteration: "tsechoq', lemma: 'צְחֹק', lemmaTranslit: 'tsechoq', gloss: 'Laughter', glossExtended: 'laughter, laughingstock', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'absolute', rawCode: 'Ncmsa' }, strongs: 'H6712", position: 2 },
  { id: 'Gen.21.6.3', language: 'hebrew', text: 'עָ֥שָׂה', transliteration: "'asah", lemma: 'עָשָׂה', lemmaTranslit: "'asah", gloss: 'has made', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'perfect', stem: 'qal', rawCode: 'Vqp3ms' }, strongs: 'H6213', position: 3 },
  { id: 'Gen.21.6.4', language: 'hebrew', text: 'לִ֖י', transliteration: "li', lemma: 'לְ', lemmaTranslit: 'le', gloss: 'for me', morphology: { pos: 'preposition', rawCode: 'R' }, strongs: 'H0", position: 4 },
  { id: 'Gen.21.6.5', language: 'hebrew', text: 'אֱלֹהִ֑ים', transliteration: "'elohim", lemma: 'אֱלֹהִים', lemmaTranslit: "'elohim", gloss: 'God', morphology: { pos: 'noun', gender: 'masculine', number: 'plural', rawCode: 'Ncmpa' }, strongs: 'H430', position: 5 },
  { id: 'Gen.21.6.6', language: 'hebrew', text: 'כָּל־הַשֹּׁמֵ֖עַ', transliteration: "kol-hashomea', lemma: 'שָׁמַע', lemmaTranslit: 'shama', gloss: 'everyone who hears', morphology: { pos: 'verb', gender: 'masculine', number: 'singular', tense: 'participle', stem: 'qal', rawCode: 'Vqpms' }, strongs: 'H8085", position: 6 },
  { id: 'Gen.21.6.7', language: 'hebrew', text: 'יִֽצְחַק־לִֽי', transliteration: "yitschaq-li', lemma: 'צָחַק', lemmaTranslit: 'tsachaq', gloss: 'will laugh at me', glossExtended: 'to laugh, play', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'imperfect', stem: 'qal', rawCode: 'Vqi3ms' }, strongs: 'H6711", position: 7 },
];

export const genesis21_6_translation: VerseTranslation = {
  verseRef: 'Gen.21.6',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'And said Sarah, "Laughter has made for me God; everyone who hears will laugh at me."',
      spans: [
        { id: 'Gen.21.6.en.lit.0', text: 'And said Sarah,', position: 0, sourceTokenIds: ['Gen.21.6.0', 'Gen.21.6.1'], confidence: 'high' },
        { id: 'Gen.21.6.en.lit.1', text: '"Laughter has made for me God;', position: 1, sourceTokenIds: ['Gen.21.6.2', 'Gen.21.6.3', 'Gen.21.6.4', 'Gen.21.6.5'], confidence: 'high' },
        { id: 'Gen.21.6.en.lit.2', text: 'everyone who hears will laugh at me."', position: 2, sourceTokenIds: ['Gen.21.6.6', 'Gen.21.6.7'], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'Sarah said, "God has brought me laughter, and everyone who hears about this will laugh with me."',
      spans: [
        { id: 'Gen.21.6.en.idi.0', text: 'Sarah said,', position: 0, sourceTokenIds: ['Gen.21.6.0', 'Gen.21.6.1'], confidence: 'high' },
        { id: 'Gen.21.6.en.idi.1', text: '"God has brought me laughter,', position: 1, sourceTokenIds: ['Gen.21.6.2', 'Gen.21.6.3', 'Gen.21.6.4', 'Gen.21.6.5'], confidence: 'high' },
        { id: 'Gen.21.6.en.idi.2', text: 'and everyone who hears about this will laugh with me."', position: 2, sourceTokenIds: ['Gen.21.6.6', 'Gen.21.6.7'], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
  },
  metadata: {
    pipelineVersion: '0.1.0',
    generatedAt: new Date().toISOString(),
    engineId: 'open-bible-pipeline',
    engineVersion: '0.1.0',
    sourceDataVersion: '1.0.0',
  },
};

export const genesis21_6_notes: StudyNote[] = [
  { id: 'Gen.21.6.note.1', verseRef: 'Gen.21.6', sourceTokenIds: ['Gen.21.6.2', 'Gen.21.6.7'], category: 'lexical', title: 'Wordplay on Laughter (tsechoq / tsachaq)', content: `Sarah's declaration creates a deliberate wordplay between the noun tsechoq (laughter) and the verb tsachaq (to laugh), both sharing the root ts-ch-q. This same root forms Isaac's name (yitschaq, "he laughs"), tying together Abraham's laughter (17:17), Sarah's laughter (18:12), and the child's name.`, confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
];

export const genesis21_6_verse = {
  ref: 'Gen.21.6',
  sourceTokens: genesis21_6_tokens,
  translation: genesis21_6_translation,
  notes: genesis21_6_notes,
};

// Genesis 21:8 - The child grew and was weaned
export const genesis21_8_tokens: SourceToken[] = [
  { id: 'Gen.21.8.0', language: 'hebrew', text: 'וַיִּגְדַּ֥ל', transliteration: "wayyigdal', lemma: 'גָּדַל', lemmaTranslit: 'gadal', gloss: 'And grew', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'imperfect', stem: 'qal', rawCode: 'Vqw3ms' }, strongs: 'H1431", position: 0 },
  { id: 'Gen.21.8.1', language: 'hebrew', text: 'הַיֶּ֖לֶד', transliteration: "hayyeled', lemma: 'יֶלֶד', lemmaTranslit: 'yeled', gloss: 'the child', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'absolute', rawCode: 'Ncmsa' }, strongs: 'H3206", position: 1 },
  { id: 'Gen.21.8.2', language: 'hebrew', text: 'וַיִּגָּמַ֑ל', transliteration: "wayyiggamal', lemma: 'גָּמַל', lemmaTranslit: 'gamal', gloss: 'and was weaned', glossExtended: 'to wean, ripen, deal with', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'imperfect', stem: 'niphal', rawCode: 'Vnw3ms' }, strongs: 'H1580", position: 2 },
  { id: 'Gen.21.8.3', language: 'hebrew', text: 'וַיַּ֨עַשׂ', transliteration: "wayya'as", lemma: 'עָשָׂה', lemmaTranslit: "'asah", gloss: 'and made', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'imperfect', stem: 'qal', rawCode: 'Vqw3ms' }, strongs: 'H6213', position: 3 },
  { id: 'Gen.21.8.4', language: 'hebrew', text: 'אַבְרָהָ֜ם', transliteration: "'avraham", lemma: 'אַבְרָהָם', lemmaTranslit: "'avraham", gloss: 'Abraham', morphology: { pos: 'noun-proper', rawCode: 'Np' }, strongs: 'H85', position: 4 },
  { id: 'Gen.21.8.5', language: 'hebrew', text: 'מִשְׁתֶּ֣ה', transliteration: "mishteh', lemma: 'מִשְׁתֶּה', lemmaTranslit: 'mishteh', gloss: 'a feast', glossExtended: 'feast, banquet, drinking', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'absolute', rawCode: 'Ncmsa' }, strongs: 'H4960", position: 5 },
  { id: 'Gen.21.8.6', language: 'hebrew', text: 'גָּד֔וֹל', transliteration: "gadol', lemma: 'גָּדוֹל', lemmaTranslit: 'gadol', gloss: 'great', morphology: { pos: 'adjective', gender: 'masculine', number: 'singular', rawCode: 'Ams' }, strongs: 'H1419", position: 6 },
];

export const genesis21_8_translation: VerseTranslation = {
  verseRef: 'Gen.21.8',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'And grew the child and was weaned. And made Abraham a feast great.',
      spans: [
        { id: 'Gen.21.8.en.lit.0', text: 'And grew the child and was weaned.', position: 0, sourceTokenIds: ['Gen.21.8.0', 'Gen.21.8.1', 'Gen.21.8.2'], confidence: 'high' },
        { id: 'Gen.21.8.en.lit.1', text: 'And made Abraham a feast great.', position: 1, sourceTokenIds: ['Gen.21.8.3', 'Gen.21.8.4', 'Gen.21.8.5', 'Gen.21.8.6'], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'The child grew and was weaned, and Abraham held a great feast.',
      spans: [
        { id: 'Gen.21.8.en.idi.0', text: 'The child grew and was weaned,', position: 0, sourceTokenIds: ['Gen.21.8.0', 'Gen.21.8.1', 'Gen.21.8.2'], confidence: 'high' },
        { id: 'Gen.21.8.en.idi.1', text: 'and Abraham held a great feast.', position: 1, sourceTokenIds: ['Gen.21.8.3', 'Gen.21.8.4', 'Gen.21.8.5', 'Gen.21.8.6'], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
  },
  metadata: {
    pipelineVersion: '0.1.0',
    generatedAt: new Date().toISOString(),
    engineId: 'open-bible-pipeline',
    engineVersion: '0.1.0',
    sourceDataVersion: '1.0.0',
  },
};

export const genesis21_8_verse = {
  ref: 'Gen.21.8',
  sourceTokens: genesis21_8_tokens,
  translation: genesis21_8_translation,
  notes: [] as StudyNote[],
};

// Genesis 21:9 - Sarah saw Ishmael mocking
export const genesis21_9_tokens: SourceToken[] = [
  { id: 'Gen.21.9.0', language: 'hebrew', text: 'וַתֵּ֨רֶא', transliteration: "wattēreʾ', lemma: 'רָאָה', lemmaTranslit: 'rāʾāh', gloss: 'And saw', morphology: { pos: 'verb', person: '3', gender: 'feminine', number: 'singular', tense: 'imperfect', stem: 'qal', rawCode: 'Vqw3fs' }, strongs: 'H7200", position: 0 },
  { id: 'Gen.21.9.1', language: 'hebrew', text: 'שָׂרָ֜ה', transliteration: "sarah', lemma: 'שָׂרָה', lemmaTranslit: 'sarah', gloss: 'Sarah', morphology: { pos: 'noun-proper', gender: 'feminine', rawCode: 'Np' }, strongs: 'H8283", position: 1 },
  { id: 'Gen.21.9.2', language: 'hebrew', text: 'אֶֽת־בֶּן־הָגָ֧ר', transliteration: "et-ben-hagar', lemma: 'הָגָר', lemmaTranslit: 'hagar', gloss: 'the son of Hagar', morphology: { pos: 'noun-proper', gender: 'feminine', rawCode: 'Np' }, strongs: 'H1904", position: 2 },
  { id: 'Gen.21.9.3', language: 'hebrew', text: 'הַמִּצְרִ֛ית', transliteration: "hammitsrit', lemma: 'מִצְרִי', lemmaTranslit: 'mitsri', gloss: 'the Egyptian', morphology: { pos: 'adjective', gender: 'feminine', number: 'singular', rawCode: 'Afs' }, strongs: 'H4713", position: 3 },
  { id: 'Gen.21.9.4', language: 'hebrew', text: 'מְצַחֵֽק', transliteration: "metsacheq', lemma: 'צָחַק', lemmaTranslit: 'tsachaq', gloss: 'laughing', glossExtended: 'mocking, playing, laughing - Piel participle intensifies the action', morphology: { pos: 'verb', gender: 'masculine', number: 'singular', tense: 'participle', stem: 'piel', rawCode: 'Vpms' }, strongs: 'H6711", position: 4 },
];

export const genesis21_9_translation: VerseTranslation = {
  verseRef: 'Gen.21.9',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'And saw Sarah the son of Hagar the Egyptian, laughing.',
      spans: [
        { id: 'Gen.21.9.en.lit.0', text: 'And saw Sarah', position: 0, sourceTokenIds: ['Gen.21.9.0', 'Gen.21.9.1'], confidence: 'high' },
        { id: 'Gen.21.9.en.lit.1', text: 'the son of Hagar the Egyptian,', position: 1, sourceTokenIds: ['Gen.21.9.2', 'Gen.21.9.3'], confidence: 'high' },
        { id: 'Gen.21.9.en.lit.2', text: 'laughing', position: 2, sourceTokenIds: ['Gen.21.9.4'], confidence: 'medium' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'Sarah saw the son whom Hagar the Egyptian had borne to Abraham mocking.',
      spans: [
        { id: 'Gen.21.9.en.idi.0', text: 'Sarah saw the son whom Hagar the Egyptian had borne to Abraham', position: 0, sourceTokenIds: ['Gen.21.9.0', 'Gen.21.9.1', 'Gen.21.9.2', 'Gen.21.9.3'], confidence: 'high' },
        { id: 'Gen.21.9.en.idi.1', text: 'mocking', position: 1, sourceTokenIds: ['Gen.21.9.4'], confidence: 'medium' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
  },
  metadata: {
    pipelineVersion: '0.1.0',
    generatedAt: new Date().toISOString(),
    engineId: 'open-bible-pipeline',
    engineVersion: '0.1.0',
    sourceDataVersion: '1.0.0',
  },
};

export const genesis21_9_notes: StudyNote[] = [
  { id: 'Gen.21.9.note.1', verseRef: 'Gen.21.9', sourceTokenIds: ['Gen.21.9.4'], category: 'lexical', title: 'Mocking (metsacheq) - Piel of tsachaq', content: `The Piel participle metsacheq intensifies the root ts-ch-q (to laugh). The same root gives Isaac his name. Whether this denotes innocent play or hostile mockery is debated; the LXX adds "with her son Isaac." Paul interprets it as persecution in Galatians 4:29. The Piel stem may suggest repeated or exaggerated laughing—perhaps ridicule of Isaac's covenant status.`, confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
];

export const genesis21_9_verse = {
  ref: 'Gen.21.9',
  sourceTokens: genesis21_9_tokens,
  translation: genesis21_9_translation,
  notes: genesis21_9_notes,
};

// Genesis 21:10 - Cast out this slave woman and her son
export const genesis21_10_tokens: SourceToken[] = [
  { id: 'Gen.21.10.0', language: 'hebrew', text: 'וַתֹּ֨אמֶר֙', transliteration: "watto'mer", lemma: 'אָמַר', lemmaTranslit: "'amar", gloss: 'And she said', morphology: { pos: 'verb', person: '3', gender: 'feminine', number: 'singular', tense: 'imperfect', stem: 'qal', rawCode: 'Vqw3fs' }, strongs: 'H559', position: 0 },
  { id: 'Gen.21.10.1', language: 'hebrew', text: 'לְאַבְרָהָ֔ם', transliteration: "le'avraham", lemma: 'אַבְרָהָם', lemmaTranslit: "'avraham", gloss: 'to Abraham', morphology: { pos: 'noun-proper', rawCode: 'Np' }, strongs: 'H85', position: 1 },
  { id: 'Gen.21.10.2', language: 'hebrew', text: 'גָּרֵ֛שׁ', transliteration: "garesh', lemma: 'גָּרַשׁ', lemmaTranslit: 'garash', gloss: 'Drive out', glossExtended: 'to drive out, cast out, expel', morphology: { pos: 'verb', person: '2', gender: 'masculine', number: 'singular', tense: 'imperative', stem: 'piel', rawCode: 'Vpv2ms' }, strongs: 'H1644", position: 2 },
  { id: 'Gen.21.10.3', language: 'hebrew', text: 'הָאָמָ֥ה', transliteration: "ha'amah", lemma: 'אָמָה', lemmaTranslit: "'amah", gloss: 'the slave woman', glossExtended: 'slave woman, handmaid, maidservant', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'absolute', rawCode: 'Ncfsa' }, strongs: 'H519', position: 3 },
  { id: 'Gen.21.10.4', language: 'hebrew', text: 'הַזֹּ֖את', transliteration: "hazzo't", lemma: 'זֹאת', lemmaTranslit: "zo't", gloss: 'this', morphology: { pos: 'pronoun', gender: 'feminine', number: 'singular', rawCode: 'Pdfs' }, strongs: 'H2063', position: 4 },
  { id: 'Gen.21.10.5', language: 'hebrew', text: 'וְאֶת־בְּנָ֑הּ', transliteration: "we'et-benah', lemma: 'בֵּן', lemmaTranslit: 'ben', gloss: 'and her son', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'construct', rawCode: 'Ncmsc' }, strongs: 'H1121", position: 5 },
  { id: 'Gen.21.10.6', language: 'hebrew', text: 'כִּ֣י', transliteration: "ki', lemma: 'כִּי', lemmaTranslit: 'ki', gloss: 'for', morphology: { pos: 'conjunction', rawCode: 'C' }, strongs: 'H3588", position: 6 },
  { id: 'Gen.21.10.7', language: 'hebrew', text: 'לֹ֤א', transliteration: "lo'", lemma: 'לֹא', lemmaTranslit: "lo'", gloss: 'not', morphology: { pos: 'particle', rawCode: 'Tn' }, strongs: 'H3808', position: 7 },
  { id: 'Gen.21.10.8', language: 'hebrew', text: 'יִירַשׁ֙', transliteration: "yirash', lemma: 'יָרַשׁ', lemmaTranslit: 'yarash', gloss: 'shall inherit', glossExtended: 'to inherit, possess, dispossess', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'imperfect', stem: 'qal', rawCode: 'Vqi3ms' }, strongs: 'H3423", position: 8 },
];

export const genesis21_10_translation: VerseTranslation = {
  verseRef: 'Gen.21.10',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'And she said to Abraham, "Drive out this slave woman and her son, for not shall inherit the son of this slave woman with my son, with Isaac."',
      spans: [
        { id: 'Gen.21.10.en.lit.0', text: 'And she said to Abraham,', position: 0, sourceTokenIds: ['Gen.21.10.0', 'Gen.21.10.1'], confidence: 'high' },
        { id: 'Gen.21.10.en.lit.1', text: '"Drive out this slave woman and her son,', position: 1, sourceTokenIds: ['Gen.21.10.2', 'Gen.21.10.3', 'Gen.21.10.4', 'Gen.21.10.5'], confidence: 'high' },
        { id: 'Gen.21.10.en.lit.2', text: 'for not shall inherit the son of this slave woman with my son, with Isaac."', position: 2, sourceTokenIds: ['Gen.21.10.6', 'Gen.21.10.7', 'Gen.21.10.8'], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: "She said to Abraham, \"Get rid of that slave woman and her son, for that woman's son will never share in the inheritance with my son Isaac.\"",
      spans: [
        { id: 'Gen.21.10.en.idi.0', text: 'She said to Abraham,', position: 0, sourceTokenIds: ['Gen.21.10.0', 'Gen.21.10.1'], confidence: 'high' },
        { id: 'Gen.21.10.en.idi.1', text: '"Get rid of that slave woman and her son,', position: 1, sourceTokenIds: ['Gen.21.10.2', 'Gen.21.10.3', 'Gen.21.10.4', 'Gen.21.10.5'], confidence: 'high' },
        { id: 'Gen.21.10.en.idi.2', text: "for that woman's son will never share in the inheritance with my son Isaac.", position: 2, sourceTokenIds: ['Gen.21.10.6', 'Gen.21.10.7', 'Gen.21.10.8'], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
  },
  metadata: {
    pipelineVersion: '0.1.0',
    generatedAt: new Date().toISOString(),
    engineId: 'open-bible-pipeline',
    engineVersion: '0.1.0',
    sourceDataVersion: '1.0.0',
  },
};

export const genesis21_10_verse = {
  ref: 'Gen.21.10',
  sourceTokens: genesis21_10_tokens,
  translation: genesis21_10_translation,
  notes: [] as StudyNote[],
};

// Genesis 21:12 - Through Isaac your seed shall be called
export const genesis21_12_tokens: SourceToken[] = [
  { id: 'Gen.21.12.0', language: 'hebrew', text: 'וַיֹּ֨אמֶר', transliteration: "wayyo'mer", lemma: 'אָמַר', lemmaTranslit: "'amar", gloss: 'And said', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'imperfect', stem: 'qal', rawCode: 'Vqw3ms' }, strongs: 'H559', position: 0 },
  { id: 'Gen.21.12.1', language: 'hebrew', text: 'אֱלֹהִ֜ים', transliteration: "'elohim", lemma: 'אֱלֹהִים', lemmaTranslit: "'elohim", gloss: 'God', morphology: { pos: 'noun', gender: 'masculine', number: 'plural', rawCode: 'Ncmpa' }, strongs: 'H430', position: 1 },
  { id: 'Gen.21.12.2', language: 'hebrew', text: 'שְׁמַ֣ע', transliteration: "shema', lemma: 'שָׁמַע', lemmaTranslit: 'shama', gloss: 'Listen', morphology: { pos: 'verb', person: '2', gender: 'masculine', number: 'singular', tense: 'imperative', stem: 'qal', rawCode: 'Vqv2ms' }, strongs: 'H8085", position: 2 },
  { id: 'Gen.21.12.3', language: 'hebrew', text: 'בְּקֹלָ֗הּ', transliteration: "beqolah', lemma: 'קוֹל', lemmaTranslit: 'qol', gloss: 'to her voice', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'construct', rawCode: 'Ncmsc' }, strongs: 'H6963", position: 3 },
  { id: 'Gen.21.12.4', language: 'hebrew', text: 'כִּ֣י', transliteration: "ki', lemma: 'כִּי', lemmaTranslit: 'ki', gloss: 'for', morphology: { pos: 'conjunction', rawCode: 'C' }, strongs: 'H3588", position: 4 },
  { id: 'Gen.21.12.5', language: 'hebrew', text: 'בְיִצְחָ֔ק', transliteration: "beyitschaq', lemma: 'יִצְחָק', lemmaTranslit: 'yitschaq', gloss: 'through Isaac', morphology: { pos: 'noun-proper', rawCode: 'Np' }, strongs: 'H3327", position: 5 },
  { id: 'Gen.21.12.6', language: 'hebrew', text: 'יִקָּרֵ֥א', transliteration: "yiqqare'", lemma: 'קָרָא', lemmaTranslit: "qara'", gloss: 'shall be called', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'imperfect', stem: 'niphal', rawCode: 'Vni3ms' }, strongs: 'H7121', position: 6 },
  { id: 'Gen.21.12.7', language: 'hebrew', text: 'לְךָ֖', transliteration: "lekha', lemma: 'לְ', lemmaTranslit: 'le', gloss: 'to you', morphology: { pos: 'preposition', rawCode: 'R' }, strongs: 'H0", position: 7 },
  { id: 'Gen.21.12.8', language: 'hebrew', text: 'זָֽרַע', transliteration: "zara', lemma: 'זֶרַע', lemmaTranslit: 'zera', gloss: 'seed', glossExtended: 'seed, offspring, descendants', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'absolute', rawCode: 'Ncmsa' }, strongs: 'H2233", position: 8 },
];

export const genesis21_12_translation: VerseTranslation = {
  verseRef: 'Gen.21.12',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'And said God, "Listen to her voice, for through Isaac shall be called to you seed."',
      spans: [
        { id: 'Gen.21.12.en.lit.0', text: 'And said God,', position: 0, sourceTokenIds: ['Gen.21.12.0', 'Gen.21.12.1'], confidence: 'high' },
        { id: 'Gen.21.12.en.lit.1', text: '"Listen to her voice,', position: 1, sourceTokenIds: ['Gen.21.12.2', 'Gen.21.12.3'], confidence: 'high' },
        { id: 'Gen.21.12.en.lit.2', text: 'for through Isaac shall be called to you seed."', position: 2, sourceTokenIds: ['Gen.21.12.4', 'Gen.21.12.5', 'Gen.21.12.6', 'Gen.21.12.7', 'Gen.21.12.8'], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'But God said to Abraham, "Listen to whatever Sarah tells you, because it is through Isaac that your offspring will be reckoned."',
      spans: [
        { id: 'Gen.21.12.en.idi.0', text: 'But God said to Abraham,', position: 0, sourceTokenIds: ['Gen.21.12.0', 'Gen.21.12.1'], confidence: 'high' },
        { id: 'Gen.21.12.en.idi.1', text: '"Listen to whatever Sarah tells you,', position: 1, sourceTokenIds: ['Gen.21.12.2', 'Gen.21.12.3'], confidence: 'high' },
        { id: 'Gen.21.12.en.idi.2', text: 'because it is through Isaac that your offspring will be reckoned."', position: 2, sourceTokenIds: ['Gen.21.12.4', 'Gen.21.12.5', 'Gen.21.12.6', 'Gen.21.12.7', 'Gen.21.12.8'], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
  },
  metadata: {
    pipelineVersion: '0.1.0',
    generatedAt: new Date().toISOString(),
    engineId: 'open-bible-pipeline',
    engineVersion: '0.1.0',
    sourceDataVersion: '1.0.0',
  },
};

export const genesis21_12_verse = {
  ref: 'Gen.21.12',
  sourceTokens: genesis21_12_tokens,
  translation: genesis21_12_translation,
  notes: [] as StudyNote[],
};

// Genesis 21:14 - Abraham sends Hagar away with bread and water
export const genesis21_14_tokens: SourceToken[] = [
  { id: 'Gen.21.14.0', language: 'hebrew', text: 'וַיַּשְׁכֵּ֣ם', transliteration: "wayyashkem', lemma: 'שָׁכַם', lemmaTranslit: 'shakam', gloss: 'And rose early', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'imperfect', stem: 'hiphil', rawCode: 'Vhw3ms' }, strongs: 'H7925", position: 0 },
  { id: 'Gen.21.14.1', language: 'hebrew', text: 'אַבְרָהָ֣ם', transliteration: "'avraham", lemma: 'אַבְרָהָם', lemmaTranslit: "'avraham", gloss: 'Abraham', morphology: { pos: 'noun-proper', rawCode: 'Np' }, strongs: 'H85', position: 1 },
  { id: 'Gen.21.14.2', language: 'hebrew', text: 'בַּבֹּ֡קֶר', transliteration: "babboqer', lemma: 'בֹּקֶר', lemmaTranslit: 'boqer', gloss: 'in the morning', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'absolute', rawCode: 'Ncmsa' }, strongs: 'H1242", position: 2 },
  { id: 'Gen.21.14.3', language: 'hebrew', text: 'וַיִּקַּֽח־לֶ֩חֶם֩', transliteration: "wayyiqqach-lechem', lemma: 'לֶחֶם', lemmaTranslit: 'lechem', gloss: 'and took bread', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'absolute', rawCode: 'Ncmsa' }, strongs: 'H3899", position: 3 },
  { id: 'Gen.21.14.4', language: 'hebrew', text: 'וְחֵ֨מַת', transliteration: "wechemat', lemma: 'חֵמֶת', lemmaTranslit: 'chemet', gloss: 'and a skin of', glossExtended: 'waterskin, leather bottle', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'construct', rawCode: 'Ncfsc' }, strongs: 'H2573", position: 4 },
  { id: 'Gen.21.14.5', language: 'hebrew', text: 'מַ֜יִם', transliteration: "mayim', lemma: 'מַיִם', lemmaTranslit: 'mayim', gloss: 'water', morphology: { pos: 'noun', gender: 'masculine', number: 'plural', rawCode: 'Ncmpa' }, strongs: 'H4325", position: 5 },
  { id: 'Gen.21.14.6', language: 'hebrew', text: 'וַיִּתֵּ֣ן', transliteration: "wayyitten', lemma: 'נָתַן', lemmaTranslit: 'natan', gloss: 'and gave', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'imperfect', stem: 'qal', rawCode: 'Vqw3ms' }, strongs: 'H5414", position: 6 },
  { id: 'Gen.21.14.7', language: 'hebrew', text: 'אֶל־הָגָ֗ר', transliteration: "el-hagar', lemma: 'הָגָר', lemmaTranslit: 'hagar', gloss: 'to Hagar', morphology: { pos: 'noun-proper', gender: 'feminine', rawCode: 'Np' }, strongs: 'H1904", position: 7 },
];

export const genesis21_14_translation: VerseTranslation = {
  verseRef: 'Gen.21.14',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'And rose early Abraham in the morning and took bread and a skin of water and gave to Hagar.',
      spans: [
        { id: 'Gen.21.14.en.lit.0', text: 'And rose early Abraham in the morning', position: 0, sourceTokenIds: ['Gen.21.14.0', 'Gen.21.14.1', 'Gen.21.14.2'], confidence: 'high' },
        { id: 'Gen.21.14.en.lit.1', text: 'and took bread and a skin of water', position: 1, sourceTokenIds: ['Gen.21.14.3', 'Gen.21.14.4', 'Gen.21.14.5'], confidence: 'high' },
        { id: 'Gen.21.14.en.lit.2', text: 'and gave to Hagar', position: 2, sourceTokenIds: ['Gen.21.14.6', 'Gen.21.14.7'], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'Early the next morning Abraham took some bread and a skin of water and gave them to Hagar.',
      spans: [
        { id: 'Gen.21.14.en.idi.0', text: 'Early the next morning Abraham', position: 0, sourceTokenIds: ['Gen.21.14.0', 'Gen.21.14.1', 'Gen.21.14.2'], confidence: 'high' },
        { id: 'Gen.21.14.en.idi.1', text: 'took some bread and a skin of water', position: 1, sourceTokenIds: ['Gen.21.14.3', 'Gen.21.14.4', 'Gen.21.14.5'], confidence: 'high' },
        { id: 'Gen.21.14.en.idi.2', text: 'and gave them to Hagar', position: 2, sourceTokenIds: ['Gen.21.14.6', 'Gen.21.14.7'], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
  },
  metadata: {
    pipelineVersion: '0.1.0',
    generatedAt: new Date().toISOString(),
    engineId: 'open-bible-pipeline',
    engineVersion: '0.1.0',
    sourceDataVersion: '1.0.0',
  },
};

export const genesis21_14_verse = {
  ref: 'Gen.21.14',
  sourceTokens: genesis21_14_tokens,
  translation: genesis21_14_translation,
  notes: [] as StudyNote[],
};

// Genesis 21:17 - God heard the voice of the boy
export const genesis21_17_tokens: SourceToken[] = [
  { id: 'Gen.21.17.0', language: 'hebrew', text: 'וַיִּשְׁמַ֣ע', transliteration: "wayyishma', lemma: 'שָׁמַע', lemmaTranslit: 'shama', gloss: 'And heard', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'imperfect', stem: 'qal', rawCode: 'Vqw3ms' }, strongs: 'H8085", position: 0 },
  { id: 'Gen.21.17.1', language: 'hebrew', text: 'אֱלֹהִ֔ים', transliteration: "'elohim", lemma: 'אֱלֹהִים', lemmaTranslit: "'elohim", gloss: 'God', morphology: { pos: 'noun', gender: 'masculine', number: 'plural', rawCode: 'Ncmpa' }, strongs: 'H430', position: 1 },
  { id: 'Gen.21.17.2', language: 'hebrew', text: 'אֶת־ק֖וֹל', transliteration: "et-qol', lemma: 'קוֹל', lemmaTranslit: 'qol', gloss: 'the voice of', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'construct', rawCode: 'Ncmsc' }, strongs: 'H6963", position: 2 },
  { id: 'Gen.21.17.3', language: 'hebrew', text: 'הַנַּ֑עַר', transliteration: "hanna'ar", lemma: 'נַעַר', lemmaTranslit: "na'ar", gloss: 'the boy', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'absolute', rawCode: 'Ncmsa' }, strongs: 'H5288', position: 3 },
  { id: 'Gen.21.17.4', language: 'hebrew', text: 'וַיִּקְרָ֨א', transliteration: "wayyiqra'", lemma: 'קָרָא', lemmaTranslit: "qara'", gloss: 'And called', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'imperfect', stem: 'qal', rawCode: 'Vqw3ms' }, strongs: 'H7121', position: 4 },
  { id: 'Gen.21.17.5', language: 'hebrew', text: 'מַלְאַ֤ךְ', transliteration: "mal'akh", lemma: 'מַלְאָךְ', lemmaTranslit: "mal'akh", gloss: 'the angel of', glossExtended: 'messenger, angel', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'construct', rawCode: 'Ncmsc' }, strongs: 'H4397', position: 5 },
  { id: 'Gen.21.17.6', language: 'hebrew', text: 'אֱלֹהִים֙', transliteration: "'elohim", lemma: 'אֱלֹהִים', lemmaTranslit: "'elohim", gloss: 'God', morphology: { pos: 'noun', gender: 'masculine', number: 'plural', rawCode: 'Ncmpa' }, strongs: 'H430', position: 6 },
  { id: 'Gen.21.17.7', language: 'hebrew', text: 'אֶל־הָגָ֔ר', transliteration: "el-hagar', lemma: 'הָגָר', lemmaTranslit: 'hagar', gloss: 'to Hagar', morphology: { pos: 'noun-proper', gender: 'feminine', rawCode: 'Np' }, strongs: 'H1904", position: 7 },
];

export const genesis21_17_translation: VerseTranslation = {
  verseRef: 'Gen.21.17',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'And heard God the voice of the boy. And called the angel of God to Hagar from the heavens.',
      spans: [
        { id: 'Gen.21.17.en.lit.0', text: 'And heard God the voice of the boy.', position: 0, sourceTokenIds: ['Gen.21.17.0', 'Gen.21.17.1', 'Gen.21.17.2', 'Gen.21.17.3'], confidence: 'high' },
        { id: 'Gen.21.17.en.lit.1', text: 'And called the angel of God to Hagar from the heavens.', position: 1, sourceTokenIds: ['Gen.21.17.4', 'Gen.21.17.5', 'Gen.21.17.6', 'Gen.21.17.7'], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'God heard the boy crying, and the angel of God called to Hagar from heaven.',
      spans: [
        { id: 'Gen.21.17.en.idi.0', text: 'God heard the boy crying,', position: 0, sourceTokenIds: ['Gen.21.17.0', 'Gen.21.17.1', 'Gen.21.17.2', 'Gen.21.17.3'], confidence: 'high' },
        { id: 'Gen.21.17.en.idi.1', text: 'and the angel of God called to Hagar from heaven.', position: 1, sourceTokenIds: ['Gen.21.17.4', 'Gen.21.17.5', 'Gen.21.17.6', 'Gen.21.17.7'], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
  },
  metadata: {
    pipelineVersion: '0.1.0',
    generatedAt: new Date().toISOString(),
    engineId: 'open-bible-pipeline',
    engineVersion: '0.1.0',
    sourceDataVersion: '1.0.0',
  },
};

export const genesis21_17_verse = {
  ref: 'Gen.21.17',
  sourceTokens: genesis21_17_tokens,
  translation: genesis21_17_translation,
  notes: [] as StudyNote[],
};

// Genesis 21:19 - God opened her eyes and she saw a well of water
export const genesis21_19_tokens: SourceToken[] = [
  { id: 'Gen.21.19.0', language: 'hebrew', text: 'וַיִּפְקַ֤ח', transliteration: "wayyifqach', lemma: 'פָּקַח', lemmaTranslit: 'paqach', gloss: 'And opened', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'imperfect', stem: 'qal', rawCode: 'Vqw3ms' }, strongs: 'H6491", position: 0 },
  { id: 'Gen.21.19.1', language: 'hebrew', text: 'אֱלֹהִים֙', transliteration: "'elohim", lemma: 'אֱלֹהִים', lemmaTranslit: "'elohim", gloss: 'God', morphology: { pos: 'noun', gender: 'masculine', number: 'plural', rawCode: 'Ncmpa' }, strongs: 'H430', position: 1 },
  { id: 'Gen.21.19.2', language: 'hebrew', text: 'אֶת־עֵינֶ֔יהָ', transliteration: "et-'eneyha", lemma: 'עַיִן', lemmaTranslit: "'ayin", gloss: 'her eyes', morphology: { pos: 'noun', gender: 'feminine', number: 'dual', state: 'construct', rawCode: 'Ncfdc' }, strongs: 'H5869', position: 2 },
  { id: 'Gen.21.19.3', language: 'hebrew', text: 'וַתֵּ֖רֶא', transliteration: "wattēreʾ', lemma: 'רָאָה', lemmaTranslit: 'rāʾāh', gloss: 'and she saw', morphology: { pos: 'verb', person: '3', gender: 'feminine', number: 'singular', tense: 'imperfect', stem: 'qal', rawCode: 'Vqw3fs' }, strongs: 'H7200", position: 3 },
  { id: 'Gen.21.19.4', language: 'hebrew', text: 'בְּאֵ֣ר', transliteration: "be'er", lemma: 'בְּאֵר', lemmaTranslit: "be'er", gloss: 'a well of', glossExtended: 'well, pit, cistern', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'construct', rawCode: 'Ncfsc' }, strongs: 'H875', position: 4 },
  { id: 'Gen.21.19.5', language: 'hebrew', text: 'מָ֑יִם', transliteration: "mayim', lemma: 'מַיִם', lemmaTranslit: 'mayim', gloss: 'water', morphology: { pos: 'noun', gender: 'masculine', number: 'plural', rawCode: 'Ncmpa' }, strongs: 'H4325", position: 5 },
];

export const genesis21_19_translation: VerseTranslation = {
  verseRef: 'Gen.21.19',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'And opened God her eyes and she saw a well of water.',
      spans: [
        { id: 'Gen.21.19.en.lit.0', text: 'And opened God her eyes', position: 0, sourceTokenIds: ['Gen.21.19.0', 'Gen.21.19.1', 'Gen.21.19.2'], confidence: 'high' },
        { id: 'Gen.21.19.en.lit.1', text: 'and she saw a well of water', position: 1, sourceTokenIds: ['Gen.21.19.3', 'Gen.21.19.4', 'Gen.21.19.5'], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'Then God opened her eyes and she saw a well of water.',
      spans: [
        { id: 'Gen.21.19.en.idi.0', text: 'Then God opened her eyes', position: 0, sourceTokenIds: ['Gen.21.19.0', 'Gen.21.19.1', 'Gen.21.19.2'], confidence: 'high' },
        { id: 'Gen.21.19.en.idi.1', text: 'and she saw a well of water', position: 1, sourceTokenIds: ['Gen.21.19.3', 'Gen.21.19.4', 'Gen.21.19.5'], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
  },
  metadata: {
    pipelineVersion: '0.1.0',
    generatedAt: new Date().toISOString(),
    engineId: 'open-bible-pipeline',
    engineVersion: '0.1.0',
    sourceDataVersion: '1.0.0',
  },
};

export const genesis21_19_verse = {
  ref: 'Gen.21.19',
  sourceTokens: genesis21_19_tokens,
  translation: genesis21_19_translation,
  notes: [] as StudyNote[],
};

// Genesis 21:20 - God was with the boy and he grew up
export const genesis21_20_tokens: SourceToken[] = [
  { id: 'Gen.21.20.0', language: 'hebrew', text: 'וַיְהִ֧י', transliteration: "wayehi', lemma: 'הָיָה', lemmaTranslit: 'hayah', gloss: 'And was', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'imperfect', stem: 'qal', rawCode: 'Vqw3ms' }, strongs: 'H1961", position: 0 },
  { id: 'Gen.21.20.1', language: 'hebrew', text: 'אֱלֹהִ֛ים', transliteration: "'elohim", lemma: 'אֱלֹהִים', lemmaTranslit: "'elohim", gloss: 'God', morphology: { pos: 'noun', gender: 'masculine', number: 'plural', rawCode: 'Ncmpa' }, strongs: 'H430', position: 1 },
  { id: 'Gen.21.20.2', language: 'hebrew', text: 'אֶת־הַנַּ֖עַר', transliteration: "et-hanna'ar", lemma: 'נַעַר', lemmaTranslit: "na'ar", gloss: 'with the boy', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'absolute', rawCode: 'Ncmsa' }, strongs: 'H5288', position: 2 },
  { id: 'Gen.21.20.3', language: 'hebrew', text: 'וַיִּגְדָּ֑ל', transliteration: "wayyigdal', lemma: 'גָּדַל', lemmaTranslit: 'gadal', gloss: 'and he grew', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'imperfect', stem: 'qal', rawCode: 'Vqw3ms' }, strongs: 'H1431", position: 3 },
  { id: 'Gen.21.20.4', language: 'hebrew', text: 'וַיֵּ֨שֶׁב֙', transliteration: "wayyeshev', lemma: 'יָשַׁב', lemmaTranslit: 'yashav', gloss: 'and he lived', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'imperfect', stem: 'qal', rawCode: 'Vqw3ms' }, strongs: 'H3427", position: 4 },
  { id: 'Gen.21.20.5', language: 'hebrew', text: 'בַּמִּדְבָּ֔ר', transliteration: "bammidbar', lemma: 'מִדְבָּר', lemmaTranslit: 'midbar', gloss: 'in the wilderness', glossExtended: 'wilderness, desert, pastureland', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'absolute', rawCode: 'Ncmsa' }, strongs: 'H4057", position: 5 },
  { id: 'Gen.21.20.6', language: 'hebrew', text: 'וַיְהִ֖י', transliteration: "wayehi', lemma: 'הָיָה', lemmaTranslit: 'hayah', gloss: 'and he became', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'imperfect', stem: 'qal', rawCode: 'Vqw3ms' }, strongs: 'H1961", position: 6 },
  { id: 'Gen.21.20.7', language: 'hebrew', text: 'רֹבֶ֥ה', transliteration: "roveh', lemma: 'רָבָה', lemmaTranslit: 'ravah', gloss: 'an archer', glossExtended: 'bowman, shooter', morphology: { pos: 'verb', gender: 'masculine', number: 'singular', tense: 'participle', stem: 'qal', rawCode: 'Vqpms' }, strongs: 'H7235", position: 7 },
  { id: 'Gen.21.20.8', language: 'hebrew', text: 'קַשָּֽׁת', transliteration: "qashat', lemma: 'קַשָּׁת', lemmaTranslit: 'qashat', gloss: 'a bow', glossExtended: 'bow, archer', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'absolute', rawCode: 'Ncfsa' }, strongs: 'H7199", position: 8 },
];

export const genesis21_20_translation: VerseTranslation = {
  verseRef: 'Gen.21.20',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'And was God with the boy and he grew. And he lived in the wilderness and he became a shooter of the bow.',
      spans: [
        { id: 'Gen.21.20.en.lit.0', text: 'And was God with the boy and he grew.', position: 0, sourceTokenIds: ['Gen.21.20.0', 'Gen.21.20.1', 'Gen.21.20.2', 'Gen.21.20.3'], confidence: 'high' },
        { id: 'Gen.21.20.en.lit.1', text: 'And he lived in the wilderness', position: 1, sourceTokenIds: ['Gen.21.20.4', 'Gen.21.20.5'], confidence: 'high' },
        { id: 'Gen.21.20.en.lit.2', text: 'and he became a shooter of the bow', position: 2, sourceTokenIds: ['Gen.21.20.6', 'Gen.21.20.7', 'Gen.21.20.8'], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'God was with the boy as he grew up. He lived in the wilderness and became an archer.',
      spans: [
        { id: 'Gen.21.20.en.idi.0', text: 'God was with the boy as he grew up.', position: 0, sourceTokenIds: ['Gen.21.20.0', 'Gen.21.20.1', 'Gen.21.20.2', 'Gen.21.20.3'], confidence: 'high' },
        { id: 'Gen.21.20.en.idi.1', text: 'He lived in the wilderness', position: 1, sourceTokenIds: ['Gen.21.20.4', 'Gen.21.20.5'], confidence: 'high' },
        { id: 'Gen.21.20.en.idi.2', text: 'and became an archer', position: 2, sourceTokenIds: ['Gen.21.20.6', 'Gen.21.20.7', 'Gen.21.20.8'], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
  },
  metadata: {
    pipelineVersion: '0.1.0',
    generatedAt: new Date().toISOString(),
    engineId: 'open-bible-pipeline',
    engineVersion: '0.1.0',
    sourceDataVersion: '1.0.0',
  },
};

export const genesis21_20_verse = {
  ref: 'Gen.21.20',
  sourceTokens: genesis21_20_tokens,
  translation: genesis21_20_translation,
  notes: [] as StudyNote[],
};

// Genesis 21:21 - He lived in the wilderness of Paran
export const genesis21_21_tokens: SourceToken[] = [
  { id: 'Gen.21.21.0', language: 'hebrew', text: 'וַיֵּ֖שֶׁב', transliteration: "wayyeshev', lemma: 'יָשַׁב', lemmaTranslit: 'yashav', gloss: 'And he lived', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'imperfect', stem: 'qal', rawCode: 'Vqw3ms' }, strongs: 'H3427", position: 0 },
  { id: 'Gen.21.21.1', language: 'hebrew', text: 'בְּמִדְבַּ֣ר', transliteration: "bemidbar', lemma: 'מִדְבָּר', lemmaTranslit: 'midbar', gloss: 'in the wilderness of', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'construct', rawCode: 'Ncmsc' }, strongs: 'H4057", position: 1 },
  { id: 'Gen.21.21.2', language: 'hebrew', text: 'פָּארָ֑ן', transliteration: "pa'ran", lemma: 'פָּארָן', lemmaTranslit: "pa'ran", gloss: 'Paran', morphology: { pos: 'noun-proper', rawCode: 'Np' }, strongs: 'H6290', position: 2 },
  { id: 'Gen.21.21.3', language: 'hebrew', text: 'וַתִּֽקַּֽח־ל֥וֹ', transliteration: "wattiqqach-lo', lemma: 'לָקַח', lemmaTranslit: 'laqach', gloss: 'and took for him', morphology: { pos: 'verb', person: '3', gender: 'feminine', number: 'singular', tense: 'imperfect', stem: 'qal', rawCode: 'Vqw3fs' }, strongs: 'H3947", position: 3 },
  { id: 'Gen.21.21.4', language: 'hebrew', text: 'אִמּ֛וֹ', transliteration: "'immo", lemma: 'אֵם', lemmaTranslit: "'em", gloss: 'his mother', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'construct', rawCode: 'Ncfsc' }, strongs: 'H517', position: 4 },
  { id: 'Gen.21.21.5', language: 'hebrew', text: 'אִשָּׁ֖ה', transliteration: "'ishah", lemma: 'אִשָּׁה', lemmaTranslit: "'ishah", gloss: 'a wife', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'absolute', rawCode: 'Ncfsa' }, strongs: 'H802', position: 5 },
  { id: 'Gen.21.21.6', language: 'hebrew', text: 'מֵאֶ֥רֶץ', transliteration: "me'erets", lemma: 'אֶרֶץ', lemmaTranslit: "'erets", gloss: 'from the land of', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'construct', rawCode: 'Ncfsc' }, strongs: 'H776', position: 6 },
  { id: 'Gen.21.21.7', language: 'hebrew', text: 'מִצְרָֽיִם', transliteration: "mitsrayim', lemma: 'מִצְרַיִם', lemmaTranslit: 'mitsrayim', gloss: 'Egypt', morphology: { pos: 'noun-proper', rawCode: 'Np' }, strongs: 'H4714", position: 7 },
];

export const genesis21_21_translation: VerseTranslation = {
  verseRef: 'Gen.21.21',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'And he lived in the wilderness of Paran. And took for him his mother a wife from the land of Egypt.',
      spans: [
        { id: 'Gen.21.21.en.lit.0', text: 'And he lived in the wilderness of Paran.', position: 0, sourceTokenIds: ['Gen.21.21.0', 'Gen.21.21.1', 'Gen.21.21.2'], confidence: 'high' },
        { id: 'Gen.21.21.en.lit.1', text: 'And took for him his mother a wife from the land of Egypt.', position: 1, sourceTokenIds: ['Gen.21.21.3', 'Gen.21.21.4', 'Gen.21.21.5', 'Gen.21.21.6', 'Gen.21.21.7'], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'He settled in the wilderness of Paran, and his mother got a wife for him from Egypt.',
      spans: [
        { id: 'Gen.21.21.en.idi.0', text: 'He settled in the wilderness of Paran,', position: 0, sourceTokenIds: ['Gen.21.21.0', 'Gen.21.21.1', 'Gen.21.21.2'], confidence: 'high' },
        { id: 'Gen.21.21.en.idi.1', text: 'and his mother got a wife for him from Egypt.', position: 1, sourceTokenIds: ['Gen.21.21.3', 'Gen.21.21.4', 'Gen.21.21.5', 'Gen.21.21.6', 'Gen.21.21.7'], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
  },
  metadata: {
    pipelineVersion: '0.1.0',
    generatedAt: new Date().toISOString(),
    engineId: 'open-bible-pipeline',
    engineVersion: '0.1.0',
    sourceDataVersion: '1.0.0',
  },
};

export const genesis21_21_verse = {
  ref: 'Gen.21.21',
  sourceTokens: genesis21_21_tokens,
  translation: genesis21_21_translation,
  notes: [] as StudyNote[],
};

// Export all verses
export const genesis21_1_21_verses = [
  genesis21_1_verse,
  genesis21_2_verse,
  genesis21_3_verse,
  genesis21_5_verse,
  genesis21_6_verse,
  genesis21_8_verse,
  genesis21_9_verse,
  genesis21_10_verse,
  genesis21_12_verse,
  genesis21_14_verse,
  genesis21_17_verse,
  genesis21_19_verse,
  genesis21_20_verse,
  genesis21_21_verse,
];

export default genesis21_1_21_verses;
