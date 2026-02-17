// @ts-nocheck — generated data file, schema alignment pending
import type { SourceToken, VerseTranslation, StudyNote } from '@open-bible/schemas';

/* ────────────────────────────────────────────────────────────
 * Verse 53:1 – Who has believed our report?
 * ──────────────────────────────────────────────────────────── */

export const isa53_1_tokens: SourceToken[] = [
  {
    id: 'Isa.53.1.0',
    surfaceText: 'מִי',
    lemma: 'מִי',
    transliteration: 'mî',
    lemmaTranslit: 'mî',
    morph: 'HPi',
    strong: 'H4310',
    language: 'hebrew',
    position: 0,
    gloss: 'who',
  },
  {
    id: 'Isa.53.1.1',
    surfaceText: 'הֶאֱמִין',
    lemma: 'אָמַן',
    transliteration: "heʾĕmîn",
    lemmaTranslit: "ʾāman",
    morph: 'HVhp3ms',
    strong: 'H539',
    language: 'hebrew',
    position: 1,
    gloss: 'has believed',
  },
  {
    id: 'Isa.53.1.2',
    surfaceText: 'לִשְׁמֻעָתֵנוּ',
    lemma: 'שְׁמוּעָה',
    transliteration: "lišmuʿāṯēnû",
    lemmaTranslit: "šěmûʿāh",
    morph: 'HR+Ncfsc+Sp1cp',
    strong: 'H8052',
    language: 'hebrew',
    position: 2,
    gloss: 'our report',
  },
  {
    id: 'Isa.53.1.3',
    surfaceText: 'וּזְרוֹעַ',
    lemma: 'זְרוֹעַ',
    transliteration: "ûzěrôaʿ",
    lemmaTranslit: "zěrôaʿ",
    morph: 'HC+Ncfsa',
    strong: 'H2220',
    language: 'hebrew',
    position: 3,
    gloss: 'and the arm of',
  },
  {
    id: 'Isa.53.1.4',
    surfaceText: 'יְהוָה',
    lemma: 'יְהוָה',
    transliteration: 'yhwh',
    lemmaTranslit: 'yhwh',
    morph: 'HNp',
    strong: 'H3068',
    language: 'hebrew',
    position: 4,
    gloss: 'the LORD',
  },
];

export const isa53_1_translation: VerseTranslation = {
  verseRef: 'Isa.53.1',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'Who has believed our report? And to whom has the arm of the LORD been revealed?',
      spans: [
        { tokenIds: ['Isa.53.1.0'], targetSlice: [0, 3], confidence: 'high' },
        { tokenIds: ['Isa.53.1.1'], targetSlice: [4, 16], confidence: 'high' },
        { tokenIds: ['Isa.53.1.2'], targetSlice: [17, 27], confidence: 'high' },
        { tokenIds: ['Isa.53.1.3'], targetSlice: [28, 42], confidence: 'high' },
        { tokenIds: ['Isa.53.1.4'], targetSlice: [43, 51], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'Who has believed our message and to whom has the arm of the LORD been revealed?',
      spans: [
        { tokenIds: ['Isa.53.1.0'], targetSlice: [0, 15], confidence: 'high' },
        { tokenIds: ['Isa.53.1.1'], targetSlice: [16, 31], confidence: 'high' },
        { tokenIds: ['Isa.53.1.2'], targetSlice: [32, 47], confidence: 'high' },
        { tokenIds: ['Isa.53.1.3'], targetSlice: [48, 63], confidence: 'high' },
        { tokenIds: ['Isa.53.1.4'], targetSlice: [64, 79], confidence: 'high' },
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

export const isa53_1_verse = {
  ref: 'Isa.53.1',
  sourceTokens: isa53_1_tokens,
  translation: isa53_1_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 53:2 – He grew up before him like a tender shoot
 * ──────────────────────────────────────────────────────────── */

export const isa53_2_tokens: SourceToken[] = [
  {
    id: 'Isa.53.2.0',
    surfaceText: 'וַיַּעַל',
    lemma: 'עָלָה',
    transliteration: "wayyaʿal",
    lemmaTranslit: "ʿālāh",
    morph: 'HC+Vqw3ms',
    strong: 'H5927',
    language: 'hebrew',
    position: 0,
    gloss: 'and he grew up',
  },
  {
    id: 'Isa.53.2.1',
    surfaceText: 'כַּיּוֹנֵק',
    lemma: 'יוֹנֵק',
    transliteration: 'kayyônēq',
    lemmaTranslit: 'yônēq',
    morph: 'HR+Ncmsa',
    strong: 'H3126',
    language: 'hebrew',
    position: 1,
    gloss: 'like a tender shoot',
  },
  {
    id: 'Isa.53.2.2',
    surfaceText: 'לְפָנָיו',
    lemma: 'פָּנִים',
    transliteration: 'lěp̄ānāyw',
    lemmaTranslit: 'pānîm',
    morph: 'HR+Ncmpc+Sp3ms',
    strong: 'H6440',
    language: 'hebrew',
    position: 2,
    gloss: 'before him',
  },
  {
    id: 'Isa.53.2.3',
    surfaceText: 'וְכַשֹּׁרֶשׁ',
    lemma: 'שֹׁרֶשׁ',
    transliteration: 'wěḵaššōreš',
    lemmaTranslit: 'šōreš',
    morph: 'HC+HR+Ncmsa',
    strong: 'H8328',
    language: 'hebrew',
    position: 3,
    gloss: 'and like a root',
  },
  {
    id: 'Isa.53.2.4',
    surfaceText: 'מֵאֶרֶץ',
    lemma: 'אֶרֶץ',
    transliteration: "mēʾereṣ",
    lemmaTranslit: "ʾereṣ",
    morph: 'HR+Ncfsa',
    strong: 'H776',
    language: 'hebrew',
    position: 4,
    gloss: 'out of dry ground',
  },
  {
    id: 'Isa.53.2.5',
    surfaceText: 'צִיָּה',
    lemma: 'צִיָּה',
    transliteration: 'ṣiyyāh',
    lemmaTranslit: 'ṣiyyāh',
    morph: 'HNcfsa',
    strong: 'H6723',
    language: 'hebrew',
    position: 5,
    gloss: 'parched',
  },
];

export const isa53_2_translation: VerseTranslation = {
  verseRef: 'Isa.53.2',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'He grew up before him like a tender shoot, and like a root out of dry ground',
      spans: [
        { tokenIds: ['Isa.53.2.0'], targetSlice: [0, 14], confidence: 'high' },
        { tokenIds: ['Isa.53.2.1'], targetSlice: [15, 34], confidence: 'high' },
        { tokenIds: ['Isa.53.2.2'], targetSlice: [35, 45], confidence: 'high' },
        { tokenIds: ['Isa.53.2.3'], targetSlice: [46, 61], confidence: 'high' },
        { tokenIds: ['Isa.53.2.4'], targetSlice: [62, 79], confidence: 'high' },
        { tokenIds: ['Isa.53.2.5'], targetSlice: [80, 87], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'He grew up before him like a tender shoot, and like a root out of dry ground.',
      spans: [
        { tokenIds: ['Isa.53.2.0'], targetSlice: [0, 12], confidence: 'high' },
        { tokenIds: ['Isa.53.2.1'], targetSlice: [13, 25], confidence: 'high' },
        { tokenIds: ['Isa.53.2.2'], targetSlice: [26, 38], confidence: 'high' },
        { tokenIds: ['Isa.53.2.3'], targetSlice: [39, 51], confidence: 'high' },
        { tokenIds: ['Isa.53.2.4'], targetSlice: [52, 64], confidence: 'high' },
        { tokenIds: ['Isa.53.2.5'], targetSlice: [65, 77], confidence: 'high' },
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

export const isa53_2_verse = {
  ref: 'Isa.53.2',
  sourceTokens: isa53_2_tokens,
  translation: isa53_2_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 53:3 – He was despised and rejected
 * ──────────────────────────────────────────────────────────── */

export const isa53_3_tokens: SourceToken[] = [
  {
    id: 'Isa.53.3.0',
    surfaceText: 'נִבְזֶה',
    lemma: 'בָּזָה',
    transliteration: 'niḇzeh',
    lemmaTranslit: 'bāzāh',
    morph: 'HVNPtmsa',
    strong: 'H959',
    language: 'hebrew',
    position: 0,
    gloss: 'despised',
  },
  {
    id: 'Isa.53.3.1',
    surfaceText: 'וַחֲדַל',
    lemma: 'חָדַל',
    transliteration: 'waḥăḏal',
    lemmaTranslit: 'ḥāḏal',
    morph: 'HC+Vqp3ms',
    strong: 'H2310',
    language: 'hebrew',
    position: 1,
    gloss: 'and rejected',
  },
  {
    id: 'Isa.53.3.2',
    surfaceText: 'אִישִׁים',
    lemma: 'אִישׁ',
    transliteration: "ʾîšîm",
    lemmaTranslit: "ʾîš",
    morph: 'HNcmpa',
    strong: 'H376',
    language: 'hebrew',
    position: 2,
    gloss: 'by men',
  },
  {
    id: 'Isa.53.3.3',
    surfaceText: 'אִישׁ',
    lemma: 'אִישׁ',
    transliteration: "ʾîš",
    lemmaTranslit: "ʾîš",
    morph: 'HNcmsa',
    strong: 'H376',
    language: 'hebrew',
    position: 3,
    gloss: 'a man of',
  },
  {
    id: 'Isa.53.3.4',
    surfaceText: 'מַכְאֹבוֹת',
    lemma: 'מַכְאוֹב',
    transliteration: "maḵʾōḇôṯ",
    lemmaTranslit: "maḵʾôḇ",
    morph: 'HNcmpa',
    strong: 'H4341',
    language: 'hebrew',
    position: 4,
    gloss: 'sorrows',
  },
];

export const isa53_3_translation: VerseTranslation = {
  verseRef: 'Isa.53.3',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'He was despised and rejected by men, a man of sorrows and acquainted with grief',
      spans: [
        { tokenIds: ['Isa.53.3.0'], targetSlice: [0, 8], confidence: 'high' },
        { tokenIds: ['Isa.53.3.1'], targetSlice: [9, 21], confidence: 'high' },
        { tokenIds: ['Isa.53.3.2'], targetSlice: [22, 28], confidence: 'high' },
        { tokenIds: ['Isa.53.3.3'], targetSlice: [29, 37], confidence: 'high' },
        { tokenIds: ['Isa.53.3.4'], targetSlice: [38, 45], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'He was despised and rejected by mankind, a man of suffering, and familiar with pain.',
      spans: [
        { tokenIds: ['Isa.53.3.0'], targetSlice: [0, 16], confidence: 'high' },
        { tokenIds: ['Isa.53.3.1'], targetSlice: [17, 33], confidence: 'high' },
        { tokenIds: ['Isa.53.3.2'], targetSlice: [34, 50], confidence: 'high' },
        { tokenIds: ['Isa.53.3.3'], targetSlice: [51, 67], confidence: 'high' },
        { tokenIds: ['Isa.53.3.4'], targetSlice: [68, 84], confidence: 'high' },
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

export const isa53_3_verse = {
  ref: 'Isa.53.3',
  sourceTokens: isa53_3_tokens,
  translation: isa53_3_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 53:4 – Surely he has borne our griefs
 * ──────────────────────────────────────────────────────────── */

export const isa53_4_tokens: SourceToken[] = [
  {
    id: 'Isa.53.4.0',
    surfaceText: 'אָכֵן',
    lemma: 'אָכֵן',
    transliteration: "ʾāḵēn",
    lemmaTranslit: "ʾāḵēn",
    morph: 'HD',
    strong: 'H403',
    language: 'hebrew',
    position: 0,
    gloss: 'surely',
  },
  {
    id: 'Isa.53.4.1',
    surfaceText: 'חֳלָיֵנוּ',
    lemma: 'חֳלִי',
    transliteration: 'ḥŏlāyēnû',
    lemmaTranslit: 'ḥŏlî',
    morph: 'HNcmpc+Sp1cp',
    strong: 'H2483',
    language: 'hebrew',
    position: 1,
    gloss: 'our griefs',
  },
  {
    id: 'Isa.53.4.2',
    surfaceText: 'הוּא',
    lemma: 'הוּא',
    transliteration: "hûʾ",
    lemmaTranslit: "hûʾ",
    morph: 'HPp3ms',
    strong: 'H1931',
    language: 'hebrew',
    position: 2,
    gloss: 'he',
  },
  {
    id: 'Isa.53.4.3',
    surfaceText: 'נָשָׂא',
    lemma: 'נָשָׂא',
    transliteration: "nāśāʾ",
    lemmaTranslit: "nāśāʾ",
    morph: 'HVqp3ms',
    strong: 'H5375',
    language: 'hebrew',
    position: 3,
    gloss: 'has borne',
  },
  {
    id: 'Isa.53.4.4',
    surfaceText: 'וּמַכְאֹבֵינוּ',
    lemma: 'מַכְאוֹב',
    transliteration: "ûmaḵʾōḇênû",
    lemmaTranslit: "maḵʾôḇ",
    morph: 'HC+Ncmpc+Sp1cp',
    strong: 'H4341',
    language: 'hebrew',
    position: 4,
    gloss: 'and our sorrows',
  },
  {
    id: 'Isa.53.4.5',
    surfaceText: 'סְבָלָם',
    lemma: 'סָבַל',
    transliteration: 'sěḇālām',
    lemmaTranslit: 'sāḇal',
    morph: 'HVqp3ms+Sp3mp',
    strong: 'H5445',
    language: 'hebrew',
    position: 5,
    gloss: 'he has carried',
  },
];

export const isa53_4_translation: VerseTranslation = {
  verseRef: 'Isa.53.4',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'Surely he has borne our griefs and carried our sorrows',
      spans: [
        { tokenIds: ['Isa.53.4.0'], targetSlice: [0, 6], confidence: 'high' },
        { tokenIds: ['Isa.53.4.1'], targetSlice: [7, 17], confidence: 'high' },
        { tokenIds: ['Isa.53.4.2'], targetSlice: [18, 20], confidence: 'high' },
        { tokenIds: ['Isa.53.4.3'], targetSlice: [21, 30], confidence: 'high' },
        { tokenIds: ['Isa.53.4.4'], targetSlice: [31, 46], confidence: 'high' },
        { tokenIds: ['Isa.53.4.5'], targetSlice: [47, 61], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'Surely he took up our pain and bore our suffering.',
      spans: [
        { tokenIds: ['Isa.53.4.0'], targetSlice: [0, 8], confidence: 'high' },
        { tokenIds: ['Isa.53.4.1'], targetSlice: [9, 17], confidence: 'high' },
        { tokenIds: ['Isa.53.4.2'], targetSlice: [18, 26], confidence: 'high' },
        { tokenIds: ['Isa.53.4.3'], targetSlice: [27, 35], confidence: 'high' },
        { tokenIds: ['Isa.53.4.4'], targetSlice: [36, 44], confidence: 'high' },
        { tokenIds: ['Isa.53.4.5'], targetSlice: [45, 50], confidence: 'high' },
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

export const isa53_4_verse = {
  ref: 'Isa.53.4',
  sourceTokens: isa53_4_tokens,
  translation: isa53_4_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 53:5 – He was pierced for our transgressions
 * ──────────────────────────────────────────────────────────── */

export const isa53_5_tokens: SourceToken[] = [
  {
    id: 'Isa.53.5.0',
    surfaceText: 'וְהוּא',
    lemma: 'הוּא',
    transliteration: "wěhûʾ",
    lemmaTranslit: "hûʾ",
    morph: 'HC+Pp3ms',
    strong: 'H1931',
    language: 'hebrew',
    position: 0,
    gloss: 'but he',
  },
  {
    id: 'Isa.53.5.1',
    surfaceText: 'מְחֹלָל',
    lemma: 'חָלַל',
    transliteration: 'měḥōlāl',
    lemmaTranslit: 'ḥālal',
    morph: 'HVPoPtmsa',
    strong: 'H2490',
    language: 'hebrew',
    position: 1,
    gloss: 'was pierced',
  },
  {
    id: 'Isa.53.5.2',
    surfaceText: 'מִפְּשָׁעֵנוּ',
    lemma: 'פֶּשַׁע',
    transliteration: "mippěšāʿēnû",
    lemmaTranslit: "pešaʿ",
    morph: 'HR+Ncmpc+Sp1cp',
    strong: 'H6588',
    language: 'hebrew',
    position: 2,
    gloss: 'for our transgressions',
  },
  {
    id: 'Isa.53.5.3',
    surfaceText: 'מְדֻכָּא',
    lemma: 'דָּכָא',
    transliteration: "měḏukkāʾ",
    lemmaTranslit: "dāḵāʾ",
    morph: 'HVPuPtmsa',
    strong: 'H1792',
    language: 'hebrew',
    position: 3,
    gloss: 'crushed',
  },
  {
    id: 'Isa.53.5.4',
    surfaceText: 'מֵעֲוֹנֹתֵינוּ',
    lemma: 'עָוֹן',
    transliteration: "mēʿăwōnōṯênû",
    lemmaTranslit: "ʿāwōn",
    morph: 'HR+Ncmpc+Sp1cp',
    strong: 'H5771',
    language: 'hebrew',
    position: 4,
    gloss: 'for our iniquities',
  },
  {
    id: 'Isa.53.5.5',
    surfaceText: 'מוּסַר',
    lemma: 'מוּסָר',
    transliteration: 'mûsar',
    lemmaTranslit: 'mûsār',
    morph: 'HNcmsc',
    strong: 'H4148',
    language: 'hebrew',
    position: 5,
    gloss: 'the punishment for',
  },
  {
    id: 'Isa.53.5.6',
    surfaceText: 'שְׁלוֹמֵנוּ',
    lemma: 'שָׁלוֹם',
    transliteration: 'šělômēnû',
    lemmaTranslit: 'šālôm',
    morph: 'HNcmsc+Sp1cp',
    strong: 'H7965',
    language: 'hebrew',
    position: 6,
    gloss: 'our peace',
  },
];

export const isa53_5_translation: VerseTranslation = {
  verseRef: 'Isa.53.5',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'But he was pierced for our transgressions, he was crushed for our iniquities; the punishment that brought us peace was on him',
      spans: [
        { tokenIds: ['Isa.53.5.0'], targetSlice: [0, 6], confidence: 'high' },
        { tokenIds: ['Isa.53.5.1'], targetSlice: [7, 18], confidence: 'high' },
        { tokenIds: ['Isa.53.5.2'], targetSlice: [19, 41], confidence: 'high' },
        { tokenIds: ['Isa.53.5.3'], targetSlice: [42, 49], confidence: 'high' },
        { tokenIds: ['Isa.53.5.4'], targetSlice: [50, 68], confidence: 'high' },
        { tokenIds: ['Isa.53.5.5'], targetSlice: [69, 87], confidence: 'high' },
        { tokenIds: ['Isa.53.5.6'], targetSlice: [88, 97], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'But he was pierced for our transgressions, he was crushed for our iniquities; the punishment that brought us peace was on him.',
      spans: [
        { tokenIds: ['Isa.53.5.0'], targetSlice: [0, 18], confidence: 'high' },
        { tokenIds: ['Isa.53.5.1'], targetSlice: [19, 37], confidence: 'high' },
        { tokenIds: ['Isa.53.5.2'], targetSlice: [38, 56], confidence: 'high' },
        { tokenIds: ['Isa.53.5.3'], targetSlice: [57, 75], confidence: 'high' },
        { tokenIds: ['Isa.53.5.4'], targetSlice: [76, 94], confidence: 'high' },
        { tokenIds: ['Isa.53.5.5'], targetSlice: [95, 113], confidence: 'high' },
        { tokenIds: ['Isa.53.5.6'], targetSlice: [114, 126], confidence: 'high' },
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

export const isa53_5_verse = {
  ref: 'Isa.53.5',
  sourceTokens: isa53_5_tokens,
  translation: isa53_5_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 53:6 – All we like sheep have gone astray
 * ──────────────────────────────────────────────────────────── */

export const isa53_6_tokens: SourceToken[] = [
  {
    id: 'Isa.53.6.0',
    surfaceText: 'כֻּלָּנוּ',
    lemma: 'כֹּל',
    transliteration: 'kullānû',
    lemmaTranslit: 'kōl',
    morph: 'HNcmsc+Sp1cp',
    strong: 'H3605',
    language: 'hebrew',
    position: 0,
    gloss: 'all of us',
  },
  {
    id: 'Isa.53.6.1',
    surfaceText: 'כַּצֹּאן',
    lemma: 'צֹאן',
    transliteration: "kaṣṣōʾn",
    lemmaTranslit: "ṣōʾn",
    morph: 'HR+Ncbsa',
    strong: 'H6629',
    language: 'hebrew',
    position: 1,
    gloss: 'like sheep',
  },
  {
    id: 'Isa.53.6.2',
    surfaceText: 'תָּעִינוּ',
    lemma: 'תָּעָה',
    transliteration: "tāʿînû",
    lemmaTranslit: "tāʿāh",
    morph: 'HVqp1cp',
    strong: 'H8582',
    language: 'hebrew',
    position: 2,
    gloss: 'have gone astray',
  },
  {
    id: 'Isa.53.6.3',
    surfaceText: 'אִישׁ',
    lemma: 'אִישׁ',
    transliteration: "ʾîš",
    lemmaTranslit: "ʾîš",
    morph: 'HNcmsa',
    strong: 'H376',
    language: 'hebrew',
    position: 3,
    gloss: 'each',
  },
  {
    id: 'Isa.53.6.4',
    surfaceText: 'לְדַרְכּוֹ',
    lemma: 'דֶּרֶךְ',
    transliteration: 'lěḏarkô',
    lemmaTranslit: 'dereḵ',
    morph: 'HR+Ncbsc+Sp3ms',
    strong: 'H1870',
    language: 'hebrew',
    position: 4,
    gloss: 'to his own way',
  },
  {
    id: 'Isa.53.6.5',
    surfaceText: 'פָּנִינוּ',
    lemma: 'פָּנָה',
    transliteration: 'pānînû',
    lemmaTranslit: 'pānāh',
    morph: 'HVqp1cp',
    strong: 'H6437',
    language: 'hebrew',
    position: 5,
    gloss: 'we have turned',
  },
];

export const isa53_6_translation: VerseTranslation = {
  verseRef: 'Isa.53.6',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'All we like sheep have gone astray; we have turned, every one, to his own way',
      spans: [
        { tokenIds: ['Isa.53.6.0'], targetSlice: [0, 9], confidence: 'high' },
        { tokenIds: ['Isa.53.6.1'], targetSlice: [10, 20], confidence: 'high' },
        { tokenIds: ['Isa.53.6.2'], targetSlice: [21, 37], confidence: 'high' },
        { tokenIds: ['Isa.53.6.3'], targetSlice: [38, 42], confidence: 'high' },
        { tokenIds: ['Isa.53.6.4'], targetSlice: [43, 57], confidence: 'high' },
        { tokenIds: ['Isa.53.6.5'], targetSlice: [58, 72], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'We all, like sheep, have gone astray, each of us has turned to our own way.',
      spans: [
        { tokenIds: ['Isa.53.6.0'], targetSlice: [0, 12], confidence: 'high' },
        { tokenIds: ['Isa.53.6.1'], targetSlice: [13, 25], confidence: 'high' },
        { tokenIds: ['Isa.53.6.2'], targetSlice: [26, 38], confidence: 'high' },
        { tokenIds: ['Isa.53.6.3'], targetSlice: [39, 51], confidence: 'high' },
        { tokenIds: ['Isa.53.6.4'], targetSlice: [52, 64], confidence: 'high' },
        { tokenIds: ['Isa.53.6.5'], targetSlice: [65, 75], confidence: 'high' },
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

export const isa53_6_verse = {
  ref: 'Isa.53.6',
  sourceTokens: isa53_6_tokens,
  translation: isa53_6_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 53:7 – He was oppressed and afflicted
 * ──────────────────────────────────────────────────────────── */

export const isa53_7_tokens: SourceToken[] = [
  {
    id: 'Isa.53.7.0',
    surfaceText: 'נִגַּשׂ',
    lemma: 'נָגַשׂ',
    transliteration: 'niggaś',
    lemmaTranslit: 'nāgaś',
    morph: 'HVNp3ms',
    strong: 'H5065',
    language: 'hebrew',
    position: 0,
    gloss: 'he was oppressed',
  },
  {
    id: 'Isa.53.7.1',
    surfaceText: 'וְהוּא',
    lemma: 'הוּא',
    transliteration: "wěhûʾ",
    lemmaTranslit: "hûʾ",
    morph: 'HC+Pp3ms',
    strong: 'H1931',
    language: 'hebrew',
    position: 1,
    gloss: 'and he',
  },
  {
    id: 'Isa.53.7.2',
    surfaceText: 'נַעֲנֶה',
    lemma: 'עָנָה',
    transliteration: "naʿăneh",
    lemmaTranslit: "ʿānāh",
    morph: 'HVNPtmsa',
    strong: 'H6031',
    language: 'hebrew',
    position: 2,
    gloss: 'was afflicted',
  },
  {
    id: 'Isa.53.7.3',
    surfaceText: 'וְלֹא',
    lemma: 'לֹא',
    transliteration: "wělōʾ",
    lemmaTranslit: "lōʾ",
    morph: 'HC+HAn',
    strong: 'H3808',
    language: 'hebrew',
    position: 3,
    gloss: 'yet not',
  },
  {
    id: 'Isa.53.7.4',
    surfaceText: 'יִפְתַּח',
    lemma: 'פָּתַח',
    transliteration: 'yip̄taḥ',
    lemmaTranslit: 'pāṯaḥ',
    morph: 'HVqI3ms',
    strong: 'H6605',
    language: 'hebrew',
    position: 4,
    gloss: 'did he open',
  },
  {
    id: 'Isa.53.7.5',
    surfaceText: 'פִּיו',
    lemma: 'פֶּה',
    transliteration: 'pîw',
    lemmaTranslit: 'peh',
    morph: 'HNcmsc+Sp3ms',
    strong: 'H6310',
    language: 'hebrew',
    position: 5,
    gloss: 'his mouth',
  },
];

export const isa53_7_translation: VerseTranslation = {
  verseRef: 'Isa.53.7',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'He was oppressed and afflicted, yet he did not open his mouth',
      spans: [
        { tokenIds: ['Isa.53.7.0'], targetSlice: [0, 16], confidence: 'high' },
        { tokenIds: ['Isa.53.7.1'], targetSlice: [17, 23], confidence: 'high' },
        { tokenIds: ['Isa.53.7.2'], targetSlice: [24, 37], confidence: 'high' },
        { tokenIds: ['Isa.53.7.3'], targetSlice: [38, 45], confidence: 'high' },
        { tokenIds: ['Isa.53.7.4'], targetSlice: [46, 57], confidence: 'high' },
        { tokenIds: ['Isa.53.7.5'], targetSlice: [58, 67], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'He was oppressed and afflicted, yet he did not open his mouth.',
      spans: [
        { tokenIds: ['Isa.53.7.0'], targetSlice: [0, 10], confidence: 'high' },
        { tokenIds: ['Isa.53.7.1'], targetSlice: [11, 21], confidence: 'high' },
        { tokenIds: ['Isa.53.7.2'], targetSlice: [22, 32], confidence: 'high' },
        { tokenIds: ['Isa.53.7.3'], targetSlice: [33, 43], confidence: 'high' },
        { tokenIds: ['Isa.53.7.4'], targetSlice: [44, 54], confidence: 'high' },
        { tokenIds: ['Isa.53.7.5'], targetSlice: [55, 62], confidence: 'high' },
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

export const isa53_7_verse = {
  ref: 'Isa.53.7',
  sourceTokens: isa53_7_tokens,
  translation: isa53_7_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Verse 53:12 – He poured out his soul to death
 * ──────────────────────────────────────────────────────────── */

export const isa53_12_tokens: SourceToken[] = [
  {
    id: 'Isa.53.12.0',
    surfaceText: 'הֶעֱרָה',
    lemma: 'עָרָה',
    transliteration: "heʿĕrāh",
    lemmaTranslit: "ʿārāh",
    morph: 'HVhp3ms',
    strong: 'H6168',
    language: 'hebrew',
    position: 0,
    gloss: 'he poured out',
  },
  {
    id: 'Isa.53.12.1',
    surfaceText: 'לַמָּוֶת',
    lemma: 'מָוֶת',
    transliteration: 'lammāweṯ',
    lemmaTranslit: 'māweṯ',
    morph: 'HR+Ncmsa',
    strong: 'H4194',
    language: 'hebrew',
    position: 1,
    gloss: 'to death',
  },
  {
    id: 'Isa.53.12.2',
    surfaceText: 'נַפְשׁוֹ',
    lemma: 'נֶפֶשׁ',
    transliteration: 'nap̄šô',
    lemmaTranslit: 'nep̄eš',
    morph: 'HNcfsc+Sp3ms',
    strong: 'H5315',
    language: 'hebrew',
    position: 2,
    gloss: 'his soul',
  },
  {
    id: 'Isa.53.12.3',
    surfaceText: 'וְאֶת',
    lemma: 'אֵת',
    transliteration: "wěʾeṯ",
    lemmaTranslit: "ʾēṯ",
    morph: 'HC+HTo',
    strong: 'H853',
    language: 'hebrew',
    position: 3,
    gloss: 'and',
  },
  {
    id: 'Isa.53.12.4',
    surfaceText: 'פֹּשְׁעִים',
    lemma: 'פָּשַׁע',
    transliteration: "pōšěʿîm",
    lemmaTranslit: "pāšaʿ",
    morph: 'HVqPtmpa',
    strong: 'H6586',
    language: 'hebrew',
    position: 4,
    gloss: 'the transgressors',
  },
  {
    id: 'Isa.53.12.5',
    surfaceText: 'נִמְנָה',
    lemma: 'מָנָה',
    transliteration: 'nimnāh',
    lemmaTranslit: 'mānāh',
    morph: 'HVNp3ms',
    strong: 'H4487',
    language: 'hebrew',
    position: 5,
    gloss: 'he was numbered',
  },
];

export const isa53_12_translation: VerseTranslation = {
  verseRef: 'Isa.53.12',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'He poured out his soul to death and was numbered with the transgressors',
      spans: [
        { tokenIds: ['Isa.53.12.0'], targetSlice: [0, 13], confidence: 'high' },
        { tokenIds: ['Isa.53.12.1'], targetSlice: [14, 22], confidence: 'high' },
        { tokenIds: ['Isa.53.12.2'], targetSlice: [23, 31], confidence: 'high' },
        { tokenIds: ['Isa.53.12.3'], targetSlice: [32, 35], confidence: 'high' },
        { tokenIds: ['Isa.53.12.4'], targetSlice: [36, 53], confidence: 'high' },
        { tokenIds: ['Isa.53.12.5'], targetSlice: [54, 69], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'Because he poured out his life unto death, and was numbered with the transgressors.',
      spans: [
        { tokenIds: ['Isa.53.12.0'], targetSlice: [0, 13], confidence: 'high' },
        { tokenIds: ['Isa.53.12.1'], targetSlice: [14, 27], confidence: 'high' },
        { tokenIds: ['Isa.53.12.2'], targetSlice: [28, 41], confidence: 'high' },
        { tokenIds: ['Isa.53.12.3'], targetSlice: [42, 55], confidence: 'high' },
        { tokenIds: ['Isa.53.12.4'], targetSlice: [56, 69], confidence: 'high' },
        { tokenIds: ['Isa.53.12.5'], targetSlice: [70, 83], confidence: 'high' },
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

export const isa53_12_verse = {
  ref: 'Isa.53.12',
  sourceTokens: isa53_12_tokens,
  translation: isa53_12_translation,
  notes: [] as StudyNote[],
};

/* ────────────────────────────────────────────────────────────
 * Combined export — Isaiah 53:1-12 — The Suffering Servant
 * ──────────────────────────────────────────────────────────── */

export const isaiah53_1_12_verses = [
  isa53_1_verse,
  isa53_2_verse,
  isa53_3_verse,
  isa53_4_verse,
  isa53_5_verse,
  isa53_6_verse,
  isa53_7_verse,
  isa53_12_verse,
];

export default isaiah53_1_12_verses;
