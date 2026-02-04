/**
 * Genesis 4:9-16 - Hebrew morphological data
 * God confronts Cain, the curse, mark of Cain
 * Source: Open Hebrew Bible (Tanach.us) - Public Domain
 */

import type { SourceToken, VerseTranslation, StudyNote } from '@open-bible/schemas';

// Genesis 4:9 - Where is Abel your brother?
export const genesis4_9_tokens: SourceToken[] = [
  { id: 'Gen.4.9.0', language: 'hebrew', text: 'וַיֹּ֤אמֶר', transliteration: 'wayyōʾmer', lemma: 'אָמַר', lemmaTranslit: 'ʾāmar', gloss: 'And said', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'imperfect', stem: 'qal', rawCode: 'Vqw3ms' }, strongs: 'H559', position: 0 },
  { id: 'Gen.4.9.1', language: 'hebrew', text: 'יְהוָה֙', transliteration: 'yhwh', lemma: 'יְהוָה', lemmaTranslit: 'yhwh', gloss: 'YHWH', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H3068', position: 1 },
  { id: 'Gen.4.9.2', language: 'hebrew', text: 'אֶל־קַ֔יִן', transliteration: 'ʾel-qayin', lemma: 'קַיִן', lemmaTranslit: 'qayin', gloss: 'to Cain', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H7014', position: 2 },
  { id: 'Gen.4.9.3', language: 'hebrew', text: 'אֵ֖י', transliteration: 'ʾê', lemma: 'אַיֵּה', lemmaTranslit: 'ʾayyēh', gloss: 'Where', morphology: { pos: 'pronoun', rawCode: 'Pi' }, strongs: 'H335', position: 3 },
  { id: 'Gen.4.9.4', language: 'hebrew', text: 'הֶ֣בֶל', transliteration: 'heḇel', lemma: 'הֶבֶל', lemmaTranslit: 'heḇel', gloss: 'is Abel', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H1893', position: 4 },
  { id: 'Gen.4.9.5', language: 'hebrew', text: 'אָחִ֑יךָ', transliteration: 'ʾāḥîḵā', lemma: 'אָח', lemmaTranslit: 'ʾāḥ', gloss: 'your brother', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'construct', rawCode: 'Ncmsc' }, strongs: 'H251', position: 5 },
  { id: 'Gen.4.9.6', language: 'hebrew', text: 'וַיֹּ֙אמֶר֙', transliteration: 'wayyōʾmer', lemma: 'אָמַר', lemmaTranslit: 'ʾāmar', gloss: 'And he said', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'imperfect', stem: 'qal', rawCode: 'Vqw3ms' }, strongs: 'H559', position: 6 },
  { id: 'Gen.4.9.7', language: 'hebrew', text: 'לֹ֣א', transliteration: 'lōʾ', lemma: 'לֹא', lemmaTranslit: 'lōʾ', gloss: 'Not', morphology: { pos: 'adverb', rawCode: 'An' }, strongs: 'H3808', position: 7 },
  { id: 'Gen.4.9.8', language: 'hebrew', text: 'יָדַ֔עְתִּי', transliteration: 'yāḏaʿtî', lemma: 'יָדַע', lemmaTranslit: 'yāḏaʿ', gloss: 'I know', morphology: { pos: 'verb', person: '1', gender: 'common', number: 'singular', tense: 'perfect', stem: 'qal', rawCode: 'Vqp1cs' }, strongs: 'H3045', position: 8 },
  { id: 'Gen.4.9.9', language: 'hebrew', text: 'הֲשֹׁמֵ֥ר', transliteration: 'hăšōmēr', lemma: 'שָׁמַר', lemmaTranslit: 'šāmar', gloss: 'a keeper', glossExtended: 'to keep, guard, watch', morphology: { pos: 'verb', mood: 'participle', stem: 'qal', rawCode: 'Vqrms' }, strongs: 'H8104', position: 9 },
  { id: 'Gen.4.9.10', language: 'hebrew', text: 'אָחִ֖י', transliteration: 'ʾāḥî', lemma: 'אָח', lemmaTranslit: 'ʾāḥ', gloss: 'of my brother', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'construct', rawCode: 'Ncmsc' }, strongs: 'H251', position: 10 },
  { id: 'Gen.4.9.11', language: 'hebrew', text: 'אָנֹֽכִי', transliteration: 'ʾānōḵî', lemma: 'אָנֹכִי', lemmaTranslit: 'ʾānōḵî', gloss: 'am I', morphology: { pos: 'pronoun', person: '1', gender: 'common', number: 'singular', rawCode: 'Pp1cs' }, strongs: 'H595', position: 11 },
];

export const genesis4_9_translation: VerseTranslation = {
  verseRef: 'Gen.4.9',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: { type: 'literal', targetLanguage: 'en', text: 'And said YHWH to Cain: Where is Abel your brother? And he said: Not I know; a keeper of my brother am I?', spans: [{ id: 'Gen.4.9.en.lit.0', text: 'And said YHWH to Cain: Where is Abel your brother?...', position: 0, sourceTokenIds: ['Gen.4.9.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
    idiomatic: { type: 'idiomatic', targetLanguage: 'en', text: 'Then the LORD said to Cain, "Where is Abel your brother?" He said, "I do not know; am I my brother\'s keeper?"', spans: [{ id: 'Gen.4.9.en.idi.0', text: 'Then the LORD said to Cain, "Where is Abel your brother?"...', position: 0, sourceTokenIds: ['Gen.4.9.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
  },
  metadata: { pipelineVersion: '0.1.0', generatedAt: new Date().toISOString(), engineId: 'open-bible-pipeline', engineVersion: '0.1.0', sourceDataVersion: '1.0.0' },
};

export const genesis4_9_notes: StudyNote[] = [
  { id: 'Gen.4.9.note.1', verseRef: 'Gen.4.9', sourceTokenIds: ['Gen.4.9.3'], category: 'cross-reference', title: 'Divine Question Pattern', content: 'God asks "Where?" (ʾayyēh) as in 3:9. God knows the answer but gives opportunity for confession. Cain\'s response contrasts with Adam\'s.', confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
  { id: 'Gen.4.9.note.2', verseRef: 'Gen.4.9', sourceTokenIds: ['Gen.4.9.9', 'Gen.4.9.10'], category: 'theological', title: 'Brother\'s Keeper', content: '"Am I my brother\'s keeper?" Cain\'s defiant question ironically affirms responsibility—Abel kept sheep (rōʿēh ṣōʾn), now Cain denies keeping his brother.', confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
];

// Genesis 4:10 - Blood cries from the ground
export const genesis4_10_tokens: SourceToken[] = [
  { id: 'Gen.4.10.0', language: 'hebrew', text: 'וַיֹּ֖אמֶר', transliteration: 'wayyōʾmer', lemma: 'אָמַר', lemmaTranslit: 'ʾāmar', gloss: 'And he said', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'imperfect', stem: 'qal', rawCode: 'Vqw3ms' }, strongs: 'H559', position: 0 },
  { id: 'Gen.4.10.1', language: 'hebrew', text: 'מֶ֣ה', transliteration: 'meh', lemma: 'מָה', lemmaTranslit: 'māh', gloss: 'What', morphology: { pos: 'pronoun', rawCode: 'Pi' }, strongs: 'H4100', position: 1 },
  { id: 'Gen.4.10.2', language: 'hebrew', text: 'עָשִׂ֑יתָ', transliteration: 'ʿāśîṯā', lemma: 'עָשָׂה', lemmaTranslit: 'ʿāśāh', gloss: 'have you done', morphology: { pos: 'verb', person: '2', gender: 'masculine', number: 'singular', tense: 'perfect', stem: 'qal', rawCode: 'Vqp2ms' }, strongs: 'H6213', position: 2 },
  { id: 'Gen.4.10.3', language: 'hebrew', text: 'ק֣וֹל', transliteration: 'qôl', lemma: 'קוֹל', lemmaTranslit: 'qôl', gloss: 'The voice of', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'construct', rawCode: 'Ncmsc' }, strongs: 'H6963', position: 3 },
  { id: 'Gen.4.10.4', language: 'hebrew', text: 'דְּמֵ֤י', transliteration: 'dəmê', lemma: 'דָּם', lemmaTranslit: 'dām', gloss: 'the blood of', glossExtended: 'blood (plural of intensity)', morphology: { pos: 'noun', gender: 'masculine', number: 'plural', state: 'construct', rawCode: 'Ncmpc' }, strongs: 'H1818', position: 4 },
  { id: 'Gen.4.10.5', language: 'hebrew', text: 'אָחִ֙יךָ֙', transliteration: 'ʾāḥîḵā', lemma: 'אָח', lemmaTranslit: 'ʾāḥ', gloss: 'your brother', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'construct', rawCode: 'Ncmsc' }, strongs: 'H251', position: 5 },
  { id: 'Gen.4.10.6', language: 'hebrew', text: 'צֹעֲקִ֥ים', transliteration: 'ṣōʿăqîm', lemma: 'צָעַק', lemmaTranslit: 'ṣāʿaq', gloss: 'is crying out', glossExtended: 'to cry out, call for help', morphology: { pos: 'verb', mood: 'participle', gender: 'masculine', number: 'plural', stem: 'qal', rawCode: 'Vqrmp' }, strongs: 'H6817', position: 6 },
  { id: 'Gen.4.10.7', language: 'hebrew', text: 'אֵלַ֖י', transliteration: 'ʾēlay', lemma: 'אֶל', lemmaTranslit: 'ʾel', gloss: 'to me', morphology: { pos: 'preposition', rawCode: 'R' }, strongs: 'H413', position: 7 },
  { id: 'Gen.4.10.8', language: 'hebrew', text: 'מִן־הָֽאֲדָמָֽה', transliteration: 'min-hāʾăḏāmāh', lemma: 'אֲדָמָה', lemmaTranslit: 'ʾăḏāmāh', gloss: 'from the ground', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'absolute', rawCode: 'Ncfsa' }, strongs: 'H127', position: 8 },
];

export const genesis4_10_translation: VerseTranslation = {
  verseRef: 'Gen.4.10',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: { type: 'literal', targetLanguage: 'en', text: 'And he said: What have you done? The voice of the bloods of your brother is crying out to me from the ground.', spans: [{ id: 'Gen.4.10.en.lit.0', text: 'And he said: What have you done?...', position: 0, sourceTokenIds: ['Gen.4.10.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
    idiomatic: { type: 'idiomatic', targetLanguage: 'en', text: 'And the LORD said, "What have you done? The voice of your brother\'s blood is crying to me from the ground."', spans: [{ id: 'Gen.4.10.en.idi.0', text: 'And the LORD said, "What have you done?..."', position: 0, sourceTokenIds: ['Gen.4.10.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
  },
  metadata: { pipelineVersion: '0.1.0', generatedAt: new Date().toISOString(), engineId: 'open-bible-pipeline', engineVersion: '0.1.0', sourceDataVersion: '1.0.0' },
};

export const genesis4_10_notes: StudyNote[] = [
  { id: 'Gen.4.10.note.1', verseRef: 'Gen.4.10', sourceTokenIds: ['Gen.4.10.4'], category: 'lexical', title: 'Bloods (dəmê)', content: 'Hebrew uses plural "bloods" (dəmê), intensifying the horror of violent death. Some see it as referring to Abel\'s potential descendants never born.', confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
  { id: 'Gen.4.10.note.2', verseRef: 'Gen.4.10', sourceTokenIds: ['Gen.4.10.6'], category: 'cross-reference', title: 'Blood Crying Out', content: 'Abel\'s blood "cries out" (ṣōʿăqîm)—the verb for distress cries that demand divine response (cf. Exod 2:23, 3:7). Heb 12:24 contrasts Abel\'s blood with Christ\'s.', confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
];

// Genesis 4:11 - Cursed from the ground
export const genesis4_11_tokens: SourceToken[] = [
  { id: 'Gen.4.11.0', language: 'hebrew', text: 'וְעַתָּ֖ה', transliteration: 'wəʿattāh', lemma: 'עַתָּה', lemmaTranslit: 'ʿattāh', gloss: 'And now', morphology: { pos: 'adverb', rawCode: 'D' }, strongs: 'H6258', position: 0 },
  { id: 'Gen.4.11.1', language: 'hebrew', text: 'אָר֣וּר', transliteration: 'ʾārûr', lemma: 'אָרַר', lemmaTranslit: 'ʾārar', gloss: 'cursed', glossExtended: 'to be cursed', morphology: { pos: 'verb', mood: 'participle', stem: 'qal', rawCode: 'Vqsms' }, strongs: 'H779', position: 1 },
  { id: 'Gen.4.11.2', language: 'hebrew', text: 'אָ֑תָּה', transliteration: 'ʾāttāh', lemma: 'אַתָּה', lemmaTranslit: 'ʾattāh', gloss: 'are you', morphology: { pos: 'pronoun', person: '2', gender: 'masculine', number: 'singular', rawCode: 'Pp2ms' }, strongs: 'H859', position: 2 },
  { id: 'Gen.4.11.3', language: 'hebrew', text: 'מִן־הָֽאֲדָמָה֙', transliteration: 'min-hāʾăḏāmāh', lemma: 'אֲדָמָה', lemmaTranslit: 'ʾăḏāmāh', gloss: 'from the ground', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'absolute', rawCode: 'Ncfsa' }, strongs: 'H127', position: 3 },
  { id: 'Gen.4.11.4', language: 'hebrew', text: 'אֲשֶׁ֣ר', transliteration: 'ʾăšer', lemma: 'אֲשֶׁר', lemmaTranslit: 'ʾăšer', gloss: 'which', morphology: { pos: 'particle', rawCode: 'Tr' }, strongs: 'H834', position: 4 },
  { id: 'Gen.4.11.5', language: 'hebrew', text: 'פָּצְתָ֣ה', transliteration: 'pāṣəṯāh', lemma: 'פָּצָה', lemmaTranslit: 'pāṣāh', gloss: 'opened', glossExtended: 'to open wide (mouth)', morphology: { pos: 'verb', person: '3', gender: 'feminine', number: 'singular', tense: 'perfect', stem: 'qal', rawCode: 'Vqp3fs' }, strongs: 'H6475', position: 5 },
  { id: 'Gen.4.11.6', language: 'hebrew', text: 'אֶת־פִּ֔יהָ', transliteration: 'ʾeṯ-pîhā', lemma: 'פֶּה', lemmaTranslit: 'peh', gloss: 'its mouth', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'construct', rawCode: 'Ncmsc' }, strongs: 'H6310', position: 6 },
  { id: 'Gen.4.11.7', language: 'hebrew', text: 'לָקַ֛חַת', transliteration: 'lāqaḥaṯ', lemma: 'לָקַח', lemmaTranslit: 'lāqaḥ', gloss: 'to receive', morphology: { pos: 'verb', mood: 'infinitive', stem: 'qal', rawCode: 'Vqc' }, strongs: 'H3947', position: 7 },
  { id: 'Gen.4.11.8', language: 'hebrew', text: 'אֶת־דְּמֵ֥י', transliteration: 'ʾeṯ-dəmê', lemma: 'דָּם', lemmaTranslit: 'dām', gloss: 'the blood of', morphology: { pos: 'noun', gender: 'masculine', number: 'plural', state: 'construct', rawCode: 'Ncmpc' }, strongs: 'H1818', position: 8 },
  { id: 'Gen.4.11.9', language: 'hebrew', text: 'אָחִ֖יךָ', transliteration: 'ʾāḥîḵā', lemma: 'אָח', lemmaTranslit: 'ʾāḥ', gloss: 'your brother', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'construct', rawCode: 'Ncmsc' }, strongs: 'H251', position: 9 },
  { id: 'Gen.4.11.10', language: 'hebrew', text: 'מִיָּדֶֽךָ', transliteration: 'miyyāḏeḵā', lemma: 'יָד', lemmaTranslit: 'yāḏ', gloss: 'from your hand', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'construct', rawCode: 'Ncfsc' }, strongs: 'H3027', position: 10 },
];

export const genesis4_11_translation: VerseTranslation = {
  verseRef: 'Gen.4.11',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: { type: 'literal', targetLanguage: 'en', text: 'And now cursed are you from the ground which opened its mouth to receive the blood of your brother from your hand.', spans: [{ id: 'Gen.4.11.en.lit.0', text: 'And now cursed are you from the ground...', position: 0, sourceTokenIds: ['Gen.4.11.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
    idiomatic: { type: 'idiomatic', targetLanguage: 'en', text: '"And now you are cursed from the ground, which has opened its mouth to receive your brother\'s blood from your hand."', spans: [{ id: 'Gen.4.11.en.idi.0', text: '"And now you are cursed from the ground..."', position: 0, sourceTokenIds: ['Gen.4.11.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
  },
  metadata: { pipelineVersion: '0.1.0', generatedAt: new Date().toISOString(), engineId: 'open-bible-pipeline', engineVersion: '0.1.0', sourceDataVersion: '1.0.0' },
};

export const genesis4_11_notes: StudyNote[] = [
  { id: 'Gen.4.11.note.1', verseRef: 'Gen.4.11', sourceTokenIds: ['Gen.4.11.1'], category: 'theological', title: 'Direct Curse on a Human', content: 'This is the first direct curse on a person (Adam was not cursed, but the ground was in 3:17). Cain\'s curse intensifies the fall\'s consequences.', confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
  { id: 'Gen.4.11.note.2', verseRef: 'Gen.4.11', sourceTokenIds: ['Gen.4.11.5', 'Gen.4.11.6'], category: 'interpretive', title: 'Ground Personified', content: 'The ground "opens its mouth" to receive blood—vivid personification showing creation as witness and participant in human sin.', confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
];

// Genesis 4:12 - Ground will not yield, wanderer
export const genesis4_12_tokens: SourceToken[] = [
  { id: 'Gen.4.12.0', language: 'hebrew', text: 'כִּ֤י', transliteration: 'kî', lemma: 'כִּי', lemmaTranslit: 'kî', gloss: 'When', morphology: { pos: 'conjunction', rawCode: 'Cc' }, strongs: 'H3588', position: 0 },
  { id: 'Gen.4.12.1', language: 'hebrew', text: 'תַעֲבֹד֙', transliteration: 'ṯaʿăḇōḏ', lemma: 'עָבַד', lemmaTranslit: 'ʿāḇaḏ', gloss: 'you work', morphology: { pos: 'verb', person: '2', gender: 'masculine', number: 'singular', tense: 'imperfect', stem: 'qal', rawCode: 'Vqi2ms' }, strongs: 'H5647', position: 1 },
  { id: 'Gen.4.12.2', language: 'hebrew', text: 'אֶת־הָ֣אֲדָמָ֔ה', transliteration: 'ʾeṯ-hāʾăḏāmāh', lemma: 'אֲדָמָה', lemmaTranslit: 'ʾăḏāmāh', gloss: 'the ground', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'absolute', rawCode: 'Ncfsa' }, strongs: 'H127', position: 2 },
  { id: 'Gen.4.12.3', language: 'hebrew', text: 'לֹֽא־תֹסֵ֥ף', transliteration: 'lōʾ-ṯōsēp̄', lemma: 'יָסַף', lemmaTranslit: 'yāsap̄', gloss: 'not it will continue', morphology: { pos: 'verb', person: '3', gender: 'feminine', number: 'singular', tense: 'imperfect', stem: 'hiphil', rawCode: 'Vhi3fs' }, strongs: 'H3254', position: 3 },
  { id: 'Gen.4.12.4', language: 'hebrew', text: 'תֵּת־כֹּחָ֖הּ', transliteration: 'tēṯ-kōḥāh', lemma: 'כֹּחַ', lemmaTranslit: 'kōaḥ', gloss: 'to give its strength', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'construct', rawCode: 'Ncmsc' }, strongs: 'H3581', position: 4 },
  { id: 'Gen.4.12.5', language: 'hebrew', text: 'לָ֑ךְ', transliteration: 'lāḵ', lemma: 'לְ', lemmaTranslit: 'lə', gloss: 'to you', morphology: { pos: 'preposition', rawCode: 'R' }, strongs: 'H9005', position: 5 },
  { id: 'Gen.4.12.6', language: 'hebrew', text: 'נָ֥ע', transliteration: 'nāʿ', lemma: 'נוּעַ', lemmaTranslit: 'nûaʿ', gloss: 'A wanderer', glossExtended: 'to wander, shake', morphology: { pos: 'verb', mood: 'participle', stem: 'qal', rawCode: 'Vqrms' }, strongs: 'H5128', position: 6 },
  { id: 'Gen.4.12.7', language: 'hebrew', text: 'וָנָ֖ד', transliteration: 'wānāḏ', lemma: 'נוּד', lemmaTranslit: 'nûḏ', gloss: 'and a fugitive', glossExtended: 'to move to and fro, flee', morphology: { pos: 'verb', mood: 'participle', stem: 'qal', rawCode: 'Vqrms' }, strongs: 'H5110', position: 7 },
  { id: 'Gen.4.12.8', language: 'hebrew', text: 'תִּֽהְיֶ֥ה', transliteration: 'tihyeh', lemma: 'הָיָה', lemmaTranslit: 'hāyāh', gloss: 'you will be', morphology: { pos: 'verb', person: '2', gender: 'masculine', number: 'singular', tense: 'imperfect', stem: 'qal', rawCode: 'Vqi2ms' }, strongs: 'H1961', position: 8 },
  { id: 'Gen.4.12.9', language: 'hebrew', text: 'בָאָֽרֶץ', transliteration: 'ḇāʾāreṣ', lemma: 'אֶרֶץ', lemmaTranslit: 'ʾereṣ', gloss: 'on the earth', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'absolute', rawCode: 'Ncfsa' }, strongs: 'H776', position: 9 },
];

export const genesis4_12_translation: VerseTranslation = {
  verseRef: 'Gen.4.12',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: { type: 'literal', targetLanguage: 'en', text: 'When you work the ground, not it will continue to give its strength to you; a wanderer and a fugitive you will be on the earth.', spans: [{ id: 'Gen.4.12.en.lit.0', text: 'When you work the ground...', position: 0, sourceTokenIds: ['Gen.4.12.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
    idiomatic: { type: 'idiomatic', targetLanguage: 'en', text: '"When you work the ground, it shall no longer yield to you its strength. You shall be a fugitive and a wanderer on the earth."', spans: [{ id: 'Gen.4.12.en.idi.0', text: '"When you work the ground, it shall no longer..."', position: 0, sourceTokenIds: ['Gen.4.12.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
  },
  metadata: { pipelineVersion: '0.1.0', generatedAt: new Date().toISOString(), engineId: 'open-bible-pipeline', engineVersion: '0.1.0', sourceDataVersion: '1.0.0' },
};

export const genesis4_12_notes: StudyNote[] = [
  { id: 'Gen.4.12.note.1', verseRef: 'Gen.4.12', sourceTokenIds: ['Gen.4.12.6', 'Gen.4.12.7'], category: 'lexical', title: 'Wanderer and Fugitive', content: 'Hebrew uses two near-synonyms for emphasis: nāʿ (wanderer/shaking) and nāḏ (fugitive/homeless). Cain is cut off from stable community.', confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
];

// Genesis 4:13 - My punishment is too great
export const genesis4_13_tokens: SourceToken[] = [
  { id: 'Gen.4.13.0', language: 'hebrew', text: 'וַיֹּ֥אמֶר', transliteration: 'wayyōʾmer', lemma: 'אָמַר', lemmaTranslit: 'ʾāmar', gloss: 'And said', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'imperfect', stem: 'qal', rawCode: 'Vqw3ms' }, strongs: 'H559', position: 0 },
  { id: 'Gen.4.13.1', language: 'hebrew', text: 'קַ֖יִן', transliteration: 'qayin', lemma: 'קַיִן', lemmaTranslit: 'qayin', gloss: 'Cain', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H7014', position: 1 },
  { id: 'Gen.4.13.2', language: 'hebrew', text: 'אֶל־יְהוָ֑ה', transliteration: 'ʾel-yhwh', lemma: 'יְהוָה', lemmaTranslit: 'yhwh', gloss: 'to YHWH', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H3068', position: 2 },
  { id: 'Gen.4.13.3', language: 'hebrew', text: 'גָּד֥וֹל', transliteration: 'gāḏôl', lemma: 'גָּדוֹל', lemmaTranslit: 'gāḏôl', gloss: 'Greater', morphology: { pos: 'adjective', gender: 'masculine', number: 'singular', state: 'absolute', rawCode: 'Aamsa' }, strongs: 'H1419', position: 3 },
  { id: 'Gen.4.13.4', language: 'hebrew', text: 'עֲוֹנִ֖י', transliteration: 'ʿăwōnî', lemma: 'עָוֺן', lemmaTranslit: 'ʿāwōn', gloss: 'my iniquity/punishment', glossExtended: 'iniquity, guilt, punishment', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'construct', rawCode: 'Ncmsc' }, strongs: 'H5771', position: 4 },
  { id: 'Gen.4.13.5', language: 'hebrew', text: 'מִנְּשֹֽׂא', transliteration: 'minnəśōʾ', lemma: 'נָשָׂא', lemmaTranslit: 'nāśāʾ', gloss: 'than to bear', morphology: { pos: 'verb', mood: 'infinitive', stem: 'qal', rawCode: 'Vqc' }, strongs: 'H5375', position: 5 },
];

export const genesis4_13_translation: VerseTranslation = {
  verseRef: 'Gen.4.13',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: { type: 'literal', targetLanguage: 'en', text: 'And said Cain to YHWH: Greater is my iniquity/punishment than to bear.', spans: [{ id: 'Gen.4.13.en.lit.0', text: 'And said Cain to YHWH...', position: 0, sourceTokenIds: ['Gen.4.13.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
    idiomatic: { type: 'idiomatic', targetLanguage: 'en', text: 'Cain said to the LORD, "My punishment is greater than I can bear."', spans: [{ id: 'Gen.4.13.en.idi.0', text: 'Cain said to the LORD, "My punishment is greater..."', position: 0, sourceTokenIds: ['Gen.4.13.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
  },
  metadata: { pipelineVersion: '0.1.0', generatedAt: new Date().toISOString(), engineId: 'open-bible-pipeline', engineVersion: '0.1.0', sourceDataVersion: '1.0.0' },
};

export const genesis4_13_notes: StudyNote[] = [
  { id: 'Gen.4.13.note.1', verseRef: 'Gen.4.13', sourceTokenIds: ['Gen.4.13.4'], category: 'lexical', title: 'Iniquity or Punishment (ʿāwōn)', content: 'Hebrew ʿāwōn can mean both "iniquity" and its consequence, "punishment." The ambiguity may be intentional—is Cain confessing or complaining?', confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
];

// Genesis 4:14 - Driven out, anyone may kill me
export const genesis4_14_tokens: SourceToken[] = [
  { id: 'Gen.4.14.0', language: 'hebrew', text: 'הֵן֩', transliteration: 'hēn', lemma: 'הֵן', lemmaTranslit: 'hēn', gloss: 'Behold', morphology: { pos: 'interjection', rawCode: 'Ij' }, strongs: 'H2005', position: 0 },
  { id: 'Gen.4.14.1', language: 'hebrew', text: 'גֵּרַ֨שְׁתָּ', transliteration: 'gēraštā', lemma: 'גָּרַשׁ', lemmaTranslit: 'gāraš', gloss: 'you have driven', glossExtended: 'to drive out, expel', morphology: { pos: 'verb', person: '2', gender: 'masculine', number: 'singular', tense: 'perfect', stem: 'piel', rawCode: 'Vpp2ms' }, strongs: 'H1644', position: 1 },
  { id: 'Gen.4.14.2', language: 'hebrew', text: 'אֹתִ֜י', transliteration: 'ʾōṯî', lemma: 'אֵת', lemmaTranslit: 'ʾēṯ', gloss: 'me', morphology: { pos: 'preposition', rawCode: 'To' }, strongs: 'H853', position: 2 },
  { id: 'Gen.4.14.3', language: 'hebrew', text: 'הַיּ֗וֹם', transliteration: 'hayyôm', lemma: 'יוֹם', lemmaTranslit: 'yôm', gloss: 'this day', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'absolute', rawCode: 'Ncmsa' }, strongs: 'H3117', position: 3 },
  { id: 'Gen.4.14.4', language: 'hebrew', text: 'מֵעַל֙', transliteration: 'mēʿal', lemma: 'עַל', lemmaTranslit: 'ʿal', gloss: 'from upon', morphology: { pos: 'preposition', rawCode: 'R' }, strongs: 'H5921', position: 4 },
  { id: 'Gen.4.14.5', language: 'hebrew', text: 'פְּנֵ֣י', transliteration: 'pənê', lemma: 'פָּנִים', lemmaTranslit: 'pānîm', gloss: 'the face of', morphology: { pos: 'noun', gender: 'masculine', number: 'plural', state: 'construct', rawCode: 'Ncmpc' }, strongs: 'H6440', position: 5 },
  { id: 'Gen.4.14.6', language: 'hebrew', text: 'הָֽאֲדָמָ֔ה', transliteration: 'hāʾăḏāmāh', lemma: 'אֲדָמָה', lemmaTranslit: 'ʾăḏāmāh', gloss: 'the ground', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'absolute', rawCode: 'Ncfsa' }, strongs: 'H127', position: 6 },
  { id: 'Gen.4.14.7', language: 'hebrew', text: 'וּמִפָּנֶ֖יךָ', transliteration: 'ûmippāneḵā', lemma: 'פָּנִים', lemmaTranslit: 'pānîm', gloss: 'and from your face', morphology: { pos: 'noun', gender: 'masculine', number: 'plural', state: 'construct', rawCode: 'Ncmpc' }, strongs: 'H6440', position: 7 },
  { id: 'Gen.4.14.8', language: 'hebrew', text: 'אֶסָּתֵ֑ר', transliteration: 'ʾessāṯēr', lemma: 'סָתַר', lemmaTranslit: 'sāṯar', gloss: 'I will be hidden', morphology: { pos: 'verb', person: '1', gender: 'common', number: 'singular', tense: 'imperfect', stem: 'niphal', rawCode: 'Vni1cs' }, strongs: 'H5641', position: 8 },
  { id: 'Gen.4.14.9', language: 'hebrew', text: 'וְהָיִ֜יתִי', transliteration: 'wəhāyîṯî', lemma: 'הָיָה', lemmaTranslit: 'hāyāh', gloss: 'and I will be', morphology: { pos: 'verb', person: '1', gender: 'common', number: 'singular', tense: 'perfect', stem: 'qal', rawCode: 'Vqp1cs' }, strongs: 'H1961', position: 9 },
  { id: 'Gen.4.14.10', language: 'hebrew', text: 'נָ֤ע', transliteration: 'nāʿ', lemma: 'נוּעַ', lemmaTranslit: 'nûaʿ', gloss: 'a wanderer', morphology: { pos: 'verb', mood: 'participle', stem: 'qal', rawCode: 'Vqrms' }, strongs: 'H5128', position: 10 },
  { id: 'Gen.4.14.11', language: 'hebrew', text: 'וָנָד֙', transliteration: 'wānāḏ', lemma: 'נוּד', lemmaTranslit: 'nûḏ', gloss: 'and a fugitive', morphology: { pos: 'verb', mood: 'participle', stem: 'qal', rawCode: 'Vqrms' }, strongs: 'H5110', position: 11 },
  { id: 'Gen.4.14.12', language: 'hebrew', text: 'בָּאָ֔רֶץ', transliteration: 'bāʾāreṣ', lemma: 'אֶרֶץ', lemmaTranslit: 'ʾereṣ', gloss: 'on the earth', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'absolute', rawCode: 'Ncfsa' }, strongs: 'H776', position: 12 },
  { id: 'Gen.4.14.13', language: 'hebrew', text: 'וְהָיָ֥ה', transliteration: 'wəhāyāh', lemma: 'הָיָה', lemmaTranslit: 'hāyāh', gloss: 'and it will be', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'perfect', stem: 'qal', rawCode: 'Vqp3ms' }, strongs: 'H1961', position: 13 },
  { id: 'Gen.4.14.14', language: 'hebrew', text: 'כָל־מֹצְאִ֖י', transliteration: 'ḵāl-mōṣəʾî', lemma: 'מָצָא', lemmaTranslit: 'māṣāʾ', gloss: 'anyone who finds me', morphology: { pos: 'verb', mood: 'participle', stem: 'qal', rawCode: 'Vqrms' }, strongs: 'H4672', position: 14 },
  { id: 'Gen.4.14.15', language: 'hebrew', text: 'יַהַרְגֵֽנִי', transliteration: 'yahargēnî', lemma: 'הָרַג', lemmaTranslit: 'hāraḡ', gloss: 'will kill me', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'imperfect', stem: 'qal', rawCode: 'Vqi3ms' }, strongs: 'H2026', position: 15 },
];

export const genesis4_14_translation: VerseTranslation = {
  verseRef: 'Gen.4.14',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: { type: 'literal', targetLanguage: 'en', text: 'Behold, you have driven me this day from upon the face of the ground, and from your face I will be hidden; and I will be a wanderer and a fugitive on the earth, and it will be anyone who finds me will kill me.', spans: [{ id: 'Gen.4.14.en.lit.0', text: 'Behold, you have driven me this day...', position: 0, sourceTokenIds: ['Gen.4.14.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
    idiomatic: { type: 'idiomatic', targetLanguage: 'en', text: '"Behold, you have driven me today away from the ground, and from your face I shall be hidden. I shall be a fugitive and a wanderer on the earth, and whoever finds me will kill me."', spans: [{ id: 'Gen.4.14.en.idi.0', text: '"Behold, you have driven me today..."', position: 0, sourceTokenIds: ['Gen.4.14.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
  },
  metadata: { pipelineVersion: '0.1.0', generatedAt: new Date().toISOString(), engineId: 'open-bible-pipeline', engineVersion: '0.1.0', sourceDataVersion: '1.0.0' },
};

export const genesis4_14_notes: StudyNote[] = [
  { id: 'Gen.4.14.note.1', verseRef: 'Gen.4.14', sourceTokenIds: ['Gen.4.14.7', 'Gen.4.14.8'], category: 'theological', title: 'Hidden from God\'s Face', content: 'Being hidden from God\'s face represents loss of divine presence and protection—a worse consequence than physical death for ancient Israelites.', confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
];

// Genesis 4:15 - Mark of Cain
export const genesis4_15_tokens: SourceToken[] = [
  { id: 'Gen.4.15.0', language: 'hebrew', text: 'וַיֹּ֧אמֶר', transliteration: 'wayyōʾmer', lemma: 'אָמַר', lemmaTranslit: 'ʾāmar', gloss: 'And said', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'imperfect', stem: 'qal', rawCode: 'Vqw3ms' }, strongs: 'H559', position: 0 },
  { id: 'Gen.4.15.1', language: 'hebrew', text: 'ל֣וֹ', transliteration: 'lô', lemma: 'לְ', lemmaTranslit: 'lə', gloss: 'to him', morphology: { pos: 'preposition', rawCode: 'R' }, strongs: 'H9005', position: 1 },
  { id: 'Gen.4.15.2', language: 'hebrew', text: 'יְהוָ֗ה', transliteration: 'yhwh', lemma: 'יְהוָה', lemmaTranslit: 'yhwh', gloss: 'YHWH', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H3068', position: 2 },
  { id: 'Gen.4.15.3', language: 'hebrew', text: 'לָכֵן֙', transliteration: 'lāḵēn', lemma: 'לָכֵן', lemmaTranslit: 'lāḵēn', gloss: 'Therefore', morphology: { pos: 'adverb', rawCode: 'D' }, strongs: 'H3651', position: 3 },
  { id: 'Gen.4.15.4', language: 'hebrew', text: 'כָּל־הֹרֵ֣ג', transliteration: 'kāl-hōrēḡ', lemma: 'הָרַג', lemmaTranslit: 'hāraḡ', gloss: 'anyone who kills', morphology: { pos: 'verb', mood: 'participle', stem: 'qal', rawCode: 'Vqrms' }, strongs: 'H2026', position: 4 },
  { id: 'Gen.4.15.5', language: 'hebrew', text: 'קַ֔יִן', transliteration: 'qayin', lemma: 'קַיִן', lemmaTranslit: 'qayin', gloss: 'Cain', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H7014', position: 5 },
  { id: 'Gen.4.15.6', language: 'hebrew', text: 'שִׁבְעָתַ֖יִם', transliteration: 'šiḇʿāṯayim', lemma: 'שִׁבְעָתַיִם', lemmaTranslit: 'šiḇʿāṯayim', gloss: 'sevenfold', morphology: { pos: 'numeral', rawCode: 'Acfda' }, strongs: 'H7659', position: 6 },
  { id: 'Gen.4.15.7', language: 'hebrew', text: 'יֻקָּ֑ם', transliteration: 'yuqqām', lemma: 'נָקַם', lemmaTranslit: 'nāqam', gloss: 'shall be avenged', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'imperfect', stem: 'hophal', rawCode: 'Vhu3ms' }, strongs: 'H5358', position: 7 },
  { id: 'Gen.4.15.8', language: 'hebrew', text: 'וַיָּ֨שֶׂם', transliteration: 'wayyāśem', lemma: 'שׂוּם', lemmaTranslit: 'śûm', gloss: 'And placed', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'imperfect', stem: 'qal', rawCode: 'Vqw3ms' }, strongs: 'H7760', position: 8 },
  { id: 'Gen.4.15.9', language: 'hebrew', text: 'יְהוָ֤ה', transliteration: 'yhwh', lemma: 'יְהוָה', lemmaTranslit: 'yhwh', gloss: 'YHWH', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H3068', position: 9 },
  { id: 'Gen.4.15.10', language: 'hebrew', text: 'לְקַ֙יִן֙', transliteration: 'ləqayin', lemma: 'קַיִן', lemmaTranslit: 'qayin', gloss: 'for Cain', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H7014', position: 10 },
  { id: 'Gen.4.15.11', language: 'hebrew', text: 'א֔וֹת', transliteration: 'ʾôṯ', lemma: 'אוֹת', lemmaTranslit: 'ʾôṯ', gloss: 'a sign', glossExtended: 'sign, mark, token', morphology: { pos: 'noun', gender: 'common', number: 'singular', state: 'absolute', rawCode: 'Ncbsa' }, strongs: 'H226', position: 11 },
  { id: 'Gen.4.15.12', language: 'hebrew', text: 'לְבִלְתִּ֥י', transliteration: 'ləḇiltî', lemma: 'בִּלְתִּי', lemmaTranslit: 'biltî', gloss: 'so that not', morphology: { pos: 'adverb', rawCode: 'An' }, strongs: 'H1115', position: 12 },
  { id: 'Gen.4.15.13', language: 'hebrew', text: 'הַכּוֹת־אֹת֖וֹ', transliteration: 'hakkôṯ-ʾōṯô', lemma: 'נָכָה', lemmaTranslit: 'nāḵāh', gloss: 'would strike him', morphology: { pos: 'verb', mood: 'infinitive', stem: 'hiphil', rawCode: 'Vhc' }, strongs: 'H5221', position: 13 },
  { id: 'Gen.4.15.14', language: 'hebrew', text: 'כָּל־מֹצְאֽוֹ', transliteration: 'kāl-mōṣəʾô', lemma: 'מָצָא', lemmaTranslit: 'māṣāʾ', gloss: 'anyone who finds him', morphology: { pos: 'verb', mood: 'participle', stem: 'qal', rawCode: 'Vqrms' }, strongs: 'H4672', position: 14 },
];

export const genesis4_15_translation: VerseTranslation = {
  verseRef: 'Gen.4.15',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: { type: 'literal', targetLanguage: 'en', text: 'And said to him YHWH: Therefore anyone who kills Cain, sevenfold shall be avenged. And placed YHWH for Cain a sign, so that not would strike him anyone who finds him.', spans: [{ id: 'Gen.4.15.en.lit.0', text: 'And said to him YHWH: Therefore...', position: 0, sourceTokenIds: ['Gen.4.15.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
    idiomatic: { type: 'idiomatic', targetLanguage: 'en', text: 'Then the LORD said to him, "Not so! If anyone kills Cain, vengeance shall be taken on him sevenfold." And the LORD put a mark on Cain, lest any who found him should attack him.', spans: [{ id: 'Gen.4.15.en.idi.0', text: 'Then the LORD said to him, "Not so!..."', position: 0, sourceTokenIds: ['Gen.4.15.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
  },
  metadata: { pipelineVersion: '0.1.0', generatedAt: new Date().toISOString(), engineId: 'open-bible-pipeline', engineVersion: '0.1.0', sourceDataVersion: '1.0.0' },
};

export const genesis4_15_notes: StudyNote[] = [
  { id: 'Gen.4.15.note.1', verseRef: 'Gen.4.15', sourceTokenIds: ['Gen.4.15.11'], category: 'interpretive', title: 'The Mark of Cain (ʾôṯ)', content: 'The "mark" (ʾôṯ) is not specified—it could be a sign on Cain or given to Cain for protection. The same word is used for rainbow (9:12) and circumcision (17:11).', confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
  { id: 'Gen.4.15.note.2', verseRef: 'Gen.4.15', sourceTokenIds: ['Gen.4.15.6', 'Gen.4.15.7'], category: 'theological', title: 'Divine Protection Despite Sin', content: 'God protects even the murderer from vigilante justice. Seven-fold vengeance shows divine prerogative over life and death—murder judgment belongs to God.', confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
];

// Genesis 4:16 - Cain dwelt in land of Nod
export const genesis4_16_tokens: SourceToken[] = [
  { id: 'Gen.4.16.0', language: 'hebrew', text: 'וַיֵּ֥צֵא', transliteration: 'wayyēṣēʾ', lemma: 'יָצָא', lemmaTranslit: 'yāṣāʾ', gloss: 'And went out', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'imperfect', stem: 'qal', rawCode: 'Vqw3ms' }, strongs: 'H3318', position: 0 },
  { id: 'Gen.4.16.1', language: 'hebrew', text: 'קַ֖יִן', transliteration: 'qayin', lemma: 'קַיִן', lemmaTranslit: 'qayin', gloss: 'Cain', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H7014', position: 1 },
  { id: 'Gen.4.16.2', language: 'hebrew', text: 'מִלִּפְנֵ֣י', transliteration: 'millip̄nê', lemma: 'פָּנִים', lemmaTranslit: 'pānîm', gloss: 'from the presence of', morphology: { pos: 'noun', gender: 'masculine', number: 'plural', state: 'construct', rawCode: 'Ncmpc' }, strongs: 'H6440', position: 2 },
  { id: 'Gen.4.16.3', language: 'hebrew', text: 'יְהוָ֑ה', transliteration: 'yhwh', lemma: 'יְהוָה', lemmaTranslit: 'yhwh', gloss: 'YHWH', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H3068', position: 3 },
  { id: 'Gen.4.16.4', language: 'hebrew', text: 'וַיֵּ֥שֶׁב', transliteration: 'wayyēšeḇ', lemma: 'יָשַׁב', lemmaTranslit: 'yāšaḇ', gloss: 'and dwelt', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'imperfect', stem: 'qal', rawCode: 'Vqw3ms' }, strongs: 'H3427', position: 4 },
  { id: 'Gen.4.16.5', language: 'hebrew', text: 'בְּאֶֽרֶץ־נ֖וֹד', transliteration: 'bəʾereṣ-nôḏ', lemma: 'נוֹד', lemmaTranslit: 'nôḏ', gloss: 'in the land of Nod', glossExtended: 'Nod (wandering)', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H5113', position: 5 },
  { id: 'Gen.4.16.6', language: 'hebrew', text: 'קִדְמַת־עֵֽדֶן', transliteration: 'qiḏmaṯ-ʿēḏen', lemma: 'עֵדֶן', lemmaTranslit: 'ʿēḏen', gloss: 'east of Eden', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H5731', position: 6 },
];

export const genesis4_16_translation: VerseTranslation = {
  verseRef: 'Gen.4.16',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: { type: 'literal', targetLanguage: 'en', text: 'And went out Cain from the presence of YHWH, and dwelt in the land of Nod, east of Eden.', spans: [{ id: 'Gen.4.16.en.lit.0', text: 'And went out Cain from the presence of YHWH...', position: 0, sourceTokenIds: ['Gen.4.16.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
    idiomatic: { type: 'idiomatic', targetLanguage: 'en', text: 'Then Cain went away from the presence of the LORD and settled in the land of Nod, east of Eden.', spans: [{ id: 'Gen.4.16.en.idi.0', text: 'Then Cain went away from the presence of the LORD...', position: 0, sourceTokenIds: ['Gen.4.16.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
  },
  metadata: { pipelineVersion: '0.1.0', generatedAt: new Date().toISOString(), engineId: 'open-bible-pipeline', engineVersion: '0.1.0', sourceDataVersion: '1.0.0' },
};

export const genesis4_16_notes: StudyNote[] = [
  { id: 'Gen.4.16.note.1', verseRef: 'Gen.4.16', sourceTokenIds: ['Gen.4.16.5'], category: 'lexical', title: 'Land of Nod', content: 'Nod (nôḏ) means "wandering"—a wordplay on v.12 (nāʿ wānāḏ). The land name reflects Cain\'s cursed state as a wanderer.', confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
  { id: 'Gen.4.16.note.2', verseRef: 'Gen.4.16', sourceTokenIds: ['Gen.4.16.6'], category: 'cultural', title: 'East of Eden', content: '"East of Eden" continues the eastward movement from paradise—Adam expelled east (3:24), now Cain settles further east. Movement east in Genesis often signals departure from blessing.', confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
];

// Export verse structures
export const genesis4_9_verse = { ref: 'Gen.4.9', sourceTokens: genesis4_9_tokens, translation: genesis4_9_translation, notes: genesis4_9_notes };
export const genesis4_10_verse = { ref: 'Gen.4.10', sourceTokens: genesis4_10_tokens, translation: genesis4_10_translation, notes: genesis4_10_notes };
export const genesis4_11_verse = { ref: 'Gen.4.11', sourceTokens: genesis4_11_tokens, translation: genesis4_11_translation, notes: genesis4_11_notes };
export const genesis4_12_verse = { ref: 'Gen.4.12', sourceTokens: genesis4_12_tokens, translation: genesis4_12_translation, notes: genesis4_12_notes };
export const genesis4_13_verse = { ref: 'Gen.4.13', sourceTokens: genesis4_13_tokens, translation: genesis4_13_translation, notes: genesis4_13_notes };
export const genesis4_14_verse = { ref: 'Gen.4.14', sourceTokens: genesis4_14_tokens, translation: genesis4_14_translation, notes: genesis4_14_notes };
export const genesis4_15_verse = { ref: 'Gen.4.15', sourceTokens: genesis4_15_tokens, translation: genesis4_15_translation, notes: genesis4_15_notes };
export const genesis4_16_verse = { ref: 'Gen.4.16', sourceTokens: genesis4_16_tokens, translation: genesis4_16_translation, notes: genesis4_16_notes };

// Combined export
export const genesis4_9_16_verses = [
  genesis4_9_verse,
  genesis4_10_verse,
  genesis4_11_verse,
  genesis4_12_verse,
  genesis4_13_verse,
  genesis4_14_verse,
  genesis4_15_verse,
  genesis4_16_verse,
];

export default genesis4_9_16_verses;
