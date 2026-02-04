/**
 * Genesis 3:14-19 - Hebrew morphological data
 * The curses: serpent, woman, man, ground; the protoevangelium
 * Source: Open Hebrew Bible (Tanach.us) - Public Domain
 */

import type { SourceToken, VerseTranslation, StudyNote } from '@open-bible/schemas';

// Genesis 3:14 - Curse on the serpent
export const genesis3_14_tokens: SourceToken[] = [
  { id: 'Gen.3.14.0', language: 'hebrew', text: 'וַיֹּאמֶר֩', transliteration: 'wayyōʾmer', lemma: 'אָמַר', lemmaTranslit: 'ʾāmar', gloss: 'And said', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'imperfect', stem: 'qal', rawCode: 'Vqw3ms' }, strongs: 'H559', position: 0 },
  { id: 'Gen.3.14.1', language: 'hebrew', text: 'יְהוָ֨ה', transliteration: 'yhwh', lemma: 'יְהוָה', lemmaTranslit: 'yhwh', gloss: 'YHWH', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H3068', position: 1 },
  { id: 'Gen.3.14.2', language: 'hebrew', text: 'אֱלֹהִ֥ים', transliteration: 'ʾĕlōhîm', lemma: 'אֱלֹהִים', lemmaTranslit: 'ʾĕlōhîm', gloss: 'God', morphology: { pos: 'noun', gender: 'masculine', number: 'plural', rawCode: 'Ncmpa' }, strongs: 'H430', position: 2 },
  { id: 'Gen.3.14.3', language: 'hebrew', text: 'אֶֽל־הַנָּחָ֗שׁ', transliteration: 'ʾel-hannāḥāš', lemma: 'נָחָשׁ', lemmaTranslit: 'nāḥāš', gloss: 'to the serpent', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'absolute', rawCode: 'Ncmsa' }, strongs: 'H5175', position: 3 },
  { id: 'Gen.3.14.4', language: 'hebrew', text: 'כִּ֣י', transliteration: 'kî', lemma: 'כִּי', lemmaTranslit: 'kî', gloss: 'Because', morphology: { pos: 'conjunction', rawCode: 'Cc' }, strongs: 'H3588', position: 4 },
  { id: 'Gen.3.14.5', language: 'hebrew', text: 'עָשִׂ֣יתָ', transliteration: 'ʿāśîṯā', lemma: 'עָשָׂה', lemmaTranslit: 'ʿāśāh', gloss: 'you have done', morphology: { pos: 'verb', person: '2', gender: 'masculine', number: 'singular', tense: 'perfect', stem: 'qal', rawCode: 'Vqp2ms' }, strongs: 'H6213', position: 5 },
  { id: 'Gen.3.14.6', language: 'hebrew', text: 'זֹּאת֒', transliteration: 'zōʾṯ', lemma: 'זֹאת', lemmaTranslit: 'zōʾṯ', gloss: 'this', morphology: { pos: 'pronoun', gender: 'feminine', number: 'singular', rawCode: 'Pdxfs' }, strongs: 'H2063', position: 6 },
  { id: 'Gen.3.14.7', language: 'hebrew', text: 'אָר֤וּר', transliteration: 'ʾārûr', lemma: 'אָרַר', lemmaTranslit: 'ʾārar', gloss: 'cursed', glossExtended: 'cursed (passive participle)', morphology: { pos: 'verb', mood: 'participle', stem: 'qal', rawCode: 'Vqpms' }, strongs: 'H779', position: 7 },
  { id: 'Gen.3.14.8', language: 'hebrew', text: 'אַתָּה֙', transliteration: 'ʾattāh', lemma: 'אַתָּה', lemmaTranslit: 'ʾattāh', gloss: 'you', morphology: { pos: 'pronoun', person: '2', gender: 'masculine', number: 'singular', rawCode: 'Pp2ms' }, strongs: 'H859', position: 8 },
  { id: 'Gen.3.14.9', language: 'hebrew', text: 'מִכָּל־', transliteration: 'mikkāl-', lemma: 'כֹּל', lemmaTranslit: 'kōl', gloss: 'above all', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', rawCode: 'Ncmsc' }, strongs: 'H3605', position: 9 },
  { id: 'Gen.3.14.10', language: 'hebrew', text: 'הַבְּהֵמָ֔ה', transliteration: 'habbəhēmāh', lemma: 'בְּהֵמָה', lemmaTranslit: 'bəhēmāh', gloss: 'the livestock', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'absolute', rawCode: 'Ncfsa' }, strongs: 'H929', position: 10 },
  { id: 'Gen.3.14.11', language: 'hebrew', text: 'וּמִכֹּ֖ל', transliteration: 'ûmikkōl', lemma: 'כֹּל', lemmaTranslit: 'kōl', gloss: 'and above all', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', rawCode: 'Ncmsc' }, strongs: 'H3605', position: 11 },
  { id: 'Gen.3.14.12', language: 'hebrew', text: 'חַיַּ֣ת', transliteration: 'ḥayyaṯ', lemma: 'חַיָּה', lemmaTranslit: 'ḥayyāh', gloss: 'beast of', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'construct', rawCode: 'Ncfsc' }, strongs: 'H2416', position: 12 },
  { id: 'Gen.3.14.13', language: 'hebrew', text: 'הַשָּׂדֶ֑ה', transliteration: 'haśśāḏeh', lemma: 'שָׂדֶה', lemmaTranslit: 'śāḏeh', gloss: 'the field', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'absolute', rawCode: 'Ncmsa' }, strongs: 'H7704', position: 13 },
  { id: 'Gen.3.14.14', language: 'hebrew', text: 'עַל־גְּחֹנְךָ֣', transliteration: 'ʿal-gəḥōnəḵā', lemma: 'גָּחוֹן', lemmaTranslit: 'gāḥôn', gloss: 'on your belly', glossExtended: 'belly, stomach', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'construct', rawCode: 'Ncmsc' }, strongs: 'H1512', position: 14 },
  { id: 'Gen.3.14.15', language: 'hebrew', text: 'תֵלֵ֔ךְ', transliteration: 'ṯēlēḵ', lemma: 'הָלַךְ', lemmaTranslit: 'hālaḵ', gloss: 'you shall go', morphology: { pos: 'verb', person: '2', gender: 'masculine', number: 'singular', tense: 'imperfect', stem: 'qal', rawCode: 'Vqi2ms' }, strongs: 'H1980', position: 15 },
  { id: 'Gen.3.14.16', language: 'hebrew', text: 'וְעָפָ֥ר', transliteration: 'wəʿāp̄ār', lemma: 'עָפָר', lemmaTranslit: 'ʿāp̄ār', gloss: 'and dust', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'absolute', rawCode: 'Ncmsa' }, strongs: 'H6083', position: 16 },
  { id: 'Gen.3.14.17', language: 'hebrew', text: 'תֹּאכַ֖ל', transliteration: 'tōʾḵal', lemma: 'אָכַל', lemmaTranslit: 'ʾāḵal', gloss: 'you shall eat', morphology: { pos: 'verb', person: '2', gender: 'masculine', number: 'singular', tense: 'imperfect', stem: 'qal', rawCode: 'Vqi2ms' }, strongs: 'H398', position: 17 },
  { id: 'Gen.3.14.18', language: 'hebrew', text: 'כָּל־יְמֵ֥י', transliteration: 'kāl-yəmê', lemma: 'יוֹם', lemmaTranslit: 'yôm', gloss: 'all the days of', morphology: { pos: 'noun', gender: 'masculine', number: 'plural', state: 'construct', rawCode: 'Ncmpc' }, strongs: 'H3117', position: 18 },
  { id: 'Gen.3.14.19', language: 'hebrew', text: 'חַיֶּֽיךָ', transliteration: 'ḥayyeḵā', lemma: 'חַי', lemmaTranslit: 'ḥay', gloss: 'your life', morphology: { pos: 'noun', gender: 'masculine', number: 'plural', state: 'construct', rawCode: 'Ncmpc' }, strongs: 'H2416', position: 19 },
];

export const genesis3_14_translation: VerseTranslation = {
  verseRef: 'Gen.3.14',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: { type: 'literal', targetLanguage: 'en', text: 'And said YHWH God to the serpent: Because you have done this, cursed are you above all the livestock and above all beast of the field; on your belly you shall go and dust you shall eat all the days of your life.', spans: [{ id: 'Gen.3.14.en.lit.0', text: 'And said YHWH God to the serpent...', position: 0, sourceTokenIds: ['Gen.3.14.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
    idiomatic: { type: 'idiomatic', targetLanguage: 'en', text: 'The LORD God said to the serpent, "Because you have done this, cursed are you above all livestock and above all beasts of the field; on your belly you shall go, and dust you shall eat all the days of your life."', spans: [{ id: 'Gen.3.14.en.idi.0', text: 'The LORD God said to the serpent...', position: 0, sourceTokenIds: ['Gen.3.14.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
  },
  metadata: { pipelineVersion: '0.1.0', generatedAt: new Date().toISOString(), engineId: 'open-bible-pipeline', engineVersion: '0.1.0', sourceDataVersion: '1.0.0' },
};

export const genesis3_14_notes: StudyNote[] = [
  { id: 'Gen.3.14.note.1', verseRef: 'Gen.3.14', sourceTokenIds: ['Gen.3.14.7'], category: 'theological', title: 'Cursed (ʾārûr)', content: 'The serpent is the first creature to be cursed. Unlike Adam and Eve who receive consequences, the serpent receives a direct curse.', confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
];

// Genesis 3:15 - The Protoevangelium
export const genesis3_15_tokens: SourceToken[] = [
  { id: 'Gen.3.15.0', language: 'hebrew', text: 'וְאֵיבָ֣ה', transliteration: 'wəʾêḇāh', lemma: 'אֵיבָה', lemmaTranslit: 'ʾêḇāh', gloss: 'And enmity', glossExtended: 'enmity, hostility', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'absolute', rawCode: 'Ncfsa' }, strongs: 'H342', position: 0 },
  { id: 'Gen.3.15.1', language: 'hebrew', text: 'אָשִׁ֗ית', transliteration: 'ʾāšîṯ', lemma: 'שִׁית', lemmaTranslit: 'šîṯ', gloss: 'I will put', morphology: { pos: 'verb', person: '1', gender: 'common', number: 'singular', tense: 'imperfect', stem: 'qal', rawCode: 'Vqi1cs' }, strongs: 'H7896', position: 1 },
  { id: 'Gen.3.15.2', language: 'hebrew', text: 'בֵּֽינְךָ֙', transliteration: 'bênəḵā', lemma: 'בֵּין', lemmaTranslit: 'bên', gloss: 'between you', morphology: { pos: 'preposition', rawCode: 'R' }, strongs: 'H996', position: 2 },
  { id: 'Gen.3.15.3', language: 'hebrew', text: 'וּבֵ֣ין', transliteration: 'ûḇên', lemma: 'בֵּין', lemmaTranslit: 'bên', gloss: 'and between', morphology: { pos: 'preposition', rawCode: 'R' }, strongs: 'H996', position: 3 },
  { id: 'Gen.3.15.4', language: 'hebrew', text: 'הָֽאִשָּׁ֔ה', transliteration: 'hāʾiššāh', lemma: 'אִשָּׁה', lemmaTranslit: 'ʾiššāh', gloss: 'the woman', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'absolute', rawCode: 'Ncfsa' }, strongs: 'H802', position: 4 },
  { id: 'Gen.3.15.5', language: 'hebrew', text: 'וּבֵ֥ין', transliteration: 'ûḇên', lemma: 'בֵּין', lemmaTranslit: 'bên', gloss: 'and between', morphology: { pos: 'preposition', rawCode: 'R' }, strongs: 'H996', position: 5 },
  { id: 'Gen.3.15.6', language: 'hebrew', text: 'זַרְעֲךָ֖', transliteration: 'zarʿăḵā', lemma: 'זֶרַע', lemmaTranslit: 'zeraʿ', gloss: 'your seed', glossExtended: 'seed, offspring, descendant', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'construct', rawCode: 'Ncmsc' }, strongs: 'H2233', position: 6 },
  { id: 'Gen.3.15.7', language: 'hebrew', text: 'וּבֵ֣ין', transliteration: 'ûḇên', lemma: 'בֵּין', lemmaTranslit: 'bên', gloss: 'and between', morphology: { pos: 'preposition', rawCode: 'R' }, strongs: 'H996', position: 7 },
  { id: 'Gen.3.15.8', language: 'hebrew', text: 'זַרְעָ֑הּ', transliteration: 'zarʿāh', lemma: 'זֶרַע', lemmaTranslit: 'zeraʿ', gloss: 'her seed', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'construct', rawCode: 'Ncmsc' }, strongs: 'H2233', position: 8 },
  { id: 'Gen.3.15.9', language: 'hebrew', text: 'ה֚וּא', transliteration: 'hûʾ', lemma: 'הוּא', lemmaTranslit: 'hûʾ', gloss: 'He', morphology: { pos: 'pronoun', person: '3', gender: 'masculine', number: 'singular', rawCode: 'Pp3ms' }, strongs: 'H1931', position: 9 },
  { id: 'Gen.3.15.10', language: 'hebrew', text: 'יְשׁוּפְךָ֣', transliteration: 'yəšûp̄əḵā', lemma: 'שׁוּף', lemmaTranslit: 'šûp̄', gloss: 'shall bruise your', glossExtended: 'to crush, bruise, strike', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'imperfect', stem: 'qal', rawCode: 'Vqi3ms' }, strongs: 'H7779', position: 10 },
  { id: 'Gen.3.15.11', language: 'hebrew', text: 'רֹ֔אשׁ', transliteration: 'rōʾš', lemma: 'רֹאשׁ', lemmaTranslit: 'rōʾš', gloss: 'head', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'absolute', rawCode: 'Ncmsa' }, strongs: 'H7218', position: 11 },
  { id: 'Gen.3.15.12', language: 'hebrew', text: 'וְאַתָּ֖ה', transliteration: 'wəʾattāh', lemma: 'אַתָּה', lemmaTranslit: 'ʾattāh', gloss: 'and you', morphology: { pos: 'pronoun', person: '2', gender: 'masculine', number: 'singular', rawCode: 'Pp2ms' }, strongs: 'H859', position: 12 },
  { id: 'Gen.3.15.13', language: 'hebrew', text: 'תְּשׁוּפֶ֥נּוּ', transliteration: 'təšûp̄ennû', lemma: 'שׁוּף', lemmaTranslit: 'šûp̄', gloss: 'shall bruise his', morphology: { pos: 'verb', person: '2', gender: 'masculine', number: 'singular', tense: 'imperfect', stem: 'qal', rawCode: 'Vqi2ms' }, strongs: 'H7779', position: 13 },
  { id: 'Gen.3.15.14', language: 'hebrew', text: 'עָקֵֽב', transliteration: 'ʿāqēḇ', lemma: 'עָקֵב', lemmaTranslit: 'ʿāqēḇ', gloss: 'heel', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'absolute', rawCode: 'Ncmsa' }, strongs: 'H6119', position: 14 },
];

export const genesis3_15_translation: VerseTranslation = {
  verseRef: 'Gen.3.15',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: { type: 'literal', targetLanguage: 'en', text: 'And enmity I will put between you and between the woman, and between your seed and between her seed; he shall bruise your head and you shall bruise his heel.', spans: [{ id: 'Gen.3.15.en.lit.0', text: 'And enmity I will put between you and between the woman...', position: 0, sourceTokenIds: ['Gen.3.15.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
    idiomatic: { type: 'idiomatic', targetLanguage: 'en', text: '"I will put enmity between you and the woman, and between your offspring and her offspring; he shall bruise your head, and you shall bruise his heel."', spans: [{ id: 'Gen.3.15.en.idi.0', text: '"I will put enmity between you and the woman..."', position: 0, sourceTokenIds: ['Gen.3.15.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
  },
  metadata: { pipelineVersion: '0.1.0', generatedAt: new Date().toISOString(), engineId: 'open-bible-pipeline', engineVersion: '0.1.0', sourceDataVersion: '1.0.0' },
};

export const genesis3_15_notes: StudyNote[] = [
  { id: 'Gen.3.15.note.1', verseRef: 'Gen.3.15', sourceTokenIds: ['Gen.3.15.8', 'Gen.3.15.9'], category: 'theological', title: 'Protoevangelium', content: 'The "first gospel"—the seed of the woman will crush the serpent\'s head. Christians see this as the first messianic prophecy, fulfilled in Christ (Rom 16:20; Gal 4:4).', confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
  { id: 'Gen.3.15.note.2', verseRef: 'Gen.3.15', sourceTokenIds: ['Gen.3.15.9'], category: 'grammatical', title: 'He (hûʾ)', content: 'The masculine singular pronoun "he" (hûʾ) refers to the seed, suggesting an individual descendant, not just collective offspring.', confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
  { id: 'Gen.3.15.note.3', verseRef: 'Gen.3.15', sourceTokenIds: ['Gen.3.15.10', 'Gen.3.15.11', 'Gen.3.15.14'], category: 'lexical', title: 'Head vs. Heel', content: 'The same verb šûp̄ is used for both, but the outcomes differ: crushed head = death; bruised heel = wound. Victory comes through suffering.', confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
];

// Genesis 3:16 - Consequences for the woman
export const genesis3_16_tokens: SourceToken[] = [
  { id: 'Gen.3.16.0', language: 'hebrew', text: 'אֶֽל־הָאִשָּׁ֣ה', transliteration: 'ʾel-hāʾiššāh', lemma: 'אִשָּׁה', lemmaTranslit: 'ʾiššāh', gloss: 'To the woman', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'absolute', rawCode: 'Ncfsa' }, strongs: 'H802', position: 0 },
  { id: 'Gen.3.16.1', language: 'hebrew', text: 'אָמַ֗ר', transliteration: 'ʾāmar', lemma: 'אָמַר', lemmaTranslit: 'ʾāmar', gloss: 'he said', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'perfect', stem: 'qal', rawCode: 'Vqp3ms' }, strongs: 'H559', position: 1 },
  { id: 'Gen.3.16.2', language: 'hebrew', text: 'הַרְבָּ֤ה', transliteration: 'harbāh', lemma: 'רָבָה', lemmaTranslit: 'rāḇāh', gloss: 'Greatly', glossExtended: 'infinitive absolute for emphasis', morphology: { pos: 'verb', mood: 'infinitive', stem: 'hiphil', rawCode: 'Vha' }, strongs: 'H7235', position: 2 },
  { id: 'Gen.3.16.3', language: 'hebrew', text: 'אַרְבֶּה֙', transliteration: 'ʾarbeh', lemma: 'רָבָה', lemmaTranslit: 'rāḇāh', gloss: 'I will multiply', morphology: { pos: 'verb', person: '1', gender: 'common', number: 'singular', tense: 'imperfect', stem: 'hiphil', rawCode: 'Vhi1cs' }, strongs: 'H7235', position: 3 },
  { id: 'Gen.3.16.4', language: 'hebrew', text: 'עִצְּבוֹנֵ֣ךְ', transliteration: 'ʿiṣṣəḇôneḵ', lemma: 'עִצָּבוֹן', lemmaTranslit: 'ʿiṣṣāḇôn', gloss: 'your pain', glossExtended: 'pain, toil, labor', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'construct', rawCode: 'Ncmsc' }, strongs: 'H6093', position: 4 },
  { id: 'Gen.3.16.5', language: 'hebrew', text: 'וְהֵֽרֹנֵ֔ךְ', transliteration: 'wəhērōneḵ', lemma: 'הֵרָיוֹן', lemmaTranslit: 'hērāyôn', gloss: 'and your conception', glossExtended: 'conception, pregnancy', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'construct', rawCode: 'Ncmsc' }, strongs: 'H2032', position: 5 },
  { id: 'Gen.3.16.6', language: 'hebrew', text: 'בְּעֶ֖צֶב', transliteration: 'bəʿeṣeḇ', lemma: 'עֶצֶב', lemmaTranslit: 'ʿeṣeḇ', gloss: 'in pain', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'absolute', rawCode: 'Ncmsa' }, strongs: 'H6089', position: 6 },
  { id: 'Gen.3.16.7', language: 'hebrew', text: 'תֵּֽלְדִ֣י', transliteration: 'tēləḏî', lemma: 'יָלַד', lemmaTranslit: 'yālaḏ', gloss: 'you shall bear', morphology: { pos: 'verb', person: '2', gender: 'feminine', number: 'singular', tense: 'imperfect', stem: 'qal', rawCode: 'Vqi2fs' }, strongs: 'H3205', position: 7 },
  { id: 'Gen.3.16.8', language: 'hebrew', text: 'בָנִ֑ים', transliteration: 'ḇānîm', lemma: 'בֵּן', lemmaTranslit: 'bēn', gloss: 'children', morphology: { pos: 'noun', gender: 'masculine', number: 'plural', state: 'absolute', rawCode: 'Ncmpa' }, strongs: 'H1121', position: 8 },
  { id: 'Gen.3.16.9', language: 'hebrew', text: 'וְאֶל־אִישֵׁךְ֙', transliteration: 'wəʾel-ʾîšēḵ', lemma: 'אִישׁ', lemmaTranslit: 'ʾîš', gloss: 'and for your husband', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'construct', rawCode: 'Ncmsc' }, strongs: 'H376', position: 9 },
  { id: 'Gen.3.16.10', language: 'hebrew', text: 'תְּשׁ֣וּקָתֵ֔ךְ', transliteration: 'təšûqāṯēḵ', lemma: 'תְּשׁוּקָה', lemmaTranslit: 'təšûqāh', gloss: 'your desire', glossExtended: 'desire, longing', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'construct', rawCode: 'Ncfsc' }, strongs: 'H8669', position: 10 },
  { id: 'Gen.3.16.11', language: 'hebrew', text: 'וְה֖וּא', transliteration: 'wəhûʾ', lemma: 'הוּא', lemmaTranslit: 'hûʾ', gloss: 'and he', morphology: { pos: 'pronoun', person: '3', gender: 'masculine', number: 'singular', rawCode: 'Pp3ms' }, strongs: 'H1931', position: 11 },
  { id: 'Gen.3.16.12', language: 'hebrew', text: 'יִמְשָׁל־', transliteration: 'yimšāl-', lemma: 'מָשַׁל', lemmaTranslit: 'māšal', gloss: 'shall rule', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'imperfect', stem: 'qal', rawCode: 'Vqi3ms' }, strongs: 'H4910', position: 12 },
  { id: 'Gen.3.16.13', language: 'hebrew', text: 'בָּֽךְ', transliteration: 'bāḵ', lemma: 'בְּ', lemmaTranslit: 'bə', gloss: 'over you', morphology: { pos: 'preposition', rawCode: 'R' }, strongs: 'H9003', position: 13 },
];

export const genesis3_16_translation: VerseTranslation = {
  verseRef: 'Gen.3.16',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: { type: 'literal', targetLanguage: 'en', text: 'To the woman he said: Multiplying I will multiply your pain and your conception; in pain you shall bear children. And for your husband your desire, and he shall rule over you.', spans: [{ id: 'Gen.3.16.en.lit.0', text: 'To the woman he said: Multiplying I will multiply...', position: 0, sourceTokenIds: ['Gen.3.16.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
    idiomatic: { type: 'idiomatic', targetLanguage: 'en', text: 'To the woman he said, "I will surely multiply your pain in childbearing; in pain you shall bring forth children. Your desire shall be for your husband, and he shall rule over you."', spans: [{ id: 'Gen.3.16.en.idi.0', text: 'To the woman he said, "I will surely multiply..."', position: 0, sourceTokenIds: ['Gen.3.16.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
  },
  metadata: { pipelineVersion: '0.1.0', generatedAt: new Date().toISOString(), engineId: 'open-bible-pipeline', engineVersion: '0.1.0', sourceDataVersion: '1.0.0' },
};

export const genesis3_16_notes: StudyNote[] = [
  { id: 'Gen.3.16.note.1', verseRef: 'Gen.3.16', sourceTokenIds: ['Gen.3.16.10'], category: 'lexical', title: 'Desire (təšûqāh)', content: 'Same word in Gen 4:7 where sin\'s "desire" is for Cain. May indicate a desire to control/dominate rather than simply affection.', confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
];

// Genesis 3:17 - Curse on the ground because of Adam
export const genesis3_17_tokens: SourceToken[] = [
  { id: 'Gen.3.17.0', language: 'hebrew', text: 'וּלְאָדָ֣ם', transliteration: 'ûləʾāḏām', lemma: 'אָדָם', lemmaTranslit: 'ʾāḏām', gloss: 'And to Adam', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'absolute', rawCode: 'Ncmsa' }, strongs: 'H120', position: 0 },
  { id: 'Gen.3.17.1', language: 'hebrew', text: 'אָמַ֗ר', transliteration: 'ʾāmar', lemma: 'אָמַר', lemmaTranslit: 'ʾāmar', gloss: 'he said', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'perfect', stem: 'qal', rawCode: 'Vqp3ms' }, strongs: 'H559', position: 1 },
  { id: 'Gen.3.17.2', language: 'hebrew', text: 'כִּֽי־שָׁמַעְתָּ֮', transliteration: 'kî-šāmaʿtā', lemma: 'שָׁמַע', lemmaTranslit: 'šāmaʿ', gloss: 'Because you listened', morphology: { pos: 'verb', person: '2', gender: 'masculine', number: 'singular', tense: 'perfect', stem: 'qal', rawCode: 'Vqp2ms' }, strongs: 'H8085', position: 2 },
  { id: 'Gen.3.17.3', language: 'hebrew', text: 'לְק֣וֹל', transliteration: 'ləqôl', lemma: 'קוֹל', lemmaTranslit: 'qôl', gloss: 'to the voice of', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'construct', rawCode: 'Ncmsc' }, strongs: 'H6963', position: 3 },
  { id: 'Gen.3.17.4', language: 'hebrew', text: 'אִשְׁתֶּךָ֒', transliteration: 'ʾištekā', lemma: 'אִשָּׁה', lemmaTranslit: 'ʾiššāh', gloss: 'your wife', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'construct', rawCode: 'Ncfsc' }, strongs: 'H802', position: 4 },
  { id: 'Gen.3.17.5', language: 'hebrew', text: 'וַתֹּ֙אכַל֙', transliteration: 'wattōʾḵal', lemma: 'אָכַל', lemmaTranslit: 'ʾāḵal', gloss: 'and ate', morphology: { pos: 'verb', person: '2', gender: 'masculine', number: 'singular', tense: 'imperfect', stem: 'qal', rawCode: 'Vqw2ms' }, strongs: 'H398', position: 5 },
  { id: 'Gen.3.17.6', language: 'hebrew', text: 'מִן־הָעֵ֔ץ', transliteration: 'min-hāʿēṣ', lemma: 'עֵץ', lemmaTranslit: 'ʿēṣ', gloss: 'from the tree', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'absolute', rawCode: 'Ncmsa' }, strongs: 'H6086', position: 6 },
  { id: 'Gen.3.17.7', language: 'hebrew', text: 'אֲשֶׁ֤ר', transliteration: 'ʾăšer', lemma: 'אֲשֶׁר', lemmaTranslit: 'ʾăšer', gloss: 'of which', morphology: { pos: 'particle', rawCode: 'Tr' }, strongs: 'H834', position: 7 },
  { id: 'Gen.3.17.8', language: 'hebrew', text: 'צִוִּיתִ֙יךָ֙', transliteration: 'ṣiwwîṯîḵā', lemma: 'צָוָה', lemmaTranslit: 'ṣāwāh', gloss: 'I commanded you', morphology: { pos: 'verb', person: '1', gender: 'common', number: 'singular', tense: 'perfect', stem: 'piel', rawCode: 'Vpp1cs' }, strongs: 'H6680', position: 8 },
  { id: 'Gen.3.17.9', language: 'hebrew', text: 'לֵאמֹ֔ר', transliteration: 'lēʾmōr', lemma: 'אָמַר', lemmaTranslit: 'ʾāmar', gloss: 'saying', morphology: { pos: 'verb', mood: 'infinitive', stem: 'qal', rawCode: 'Vqc' }, strongs: 'H559', position: 9 },
  { id: 'Gen.3.17.10', language: 'hebrew', text: 'לֹ֥א', transliteration: 'lōʾ', lemma: 'לֹא', lemmaTranslit: 'lōʾ', gloss: 'not', morphology: { pos: 'adverb', rawCode: 'An' }, strongs: 'H3808', position: 10 },
  { id: 'Gen.3.17.11', language: 'hebrew', text: 'תֹאכַ֖ל', transliteration: 'ṯōʾḵal', lemma: 'אָכַל', lemmaTranslit: 'ʾāḵal', gloss: 'you shall eat', morphology: { pos: 'verb', person: '2', gender: 'masculine', number: 'singular', tense: 'imperfect', stem: 'qal', rawCode: 'Vqi2ms' }, strongs: 'H398', position: 11 },
  { id: 'Gen.3.17.12', language: 'hebrew', text: 'מִמֶּ֑נּוּ', transliteration: 'mimmennû', lemma: 'מִן', lemmaTranslit: 'min', gloss: 'from it', morphology: { pos: 'preposition', rawCode: 'R' }, strongs: 'H4480', position: 12 },
  { id: 'Gen.3.17.13', language: 'hebrew', text: 'אֲרוּרָ֤ה', transliteration: 'ʾărûrāh', lemma: 'אָרַר', lemmaTranslit: 'ʾārar', gloss: 'cursed', morphology: { pos: 'verb', mood: 'participle', stem: 'qal', rawCode: 'Vqpfs' }, strongs: 'H779', position: 13 },
  { id: 'Gen.3.17.14', language: 'hebrew', text: 'הָֽאֲדָמָה֙', transliteration: 'hāʾăḏāmāh', lemma: 'אֲדָמָה', lemmaTranslit: 'ʾăḏāmāh', gloss: 'the ground', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'absolute', rawCode: 'Ncfsa' }, strongs: 'H127', position: 14 },
  { id: 'Gen.3.17.15', language: 'hebrew', text: 'בַּֽעֲבוּרֶ֔ךָ', transliteration: 'baʿăḇûreḵā', lemma: 'עָבוּר', lemmaTranslit: 'ʿāḇûr', gloss: 'because of you', morphology: { pos: 'preposition', rawCode: 'R' }, strongs: 'H5668', position: 15 },
  { id: 'Gen.3.17.16', language: 'hebrew', text: 'בְּעִצָּבוֹן֙', transliteration: 'bəʿiṣṣāḇôn', lemma: 'עִצָּבוֹן', lemmaTranslit: 'ʿiṣṣāḇôn', gloss: 'in pain', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'absolute', rawCode: 'Ncmsa' }, strongs: 'H6093', position: 16 },
  { id: 'Gen.3.17.17', language: 'hebrew', text: 'תֹּֽאכֲלֶ֔נָּה', transliteration: 'tōʾḵălennāh', lemma: 'אָכַל', lemmaTranslit: 'ʾāḵal', gloss: 'you shall eat of it', morphology: { pos: 'verb', person: '2', gender: 'masculine', number: 'singular', tense: 'imperfect', stem: 'qal', rawCode: 'Vqi2ms' }, strongs: 'H398', position: 17 },
  { id: 'Gen.3.17.18', language: 'hebrew', text: 'כֹּ֖ל', transliteration: 'kōl', lemma: 'כֹּל', lemmaTranslit: 'kōl', gloss: 'all', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', rawCode: 'Ncmsc' }, strongs: 'H3605', position: 18 },
  { id: 'Gen.3.17.19', language: 'hebrew', text: 'יְמֵ֥י', transliteration: 'yəmê', lemma: 'יוֹם', lemmaTranslit: 'yôm', gloss: 'the days of', morphology: { pos: 'noun', gender: 'masculine', number: 'plural', state: 'construct', rawCode: 'Ncmpc' }, strongs: 'H3117', position: 19 },
  { id: 'Gen.3.17.20', language: 'hebrew', text: 'חַיֶּֽיךָ', transliteration: 'ḥayyeḵā', lemma: 'חַי', lemmaTranslit: 'ḥay', gloss: 'your life', morphology: { pos: 'noun', gender: 'masculine', number: 'plural', state: 'construct', rawCode: 'Ncmpc' }, strongs: 'H2416', position: 20 },
];

export const genesis3_17_translation: VerseTranslation = {
  verseRef: 'Gen.3.17',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: { type: 'literal', targetLanguage: 'en', text: 'And to Adam he said: Because you listened to the voice of your wife and ate from the tree of which I commanded you saying, Not you shall eat from it: cursed the ground because of you; in pain you shall eat of it all the days of your life.', spans: [{ id: 'Gen.3.17.en.lit.0', text: 'And to Adam he said...', position: 0, sourceTokenIds: ['Gen.3.17.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
    idiomatic: { type: 'idiomatic', targetLanguage: 'en', text: 'And to Adam he said, "Because you have listened to the voice of your wife and have eaten of the tree of which I commanded you, \'You shall not eat of it,\' cursed is the ground because of you; in pain you shall eat of it all the days of your life."', spans: [{ id: 'Gen.3.17.en.idi.0', text: 'And to Adam he said, "Because you have listened..."', position: 0, sourceTokenIds: ['Gen.3.17.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
  },
  metadata: { pipelineVersion: '0.1.0', generatedAt: new Date().toISOString(), engineId: 'open-bible-pipeline', engineVersion: '0.1.0', sourceDataVersion: '1.0.0' },
};

export const genesis3_17_notes: StudyNote[] = [
  { id: 'Gen.3.17.note.1', verseRef: 'Gen.3.17', sourceTokenIds: ['Gen.3.17.13', 'Gen.3.17.14'], category: 'theological', title: 'Ground Cursed', content: 'The ground (ʾăḏāmāh) is cursed because of the man (ʾāḏām). Note the wordplay. Creation suffers due to human sin (Rom 8:20-22).', confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
];

// Genesis 3:18 - Thorns and thistles
export const genesis3_18_tokens: SourceToken[] = [
  { id: 'Gen.3.18.0', language: 'hebrew', text: 'וְק֥וֹץ', transliteration: 'wəqôṣ', lemma: 'קוֹץ', lemmaTranslit: 'qôṣ', gloss: 'And thorns', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'absolute', rawCode: 'Ncmsa' }, strongs: 'H6975', position: 0 },
  { id: 'Gen.3.18.1', language: 'hebrew', text: 'וְדַרְדַּ֖ר', transliteration: 'wəḏardar', lemma: 'דַּרְדַּר', lemmaTranslit: 'dardar', gloss: 'and thistles', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'absolute', rawCode: 'Ncmsa' }, strongs: 'H1863', position: 1 },
  { id: 'Gen.3.18.2', language: 'hebrew', text: 'תַּצְמִ֣יחַֽ', transliteration: 'taṣmîaḥ', lemma: 'צָמַח', lemmaTranslit: 'ṣāmaḥ', gloss: 'it shall bring forth', morphology: { pos: 'verb', person: '3', gender: 'feminine', number: 'singular', tense: 'imperfect', stem: 'hiphil', rawCode: 'Vhi3fs' }, strongs: 'H6779', position: 2 },
  { id: 'Gen.3.18.3', language: 'hebrew', text: 'לָ֑ךְ', transliteration: 'lāḵ', lemma: 'לְ', lemmaTranslit: 'lə', gloss: 'for you', morphology: { pos: 'preposition', rawCode: 'R' }, strongs: 'H9005', position: 3 },
  { id: 'Gen.3.18.4', language: 'hebrew', text: 'וְאָכַלְתָּ֖', transliteration: 'wəʾāḵaltā', lemma: 'אָכַל', lemmaTranslit: 'ʾāḵal', gloss: 'and you shall eat', morphology: { pos: 'verb', person: '2', gender: 'masculine', number: 'singular', tense: 'perfect', stem: 'qal', rawCode: 'Vqp2ms' }, strongs: 'H398', position: 4 },
  { id: 'Gen.3.18.5', language: 'hebrew', text: 'אֶת־עֵ֥שֶׂב', transliteration: 'ʾeṯ-ʿēśeḇ', lemma: 'עֵשֶׂב', lemmaTranslit: 'ʿēśeḇ', gloss: 'the plants of', glossExtended: 'herb, plant, vegetation', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'construct', rawCode: 'Ncmsc' }, strongs: 'H6212', position: 5 },
  { id: 'Gen.3.18.6', language: 'hebrew', text: 'הַשָּׂדֶֽה', transliteration: 'haśśāḏeh', lemma: 'שָׂדֶה', lemmaTranslit: 'śāḏeh', gloss: 'the field', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'absolute', rawCode: 'Ncmsa' }, strongs: 'H7704', position: 6 },
];

export const genesis3_18_translation: VerseTranslation = {
  verseRef: 'Gen.3.18',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: { type: 'literal', targetLanguage: 'en', text: 'And thorns and thistles it shall bring forth for you; and you shall eat the plants of the field.', spans: [{ id: 'Gen.3.18.en.lit.0', text: 'And thorns and thistles it shall bring forth...', position: 0, sourceTokenIds: ['Gen.3.18.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
    idiomatic: { type: 'idiomatic', targetLanguage: 'en', text: '"Thorns and thistles it shall bring forth for you; and you shall eat the plants of the field."', spans: [{ id: 'Gen.3.18.en.idi.0', text: '"Thorns and thistles it shall bring forth..."', position: 0, sourceTokenIds: ['Gen.3.18.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
  },
  metadata: { pipelineVersion: '0.1.0', generatedAt: new Date().toISOString(), engineId: 'open-bible-pipeline', engineVersion: '0.1.0', sourceDataVersion: '1.0.0' },
};

export const genesis3_18_notes: StudyNote[] = [];

// Genesis 3:19 - By the sweat of your face...to dust you shall return
export const genesis3_19_tokens: SourceToken[] = [
  { id: 'Gen.3.19.0', language: 'hebrew', text: 'בְּזֵעַ֤ת', transliteration: 'bəzēʿaṯ', lemma: 'זֵעָה', lemmaTranslit: 'zēʿāh', gloss: 'By the sweat of', glossExtended: 'sweat', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'construct', rawCode: 'Ncfsc' }, strongs: 'H2188', position: 0 },
  { id: 'Gen.3.19.1', language: 'hebrew', text: 'אַפֶּ֙יךָ֙', transliteration: 'ʾappeyḵā', lemma: 'אַף', lemmaTranslit: 'ʾap̄', gloss: 'your face', glossExtended: 'face, nose', morphology: { pos: 'noun', gender: 'masculine', number: 'dual', state: 'construct', rawCode: 'Ncmdc' }, strongs: 'H639', position: 1 },
  { id: 'Gen.3.19.2', language: 'hebrew', text: 'תֹּ֣אכַל', transliteration: 'tōʾḵal', lemma: 'אָכַל', lemmaTranslit: 'ʾāḵal', gloss: 'you shall eat', morphology: { pos: 'verb', person: '2', gender: 'masculine', number: 'singular', tense: 'imperfect', stem: 'qal', rawCode: 'Vqi2ms' }, strongs: 'H398', position: 2 },
  { id: 'Gen.3.19.3', language: 'hebrew', text: 'לֶ֔חֶם', transliteration: 'leḥem', lemma: 'לֶחֶם', lemmaTranslit: 'leḥem', gloss: 'bread', glossExtended: 'bread, food', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'absolute', rawCode: 'Ncmsa' }, strongs: 'H3899', position: 3 },
  { id: 'Gen.3.19.4', language: 'hebrew', text: 'עַ֤ד', transliteration: 'ʿaḏ', lemma: 'עַד', lemmaTranslit: 'ʿaḏ', gloss: 'until', morphology: { pos: 'preposition', rawCode: 'R' }, strongs: 'H5704', position: 4 },
  { id: 'Gen.3.19.5', language: 'hebrew', text: 'שֽׁוּבְךָ֙', transliteration: 'šûḇəḵā', lemma: 'שׁוּב', lemmaTranslit: 'šûḇ', gloss: 'your return', morphology: { pos: 'verb', mood: 'infinitive', stem: 'qal', rawCode: 'Vqc' }, strongs: 'H7725', position: 5 },
  { id: 'Gen.3.19.6', language: 'hebrew', text: 'אֶל־הָ֣אֲדָמָ֔ה', transliteration: 'ʾel-hāʾăḏāmāh', lemma: 'אֲדָמָה', lemmaTranslit: 'ʾăḏāmāh', gloss: 'to the ground', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'absolute', rawCode: 'Ncfsa' }, strongs: 'H127', position: 6 },
  { id: 'Gen.3.19.7', language: 'hebrew', text: 'כִּ֥י', transliteration: 'kî', lemma: 'כִּי', lemmaTranslit: 'kî', gloss: 'for', morphology: { pos: 'conjunction', rawCode: 'Cc' }, strongs: 'H3588', position: 7 },
  { id: 'Gen.3.19.8', language: 'hebrew', text: 'מִמֶּ֖נָּה', transliteration: 'mimmennāh', lemma: 'מִן', lemmaTranslit: 'min', gloss: 'from it', morphology: { pos: 'preposition', rawCode: 'R' }, strongs: 'H4480', position: 8 },
  { id: 'Gen.3.19.9', language: 'hebrew', text: 'לֻקָּ֑חְתָּ', transliteration: 'luqqāḥtā', lemma: 'לָקַח', lemmaTranslit: 'lāqaḥ', gloss: 'you were taken', morphology: { pos: 'verb', person: '2', gender: 'masculine', number: 'singular', tense: 'perfect', stem: 'pual', rawCode: 'Vpp2ms' }, strongs: 'H3947', position: 9 },
  { id: 'Gen.3.19.10', language: 'hebrew', text: 'כִּֽי־עָפָ֣ר', transliteration: 'kî-ʿāp̄ār', lemma: 'עָפָר', lemmaTranslit: 'ʿāp̄ār', gloss: 'for dust', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'absolute', rawCode: 'Ncmsa' }, strongs: 'H6083', position: 10 },
  { id: 'Gen.3.19.11', language: 'hebrew', text: 'אַ֔תָּה', transliteration: 'ʾattāh', lemma: 'אַתָּה', lemmaTranslit: 'ʾattāh', gloss: 'you are', morphology: { pos: 'pronoun', person: '2', gender: 'masculine', number: 'singular', rawCode: 'Pp2ms' }, strongs: 'H859', position: 11 },
  { id: 'Gen.3.19.12', language: 'hebrew', text: 'וְאֶל־עָפָ֖ר', transliteration: 'wəʾel-ʿāp̄ār', lemma: 'עָפָר', lemmaTranslit: 'ʿāp̄ār', gloss: 'and to dust', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'absolute', rawCode: 'Ncmsa' }, strongs: 'H6083', position: 12 },
  { id: 'Gen.3.19.13', language: 'hebrew', text: 'תָּשֽׁוּב', transliteration: 'tāšûḇ', lemma: 'שׁוּב', lemmaTranslit: 'šûḇ', gloss: 'you shall return', morphology: { pos: 'verb', person: '2', gender: 'masculine', number: 'singular', tense: 'imperfect', stem: 'qal', rawCode: 'Vqi2ms' }, strongs: 'H7725', position: 13 },
];

export const genesis3_19_translation: VerseTranslation = {
  verseRef: 'Gen.3.19',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: { type: 'literal', targetLanguage: 'en', text: 'By the sweat of your face you shall eat bread until your return to the ground, for from it you were taken; for dust you are and to dust you shall return.', spans: [{ id: 'Gen.3.19.en.lit.0', text: 'By the sweat of your face...', position: 0, sourceTokenIds: ['Gen.3.19.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
    idiomatic: { type: 'idiomatic', targetLanguage: 'en', text: '"By the sweat of your face you shall eat bread, till you return to the ground, for out of it you were taken; for you are dust, and to dust you shall return."', spans: [{ id: 'Gen.3.19.en.idi.0', text: '"By the sweat of your face..."', position: 0, sourceTokenIds: ['Gen.3.19.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
  },
  metadata: { pipelineVersion: '0.1.0', generatedAt: new Date().toISOString(), engineId: 'open-bible-pipeline', engineVersion: '0.1.0', sourceDataVersion: '1.0.0' },
};

export const genesis3_19_notes: StudyNote[] = [
  { id: 'Gen.3.19.note.1', verseRef: 'Gen.3.19', sourceTokenIds: ['Gen.3.19.10', 'Gen.3.19.12', 'Gen.3.19.13'], category: 'theological', title: 'Dust to Dust', content: 'Death is the ultimate consequence of sin: from dust, to dust. This phrase is echoed in Ecclesiastes 3:20 and 12:7, and in funeral liturgies.', confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
];

// Export verse structures
export const genesis3_14_verse = { ref: 'Gen.3.14', sourceTokens: genesis3_14_tokens, translation: genesis3_14_translation, notes: genesis3_14_notes };
export const genesis3_15_verse = { ref: 'Gen.3.15', sourceTokens: genesis3_15_tokens, translation: genesis3_15_translation, notes: genesis3_15_notes };
export const genesis3_16_verse = { ref: 'Gen.3.16', sourceTokens: genesis3_16_tokens, translation: genesis3_16_translation, notes: genesis3_16_notes };
export const genesis3_17_verse = { ref: 'Gen.3.17', sourceTokens: genesis3_17_tokens, translation: genesis3_17_translation, notes: genesis3_17_notes };
export const genesis3_18_verse = { ref: 'Gen.3.18', sourceTokens: genesis3_18_tokens, translation: genesis3_18_translation, notes: genesis3_18_notes };
export const genesis3_19_verse = { ref: 'Gen.3.19', sourceTokens: genesis3_19_tokens, translation: genesis3_19_translation, notes: genesis3_19_notes };

// Combined export
export const genesis3_14_19_verses = [
  genesis3_14_verse,
  genesis3_15_verse,
  genesis3_16_verse,
  genesis3_17_verse,
  genesis3_18_verse,
  genesis3_19_verse,
];

export default genesis3_14_19_verses;
