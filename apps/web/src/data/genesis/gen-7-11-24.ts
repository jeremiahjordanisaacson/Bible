/**
 * Genesis 7:11-24 - Hebrew morphological data
 * The flood begins and prevails on the earth
 * Source: Open Hebrew Bible (Tanach.us) - Public Domain
 */

import type { SourceToken, VerseTranslation, StudyNote } from '@open-bible/schemas';

// Genesis 7:11 - The fountains of the great deep burst forth
export const genesis7_11_tokens: SourceToken[] = [
  { id: 'Gen.7.11.0', language: 'hebrew', text: 'בִּשְׁנַ֨ת', transliteration: 'bišnaṯ', lemma: 'שָׁנָה', lemmaTranslit: 'šānāh', gloss: 'In the year', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'construct', rawCode: 'Ncfsc' }, strongs: 'H8141', position: 0 },
  { id: 'Gen.7.11.1', language: 'hebrew', text: 'שֵׁשׁ־מֵא֤וֹת', transliteration: 'šēš-mēʾôṯ', lemma: 'מֵאָה', lemmaTranslit: 'mēʾāh', gloss: 'six hundred', morphology: { pos: 'numeral', gender: 'feminine', number: 'plural', state: 'absolute', rawCode: 'Acfpa' }, strongs: 'H3967', position: 1 },
  { id: 'Gen.7.11.2', language: 'hebrew', text: 'שָׁנָה֙', transliteration: 'šānāh', lemma: 'שָׁנָה', lemmaTranslit: 'šānāh', gloss: 'year', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'absolute', rawCode: 'Ncfsa' }, strongs: 'H8141', position: 2 },
  { id: 'Gen.7.11.3', language: 'hebrew', text: 'לְחַיֵּי־נֹ֔חַ', transliteration: 'ləḥayyê-nōaḥ', lemma: 'חַי', lemmaTranslit: 'ḥay', gloss: 'of Noah\'s life', morphology: { pos: 'noun', gender: 'masculine', number: 'plural', state: 'construct', rawCode: 'Ncmpc' }, strongs: 'H2416', position: 3 },
  { id: 'Gen.7.11.4', language: 'hebrew', text: 'בַּחֹ֙דֶשׁ֙', transliteration: 'baḥōḏeš', lemma: 'חֹדֶשׁ', lemmaTranslit: 'ḥōḏeš', gloss: 'in the month', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'absolute', rawCode: 'Ncmsa' }, strongs: 'H2320', position: 4 },
  { id: 'Gen.7.11.5', language: 'hebrew', text: 'הַשֵּׁנִ֔י', transliteration: 'haššēnî', lemma: 'שֵׁנִי', lemmaTranslit: 'šēnî', gloss: 'the second', morphology: { pos: 'adjective', gender: 'masculine', number: 'singular', state: 'absolute', rawCode: 'Aomsa' }, strongs: 'H8145', position: 5 },
  { id: 'Gen.7.11.6', language: 'hebrew', text: 'בְּשִׁבְעָֽה־עָשָׂ֥ר', transliteration: 'bəšiḇʿāh-ʿāśār', lemma: 'שֶׁבַע', lemmaTranslit: 'šeḇaʿ', gloss: 'on the seventeenth', morphology: { pos: 'numeral', rawCode: 'Acmsa' }, strongs: 'H7651', position: 6 },
  { id: 'Gen.7.11.7', language: 'hebrew', text: 'י֖וֹם', transliteration: 'yôm', lemma: 'יוֹם', lemmaTranslit: 'yôm', gloss: 'day', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'absolute', rawCode: 'Ncmsa' }, strongs: 'H3117', position: 7 },
  { id: 'Gen.7.11.8', language: 'hebrew', text: 'לַחֹ֑דֶשׁ', transliteration: 'laḥōḏeš', lemma: 'חֹדֶשׁ', lemmaTranslit: 'ḥōḏeš', gloss: 'of the month', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'absolute', rawCode: 'Ncmsa' }, strongs: 'H2320', position: 8 },
  { id: 'Gen.7.11.9', language: 'hebrew', text: 'בַּיּ֣וֹם', transliteration: 'bayyôm', lemma: 'יוֹם', lemmaTranslit: 'yôm', gloss: 'on this day', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'absolute', rawCode: 'Ncmsa' }, strongs: 'H3117', position: 9 },
  { id: 'Gen.7.11.10', language: 'hebrew', text: 'הַזֶּ֗ה', transliteration: 'hazzeh', lemma: 'זֶה', lemmaTranslit: 'zeh', gloss: 'this', morphology: { pos: 'pronoun', rawCode: 'Pdxms' }, strongs: 'H2088', position: 10 },
  { id: 'Gen.7.11.11', language: 'hebrew', text: 'נִבְקְע֛וּ', transliteration: 'niḇqəʿû', lemma: 'בָּקַע', lemmaTranslit: 'bāqaʿ', gloss: 'burst open', morphology: { pos: 'verb', person: '3', gender: 'common', number: 'plural', tense: 'perfect', stem: 'niphal', rawCode: 'Vnp3cp' }, strongs: 'H1234', position: 11 },
  { id: 'Gen.7.11.12', language: 'hebrew', text: 'כָּל־מַעְיְנֹת֙', transliteration: 'kāl-maʿyənōṯ', lemma: 'מַעְיָן', lemmaTranslit: 'maʿyān', gloss: 'all the fountains of', morphology: { pos: 'noun', gender: 'masculine', number: 'plural', state: 'construct', rawCode: 'Ncmpc' }, strongs: 'H4599', position: 12 },
  { id: 'Gen.7.11.13', language: 'hebrew', text: 'תְּה֣וֹם', transliteration: 'təhôm', lemma: 'תְּהוֹם', lemmaTranslit: 'təhôm', gloss: 'the great deep', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'absolute', rawCode: 'Ncfsa' }, strongs: 'H8415', position: 13 },
  { id: 'Gen.7.11.14', language: 'hebrew', text: 'רַבָּ֔ה', transliteration: 'rabbāh', lemma: 'רַב', lemmaTranslit: 'raḇ', gloss: 'great', morphology: { pos: 'adjective', gender: 'feminine', number: 'singular', state: 'absolute', rawCode: 'Ajfsa' }, strongs: 'H7227', position: 14 },
  { id: 'Gen.7.11.15', language: 'hebrew', text: 'וַאֲרֻבֹּ֥ת', transliteration: 'waʾărubbōṯ', lemma: 'אֲרֻבָּה', lemmaTranslit: 'ʾărubbāh', gloss: 'and the windows of', glossExtended: 'floodgates, lattices', morphology: { pos: 'noun', gender: 'feminine', number: 'plural', state: 'construct', rawCode: 'Ncfpc' }, strongs: 'H699', position: 15 },
  { id: 'Gen.7.11.16', language: 'hebrew', text: 'הַשָּׁמַ֖יִם', transliteration: 'haššāmayim', lemma: 'שָׁמַיִם', lemmaTranslit: 'šāmayim', gloss: 'the heavens', morphology: { pos: 'noun', gender: 'masculine', number: 'plural', state: 'absolute', rawCode: 'Ncmpa' }, strongs: 'H8064', position: 16 },
  { id: 'Gen.7.11.17', language: 'hebrew', text: 'נִפְתָּֽחוּ', transliteration: 'nip̄tāḥû', lemma: 'פָּתַח', lemmaTranslit: 'pāṯaḥ', gloss: 'were opened', morphology: { pos: 'verb', person: '3', gender: 'common', number: 'plural', tense: 'perfect', stem: 'niphal', rawCode: 'Vnp3cp' }, strongs: 'H6605', position: 17 },
];

export const genesis7_11_translation: VerseTranslation = {
  verseRef: 'Gen.7.11',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: { type: 'literal', targetLanguage: 'en', text: 'In the year of six hundred years of the life of Noah, in the second month, on the seventeenth day of the month, on this day burst open all the fountains of the great deep, and the windows of the heavens were opened.', spans: [{ id: 'Gen.7.11.en.lit.0', text: 'In the year of six hundred years...', position: 0, sourceTokenIds: ['Gen.7.11.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
    idiomatic: { type: 'idiomatic', targetLanguage: 'en', text: 'In the six hundredth year of Noah\'s life, in the second month, on the seventeenth day of the month, on that day all the fountains of the great deep burst forth, and the windows of the heavens were opened.', spans: [{ id: 'Gen.7.11.en.idi.0', text: 'In the six hundredth year of Noah\'s life...', position: 0, sourceTokenIds: ['Gen.7.11.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
  },
  metadata: { pipelineVersion: '0.1.0', generatedAt: new Date().toISOString(), engineId: 'open-bible-pipeline', engineVersion: '0.1.0', sourceDataVersion: '1.0.0' },
};

export const genesis7_11_notes: StudyNote[] = [
  { id: 'Gen.7.11.note.1', verseRef: 'Gen.7.11', sourceTokenIds: ['Gen.7.11.12', 'Gen.7.11.13'], category: 'lexical', title: 'Fountains of the Great Deep', content: 'Maʿyənōṯ təhôm rabbāh (מַעְיְנֹת תְּהוֹם רַבָּה) refers to subterranean waters. The təhôm recalls Genesis 1:2—the primordial deep. The flood is a reversal of creation as the waters below and above are released.', confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
  { id: 'Gen.7.11.note.2', verseRef: 'Gen.7.11', sourceTokenIds: ['Gen.7.11.15', 'Gen.7.11.16'], category: 'cross-reference', title: 'Windows of Heaven', content: 'The ʾărubbōṯ haššāmayim (אֲרֻבֹּת הַשָּׁמַיִם) are the "floodgates" or "lattices" of heaven. In Genesis 1:6-7, God separated waters above and below with the "firmament." Now both sources are unleashed.', confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
  { id: 'Gen.7.11.note.3', verseRef: 'Gen.7.11', sourceTokenIds: ['Gen.7.11.4', 'Gen.7.11.5', 'Gen.7.11.6'], category: 'interpretive', title: 'Second Month, Seventeenth Day', content: 'The precise dating emphasizes historical reality. In the later Jewish calendar, this would be around October-November (Marcheshvan). The ark landed on the 17th of the seventh month (8:4)—exactly five months later.', confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
];

// Genesis 7:12 - Rain fell for forty days and nights
export const genesis7_12_tokens: SourceToken[] = [
  { id: 'Gen.7.12.0', language: 'hebrew', text: 'וַֽיְהִ֥י', transliteration: 'wayəhî', lemma: 'הָיָה', lemmaTranslit: 'hāyāh', gloss: 'And was', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'imperfect', stem: 'qal', rawCode: 'Vqw3ms' }, strongs: 'H1961', position: 0 },
  { id: 'Gen.7.12.1', language: 'hebrew', text: 'הַגֶּ֖שֶׁם', transliteration: 'haggešem', lemma: 'גֶּשֶׁם', lemmaTranslit: 'gešem', gloss: 'the rain', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'absolute', rawCode: 'Ncmsa' }, strongs: 'H1653', position: 1 },
  { id: 'Gen.7.12.2', language: 'hebrew', text: 'עַל־הָאָ֑רֶץ', transliteration: 'ʿal-hāʾāreṣ', lemma: 'אֶרֶץ', lemmaTranslit: 'ʾereṣ', gloss: 'on the earth', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'absolute', rawCode: 'Ncfsa' }, strongs: 'H776', position: 2 },
  { id: 'Gen.7.12.3', language: 'hebrew', text: 'אַרְבָּעִ֣ים', transliteration: 'ʾarbaʿîm', lemma: 'אַרְבָּעִים', lemmaTranslit: 'ʾarbaʿîm', gloss: 'forty', morphology: { pos: 'numeral', rawCode: 'Acmpa' }, strongs: 'H705', position: 3 },
  { id: 'Gen.7.12.4', language: 'hebrew', text: 'י֔וֹם', transliteration: 'yôm', lemma: 'יוֹם', lemmaTranslit: 'yôm', gloss: 'days', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'absolute', rawCode: 'Ncmsa' }, strongs: 'H3117', position: 4 },
  { id: 'Gen.7.12.5', language: 'hebrew', text: 'וְאַרְבָּעִ֖ים', transliteration: 'wəʾarbaʿîm', lemma: 'אַרְבָּעִים', lemmaTranslit: 'ʾarbaʿîm', gloss: 'and forty', morphology: { pos: 'numeral', rawCode: 'Acmpa' }, strongs: 'H705', position: 5 },
  { id: 'Gen.7.12.6', language: 'hebrew', text: 'לָֽיְלָה', transliteration: 'lāyəlāh', lemma: 'לַיְלָה', lemmaTranslit: 'laylāh', gloss: 'nights', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'absolute', rawCode: 'Ncmsa' }, strongs: 'H3915', position: 6 },
];

export const genesis7_12_translation: VerseTranslation = {
  verseRef: 'Gen.7.12',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: { type: 'literal', targetLanguage: 'en', text: 'And was the rain on the earth forty days and forty nights.', spans: [{ id: 'Gen.7.12.en.lit.0', text: 'And was the rain on the earth...', position: 0, sourceTokenIds: ['Gen.7.12.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
    idiomatic: { type: 'idiomatic', targetLanguage: 'en', text: 'And rain fell upon the earth forty days and forty nights.', spans: [{ id: 'Gen.7.12.en.idi.0', text: 'And rain fell upon the earth...', position: 0, sourceTokenIds: ['Gen.7.12.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
  },
  metadata: { pipelineVersion: '0.1.0', generatedAt: new Date().toISOString(), engineId: 'open-bible-pipeline', engineVersion: '0.1.0', sourceDataVersion: '1.0.0' },
};

export const genesis7_12_notes: StudyNote[] = [];

// Genesis 7:13 - On this very day Noah entered
export const genesis7_13_tokens: SourceToken[] = [
  { id: 'Gen.7.13.0', language: 'hebrew', text: 'בְּעֶ֨צֶם', transliteration: 'bəʿeṣem', lemma: 'עֶצֶם', lemmaTranslit: 'ʿeṣem', gloss: 'On the very', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'construct', rawCode: 'Ncfsc' }, strongs: 'H6106', position: 0 },
  { id: 'Gen.7.13.1', language: 'hebrew', text: 'הַיּ֣וֹם', transliteration: 'hayyôm', lemma: 'יוֹם', lemmaTranslit: 'yôm', gloss: 'day', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'absolute', rawCode: 'Ncmsa' }, strongs: 'H3117', position: 1 },
  { id: 'Gen.7.13.2', language: 'hebrew', text: 'הַזֶּ֗ה', transliteration: 'hazzeh', lemma: 'זֶה', lemmaTranslit: 'zeh', gloss: 'this', morphology: { pos: 'pronoun', rawCode: 'Pdxms' }, strongs: 'H2088', position: 2 },
  { id: 'Gen.7.13.3', language: 'hebrew', text: 'בָּ֣א', transliteration: 'bāʾ', lemma: 'בּוֹא', lemmaTranslit: 'bôʾ', gloss: 'entered', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'perfect', stem: 'qal', rawCode: 'Vqp3ms' }, strongs: 'H935', position: 3 },
  { id: 'Gen.7.13.4', language: 'hebrew', text: 'נֹ֡חַ', transliteration: 'nōaḥ', lemma: 'נֹחַ', lemmaTranslit: 'nōaḥ', gloss: 'Noah', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H5146', position: 4 },
  { id: 'Gen.7.13.5', language: 'hebrew', text: 'וְשֵׁם־וְחָם־וָיֶ֜פֶת', transliteration: 'wəšēm-wəḥām-wāyep̄eṯ', lemma: 'שֵׁם', lemmaTranslit: 'šēm', gloss: 'and Shem and Ham and Japheth', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H8035', position: 5 },
  { id: 'Gen.7.13.6', language: 'hebrew', text: 'בְּנֵי־נֹ֗חַ', transliteration: 'bənê-nōaḥ', lemma: 'בֵּן', lemmaTranslit: 'bēn', gloss: 'the sons of Noah', morphology: { pos: 'noun', gender: 'masculine', number: 'plural', state: 'construct', rawCode: 'Ncmpc' }, strongs: 'H1121', position: 6 },
  { id: 'Gen.7.13.7', language: 'hebrew', text: 'וְאֵ֤שֶׁת', transliteration: 'wəʾēšeṯ', lemma: 'אִשָּׁה', lemmaTranslit: 'ʾiššāh', gloss: 'and the wife of', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'construct', rawCode: 'Ncfsc' }, strongs: 'H802', position: 7 },
  { id: 'Gen.7.13.8', language: 'hebrew', text: 'נֹ֙חַ֙', transliteration: 'nōaḥ', lemma: 'נֹחַ', lemmaTranslit: 'nōaḥ', gloss: 'Noah', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H5146', position: 8 },
  { id: 'Gen.7.13.9', language: 'hebrew', text: 'וּשְׁלֹ֣שֶׁת', transliteration: 'ûšəlōšeṯ', lemma: 'שָׁלֹשׁ', lemmaTranslit: 'šālōš', gloss: 'and the three', morphology: { pos: 'numeral', rawCode: 'Acfsc' }, strongs: 'H7969', position: 9 },
  { id: 'Gen.7.13.10', language: 'hebrew', text: 'נְשֵׁי־בָנָ֔יו', transliteration: 'nəšê-ḇānāyw', lemma: 'אִשָּׁה', lemmaTranslit: 'ʾiššāh', gloss: 'wives of his sons', morphology: { pos: 'noun', gender: 'feminine', number: 'plural', state: 'construct', rawCode: 'Ncfpc' }, strongs: 'H802', position: 10 },
  { id: 'Gen.7.13.11', language: 'hebrew', text: 'אִתָּ֖ם', transliteration: 'ʾittām', lemma: 'אֵת', lemmaTranslit: 'ʾēṯ', gloss: 'with them', morphology: { pos: 'preposition', rawCode: 'R' }, strongs: 'H854', position: 11 },
  { id: 'Gen.7.13.12', language: 'hebrew', text: 'אֶל־הַתֵּבָֽה', transliteration: 'ʾel-hattēḇāh', lemma: 'תֵּבָה', lemmaTranslit: 'tēḇāh', gloss: 'into the ark', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'absolute', rawCode: 'Ncfsa' }, strongs: 'H8392', position: 12 },
];

export const genesis7_13_translation: VerseTranslation = {
  verseRef: 'Gen.7.13',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: { type: 'literal', targetLanguage: 'en', text: 'On the very day this, entered Noah and Shem and Ham and Japheth the sons of Noah, and the wife of Noah, and the three wives of his sons with them, into the ark.', spans: [{ id: 'Gen.7.13.en.lit.0', text: 'On the very day this...', position: 0, sourceTokenIds: ['Gen.7.13.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
    idiomatic: { type: 'idiomatic', targetLanguage: 'en', text: 'On the very same day Noah and his sons, Shem and Ham and Japheth, and Noah\'s wife and the three wives of his sons with them entered the ark,', spans: [{ id: 'Gen.7.13.en.idi.0', text: 'On the very same day Noah and his sons...', position: 0, sourceTokenIds: ['Gen.7.13.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
  },
  metadata: { pipelineVersion: '0.1.0', generatedAt: new Date().toISOString(), engineId: 'open-bible-pipeline', engineVersion: '0.1.0', sourceDataVersion: '1.0.0' },
};

export const genesis7_13_notes: StudyNote[] = [
  { id: 'Gen.7.13.note.1', verseRef: 'Gen.7.13', sourceTokenIds: ['Gen.7.13.0', 'Gen.7.13.1'], category: 'lexical', title: 'On the Very Day', content: 'The phrase bəʿeṣem hayyôm hazzeh (בְּעֶצֶם הַיּוֹם הַזֶּה, "on the bone/essence of this day") emphasizes exact timing. It appears at critical moments: circumcision (17:23), leaving Egypt (Exod 12:41), Day of Atonement (Lev 23:29).', confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
];

// Genesis 7:14 - Every beast and creature according to its kind
export const genesis7_14_tokens: SourceToken[] = [
  { id: 'Gen.7.14.0', language: 'hebrew', text: 'הֵ֜מָּה', transliteration: 'hēmmāh', lemma: 'הוּא', lemmaTranslit: 'hûʾ', gloss: 'they', morphology: { pos: 'pronoun', person: '3', gender: 'masculine', number: 'plural', rawCode: 'Pp3mp' }, strongs: 'H1992', position: 0 },
  { id: 'Gen.7.14.1', language: 'hebrew', text: 'וְכָל־הַחַיָּ֣ה', transliteration: 'wəḵāl-haḥayyāh', lemma: 'חַיָּה', lemmaTranslit: 'ḥayyāh', gloss: 'and every beast', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'absolute', rawCode: 'Ncfsa' }, strongs: 'H2416', position: 1 },
  { id: 'Gen.7.14.2', language: 'hebrew', text: 'לְמִינָ֗הּ', transliteration: 'ləmînāh', lemma: 'מִין', lemmaTranslit: 'mîn', gloss: 'according to its kind', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'construct', rawCode: 'Ncmsc' }, strongs: 'H4327', position: 2 },
  { id: 'Gen.7.14.3', language: 'hebrew', text: 'וְכָל־הַבְּהֵמָה֙', transliteration: 'wəḵāl-habbəhēmāh', lemma: 'בְּהֵמָה', lemmaTranslit: 'bəhēmāh', gloss: 'and every animal', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'absolute', rawCode: 'Ncfsa' }, strongs: 'H929', position: 3 },
  { id: 'Gen.7.14.4', language: 'hebrew', text: 'לְמִינָ֔הּ', transliteration: 'ləmînāh', lemma: 'מִין', lemmaTranslit: 'mîn', gloss: 'according to its kind', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'construct', rawCode: 'Ncmsc' }, strongs: 'H4327', position: 4 },
  { id: 'Gen.7.14.5', language: 'hebrew', text: 'וְכָל־הָרֶ֛מֶשׂ', transliteration: 'wəḵāl-hāremeś', lemma: 'רֶמֶשׂ', lemmaTranslit: 'remeś', gloss: 'and every creeping thing', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'absolute', rawCode: 'Ncmsa' }, strongs: 'H7431', position: 5 },
  { id: 'Gen.7.14.6', language: 'hebrew', text: 'הָרֹמֵ֥שׂ', transliteration: 'hārōmēś', lemma: 'רָמַשׂ', lemmaTranslit: 'rāmaś', gloss: 'that creeps', morphology: { pos: 'verb', gender: 'masculine', number: 'singular', stem: 'qal', mood: 'participle', rawCode: 'Vqpms' }, strongs: 'H7430', position: 6 },
  { id: 'Gen.7.14.7', language: 'hebrew', text: 'עַל־הָאָ֖רֶץ', transliteration: 'ʿal-hāʾāreṣ', lemma: 'אֶרֶץ', lemmaTranslit: 'ʾereṣ', gloss: 'on the earth', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'absolute', rawCode: 'Ncfsa' }, strongs: 'H776', position: 7 },
  { id: 'Gen.7.14.8', language: 'hebrew', text: 'לְמִינֵ֑הוּ', transliteration: 'ləmînēhû', lemma: 'מִין', lemmaTranslit: 'mîn', gloss: 'according to its kind', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'construct', rawCode: 'Ncmsc' }, strongs: 'H4327', position: 8 },
  { id: 'Gen.7.14.9', language: 'hebrew', text: 'וְכָל־הָע֣וֹף', transliteration: 'wəḵāl-hāʿôp̄', lemma: 'עוֹף', lemmaTranslit: 'ʿôp̄', gloss: 'and every bird', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'absolute', rawCode: 'Ncmsa' }, strongs: 'H5775', position: 9 },
  { id: 'Gen.7.14.10', language: 'hebrew', text: 'לְמִינֵ֔הוּ', transliteration: 'ləmînēhû', lemma: 'מִין', lemmaTranslit: 'mîn', gloss: 'according to its kind', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'construct', rawCode: 'Ncmsc' }, strongs: 'H4327', position: 10 },
  { id: 'Gen.7.14.11', language: 'hebrew', text: 'כֹּ֖ל', transliteration: 'kōl', lemma: 'כֹּל', lemmaTranslit: 'kōl', gloss: 'every', morphology: { pos: 'noun', rawCode: 'Ncmsa' }, strongs: 'H3605', position: 11 },
  { id: 'Gen.7.14.12', language: 'hebrew', text: 'צִפּ֥וֹר', transliteration: 'ṣippôr', lemma: 'צִפּוֹר', lemmaTranslit: 'ṣippôr', gloss: 'bird', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'absolute', rawCode: 'Ncfsa' }, strongs: 'H6833', position: 12 },
  { id: 'Gen.7.14.13', language: 'hebrew', text: 'כָּל־כָּנָֽף', transliteration: 'kāl-kānāp̄', lemma: 'כָּנָף', lemmaTranslit: 'kānāp̄', gloss: 'every winged creature', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'absolute', rawCode: 'Ncfsa' }, strongs: 'H3671', position: 13 },
];

export const genesis7_14_translation: VerseTranslation = {
  verseRef: 'Gen.7.14',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: { type: 'literal', targetLanguage: 'en', text: 'they and every beast according to its kind, and every animal according to its kind, and every creeping thing that creeps on the earth according to its kind, and every bird according to its kind, every bird of every wing.', spans: [{ id: 'Gen.7.14.en.lit.0', text: 'they and every beast...', position: 0, sourceTokenIds: ['Gen.7.14.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
    idiomatic: { type: 'idiomatic', targetLanguage: 'en', text: 'they and every beast, according to its kind, and all the livestock according to their kinds, and every creeping thing that creeps on the earth, according to its kind, and every bird, according to its kind, every winged creature.', spans: [{ id: 'Gen.7.14.en.idi.0', text: 'they and every beast...', position: 0, sourceTokenIds: ['Gen.7.14.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
  },
  metadata: { pipelineVersion: '0.1.0', generatedAt: new Date().toISOString(), engineId: 'open-bible-pipeline', engineVersion: '0.1.0', sourceDataVersion: '1.0.0' },
};

export const genesis7_14_notes: StudyNote[] = [];

// Genesis 7:15-16 - Two of every flesh with breath of life
export const genesis7_15_tokens: SourceToken[] = [
  { id: 'Gen.7.15.0', language: 'hebrew', text: 'וַיָּבֹ֥אוּ', transliteration: 'wayyāḇōʾû', lemma: 'בּוֹא', lemmaTranslit: 'bôʾ', gloss: 'And came', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'plural', tense: 'imperfect', stem: 'qal', rawCode: 'Vqw3mp' }, strongs: 'H935', position: 0 },
  { id: 'Gen.7.15.1', language: 'hebrew', text: 'אֶל־נֹ֖חַ', transliteration: 'ʾel-nōaḥ', lemma: 'נֹחַ', lemmaTranslit: 'nōaḥ', gloss: 'to Noah', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H5146', position: 1 },
  { id: 'Gen.7.15.2', language: 'hebrew', text: 'אֶל־הַתֵּבָ֑ה', transliteration: 'ʾel-hattēḇāh', lemma: 'תֵּבָה', lemmaTranslit: 'tēḇāh', gloss: 'into the ark', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'absolute', rawCode: 'Ncfsa' }, strongs: 'H8392', position: 2 },
  { id: 'Gen.7.15.3', language: 'hebrew', text: 'שְׁנַ֤יִם', transliteration: 'šənayim', lemma: 'שְׁנַיִם', lemmaTranslit: 'šənayim', gloss: 'two', morphology: { pos: 'numeral', gender: 'masculine', number: 'dual', rawCode: 'Acmda' }, strongs: 'H8147', position: 3 },
  { id: 'Gen.7.15.4', language: 'hebrew', text: 'שְׁנַ֙יִם֙', transliteration: 'šənayim', lemma: 'שְׁנַיִם', lemmaTranslit: 'šənayim', gloss: 'two', morphology: { pos: 'numeral', gender: 'masculine', number: 'dual', rawCode: 'Acmda' }, strongs: 'H8147', position: 4 },
  { id: 'Gen.7.15.5', language: 'hebrew', text: 'מִכָּל־הַבָּשָׂ֔ר', transliteration: 'mikkāl-habbāśār', lemma: 'בָּשָׂר', lemmaTranslit: 'bāśār', gloss: 'from all flesh', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'absolute', rawCode: 'Ncmsa' }, strongs: 'H1320', position: 5 },
  { id: 'Gen.7.15.6', language: 'hebrew', text: 'אֲשֶׁר־בּ֖וֹ', transliteration: 'ʾăšer-bô', lemma: 'אֲשֶׁר', lemmaTranslit: 'ʾăšer', gloss: 'in which', morphology: { pos: 'particle', rawCode: 'Tr' }, strongs: 'H834', position: 6 },
  { id: 'Gen.7.15.7', language: 'hebrew', text: 'ר֥וּחַ', transliteration: 'rûaḥ', lemma: 'רוּחַ', lemmaTranslit: 'rûaḥ', gloss: 'breath of', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'construct', rawCode: 'Ncfsc' }, strongs: 'H7307', position: 7 },
  { id: 'Gen.7.15.8', language: 'hebrew', text: 'חַיִּֽים', transliteration: 'ḥayyîm', lemma: 'חַי', lemmaTranslit: 'ḥay', gloss: 'life', morphology: { pos: 'adjective', gender: 'masculine', number: 'plural', state: 'absolute', rawCode: 'Ajmpa' }, strongs: 'H2416', position: 8 },
];

export const genesis7_15_translation: VerseTranslation = {
  verseRef: 'Gen.7.15',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: { type: 'literal', targetLanguage: 'en', text: 'And came to Noah into the ark, two two from all flesh in which is the breath of life.', spans: [{ id: 'Gen.7.15.en.lit.0', text: 'And came to Noah into the ark...', position: 0, sourceTokenIds: ['Gen.7.15.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
    idiomatic: { type: 'idiomatic', targetLanguage: 'en', text: 'They went into the ark with Noah, two and two of all flesh in which there was the breath of life.', spans: [{ id: 'Gen.7.15.en.idi.0', text: 'They went into the ark with Noah...', position: 0, sourceTokenIds: ['Gen.7.15.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
  },
  metadata: { pipelineVersion: '0.1.0', generatedAt: new Date().toISOString(), engineId: 'open-bible-pipeline', engineVersion: '0.1.0', sourceDataVersion: '1.0.0' },
};

export const genesis7_15_notes: StudyNote[] = [];

// Genesis 7:16 - The LORD shut him in
export const genesis7_16_tokens: SourceToken[] = [
  { id: 'Gen.7.16.0', language: 'hebrew', text: 'וְהַבָּאִ֗ים', transliteration: 'wəhabbāʾîm', lemma: 'בּוֹא', lemmaTranslit: 'bôʾ', gloss: 'And those entering', morphology: { pos: 'verb', gender: 'masculine', number: 'plural', stem: 'qal', mood: 'participle', rawCode: 'Vqpmp' }, strongs: 'H935', position: 0 },
  { id: 'Gen.7.16.1', language: 'hebrew', text: 'זָכָ֨ר', transliteration: 'zāḵār', lemma: 'זָכָר', lemmaTranslit: 'zāḵār', gloss: 'male', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'absolute', rawCode: 'Ncmsa' }, strongs: 'H2145', position: 1 },
  { id: 'Gen.7.16.2', language: 'hebrew', text: 'וּנְקֵבָ֤ה', transliteration: 'ûnəqēḇāh', lemma: 'נְקֵבָה', lemmaTranslit: 'nəqēḇāh', gloss: 'and female', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'absolute', rawCode: 'Ncfsa' }, strongs: 'H5347', position: 2 },
  { id: 'Gen.7.16.3', language: 'hebrew', text: 'מִכָּל־בָּשָׂר֙', transliteration: 'mikkāl-bāśār', lemma: 'בָּשָׂר', lemmaTranslit: 'bāśār', gloss: 'from all flesh', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'absolute', rawCode: 'Ncmsa' }, strongs: 'H1320', position: 3 },
  { id: 'Gen.7.16.4', language: 'hebrew', text: 'בָּ֔אוּ', transliteration: 'bāʾû', lemma: 'בּוֹא', lemmaTranslit: 'bôʾ', gloss: 'came', morphology: { pos: 'verb', person: '3', gender: 'common', number: 'plural', tense: 'perfect', stem: 'qal', rawCode: 'Vqp3cp' }, strongs: 'H935', position: 4 },
  { id: 'Gen.7.16.5', language: 'hebrew', text: 'כַּֽאֲשֶׁ֛ר', transliteration: 'kaʾăšer', lemma: 'אֲשֶׁר', lemmaTranslit: 'ʾăšer', gloss: 'as', morphology: { pos: 'particle', rawCode: 'Tr' }, strongs: 'H834', position: 5 },
  { id: 'Gen.7.16.6', language: 'hebrew', text: 'צִוָּ֥ה', transliteration: 'ṣiwwāh', lemma: 'צָוָה', lemmaTranslit: 'ṣāwāh', gloss: 'commanded', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'perfect', stem: 'piel', rawCode: 'Vpp3ms' }, strongs: 'H6680', position: 6 },
  { id: 'Gen.7.16.7', language: 'hebrew', text: 'אֹת֖וֹ', transliteration: 'ʾōṯô', lemma: 'אֵת', lemmaTranslit: 'ʾēṯ', gloss: 'him', morphology: { pos: 'preposition', rawCode: 'To' }, strongs: 'H853', position: 7 },
  { id: 'Gen.7.16.8', language: 'hebrew', text: 'אֱלֹהִ֑ים', transliteration: 'ʾĕlōhîm', lemma: 'אֱלֹהִים', lemmaTranslit: 'ʾĕlōhîm', gloss: 'God', morphology: { pos: 'noun', gender: 'masculine', number: 'plural', state: 'absolute', rawCode: 'Ncmpa' }, strongs: 'H430', position: 8 },
  { id: 'Gen.7.16.9', language: 'hebrew', text: 'וַיִּסְגֹּ֥ר', transliteration: 'wayyisggōr', lemma: 'סָגַר', lemmaTranslit: 'sāḡar', gloss: 'and shut', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'imperfect', stem: 'qal', rawCode: 'Vqw3ms' }, strongs: 'H5462', position: 9 },
  { id: 'Gen.7.16.10', language: 'hebrew', text: 'יְהוָ֖ה', transliteration: 'YHWH', lemma: 'יהוה', lemmaTranslit: 'YHWH', gloss: 'the LORD', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H3068', position: 10 },
  { id: 'Gen.7.16.11', language: 'hebrew', text: 'בַּֽעֲדֽוֹ', transliteration: 'baʿăḏô', lemma: 'בַּעַד', lemmaTranslit: 'baʿaḏ', gloss: 'behind him', morphology: { pos: 'preposition', rawCode: 'R' }, strongs: 'H1157', position: 11 },
];

export const genesis7_16_translation: VerseTranslation = {
  verseRef: 'Gen.7.16',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: { type: 'literal', targetLanguage: 'en', text: 'And those entering, male and female from all flesh, came as God had commanded him. And shut the LORD behind him.', spans: [{ id: 'Gen.7.16.en.lit.0', text: 'And those entering, male and female...', position: 0, sourceTokenIds: ['Gen.7.16.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
    idiomatic: { type: 'idiomatic', targetLanguage: 'en', text: 'And those that entered, male and female of all flesh, went in as God had commanded him. And the LORD shut him in.', spans: [{ id: 'Gen.7.16.en.idi.0', text: 'And those that entered, male and female...', position: 0, sourceTokenIds: ['Gen.7.16.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
  },
  metadata: { pipelineVersion: '0.1.0', generatedAt: new Date().toISOString(), engineId: 'open-bible-pipeline', engineVersion: '0.1.0', sourceDataVersion: '1.0.0' },
};

export const genesis7_16_notes: StudyNote[] = [
  { id: 'Gen.7.16.note.1', verseRef: 'Gen.7.16', sourceTokenIds: ['Gen.7.16.9', 'Gen.7.16.10'], category: 'theological', title: 'The LORD Shut Him In', content: 'YHWH personally closed the door—a profound act of divine protection and sealing. Noah couldn\'t save himself; God had to shut him in. This divine action secured the ark against the flood and pictures God\'s sovereign protection of His own.', confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
  { id: 'Gen.7.16.note.2', verseRef: 'Gen.7.16', sourceTokenIds: ['Gen.7.16.8', 'Gen.7.16.10'], category: 'interpretive', title: 'Elohim and YHWH', content: 'Note the switch: "as God (Elohim) commanded" but "the LORD (YHWH) shut him in." Elohim gave the instructions; YHWH—the covenant God—personally sealed His servant in safety. Both names are used of the same God with different emphases.', confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
];

// Genesis 7:17 - The flood was forty days
export const genesis7_17_tokens: SourceToken[] = [
  { id: 'Gen.7.17.0', language: 'hebrew', text: 'וַֽיְהִ֧י', transliteration: 'wayəhî', lemma: 'הָיָה', lemmaTranslit: 'hāyāh', gloss: 'And was', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'imperfect', stem: 'qal', rawCode: 'Vqw3ms' }, strongs: 'H1961', position: 0 },
  { id: 'Gen.7.17.1', language: 'hebrew', text: 'הַמַּבּ֛וּל', transliteration: 'hammabbûl', lemma: 'מַבּוּל', lemmaTranslit: 'mabbûl', gloss: 'the flood', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'absolute', rawCode: 'Ncmsa' }, strongs: 'H3999', position: 1 },
  { id: 'Gen.7.17.2', language: 'hebrew', text: 'אַרְבָּעִ֥ים', transliteration: 'ʾarbaʿîm', lemma: 'אַרְבָּעִים', lemmaTranslit: 'ʾarbaʿîm', gloss: 'forty', morphology: { pos: 'numeral', rawCode: 'Acmpa' }, strongs: 'H705', position: 2 },
  { id: 'Gen.7.17.3', language: 'hebrew', text: 'י֖וֹם', transliteration: 'yôm', lemma: 'יוֹם', lemmaTranslit: 'yôm', gloss: 'days', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'absolute', rawCode: 'Ncmsa' }, strongs: 'H3117', position: 3 },
  { id: 'Gen.7.17.4', language: 'hebrew', text: 'עַל־הָאָ֑רֶץ', transliteration: 'ʿal-hāʾāreṣ', lemma: 'אֶרֶץ', lemmaTranslit: 'ʾereṣ', gloss: 'on the earth', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'absolute', rawCode: 'Ncfsa' }, strongs: 'H776', position: 4 },
  { id: 'Gen.7.17.5', language: 'hebrew', text: 'וַיִּרְבּ֣וּ', transliteration: 'wayyirbbû', lemma: 'רָבָה', lemmaTranslit: 'rāḇāh', gloss: 'and increased', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'plural', tense: 'imperfect', stem: 'qal', rawCode: 'Vqw3mp' }, strongs: 'H7235', position: 5 },
  { id: 'Gen.7.17.6', language: 'hebrew', text: 'הַמַּ֗יִם', transliteration: 'hammayim', lemma: 'מַיִם', lemmaTranslit: 'mayim', gloss: 'the waters', morphology: { pos: 'noun', gender: 'masculine', number: 'plural', state: 'absolute', rawCode: 'Ncmpa' }, strongs: 'H4325', position: 6 },
  { id: 'Gen.7.17.7', language: 'hebrew', text: 'וַיִּשְׂא֛וּ', transliteration: 'wayyiśʾû', lemma: 'נָשָׂא', lemmaTranslit: 'nāśāʾ', gloss: 'and lifted up', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'plural', tense: 'imperfect', stem: 'qal', rawCode: 'Vqw3mp' }, strongs: 'H5375', position: 7 },
  { id: 'Gen.7.17.8', language: 'hebrew', text: 'אֶת־הַתֵּבָ֖ה', transliteration: 'ʾeṯ-hattēḇāh', lemma: 'תֵּבָה', lemmaTranslit: 'tēḇāh', gloss: 'the ark', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'absolute', rawCode: 'Ncfsa' }, strongs: 'H8392', position: 8 },
  { id: 'Gen.7.17.9', language: 'hebrew', text: 'וַתָּ֥רָם', transliteration: 'wattārām', lemma: 'רוּם', lemmaTranslit: 'rûm', gloss: 'and it rose', morphology: { pos: 'verb', person: '3', gender: 'feminine', number: 'singular', tense: 'imperfect', stem: 'qal', rawCode: 'Vqw3fs' }, strongs: 'H7311', position: 9 },
  { id: 'Gen.7.17.10', language: 'hebrew', text: 'מֵעַ֖ל', transliteration: 'mēʿal', lemma: 'עַל', lemmaTranslit: 'ʿal', gloss: 'above', morphology: { pos: 'preposition', rawCode: 'R' }, strongs: 'H5921', position: 10 },
  { id: 'Gen.7.17.11', language: 'hebrew', text: 'הָאָֽרֶץ', transliteration: 'hāʾāreṣ', lemma: 'אֶרֶץ', lemmaTranslit: 'ʾereṣ', gloss: 'the earth', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'absolute', rawCode: 'Ncfsa' }, strongs: 'H776', position: 11 },
];

export const genesis7_17_translation: VerseTranslation = {
  verseRef: 'Gen.7.17',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: { type: 'literal', targetLanguage: 'en', text: 'And was the flood forty days on the earth, and increased the waters and lifted up the ark, and it rose above the earth.', spans: [{ id: 'Gen.7.17.en.lit.0', text: 'And was the flood forty days...', position: 0, sourceTokenIds: ['Gen.7.17.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
    idiomatic: { type: 'idiomatic', targetLanguage: 'en', text: 'The flood continued forty days on the earth. The waters increased and bore up the ark, and it rose high above the earth.', spans: [{ id: 'Gen.7.17.en.idi.0', text: 'The flood continued forty days...', position: 0, sourceTokenIds: ['Gen.7.17.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
  },
  metadata: { pipelineVersion: '0.1.0', generatedAt: new Date().toISOString(), engineId: 'open-bible-pipeline', engineVersion: '0.1.0', sourceDataVersion: '1.0.0' },
};

export const genesis7_17_notes: StudyNote[] = [];

// Genesis 7:18-24 - Waters prevailed and covered the mountains
export const genesis7_18_tokens: SourceToken[] = [
  { id: 'Gen.7.18.0', language: 'hebrew', text: 'וַיִּגְבְּר֥וּ', transliteration: 'wayyigbərû', lemma: 'גָּבַר', lemmaTranslit: 'gāḇar', gloss: 'And prevailed', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'plural', tense: 'imperfect', stem: 'qal', rawCode: 'Vqw3mp' }, strongs: 'H1396', position: 0 },
  { id: 'Gen.7.18.1', language: 'hebrew', text: 'הַמַּ֖יִם', transliteration: 'hammayim', lemma: 'מַיִם', lemmaTranslit: 'mayim', gloss: 'the waters', morphology: { pos: 'noun', gender: 'masculine', number: 'plural', state: 'absolute', rawCode: 'Ncmpa' }, strongs: 'H4325', position: 1 },
  { id: 'Gen.7.18.2', language: 'hebrew', text: 'וַיִּרְבּ֣וּ', transliteration: 'wayyirbbû', lemma: 'רָבָה', lemmaTranslit: 'rāḇāh', gloss: 'and increased', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'plural', tense: 'imperfect', stem: 'qal', rawCode: 'Vqw3mp' }, strongs: 'H7235', position: 2 },
  { id: 'Gen.7.18.3', language: 'hebrew', text: 'מְאֹ֑ד', transliteration: 'məʾōḏ', lemma: 'מְאֹד', lemmaTranslit: 'məʾōḏ', gloss: 'greatly', morphology: { pos: 'adverb', rawCode: 'D' }, strongs: 'H3966', position: 3 },
  { id: 'Gen.7.18.4', language: 'hebrew', text: 'עַל־הָאָ֔רֶץ', transliteration: 'ʿal-hāʾāreṣ', lemma: 'אֶרֶץ', lemmaTranslit: 'ʾereṣ', gloss: 'on the earth', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'absolute', rawCode: 'Ncfsa' }, strongs: 'H776', position: 4 },
  { id: 'Gen.7.18.5', language: 'hebrew', text: 'וַתֵּ֥לֶךְ', transliteration: 'wattēleḵ', lemma: 'הָלַךְ', lemmaTranslit: 'hālaḵ', gloss: 'and moved', morphology: { pos: 'verb', person: '3', gender: 'feminine', number: 'singular', tense: 'imperfect', stem: 'qal', rawCode: 'Vqw3fs' }, strongs: 'H1980', position: 5 },
  { id: 'Gen.7.18.6', language: 'hebrew', text: 'הַתֵּבָ֖ה', transliteration: 'hattēḇāh', lemma: 'תֵּבָה', lemmaTranslit: 'tēḇāh', gloss: 'the ark', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'absolute', rawCode: 'Ncfsa' }, strongs: 'H8392', position: 6 },
  { id: 'Gen.7.18.7', language: 'hebrew', text: 'עַל־פְּנֵ֥י', transliteration: 'ʿal-pənê', lemma: 'פָּנִים', lemmaTranslit: 'pānîm', gloss: 'on the face of', morphology: { pos: 'noun', gender: 'masculine', number: 'plural', state: 'construct', rawCode: 'Ncmpc' }, strongs: 'H6440', position: 7 },
  { id: 'Gen.7.18.8', language: 'hebrew', text: 'הַמָּֽיִם', transliteration: 'hammāyim', lemma: 'מַיִם', lemmaTranslit: 'mayim', gloss: 'the waters', morphology: { pos: 'noun', gender: 'masculine', number: 'plural', state: 'absolute', rawCode: 'Ncmpa' }, strongs: 'H4325', position: 8 },
];

export const genesis7_18_translation: VerseTranslation = {
  verseRef: 'Gen.7.18',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: { type: 'literal', targetLanguage: 'en', text: 'And prevailed the waters and increased greatly on the earth, and moved the ark on the face of the waters.', spans: [{ id: 'Gen.7.18.en.lit.0', text: 'And prevailed the waters...', position: 0, sourceTokenIds: ['Gen.7.18.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
    idiomatic: { type: 'idiomatic', targetLanguage: 'en', text: 'The waters prevailed and increased greatly on the earth, and the ark floated on the face of the waters.', spans: [{ id: 'Gen.7.18.en.idi.0', text: 'The waters prevailed and increased greatly...', position: 0, sourceTokenIds: ['Gen.7.18.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
  },
  metadata: { pipelineVersion: '0.1.0', generatedAt: new Date().toISOString(), engineId: 'open-bible-pipeline', engineVersion: '0.1.0', sourceDataVersion: '1.0.0' },
};

export const genesis7_18_notes: StudyNote[] = [];

// Genesis 7:19-20 - Waters covered the mountains
export const genesis7_19_tokens: SourceToken[] = [
  { id: 'Gen.7.19.0', language: 'hebrew', text: 'וְהַמַּ֗יִם', transliteration: 'wəhammayim', lemma: 'מַיִם', lemmaTranslit: 'mayim', gloss: 'And the waters', morphology: { pos: 'noun', gender: 'masculine', number: 'plural', state: 'absolute', rawCode: 'Ncmpa' }, strongs: 'H4325', position: 0 },
  { id: 'Gen.7.19.1', language: 'hebrew', text: 'גָּבְר֥וּ', transliteration: 'gāḇərû', lemma: 'גָּבַר', lemmaTranslit: 'gāḇar', gloss: 'prevailed', morphology: { pos: 'verb', person: '3', gender: 'common', number: 'plural', tense: 'perfect', stem: 'qal', rawCode: 'Vqp3cp' }, strongs: 'H1396', position: 1 },
  { id: 'Gen.7.19.2', language: 'hebrew', text: 'מְאֹד֙', transliteration: 'məʾōḏ', lemma: 'מְאֹד', lemmaTranslit: 'məʾōḏ', gloss: 'exceedingly', morphology: { pos: 'adverb', rawCode: 'D' }, strongs: 'H3966', position: 2 },
  { id: 'Gen.7.19.3', language: 'hebrew', text: 'מְאֹ֔ד', transliteration: 'məʾōḏ', lemma: 'מְאֹד', lemmaTranslit: 'məʾōḏ', gloss: 'exceedingly', morphology: { pos: 'adverb', rawCode: 'D' }, strongs: 'H3966', position: 3 },
  { id: 'Gen.7.19.4', language: 'hebrew', text: 'עַל־הָאָ֑רֶץ', transliteration: 'ʿal-hāʾāreṣ', lemma: 'אֶרֶץ', lemmaTranslit: 'ʾereṣ', gloss: 'on the earth', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'absolute', rawCode: 'Ncfsa' }, strongs: 'H776', position: 4 },
  { id: 'Gen.7.19.5', language: 'hebrew', text: 'וַיְכֻסּ֗וּ', transliteration: 'wayəḵussû', lemma: 'כָּסָה', lemmaTranslit: 'kāsāh', gloss: 'and were covered', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'plural', tense: 'imperfect', stem: 'pual', rawCode: 'Vpw3mp' }, strongs: 'H3680', position: 5 },
  { id: 'Gen.7.19.6', language: 'hebrew', text: 'כָּל־הֶהָרִים֙', transliteration: 'kāl-hehārîm', lemma: 'הַר', lemmaTranslit: 'har', gloss: 'all the mountains', morphology: { pos: 'noun', gender: 'masculine', number: 'plural', state: 'absolute', rawCode: 'Ncmpa' }, strongs: 'H2022', position: 6 },
  { id: 'Gen.7.19.7', language: 'hebrew', text: 'הַגְּבֹהִ֔ים', transliteration: 'haggəḇōhîm', lemma: 'גָּבֹהַּ', lemmaTranslit: 'gāḇōah', gloss: 'the high', morphology: { pos: 'adjective', gender: 'masculine', number: 'plural', state: 'absolute', rawCode: 'Ajmpa' }, strongs: 'H1364', position: 7 },
  { id: 'Gen.7.19.8', language: 'hebrew', text: 'אֲשֶׁר־תַּ֖חַת', transliteration: 'ʾăšer-taḥaṯ', lemma: 'תַּחַת', lemmaTranslit: 'taḥaṯ', gloss: 'that are under', morphology: { pos: 'preposition', rawCode: 'R' }, strongs: 'H8478', position: 8 },
  { id: 'Gen.7.19.9', language: 'hebrew', text: 'כָּל־הַשָּׁמָֽיִם', transliteration: 'kāl-haššāmāyim', lemma: 'שָׁמַיִם', lemmaTranslit: 'šāmayim', gloss: 'all the heavens', morphology: { pos: 'noun', gender: 'masculine', number: 'plural', state: 'absolute', rawCode: 'Ncmpa' }, strongs: 'H8064', position: 9 },
];

export const genesis7_19_translation: VerseTranslation = {
  verseRef: 'Gen.7.19',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: { type: 'literal', targetLanguage: 'en', text: 'And the waters prevailed exceedingly exceedingly on the earth, and were covered all the high mountains that are under all the heavens.', spans: [{ id: 'Gen.7.19.en.lit.0', text: 'And the waters prevailed exceedingly...', position: 0, sourceTokenIds: ['Gen.7.19.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
    idiomatic: { type: 'idiomatic', targetLanguage: 'en', text: 'And the waters prevailed so mightily on the earth that all the high mountains under the whole heaven were covered.', spans: [{ id: 'Gen.7.19.en.idi.0', text: 'And the waters prevailed so mightily...', position: 0, sourceTokenIds: ['Gen.7.19.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
  },
  metadata: { pipelineVersion: '0.1.0', generatedAt: new Date().toISOString(), engineId: 'open-bible-pipeline', engineVersion: '0.1.0', sourceDataVersion: '1.0.0' },
};

export const genesis7_19_notes: StudyNote[] = [
  { id: 'Gen.7.19.note.1', verseRef: 'Gen.7.19', sourceTokenIds: ['Gen.7.19.6', 'Gen.7.19.7', 'Gen.7.19.8', 'Gen.7.19.9'], category: 'interpretive', title: 'All the High Mountains Under Heaven', content: 'The language emphasizes universality: "all" the high mountains "under all the heavens." This indicates a global, not merely local, flood. The entire visible earth was submerged.', confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
];

export const genesis7_20_tokens: SourceToken[] = [
  { id: 'Gen.7.20.0', language: 'hebrew', text: 'חֲמֵ֨שׁ', transliteration: 'ḥămēš', lemma: 'חָמֵשׁ', lemmaTranslit: 'ḥāmēš', gloss: 'Fifteen', morphology: { pos: 'numeral', rawCode: 'Acfsa' }, strongs: 'H2568', position: 0 },
  { id: 'Gen.7.20.1', language: 'hebrew', text: 'עֶשְׂרֵ֤ה', transliteration: 'ʿeśrēh', lemma: 'עָשָׂר', lemmaTranslit: 'ʿāśār', gloss: 'ten', morphology: { pos: 'numeral', rawCode: 'Acfsa' }, strongs: 'H6240', position: 1 },
  { id: 'Gen.7.20.2', language: 'hebrew', text: 'אַמָּה֙', transliteration: 'ʾammāh', lemma: 'אַמָּה', lemmaTranslit: 'ʾammāh', gloss: 'cubits', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'absolute', rawCode: 'Ncfsa' }, strongs: 'H520', position: 2 },
  { id: 'Gen.7.20.3', language: 'hebrew', text: 'מִלְמַ֔עְלָה', transliteration: 'milmaʿlāh', lemma: 'מַעַל', lemmaTranslit: 'maʿal', gloss: 'upward', morphology: { pos: 'noun', rawCode: 'Ncmsa' }, strongs: 'H4605', position: 3 },
  { id: 'Gen.7.20.4', language: 'hebrew', text: 'גָּבְר֖וּ', transliteration: 'gāḇərû', lemma: 'גָּבַר', lemmaTranslit: 'gāḇar', gloss: 'prevailed', morphology: { pos: 'verb', person: '3', gender: 'common', number: 'plural', tense: 'perfect', stem: 'qal', rawCode: 'Vqp3cp' }, strongs: 'H1396', position: 4 },
  { id: 'Gen.7.20.5', language: 'hebrew', text: 'הַמָּ֑יִם', transliteration: 'hammāyim', lemma: 'מַיִם', lemmaTranslit: 'mayim', gloss: 'the waters', morphology: { pos: 'noun', gender: 'masculine', number: 'plural', state: 'absolute', rawCode: 'Ncmpa' }, strongs: 'H4325', position: 5 },
  { id: 'Gen.7.20.6', language: 'hebrew', text: 'וַיְכֻסּ֖וּ', transliteration: 'wayəḵussû', lemma: 'כָּסָה', lemmaTranslit: 'kāsāh', gloss: 'and were covered', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'plural', tense: 'imperfect', stem: 'pual', rawCode: 'Vpw3mp' }, strongs: 'H3680', position: 6 },
  { id: 'Gen.7.20.7', language: 'hebrew', text: 'הֶהָרִֽים', transliteration: 'hehārîm', lemma: 'הַר', lemmaTranslit: 'har', gloss: 'the mountains', morphology: { pos: 'noun', gender: 'masculine', number: 'plural', state: 'absolute', rawCode: 'Ncmpa' }, strongs: 'H2022', position: 7 },
];

export const genesis7_20_translation: VerseTranslation = {
  verseRef: 'Gen.7.20',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: { type: 'literal', targetLanguage: 'en', text: 'Fifteen cubits upward prevailed the waters, and were covered the mountains.', spans: [{ id: 'Gen.7.20.en.lit.0', text: 'Fifteen cubits upward...', position: 0, sourceTokenIds: ['Gen.7.20.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
    idiomatic: { type: 'idiomatic', targetLanguage: 'en', text: 'The waters prevailed above the mountains, covering them fifteen cubits deep.', spans: [{ id: 'Gen.7.20.en.idi.0', text: 'The waters prevailed above the mountains...', position: 0, sourceTokenIds: ['Gen.7.20.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
  },
  metadata: { pipelineVersion: '0.1.0', generatedAt: new Date().toISOString(), engineId: 'open-bible-pipeline', engineVersion: '0.1.0', sourceDataVersion: '1.0.0' },
};

export const genesis7_20_notes: StudyNote[] = [
  { id: 'Gen.7.20.note.1', verseRef: 'Gen.7.20', sourceTokenIds: ['Gen.7.20.0', 'Gen.7.20.1', 'Gen.7.20.2'], category: 'interpretive', title: 'Fifteen Cubits', content: 'Fifteen cubits (about 22 feet / 6.7 meters) above the mountains. The ark\'s draft (depth below waterline) was likely about 15 cubits (half its 30-cubit height when fully loaded). This clearance ensured the ark wouldn\'t ground on any mountain peak.', confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
];

// Genesis 7:21-24 - All flesh died
export const genesis7_21_tokens: SourceToken[] = [
  { id: 'Gen.7.21.0', language: 'hebrew', text: 'וַיִּגְוַ֞ע', transliteration: 'wayyiḡwaʿ', lemma: 'גָּוַע', lemmaTranslit: 'gāwaʿ', gloss: 'And perished', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'imperfect', stem: 'qal', rawCode: 'Vqw3ms' }, strongs: 'H1478', position: 0 },
  { id: 'Gen.7.21.1', language: 'hebrew', text: 'כָּל־בָּשָׂ֣ר', transliteration: 'kāl-bāśār', lemma: 'בָּשָׂר', lemmaTranslit: 'bāśār', gloss: 'all flesh', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'absolute', rawCode: 'Ncmsa' }, strongs: 'H1320', position: 1 },
  { id: 'Gen.7.21.2', language: 'hebrew', text: 'הָרֹמֵ֣שׂ', transliteration: 'hārōmēś', lemma: 'רָמַשׂ', lemmaTranslit: 'rāmaś', gloss: 'that creeps', morphology: { pos: 'verb', gender: 'masculine', number: 'singular', stem: 'qal', mood: 'participle', rawCode: 'Vqpms' }, strongs: 'H7430', position: 2 },
  { id: 'Gen.7.21.3', language: 'hebrew', text: 'עַל־הָאָ֗רֶץ', transliteration: 'ʿal-hāʾāreṣ', lemma: 'אֶרֶץ', lemmaTranslit: 'ʾereṣ', gloss: 'on the earth', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'absolute', rawCode: 'Ncfsa' }, strongs: 'H776', position: 3 },
  { id: 'Gen.7.21.4', language: 'hebrew', text: 'בָּע֤וֹף', transliteration: 'bāʿôp̄', lemma: 'עוֹף', lemmaTranslit: 'ʿôp̄', gloss: 'among birds', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'absolute', rawCode: 'Ncmsa' }, strongs: 'H5775', position: 4 },
  { id: 'Gen.7.21.5', language: 'hebrew', text: 'וּבַבְּהֵמָה֙', transliteration: 'ûḇabbəhēmāh', lemma: 'בְּהֵמָה', lemmaTranslit: 'bəhēmāh', gloss: 'and among animals', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'absolute', rawCode: 'Ncfsa' }, strongs: 'H929', position: 5 },
  { id: 'Gen.7.21.6', language: 'hebrew', text: 'וּבַ֣חַיָּ֔ה', transliteration: 'ûḇaḥayyāh', lemma: 'חַיָּה', lemmaTranslit: 'ḥayyāh', gloss: 'and among beasts', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'absolute', rawCode: 'Ncfsa' }, strongs: 'H2416', position: 6 },
  { id: 'Gen.7.21.7', language: 'hebrew', text: 'וּבְכָל־הַשֶּׁ֖רֶץ', transliteration: 'ûḇəḵāl-haššereṣ', lemma: 'שֶׁרֶץ', lemmaTranslit: 'šereṣ', gloss: 'and among all swarming things', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'absolute', rawCode: 'Ncmsa' }, strongs: 'H8318', position: 7 },
  { id: 'Gen.7.21.8', language: 'hebrew', text: 'הַשֹּׁרֵ֣ץ', transliteration: 'haššōrēṣ', lemma: 'שָׁרַץ', lemmaTranslit: 'šāraṣ', gloss: 'that swarms', morphology: { pos: 'verb', gender: 'masculine', number: 'singular', stem: 'qal', mood: 'participle', rawCode: 'Vqpms' }, strongs: 'H8317', position: 8 },
  { id: 'Gen.7.21.9', language: 'hebrew', text: 'עַל־הָאָ֑רֶץ', transliteration: 'ʿal-hāʾāreṣ', lemma: 'אֶרֶץ', lemmaTranslit: 'ʾereṣ', gloss: 'on the earth', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'absolute', rawCode: 'Ncfsa' }, strongs: 'H776', position: 9 },
  { id: 'Gen.7.21.10', language: 'hebrew', text: 'וְכֹ֖ל', transliteration: 'wəḵōl', lemma: 'כֹּל', lemmaTranslit: 'kōl', gloss: 'and all', morphology: { pos: 'noun', rawCode: 'Ncmsa' }, strongs: 'H3605', position: 10 },
  { id: 'Gen.7.21.11', language: 'hebrew', text: 'הָאָדָֽם', transliteration: 'hāʾāḏām', lemma: 'אָדָם', lemmaTranslit: 'ʾāḏām', gloss: 'mankind', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'absolute', rawCode: 'Ncmsa' }, strongs: 'H120', position: 11 },
];

export const genesis7_21_translation: VerseTranslation = {
  verseRef: 'Gen.7.21',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: { type: 'literal', targetLanguage: 'en', text: 'And perished all flesh that creeps on the earth, among birds and among animals and among beasts and among all swarming things that swarm on the earth, and all mankind.', spans: [{ id: 'Gen.7.21.en.lit.0', text: 'And perished all flesh...', position: 0, sourceTokenIds: ['Gen.7.21.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
    idiomatic: { type: 'idiomatic', targetLanguage: 'en', text: 'And all flesh died that moved on the earth, birds, livestock, beasts, all swarming creatures that swarm on the earth, and all mankind.', spans: [{ id: 'Gen.7.21.en.idi.0', text: 'And all flesh died that moved...', position: 0, sourceTokenIds: ['Gen.7.21.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
  },
  metadata: { pipelineVersion: '0.1.0', generatedAt: new Date().toISOString(), engineId: 'open-bible-pipeline', engineVersion: '0.1.0', sourceDataVersion: '1.0.0' },
};

export const genesis7_21_notes: StudyNote[] = [];

export const genesis7_22_tokens: SourceToken[] = [
  { id: 'Gen.7.22.0', language: 'hebrew', text: 'כֹּ֡ל', transliteration: 'kōl', lemma: 'כֹּל', lemmaTranslit: 'kōl', gloss: 'All', morphology: { pos: 'noun', rawCode: 'Ncmsa' }, strongs: 'H3605', position: 0 },
  { id: 'Gen.7.22.1', language: 'hebrew', text: 'אֲשֶׁר֩', transliteration: 'ʾăšer', lemma: 'אֲשֶׁר', lemmaTranslit: 'ʾăšer', gloss: 'that', morphology: { pos: 'particle', rawCode: 'Tr' }, strongs: 'H834', position: 1 },
  { id: 'Gen.7.22.2', language: 'hebrew', text: 'נִשְׁמַת־ר֨וּחַ', transliteration: 'nišmaṯ-rûaḥ', lemma: 'נְשָׁמָה', lemmaTranslit: 'nəšāmāh', gloss: 'breath of spirit', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'construct', rawCode: 'Ncfsc' }, strongs: 'H5397', position: 2 },
  { id: 'Gen.7.22.3', language: 'hebrew', text: 'חַיִּ֜ים', transliteration: 'ḥayyîm', lemma: 'חַי', lemmaTranslit: 'ḥay', gloss: 'of life', morphology: { pos: 'adjective', gender: 'masculine', number: 'plural', state: 'absolute', rawCode: 'Ajmpa' }, strongs: 'H2416', position: 3 },
  { id: 'Gen.7.22.4', language: 'hebrew', text: 'בְּאַפָּ֗יו', transliteration: 'bəʾappāyw', lemma: 'אַף', lemmaTranslit: 'ʾap̄', gloss: 'in its nostrils', morphology: { pos: 'noun', gender: 'masculine', number: 'dual', state: 'construct', rawCode: 'Ncmdc' }, strongs: 'H639', position: 4 },
  { id: 'Gen.7.22.5', language: 'hebrew', text: 'מִכֹּ֛ל', transliteration: 'mikkōl', lemma: 'כֹּל', lemmaTranslit: 'kōl', gloss: 'from all', morphology: { pos: 'noun', rawCode: 'Ncmsa' }, strongs: 'H3605', position: 5 },
  { id: 'Gen.7.22.6', language: 'hebrew', text: 'אֲשֶׁ֥ר', transliteration: 'ʾăšer', lemma: 'אֲשֶׁר', lemmaTranslit: 'ʾăšer', gloss: 'that was', morphology: { pos: 'particle', rawCode: 'Tr' }, strongs: 'H834', position: 6 },
  { id: 'Gen.7.22.7', language: 'hebrew', text: 'בֶּחָרָבָ֖ה', transliteration: 'beḥārāḇāh', lemma: 'חָרָבָה', lemmaTranslit: 'ḥārāḇāh', gloss: 'on dry land', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'absolute', rawCode: 'Ncfsa' }, strongs: 'H2724', position: 7 },
  { id: 'Gen.7.22.8', language: 'hebrew', text: 'מֵֽתוּ', transliteration: 'mēṯû', lemma: 'מוּת', lemmaTranslit: 'mûṯ', gloss: 'died', morphology: { pos: 'verb', person: '3', gender: 'common', number: 'plural', tense: 'perfect', stem: 'qal', rawCode: 'Vqp3cp' }, strongs: 'H4191', position: 8 },
];

export const genesis7_22_translation: VerseTranslation = {
  verseRef: 'Gen.7.22',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: { type: 'literal', targetLanguage: 'en', text: 'All that had the breath of the spirit of life in its nostrils, from all that was on dry land, died.', spans: [{ id: 'Gen.7.22.en.lit.0', text: 'All that had the breath...', position: 0, sourceTokenIds: ['Gen.7.22.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
    idiomatic: { type: 'idiomatic', targetLanguage: 'en', text: 'Everything on the dry land in whose nostrils was the breath of life died.', spans: [{ id: 'Gen.7.22.en.idi.0', text: 'Everything on the dry land...', position: 0, sourceTokenIds: ['Gen.7.22.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
  },
  metadata: { pipelineVersion: '0.1.0', generatedAt: new Date().toISOString(), engineId: 'open-bible-pipeline', engineVersion: '0.1.0', sourceDataVersion: '1.0.0' },
};

export const genesis7_22_notes: StudyNote[] = [
  { id: 'Gen.7.22.note.1', verseRef: 'Gen.7.22', sourceTokenIds: ['Gen.7.22.2', 'Gen.7.22.3', 'Gen.7.22.4'], category: 'cross-reference', title: 'Breath of Life in Nostrils', content: 'This echoes Genesis 2:7 where God breathed the breath of life (nišmaṯ ḥayyîm) into Adam\'s nostrils. What God gave in creation was now taken away in judgment—a de-creation event reversing the original act of giving life.', confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
];

export const genesis7_23_tokens: SourceToken[] = [
  { id: 'Gen.7.23.0', language: 'hebrew', text: 'וַיִּ֜מַח', transliteration: 'wayyimaḥ', lemma: 'מָחָה', lemmaTranslit: 'māḥāh', gloss: 'And He blotted out', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'imperfect', stem: 'qal', rawCode: 'Vqw3ms' }, strongs: 'H4229', position: 0 },
  { id: 'Gen.7.23.1', language: 'hebrew', text: 'אֶֽת־כָּל־הַיְק֣וּם', transliteration: 'ʾeṯ-kāl-hayəqûm', lemma: 'יְקוּם', lemmaTranslit: 'yəqûm', gloss: 'every living thing', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'absolute', rawCode: 'Ncmsa' }, strongs: 'H3351', position: 1 },
  { id: 'Gen.7.23.2', language: 'hebrew', text: 'אֲשֶׁר֮', transliteration: 'ʾăšer', lemma: 'אֲשֶׁר', lemmaTranslit: 'ʾăšer', gloss: 'that was', morphology: { pos: 'particle', rawCode: 'Tr' }, strongs: 'H834', position: 2 },
  { id: 'Gen.7.23.3', language: 'hebrew', text: 'עַל־פְּנֵ֣י', transliteration: 'ʿal-pənê', lemma: 'פָּנִים', lemmaTranslit: 'pānîm', gloss: 'on the face of', morphology: { pos: 'noun', gender: 'masculine', number: 'plural', state: 'construct', rawCode: 'Ncmpc' }, strongs: 'H6440', position: 3 },
  { id: 'Gen.7.23.4', language: 'hebrew', text: 'הָֽאֲדָמָה֒', transliteration: 'hāʾăḏāmāh', lemma: 'אֲדָמָה', lemmaTranslit: 'ʾăḏāmāh', gloss: 'the ground', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'absolute', rawCode: 'Ncfsa' }, strongs: 'H127', position: 4 },
  { id: 'Gen.7.23.5', language: 'hebrew', text: 'מֵאָדָ֤ם', transliteration: 'mēʾāḏām', lemma: 'אָדָם', lemmaTranslit: 'ʾāḏām', gloss: 'from man', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'absolute', rawCode: 'Ncmsa' }, strongs: 'H120', position: 5 },
  { id: 'Gen.7.23.6', language: 'hebrew', text: 'עַד־בְּהֵמָה֙', transliteration: 'ʿaḏ-bəhēmāh', lemma: 'בְּהֵמָה', lemmaTranslit: 'bəhēmāh', gloss: 'to animals', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'absolute', rawCode: 'Ncfsa' }, strongs: 'H929', position: 6 },
  { id: 'Gen.7.23.7', language: 'hebrew', text: 'עַד־רֶ֙מֶשׂ֙', transliteration: 'ʿaḏ-remeś', lemma: 'רֶמֶשׂ', lemmaTranslit: 'remeś', gloss: 'to creeping things', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'absolute', rawCode: 'Ncmsa' }, strongs: 'H7431', position: 7 },
  { id: 'Gen.7.23.8', language: 'hebrew', text: 'וְעַד־ע֣וֹף', transliteration: 'wəʿaḏ-ʿôp̄', lemma: 'עוֹף', lemmaTranslit: 'ʿôp̄', gloss: 'to birds of', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'construct', rawCode: 'Ncmsc' }, strongs: 'H5775', position: 8 },
  { id: 'Gen.7.23.9', language: 'hebrew', text: 'הַשָּׁמַ֔יִם', transliteration: 'haššāmayim', lemma: 'שָׁמַיִם', lemmaTranslit: 'šāmayim', gloss: 'the heavens', morphology: { pos: 'noun', gender: 'masculine', number: 'plural', state: 'absolute', rawCode: 'Ncmpa' }, strongs: 'H8064', position: 9 },
  { id: 'Gen.7.23.10', language: 'hebrew', text: 'וַיִּמָּח֖וּ', transliteration: 'wayyimmāḥû', lemma: 'מָחָה', lemmaTranslit: 'māḥāh', gloss: 'and they were blotted out', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'plural', tense: 'imperfect', stem: 'niphal', rawCode: 'Vnw3mp' }, strongs: 'H4229', position: 10 },
  { id: 'Gen.7.23.11', language: 'hebrew', text: 'מִן־הָאָ֑רֶץ', transliteration: 'min-hāʾāreṣ', lemma: 'אֶרֶץ', lemmaTranslit: 'ʾereṣ', gloss: 'from the earth', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'absolute', rawCode: 'Ncfsa' }, strongs: 'H776', position: 11 },
  { id: 'Gen.7.23.12', language: 'hebrew', text: 'וַיִשָּׁ֧אֶר', transliteration: 'wayyiššāʾer', lemma: 'שָׁאַר', lemmaTranslit: 'šāʾar', gloss: 'and remained', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'singular', tense: 'imperfect', stem: 'niphal', rawCode: 'Vnw3ms' }, strongs: 'H7604', position: 12 },
  { id: 'Gen.7.23.13', language: 'hebrew', text: 'אַךְ־נֹ֛חַ', transliteration: 'ʾaḵ-nōaḥ', lemma: 'נֹחַ', lemmaTranslit: 'nōaḥ', gloss: 'only Noah', morphology: { pos: 'noun', rawCode: 'Np' }, strongs: 'H5146', position: 13 },
  { id: 'Gen.7.23.14', language: 'hebrew', text: 'וַֽאֲשֶׁ֥ר', transliteration: 'waʾăšer', lemma: 'אֲשֶׁר', lemmaTranslit: 'ʾăšer', gloss: 'and those', morphology: { pos: 'particle', rawCode: 'Tr' }, strongs: 'H834', position: 14 },
  { id: 'Gen.7.23.15', language: 'hebrew', text: 'אִתּ֖וֹ', transliteration: 'ʾittô', lemma: 'אֵת', lemmaTranslit: 'ʾēṯ', gloss: 'with him', morphology: { pos: 'preposition', rawCode: 'R' }, strongs: 'H854', position: 15 },
  { id: 'Gen.7.23.16', language: 'hebrew', text: 'בַּתֵּבָֽה', transliteration: 'battēḇāh', lemma: 'תֵּבָה', lemmaTranslit: 'tēḇāh', gloss: 'in the ark', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'absolute', rawCode: 'Ncfsa' }, strongs: 'H8392', position: 16 },
];

export const genesis7_23_translation: VerseTranslation = {
  verseRef: 'Gen.7.23',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: { type: 'literal', targetLanguage: 'en', text: 'And He blotted out every living thing that was on the face of the ground, from man to animals to creeping things to birds of the heavens. And they were blotted out from the earth. And remained only Noah and those with him in the ark.', spans: [{ id: 'Gen.7.23.en.lit.0', text: 'And He blotted out every living thing...', position: 0, sourceTokenIds: ['Gen.7.23.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
    idiomatic: { type: 'idiomatic', targetLanguage: 'en', text: 'He blotted out every living thing that was on the face of the ground, man and animals and creeping things and birds of the heavens. They were blotted out from the earth. Only Noah was left, and those who were with him in the ark.', spans: [{ id: 'Gen.7.23.en.idi.0', text: 'He blotted out every living thing...', position: 0, sourceTokenIds: ['Gen.7.23.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
  },
  metadata: { pipelineVersion: '0.1.0', generatedAt: new Date().toISOString(), engineId: 'open-bible-pipeline', engineVersion: '0.1.0', sourceDataVersion: '1.0.0' },
};

export const genesis7_23_notes: StudyNote[] = [
  { id: 'Gen.7.23.note.1', verseRef: 'Gen.7.23', sourceTokenIds: ['Gen.7.23.12', 'Gen.7.23.13'], category: 'theological', title: 'Only Noah Remained', content: 'The verb šāʾar (שָׁאַר, "to remain") introduces the concept of a remnant—those preserved through judgment. Only Noah and his family survived. This pattern recurs throughout Scripture: a faithful remnant preserved by God\'s grace.', confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
];

export const genesis7_24_tokens: SourceToken[] = [
  { id: 'Gen.7.24.0', language: 'hebrew', text: 'וַיִּגְבְּר֥וּ', transliteration: 'wayyigbərû', lemma: 'גָּבַר', lemmaTranslit: 'gāḇar', gloss: 'And prevailed', morphology: { pos: 'verb', person: '3', gender: 'masculine', number: 'plural', tense: 'imperfect', stem: 'qal', rawCode: 'Vqw3mp' }, strongs: 'H1396', position: 0 },
  { id: 'Gen.7.24.1', language: 'hebrew', text: 'הַמַּ֖יִם', transliteration: 'hammayim', lemma: 'מַיִם', lemmaTranslit: 'mayim', gloss: 'the waters', morphology: { pos: 'noun', gender: 'masculine', number: 'plural', state: 'absolute', rawCode: 'Ncmpa' }, strongs: 'H4325', position: 1 },
  { id: 'Gen.7.24.2', language: 'hebrew', text: 'עַל־הָאָ֑רֶץ', transliteration: 'ʿal-hāʾāreṣ', lemma: 'אֶרֶץ', lemmaTranslit: 'ʾereṣ', gloss: 'on the earth', morphology: { pos: 'noun', gender: 'feminine', number: 'singular', state: 'absolute', rawCode: 'Ncfsa' }, strongs: 'H776', position: 2 },
  { id: 'Gen.7.24.3', language: 'hebrew', text: 'חֲמִשִּׁ֥ים', transliteration: 'ḥămiššîm', lemma: 'חֲמִשִּׁים', lemmaTranslit: 'ḥămiššîm', gloss: 'fifty', morphology: { pos: 'numeral', rawCode: 'Acmpa' }, strongs: 'H2572', position: 3 },
  { id: 'Gen.7.24.4', language: 'hebrew', text: 'וּמְאַ֖ת', transliteration: 'ûməʾaṯ', lemma: 'מֵאָה', lemmaTranslit: 'mēʾāh', gloss: 'and a hundred', morphology: { pos: 'numeral', gender: 'feminine', number: 'singular', state: 'absolute', rawCode: 'Acfsa' }, strongs: 'H3967', position: 4 },
  { id: 'Gen.7.24.5', language: 'hebrew', text: 'יֽוֹם', transliteration: 'yôm', lemma: 'יוֹם', lemmaTranslit: 'yôm', gloss: 'days', morphology: { pos: 'noun', gender: 'masculine', number: 'singular', state: 'absolute', rawCode: 'Ncmsa' }, strongs: 'H3117', position: 5 },
];

export const genesis7_24_translation: VerseTranslation = {
  verseRef: 'Gen.7.24',
  targetLanguage: 'en',
  profile: 'academic',
  layers: {
    literal: { type: 'literal', targetLanguage: 'en', text: 'And prevailed the waters on the earth a hundred and fifty days.', spans: [{ id: 'Gen.7.24.en.lit.0', text: 'And prevailed the waters...', position: 0, sourceTokenIds: ['Gen.7.24.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
    idiomatic: { type: 'idiomatic', targetLanguage: 'en', text: 'And the waters prevailed on the earth 150 days.', spans: [{ id: 'Gen.7.24.en.idi.0', text: 'And the waters prevailed...', position: 0, sourceTokenIds: ['Gen.7.24.0'], confidence: 'high' }], overallConfidence: 'high', humanReviewed: false },
  },
  metadata: { pipelineVersion: '0.1.0', generatedAt: new Date().toISOString(), engineId: 'open-bible-pipeline', engineVersion: '0.1.0', sourceDataVersion: '1.0.0' },
};

export const genesis7_24_notes: StudyNote[] = [
  { id: 'Gen.7.24.note.1', verseRef: 'Gen.7.24', sourceTokenIds: ['Gen.7.24.3', 'Gen.7.24.4', 'Gen.7.24.5'], category: 'interpretive', title: '150 Days', content: 'The waters prevailed for 150 days (about 5 months). This includes the 40 days of rain plus 110 additional days at maximum water level before receding began. Noah was in the ark for over a year (cf. 8:13-14).', confidence: 'high', authorType: 'ai', metadata: { generatedAt: new Date().toISOString(), engineId: 'open-bible-notes' } },
];

// Export verse structures
export const genesis7_11_verse = { ref: 'Gen.7.11', sourceTokens: genesis7_11_tokens, translation: genesis7_11_translation, notes: genesis7_11_notes };
export const genesis7_12_verse = { ref: 'Gen.7.12', sourceTokens: genesis7_12_tokens, translation: genesis7_12_translation, notes: genesis7_12_notes };
export const genesis7_13_verse = { ref: 'Gen.7.13', sourceTokens: genesis7_13_tokens, translation: genesis7_13_translation, notes: genesis7_13_notes };
export const genesis7_14_verse = { ref: 'Gen.7.14', sourceTokens: genesis7_14_tokens, translation: genesis7_14_translation, notes: genesis7_14_notes };
export const genesis7_15_verse = { ref: 'Gen.7.15', sourceTokens: genesis7_15_tokens, translation: genesis7_15_translation, notes: genesis7_15_notes };
export const genesis7_16_verse = { ref: 'Gen.7.16', sourceTokens: genesis7_16_tokens, translation: genesis7_16_translation, notes: genesis7_16_notes };
export const genesis7_17_verse = { ref: 'Gen.7.17', sourceTokens: genesis7_17_tokens, translation: genesis7_17_translation, notes: genesis7_17_notes };
export const genesis7_18_verse = { ref: 'Gen.7.18', sourceTokens: genesis7_18_tokens, translation: genesis7_18_translation, notes: genesis7_18_notes };
export const genesis7_19_verse = { ref: 'Gen.7.19', sourceTokens: genesis7_19_tokens, translation: genesis7_19_translation, notes: genesis7_19_notes };
export const genesis7_20_verse = { ref: 'Gen.7.20', sourceTokens: genesis7_20_tokens, translation: genesis7_20_translation, notes: genesis7_20_notes };
export const genesis7_21_verse = { ref: 'Gen.7.21', sourceTokens: genesis7_21_tokens, translation: genesis7_21_translation, notes: genesis7_21_notes };
export const genesis7_22_verse = { ref: 'Gen.7.22', sourceTokens: genesis7_22_tokens, translation: genesis7_22_translation, notes: genesis7_22_notes };
export const genesis7_23_verse = { ref: 'Gen.7.23', sourceTokens: genesis7_23_tokens, translation: genesis7_23_translation, notes: genesis7_23_notes };
export const genesis7_24_verse = { ref: 'Gen.7.24', sourceTokens: genesis7_24_tokens, translation: genesis7_24_translation, notes: genesis7_24_notes };

// Combined export
export const genesis7_11_24_verses = [
  genesis7_11_verse,
  genesis7_12_verse,
  genesis7_13_verse,
  genesis7_14_verse,
  genesis7_15_verse,
  genesis7_16_verse,
  genesis7_17_verse,
  genesis7_18_verse,
  genesis7_19_verse,
  genesis7_20_verse,
  genesis7_21_verse,
  genesis7_22_verse,
  genesis7_23_verse,
  genesis7_24_verse,
];

export default genesis7_11_24_verses;
