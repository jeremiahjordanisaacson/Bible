/**
 * Genesis 8:8-14 - Noah sends out the dove, waiting for dry land
 * Hebrew morphological data with study annotations
 */

import type { SourceToken, VerseTranslation, StudyNote } from '@open-bible/schemas';

// Genesis 8:8
export const genesis8_8_tokens: SourceToken[] = [
  { id: 'Gen.8.8.0', language: 'hebrew', text: 'וַיְשַׁלַּח', transliteration: 'wayəšallaḥ', lemma: 'שָׁלַח', lemmaTranslit: 'šālaḥ', gloss: 'And he sent out', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'imperfect', stem: 'piel', rawCode: 'Vpw3ms' }, strongs: 'H7971', position: 0 },
  { id: 'Gen.8.8.1', language: 'hebrew', text: 'אֶת־הַיּוֹנָה', transliteration: 'ʾeṯ-hayyônāh', lemma: 'יוֹנָה', lemmaTranslit: 'yônāh', gloss: 'the dove', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'absolute', rawCode: 'Ncfsa' }, strongs: 'H3123', position: 1 },
  { id: 'Gen.8.8.2', language: 'hebrew', text: 'מֵאִתּוֹ', transliteration: 'mēʾittô', lemma: 'אֵת', lemmaTranslit: 'ʾēṯ', gloss: 'from him', morphology: { pos: 'preposition', rawCode: 'RPs3ms' }, strongs: 'H854', position: 2 },
  { id: 'Gen.8.8.3', language: 'hebrew', text: 'לִרְאוֹת', transliteration: 'lirʾôṯ', lemma: 'רָאָה', lemmaTranslit: 'rāʾāh', gloss: 'to see', morphology: { pos: 'verb', mood: 'infinitive', stem: 'qal', rawCode: 'VqIc' }, strongs: 'H7200', position: 3 },
  { id: 'Gen.8.8.4', language: 'hebrew', text: 'הֲקַלּוּ', transliteration: 'hăqallû', lemma: 'קָלַל', lemmaTranslit: 'qālal', gloss: 'if had lightened', morphology: { pos: 'verb', person: '3', gender: 'common', number: 'plural', tense: 'perfect', stem: 'qal', rawCode: 'Vqp3cp' }, strongs: 'H7043', position: 4 },
  { id: 'Gen.8.8.5', language: 'hebrew', text: 'הַמַּיִם', transliteration: 'hammayim', lemma: 'מַיִם', lemmaTranslit: 'mayim', gloss: 'the waters', morphology: { pos: 'noun', gender: 'masculine', number: 'plural', state: 'absolute', rawCode: 'Ncmpa' }, strongs: 'H4325', position: 5 },
  { id: 'Gen.8.8.6', language: 'hebrew', text: 'מֵעַל', transliteration: 'mēʿal', lemma: 'מֵעַל', lemmaTranslit: 'mēʿal', gloss: 'from upon', morphology: { pos: 'preposition', rawCode: 'R' }, strongs: 'H5921', position: 6 },
  { id: 'Gen.8.8.7', language: 'hebrew', text: 'פְּנֵי', transliteration: 'pənê', lemma: 'פָּנִים', lemmaTranslit: 'pānîm', gloss: 'face of', morphology: { pos: 'noun', gender: 'masculine', number: 'plural', state: 'construct', rawCode: 'Ncmpc' }, strongs: 'H6440', position: 7 },
  { id: 'Gen.8.8.8', language: 'hebrew', text: 'הָאֲדָמָה', transliteration: 'hāʾăḏāmāh', lemma: 'אֲדָמָה', lemmaTranslit: 'ʾăḏāmāh', gloss: 'the ground', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'absolute', rawCode: 'Ncfsa' }, strongs: 'H127', position: 8 },
];

export const genesis8_8_translation: VerseTranslation = {
  verseRef: 'Gen.8.8',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: { type: 'literal', targetLanguage: 'en', text: 'And he sent out the dove from him, to see if the waters had lightened from upon the face of the ground.', spans: [{ id: 'Gen.8.8.en.lit.0', text: 'And he sent out the dove...', position: 0, sourceTokenIds: ['Gen.8.8.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
    idiomatic: { type: 'idiomatic', targetLanguage: 'en', text: 'Then he sent out a dove to see if the water had receded from the surface of the ground.', spans: [{ id: 'Gen.8.8.en.idi.0', text: 'Then he sent out a dove...', position: 0, sourceTokenIds: ['Gen.8.8.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
  },
  metadata: { pipelineVersion: '0.1.0', generatedAt: new Date().toISOString(), engineId: 'open-bible-pipeline', engineVersion: '0.1.0', sourceDataVersion: '1.0.0' },
};

export const genesis8_8_notes: StudyNote[] = [
  { id: 'Gen.8.8.note.1', verseRef: 'Gen.8.8', sourceTokenIds: ['Gen.8.8.1'], category: 'cultural', title: 'The Dove', content: 'The dove (yonah) was considered a clean bird (Lev 1:14) and symbolizes purity, innocence, and gentleness in Scripture. Unlike the raven which could feed on carrion, the dove needed vegetation and dry land, making it an ideal indicator of habitable conditions.', confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
];

// Genesis 8:9
export const genesis8_9_tokens: SourceToken[] = [
  { id: 'Gen.8.9.0', language: 'hebrew', text: 'וְלֹא־מָצְאָה', transliteration: 'wəlōʾ-māṣʾāh', lemma: 'מָצָא', lemmaTranslit: 'māṣāʾ', gloss: 'And not found', morphology: { pos: 'verb', person: '3', gender: 'feminine', number: 'singular', tense: 'perfect', stem: 'qal', rawCode: 'Vqp3fs' }, strongs: 'H4672', position: 0 },
  { id: 'Gen.8.9.1', language: 'hebrew', text: 'הַיּוֹנָה', transliteration: 'hayyônāh', lemma: 'יוֹנָה', lemmaTranslit: 'yônāh', gloss: 'the dove', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'absolute', rawCode: 'Ncfsa' }, strongs: 'H3123', position: 1 },
  { id: 'Gen.8.9.2', language: 'hebrew', text: 'מָנוֹחַ', transliteration: 'mānôaḥ', lemma: 'מָנוֹחַ', lemmaTranslit: 'mānôaḥ', gloss: 'rest', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'absolute', rawCode: 'Ncmsa' }, strongs: 'H4494', position: 2 },
  { id: 'Gen.8.9.3', language: 'hebrew', text: 'לְכַף־רַגְלָהּ', transliteration: 'ləḵap̄-raḡlāh', lemma: 'רֶגֶל', lemmaTranslit: 'reḡel', gloss: 'for the sole of her foot', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'construct', rawCode: 'Ncfsc' }, strongs: 'H7272', position: 3 },
  { id: 'Gen.8.9.4', language: 'hebrew', text: 'וַתָּשָׁב', transliteration: 'wattāšāḇ', lemma: 'שׁוּב', lemmaTranslit: 'šûḇ', gloss: 'and it returned', morphology: { pos: 'verb', person: '3', gender: 'feminine', number: 'singular', tense: 'imperfect', stem: 'qal', rawCode: 'Vqw3fs' }, strongs: 'H7725', position: 4 },
  { id: 'Gen.8.9.5', language: 'hebrew', text: 'אֵלָיו', transliteration: 'ʾēlāyw', lemma: 'אֵל', lemmaTranslit: 'ʾēl', gloss: 'to him', morphology: { pos: 'preposition', rawCode: 'RPs3ms' }, strongs: 'H413', position: 5 },
  { id: 'Gen.8.9.6', language: 'hebrew', text: 'אֶל־הַתֵּבָה', transliteration: 'ʾel-hattēḇāh', lemma: 'תֵּבָה', lemmaTranslit: 'tēḇāh', gloss: 'to the ark', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'absolute', rawCode: 'Ncfsa' }, strongs: 'H8392', position: 6 },
  { id: 'Gen.8.9.7', language: 'hebrew', text: 'כִּי־מַיִם', transliteration: 'kî-mayim', lemma: 'מַיִם', lemmaTranslit: 'mayim', gloss: 'for waters', morphology: { pos: 'noun', gender: 'masculine', number: 'plural', state: 'absolute', rawCode: 'Ncmpa' }, strongs: 'H4325', position: 7 },
  { id: 'Gen.8.9.8', language: 'hebrew', text: 'עַל־פְּנֵי', transliteration: 'ʿal-pənê', lemma: 'פָּנִים', lemmaTranslit: 'pānîm', gloss: 'upon face of', morphology: { pos: 'noun', gender: 'masculine', number: 'plural', state: 'construct', rawCode: 'Ncmpc' }, strongs: 'H6440', position: 8 },
  { id: 'Gen.8.9.9', language: 'hebrew', text: 'כָל־הָאָרֶץ', transliteration: 'ḵāl-hāʾāreṣ', lemma: 'אֶרֶץ', lemmaTranslit: 'ʾereṣ', gloss: 'all the earth', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'absolute', rawCode: 'Ncfsa' }, strongs: 'H776', position: 9 },
  { id: 'Gen.8.9.10', language: 'hebrew', text: 'וַיִּשְׁלַח', transliteration: 'wayyišlaḥ', lemma: 'שָׁלַח', lemmaTranslit: 'šālaḥ', gloss: 'and he sent out', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'imperfect', stem: 'qal', rawCode: 'Vqw3ms' }, strongs: 'H7971', position: 10 },
  { id: 'Gen.8.9.11', language: 'hebrew', text: 'יָדוֹ', transliteration: 'yāḏô', lemma: 'יָד', lemmaTranslit: 'yāḏ', gloss: 'his hand', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'construct', rawCode: 'Ncfsc' }, strongs: 'H3027', position: 11 },
  { id: 'Gen.8.9.12', language: 'hebrew', text: 'וַיִּקָּחֶהָ', transliteration: 'wayyiqqāḥehā', lemma: 'לָקַח', lemmaTranslit: 'lāqaḥ', gloss: 'and he took her', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'imperfect', stem: 'qal', rawCode: 'Vqw3ms' }, strongs: 'H3947', position: 12 },
  { id: 'Gen.8.9.13', language: 'hebrew', text: 'וַיָּבֵא', transliteration: 'wayyāḇēʾ', lemma: 'בּוֹא', lemmaTranslit: 'bôʾ', gloss: 'and he brought', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'imperfect', stem: 'hiphil', rawCode: 'Vhw3ms' }, strongs: 'H935', position: 13 },
  { id: 'Gen.8.9.14', language: 'hebrew', text: 'אֹתָהּ', transliteration: 'ʾōṯāh', lemma: 'אֵת', lemmaTranslit: 'ʾēṯ', gloss: 'her', morphology: { pos: 'particle', rawCode: 'ToPs3fs' }, strongs: 'H853', position: 14 },
  { id: 'Gen.8.9.15', language: 'hebrew', text: 'אֵלָיו', transliteration: 'ʾēlāyw', lemma: 'אֵל', lemmaTranslit: 'ʾēl', gloss: 'to him', morphology: { pos: 'preposition', rawCode: 'RPs3ms' }, strongs: 'H413', position: 15 },
  { id: 'Gen.8.9.16', language: 'hebrew', text: 'אֶל־הַתֵּבָה', transliteration: 'ʾel-hattēḇāh', lemma: 'תֵּבָה', lemmaTranslit: 'tēḇāh', gloss: 'into the ark', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'absolute', rawCode: 'Ncfsa' }, strongs: 'H8392', position: 16 },
];

export const genesis8_9_translation: VerseTranslation = {
  verseRef: 'Gen.8.9',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: { type: 'literal', targetLanguage: 'en', text: 'And the dove did not find rest for the sole of her foot, and it returned to him to the ark, for waters were upon the face of all the earth. And he sent out his hand and took her and brought her to him into the ark.', spans: [{ id: 'Gen.8.9.en.lit.0', text: 'And the dove did not find...', position: 0, sourceTokenIds: ['Gen.8.9.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
    idiomatic: { type: 'idiomatic', targetLanguage: 'en', text: 'But the dove could find nowhere to perch because the water still covered the whole surface of the earth. So Noah reached out his hand, took the dove, and brought it back into the ark with him.', spans: [{ id: 'Gen.8.9.en.idi.0', text: 'But the dove could find nowhere...', position: 0, sourceTokenIds: ['Gen.8.9.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
  },
  metadata: { pipelineVersion: '0.1.0', generatedAt: new Date().toISOString(), engineId: 'open-bible-pipeline', engineVersion: '0.1.0', sourceDataVersion: '1.0.0' },
};

export const genesis8_9_notes: StudyNote[] = [
  { id: 'Gen.8.9.note.1', verseRef: 'Gen.8.9', sourceTokenIds: ['Gen.8.9.2'], category: 'lexical', title: 'Rest (Manoach)', content: 'The word manoach (מָנוֹחַ) "resting place" shares the same root as Noah\'s name (Noach). The dove finds no rest, continuing the theme of waiting for true rest. This word also appears in Ruth 1:9 for a place of security and belonging.', confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
];

// Genesis 8:10
export const genesis8_10_tokens: SourceToken[] = [
  { id: 'Gen.8.10.0', language: 'hebrew', text: 'וַיָּחֶל', transliteration: 'wayyāḥel', lemma: 'יָחַל', lemmaTranslit: 'yāḥal', gloss: 'And he waited', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'imperfect', stem: 'piel', rawCode: 'Vpw3ms' }, strongs: 'H3176', position: 0 },
  { id: 'Gen.8.10.1', language: 'hebrew', text: 'עוֹד', transliteration: 'ʿôḏ', lemma: 'עוֹד', lemmaTranslit: 'ʿôḏ', gloss: 'still', morphology: { pos: 'adverb', rawCode: 'D' }, strongs: 'H5750', position: 1 },
  { id: 'Gen.8.10.2', language: 'hebrew', text: 'שִׁבְעַת', transliteration: 'šiḇʿaṯ', lemma: 'שִׁבְעָה', lemmaTranslit: 'šiḇʿāh', gloss: 'seven', morphology: { pos: 'numeral', rawCode: 'Acfsc' }, strongs: 'H7651', position: 2 },
  { id: 'Gen.8.10.3', language: 'hebrew', text: 'יָמִים', transliteration: 'yāmîm', lemma: 'יוֹם', lemmaTranslit: 'yôm', gloss: 'days', morphology: { pos: 'noun', gender: 'masculine', number: 'plural', state: 'absolute', rawCode: 'Ncmpa' }, strongs: 'H3117', position: 3 },
  { id: 'Gen.8.10.4', language: 'hebrew', text: 'אֲחֵרִים', transliteration: 'ʾăḥērîm', lemma: 'אַחֵר', lemmaTranslit: 'ʾaḥēr', gloss: 'more', morphology: { pos: 'adjective', gender: 'masculine', number: 'plural', rawCode: 'Ajmpa' }, strongs: 'H312', position: 4 },
  { id: 'Gen.8.10.5', language: 'hebrew', text: 'וַיֹּסֶף', transliteration: 'wayyōsep̄', lemma: 'יָסַף', lemmaTranslit: 'yāsap̄', gloss: 'and he again', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'imperfect', stem: 'hiphil', rawCode: 'Vhw3ms' }, strongs: 'H3254', position: 5 },
  { id: 'Gen.8.10.6', language: 'hebrew', text: 'שַׁלַּח', transliteration: 'šallaḥ', lemma: 'שָׁלַח', lemmaTranslit: 'šālaḥ', gloss: 'sent out', morphology: { pos: 'verb', mood: 'infinitive', stem: 'piel', rawCode: 'VpIc' }, strongs: 'H7971', position: 6 },
  { id: 'Gen.8.10.7', language: 'hebrew', text: 'אֶת־הַיּוֹנָה', transliteration: 'ʾeṯ-hayyônāh', lemma: 'יוֹנָה', lemmaTranslit: 'yônāh', gloss: 'the dove', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'absolute', rawCode: 'Ncfsa' }, strongs: 'H3123', position: 7 },
  { id: 'Gen.8.10.8', language: 'hebrew', text: 'מִן־הַתֵּבָה', transliteration: 'min-hattēḇāh', lemma: 'תֵּבָה', lemmaTranslit: 'tēḇāh', gloss: 'from the ark', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'absolute', rawCode: 'Ncfsa' }, strongs: 'H8392', position: 8 },
];

export const genesis8_10_translation: VerseTranslation = {
  verseRef: 'Gen.8.10',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: { type: 'literal', targetLanguage: 'en', text: 'And he waited still seven days more, and again he sent out the dove from the ark.', spans: [{ id: 'Gen.8.10.en.lit.0', text: 'And he waited still seven days...', position: 0, sourceTokenIds: ['Gen.8.10.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
    idiomatic: { type: 'idiomatic', targetLanguage: 'en', text: 'He waited seven more days and again sent out the dove from the ark.', spans: [{ id: 'Gen.8.10.en.idi.0', text: 'He waited seven more days...', position: 0, sourceTokenIds: ['Gen.8.10.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
  },
  metadata: { pipelineVersion: '0.1.0', generatedAt: new Date().toISOString(), engineId: 'open-bible-pipeline', engineVersion: '0.1.0', sourceDataVersion: '1.0.0' },
};

export const genesis8_10_notes: StudyNote[] = [
  { id: 'Gen.8.10.note.1', verseRef: 'Gen.8.10', sourceTokenIds: ['Gen.8.10.2'], category: 'theological', title: 'Seven Days Pattern', content: 'The seven-day waiting period appears three times (vv. 10, 12). This echoes the seven-day creation week and establishes a pattern of patient waiting. The number seven symbolizes completeness in Hebrew thought.', confidence: 'medium', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
];

// Genesis 8:11
export const genesis8_11_tokens: SourceToken[] = [
  { id: 'Gen.8.11.0', language: 'hebrew', text: 'וַתָּבֹא', transliteration: 'wattāḇōʾ', lemma: 'בּוֹא', lemmaTranslit: 'bôʾ', gloss: 'And it came', morphology: { pos: 'verb', person: '3', gender: 'feminine', number: 'singular', tense: 'imperfect', stem: 'qal', rawCode: 'Vqw3fs' }, strongs: 'H935', position: 0 },
  { id: 'Gen.8.11.1', language: 'hebrew', text: 'אֵלָיו', transliteration: 'ʾēlāyw', lemma: 'אֵל', lemmaTranslit: 'ʾēl', gloss: 'to him', morphology: { pos: 'preposition', rawCode: 'RPs3ms' }, strongs: 'H413', position: 1 },
  { id: 'Gen.8.11.2', language: 'hebrew', text: 'הַיּוֹנָה', transliteration: 'hayyônāh', lemma: 'יוֹנָה', lemmaTranslit: 'yônāh', gloss: 'the dove', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'absolute', rawCode: 'Ncfsa' }, strongs: 'H3123', position: 2 },
  { id: 'Gen.8.11.3', language: 'hebrew', text: 'לְעֵת', transliteration: 'ləʿēṯ', lemma: 'עֵת', lemmaTranslit: 'ʿēṯ', gloss: 'at time of', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'construct', rawCode: 'Ncfsc' }, strongs: 'H6256', position: 3 },
  { id: 'Gen.8.11.4', language: 'hebrew', text: 'עֶרֶב', transliteration: 'ʿereḇ', lemma: 'עֶרֶב', lemmaTranslit: 'ʿereḇ', gloss: 'evening', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'absolute', rawCode: 'Ncmsa' }, strongs: 'H6153', position: 4 },
  { id: 'Gen.8.11.5', language: 'hebrew', text: 'וְהִנֵּה', transliteration: 'wəhinnēh', lemma: 'הִנֵּה', lemmaTranslit: 'hinnēh', gloss: 'and behold', morphology: { pos: 'particle', rawCode: 'Td' }, strongs: 'H2009', position: 5 },
  { id: 'Gen.8.11.6', language: 'hebrew', text: 'עֲלֵה־זַיִת', transliteration: 'ʿălēh-zayiṯ', lemma: 'זַיִת', lemmaTranslit: 'zayiṯ', gloss: 'olive leaf', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'absolute', rawCode: 'Ncmsa' }, strongs: 'H2132', position: 6 },
  { id: 'Gen.8.11.7', language: 'hebrew', text: 'טָרָף', transliteration: 'ṭārāp̄', lemma: 'טָרַף', lemmaTranslit: 'ṭārap̄', gloss: 'freshly plucked', morphology: { pos: 'verb', stem: 'qal', rawCode: 'VqPpms' }, strongs: 'H2965', position: 7 },
  { id: 'Gen.8.11.8', language: 'hebrew', text: 'בְּפִיהָ', transliteration: 'bəp̄îhā', lemma: 'פֶּה', lemmaTranslit: 'peh', gloss: 'in her mouth', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'construct', rawCode: 'Ncmsc' }, strongs: 'H6310', position: 8 },
  { id: 'Gen.8.11.9', language: 'hebrew', text: 'וַיֵּדַע', transliteration: 'wayyēḏaʿ', lemma: 'יָדַע', lemmaTranslit: 'yāḏaʿ', gloss: 'and knew', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'imperfect', stem: 'qal', rawCode: 'Vqw3ms' }, strongs: 'H3045', position: 9 },
  { id: 'Gen.8.11.10', language: 'hebrew', text: 'נֹחַ', transliteration: 'nōaḥ', lemma: 'נֹחַ', lemmaTranslit: 'nōaḥ', gloss: 'Noah', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H5146', position: 10 },
  { id: 'Gen.8.11.11', language: 'hebrew', text: 'כִּי־קַלּוּ', transliteration: 'kî-qallû', lemma: 'קָלַל', lemmaTranslit: 'qālal', gloss: 'that had receded', morphology: { pos: 'verb', person: '3', gender: 'common', number: 'plural', tense: 'perfect', stem: 'qal', rawCode: 'Vqp3cp' }, strongs: 'H7043', position: 11 },
  { id: 'Gen.8.11.12', language: 'hebrew', text: 'הַמַּיִם', transliteration: 'hammayim', lemma: 'מַיִם', lemmaTranslit: 'mayim', gloss: 'the waters', morphology: { pos: 'noun', gender: 'masculine', number: 'plural', state: 'absolute', rawCode: 'Ncmpa' }, strongs: 'H4325', position: 12 },
  { id: 'Gen.8.11.13', language: 'hebrew', text: 'מֵעַל', transliteration: 'mēʿal', lemma: 'מֵעַל', lemmaTranslit: 'mēʿal', gloss: 'from upon', morphology: { pos: 'preposition', rawCode: 'R' }, strongs: 'H5921', position: 13 },
  { id: 'Gen.8.11.14', language: 'hebrew', text: 'הָאָרֶץ', transliteration: 'hāʾāreṣ', lemma: 'אֶרֶץ', lemmaTranslit: 'ʾereṣ', gloss: 'the earth', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'absolute', rawCode: 'Ncfsa' }, strongs: 'H776', position: 14 },
];

export const genesis8_11_translation: VerseTranslation = {
  verseRef: 'Gen.8.11',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: { type: 'literal', targetLanguage: 'en', text: 'And the dove came to him at the time of evening, and behold, an olive leaf freshly plucked was in her mouth. And Noah knew that the waters had receded from upon the earth.', spans: [{ id: 'Gen.8.11.en.lit.0', text: 'And the dove came to him...', position: 0, sourceTokenIds: ['Gen.8.11.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
    idiomatic: { type: 'idiomatic', targetLanguage: 'en', text: 'When the dove returned to him in the evening, there in its beak was a freshly plucked olive leaf! Then Noah knew that the water had receded from the earth.', spans: [{ id: 'Gen.8.11.en.idi.0', text: 'When the dove returned...', position: 0, sourceTokenIds: ['Gen.8.11.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
  },
  metadata: { pipelineVersion: '0.1.0', generatedAt: new Date().toISOString(), engineId: 'open-bible-pipeline', engineVersion: '0.1.0', sourceDataVersion: '1.0.0' },
};

export const genesis8_11_notes: StudyNote[] = [
  { id: 'Gen.8.11.note.1', verseRef: 'Gen.8.11', sourceTokenIds: ['Gen.8.11.6'], category: 'cultural', title: 'Olive Leaf', content: 'The olive (zayit) is one of the seven species of the Land of Israel (Deut 8:8). A freshly plucked leaf indicated that olive trees were growing above water. The olive branch has become a universal symbol of peace, likely originating from this passage.', confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
  { id: 'Gen.8.11.note.2', verseRef: 'Gen.8.11', sourceTokenIds: ['Gen.8.11.7'], category: 'lexical', title: 'Freshly Plucked', content: 'The word taraf (טָרָף) typically means "torn" or "prey" (as in Gen 37:33). Here it means "freshly plucked," indicating the leaf was living and green, not debris from the flood. This detail confirms vegetation was actively growing.', confidence: 'medium', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
];

// Genesis 8:12
export const genesis8_12_tokens: SourceToken[] = [
  { id: 'Gen.8.12.0', language: 'hebrew', text: 'וַיִּיָּחֶל', transliteration: 'wayyiyyāḥel', lemma: 'יָחַל', lemmaTranslit: 'yāḥal', gloss: 'And he waited', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'imperfect', stem: 'niphal', rawCode: 'VNw3ms' }, strongs: 'H3176', position: 0 },
  { id: 'Gen.8.12.1', language: 'hebrew', text: 'עוֹד', transliteration: 'ʿôḏ', lemma: 'עוֹד', lemmaTranslit: 'ʿôḏ', gloss: 'still', morphology: { pos: 'adverb', rawCode: 'D' }, strongs: 'H5750', position: 1 },
  { id: 'Gen.8.12.2', language: 'hebrew', text: 'שִׁבְעַת', transliteration: 'šiḇʿaṯ', lemma: 'שִׁבְעָה', lemmaTranslit: 'šiḇʿāh', gloss: 'seven', morphology: { pos: 'numeral', rawCode: 'Acfsc' }, strongs: 'H7651', position: 2 },
  { id: 'Gen.8.12.3', language: 'hebrew', text: 'יָמִים', transliteration: 'yāmîm', lemma: 'יוֹם', lemmaTranslit: 'yôm', gloss: 'days', morphology: { pos: 'noun', gender: 'masculine', number: 'plural', state: 'absolute', rawCode: 'Ncmpa' }, strongs: 'H3117', position: 3 },
  { id: 'Gen.8.12.4', language: 'hebrew', text: 'אֲחֵרִים', transliteration: 'ʾăḥērîm', lemma: 'אַחֵר', lemmaTranslit: 'ʾaḥēr', gloss: 'more', morphology: { pos: 'adjective', gender: 'masculine', number: 'plural', rawCode: 'Ajmpa' }, strongs: 'H312', position: 4 },
  { id: 'Gen.8.12.5', language: 'hebrew', text: 'וַיְשַׁלַּח', transliteration: 'wayəšallaḥ', lemma: 'שָׁלַח', lemmaTranslit: 'šālaḥ', gloss: 'and he sent out', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'imperfect', stem: 'piel', rawCode: 'Vpw3ms' }, strongs: 'H7971', position: 5 },
  { id: 'Gen.8.12.6', language: 'hebrew', text: 'אֶת־הַיּוֹנָה', transliteration: 'ʾeṯ-hayyônāh', lemma: 'יוֹנָה', lemmaTranslit: 'yônāh', gloss: 'the dove', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'absolute', rawCode: 'Ncfsa' }, strongs: 'H3123', position: 6 },
  { id: 'Gen.8.12.7', language: 'hebrew', text: 'וְלֹא־יָסְפָה', transliteration: 'wəlōʾ-yāsəp̄āh', lemma: 'יָסַף', lemmaTranslit: 'yāsap̄', gloss: 'and not continued', morphology: { pos: 'verb', person: '3', gender: 'feminine', number: 'singular', tense: 'perfect', stem: 'qal', rawCode: 'Vqp3fs' }, strongs: 'H3254', position: 7 },
  { id: 'Gen.8.12.8', language: 'hebrew', text: 'שׁוּב', transliteration: 'šûḇ', lemma: 'שׁוּב', lemmaTranslit: 'šûḇ', gloss: 'to return', morphology: { pos: 'verb', mood: 'infinitive', stem: 'qal', rawCode: 'VqIc' }, strongs: 'H7725', position: 8 },
  { id: 'Gen.8.12.9', language: 'hebrew', text: 'אֵלָיו', transliteration: 'ʾēlāyw', lemma: 'אֵל', lemmaTranslit: 'ʾēl', gloss: 'to him', morphology: { pos: 'preposition', rawCode: 'RPs3ms' }, strongs: 'H413', position: 9 },
  { id: 'Gen.8.12.10', language: 'hebrew', text: 'עוֹד', transliteration: 'ʿôḏ', lemma: 'עוֹד', lemmaTranslit: 'ʿôḏ', gloss: 'anymore', morphology: { pos: 'adverb', rawCode: 'D' }, strongs: 'H5750', position: 10 },
];

export const genesis8_12_translation: VerseTranslation = {
  verseRef: 'Gen.8.12',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: { type: 'literal', targetLanguage: 'en', text: 'And he waited still seven days more, and he sent out the dove, and it did not continue to return to him anymore.', spans: [{ id: 'Gen.8.12.en.lit.0', text: 'And he waited still seven days...', position: 0, sourceTokenIds: ['Gen.8.12.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
    idiomatic: { type: 'idiomatic', targetLanguage: 'en', text: 'He waited seven more days and sent the dove out again, but this time it did not return to him.', spans: [{ id: 'Gen.8.12.en.idi.0', text: 'He waited seven more days...', position: 0, sourceTokenIds: ['Gen.8.12.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
  },
  metadata: { pipelineVersion: '0.1.0', generatedAt: new Date().toISOString(), engineId: 'open-bible-pipeline', engineVersion: '0.1.0', sourceDataVersion: '1.0.0' },
};

export const genesis8_12_notes: StudyNote[] = [
  { id: 'Gen.8.12.note.1', verseRef: 'Gen.8.12', sourceTokenIds: ['Gen.8.12.7', 'Gen.8.12.8'], category: 'interpretive', title: 'Dove Does Not Return', content: 'The dove\'s failure to return signals that the earth is now habitable - it found a place to live. This progression (returns with nothing, returns with olive leaf, doesn\'t return) shows gradual restoration of the earth.', confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
];

// Genesis 8:13
export const genesis8_13_tokens: SourceToken[] = [
  { id: 'Gen.8.13.0', language: 'hebrew', text: 'וַיְהִי', transliteration: 'wayəhî', lemma: 'הָיָה', lemmaTranslit: 'hāyāh', gloss: 'And it was', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'imperfect', stem: 'qal', rawCode: 'Vqw3ms' }, strongs: 'H1961', position: 0 },
  { id: 'Gen.8.13.1', language: 'hebrew', text: 'בְּאַחַת', transliteration: 'bəʾaḥaṯ', lemma: 'אֶחָד', lemmaTranslit: 'ʾeḥāḏ', gloss: 'in first', morphology: { pos: 'numeral', rawCode: 'Acfsa' }, strongs: 'H259', position: 1 },
  { id: 'Gen.8.13.2', language: 'hebrew', text: 'וְשֵׁשׁ־מֵאוֹת', transliteration: 'wəšēš-mēʾôṯ', lemma: 'מֵאָה', lemmaTranslit: 'mēʾāh', gloss: 'and six hundred', morphology: { pos: 'numeral', rawCode: 'Acfpa' }, strongs: 'H3967', position: 2 },
  { id: 'Gen.8.13.3', language: 'hebrew', text: 'שָׁנָה', transliteration: 'šānāh', lemma: 'שָׁנָה', lemmaTranslit: 'šānāh', gloss: 'year', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'absolute', rawCode: 'Ncfsa' }, strongs: 'H8141', position: 3 },
  { id: 'Gen.8.13.4', language: 'hebrew', text: 'בָּרִאשׁוֹן', transliteration: 'bāriʾšôn', lemma: 'רִאשׁוֹן', lemmaTranslit: 'riʾšôn', gloss: 'in the first', morphology: { pos: 'adjective', gender: 'masculine', number: 'singular', rawCode: 'Aomsa' }, strongs: 'H7223', position: 4 },
  { id: 'Gen.8.13.5', language: 'hebrew', text: 'בְּאֶחָד', transliteration: 'bəʾeḥāḏ', lemma: 'אֶחָד', lemmaTranslit: 'ʾeḥāḏ', gloss: 'on the first', morphology: { pos: 'numeral', rawCode: 'Acmsa' }, strongs: 'H259', position: 5 },
  { id: 'Gen.8.13.6', language: 'hebrew', text: 'לַחֹדֶשׁ', transliteration: 'laḥōdeš', lemma: 'חֹדֶשׁ', lemmaTranslit: 'ḥōdeš', gloss: 'of the month', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'absolute', rawCode: 'Ncmsa' }, strongs: 'H2320', position: 6 },
  { id: 'Gen.8.13.7', language: 'hebrew', text: 'חָרְבוּ', transliteration: 'ḥārəḇû', lemma: 'חָרַב', lemmaTranslit: 'ḥāraḇ', gloss: 'were dried up', morphology: { pos: 'verb', person: '3', gender: 'common', number: 'plural', tense: 'perfect', stem: 'qal', rawCode: 'Vqp3cp' }, strongs: 'H2717', position: 7 },
  { id: 'Gen.8.13.8', language: 'hebrew', text: 'הַמַּיִם', transliteration: 'hammayim', lemma: 'מַיִם', lemmaTranslit: 'mayim', gloss: 'the waters', morphology: { pos: 'noun', gender: 'masculine', number: 'plural', state: 'absolute', rawCode: 'Ncmpa' }, strongs: 'H4325', position: 8 },
  { id: 'Gen.8.13.9', language: 'hebrew', text: 'מֵעַל', transliteration: 'mēʿal', lemma: 'מֵעַל', lemmaTranslit: 'mēʿal', gloss: 'from upon', morphology: { pos: 'preposition', rawCode: 'R' }, strongs: 'H5921', position: 9 },
  { id: 'Gen.8.13.10', language: 'hebrew', text: 'הָאָרֶץ', transliteration: 'hāʾāreṣ', lemma: 'אֶרֶץ', lemmaTranslit: 'ʾereṣ', gloss: 'the earth', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'absolute', rawCode: 'Ncfsa' }, strongs: 'H776', position: 10 },
  { id: 'Gen.8.13.11', language: 'hebrew', text: 'וַיָּסַר', transliteration: 'wayyāsar', lemma: 'סוּר', lemmaTranslit: 'sûr', gloss: 'and he removed', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'imperfect', stem: 'hiphil', rawCode: 'Vhw3ms' }, strongs: 'H5493', position: 11 },
  { id: 'Gen.8.13.12', language: 'hebrew', text: 'נֹחַ', transliteration: 'nōaḥ', lemma: 'נֹחַ', lemmaTranslit: 'nōaḥ', gloss: 'Noah', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H5146', position: 12 },
  { id: 'Gen.8.13.13', language: 'hebrew', text: 'אֶת־מִכְסֵה', transliteration: 'ʾeṯ-miḵsēh', lemma: 'מִכְסֶה', lemmaTranslit: 'miḵseh', gloss: 'covering of', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'construct', rawCode: 'Ncmsc' }, strongs: 'H4372', position: 13 },
  { id: 'Gen.8.13.14', language: 'hebrew', text: 'הַתֵּבָה', transliteration: 'hattēḇāh', lemma: 'תֵּבָה', lemmaTranslit: 'tēḇāh', gloss: 'the ark', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'absolute', rawCode: 'Ncfsa' }, strongs: 'H8392', position: 14 },
  { id: 'Gen.8.13.15', language: 'hebrew', text: 'וַיַּרְא', transliteration: 'wayyarʾ', lemma: 'רָאָה', lemmaTranslit: 'rāʾāh', gloss: 'and he saw', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'imperfect', stem: 'qal', rawCode: 'Vqw3ms' }, strongs: 'H7200', position: 15 },
  { id: 'Gen.8.13.16', language: 'hebrew', text: 'וְהִנֵּה', transliteration: 'wəhinnēh', lemma: 'הִנֵּה', lemmaTranslit: 'hinnēh', gloss: 'and behold', morphology: { pos: 'particle', rawCode: 'Td' }, strongs: 'H2009', position: 16 },
  { id: 'Gen.8.13.17', language: 'hebrew', text: 'חָרְבוּ', transliteration: 'ḥārəḇû', lemma: 'חָרַב', lemmaTranslit: 'ḥāraḇ', gloss: 'was dry', morphology: { pos: 'verb', person: '3', gender: 'common', number: 'plural', tense: 'perfect', stem: 'qal', rawCode: 'Vqp3cp' }, strongs: 'H2717', position: 17 },
  { id: 'Gen.8.13.18', language: 'hebrew', text: 'פְּנֵי', transliteration: 'pənê', lemma: 'פָּנִים', lemmaTranslit: 'pānîm', gloss: 'face of', morphology: { pos: 'noun', gender: 'masculine', number: 'plural', state: 'construct', rawCode: 'Ncmpc' }, strongs: 'H6440', position: 18 },
  { id: 'Gen.8.13.19', language: 'hebrew', text: 'הָאֲדָמָה', transliteration: 'hāʾăḏāmāh', lemma: 'אֲדָמָה', lemmaTranslit: 'ʾăḏāmāh', gloss: 'the ground', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'absolute', rawCode: 'Ncfsa' }, strongs: 'H127', position: 19 },
];

export const genesis8_13_translation: VerseTranslation = {
  verseRef: 'Gen.8.13',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: { type: 'literal', targetLanguage: 'en', text: 'And it was in the six hundred and first year, in the first month, on the first of the month, the waters were dried up from upon the earth. And Noah removed the covering of the ark and saw, and behold, the face of the ground was dry.', spans: [{ id: 'Gen.8.13.en.lit.0', text: 'And it was in the six hundred...', position: 0, sourceTokenIds: ['Gen.8.13.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
    idiomatic: { type: 'idiomatic', targetLanguage: 'en', text: 'By the first day of the first month of Noah\'s six hundred and first year, the water had dried up from the earth. Noah then removed the covering from the ark and saw that the surface of the ground was dry.', spans: [{ id: 'Gen.8.13.en.idi.0', text: 'By the first day...', position: 0, sourceTokenIds: ['Gen.8.13.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
  },
  metadata: { pipelineVersion: '0.1.0', generatedAt: new Date().toISOString(), engineId: 'open-bible-pipeline', engineVersion: '0.1.0', sourceDataVersion: '1.0.0' },
};

export const genesis8_13_notes: StudyNote[] = [
  { id: 'Gen.8.13.note.1', verseRef: 'Gen.8.13', sourceTokenIds: ['Gen.8.13.4', 'Gen.8.13.5'], category: 'theological', title: 'First Day of First Month', content: 'The drying of the waters on the first day of the first month suggests a new beginning - like a New Year\'s Day for creation. This parallels the later establishment of Nisan as the first month of Israel\'s religious calendar (Ex 12:2).', confidence: 'medium', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
];

// Genesis 8:14
export const genesis8_14_tokens: SourceToken[] = [
  { id: 'Gen.8.14.0', language: 'hebrew', text: 'וּבַחֹדֶשׁ', transliteration: 'ûḇaḥōdeš', lemma: 'חֹדֶשׁ', lemmaTranslit: 'ḥōdeš', gloss: 'And in the month', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'absolute', rawCode: 'Ncmsa' }, strongs: 'H2320', position: 0 },
  { id: 'Gen.8.14.1', language: 'hebrew', text: 'הַשֵּׁנִי', transliteration: 'haššēnî', lemma: 'שֵׁנִי', lemmaTranslit: 'šēnî', gloss: 'the second', morphology: { pos: 'adjective', gender: 'masculine', number: 'singular', rawCode: 'Aomsa' }, strongs: 'H8145', position: 1 },
  { id: 'Gen.8.14.2', language: 'hebrew', text: 'בְּשִׁבְעָה', transliteration: 'bəšiḇʿāh', lemma: 'שִׁבְעָה', lemmaTranslit: 'šiḇʿāh', gloss: 'on the seventh', morphology: { pos: 'numeral', rawCode: 'Acfsa' }, strongs: 'H7651', position: 2 },
  { id: 'Gen.8.14.3', language: 'hebrew', text: 'וְעֶשְׂרִים', transliteration: 'wəʿeśrîm', lemma: 'עֶשְׂרִים', lemmaTranslit: 'ʿeśrîm', gloss: 'and twentieth', morphology: { pos: 'numeral', rawCode: 'Acmpa' }, strongs: 'H6242', position: 3 },
  { id: 'Gen.8.14.4', language: 'hebrew', text: 'יוֹם', transliteration: 'yôm', lemma: 'יוֹם', lemmaTranslit: 'yôm', gloss: 'day', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'absolute', rawCode: 'Ncmsa' }, strongs: 'H3117', position: 4 },
  { id: 'Gen.8.14.5', language: 'hebrew', text: 'לַחֹדֶשׁ', transliteration: 'laḥōdeš', lemma: 'חֹדֶשׁ', lemmaTranslit: 'ḥōdeš', gloss: 'of the month', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'absolute', rawCode: 'Ncmsa' }, strongs: 'H2320', position: 5 },
  { id: 'Gen.8.14.6', language: 'hebrew', text: 'יָבְשָׁה', transliteration: 'yāḇəšāh', lemma: 'יָבֵשׁ', lemmaTranslit: 'yāḇēš', gloss: 'was dry', morphology: { pos: 'verb', person: '3', gender: 'feminine', number: 'singular', tense: 'perfect', stem: 'qal', rawCode: 'Vqp3fs' }, strongs: 'H3001', position: 6 },
  { id: 'Gen.8.14.7', language: 'hebrew', text: 'הָאָרֶץ', transliteration: 'hāʾāreṣ', lemma: 'אֶרֶץ', lemmaTranslit: 'ʾereṣ', gloss: 'the earth', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'absolute', rawCode: 'Ncfsa' }, strongs: 'H776', position: 7 },
];

export const genesis8_14_translation: VerseTranslation = {
  verseRef: 'Gen.8.14',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: { type: 'literal', targetLanguage: 'en', text: 'And in the second month, on the twenty-seventh day of the month, the earth was dry.', spans: [{ id: 'Gen.8.14.en.lit.0', text: 'And in the second month...', position: 0, sourceTokenIds: ['Gen.8.14.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
    idiomatic: { type: 'idiomatic', targetLanguage: 'en', text: 'By the twenty-seventh day of the second month the earth was completely dry.', spans: [{ id: 'Gen.8.14.en.idi.0', text: 'By the twenty-seventh day...', position: 0, sourceTokenIds: ['Gen.8.14.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
  },
  metadata: { pipelineVersion: '0.1.0', generatedAt: new Date().toISOString(), engineId: 'open-bible-pipeline', engineVersion: '0.1.0', sourceDataVersion: '1.0.0' },
};

export const genesis8_14_notes: StudyNote[] = [
  { id: 'Gen.8.14.note.1', verseRef: 'Gen.8.14', sourceTokenIds: ['Gen.8.14.0', 'Gen.8.14.2', 'Gen.8.14.3'], category: 'interpretive', title: 'One Year and Ten Days', content: 'The flood began on the 17th of the 2nd month (7:11) and the earth was dry on the 27th of the 2nd month - exactly one year and ten days. This precision emphasizes the historical nature of the account and God\'s sovereign timing over the judgment and its end.', confidence: 'medium', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
];

// Export all verses
export const genesis8_8_14_verses = [
  { ref: 'Gen.8.8', sourceTokens: genesis8_8_tokens, translation: genesis8_8_translation, notes: genesis8_8_notes },
  { ref: 'Gen.8.9', sourceTokens: genesis8_9_tokens, translation: genesis8_9_translation, notes: genesis8_9_notes },
  { ref: 'Gen.8.10', sourceTokens: genesis8_10_tokens, translation: genesis8_10_translation, notes: genesis8_10_notes },
  { ref: 'Gen.8.11', sourceTokens: genesis8_11_tokens, translation: genesis8_11_translation, notes: genesis8_11_notes },
  { ref: 'Gen.8.12', sourceTokens: genesis8_12_tokens, translation: genesis8_12_translation, notes: genesis8_12_notes },
  { ref: 'Gen.8.13', sourceTokens: genesis8_13_tokens, translation: genesis8_13_translation, notes: genesis8_13_notes },
  { ref: 'Gen.8.14', sourceTokens: genesis8_14_tokens, translation: genesis8_14_translation, notes: genesis8_14_notes },
];
