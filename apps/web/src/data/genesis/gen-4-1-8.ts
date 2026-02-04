/**
 * Genesis 4:1-8 - Hebrew morphological data
 * Cain and Abel: birth, offerings, murder
 * Source: Open Hebrew Bible (Tanach.us) - Public Domain
 */

import type { SourceToken, VerseTranslation, StudyNote } from '@open-bible/schemas';

// Genesis 4:1 - Adam knew Eve, she bore Cain
export const genesis4_1_tokens: SourceToken[] = [
  { id: 'Gen.4.1.0', language: 'hebrew', text: 'וְהָ֣אָדָ֔ם', transliteration: 'wəhāʾāḏām', lemma: 'אָדָם', lemmaTranslit: 'ʾāḏām', gloss: 'And the man', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'absolute', rawCode: 'Ncmsa' }, strongs: 'H120', position: 0 },
  { id: 'Gen.4.1.1', language: 'hebrew', text: 'יָדַ֖ע', transliteration: 'yāḏaʿ', lemma: 'יָדַע', lemmaTranslit: 'yāḏaʿ', gloss: 'knew', glossExtended: 'to know (euphemism for sexual relations)', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'perfect', stem: 'qal', rawCode: 'Vqp3ms' }, strongs: 'H3045', position: 1 },
  { id: 'Gen.4.1.2', language: 'hebrew', text: 'אֶת־חַוָּ֣ה', transliteration: 'ʾeṯ-ḥawwāh', lemma: 'חַוָּה', lemmaTranslit: 'ḥawwāh', gloss: 'Eve', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H2332', position: 2 },
  { id: 'Gen.4.1.3', language: 'hebrew', text: 'אִשְׁתּ֑וֹ', transliteration: 'ʾištô', lemma: 'אִשָּׁה', lemmaTranslit: 'ʾiššāh', gloss: 'his wife', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'construct', rawCode: 'Ncfsc' }, strongs: 'H802', position: 3 },
  { id: 'Gen.4.1.4', language: 'hebrew', text: 'וַתַּ֙הַר֙', transliteration: 'wattahar', lemma: 'הָרָה', lemmaTranslit: 'hārāh', gloss: 'and she conceived', morphology: { pos: 'verb', person: '3', gender: 'feminine', number: 'singular', tense: 'imperfect', stem: 'qal', rawCode: 'Vqw3fs' }, strongs: 'H2029', position: 4 },
  { id: 'Gen.4.1.5', language: 'hebrew', text: 'וַתֵּ֣לֶד', transliteration: 'wattēleḏ', lemma: 'יָלַד', lemmaTranslit: 'yālaḏ', gloss: 'and bore', morphology: { pos: 'verb', person: '3', gender: 'feminine', number: 'singular', tense: 'imperfect', stem: 'qal', rawCode: 'Vqw3fs' }, strongs: 'H3205', position: 5 },
  { id: 'Gen.4.1.6', language: 'hebrew', text: 'אֶת־קַ֔יִן', transliteration: 'ʾeṯ-qayin', lemma: 'קַיִן', lemmaTranslit: 'qayin', gloss: 'Cain', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H7014', position: 6 },
  { id: 'Gen.4.1.7', language: 'hebrew', text: 'וַתֹּ֕אמֶר', transliteration: 'wattōʾmer', lemma: 'אָמַר', lemmaTranslit: 'ʾāmar', gloss: 'and she said', morphology: { pos: 'verb', person: '3', gender: 'feminine', number: 'singular', tense: 'imperfect', stem: 'qal', rawCode: 'Vqw3fs' }, strongs: 'H559', position: 7 },
  { id: 'Gen.4.1.8', language: 'hebrew', text: 'קָנִ֥יתִי', transliteration: 'qānîṯî', lemma: 'קָנָה', lemmaTranslit: 'qānāh', gloss: 'I have acquired', glossExtended: 'to acquire, get, possess', morphology: { pos: 'verb', person: '1', gender: 'common', number: 'singular', tense: 'perfect', stem: 'qal', rawCode: 'Vqp1cs' }, strongs: 'H7069', position: 8 },
  { id: 'Gen.4.1.9', language: 'hebrew', text: 'אִ֖ישׁ', transliteration: 'ʾîš', lemma: 'אִישׁ', lemmaTranslit: 'ʾîš', gloss: 'a man', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'absolute', rawCode: 'Ncmsa' }, strongs: 'H376', position: 9 },
  { id: 'Gen.4.1.10', language: 'hebrew', text: 'אֶת־יְהוָֽה', transliteration: 'ʾeṯ-yhwh', lemma: 'יְהוָה', lemmaTranslit: 'yhwh', gloss: 'with YHWH', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H3068', position: 10 },
];

export const genesis4_1_translation: VerseTranslation = {
  verseRef: 'Gen.4.1',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: { type: 'literal', targetLanguage: 'en', text: 'And the man knew Eve his wife; and she conceived and bore Cain, and she said: I have acquired a man with YHWH.', spans: [{ id: 'Gen.4.1.en.lit.0', text: 'And the man knew Eve his wife...', position: 0, sourceTokenIds: ['Gen.4.1.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
    idiomatic: { type: 'idiomatic', targetLanguage: 'en', text: 'Now Adam knew Eve his wife, and she conceived and bore Cain, saying, "I have gotten a man with the help of the LORD."', spans: [{ id: 'Gen.4.1.en.idi.0', text: 'Now Adam knew Eve his wife, and she conceived...', position: 0, sourceTokenIds: ['Gen.4.1.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
  },
  metadata: { pipelineVersion: '0.1.0', generatedAt: new Date().toISOString(), engineId: 'open-bible-pipeline', engineVersion: '0.1.0', sourceDataVersion: '1.0.0' },
};

export const genesis4_1_notes: StudyNote[] = [
  { id: 'Gen.4.1.note.1', verseRef: 'Gen.4.1', sourceTokenIds: ['Gen.4.1.6', 'Gen.4.1.8'], category: 'lexical', title: 'Cain (qayin) and Acquire (qānāh)', content: 'Eve names her son Cain (qayin), playing on the verb qānāh (to acquire/get). She recognizes God\'s help in bringing forth life.', confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
];

// Genesis 4:2 - Birth of Abel
export const genesis4_2_tokens: SourceToken[] = [
  { id: 'Gen.4.2.0', language: 'hebrew', text: 'וַתֹּ֣סֶף', transliteration: 'wattōsep̄', lemma: 'יָסַף', lemmaTranslit: 'yāsap̄', gloss: 'And she continued', morphology: { pos: 'verb', person: '3', gender: 'feminine', number: 'singular', tense: 'imperfect', stem: 'hiphil', rawCode: 'Vhw3fs' }, strongs: 'H3254', position: 0 },
  { id: 'Gen.4.2.1', language: 'hebrew', text: 'לָלֶ֔דֶת', transliteration: 'lāleḏeṯ', lemma: 'יָלַד', lemmaTranslit: 'yālaḏ', gloss: 'to bear', morphology: { pos: 'verb', mood: 'infinitive', stem: 'qal', rawCode: 'Vqc' }, strongs: 'H3205', position: 1 },
  { id: 'Gen.4.2.2', language: 'hebrew', text: 'אֶת־אָחִ֖יו', transliteration: 'ʾeṯ-ʾāḥîw', lemma: 'אָח', lemmaTranslit: 'ʾāḥ', gloss: 'his brother', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'construct', rawCode: 'Ncmsc' }, strongs: 'H251', position: 2 },
  { id: 'Gen.4.2.3', language: 'hebrew', text: 'אֶת־הָ֑בֶל', transliteration: 'ʾeṯ-hāḇel', lemma: 'הֶבֶל', lemmaTranslit: 'heḇel', gloss: 'Abel', glossExtended: 'Abel (breath, vapor)', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H1893', position: 3 },
  { id: 'Gen.4.2.4', language: 'hebrew', text: 'וַֽיְהִי־', transliteration: 'wayəhî-', lemma: 'הָיָה', lemmaTranslit: 'hāyāh', gloss: 'And was', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'imperfect', stem: 'qal', rawCode: 'Vqw3ms' }, strongs: 'H1961', position: 4 },
  { id: 'Gen.4.2.5', language: 'hebrew', text: 'הֶ֙בֶל֙', transliteration: 'heḇel', lemma: 'הֶבֶל', lemmaTranslit: 'heḇel', gloss: 'Abel', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H1893', position: 5 },
  { id: 'Gen.4.2.6', language: 'hebrew', text: 'רֹ֣עֵה', transliteration: 'rōʿēh', lemma: 'רָעָה', lemmaTranslit: 'rāʿāh', gloss: 'a keeper of', glossExtended: 'shepherd, one who tends', morphology: { pos: 'verb', mood: 'participle', stem: 'qal', rawCode: 'Vqrms' }, strongs: 'H7462', position: 6 },
  { id: 'Gen.4.2.7', language: 'hebrew', text: 'צֹ֔אן', transliteration: 'ṣōʾn', lemma: 'צֹאן', lemmaTranslit: 'ṣōʾn', gloss: 'sheep', glossExtended: 'flock, sheep, goats', morphology: { pos: 'noun', gender: 'common', number: 'singular', state: 'absolute', rawCode: 'Ncbsa' }, strongs: 'H6629', position: 7 },
  { id: 'Gen.4.2.8', language: 'hebrew', text: 'וְקַ֕יִן', transliteration: 'wəqayin', lemma: 'קַיִן', lemmaTranslit: 'qayin', gloss: 'and Cain', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H7014', position: 8 },
  { id: 'Gen.4.2.9', language: 'hebrew', text: 'הָיָ֖ה', transliteration: 'hāyāh', lemma: 'הָיָה', lemmaTranslit: 'hāyāh', gloss: 'was', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'perfect', stem: 'qal', rawCode: 'Vqp3ms' }, strongs: 'H1961', position: 9 },
  { id: 'Gen.4.2.10', language: 'hebrew', text: 'עֹבֵ֥ד', transliteration: 'ʿōḇēḏ', lemma: 'עָבַד', lemmaTranslit: 'ʿāḇaḏ', gloss: 'a worker of', morphology: { pos: 'verb', mood: 'participle', stem: 'qal', rawCode: 'Vqrms' }, strongs: 'H5647', position: 10 },
  { id: 'Gen.4.2.11', language: 'hebrew', text: 'אֲדָמָֽה', transliteration: 'ʾăḏāmāh', lemma: 'אֲדָמָה', lemmaTranslit: 'ʾăḏāmāh', gloss: 'the ground', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'absolute', rawCode: 'Ncfsa' }, strongs: 'H127', position: 11 },
];

export const genesis4_2_translation: VerseTranslation = {
  verseRef: 'Gen.4.2',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: { type: 'literal', targetLanguage: 'en', text: 'And she continued to bear his brother Abel. And was Abel a keeper of sheep, and Cain was a worker of the ground.', spans: [{ id: 'Gen.4.2.en.lit.0', text: 'And she continued to bear his brother Abel...', position: 0, sourceTokenIds: ['Gen.4.2.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
    idiomatic: { type: 'idiomatic', targetLanguage: 'en', text: 'And again, she bore his brother Abel. Now Abel was a keeper of sheep, and Cain a worker of the ground.', spans: [{ id: 'Gen.4.2.en.idi.0', text: 'And again, she bore his brother Abel...', position: 0, sourceTokenIds: ['Gen.4.2.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
  },
  metadata: { pipelineVersion: '0.1.0', generatedAt: new Date().toISOString(), engineId: 'open-bible-pipeline', engineVersion: '0.1.0', sourceDataVersion: '1.0.0' },
};

export const genesis4_2_notes: StudyNote[] = [
  { id: 'Gen.4.2.note.1', verseRef: 'Gen.4.2', sourceTokenIds: ['Gen.4.2.3'], category: 'lexical', title: 'Abel (heḇel)', content: 'The name Abel (heḇel) means "breath, vapor, vanity"—the same word used in Ecclesiastes. Prophetically hints at his brief life.', confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
];

// Genesis 4:3 - Cain's offering
export const genesis4_3_tokens: SourceToken[] = [
  { id: 'Gen.4.3.0', language: 'hebrew', text: 'וַֽיְהִ֖י', transliteration: 'wayəhî', lemma: 'הָיָה', lemmaTranslit: 'hāyāh', gloss: 'And it was', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'imperfect', stem: 'qal', rawCode: 'Vqw3ms' }, strongs: 'H1961', position: 0 },
  { id: 'Gen.4.3.1', language: 'hebrew', text: 'מִקֵּ֣ץ', transliteration: 'miqqēṣ', lemma: 'קֵץ', lemmaTranslit: 'qēṣ', gloss: 'at the end of', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'construct', rawCode: 'Ncmsc' }, strongs: 'H7093', position: 1 },
  { id: 'Gen.4.3.2', language: 'hebrew', text: 'יָמִ֑ים', transliteration: 'yāmîm', lemma: 'יוֹם', lemmaTranslit: 'yôm', gloss: 'days', morphology: { pos: 'noun', gender: 'masculine', number: 'plural', state: 'absolute', rawCode: 'Ncmpa' }, strongs: 'H3117', position: 2 },
  { id: 'Gen.4.3.3', language: 'hebrew', text: 'וַיָּבֵ֨א', transliteration: 'wayyāḇēʾ', lemma: 'בּוֹא', lemmaTranslit: 'bôʾ', gloss: 'and brought', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'imperfect', stem: 'hiphil', rawCode: 'Vhw3ms' }, strongs: 'H935', position: 3 },
  { id: 'Gen.4.3.4', language: 'hebrew', text: 'קַ֜יִן', transliteration: 'qayin', lemma: 'קַיִן', lemmaTranslit: 'qayin', gloss: 'Cain', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H7014', position: 4 },
  { id: 'Gen.4.3.5', language: 'hebrew', text: 'מִפְּרִ֧י', transliteration: 'mipprî', lemma: 'פְּרִי', lemmaTranslit: 'pərî', gloss: 'from the fruit of', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'construct', rawCode: 'Ncmsc' }, strongs: 'H6529', position: 5 },
  { id: 'Gen.4.3.6', language: 'hebrew', text: 'הָֽאֲדָמָ֛ה', transliteration: 'hāʾăḏāmāh', lemma: 'אֲדָמָה', lemmaTranslit: 'ʾăḏāmāh', gloss: 'the ground', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'absolute', rawCode: 'Ncfsa' }, strongs: 'H127', position: 6 },
  { id: 'Gen.4.3.7', language: 'hebrew', text: 'מִנְחָ֖ה', transliteration: 'minḥāh', lemma: 'מִנְחָה', lemmaTranslit: 'minḥāh', gloss: 'an offering', glossExtended: 'offering, gift, tribute', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'absolute', rawCode: 'Ncfsa' }, strongs: 'H4503', position: 7 },
  { id: 'Gen.4.3.8', language: 'hebrew', text: 'לַֽיהוָֽה', transliteration: 'layhwh', lemma: 'יְהוָה', lemmaTranslit: 'yhwh', gloss: 'to YHWH', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H3068', position: 8 },
];

export const genesis4_3_translation: VerseTranslation = {
  verseRef: 'Gen.4.3',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: { type: 'literal', targetLanguage: 'en', text: 'And it was at the end of days, and brought Cain from the fruit of the ground an offering to YHWH.', spans: [{ id: 'Gen.4.3.en.lit.0', text: 'And it was at the end of days...', position: 0, sourceTokenIds: ['Gen.4.3.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
    idiomatic: { type: 'idiomatic', targetLanguage: 'en', text: 'In the course of time Cain brought to the LORD an offering of the fruit of the ground.', spans: [{ id: 'Gen.4.3.en.idi.0', text: 'In the course of time Cain brought...', position: 0, sourceTokenIds: ['Gen.4.3.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
  },
  metadata: { pipelineVersion: '0.1.0', generatedAt: new Date().toISOString(), engineId: 'open-bible-pipeline', engineVersion: '0.1.0', sourceDataVersion: '1.0.0' },
};

export const genesis4_3_notes: StudyNote[] = [];

// Genesis 4:4 - Abel's offering accepted
export const genesis4_4_tokens: SourceToken[] = [
  { id: 'Gen.4.4.0', language: 'hebrew', text: 'וְהֶ֨בֶל', transliteration: 'wəheḇel', lemma: 'הֶבֶל', lemmaTranslit: 'heḇel', gloss: 'And Abel', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H1893', position: 0 },
  { id: 'Gen.4.4.1', language: 'hebrew', text: 'הֵבִ֥יא', transliteration: 'hēḇîʾ', lemma: 'בּוֹא', lemmaTranslit: 'bôʾ', gloss: 'brought', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'perfect', stem: 'hiphil', rawCode: 'Vhp3ms' }, strongs: 'H935', position: 1 },
  { id: 'Gen.4.4.2', language: 'hebrew', text: 'גַם־ה֛וּא', transliteration: 'ḡam-hûʾ', lemma: 'הוּא', lemmaTranslit: 'hûʾ', gloss: 'also he', morphology: { pos: 'pronoun', person: '3', gender: 'masculine', number: 'singular', rawCode: 'Pp3ms' }, strongs: 'H1931', position: 2 },
  { id: 'Gen.4.4.3', language: 'hebrew', text: 'מִבְּכֹר֥וֹת', transliteration: 'mibbəḵōrôṯ', lemma: 'בְּכוֹרָה', lemmaTranslit: 'bəḵôrāh', gloss: 'from the firstborn of', glossExtended: 'firstborn, firstlings', morphology: { pos: 'noun', gender: 'feminine', number: 'plural', state: 'construct', rawCode: 'Ncfpc' }, strongs: 'H1062', position: 3 },
  { id: 'Gen.4.4.4', language: 'hebrew', text: 'צֹאנ֖וֹ', transliteration: 'ṣōʾnô', lemma: 'צֹאן', lemmaTranslit: 'ṣōʾn', gloss: 'his flock', morphology: { pos: 'noun', gender: 'common', number: 'singular', state: 'construct', rawCode: 'Ncbsc' }, strongs: 'H6629', position: 4 },
  { id: 'Gen.4.4.5', language: 'hebrew', text: 'וּמֵֽחֶלְבֵהֶ֑ן', transliteration: 'ûmēḥelḇēhen', lemma: 'חֵלֶב', lemmaTranslit: 'ḥēleḇ', gloss: 'and from their fat portions', glossExtended: 'fat, choicest part', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'construct', rawCode: 'Ncmsc' }, strongs: 'H2459', position: 5 },
  { id: 'Gen.4.4.6', language: 'hebrew', text: 'וַיִּ֣שַׁע', transliteration: 'wayyišaʿ', lemma: 'שָׁעָה', lemmaTranslit: 'šāʿāh', gloss: 'And looked', glossExtended: 'to look at with favor, regard', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'imperfect', stem: 'qal', rawCode: 'Vqw3ms' }, strongs: 'H8159', position: 6 },
  { id: 'Gen.4.4.7', language: 'hebrew', text: 'יְהוָ֔ה', transliteration: 'yhwh', lemma: 'יְהוָה', lemmaTranslit: 'yhwh', gloss: 'YHWH', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H3068', position: 7 },
  { id: 'Gen.4.4.8', language: 'hebrew', text: 'אֶל־הֶ֖בֶל', transliteration: 'ʾel-heḇel', lemma: 'הֶבֶל', lemmaTranslit: 'heḇel', gloss: 'upon Abel', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H1893', position: 8 },
  { id: 'Gen.4.4.9', language: 'hebrew', text: 'וְאֶל־מִנְחָתֽוֹ', transliteration: 'wəʾel-minḥāṯô', lemma: 'מִנְחָה', lemmaTranslit: 'minḥāh', gloss: 'and upon his offering', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'construct', rawCode: 'Ncfsc' }, strongs: 'H4503', position: 9 },
];

export const genesis4_4_translation: VerseTranslation = {
  verseRef: 'Gen.4.4',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: { type: 'literal', targetLanguage: 'en', text: 'And Abel brought also he from the firstborn of his flock and from their fat portions. And looked YHWH upon Abel and upon his offering.', spans: [{ id: 'Gen.4.4.en.lit.0', text: 'And Abel brought also he from the firstborn...', position: 0, sourceTokenIds: ['Gen.4.4.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
    idiomatic: { type: 'idiomatic', targetLanguage: 'en', text: 'And Abel also brought of the firstborn of his flock and of their fat portions. And the LORD had regard for Abel and his offering.', spans: [{ id: 'Gen.4.4.en.idi.0', text: 'And Abel also brought of the firstborn...', position: 0, sourceTokenIds: ['Gen.4.4.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
  },
  metadata: { pipelineVersion: '0.1.0', generatedAt: new Date().toISOString(), engineId: 'open-bible-pipeline', engineVersion: '0.1.0', sourceDataVersion: '1.0.0' },
};

export const genesis4_4_notes: StudyNote[] = [
  { id: 'Gen.4.4.note.1', verseRef: 'Gen.4.4', sourceTokenIds: ['Gen.4.4.3', 'Gen.4.4.5'], category: 'theological', title: 'Firstborn and Fat Portions', content: 'Abel brought his best: firstborn and fat portions (the choicest). Hebrews 11:4 says Abel offered "by faith"—the offering reflected his heart.', confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
];

// Genesis 4:5 - Cain's offering rejected
export const genesis4_5_tokens: SourceToken[] = [
  { id: 'Gen.4.5.0', language: 'hebrew', text: 'וְאֶל־קַ֥יִן', transliteration: 'wəʾel-qayin', lemma: 'קַיִן', lemmaTranslit: 'qayin', gloss: 'But to Cain', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H7014', position: 0 },
  { id: 'Gen.4.5.1', language: 'hebrew', text: 'וְאֶל־מִנְחָת֖וֹ', transliteration: 'wəʾel-minḥāṯô', lemma: 'מִנְחָה', lemmaTranslit: 'minḥāh', gloss: 'and to his offering', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'construct', rawCode: 'Ncfsc' }, strongs: 'H4503', position: 1 },
  { id: 'Gen.4.5.2', language: 'hebrew', text: 'לֹ֣א', transliteration: 'lōʾ', lemma: 'לֹא', lemmaTranslit: 'lōʾ', gloss: 'not', morphology: { pos: 'adverb', rawCode: 'An' }, strongs: 'H3808', position: 2 },
  { id: 'Gen.4.5.3', language: 'hebrew', text: 'שָׁעָ֑ה', transliteration: 'šāʿāh', lemma: 'שָׁעָה', lemmaTranslit: 'šāʿāh', gloss: 'he looked', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'perfect', stem: 'qal', rawCode: 'Vqp3ms' }, strongs: 'H8159', position: 3 },
  { id: 'Gen.4.5.4', language: 'hebrew', text: 'וַיִּ֤חַר', transliteration: 'wayyiḥar', lemma: 'חָרָה', lemmaTranslit: 'ḥārāh', gloss: 'And it burned', glossExtended: 'to be hot, burn (anger)', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'imperfect', stem: 'qal', rawCode: 'Vqw3ms' }, strongs: 'H2734', position: 4 },
  { id: 'Gen.4.5.5', language: 'hebrew', text: 'לְקַ֙יִן֙', transliteration: 'ləqayin', lemma: 'קַיִן', lemmaTranslit: 'qayin', gloss: 'to Cain', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H7014', position: 5 },
  { id: 'Gen.4.5.6', language: 'hebrew', text: 'מְאֹ֔ד', transliteration: 'məʾōḏ', lemma: 'מְאֹד', lemmaTranslit: 'məʾōḏ', gloss: 'greatly', morphology: { pos: 'adverb', rawCode: 'D' }, strongs: 'H3966', position: 6 },
  { id: 'Gen.4.5.7', language: 'hebrew', text: 'וַֽיִּפְּל֖וּ', transliteration: 'wayyippəlû', lemma: 'נָפַל', lemmaTranslit: 'nāp̄al', gloss: 'and fell', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'plural', tense: 'imperfect', stem: 'qal', rawCode: 'Vqw3mp' }, strongs: 'H5307', position: 7 },
  { id: 'Gen.4.5.8', language: 'hebrew', text: 'פָּנָֽיו', transliteration: 'pānāyw', lemma: 'פָּנִים', lemmaTranslit: 'pānîm', gloss: 'his face', morphology: { pos: 'noun', gender: 'masculine', number: 'plural', state: 'construct', rawCode: 'Ncmpc' }, strongs: 'H6440', position: 8 },
];

export const genesis4_5_translation: VerseTranslation = {
  verseRef: 'Gen.4.5',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: { type: 'literal', targetLanguage: 'en', text: 'But to Cain and to his offering not he looked. And it burned to Cain greatly, and fell his face.', spans: [{ id: 'Gen.4.5.en.lit.0', text: 'But to Cain and to his offering not he looked...', position: 0, sourceTokenIds: ['Gen.4.5.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
    idiomatic: { type: 'idiomatic', targetLanguage: 'en', text: 'But for Cain and his offering he had no regard. So Cain was very angry, and his face fell.', spans: [{ id: 'Gen.4.5.en.idi.0', text: 'But for Cain and his offering he had no regard...', position: 0, sourceTokenIds: ['Gen.4.5.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
  },
  metadata: { pipelineVersion: '0.1.0', generatedAt: new Date().toISOString(), engineId: 'open-bible-pipeline', engineVersion: '0.1.0', sourceDataVersion: '1.0.0' },
};

export const genesis4_5_notes: StudyNote[] = [
  { id: 'Gen.4.5.note.1', verseRef: 'Gen.4.5', sourceTokenIds: ['Gen.4.5.7', 'Gen.4.5.8'], category: 'idiom', title: 'Face Fell', content: '"His face fell" is an idiom for dejection, disappointment, or sullenness—visible emotional response to rejection.', confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
];

// Genesis 4:6 - Why are you angry?
export const genesis4_6_tokens: SourceToken[] = [
  { id: 'Gen.4.6.0', language: 'hebrew', text: 'וַיֹּ֥אמֶר', transliteration: 'wayyōʾmer', lemma: 'אָמַר', lemmaTranslit: 'ʾāmar', gloss: 'And said', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'imperfect', stem: 'qal', rawCode: 'Vqw3ms' }, strongs: 'H559', position: 0 },
  { id: 'Gen.4.6.1', language: 'hebrew', text: 'יְהוָ֖ה', transliteration: 'yhwh', lemma: 'יְהוָה', lemmaTranslit: 'yhwh', gloss: 'YHWH', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H3068', position: 1 },
  { id: 'Gen.4.6.2', language: 'hebrew', text: 'אֶל־קָ֑יִן', transliteration: 'ʾel-qāyin', lemma: 'קַיִן', lemmaTranslit: 'qayin', gloss: 'to Cain', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H7014', position: 2 },
  { id: 'Gen.4.6.3', language: 'hebrew', text: 'לָ֚מָּה', transliteration: 'lāmmāh', lemma: 'לָמָּה', lemmaTranslit: 'lāmmāh', gloss: 'Why', morphology: { pos: 'pronoun', rawCode: 'Pi' }, strongs: 'H4100', position: 3 },
  { id: 'Gen.4.6.4', language: 'hebrew', text: 'חָ֣רָה', transliteration: 'ḥārāh', lemma: 'חָרָה', lemmaTranslit: 'ḥārāh', gloss: 'it burned', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'perfect', stem: 'qal', rawCode: 'Vqp3ms' }, strongs: 'H2734', position: 4 },
  { id: 'Gen.4.6.5', language: 'hebrew', text: 'לָ֔ךְ', transliteration: 'lāḵ', lemma: 'לְ', lemmaTranslit: 'lə', gloss: 'to you', morphology: { pos: 'preposition', rawCode: 'R' }, strongs: 'H9005', position: 5 },
  { id: 'Gen.4.6.6', language: 'hebrew', text: 'וְלָ֖מָּה', transliteration: 'wəlāmmāh', lemma: 'לָמָּה', lemmaTranslit: 'lāmmāh', gloss: 'and why', morphology: { pos: 'pronoun', rawCode: 'Pi' }, strongs: 'H4100', position: 6 },
  { id: 'Gen.4.6.7', language: 'hebrew', text: 'נָפְל֥וּ', transliteration: 'nāp̄əlû', lemma: 'נָפַל', lemmaTranslit: 'nāp̄al', gloss: 'has fallen', morphology: { pos: 'verb', person: '3', gender: 'common', number: 'plural', tense: 'perfect', stem: 'qal', rawCode: 'Vqp3cp' }, strongs: 'H5307', position: 7 },
  { id: 'Gen.4.6.8', language: 'hebrew', text: 'פָנֶֽיךָ', transliteration: 'p̄āneḵā', lemma: 'פָּנִים', lemmaTranslit: 'pānîm', gloss: 'your face', morphology: { pos: 'noun', gender: 'masculine', number: 'plural', state: 'construct', rawCode: 'Ncmpc' }, strongs: 'H6440', position: 8 },
];

export const genesis4_6_translation: VerseTranslation = {
  verseRef: 'Gen.4.6',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: { type: 'literal', targetLanguage: 'en', text: 'And said YHWH to Cain: Why it burned to you, and why has fallen your face?', spans: [{ id: 'Gen.4.6.en.lit.0', text: 'And said YHWH to Cain: Why it burned to you...', position: 0, sourceTokenIds: ['Gen.4.6.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
    idiomatic: { type: 'idiomatic', targetLanguage: 'en', text: 'The LORD said to Cain, "Why are you angry, and why has your face fallen?"', spans: [{ id: 'Gen.4.6.en.idi.0', text: 'The LORD said to Cain, "Why are you angry..."', position: 0, sourceTokenIds: ['Gen.4.6.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
  },
  metadata: { pipelineVersion: '0.1.0', generatedAt: new Date().toISOString(), engineId: 'open-bible-pipeline', engineVersion: '0.1.0', sourceDataVersion: '1.0.0' },
};

export const genesis4_6_notes: StudyNote[] = [];

// Genesis 4:7 - Sin crouching at the door
export const genesis4_7_tokens: SourceToken[] = [
  { id: 'Gen.4.7.0', language: 'hebrew', text: 'הֲל֤וֹא', transliteration: 'hălôʾ', lemma: 'לֹא', lemmaTranslit: 'lōʾ', gloss: 'Is it not', morphology: { pos: 'adverb', rawCode: 'An' }, strongs: 'H3808', position: 0 },
  { id: 'Gen.4.7.1', language: 'hebrew', text: 'אִם־תֵּיטִיב֙', transliteration: 'ʾim-tēṭîḇ', lemma: 'יָטַב', lemmaTranslit: 'yāṭaḇ', gloss: 'if you do well', morphology: { pos: 'verb', person: '2', gender: 'masculine', number: 'singular', tense: 'imperfect', stem: 'hiphil', rawCode: 'Vhi2ms' }, strongs: 'H3190', position: 1 },
  { id: 'Gen.4.7.2', language: 'hebrew', text: 'שְׂאֵ֔ת', transliteration: 'śəʾēṯ', lemma: 'שְׂאֵת', lemmaTranslit: 'śəʾēṯ', gloss: 'lifting up', glossExtended: 'lifting up, exaltation, acceptance', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'absolute', rawCode: 'Ncfsa' }, strongs: 'H7613', position: 2 },
  { id: 'Gen.4.7.3', language: 'hebrew', text: 'וְאִם֙', transliteration: 'wəʾim', lemma: 'אִם', lemmaTranslit: 'ʾim', gloss: 'and if', morphology: { pos: 'conjunction', rawCode: 'Cc' }, strongs: 'H518', position: 3 },
  { id: 'Gen.4.7.4', language: 'hebrew', text: 'לֹ֣א', transliteration: 'lōʾ', lemma: 'לֹא', lemmaTranslit: 'lōʾ', gloss: 'not', morphology: { pos: 'adverb', rawCode: 'An' }, strongs: 'H3808', position: 4 },
  { id: 'Gen.4.7.5', language: 'hebrew', text: 'תֵיטִ֔יב', transliteration: 'ṯêṭîḇ', lemma: 'יָטַב', lemmaTranslit: 'yāṭaḇ', gloss: 'you do well', morphology: { pos: 'verb', person: '2', gender: 'masculine', number: 'singular', tense: 'imperfect', stem: 'hiphil', rawCode: 'Vhi2ms' }, strongs: 'H3190', position: 5 },
  { id: 'Gen.4.7.6', language: 'hebrew', text: 'לַפֶּ֖תַח', transliteration: 'lappetaḥ', lemma: 'פֶּתַח', lemmaTranslit: 'petaḥ', gloss: 'at the door', glossExtended: 'door, entrance, opening', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'absolute', rawCode: 'Ncmsa' }, strongs: 'H6607', position: 6 },
  { id: 'Gen.4.7.7', language: 'hebrew', text: 'חַטָּ֣את', transliteration: 'ḥaṭṭāʾṯ', lemma: 'חַטָּאת', lemmaTranslit: 'ḥaṭṭāʾṯ', gloss: 'sin', glossExtended: 'sin, sin offering', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'absolute', rawCode: 'Ncfsa' }, strongs: 'H2403', position: 7 },
  { id: 'Gen.4.7.8', language: 'hebrew', text: 'רֹבֵ֑ץ', transliteration: 'rōḇēṣ', lemma: 'רָבַץ', lemmaTranslit: 'rāḇaṣ', gloss: 'is crouching', glossExtended: 'to crouch, lie down (like an animal)', morphology: { pos: 'verb', mood: 'participle', stem: 'qal', rawCode: 'Vqrms' }, strongs: 'H7257', position: 8 },
  { id: 'Gen.4.7.9', language: 'hebrew', text: 'וְאֵלֶ֙יךָ֙', transliteration: 'wəʾēleḵā', lemma: 'אֶל', lemmaTranslit: 'ʾel', gloss: 'and for you', morphology: { pos: 'preposition', rawCode: 'R' }, strongs: 'H413', position: 9 },
  { id: 'Gen.4.7.10', language: 'hebrew', text: 'תְּשׁ֣וּקָת֔וֹ', transliteration: 'təšûqāṯô', lemma: 'תְּשׁוּקָה', lemmaTranslit: 'təšûqāh', gloss: 'its desire', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'construct', rawCode: 'Ncfsc' }, strongs: 'H8669', position: 10 },
  { id: 'Gen.4.7.11', language: 'hebrew', text: 'וְאַתָּ֖ה', transliteration: 'wəʾattāh', lemma: 'אַתָּה', lemmaTranslit: 'ʾattāh', gloss: 'but you', morphology: { pos: 'pronoun', person: '2', gender: 'masculine', number: 'singular', rawCode: 'Pp2ms' }, strongs: 'H859', position: 11 },
  { id: 'Gen.4.7.12', language: 'hebrew', text: 'תִּמְשָׁל־', transliteration: 'timšāl-', lemma: 'מָשַׁל', lemmaTranslit: 'māšal', gloss: 'must rule', morphology: { pos: 'verb', person: '2', gender: 'masculine', number: 'singular', tense: 'imperfect', stem: 'qal', rawCode: 'Vqi2ms' }, strongs: 'H4910', position: 12 },
  { id: 'Gen.4.7.13', language: 'hebrew', text: 'בּֽוֹ', transliteration: 'bô', lemma: 'בְּ', lemmaTranslit: 'bə', gloss: 'over it', morphology: { pos: 'preposition', rawCode: 'R' }, strongs: 'H9003', position: 13 },
];

export const genesis4_7_translation: VerseTranslation = {
  verseRef: 'Gen.4.7',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: { type: 'literal', targetLanguage: 'en', text: 'Is it not, if you do well, lifting up; and if not you do well, at the door sin is crouching, and for you its desire, but you must rule over it.', spans: [{ id: 'Gen.4.7.en.lit.0', text: 'Is it not, if you do well, lifting up...', position: 0, sourceTokenIds: ['Gen.4.7.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
    idiomatic: { type: 'idiomatic', targetLanguage: 'en', text: '"If you do well, will you not be accepted? And if you do not do well, sin is crouching at the door. Its desire is for you, but you must rule over it."', spans: [{ id: 'Gen.4.7.en.idi.0', text: '"If you do well, will you not be accepted?..."', position: 0, sourceTokenIds: ['Gen.4.7.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
  },
  metadata: { pipelineVersion: '0.1.0', generatedAt: new Date().toISOString(), engineId: 'open-bible-pipeline', engineVersion: '0.1.0', sourceDataVersion: '1.0.0' },
};

export const genesis4_7_notes: StudyNote[] = [
  { id: 'Gen.4.7.note.1', verseRef: 'Gen.4.7', sourceTokenIds: ['Gen.4.7.7', 'Gen.4.7.8'], category: 'theological', title: 'Sin Personified', content: 'Sin is pictured as a wild beast crouching at the door, ready to pounce. This vivid imagery warns Cain of sin\'s predatory nature.', confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
  { id: 'Gen.4.7.note.2', verseRef: 'Gen.4.7', sourceTokenIds: ['Gen.4.7.10'], category: 'cross-reference', title: 'Same Language as 3:16', content: 'The phrase "its desire is for you, but you must rule over it" echoes 3:16. The struggle with sin mirrors the distorted relationship between man and woman after the fall.', confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
];

// Genesis 4:8 - Cain kills Abel
export const genesis4_8_tokens: SourceToken[] = [
  { id: 'Gen.4.8.0', language: 'hebrew', text: 'וַיֹּ֥אמֶר', transliteration: 'wayyōʾmer', lemma: 'אָמַר', lemmaTranslit: 'ʾāmar', gloss: 'And said', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'imperfect', stem: 'qal', rawCode: 'Vqw3ms' }, strongs: 'H559', position: 0 },
  { id: 'Gen.4.8.1', language: 'hebrew', text: 'קַ֖יִן', transliteration: 'qayin', lemma: 'קַיִן', lemmaTranslit: 'qayin', gloss: 'Cain', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H7014', position: 1 },
  { id: 'Gen.4.8.2', language: 'hebrew', text: 'אֶל־הֶ֣בֶל', transliteration: 'ʾel-heḇel', lemma: 'הֶבֶל', lemmaTranslit: 'heḇel', gloss: 'to Abel', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H1893', position: 2 },
  { id: 'Gen.4.8.3', language: 'hebrew', text: 'אָחִ֑יו', transliteration: 'ʾāḥîw', lemma: 'אָח', lemmaTranslit: 'ʾāḥ', gloss: 'his brother', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'construct', rawCode: 'Ncmsc' }, strongs: 'H251', position: 3 },
  { id: 'Gen.4.8.4', language: 'hebrew', text: 'וַֽיְהִי֙', transliteration: 'wayəhî', lemma: 'הָיָה', lemmaTranslit: 'hāyāh', gloss: 'And it was', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'imperfect', stem: 'qal', rawCode: 'Vqw3ms' }, strongs: 'H1961', position: 4 },
  { id: 'Gen.4.8.5', language: 'hebrew', text: 'בִּהְיוֹתָ֣ם', transliteration: 'bihyôṯām', lemma: 'הָיָה', lemmaTranslit: 'hāyāh', gloss: 'while they were', morphology: { pos: 'verb', mood: 'infinitive', stem: 'qal', rawCode: 'Vqc' }, strongs: 'H1961', position: 5 },
  { id: 'Gen.4.8.6', language: 'hebrew', text: 'בַּשָּׂדֶ֔ה', transliteration: 'baśśāḏeh', lemma: 'שָׂדֶה', lemmaTranslit: 'śāḏeh', gloss: 'in the field', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'absolute', rawCode: 'Ncmsa' }, strongs: 'H7704', position: 6 },
  { id: 'Gen.4.8.7', language: 'hebrew', text: 'וַיָּ֥קָם', transliteration: 'wayyāqām', lemma: 'קוּם', lemmaTranslit: 'qûm', gloss: 'and rose up', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'imperfect', stem: 'qal', rawCode: 'Vqw3ms' }, strongs: 'H6965', position: 7 },
  { id: 'Gen.4.8.8', language: 'hebrew', text: 'קַ֛יִן', transliteration: 'qayin', lemma: 'קַיִן', lemmaTranslit: 'qayin', gloss: 'Cain', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H7014', position: 8 },
  { id: 'Gen.4.8.9', language: 'hebrew', text: 'אֶל־הֶ֥בֶל', transliteration: 'ʾel-heḇel', lemma: 'הֶבֶל', lemmaTranslit: 'heḇel', gloss: 'against Abel', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H1893', position: 9 },
  { id: 'Gen.4.8.10', language: 'hebrew', text: 'אָחִ֖יו', transliteration: 'ʾāḥîw', lemma: 'אָח', lemmaTranslit: 'ʾāḥ', gloss: 'his brother', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'construct', rawCode: 'Ncmsc' }, strongs: 'H251', position: 10 },
  { id: 'Gen.4.8.11', language: 'hebrew', text: 'וַיַּהַרְגֵֽהוּ', transliteration: 'wayyahargēhû', lemma: 'הָרַג', lemmaTranslit: 'hāraḡ', gloss: 'and killed him', glossExtended: 'to kill, slay', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'imperfect', stem: 'qal', rawCode: 'Vqw3ms' }, strongs: 'H2026', position: 11 },
];

export const genesis4_8_translation: VerseTranslation = {
  verseRef: 'Gen.4.8',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: { type: 'literal', targetLanguage: 'en', text: 'And said Cain to Abel his brother; and it was while they were in the field, and rose up Cain against Abel his brother and killed him.', spans: [{ id: 'Gen.4.8.en.lit.0', text: 'And said Cain to Abel his brother...', position: 0, sourceTokenIds: ['Gen.4.8.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
    idiomatic: { type: 'idiomatic', targetLanguage: 'en', text: 'Cain spoke to Abel his brother. And when they were in the field, Cain rose up against his brother Abel and killed him.', spans: [{ id: 'Gen.4.8.en.idi.0', text: 'Cain spoke to Abel his brother...', position: 0, sourceTokenIds: ['Gen.4.8.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
  },
  metadata: { pipelineVersion: '0.1.0', generatedAt: new Date().toISOString(), engineId: 'open-bible-pipeline', engineVersion: '0.1.0', sourceDataVersion: '1.0.0' },
};

export const genesis4_8_notes: StudyNote[] = [
  { id: 'Gen.4.8.note.1', verseRef: 'Gen.4.8', sourceTokenIds: ['Gen.4.8.3', 'Gen.4.8.10'], category: 'interpretive', title: 'His Brother', content: 'The text emphasizes "his brother" four times in vv.8-11. Cain\'s murder is fratricide—the violation of the most basic human bond.', confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
  { id: 'Gen.4.8.note.2', verseRef: 'Gen.4.8', sourceTokenIds: ['Gen.4.8.11'], category: 'theological', title: 'First Murder', content: 'This is the first murder in Scripture—sin\'s progression from disobedience (ch. 3) to violence. Jesus references Abel\'s blood in Matt 23:35.', confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
];

// Export verse structures
export const genesis4_1_verse = { ref: 'Gen.4.1', sourceTokens: genesis4_1_tokens, translation: genesis4_1_translation, notes: genesis4_1_notes };
export const genesis4_2_verse = { ref: 'Gen.4.2', sourceTokens: genesis4_2_tokens, translation: genesis4_2_translation, notes: genesis4_2_notes };
export const genesis4_3_verse = { ref: 'Gen.4.3', sourceTokens: genesis4_3_tokens, translation: genesis4_3_translation, notes: genesis4_3_notes };
export const genesis4_4_verse = { ref: 'Gen.4.4', sourceTokens: genesis4_4_tokens, translation: genesis4_4_translation, notes: genesis4_4_notes };
export const genesis4_5_verse = { ref: 'Gen.4.5', sourceTokens: genesis4_5_tokens, translation: genesis4_5_translation, notes: genesis4_5_notes };
export const genesis4_6_verse = { ref: 'Gen.4.6', sourceTokens: genesis4_6_tokens, translation: genesis4_6_translation, notes: genesis4_6_notes };
export const genesis4_7_verse = { ref: 'Gen.4.7', sourceTokens: genesis4_7_tokens, translation: genesis4_7_translation, notes: genesis4_7_notes };
export const genesis4_8_verse = { ref: 'Gen.4.8', sourceTokens: genesis4_8_tokens, translation: genesis4_8_translation, notes: genesis4_8_notes };

// Combined export
export const genesis4_1_8_verses = [
  genesis4_1_verse,
  genesis4_2_verse,
  genesis4_3_verse,
  genesis4_4_verse,
  genesis4_5_verse,
  genesis4_6_verse,
  genesis4_7_verse,
  genesis4_8_verse,
];

export default genesis4_1_8_verses;
