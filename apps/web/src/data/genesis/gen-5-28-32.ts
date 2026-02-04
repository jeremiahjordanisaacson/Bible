/**
 * Genesis 5:28-32 - Hebrew morphological data
 * Genealogy: Lamech to Noah and his sons
 * Source: Open Hebrew Bible (Tanach.us) - Public Domain
 */

import type { SourceToken, VerseTranslation, StudyNote } from '@open-bible/schemas';

// Genesis 5:28 - Lamech lived 182 years, begot a son
export const genesis5_28_tokens: SourceToken[] = [
  { id: 'Gen.5.28.0', language: 'hebrew', text: 'וַֽיְחִי־לֶ֕מֶךְ', transliteration: 'wayḥî-lemeḵ', lemma: 'חָיָה', lemmaTranslit: 'ḥāyāh', gloss: 'And lived Lamech', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'imperfect', stem: 'qal', rawCode: 'Vqw3ms' }, strongs: 'H2421', position: 0 },
  { id: 'Gen.5.28.1', language: 'hebrew', text: 'שְׁתַּ֧יִם', transliteration: 'štayim', lemma: 'שְׁנַיִם', lemmaTranslit: 'šənayim', gloss: 'two', morphology: { pos: 'numeral', gender: 'feminine', number: 'dual', rawCode: 'Acfda' }, strongs: 'H8147', position: 1 },
  { id: 'Gen.5.28.2', language: 'hebrew', text: 'וּשְׁמֹנִ֛ים', transliteration: 'ûšəmōnîm', lemma: 'שְׁמֹנִים', lemmaTranslit: 'šəmōnîm', gloss: 'and eighty', morphology: { pos: 'numeral', rawCode: 'Acmpa' }, strongs: 'H8084', position: 2 },
  { id: 'Gen.5.28.3', language: 'hebrew', text: 'שָׁנָ֖ה', transliteration: 'šānāh', lemma: 'שָׁנָה', lemmaTranslit: 'šānāh', gloss: 'years', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'absolute', rawCode: 'Ncfsa' }, strongs: 'H8141', position: 3 },
  { id: 'Gen.5.28.4', language: 'hebrew', text: 'וּמְאַ֣ת', transliteration: 'ûməʾaṯ', lemma: 'מֵאָה', lemmaTranslit: 'mēʾāh', gloss: 'and a hundred', morphology: { pos: 'numeral', gender: 'feminine', number: 'singular', state: 'absolute', rawCode: 'Acfsa' }, strongs: 'H3967', position: 4 },
  { id: 'Gen.5.28.5', language: 'hebrew', text: 'שָׁנָ֑ה', transliteration: 'šānāh', lemma: 'שָׁנָה', lemmaTranslit: 'šānāh', gloss: 'years', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'absolute', rawCode: 'Ncfsa' }, strongs: 'H8141', position: 5 },
  { id: 'Gen.5.28.6', language: 'hebrew', text: 'וַיּ֖וֹלֶד', transliteration: 'wayyôleḏ', lemma: 'יָלַד', lemmaTranslit: 'yālaḏ', gloss: 'and he fathered', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'imperfect', stem: 'hiphil', rawCode: 'Vhw3ms' }, strongs: 'H3205', position: 6 },
  { id: 'Gen.5.28.7', language: 'hebrew', text: 'בֵּֽן', transliteration: 'bēn', lemma: 'בֵּן', lemmaTranslit: 'bēn', gloss: 'a son', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'absolute', rawCode: 'Ncmsa' }, strongs: 'H1121', position: 7 },
];

export const genesis5_28_translation: VerseTranslation = {
  verseRef: 'Gen.5.28',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: { type: 'literal', targetLanguage: 'en', text: 'And lived Lamech two and eighty years and a hundred years, and he fathered a son.', spans: [{ id: 'Gen.5.28.en.lit.0', text: 'And lived Lamech two and eighty years...', position: 0, sourceTokenIds: ['Gen.5.28.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
    idiomatic: { type: 'idiomatic', targetLanguage: 'en', text: 'When Lamech had lived 182 years, he fathered a son.', spans: [{ id: 'Gen.5.28.en.idi.0', text: 'When Lamech had lived 182 years...', position: 0, sourceTokenIds: ['Gen.5.28.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
  },
  metadata: { pipelineVersion: '0.1.0', generatedAt: new Date().toISOString(), engineId: 'open-bible-pipeline', engineVersion: '0.1.0', sourceDataVersion: '1.0.0' },
};

export const genesis5_28_notes: StudyNote[] = [];

// Genesis 5:29 - Called his name Noah
export const genesis5_29_tokens: SourceToken[] = [
  { id: 'Gen.5.29.0', language: 'hebrew', text: 'וַיִּקְרָ֧א', transliteration: 'wayyiqrāʾ', lemma: 'קָרָא', lemmaTranslit: 'qārāʾ', gloss: 'And he called', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'imperfect', stem: 'qal', rawCode: 'Vqw3ms' }, strongs: 'H7121', position: 0 },
  { id: 'Gen.5.29.1', language: 'hebrew', text: 'אֶת־שְׁמ֛וֹ', transliteration: 'ʾeṯ-šəmô', lemma: 'שֵׁם', lemmaTranslit: 'šēm', gloss: 'his name', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'construct', rawCode: 'Ncmsc' }, strongs: 'H8034', position: 1 },
  { id: 'Gen.5.29.2', language: 'hebrew', text: 'נֹ֖חַ', transliteration: 'nōaḥ', lemma: 'נֹחַ', lemmaTranslit: 'nōaḥ', gloss: 'Noah', glossExtended: 'rest, comfort', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H5146', position: 2 },
  { id: 'Gen.5.29.3', language: 'hebrew', text: 'לֵאמֹ֑ר', transliteration: 'lēʾmōr', lemma: 'אָמַר', lemmaTranslit: 'ʾāmar', gloss: 'saying', morphology: { pos: 'verb', mood: 'infinitive', stem: 'qal', rawCode: 'Vqc' }, strongs: 'H559', position: 3 },
  { id: 'Gen.5.29.4', language: 'hebrew', text: 'זֶ֞ה', transliteration: 'zeh', lemma: 'זֶה', lemmaTranslit: 'zeh', gloss: 'This one', morphology: { pos: 'pronoun', rawCode: 'Pd' }, strongs: 'H2088', position: 4 },
  { id: 'Gen.5.29.5', language: 'hebrew', text: 'יְנַחֲמֵ֤נוּ', transliteration: 'yənaḥămēnû', lemma: 'נָחַם', lemmaTranslit: 'nāḥam', gloss: 'will comfort us', glossExtended: 'to comfort, console', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'imperfect', stem: 'piel', rawCode: 'Vpi3ms' }, strongs: 'H5162', position: 5 },
  { id: 'Gen.5.29.6', language: 'hebrew', text: 'מִֽמַּעֲשֵׂ֙נוּ֙', transliteration: 'mimmaʿăśēnû', lemma: 'מַעֲשֶׂה', lemmaTranslit: 'maʿăśeh', gloss: 'from our work', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'construct', rawCode: 'Ncmsc' }, strongs: 'H4639', position: 6 },
  { id: 'Gen.5.29.7', language: 'hebrew', text: 'וּמֵעִצְּב֣וֹן', transliteration: 'ûmēʿiṣṣəḇôn', lemma: 'עִצָּבוֹן', lemmaTranslit: 'ʿiṣṣāḇôn', gloss: 'and from the toil of', glossExtended: 'toil, labor, pain', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'construct', rawCode: 'Ncmsc' }, strongs: 'H6093', position: 7 },
  { id: 'Gen.5.29.8', language: 'hebrew', text: 'יָדֵ֔ינוּ', transliteration: 'yāḏênû', lemma: 'יָד', lemmaTranslit: 'yāḏ', gloss: 'our hands', morphology: { pos: 'noun', gender: 'feminine', number: 'dual', state: 'construct', rawCode: 'Ncfdc' }, strongs: 'H3027', position: 8 },
  { id: 'Gen.5.29.9', language: 'hebrew', text: 'מִן־הָ֣אֲדָמָ֔ה', transliteration: 'min-hāʾăḏāmāh', lemma: 'אֲדָמָה', lemmaTranslit: 'ʾăḏāmāh', gloss: 'from the ground', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'absolute', rawCode: 'Ncfsa' }, strongs: 'H127', position: 9 },
  { id: 'Gen.5.29.10', language: 'hebrew', text: 'אֲשֶׁ֥ר', transliteration: 'ʾăšer', lemma: 'אֲשֶׁר', lemmaTranslit: 'ʾăšer', gloss: 'which', morphology: { pos: 'particle', rawCode: 'Tr' }, strongs: 'H834', position: 10 },
  { id: 'Gen.5.29.11', language: 'hebrew', text: 'אֵֽרְרָ֖הּ', transliteration: 'ʾērərāh', lemma: 'אָרַר', lemmaTranslit: 'ʾārar', gloss: 'cursed it', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'perfect', stem: 'piel', rawCode: 'Vpp3ms' }, strongs: 'H779', position: 11 },
  { id: 'Gen.5.29.12', language: 'hebrew', text: 'יְהוָֽה', transliteration: 'yhwh', lemma: 'יְהוָה', lemmaTranslit: 'yhwh', gloss: 'YHWH', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H3068', position: 12 },
];

export const genesis5_29_translation: VerseTranslation = {
  verseRef: 'Gen.5.29',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: { type: 'literal', targetLanguage: 'en', text: 'And he called his name Noah, saying: This one will comfort us from our work and from the toil of our hands, from the ground which cursed it YHWH.', spans: [{ id: 'Gen.5.29.en.lit.0', text: 'And he called his name Noah, saying...', position: 0, sourceTokenIds: ['Gen.5.29.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
    idiomatic: { type: 'idiomatic', targetLanguage: 'en', text: 'And he called his name Noah, saying, "Out of the ground that the LORD has cursed, this one shall bring us relief from our work and from the painful toil of our hands."', spans: [{ id: 'Gen.5.29.en.idi.0', text: 'And he called his name Noah, saying...', position: 0, sourceTokenIds: ['Gen.5.29.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
  },
  metadata: { pipelineVersion: '0.1.0', generatedAt: new Date().toISOString(), engineId: 'open-bible-pipeline', engineVersion: '0.1.0', sourceDataVersion: '1.0.0' },
};

export const genesis5_29_notes: StudyNote[] = [
  { id: 'Gen.5.29.note.1', verseRef: 'Gen.5.29', sourceTokenIds: ['Gen.5.29.2', 'Gen.5.29.5'], category: 'lexical', title: 'Noah (nōaḥ) and Comfort (nāḥam)', content: 'Noah\'s name (nōaḥ, "rest") is wordplayed with nāḥam ("comfort"). Lamech prophetically hopes this son will bring relief from the curse of 3:17-19.', confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
  { id: 'Gen.5.29.note.2', verseRef: 'Gen.5.29', sourceTokenIds: ['Gen.5.29.7'], category: 'cross-reference', title: 'Same Word as 3:17', content: 'The word ʿiṣṣāḇôn ("painful toil") is the same used in 3:17 for the curse on Adam\'s work. The godly line still feels the effects of the fall.', confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
];

// Genesis 5:30 - Lamech lived after Noah 595 years
export const genesis5_30_tokens: SourceToken[] = [
  { id: 'Gen.5.30.0', language: 'hebrew', text: 'וַֽיְחִי־לֶ֗מֶךְ', transliteration: 'wayḥî-lemeḵ', lemma: 'חָיָה', lemmaTranslit: 'ḥāyāh', gloss: 'And lived Lamech', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'imperfect', stem: 'qal', rawCode: 'Vqw3ms' }, strongs: 'H2421', position: 0 },
  { id: 'Gen.5.30.1', language: 'hebrew', text: 'אַֽחֲרֵי֙', transliteration: 'ʾaḥărê', lemma: 'אַחַר', lemmaTranslit: 'ʾaḥar', gloss: 'after', morphology: { pos: 'preposition', rawCode: 'R' }, strongs: 'H310', position: 1 },
  { id: 'Gen.5.30.2', language: 'hebrew', text: 'הוֹלִיד֣וֹ', transliteration: 'hôlîḏô', lemma: 'יָלַד', lemmaTranslit: 'yālaḏ', gloss: 'he fathered', morphology: { pos: 'verb', mood: 'infinitive', stem: 'hiphil', rawCode: 'Vhc' }, strongs: 'H3205', position: 2 },
  { id: 'Gen.5.30.3', language: 'hebrew', text: 'אֶת־נֹ֔חַ', transliteration: 'ʾeṯ-nōaḥ', lemma: 'נֹחַ', lemmaTranslit: 'nōaḥ', gloss: 'Noah', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H5146', position: 3 },
  { id: 'Gen.5.30.4', language: 'hebrew', text: 'חָמֵ֤שׁ', transliteration: 'ḥāmēš', lemma: 'חָמֵשׁ', lemmaTranslit: 'ḥāmēš', gloss: 'five', morphology: { pos: 'numeral', rawCode: 'Acfsa' }, strongs: 'H2568', position: 4 },
  { id: 'Gen.5.30.5', language: 'hebrew', text: 'וְתִשְׁעִים֙', transliteration: 'wəṯišʿîm', lemma: 'תִּשְׁעִים', lemmaTranslit: 'tišʿîm', gloss: 'and ninety', morphology: { pos: 'numeral', rawCode: 'Acmpa' }, strongs: 'H8673', position: 5 },
  { id: 'Gen.5.30.6', language: 'hebrew', text: 'שָׁנָ֔ה', transliteration: 'šānāh', lemma: 'שָׁנָה', lemmaTranslit: 'šānāh', gloss: 'years', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'absolute', rawCode: 'Ncfsa' }, strongs: 'H8141', position: 6 },
  { id: 'Gen.5.30.7', language: 'hebrew', text: 'וַחֲמֵ֥שׁ', transliteration: 'waḥămēš', lemma: 'חָמֵשׁ', lemmaTranslit: 'ḥāmēš', gloss: 'and five', morphology: { pos: 'numeral', rawCode: 'Acfsa' }, strongs: 'H2568', position: 7 },
  { id: 'Gen.5.30.8', language: 'hebrew', text: 'מֵא֖וֹת', transliteration: 'mēʾôṯ', lemma: 'מֵאָה', lemmaTranslit: 'mēʾāh', gloss: 'hundred', morphology: { pos: 'numeral', gender: 'feminine', number: 'plural', state: 'absolute', rawCode: 'Acfpa' }, strongs: 'H3967', position: 8 },
  { id: 'Gen.5.30.9', language: 'hebrew', text: 'שָׁנָ֑ה', transliteration: 'šānāh', lemma: 'שָׁנָה', lemmaTranslit: 'šānāh', gloss: 'years', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'absolute', rawCode: 'Ncfsa' }, strongs: 'H8141', position: 9 },
  { id: 'Gen.5.30.10', language: 'hebrew', text: 'וַיּ֥וֹלֶד', transliteration: 'wayyôleḏ', lemma: 'יָלַד', lemmaTranslit: 'yālaḏ', gloss: 'and he fathered', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'imperfect', stem: 'hiphil', rawCode: 'Vhw3ms' }, strongs: 'H3205', position: 10 },
  { id: 'Gen.5.30.11', language: 'hebrew', text: 'בָּנִ֖ים', transliteration: 'bānîm', lemma: 'בֵּן', lemmaTranslit: 'bēn', gloss: 'sons', morphology: { pos: 'noun', gender: 'masculine', number: 'plural', state: 'absolute', rawCode: 'Ncmpa' }, strongs: 'H1121', position: 11 },
  { id: 'Gen.5.30.12', language: 'hebrew', text: 'וּבָנֽוֹת', transliteration: 'ûḇānôṯ', lemma: 'בַּת', lemmaTranslit: 'baṯ', gloss: 'and daughters', morphology: { pos: 'noun', gender: 'feminine', number: 'plural', state: 'absolute', rawCode: 'Ncfpa' }, strongs: 'H1323', position: 12 },
];

export const genesis5_30_translation: VerseTranslation = {
  verseRef: 'Gen.5.30',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: { type: 'literal', targetLanguage: 'en', text: 'And lived Lamech after he fathered Noah five and ninety years and five hundred years, and he fathered sons and daughters.', spans: [{ id: 'Gen.5.30.en.lit.0', text: 'And lived Lamech after he fathered Noah...', position: 0, sourceTokenIds: ['Gen.5.30.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
    idiomatic: { type: 'idiomatic', targetLanguage: 'en', text: 'Lamech lived after he fathered Noah 595 years and had other sons and daughters.', spans: [{ id: 'Gen.5.30.en.idi.0', text: 'Lamech lived after he fathered Noah 595 years...', position: 0, sourceTokenIds: ['Gen.5.30.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
  },
  metadata: { pipelineVersion: '0.1.0', generatedAt: new Date().toISOString(), engineId: 'open-bible-pipeline', engineVersion: '0.1.0', sourceDataVersion: '1.0.0' },
};

export const genesis5_30_notes: StudyNote[] = [];

// Genesis 5:31 - Lamech lived 777 years, then died
export const genesis5_31_tokens: SourceToken[] = [
  { id: 'Gen.5.31.0', language: 'hebrew', text: 'וַֽיְהִי֙', transliteration: 'wayəhî', lemma: 'הָיָה', lemmaTranslit: 'hāyāh', gloss: 'And were', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'imperfect', stem: 'qal', rawCode: 'Vqw3ms' }, strongs: 'H1961', position: 0 },
  { id: 'Gen.5.31.1', language: 'hebrew', text: 'כָּל־יְמֵי־לֶ֔מֶךְ', transliteration: 'kāl-yəmê-lemeḵ', lemma: 'יוֹם', lemmaTranslit: 'yôm', gloss: 'all the days of Lamech', morphology: { pos: 'noun', gender: 'masculine', number: 'plural', state: 'construct', rawCode: 'Ncmpc' }, strongs: 'H3117', position: 1 },
  { id: 'Gen.5.31.2', language: 'hebrew', text: 'שֶׁ֤בַע', transliteration: 'šeḇaʿ', lemma: 'שֶׁבַע', lemmaTranslit: 'šeḇaʿ', gloss: 'seven', morphology: { pos: 'numeral', rawCode: 'Acfsa' }, strongs: 'H7651', position: 2 },
  { id: 'Gen.5.31.3', language: 'hebrew', text: 'וְשִׁבְעִים֙', transliteration: 'wəšiḇʿîm', lemma: 'שִׁבְעִים', lemmaTranslit: 'šiḇʿîm', gloss: 'and seventy', morphology: { pos: 'numeral', rawCode: 'Acmpa' }, strongs: 'H7657', position: 3 },
  { id: 'Gen.5.31.4', language: 'hebrew', text: 'שָׁנָ֔ה', transliteration: 'šānāh', lemma: 'שָׁנָה', lemmaTranslit: 'šānāh', gloss: 'years', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'absolute', rawCode: 'Ncfsa' }, strongs: 'H8141', position: 4 },
  { id: 'Gen.5.31.5', language: 'hebrew', text: 'וּשְׁבַ֥ע', transliteration: 'ûšəḇaʿ', lemma: 'שֶׁבַע', lemmaTranslit: 'šeḇaʿ', gloss: 'and seven', morphology: { pos: 'numeral', rawCode: 'Acfsa' }, strongs: 'H7651', position: 5 },
  { id: 'Gen.5.31.6', language: 'hebrew', text: 'מֵא֖וֹת', transliteration: 'mēʾôṯ', lemma: 'מֵאָה', lemmaTranslit: 'mēʾāh', gloss: 'hundred', morphology: { pos: 'numeral', gender: 'feminine', number: 'plural', state: 'absolute', rawCode: 'Acfpa' }, strongs: 'H3967', position: 6 },
  { id: 'Gen.5.31.7', language: 'hebrew', text: 'שָׁנָ֑ה', transliteration: 'šānāh', lemma: 'שָׁנָה', lemmaTranslit: 'šānāh', gloss: 'years', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'absolute', rawCode: 'Ncfsa' }, strongs: 'H8141', position: 7 },
  { id: 'Gen.5.31.8', language: 'hebrew', text: 'וַיָּמֹֽת', transliteration: 'wayyāmōṯ', lemma: 'מוּת', lemmaTranslit: 'mûṯ', gloss: 'and he died', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'imperfect', stem: 'qal', rawCode: 'Vqw3ms' }, strongs: 'H4191', position: 8 },
];

export const genesis5_31_translation: VerseTranslation = {
  verseRef: 'Gen.5.31',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: { type: 'literal', targetLanguage: 'en', text: 'And were all the days of Lamech seven and seventy years and seven hundred years, and he died.', spans: [{ id: 'Gen.5.31.en.lit.0', text: 'And were all the days of Lamech...', position: 0, sourceTokenIds: ['Gen.5.31.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
    idiomatic: { type: 'idiomatic', targetLanguage: 'en', text: 'Thus all the days of Lamech were 777 years, and he died.', spans: [{ id: 'Gen.5.31.en.idi.0', text: 'Thus all the days of Lamech were 777 years...', position: 0, sourceTokenIds: ['Gen.5.31.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
  },
  metadata: { pipelineVersion: '0.1.0', generatedAt: new Date().toISOString(), engineId: 'open-bible-pipeline', engineVersion: '0.1.0', sourceDataVersion: '1.0.0' },
};

export const genesis5_31_notes: StudyNote[] = [
  { id: 'Gen.5.31.note.1', verseRef: 'Gen.5.31', sourceTokenIds: [], category: 'interpretive', title: '777 Years', content: 'Lamech\'s 777 years stands in contrast to Cainite Lamech\'s seventy-sevenfold vengeance (4:24). The number seven in the godly line signifies completion and blessing rather than escalating violence.', confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
];

// Genesis 5:32 - Noah was 500 years old, fathered Shem, Ham, Japheth
export const genesis5_32_tokens: SourceToken[] = [
  { id: 'Gen.5.32.0', language: 'hebrew', text: 'וַֽיְהִי־נֹ֕חַ', transliteration: 'wayəhî-nōaḥ', lemma: 'הָיָה', lemmaTranslit: 'hāyāh', gloss: 'And was Noah', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'imperfect', stem: 'qal', rawCode: 'Vqw3ms' }, strongs: 'H1961', position: 0 },
  { id: 'Gen.5.32.1', language: 'hebrew', text: 'בֶּן־חֲמֵ֥שׁ', transliteration: 'ben-ḥămēš', lemma: 'בֵּן', lemmaTranslit: 'bēn', gloss: 'a son of five', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'construct', rawCode: 'Ncmsc' }, strongs: 'H1121', position: 1 },
  { id: 'Gen.5.32.2', language: 'hebrew', text: 'מֵא֖וֹת', transliteration: 'mēʾôṯ', lemma: 'מֵאָה', lemmaTranslit: 'mēʾāh', gloss: 'hundred', morphology: { pos: 'numeral', gender: 'feminine', number: 'plural', state: 'absolute', rawCode: 'Acfpa' }, strongs: 'H3967', position: 2 },
  { id: 'Gen.5.32.3', language: 'hebrew', text: 'שָׁנָ֑ה', transliteration: 'šānāh', lemma: 'שָׁנָה', lemmaTranslit: 'šānāh', gloss: 'years', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'absolute', rawCode: 'Ncfsa' }, strongs: 'H8141', position: 3 },
  { id: 'Gen.5.32.4', language: 'hebrew', text: 'וַיּ֣וֹלֶד', transliteration: 'wayyôleḏ', lemma: 'יָלַד', lemmaTranslit: 'yālaḏ', gloss: 'and he fathered', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'imperfect', stem: 'hiphil', rawCode: 'Vhw3ms' }, strongs: 'H3205', position: 4 },
  { id: 'Gen.5.32.5', language: 'hebrew', text: 'נֹ֔חַ', transliteration: 'nōaḥ', lemma: 'נֹחַ', lemmaTranslit: 'nōaḥ', gloss: 'Noah', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H5146', position: 5 },
  { id: 'Gen.5.32.6', language: 'hebrew', text: 'אֶת־שֵׁ֖ם', transliteration: 'ʾeṯ-šēm', lemma: 'שֵׁם', lemmaTranslit: 'šēm', gloss: 'Shem', glossExtended: 'name, renown', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H8035', position: 6 },
  { id: 'Gen.5.32.7', language: 'hebrew', text: 'אֶת־חָ֥ם', transliteration: 'ʾeṯ-ḥām', lemma: 'חָם', lemmaTranslit: 'ḥām', gloss: 'Ham', glossExtended: 'hot', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H2526', position: 7 },
  { id: 'Gen.5.32.8', language: 'hebrew', text: 'וְאֶת־יָֽפֶת', transliteration: 'wəʾeṯ-yāp̄eṯ', lemma: 'יֶפֶת', lemmaTranslit: 'yep̄eṯ', gloss: 'and Japheth', glossExtended: 'enlarged', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H3315', position: 8 },
];

export const genesis5_32_translation: VerseTranslation = {
  verseRef: 'Gen.5.32',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: { type: 'literal', targetLanguage: 'en', text: 'And was Noah a son of five hundred years, and fathered Noah Shem, Ham, and Japheth.', spans: [{ id: 'Gen.5.32.en.lit.0', text: 'And was Noah a son of five hundred years...', position: 0, sourceTokenIds: ['Gen.5.32.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
    idiomatic: { type: 'idiomatic', targetLanguage: 'en', text: 'After Noah was 500 years old, Noah fathered Shem, Ham, and Japheth.', spans: [{ id: 'Gen.5.32.en.idi.0', text: 'After Noah was 500 years old...', position: 0, sourceTokenIds: ['Gen.5.32.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
  },
  metadata: { pipelineVersion: '0.1.0', generatedAt: new Date().toISOString(), engineId: 'open-bible-pipeline', engineVersion: '0.1.0', sourceDataVersion: '1.0.0' },
};

export const genesis5_32_notes: StudyNote[] = [
  { id: 'Gen.5.32.note.1', verseRef: 'Gen.5.32', sourceTokenIds: ['Gen.5.32.6', 'Gen.5.32.7', 'Gen.5.32.8'], category: 'lexical', title: 'Noah\'s Three Sons', content: 'Shem ("name/renown"), Ham ("hot"), Japheth ("enlarged"). These three sons will repopulate the earth after the flood. The Table of Nations (ch. 10) traces all peoples to them.', confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
  { id: 'Gen.5.32.note.2', verseRef: 'Gen.5.32', sourceTokenIds: [], category: 'interpretive', title: 'Tenth Generation', content: 'Noah is the tenth generation from Adam, a number of completion. Like Enoch (seventh from Adam), Noah is marked out as special—he will be God\'s instrument of salvation through judgment.', confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
];

// Export verse structures
export const genesis5_28_verse = { ref: 'Gen.5.28', sourceTokens: genesis5_28_tokens, translation: genesis5_28_translation, notes: genesis5_28_notes };
export const genesis5_29_verse = { ref: 'Gen.5.29', sourceTokens: genesis5_29_tokens, translation: genesis5_29_translation, notes: genesis5_29_notes };
export const genesis5_30_verse = { ref: 'Gen.5.30', sourceTokens: genesis5_30_tokens, translation: genesis5_30_translation, notes: genesis5_30_notes };
export const genesis5_31_verse = { ref: 'Gen.5.31', sourceTokens: genesis5_31_tokens, translation: genesis5_31_translation, notes: genesis5_31_notes };
export const genesis5_32_verse = { ref: 'Gen.5.32', sourceTokens: genesis5_32_tokens, translation: genesis5_32_translation, notes: genesis5_32_notes };

// Combined export
export const genesis5_28_32_verses = [
  genesis5_28_verse,
  genesis5_29_verse,
  genesis5_30_verse,
  genesis5_31_verse,
  genesis5_32_verse,
];

export default genesis5_28_32_verses;
