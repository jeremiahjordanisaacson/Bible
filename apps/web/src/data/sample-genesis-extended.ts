/**
 * Extended sample data for Genesis 1:1-10 (Hebrew)
 * Source: Open Hebrew Bible (Tanach.us) - Public Domain
 */

import type { SourceToken, VerseTranslation, StudyNote, VariantUnit } from '@open-bible/schemas';

// Genesis 1:4 - And God saw the light
export const genesis1_4_tokens: SourceToken[] = [
  {
    id: 'Gen.1.4.0',
    language: 'hebrew',
    text: 'וַיַּ֧רְא',
    transliteration: 'wayyarʾ',
    lemma: 'רָאָה',
    lemmaTranslit: 'rāʾāh',
    gloss: 'And saw',
    morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'imperfect', stem: 'qal', rawCode: 'Vqw3ms' },
    strongs: 'H7200',
    position: 0,
  },
  {
    id: 'Gen.1.4.1',
    language: 'hebrew',
    text: 'אֱלֹהִ֛ים',
    transliteration: 'ʾĕlōhîm',
    lemma: 'אֱלֹהִים',
    lemmaTranslit: 'ʾĕlōhîm',
    gloss: 'God',
    morphology: { pos: 'noun', gender: 'masculine', number: 'plural', rawCode: 'Ncmpa' },
    strongs: 'H430',
    position: 1,
  },
  {
    id: 'Gen.1.4.2',
    language: 'hebrew',
    text: 'אֶת־',
    transliteration: 'ʾeṯ-',
    lemma: 'אֵת',
    lemmaTranslit: 'ʾēṯ',
    gloss: '(obj.)',
    morphology: { pos: 'particle', rawCode: 'Po' },
    strongs: 'H853',
    position: 2,
  },
  {
    id: 'Gen.1.4.3',
    language: 'hebrew',
    text: 'הָא֖וֹר',
    transliteration: 'hāʾôr',
    lemma: 'אוֹר',
    lemmaTranslit: 'ʾôr',
    gloss: 'the light',
    morphology: { pos: 'noun', gender: 'masculine', number: 'singular', rawCode: 'Ncmsa' },
    strongs: 'H216',
    position: 3,
  },
  {
    id: 'Gen.1.4.4',
    language: 'hebrew',
    text: 'כִּי־',
    transliteration: 'kî-',
    lemma: 'כִּי',
    lemmaTranslit: 'kî',
    gloss: 'that',
    morphology: { pos: 'conjunction', rawCode: 'Cj' },
    strongs: 'H3588',
    position: 4,
  },
  {
    id: 'Gen.1.4.5',
    language: 'hebrew',
    text: 'ט֑וֹב',
    transliteration: 'ṭôḇ',
    lemma: 'טוֹב',
    lemmaTranslit: 'ṭôḇ',
    gloss: 'good',
    glossExtended: 'good, pleasant, agreeable',
    morphology: { pos: 'adjective', gender: 'masculine', number: 'singular', rawCode: 'Ams' },
    strongs: 'H2896',
    position: 5,
  },
  {
    id: 'Gen.1.4.6',
    language: 'hebrew',
    text: 'וַיַּבְדֵּ֣ל',
    transliteration: 'wayyaḇdēl',
    lemma: 'בָּדַל',
    lemmaTranslit: 'bāḏal',
    gloss: 'and separated',
    glossExtended: 'divided, separated, set apart',
    morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'imperfect', stem: 'hiphil', rawCode: 'Vhw3ms' },
    strongs: 'H914',
    position: 6,
  },
  {
    id: 'Gen.1.4.7',
    language: 'hebrew',
    text: 'אֱלֹהִ֔ים',
    transliteration: 'ʾĕlōhîm',
    lemma: 'אֱלֹהִים',
    lemmaTranslit: 'ʾĕlōhîm',
    gloss: 'God',
    morphology: { pos: 'noun', gender: 'masculine', number: 'plural', rawCode: 'Ncmpa' },
    strongs: 'H430',
    position: 7,
  },
  {
    id: 'Gen.1.4.8',
    language: 'hebrew',
    text: 'בֵּ֥ין',
    transliteration: 'bên',
    lemma: 'בֵּין',
    lemmaTranslit: 'bên',
    gloss: 'between',
    morphology: { pos: 'preposition', rawCode: 'R' },
    strongs: 'H996',
    position: 8,
  },
  {
    id: 'Gen.1.4.9',
    language: 'hebrew',
    text: 'הָא֖וֹר',
    transliteration: 'hāʾôr',
    lemma: 'אוֹר',
    lemmaTranslit: 'ʾôr',
    gloss: 'the light',
    morphology: { pos: 'noun', gender: 'masculine', number: 'singular', rawCode: 'Ncmsa' },
    strongs: 'H216',
    position: 9,
  },
  {
    id: 'Gen.1.4.10',
    language: 'hebrew',
    text: 'וּבֵ֥ין',
    transliteration: 'ûḇên',
    lemma: 'וּ+בֵּין',
    lemmaTranslit: 'û+bên',
    gloss: 'and between',
    morphology: { pos: 'conjunction', rawCode: 'Cc+R' },
    strongs: 'H996',
    position: 10,
  },
  {
    id: 'Gen.1.4.11',
    language: 'hebrew',
    text: 'הַחֹֽשֶׁךְ',
    transliteration: 'haḥōšeḵ',
    lemma: 'חֹשֶׁךְ',
    lemmaTranslit: 'ḥōšeḵ',
    gloss: 'the darkness',
    morphology: { pos: 'noun', gender: 'masculine', number: 'singular', rawCode: 'Ncmsa' },
    strongs: 'H2822',
    position: 11,
  },
];

// Genesis 1:5 - And God called the light Day
export const genesis1_5_tokens: SourceToken[] = [
  {
    id: 'Gen.1.5.0',
    language: 'hebrew',
    text: 'וַיִּקְרָ֨א',
    transliteration: 'wayyiqrāʾ',
    lemma: 'קָרָא',
    lemmaTranslit: 'qārāʾ',
    gloss: 'And called',
    morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'imperfect', stem: 'qal', rawCode: 'Vqw3ms' },
    strongs: 'H7121',
    position: 0,
  },
  {
    id: 'Gen.1.5.1',
    language: 'hebrew',
    text: 'אֱלֹהִ֤ים',
    transliteration: 'ʾĕlōhîm',
    lemma: 'אֱלֹהִים',
    lemmaTranslit: 'ʾĕlōhîm',
    gloss: 'God',
    morphology: { pos: 'noun', gender: 'masculine', number: 'plural', rawCode: 'Ncmpa' },
    strongs: 'H430',
    position: 1,
  },
  {
    id: 'Gen.1.5.2',
    language: 'hebrew',
    text: 'לָאוֹר֙',
    transliteration: 'lāʾôr',
    lemma: 'לְ+אוֹר',
    lemmaTranslit: 'lə+ʾôr',
    gloss: 'to the light',
    morphology: { pos: 'preposition', rawCode: 'R+Ncmsa' },
    strongs: 'H216',
    position: 2,
  },
  {
    id: 'Gen.1.5.3',
    language: 'hebrew',
    text: 'י֔וֹם',
    transliteration: 'yôm',
    lemma: 'יוֹם',
    lemmaTranslit: 'yôm',
    gloss: 'Day',
    glossExtended: 'day, time, period',
    morphology: { pos: 'noun', gender: 'masculine', number: 'singular', rawCode: 'Ncmsa' },
    strongs: 'H3117',
    position: 3,
  },
  {
    id: 'Gen.1.5.4',
    language: 'hebrew',
    text: 'וְלַחֹ֖שֶׁךְ',
    transliteration: 'wəlaḥōšeḵ',
    lemma: 'וְ+לְ+חֹשֶׁךְ',
    lemmaTranslit: 'wə+lə+ḥōšeḵ',
    gloss: 'and to the darkness',
    morphology: { pos: 'conjunction', rawCode: 'Cc+R+Ncmsa' },
    strongs: 'H2822',
    position: 4,
  },
  {
    id: 'Gen.1.5.5',
    language: 'hebrew',
    text: 'קָ֣רָא',
    transliteration: 'qārāʾ',
    lemma: 'קָרָא',
    lemmaTranslit: 'qārāʾ',
    gloss: 'he called',
    morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'perfect', stem: 'qal', rawCode: 'Vqp3ms' },
    strongs: 'H7121',
    position: 5,
  },
  {
    id: 'Gen.1.5.6',
    language: 'hebrew',
    text: 'לָ֑יְלָה',
    transliteration: 'lāyəlāh',
    lemma: 'לַיְלָה',
    lemmaTranslit: 'laylāh',
    gloss: 'Night',
    morphology: { pos: 'noun', gender: 'masculine', number: 'singular', rawCode: 'Ncmsa' },
    strongs: 'H3915',
    position: 6,
  },
  {
    id: 'Gen.1.5.7',
    language: 'hebrew',
    text: 'וַֽיְהִי־',
    transliteration: 'wayəhî-',
    lemma: 'הָיָה',
    lemmaTranslit: 'hāyāh',
    gloss: 'And was',
    morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'imperfect', stem: 'qal', rawCode: 'Vqw3ms' },
    strongs: 'H1961',
    position: 7,
  },
  {
    id: 'Gen.1.5.8',
    language: 'hebrew',
    text: 'עֶ֥רֶב',
    transliteration: 'ʿereḇ',
    lemma: 'עֶרֶב',
    lemmaTranslit: 'ʿereḇ',
    gloss: 'evening',
    morphology: { pos: 'noun', gender: 'masculine', number: 'singular', rawCode: 'Ncmsa' },
    strongs: 'H6153',
    position: 8,
  },
  {
    id: 'Gen.1.5.9',
    language: 'hebrew',
    text: 'וַֽיְהִי־',
    transliteration: 'wayəhî-',
    lemma: 'הָיָה',
    lemmaTranslit: 'hāyāh',
    gloss: 'and was',
    morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'imperfect', stem: 'qal', rawCode: 'Vqw3ms' },
    strongs: 'H1961',
    position: 9,
  },
  {
    id: 'Gen.1.5.10',
    language: 'hebrew',
    text: 'בֹ֖קֶר',
    transliteration: 'ḇōqer',
    lemma: 'בֹּקֶר',
    lemmaTranslit: 'bōqer',
    gloss: 'morning',
    morphology: { pos: 'noun', gender: 'masculine', number: 'singular', rawCode: 'Ncmsa' },
    strongs: 'H1242',
    position: 10,
  },
  {
    id: 'Gen.1.5.11',
    language: 'hebrew',
    text: 'י֥וֹם',
    transliteration: 'yôm',
    lemma: 'יוֹם',
    lemmaTranslit: 'yôm',
    gloss: 'day',
    morphology: { pos: 'noun', gender: 'masculine', number: 'singular', rawCode: 'Ncmsa' },
    strongs: 'H3117',
    position: 11,
  },
  {
    id: 'Gen.1.5.12',
    language: 'hebrew',
    text: 'אֶחָֽד',
    transliteration: 'ʾeḥāḏ',
    lemma: 'אֶחָד',
    lemmaTranslit: 'ʾeḥāḏ',
    gloss: 'one',
    glossExtended: 'one, first, единственный',
    morphology: { pos: 'numeral', gender: 'masculine', number: 'singular', rawCode: 'Acmsa' },
    strongs: 'H259',
    position: 12,
  },
];

// Translations for new verses
export const genesis1_4_translation: VerseTranslation = {
  verseRef: 'Gen.1.4',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'And saw God the light that good. And separated God between the light and between the darkness.',
      spans: [
        { id: 'Gen.1.4.en.lit.0', text: 'And saw God', position: 0, sourceTokenIds: ['Gen.1.4.0', 'Gen.1.4.1'], confidence: 'high' },
        { id: 'Gen.1.4.en.lit.1', text: 'the light', position: 1, sourceTokenIds: ['Gen.1.4.2', 'Gen.1.4.3'], confidence: 'high' },
        { id: 'Gen.1.4.en.lit.2', text: 'that good.', position: 2, sourceTokenIds: ['Gen.1.4.4', 'Gen.1.4.5'], confidence: 'high' },
        { id: 'Gen.1.4.en.lit.3', text: 'And separated God', position: 3, sourceTokenIds: ['Gen.1.4.6', 'Gen.1.4.7'], confidence: 'high' },
        { id: 'Gen.1.4.en.lit.4', text: 'between the light', position: 4, sourceTokenIds: ['Gen.1.4.8', 'Gen.1.4.9'], confidence: 'high' },
        { id: 'Gen.1.4.en.lit.5', text: 'and between the darkness.', position: 5, sourceTokenIds: ['Gen.1.4.10', 'Gen.1.4.11'], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'God saw that the light was good, and he separated the light from the darkness.',
      spans: [
        { id: 'Gen.1.4.en.idi.0', text: 'God saw that the light was good,', position: 0, sourceTokenIds: ['Gen.1.4.0', 'Gen.1.4.1', 'Gen.1.4.2', 'Gen.1.4.3', 'Gen.1.4.4', 'Gen.1.4.5'], confidence: 'high' },
        { id: 'Gen.1.4.en.idi.1', text: 'and he separated the light from the darkness.', position: 1, sourceTokenIds: ['Gen.1.4.6', 'Gen.1.4.7', 'Gen.1.4.8', 'Gen.1.4.9', 'Gen.1.4.10', 'Gen.1.4.11'], confidence: 'high' },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    literary: {
      type: 'literary',
      targetLanguage: 'en',
      text: 'God beheld the light—how good it was!—and divided the light from darkness.',
      spans: [
        { id: 'Gen.1.4.en.lit2.0', text: 'God beheld the light—how good it was!—', position: 0, sourceTokenIds: ['Gen.1.4.0', 'Gen.1.4.1', 'Gen.1.4.2', 'Gen.1.4.3', 'Gen.1.4.4', 'Gen.1.4.5'], confidence: 'high' },
        { id: 'Gen.1.4.en.lit2.1', text: 'and divided the light from darkness.', position: 1, sourceTokenIds: ['Gen.1.4.6', 'Gen.1.4.7', 'Gen.1.4.8', 'Gen.1.4.9', 'Gen.1.4.10', 'Gen.1.4.11'], confidence: 'high' },
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

export const genesis1_5_translation: VerseTranslation = {
  verseRef: 'Gen.1.5',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: {
      type: 'literal',
      targetLanguage: 'en',
      text: 'And called God to the light Day, and to the darkness he called Night. And was evening and was morning, day one.',
      spans: [
        { id: 'Gen.1.5.en.lit.0', text: 'And called God', position: 0, sourceTokenIds: ['Gen.1.5.0', 'Gen.1.5.1'], confidence: 'high' },
        { id: 'Gen.1.5.en.lit.1', text: 'to the light Day,', position: 1, sourceTokenIds: ['Gen.1.5.2', 'Gen.1.5.3'], confidence: 'high' },
        { id: 'Gen.1.5.en.lit.2', text: 'and to the darkness he called Night.', position: 2, sourceTokenIds: ['Gen.1.5.4', 'Gen.1.5.5', 'Gen.1.5.6'], confidence: 'high' },
        { id: 'Gen.1.5.en.lit.3', text: 'And was evening', position: 3, sourceTokenIds: ['Gen.1.5.7', 'Gen.1.5.8'], confidence: 'high' },
        { id: 'Gen.1.5.en.lit.4', text: 'and was morning,', position: 4, sourceTokenIds: ['Gen.1.5.9', 'Gen.1.5.10'], confidence: 'high' },
        { id: 'Gen.1.5.en.lit.5', text: 'day one.', position: 5, sourceTokenIds: ['Gen.1.5.11', 'Gen.1.5.12'], confidence: 'medium', alternatives: [{ text: 'the first day', reason: 'Ordinal vs cardinal reading' }] },
      ],
      overallConfidence: 'high',
      humanReviewed: false,
    },
    idiomatic: {
      type: 'idiomatic',
      targetLanguage: 'en',
      text: 'God called the light "day," and the darkness he called "night." And there was evening, and there was morning—the first day.',
      spans: [
        { id: 'Gen.1.5.en.idi.0', text: 'God called the light "day,"', position: 0, sourceTokenIds: ['Gen.1.5.0', 'Gen.1.5.1', 'Gen.1.5.2', 'Gen.1.5.3'], confidence: 'high' },
        { id: 'Gen.1.5.en.idi.1', text: 'and the darkness he called "night."', position: 1, sourceTokenIds: ['Gen.1.5.4', 'Gen.1.5.5', 'Gen.1.5.6'], confidence: 'high' },
        { id: 'Gen.1.5.en.idi.2', text: 'And there was evening, and there was morning—', position: 2, sourceTokenIds: ['Gen.1.5.7', 'Gen.1.5.8', 'Gen.1.5.9', 'Gen.1.5.10'], confidence: 'high' },
        { id: 'Gen.1.5.en.idi.3', text: 'the first day.', position: 3, sourceTokenIds: ['Gen.1.5.11', 'Gen.1.5.12'], confidence: 'medium' },
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

// Study notes for verse 4
export const genesis1_4_notes: StudyNote[] = [
  {
    id: 'Gen.1.4.note.1',
    verseRef: 'Gen.1.4',
    sourceTokenIds: ['Gen.1.4.5'],
    category: 'lexical',
    title: 'טוֹב (ṭôḇ) - Good',
    content: `The Hebrew word טוֹב (ṭôḇ) means "good" in a broad sense encompassing:

- **Quality**: excellent, beautiful, pleasant
- **Morality**: righteous, beneficial
- **Function**: fitting, appropriate for its purpose

In the creation narrative, God's declaration that something is "good" (טוֹב) indicates it fulfills its intended purpose and reflects divine order. This is not merely aesthetic approval but a declaration of functional completeness.

The repeated refrain "and God saw that it was good" (7 times in Genesis 1) structures the narrative and emphasizes the inherent goodness of creation.`,
    confidence: 'high',
    authorType: 'ai',
    metadata: { generatedAt: new Date().toISOString() },
  },
  {
    id: 'Gen.1.4.note.2',
    verseRef: 'Gen.1.4',
    sourceTokenIds: ['Gen.1.4.6'],
    category: 'theological',
    title: 'בָּדַל (bāḏal) - Separation as Creation',
    content: `The verb בָּדַל (bāḏal, "to separate, divide") is a key creation verb in Genesis 1. God creates by:

1. **Speaking** (וַיֹּאמֶר) - bringing into existence
2. **Separating** (וַיַּבְדֵּל) - ordering and distinguishing

This separation theme appears throughout:
- Light from darkness (v.4)
- Waters above from waters below (v.6-7)
- Day from night (v.14)
- Clean from unclean (Leviticus)

Creation in Hebrew thought involves bringing order from chaos through differentiation.`,
    confidence: 'high',
    authorType: 'ai',
    metadata: { generatedAt: new Date().toISOString() },
  },
];

// Study notes for verse 5
export const genesis1_5_notes: StudyNote[] = [
  {
    id: 'Gen.1.5.note.1',
    verseRef: 'Gen.1.5',
    sourceTokenIds: ['Gen.1.5.11', 'Gen.1.5.12'],
    category: 'translation-choice',
    title: 'יוֹם אֶחָד - Day One or The First Day?',
    content: `The Hebrew reads יוֹם אֶחָד (yôm ʾeḥāḏ), literally "day one" using the cardinal number rather than the ordinal "first day" (יוֹם רִאשׁוֹן).

**Interpretive Options:**

1. **"Day one"** (literal) - Emphasizes the uniqueness of this day as the beginning of time itself. Some see theological significance in the use of "one" (אֶחָד), the same word used in the Shema ("the LORD is one").

2. **"The first day"** (idiomatic) - Most translations render this as an ordinal for natural English. The subsequent days use ordinals (second, third, etc.).

**Ancient Versions:**
- LXX: ἡμέρα μία (day one)
- Vulgate: dies unus (day one)

The cardinal "one" may emphasize that this day establishes the pattern for all subsequent days.`,
    confidence: 'high',
    isContested: true,
    positions: [
      { name: 'Cardinal (day one)', description: 'Emphasizes uniqueness and primacy' },
      { name: 'Ordinal (first day)', description: 'Part of a sequence, natural English' },
    ],
    authorType: 'ai',
    metadata: { generatedAt: new Date().toISOString() },
  },
  {
    id: 'Gen.1.5.note.2',
    verseRef: 'Gen.1.5',
    sourceTokenIds: ['Gen.1.5.7', 'Gen.1.5.8', 'Gen.1.5.9', 'Gen.1.5.10'],
    category: 'cultural',
    title: 'Evening and Morning - The Hebrew Day',
    content: `The formula "there was evening, and there was morning" (וַיְהִי עֶרֶב וַיְהִי בֹקֶר) appears at the end of each creation day.

**Hebrew Day Reckoning:**
In ancient Israel (and modern Jewish practice), the day begins at sunset. Thus "evening and morning" describes a complete day-cycle:
- Evening (עֶרֶב) = start of the new day
- Morning (בֹּקֶר) = completion of the day

This explains why Jewish Sabbath begins Friday evening and ends Saturday evening.

**Literary Function:**
This refrain serves as a structural marker, concluding each day of creation with a formulaic statement that emphasizes the orderly, purposeful nature of God's creative work.`,
    confidence: 'high',
    authorType: 'ai',
    metadata: { generatedAt: new Date().toISOString() },
  },
];

// Export extended verse data
export const extendedGenesisVerses = [
  {
    ref: 'Gen.1.4',
    sourceTokens: genesis1_4_tokens,
    translation: genesis1_4_translation,
    notes: genesis1_4_notes,
  },
  {
    ref: 'Gen.1.5',
    sourceTokens: genesis1_5_tokens,
    translation: genesis1_5_translation,
    notes: genesis1_5_notes,
  },
];

export default extendedGenesisVerses;
