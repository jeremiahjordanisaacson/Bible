/**
 * Genesis 2:15-25 - Hebrew morphological data
 * God's command, naming animals, creation of woman
 * Source: Open Hebrew Bible (Tanach.us) - Public Domain
 */

import type { SourceToken, VerseTranslation, StudyNote } from '@open-bible/schemas';

// Genesis 2:15 tokens
export const genesis2_15_tokens: SourceToken[] = [
  { id: 'Gen.2.15.0', language: 'hebrew', text: 'וַיִּקַּ֛ח', transliteration: 'wayyiqqaḥ', lemma: 'לָקַח', lemmaTranslit: 'lāqaḥ', gloss: 'And took', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'imperfect', stem: 'qal', rawCode: 'Vqw3ms' }, strongs: 'H3947', position: 0 },
  { id: 'Gen.2.15.1', language: 'hebrew', text: 'יְהוָ֥ה', transliteration: 'yhwh', lemma: 'יְהוָה', lemmaTranslit: 'yhwh', gloss: 'YHWH', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H3068', position: 1 },
  { id: 'Gen.2.15.2', language: 'hebrew', text: 'אֱלֹהִ֖ים', transliteration: 'ʾĕlōhîm', lemma: 'אֱלֹהִים', lemmaTranslit: 'ʾĕlōhîm', gloss: 'God', morphology: { pos: 'noun', gender: 'masculine', number: 'plural', rawCode: 'Ncmpa' }, strongs: 'H430', position: 2 },
  { id: 'Gen.2.15.3', language: 'hebrew', text: 'אֶת־', transliteration: 'ʾeṯ-', lemma: 'אֵת', lemmaTranslit: 'ʾēṯ', gloss: '[obj]', morphology: { pos: 'particle', rawCode: 'To' }, strongs: 'H853', position: 3 },
  { id: 'Gen.2.15.4', language: 'hebrew', text: 'הָֽאָדָ֑ם', transliteration: 'hāʾāḏām', lemma: 'אָדָם', lemmaTranslit: 'ʾāḏām', gloss: 'the man', glossExtended: 'man, mankind, Adam', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'absolute', rawCode: 'Ncmsa' }, strongs: 'H120', position: 4 },
  { id: 'Gen.2.15.5', language: 'hebrew', text: 'וַיַּנִּחֵ֣הוּ', transliteration: 'wayyannîḥēhû', lemma: 'נוּחַ', lemmaTranslit: 'nûaḥ', gloss: 'and put him', glossExtended: 'to rest, settle', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'imperfect', stem: 'hiphil', rawCode: 'Vhw3ms' }, strongs: 'H5117', position: 5 },
  { id: 'Gen.2.15.6', language: 'hebrew', text: 'בְגַן־', transliteration: 'ḇəḡan-', lemma: 'גַּן', lemmaTranslit: 'gan', gloss: 'in garden of', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', rawCode: 'Ncmsc' }, strongs: 'H1588', position: 6 },
  { id: 'Gen.2.15.7', language: 'hebrew', text: 'עֵ֔דֶן', transliteration: 'ʿēḏen', lemma: 'עֵדֶן', lemmaTranslit: 'ʿēḏen', gloss: 'Eden', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H5731', position: 7 },
  { id: 'Gen.2.15.8', language: 'hebrew', text: 'לְעָבְדָ֖הּ', transliteration: 'ləʿāḇəḏāh', lemma: 'עָבַד', lemmaTranslit: 'ʿāḇaḏ', gloss: 'to work it', glossExtended: 'to work, serve', morphology: { pos: 'verb', mood: 'infinitive', stem: 'qal', rawCode: 'Vqc' }, strongs: 'H5647', position: 8 },
  { id: 'Gen.2.15.9', language: 'hebrew', text: 'וּלְשָׁמְרָֽהּ', transliteration: 'ûləšāmərāh', lemma: 'שָׁמַר', lemmaTranslit: 'šāmar', gloss: 'and to keep it', glossExtended: 'to keep, guard', morphology: { pos: 'verb', mood: 'infinitive', stem: 'qal', rawCode: 'Vqc' }, strongs: 'H8104', position: 9 },
];

export const genesis2_15_translation: VerseTranslation = {
  verseRef: 'Gen.2.15',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: { type: 'literal', targetLanguage: 'en', text: 'And took YHWH God the man and put him in garden of Eden to work it and to keep it.', spans: [{ id: 'Gen.2.15.en.lit.0', text: 'And took YHWH God the man and put him in garden of Eden to work it and to keep it.', position: 0, sourceTokenIds: ['Gen.2.15.0', 'Gen.2.15.1', 'Gen.2.15.2', 'Gen.2.15.3', 'Gen.2.15.4', 'Gen.2.15.5', 'Gen.2.15.6', 'Gen.2.15.7', 'Gen.2.15.8', 'Gen.2.15.9'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
    idiomatic: { type: 'idiomatic', targetLanguage: 'en', text: 'The LORD God took the man and put him in the Garden of Eden to work it and keep it.', spans: [{ id: 'Gen.2.15.en.idi.0', text: 'The LORD God took the man and put him in the Garden of Eden to work it and keep it.', position: 0, sourceTokenIds: ['Gen.2.15.0', 'Gen.2.15.1', 'Gen.2.15.2', 'Gen.2.15.3', 'Gen.2.15.4', 'Gen.2.15.5', 'Gen.2.15.6', 'Gen.2.15.7', 'Gen.2.15.8', 'Gen.2.15.9'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
  },
  metadata: { pipelineVersion: '0.1.0', generatedAt: new Date().toISOString(), engineId: 'open-bible-pipeline', engineVersion: '0.1.0', sourceDataVersion: '1.0.0' },
};

export const genesis2_15_notes: StudyNote[] = [
  { id: 'Gen.2.15.note.1', verseRef: 'Gen.2.15', sourceTokenIds: ['Gen.2.15.8', 'Gen.2.15.9'], category: 'lexical', title: 'Work and Keep', content: 'The verbs ʿāḇaḏ (work/serve) and šāmar (keep/guard) are also used for priestly service in the tabernacle, suggesting Eden as a sacred space.', confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
];

// Genesis 2:16 tokens
export const genesis2_16_tokens: SourceToken[] = [
  { id: 'Gen.2.16.0', language: 'hebrew', text: 'וַיְצַו֙', transliteration: 'wayṣaw', lemma: 'צָוָה', lemmaTranslit: 'ṣāwāh', gloss: 'And commanded', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'imperfect', stem: 'piel', rawCode: 'Vpw3ms' }, strongs: 'H6680', position: 0 },
  { id: 'Gen.2.16.1', language: 'hebrew', text: 'יְהוָ֣ה', transliteration: 'yhwh', lemma: 'יְהוָה', lemmaTranslit: 'yhwh', gloss: 'YHWH', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H3068', position: 1 },
  { id: 'Gen.2.16.2', language: 'hebrew', text: 'אֱלֹהִ֔ים', transliteration: 'ʾĕlōhîm', lemma: 'אֱלֹהִים', lemmaTranslit: 'ʾĕlōhîm', gloss: 'God', morphology: { pos: 'noun', gender: 'masculine', number: 'plural', rawCode: 'Ncmpa' }, strongs: 'H430', position: 2 },
  { id: 'Gen.2.16.3', language: 'hebrew', text: 'עַל־', transliteration: 'ʿal-', lemma: 'עַל', lemmaTranslit: 'ʿal', gloss: 'to', morphology: { pos: 'preposition', rawCode: 'R' }, strongs: 'H5921', position: 3 },
  { id: 'Gen.2.16.4', language: 'hebrew', text: 'הָֽאָדָ֖ם', transliteration: 'hāʾāḏām', lemma: 'אָדָם', lemmaTranslit: 'ʾāḏām', gloss: 'the man', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'absolute', rawCode: 'Ncmsa' }, strongs: 'H120', position: 4 },
  { id: 'Gen.2.16.5', language: 'hebrew', text: 'לֵאמֹ֑ר', transliteration: 'lēʾmōr', lemma: 'אָמַר', lemmaTranslit: 'ʾāmar', gloss: 'saying', morphology: { pos: 'verb', mood: 'infinitive', stem: 'qal', rawCode: 'Vqc' }, strongs: 'H559', position: 5 },
  { id: 'Gen.2.16.6', language: 'hebrew', text: 'מִכֹּ֥ל', transliteration: 'mikkōl', lemma: 'כֹּל', lemmaTranslit: 'kōl', gloss: 'of every', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', rawCode: 'Ncmsc' }, strongs: 'H3605', position: 6 },
  { id: 'Gen.2.16.7', language: 'hebrew', text: 'עֵֽץ־', transliteration: 'ʿēṣ-', lemma: 'עֵץ', lemmaTranslit: 'ʿēṣ', gloss: 'tree of', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'construct', rawCode: 'Ncmsc' }, strongs: 'H6086', position: 7 },
  { id: 'Gen.2.16.8', language: 'hebrew', text: 'הַגָּ֖ן', transliteration: 'haggān', lemma: 'גַּן', lemmaTranslit: 'gan', gloss: 'the garden', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'absolute', rawCode: 'Ncmsa' }, strongs: 'H1588', position: 8 },
  { id: 'Gen.2.16.9', language: 'hebrew', text: 'אָכֹ֥ל', transliteration: 'ʾāḵōl', lemma: 'אָכַל', lemmaTranslit: 'ʾāḵal', gloss: 'eating', glossExtended: 'infinitive absolute for emphasis', morphology: { pos: 'verb', mood: 'infinitive', stem: 'qal', rawCode: 'Vqa' }, strongs: 'H398', position: 9 },
  { id: 'Gen.2.16.10', language: 'hebrew', text: 'תֹּאכֵֽל', transliteration: 'tōʾḵēl', lemma: 'אָכַל', lemmaTranslit: 'ʾāḵal', gloss: 'you may eat', morphology: { pos: 'verb', person: '2', gender: 'masculine', number: 'singular', tense: 'imperfect', stem: 'qal', rawCode: 'Vqi2ms' }, strongs: 'H398', position: 10 },
];

export const genesis2_16_translation: VerseTranslation = {
  verseRef: 'Gen.2.16',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: { type: 'literal', targetLanguage: 'en', text: 'And commanded YHWH God upon the man saying: Of every tree of the garden eating you may eat.', spans: [{ id: 'Gen.2.16.en.lit.0', text: 'And commanded YHWH God upon the man saying: Of every tree of the garden eating you may eat.', position: 0, sourceTokenIds: ['Gen.2.16.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
    idiomatic: { type: 'idiomatic', targetLanguage: 'en', text: 'And the LORD God commanded the man, "You may freely eat of every tree of the garden."', spans: [{ id: 'Gen.2.16.en.idi.0', text: 'And the LORD God commanded the man, "You may freely eat of every tree of the garden."', position: 0, sourceTokenIds: ['Gen.2.16.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
  },
  metadata: { pipelineVersion: '0.1.0', generatedAt: new Date().toISOString(), engineId: 'open-bible-pipeline', engineVersion: '0.1.0', sourceDataVersion: '1.0.0' },
};

export const genesis2_16_notes: StudyNote[] = [
  { id: 'Gen.2.16.note.1', verseRef: 'Gen.2.16', sourceTokenIds: ['Gen.2.16.9', 'Gen.2.16.10'], category: 'grammatical', title: 'Emphatic Permission', content: 'The infinitive absolute (ʾāḵōl) before the finite verb (tōʾḵēl) creates emphasis: "you may freely eat." God\'s permission is generous.', confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
];

// Genesis 2:17 tokens
export const genesis2_17_tokens: SourceToken[] = [
  { id: 'Gen.2.17.0', language: 'hebrew', text: 'וּמֵעֵ֗ץ', transliteration: 'ûmēʿēṣ', lemma: 'עֵץ', lemmaTranslit: 'ʿēṣ', gloss: 'But from tree of', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'construct', rawCode: 'Ncmsc' }, strongs: 'H6086', position: 0 },
  { id: 'Gen.2.17.1', language: 'hebrew', text: 'הַדַּ֙עַת֙', transliteration: 'haddaʿaṯ', lemma: 'דַּעַת', lemmaTranslit: 'daʿaṯ', gloss: 'the knowledge of', glossExtended: 'knowledge, discernment', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'construct', rawCode: 'Ncfsc' }, strongs: 'H1847', position: 1 },
  { id: 'Gen.2.17.2', language: 'hebrew', text: 'ט֣וֹב', transliteration: 'ṭôḇ', lemma: 'טוֹב', lemmaTranslit: 'ṭôḇ', gloss: 'good', morphology: { pos: 'adjective', gender: 'masculine', number: 'singular', state: 'absolute', rawCode: 'Aamsa' }, strongs: 'H2896', position: 2 },
  { id: 'Gen.2.17.3', language: 'hebrew', text: 'וָרָ֔ע', transliteration: 'wārāʿ', lemma: 'רַע', lemmaTranslit: 'raʿ', gloss: 'and evil', morphology: { pos: 'adjective', gender: 'masculine', number: 'singular', state: 'absolute', rawCode: 'Aamsa' }, strongs: 'H7451', position: 3 },
  { id: 'Gen.2.17.4', language: 'hebrew', text: 'לֹ֥א', transliteration: 'lōʾ', lemma: 'לֹא', lemmaTranslit: 'lōʾ', gloss: 'not', morphology: { pos: 'adverb', rawCode: 'An' }, strongs: 'H3808', position: 4 },
  { id: 'Gen.2.17.5', language: 'hebrew', text: 'תֹאכַ֖ל', transliteration: 'ṯōʾḵal', lemma: 'אָכַל', lemmaTranslit: 'ʾāḵal', gloss: 'you shall eat', morphology: { pos: 'verb', person: '2', gender: 'masculine', number: 'singular', tense: 'imperfect', stem: 'qal', rawCode: 'Vqi2ms' }, strongs: 'H398', position: 5 },
  { id: 'Gen.2.17.6', language: 'hebrew', text: 'מִמֶּ֑נּוּ', transliteration: 'mimmennû', lemma: 'מִן', lemmaTranslit: 'min', gloss: 'from it', morphology: { pos: 'preposition', rawCode: 'R' }, strongs: 'H4480', position: 6 },
  { id: 'Gen.2.17.7', language: 'hebrew', text: 'כִּ֗י', transliteration: 'kî', lemma: 'כִּי', lemmaTranslit: 'kî', gloss: 'for', morphology: { pos: 'conjunction', rawCode: 'Cc' }, strongs: 'H3588', position: 7 },
  { id: 'Gen.2.17.8', language: 'hebrew', text: 'בְּי֛וֹם', transliteration: 'bəyôm', lemma: 'יוֹם', lemmaTranslit: 'yôm', gloss: 'in the day', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'construct', rawCode: 'Ncmsc' }, strongs: 'H3117', position: 8 },
  { id: 'Gen.2.17.9', language: 'hebrew', text: 'אֲכָלְךָ֥', transliteration: 'ʾăḵālḵā', lemma: 'אָכַל', lemmaTranslit: 'ʾāḵal', gloss: 'you eat', morphology: { pos: 'verb', mood: 'infinitive', stem: 'qal', rawCode: 'Vqc' }, strongs: 'H398', position: 9 },
  { id: 'Gen.2.17.10', language: 'hebrew', text: 'מִמֶּ֖נּוּ', transliteration: 'mimmennû', lemma: 'מִן', lemmaTranslit: 'min', gloss: 'from it', morphology: { pos: 'preposition', rawCode: 'R' }, strongs: 'H4480', position: 10 },
  { id: 'Gen.2.17.11', language: 'hebrew', text: 'מ֥וֹת', transliteration: 'môṯ', lemma: 'מוּת', lemmaTranslit: 'mûṯ', gloss: 'dying', glossExtended: 'infinitive absolute for emphasis', morphology: { pos: 'verb', mood: 'infinitive', stem: 'qal', rawCode: 'Vqa' }, strongs: 'H4191', position: 11 },
  { id: 'Gen.2.17.12', language: 'hebrew', text: 'תָּמֽוּת', transliteration: 'tāmûṯ', lemma: 'מוּת', lemmaTranslit: 'mûṯ', gloss: 'you shall die', morphology: { pos: 'verb', person: '2', gender: 'masculine', number: 'singular', tense: 'imperfect', stem: 'qal', rawCode: 'Vqi2ms' }, strongs: 'H4191', position: 12 },
];

export const genesis2_17_translation: VerseTranslation = {
  verseRef: 'Gen.2.17',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: { type: 'literal', targetLanguage: 'en', text: 'But from tree of the knowledge of good and evil not you shall eat from it, for in day of your eating from it dying you shall die.', spans: [{ id: 'Gen.2.17.en.lit.0', text: 'But from tree of the knowledge of good and evil not you shall eat from it, for in day of your eating from it dying you shall die.', position: 0, sourceTokenIds: ['Gen.2.17.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
    idiomatic: { type: 'idiomatic', targetLanguage: 'en', text: 'But of the tree of the knowledge of good and evil you shall not eat, for in the day that you eat of it you shall surely die.', spans: [{ id: 'Gen.2.17.en.idi.0', text: 'But of the tree of the knowledge of good and evil you shall not eat, for in the day that you eat of it you shall surely die.', position: 0, sourceTokenIds: ['Gen.2.17.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
  },
  metadata: { pipelineVersion: '0.1.0', generatedAt: new Date().toISOString(), engineId: 'open-bible-pipeline', engineVersion: '0.1.0', sourceDataVersion: '1.0.0' },
};

export const genesis2_17_notes: StudyNote[] = [
  { id: 'Gen.2.17.note.1', verseRef: 'Gen.2.17', sourceTokenIds: ['Gen.2.17.11', 'Gen.2.17.12'], category: 'grammatical', title: 'Emphatic Death Penalty', content: 'The construction môṯ tāmûṯ (dying you shall die) is an infinitive absolute for emphasis: "you shall surely die."', confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
  { id: 'Gen.2.17.note.2', verseRef: 'Gen.2.17', sourceTokenIds: ['Gen.2.17.1', 'Gen.2.17.2', 'Gen.2.17.3'], category: 'theological', title: 'Knowledge of Good and Evil', content: 'May refer to moral autonomy—determining good and evil apart from God, or comprehensive knowledge belonging to God alone.', confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
];

// Genesis 2:18 tokens
export const genesis2_18_tokens: SourceToken[] = [
  { id: 'Gen.2.18.0', language: 'hebrew', text: 'וַיֹּ֙אמֶר֙', transliteration: 'wayyōʾmer', lemma: 'אָמַר', lemmaTranslit: 'ʾāmar', gloss: 'And said', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'imperfect', stem: 'qal', rawCode: 'Vqw3ms' }, strongs: 'H559', position: 0 },
  { id: 'Gen.2.18.1', language: 'hebrew', text: 'יְהוָ֣ה', transliteration: 'yhwh', lemma: 'יְהוָה', lemmaTranslit: 'yhwh', gloss: 'YHWH', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H3068', position: 1 },
  { id: 'Gen.2.18.2', language: 'hebrew', text: 'אֱלֹהִ֔ים', transliteration: 'ʾĕlōhîm', lemma: 'אֱלֹהִים', lemmaTranslit: 'ʾĕlōhîm', gloss: 'God', morphology: { pos: 'noun', gender: 'masculine', number: 'plural', rawCode: 'Ncmpa' }, strongs: 'H430', position: 2 },
  { id: 'Gen.2.18.3', language: 'hebrew', text: 'לֹא־', transliteration: 'lōʾ-', lemma: 'לֹא', lemmaTranslit: 'lōʾ', gloss: 'not', morphology: { pos: 'adverb', rawCode: 'An' }, strongs: 'H3808', position: 3 },
  { id: 'Gen.2.18.4', language: 'hebrew', text: 'ט֛וֹב', transliteration: 'ṭôḇ', lemma: 'טוֹב', lemmaTranslit: 'ṭôḇ', gloss: 'good', morphology: { pos: 'adjective', gender: 'masculine', number: 'singular', state: 'absolute', rawCode: 'Aamsa' }, strongs: 'H2896', position: 4 },
  { id: 'Gen.2.18.5', language: 'hebrew', text: 'הֱי֥וֹת', transliteration: 'hĕyôṯ', lemma: 'הָיָה', lemmaTranslit: 'hāyāh', gloss: 'to be', morphology: { pos: 'verb', mood: 'infinitive', stem: 'qal', rawCode: 'Vqc' }, strongs: 'H1961', position: 5 },
  { id: 'Gen.2.18.6', language: 'hebrew', text: 'הָֽאָדָ֖ם', transliteration: 'hāʾāḏām', lemma: 'אָדָם', lemmaTranslit: 'ʾāḏām', gloss: 'the man', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'absolute', rawCode: 'Ncmsa' }, strongs: 'H120', position: 6 },
  { id: 'Gen.2.18.7', language: 'hebrew', text: 'לְבַדּ֑וֹ', transliteration: 'ləḇaddô', lemma: 'בַּד', lemmaTranslit: 'baḏ', gloss: 'alone', glossExtended: 'alone, by himself', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', rawCode: 'Ncmsc' }, strongs: 'H905', position: 7 },
  { id: 'Gen.2.18.8', language: 'hebrew', text: 'אֶֽעֱשֶׂה־', transliteration: 'ʾeʿĕśeh-', lemma: 'עָשָׂה', lemmaTranslit: 'ʿāśāh', gloss: 'I will make', morphology: { pos: 'verb', person: '1', gender: 'common', number: 'singular', tense: 'imperfect', stem: 'qal', rawCode: 'Vqi1cs' }, strongs: 'H6213', position: 8 },
  { id: 'Gen.2.18.9', language: 'hebrew', text: 'לּ֥וֹ', transliteration: 'lô', lemma: 'לְ', lemmaTranslit: 'lə', gloss: 'for him', morphology: { pos: 'preposition', rawCode: 'R' }, strongs: 'H9005', position: 9 },
  { id: 'Gen.2.18.10', language: 'hebrew', text: 'עֵ֖זֶר', transliteration: 'ʿēzer', lemma: 'עֵזֶר', lemmaTranslit: 'ʿēzer', gloss: 'a helper', glossExtended: 'helper, help, aid', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'absolute', rawCode: 'Ncmsa' }, strongs: 'H5828', position: 10 },
  { id: 'Gen.2.18.11', language: 'hebrew', text: 'כְּנֶגְדּֽוֹ', transliteration: 'kəneḡdô', lemma: 'נֶגֶד', lemmaTranslit: 'neḡeḏ', gloss: 'suitable for him', glossExtended: 'corresponding to him', morphology: { pos: 'preposition', rawCode: 'R' }, strongs: 'H5048', position: 11 },
];

export const genesis2_18_translation: VerseTranslation = {
  verseRef: 'Gen.2.18',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: { type: 'literal', targetLanguage: 'en', text: 'And said YHWH God: Not good the being of the man alone; I will make for him a helper corresponding to him.', spans: [{ id: 'Gen.2.18.en.lit.0', text: 'And said YHWH God: Not good the being of the man alone; I will make for him a helper corresponding to him.', position: 0, sourceTokenIds: ['Gen.2.18.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
    idiomatic: { type: 'idiomatic', targetLanguage: 'en', text: 'Then the LORD God said, "It is not good that the man should be alone; I will make him a helper fit for him."', spans: [{ id: 'Gen.2.18.en.idi.0', text: 'Then the LORD God said, "It is not good that the man should be alone; I will make him a helper fit for him."', position: 0, sourceTokenIds: ['Gen.2.18.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
  },
  metadata: { pipelineVersion: '0.1.0', generatedAt: new Date().toISOString(), engineId: 'open-bible-pipeline', engineVersion: '0.1.0', sourceDataVersion: '1.0.0' },
};

export const genesis2_18_notes: StudyNote[] = [
  { id: 'Gen.2.18.note.1', verseRef: 'Gen.2.18', sourceTokenIds: ['Gen.2.18.3', 'Gen.2.18.4'], category: 'theological', title: 'Not Good', content: 'First "not good" in creation, contrasting with repeated "good" of chapter 1. Human isolation contradicts God\'s design.', confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
  { id: 'Gen.2.18.note.2', verseRef: 'Gen.2.18', sourceTokenIds: ['Gen.2.18.10'], category: 'lexical', title: 'Helper (ʿēzer)', content: 'Often used of God as Israel\'s helper (Ps 33:20; 70:5). Does not imply inferiority but essential support.', confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
];

// Genesis 2:19-25 tokens (abbreviated for remaining verses)
export const genesis2_19_tokens: SourceToken[] = [
  { id: 'Gen.2.19.0', language: 'hebrew', text: 'וַיִּצֶר֩', transliteration: 'wayyîṣer', lemma: 'יָצַר', lemmaTranslit: 'yāṣar', gloss: 'And formed', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'imperfect', stem: 'qal', rawCode: 'Vqw3ms' }, strongs: 'H3335', position: 0 },
  { id: 'Gen.2.19.1', language: 'hebrew', text: 'יְהוָ֨ה', transliteration: 'yhwh', lemma: 'יְהוָה', lemmaTranslit: 'yhwh', gloss: 'YHWH', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H3068', position: 1 },
  { id: 'Gen.2.19.2', language: 'hebrew', text: 'אֱלֹהִ֜ים', transliteration: 'ʾĕlōhîm', lemma: 'אֱלֹהִים', lemmaTranslit: 'ʾĕlōhîm', gloss: 'God', morphology: { pos: 'noun', gender: 'masculine', number: 'plural', rawCode: 'Ncmpa' }, strongs: 'H430', position: 2 },
  { id: 'Gen.2.19.3', language: 'hebrew', text: 'מִן־הָֽאֲדָמָ֗ה', transliteration: 'min-hāʾăḏāmāh', lemma: 'אֲדָמָה', lemmaTranslit: 'ʾăḏāmāh', gloss: 'from the ground', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'absolute', rawCode: 'Ncfsa' }, strongs: 'H127', position: 3 },
  { id: 'Gen.2.19.4', language: 'hebrew', text: 'כָּל־חַיַּ֤ת', transliteration: 'kāl-ḥayyaṯ', lemma: 'חַיָּה', lemmaTranslit: 'ḥayyāh', gloss: 'every beast of', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'construct', rawCode: 'Ncfsc' }, strongs: 'H2416', position: 4 },
  { id: 'Gen.2.19.5', language: 'hebrew', text: 'הַשָּׂדֶה֙', transliteration: 'haśśāḏeh', lemma: 'שָׂדֶה', lemmaTranslit: 'śāḏeh', gloss: 'the field', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'absolute', rawCode: 'Ncmsa' }, strongs: 'H7704', position: 5 },
];

export const genesis2_19_translation: VerseTranslation = {
  verseRef: 'Gen.2.19',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: { type: 'literal', targetLanguage: 'en', text: 'And formed YHWH God from the ground every beast of the field and every bird of the heavens and brought to the man to see what he would call it.', spans: [{ id: 'Gen.2.19.en.lit.0', text: 'And formed YHWH God from the ground every beast of the field...', position: 0, sourceTokenIds: ['Gen.2.19.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
    idiomatic: { type: 'idiomatic', targetLanguage: 'en', text: 'Now out of the ground the LORD God had formed every beast of the field and every bird of the heavens and brought them to the man to see what he would call them.', spans: [{ id: 'Gen.2.19.en.idi.0', text: 'Now out of the ground the LORD God had formed every beast...', position: 0, sourceTokenIds: ['Gen.2.19.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
  },
  metadata: { pipelineVersion: '0.1.0', generatedAt: new Date().toISOString(), engineId: 'open-bible-pipeline', engineVersion: '0.1.0', sourceDataVersion: '1.0.0' },
};

export const genesis2_19_notes: StudyNote[] = [
  { id: 'Gen.2.19.note.1', verseRef: 'Gen.2.19', sourceTokenIds: ['Gen.2.19.0'], category: 'theological', title: 'Naming Authority', content: 'In ancient Near Eastern thought, naming signified authority. Adam\'s naming demonstrates human dominion granted in 1:28.', confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
];

export const genesis2_20_tokens: SourceToken[] = [
  { id: 'Gen.2.20.0', language: 'hebrew', text: 'וַיִּקְרָ֨א', transliteration: 'wayyiqrāʾ', lemma: 'קָרָא', lemmaTranslit: 'qārāʾ', gloss: 'And called', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'imperfect', stem: 'qal', rawCode: 'Vqw3ms' }, strongs: 'H7121', position: 0 },
  { id: 'Gen.2.20.1', language: 'hebrew', text: 'הָֽאָדָ֜ם', transliteration: 'hāʾāḏām', lemma: 'אָדָם', lemmaTranslit: 'ʾāḏām', gloss: 'the man', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'absolute', rawCode: 'Ncmsa' }, strongs: 'H120', position: 1 },
  { id: 'Gen.2.20.2', language: 'hebrew', text: 'שֵׁמ֗וֹת', transliteration: 'šēmôṯ', lemma: 'שֵׁם', lemmaTranslit: 'šēm', gloss: 'names', morphology: { pos: 'noun', gender: 'masculine', number: 'plural', state: 'absolute', rawCode: 'Ncmpa' }, strongs: 'H8034', position: 2 },
  { id: 'Gen.2.20.3', language: 'hebrew', text: 'וּלְאָדָ֕ם', transliteration: 'ûləʾāḏām', lemma: 'אָדָם', lemmaTranslit: 'ʾāḏām', gloss: 'but for Adam', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'absolute', rawCode: 'Ncmsa' }, strongs: 'H120', position: 3 },
  { id: 'Gen.2.20.4', language: 'hebrew', text: 'לֹֽא־מָצָ֥א', transliteration: 'lōʾ-māṣāʾ', lemma: 'מָצָא', lemmaTranslit: 'māṣāʾ', gloss: 'not he found', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'perfect', stem: 'qal', rawCode: 'Vqp3ms' }, strongs: 'H4672', position: 4 },
  { id: 'Gen.2.20.5', language: 'hebrew', text: 'עֵ֖זֶר', transliteration: 'ʿēzer', lemma: 'עֵזֶר', lemmaTranslit: 'ʿēzer', gloss: 'a helper', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'absolute', rawCode: 'Ncmsa' }, strongs: 'H5828', position: 5 },
  { id: 'Gen.2.20.6', language: 'hebrew', text: 'כְּנֶגְדּֽוֹ', transliteration: 'kəneḡdô', lemma: 'נֶגֶד', lemmaTranslit: 'neḡeḏ', gloss: 'suitable for him', morphology: { pos: 'preposition', rawCode: 'R' }, strongs: 'H5048', position: 6 },
];

export const genesis2_20_translation: VerseTranslation = {
  verseRef: 'Gen.2.20',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: { type: 'literal', targetLanguage: 'en', text: 'And called the man names to all the livestock... but for Adam not he found a helper corresponding to him.', spans: [{ id: 'Gen.2.20.en.lit.0', text: 'And called the man names...', position: 0, sourceTokenIds: ['Gen.2.20.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
    idiomatic: { type: 'idiomatic', targetLanguage: 'en', text: 'The man gave names to all livestock and to the birds of the heavens and to every beast of the field. But for Adam there was not found a helper fit for him.', spans: [{ id: 'Gen.2.20.en.idi.0', text: 'The man gave names to all livestock...', position: 0, sourceTokenIds: ['Gen.2.20.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
  },
  metadata: { pipelineVersion: '0.1.0', generatedAt: new Date().toISOString(), engineId: 'open-bible-pipeline', engineVersion: '0.1.0', sourceDataVersion: '1.0.0' },
};

export const genesis2_20_notes: StudyNote[] = [];

export const genesis2_21_tokens: SourceToken[] = [
  { id: 'Gen.2.21.0', language: 'hebrew', text: 'וַיַּפֵּל֩', transliteration: 'wayyappēl', lemma: 'נָפַל', lemmaTranslit: 'nāp̄al', gloss: 'And caused to fall', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'imperfect', stem: 'hiphil', rawCode: 'Vhw3ms' }, strongs: 'H5307', position: 0 },
  { id: 'Gen.2.21.1', language: 'hebrew', text: 'יְהוָ֨ה', transliteration: 'yhwh', lemma: 'יְהוָה', lemmaTranslit: 'yhwh', gloss: 'YHWH', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H3068', position: 1 },
  { id: 'Gen.2.21.2', language: 'hebrew', text: 'אֱלֹהִ֧ים', transliteration: 'ʾĕlōhîm', lemma: 'אֱלֹהִים', lemmaTranslit: 'ʾĕlōhîm', gloss: 'God', morphology: { pos: 'noun', gender: 'masculine', number: 'plural', rawCode: 'Ncmpa' }, strongs: 'H430', position: 2 },
  { id: 'Gen.2.21.3', language: 'hebrew', text: 'תַּרְדֵּמָ֛ה', transliteration: 'tardēmāh', lemma: 'תַּרְדֵּמָה', lemmaTranslit: 'tardēmāh', gloss: 'a deep sleep', glossExtended: 'deep sleep, trance', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'absolute', rawCode: 'Ncfsa' }, strongs: 'H8639', position: 3 },
  { id: 'Gen.2.21.4', language: 'hebrew', text: 'עַל־הָאָדָ֖ם', transliteration: 'ʿal-hāʾāḏām', lemma: 'אָדָם', lemmaTranslit: 'ʾāḏām', gloss: 'upon the man', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'absolute', rawCode: 'Ncmsa' }, strongs: 'H120', position: 4 },
  { id: 'Gen.2.21.5', language: 'hebrew', text: 'וַיִּישָׁ֑ן', transliteration: 'wayyîšān', lemma: 'יָשֵׁן', lemmaTranslit: 'yāšēn', gloss: 'and he slept', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'imperfect', stem: 'qal', rawCode: 'Vqw3ms' }, strongs: 'H3462', position: 5 },
  { id: 'Gen.2.21.6', language: 'hebrew', text: 'וַיִּקַּ֗ח', transliteration: 'wayyiqqaḥ', lemma: 'לָקַח', lemmaTranslit: 'lāqaḥ', gloss: 'and took', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'imperfect', stem: 'qal', rawCode: 'Vqw3ms' }, strongs: 'H3947', position: 6 },
  { id: 'Gen.2.21.7', language: 'hebrew', text: 'אַחַת֙', transliteration: 'ʾaḥaṯ', lemma: 'אֶחָד', lemmaTranslit: 'ʾeḥāḏ', gloss: 'one', morphology: { pos: 'adjective', gender: 'feminine', number: 'singular', state: 'absolute', rawCode: 'Acfsa' }, strongs: 'H259', position: 7 },
  { id: 'Gen.2.21.8', language: 'hebrew', text: 'מִצַּלְעֹתָ֔יו', transliteration: 'miṣṣalʿōṯāyw', lemma: 'צֵלָע', lemmaTranslit: 'ṣēlāʿ', gloss: 'of his ribs', glossExtended: 'rib, side', morphology: { pos: 'noun', gender: 'feminine', number: 'plural', state: 'construct', rawCode: 'Ncfpc' }, strongs: 'H6763', position: 8 },
];

export const genesis2_21_translation: VerseTranslation = {
  verseRef: 'Gen.2.21',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: { type: 'literal', targetLanguage: 'en', text: 'And caused to fall YHWH God a deep sleep upon the man and he slept; and took one from his ribs and closed flesh in its place.', spans: [{ id: 'Gen.2.21.en.lit.0', text: 'And caused to fall YHWH God a deep sleep...', position: 0, sourceTokenIds: ['Gen.2.21.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
    idiomatic: { type: 'idiomatic', targetLanguage: 'en', text: 'So the LORD God caused a deep sleep to fall upon the man, and while he slept took one of his ribs and closed up its place with flesh.', spans: [{ id: 'Gen.2.21.en.idi.0', text: 'So the LORD God caused a deep sleep...', position: 0, sourceTokenIds: ['Gen.2.21.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
  },
  metadata: { pipelineVersion: '0.1.0', generatedAt: new Date().toISOString(), engineId: 'open-bible-pipeline', engineVersion: '0.1.0', sourceDataVersion: '1.0.0' },
};

export const genesis2_21_notes: StudyNote[] = [
  { id: 'Gen.2.21.note.1', verseRef: 'Gen.2.21', sourceTokenIds: ['Gen.2.21.3'], category: 'lexical', title: 'Deep Sleep (tardēmāh)', content: 'Describes divinely-induced sleep for significant revelations (Gen 15:12). Suggests woman\'s creation is divine work.', confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
  { id: 'Gen.2.21.note.2', verseRef: 'Gen.2.21', sourceTokenIds: ['Gen.2.21.8'], category: 'lexical', title: 'Rib or Side (ṣēlāʿ)', content: 'Can mean "rib" or "side" (as of tabernacle). "Side" may emphasize equality and partnership.', confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
];

export const genesis2_22_tokens: SourceToken[] = [
  { id: 'Gen.2.22.0', language: 'hebrew', text: 'וַיִּבֶן֩', transliteration: 'wayyiḇen', lemma: 'בָּנָה', lemmaTranslit: 'bānāh', gloss: 'And built', glossExtended: 'to build, construct', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'imperfect', stem: 'qal', rawCode: 'Vqw3ms' }, strongs: 'H1129', position: 0 },
  { id: 'Gen.2.22.1', language: 'hebrew', text: 'יְהוָ֨ה', transliteration: 'yhwh', lemma: 'יְהוָה', lemmaTranslit: 'yhwh', gloss: 'YHWH', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H3068', position: 1 },
  { id: 'Gen.2.22.2', language: 'hebrew', text: 'אֱלֹהִ֧ים', transliteration: 'ʾĕlōhîm', lemma: 'אֱלֹהִים', lemmaTranslit: 'ʾĕlōhîm', gloss: 'God', morphology: { pos: 'noun', gender: 'masculine', number: 'plural', rawCode: 'Ncmpa' }, strongs: 'H430', position: 2 },
  { id: 'Gen.2.22.3', language: 'hebrew', text: 'אֶֽת־הַצֵּלָ֛ע', transliteration: 'ʾeṯ-haṣṣēlāʿ', lemma: 'צֵלָע', lemmaTranslit: 'ṣēlāʿ', gloss: 'the rib', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'absolute', rawCode: 'Ncfsa' }, strongs: 'H6763', position: 3 },
  { id: 'Gen.2.22.4', language: 'hebrew', text: 'לְאִשָּׁ֑ה', transliteration: 'ləʾiššāh', lemma: 'אִשָּׁה', lemmaTranslit: 'ʾiššāh', gloss: 'into a woman', glossExtended: 'woman, wife', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'absolute', rawCode: 'Ncfsa' }, strongs: 'H802', position: 4 },
  { id: 'Gen.2.22.5', language: 'hebrew', text: 'וַיְבִאֶ֖הָ', transliteration: 'wayḇîʾehā', lemma: 'בּוֹא', lemmaTranslit: 'bôʾ', gloss: 'and brought her', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'imperfect', stem: 'hiphil', rawCode: 'Vhw3ms' }, strongs: 'H935', position: 5 },
  { id: 'Gen.2.22.6', language: 'hebrew', text: 'אֶל־הָֽאָדָֽם', transliteration: 'ʾel-hāʾāḏām', lemma: 'אָדָם', lemmaTranslit: 'ʾāḏām', gloss: 'to the man', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'absolute', rawCode: 'Ncmsa' }, strongs: 'H120', position: 6 },
];

export const genesis2_22_translation: VerseTranslation = {
  verseRef: 'Gen.2.22',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: { type: 'literal', targetLanguage: 'en', text: 'And built YHWH God the rib which he had taken from the man into a woman and brought her to the man.', spans: [{ id: 'Gen.2.22.en.lit.0', text: 'And built YHWH God the rib...', position: 0, sourceTokenIds: ['Gen.2.22.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
    idiomatic: { type: 'idiomatic', targetLanguage: 'en', text: 'And the rib that the LORD God had taken from the man he made into a woman and brought her to the man.', spans: [{ id: 'Gen.2.22.en.idi.0', text: 'And the rib that the LORD God had taken...', position: 0, sourceTokenIds: ['Gen.2.22.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
  },
  metadata: { pipelineVersion: '0.1.0', generatedAt: new Date().toISOString(), engineId: 'open-bible-pipeline', engineVersion: '0.1.0', sourceDataVersion: '1.0.0' },
};

export const genesis2_22_notes: StudyNote[] = [
  { id: 'Gen.2.22.note.1', verseRef: 'Gen.2.22', sourceTokenIds: ['Gen.2.22.0'], category: 'lexical', title: 'Built (bānāh)', content: 'The verb "build" suggests careful, purposeful construction. God "forms" man but "builds" woman—both deliberate creative acts.', confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
];

export const genesis2_23_tokens: SourceToken[] = [
  { id: 'Gen.2.23.0', language: 'hebrew', text: 'וַיֹּאמֶר֮', transliteration: 'wayyōʾmer', lemma: 'אָמַר', lemmaTranslit: 'ʾāmar', gloss: 'And said', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'imperfect', stem: 'qal', rawCode: 'Vqw3ms' }, strongs: 'H559', position: 0 },
  { id: 'Gen.2.23.1', language: 'hebrew', text: 'הָֽאָדָם֒', transliteration: 'hāʾāḏām', lemma: 'אָדָם', lemmaTranslit: 'ʾāḏām', gloss: 'the man', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'absolute', rawCode: 'Ncmsa' }, strongs: 'H120', position: 1 },
  { id: 'Gen.2.23.2', language: 'hebrew', text: 'זֹ֣את', transliteration: 'zōʾṯ', lemma: 'זֹאת', lemmaTranslit: 'zōʾṯ', gloss: 'This', morphology: { pos: 'pronoun', gender: 'feminine', number: 'singular', rawCode: 'Pdxfs' }, strongs: 'H2063', position: 2 },
  { id: 'Gen.2.23.3', language: 'hebrew', text: 'הַפַּ֗עַם', transliteration: 'happaʿam', lemma: 'פַּעַם', lemmaTranslit: 'paʿam', gloss: 'at last', glossExtended: 'time, now, at last', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'absolute', rawCode: 'Ncfsa' }, strongs: 'H6471', position: 3 },
  { id: 'Gen.2.23.4', language: 'hebrew', text: 'עֶ֚צֶם', transliteration: 'ʿeṣem', lemma: 'עֶצֶם', lemmaTranslit: 'ʿeṣem', gloss: 'bone', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'construct', rawCode: 'Ncfsc' }, strongs: 'H6106', position: 4 },
  { id: 'Gen.2.23.5', language: 'hebrew', text: 'מֵֽעֲצָמַ֔י', transliteration: 'mēʿăṣāmay', lemma: 'עֶצֶם', lemmaTranslit: 'ʿeṣem', gloss: 'of my bones', morphology: { pos: 'noun', gender: 'feminine', number: 'plural', state: 'construct', rawCode: 'Ncfpc' }, strongs: 'H6106', position: 5 },
  { id: 'Gen.2.23.6', language: 'hebrew', text: 'וּבָשָׂ֖ר', transliteration: 'ûḇāśār', lemma: 'בָּשָׂר', lemmaTranslit: 'bāśār', gloss: 'and flesh', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'construct', rawCode: 'Ncmsc' }, strongs: 'H1320', position: 6 },
  { id: 'Gen.2.23.7', language: 'hebrew', text: 'מִבְּשָׂרִ֑י', transliteration: 'mibbəśārî', lemma: 'בָּשָׂר', lemmaTranslit: 'bāśār', gloss: 'of my flesh', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'construct', rawCode: 'Ncmsc' }, strongs: 'H1320', position: 7 },
  { id: 'Gen.2.23.8', language: 'hebrew', text: 'לְזֹאת֙', transliteration: 'ləzōʾṯ', lemma: 'זֹאת', lemmaTranslit: 'zōʾṯ', gloss: 'She', morphology: { pos: 'pronoun', gender: 'feminine', number: 'singular', rawCode: 'Pdxfs' }, strongs: 'H2063', position: 8 },
  { id: 'Gen.2.23.9', language: 'hebrew', text: 'יִקָּרֵ֣א', transliteration: 'yiqqārēʾ', lemma: 'קָרָא', lemmaTranslit: 'qārāʾ', gloss: 'shall be called', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'imperfect', stem: 'niphal', rawCode: 'Vni3ms' }, strongs: 'H7121', position: 9 },
  { id: 'Gen.2.23.10', language: 'hebrew', text: 'אִשָּׁ֔ה', transliteration: 'ʾiššāh', lemma: 'אִשָּׁה', lemmaTranslit: 'ʾiššāh', gloss: 'Woman', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'absolute', rawCode: 'Ncfsa' }, strongs: 'H802', position: 10 },
  { id: 'Gen.2.23.11', language: 'hebrew', text: 'כִּ֥י', transliteration: 'kî', lemma: 'כִּי', lemmaTranslit: 'kî', gloss: 'because', morphology: { pos: 'conjunction', rawCode: 'Cc' }, strongs: 'H3588', position: 11 },
  { id: 'Gen.2.23.12', language: 'hebrew', text: 'מֵאִ֖ישׁ', transliteration: 'mēʾîš', lemma: 'אִישׁ', lemmaTranslit: 'ʾîš', gloss: 'from Man', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'absolute', rawCode: 'Ncmsa' }, strongs: 'H376', position: 12 },
  { id: 'Gen.2.23.13', language: 'hebrew', text: 'לֻֽקֳחָה־זֹּֽאת', transliteration: 'luqqŏḥāh-zōʾṯ', lemma: 'לָקַח', lemmaTranslit: 'lāqaḥ', gloss: 'was taken this one', morphology: { pos: 'verb', person: '3', gender: 'feminine', number: 'singular', tense: 'perfect', stem: 'pual', rawCode: 'Vpp3fs' }, strongs: 'H3947', position: 13 },
];

export const genesis2_23_translation: VerseTranslation = {
  verseRef: 'Gen.2.23',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: { type: 'literal', targetLanguage: 'en', text: 'And said the man: This now bone from my bones and flesh from my flesh; to this shall be called Woman, because from Man was taken this one.', spans: [{ id: 'Gen.2.23.en.lit.0', text: 'And said the man: This now bone from my bones...', position: 0, sourceTokenIds: ['Gen.2.23.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
    idiomatic: { type: 'idiomatic', targetLanguage: 'en', text: 'Then the man said, "This at last is bone of my bones and flesh of my flesh; she shall be called Woman, because she was taken out of Man."', spans: [{ id: 'Gen.2.23.en.idi.0', text: 'Then the man said, "This at last is bone of my bones..."', position: 0, sourceTokenIds: ['Gen.2.23.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
  },
  metadata: { pipelineVersion: '0.1.0', generatedAt: new Date().toISOString(), engineId: 'open-bible-pipeline', engineVersion: '0.1.0', sourceDataVersion: '1.0.0' },
};

export const genesis2_23_notes: StudyNote[] = [
  { id: 'Gen.2.23.note.1', verseRef: 'Gen.2.23', sourceTokenIds: ['Gen.2.23.4', 'Gen.2.23.5', 'Gen.2.23.6', 'Gen.2.23.7'], category: 'idiom', title: 'Bone and Flesh', content: '"Bone of my bones and flesh of my flesh" expresses kinship, shared identity, and covenant loyalty (cf. Gen 29:14; 2 Sam 5:1).', confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
  { id: 'Gen.2.23.note.2', verseRef: 'Gen.2.23', sourceTokenIds: ['Gen.2.23.10', 'Gen.2.23.12'], category: 'lexical', title: 'Woman (ʾiššāh) from Man (ʾîš)', content: 'Wordplay between ʾîš (man) and ʾiššāh (woman) captures the relationship—"woman" because taken from "man."', confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
];

export const genesis2_24_tokens: SourceToken[] = [
  { id: 'Gen.2.24.0', language: 'hebrew', text: 'עַל־כֵּן֙', transliteration: 'ʿal-kēn', lemma: 'כֵּן', lemmaTranslit: 'kēn', gloss: 'Therefore', morphology: { pos: 'adverb', rawCode: 'D' }, strongs: 'H3651', position: 0 },
  { id: 'Gen.2.24.1', language: 'hebrew', text: 'יַֽעֲזָב־', transliteration: 'yaʿăzāḇ-', lemma: 'עָזַב', lemmaTranslit: 'ʿāzaḇ', gloss: 'shall leave', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'imperfect', stem: 'qal', rawCode: 'Vqi3ms' }, strongs: 'H5800', position: 1 },
  { id: 'Gen.2.24.2', language: 'hebrew', text: 'אִ֔ישׁ', transliteration: 'ʾîš', lemma: 'אִישׁ', lemmaTranslit: 'ʾîš', gloss: 'a man', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'absolute', rawCode: 'Ncmsa' }, strongs: 'H376', position: 2 },
  { id: 'Gen.2.24.3', language: 'hebrew', text: 'אֶת־אָבִ֖יו', transliteration: 'ʾeṯ-ʾāḇîw', lemma: 'אָב', lemmaTranslit: 'ʾāḇ', gloss: 'his father', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'construct', rawCode: 'Ncmsc' }, strongs: 'H1', position: 3 },
  { id: 'Gen.2.24.4', language: 'hebrew', text: 'וְאֶת־אִמּ֑וֹ', transliteration: 'wəʾeṯ-ʾimmô', lemma: 'אֵם', lemmaTranslit: 'ʾēm', gloss: 'and his mother', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'construct', rawCode: 'Ncfsc' }, strongs: 'H517', position: 4 },
  { id: 'Gen.2.24.5', language: 'hebrew', text: 'וְדָבַ֣ק', transliteration: 'wəḏāḇaq', lemma: 'דָּבַק', lemmaTranslit: 'dāḇaq', gloss: 'and be united', glossExtended: 'to cling, cleave, hold fast', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'perfect', stem: 'qal', rawCode: 'Vqp3ms' }, strongs: 'H1692', position: 5 },
  { id: 'Gen.2.24.6', language: 'hebrew', text: 'בְּאִשְׁתּ֔וֹ', transliteration: 'bəʾištô', lemma: 'אִשָּׁה', lemmaTranslit: 'ʾiššāh', gloss: 'to his wife', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'construct', rawCode: 'Ncfsc' }, strongs: 'H802', position: 6 },
  { id: 'Gen.2.24.7', language: 'hebrew', text: 'וְהָי֖וּ', transliteration: 'wəhāyû', lemma: 'הָיָה', lemmaTranslit: 'hāyāh', gloss: 'and they shall become', morphology: { pos: 'verb', person: '3', gender: 'common', number: 'plural', tense: 'perfect', stem: 'qal', rawCode: 'Vqp3cp' }, strongs: 'H1961', position: 7 },
  { id: 'Gen.2.24.8', language: 'hebrew', text: 'לְבָשָׂ֥ר', transliteration: 'ləḇāśār', lemma: 'בָּשָׂר', lemmaTranslit: 'bāśār', gloss: 'flesh', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'absolute', rawCode: 'Ncmsa' }, strongs: 'H1320', position: 8 },
  { id: 'Gen.2.24.9', language: 'hebrew', text: 'אֶחָֽד', transliteration: 'ʾeḥāḏ', lemma: 'אֶחָד', lemmaTranslit: 'ʾeḥāḏ', gloss: 'one', morphology: { pos: 'adjective', gender: 'masculine', number: 'singular', state: 'absolute', rawCode: 'Acmsa' }, strongs: 'H259', position: 9 },
];

export const genesis2_24_translation: VerseTranslation = {
  verseRef: 'Gen.2.24',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: { type: 'literal', targetLanguage: 'en', text: 'Therefore shall leave a man his father and his mother and shall cleave to his wife, and they shall become flesh one.', spans: [{ id: 'Gen.2.24.en.lit.0', text: 'Therefore shall leave a man his father and his mother...', position: 0, sourceTokenIds: ['Gen.2.24.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
    idiomatic: { type: 'idiomatic', targetLanguage: 'en', text: 'Therefore a man shall leave his father and his mother and hold fast to his wife, and they shall become one flesh.', spans: [{ id: 'Gen.2.24.en.idi.0', text: 'Therefore a man shall leave his father and his mother...', position: 0, sourceTokenIds: ['Gen.2.24.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
  },
  metadata: { pipelineVersion: '0.1.0', generatedAt: new Date().toISOString(), engineId: 'open-bible-pipeline', engineVersion: '0.1.0', sourceDataVersion: '1.0.0' },
};

export const genesis2_24_notes: StudyNote[] = [
  { id: 'Gen.2.24.note.1', verseRef: 'Gen.2.24', sourceTokenIds: ['Gen.2.24.0'], category: 'theological', title: 'Foundation of Marriage', content: 'Establishes marriage as a creation ordinance—leaving, cleaving, becoming one flesh. Jesus cites this in Matt 19:5, Mark 10:7.', confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
  { id: 'Gen.2.24.note.2', verseRef: 'Gen.2.24', sourceTokenIds: ['Gen.2.24.5'], category: 'lexical', title: 'Cleave (dāḇaq)', content: 'Means "to cling, cleave, hold fast"—used of loyalty to God (Deut 10:20; 11:22) and covenant faithfulness.', confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
];

export const genesis2_25_tokens: SourceToken[] = [
  { id: 'Gen.2.25.0', language: 'hebrew', text: 'וַיִּֽהְי֤וּ', transliteration: 'wayyihyû', lemma: 'הָיָה', lemmaTranslit: 'hāyāh', gloss: 'And were', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'plural', tense: 'imperfect', stem: 'qal', rawCode: 'Vqw3mp' }, strongs: 'H1961', position: 0 },
  { id: 'Gen.2.25.1', language: 'hebrew', text: 'שְׁנֵיהֶם֙', transliteration: 'šənêhem', lemma: 'שְׁנַיִם', lemmaTranslit: 'šənayim', gloss: 'both of them', morphology: { pos: 'adjective', gender: 'masculine', number: 'dual', rawCode: 'Acmdc' }, strongs: 'H8147', position: 1 },
  { id: 'Gen.2.25.2', language: 'hebrew', text: 'עֲרוּמִּ֔ים', transliteration: 'ʿărummîm', lemma: 'עָרוֹם', lemmaTranslit: 'ʿārôm', gloss: 'naked', morphology: { pos: 'adjective', gender: 'masculine', number: 'plural', state: 'absolute', rawCode: 'Aampa' }, strongs: 'H6174', position: 2 },
  { id: 'Gen.2.25.3', language: 'hebrew', text: 'הָֽאָדָ֖ם', transliteration: 'hāʾāḏām', lemma: 'אָדָם', lemmaTranslit: 'ʾāḏām', gloss: 'the man', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'absolute', rawCode: 'Ncmsa' }, strongs: 'H120', position: 3 },
  { id: 'Gen.2.25.4', language: 'hebrew', text: 'וְאִשְׁתּ֑וֹ', transliteration: 'wəʾištô', lemma: 'אִשָּׁה', lemmaTranslit: 'ʾiššāh', gloss: 'and his wife', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'construct', rawCode: 'Ncfsc' }, strongs: 'H802', position: 4 },
  { id: 'Gen.2.25.5', language: 'hebrew', text: 'וְלֹ֖א', transliteration: 'wəlōʾ', lemma: 'לֹא', lemmaTranslit: 'lōʾ', gloss: 'and not', morphology: { pos: 'adverb', rawCode: 'An' }, strongs: 'H3808', position: 5 },
  { id: 'Gen.2.25.6', language: 'hebrew', text: 'יִתְבֹּשָֽׁשׁוּ', transliteration: 'yiṯbōšāšû', lemma: 'בּוֹשׁ', lemmaTranslit: 'bôš', gloss: 'were they ashamed', glossExtended: 'to be ashamed, feel shame', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'plural', tense: 'imperfect', stem: 'hithpael', rawCode: 'Vthi3mp' }, strongs: 'H954', position: 6 },
];

export const genesis2_25_translation: VerseTranslation = {
  verseRef: 'Gen.2.25',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: { type: 'literal', targetLanguage: 'en', text: 'And were both of them naked, the man and his wife, and not were they ashamed.', spans: [{ id: 'Gen.2.25.en.lit.0', text: 'And were both of them naked...', position: 0, sourceTokenIds: ['Gen.2.25.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
    idiomatic: { type: 'idiomatic', targetLanguage: 'en', text: 'And the man and his wife were both naked and were not ashamed.', spans: [{ id: 'Gen.2.25.en.idi.0', text: 'And the man and his wife were both naked...', position: 0, sourceTokenIds: ['Gen.2.25.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
  },
  metadata: { pipelineVersion: '0.1.0', generatedAt: new Date().toISOString(), engineId: 'open-bible-pipeline', engineVersion: '0.1.0', sourceDataVersion: '1.0.0' },
};

export const genesis2_25_notes: StudyNote[] = [
  { id: 'Gen.2.25.note.1', verseRef: 'Gen.2.25', sourceTokenIds: ['Gen.2.25.2'], category: 'theological', title: 'Innocence Before the Fall', content: 'Nakedness without shame indicates complete innocence, trust, and transparency. No guilt, fear, or broken relationship—all change in chapter 3.', confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
  { id: 'Gen.2.25.note.2', verseRef: 'Gen.2.25', sourceTokenIds: ['Gen.2.25.2'], category: 'lexical', title: 'Wordplay with "Cunning"', content: '"Naked" (ʿărummîm) in 2:25 sounds like "cunning" (ʿārûm) in 3:1, creating literary link between chapters.', confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
];

// Export verse structures
export const genesis2_15_verse = { ref: 'Gen.2.15', sourceTokens: genesis2_15_tokens, translation: genesis2_15_translation, notes: genesis2_15_notes };
export const genesis2_16_verse = { ref: 'Gen.2.16', sourceTokens: genesis2_16_tokens, translation: genesis2_16_translation, notes: genesis2_16_notes };
export const genesis2_17_verse = { ref: 'Gen.2.17', sourceTokens: genesis2_17_tokens, translation: genesis2_17_translation, notes: genesis2_17_notes };
export const genesis2_18_verse = { ref: 'Gen.2.18', sourceTokens: genesis2_18_tokens, translation: genesis2_18_translation, notes: genesis2_18_notes };
export const genesis2_19_verse = { ref: 'Gen.2.19', sourceTokens: genesis2_19_tokens, translation: genesis2_19_translation, notes: genesis2_19_notes };
export const genesis2_20_verse = { ref: 'Gen.2.20', sourceTokens: genesis2_20_tokens, translation: genesis2_20_translation, notes: genesis2_20_notes };
export const genesis2_21_verse = { ref: 'Gen.2.21', sourceTokens: genesis2_21_tokens, translation: genesis2_21_translation, notes: genesis2_21_notes };
export const genesis2_22_verse = { ref: 'Gen.2.22', sourceTokens: genesis2_22_tokens, translation: genesis2_22_translation, notes: genesis2_22_notes };
export const genesis2_23_verse = { ref: 'Gen.2.23', sourceTokens: genesis2_23_tokens, translation: genesis2_23_translation, notes: genesis2_23_notes };
export const genesis2_24_verse = { ref: 'Gen.2.24', sourceTokens: genesis2_24_tokens, translation: genesis2_24_translation, notes: genesis2_24_notes };
export const genesis2_25_verse = { ref: 'Gen.2.25', sourceTokens: genesis2_25_tokens, translation: genesis2_25_translation, notes: genesis2_25_notes };

// Combined export
export const genesis2_15_25_verses = [
  genesis2_15_verse,
  genesis2_16_verse,
  genesis2_17_verse,
  genesis2_18_verse,
  genesis2_19_verse,
  genesis2_20_verse,
  genesis2_21_verse,
  genesis2_22_verse,
  genesis2_23_verse,
  genesis2_24_verse,
  genesis2_25_verse,
];

export default genesis2_15_25_verses;
