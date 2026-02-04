/**
 * Verse of the Day - deterministic selection based on date
 */

// Popular verses with their references
export const popularVerses = [
  { ref: 'John 3:16', book: 'John', chapter: 3, summary: 'For God so loved the world' },
  { ref: 'Psalm 23:1', book: 'Ps', chapter: 23, summary: 'The Lord is my shepherd' },
  { ref: 'Romans 8:28', book: 'Rom', chapter: 8, summary: 'All things work together for good' },
  { ref: 'Philippians 4:13', book: 'Phil', chapter: 4, summary: 'I can do all things' },
  { ref: 'Jeremiah 29:11', book: 'Jer', chapter: 29, summary: 'Plans to prosper you' },
  { ref: 'Proverbs 3:5', book: 'Prov', chapter: 3, summary: 'Trust in the Lord' },
  { ref: 'Isaiah 40:31', book: 'Isa', chapter: 40, summary: 'Renew their strength' },
  { ref: 'Matthew 11:28', book: 'Matt', chapter: 11, summary: 'Come to me, all who are weary' },
  { ref: 'Romans 12:2', book: 'Rom', chapter: 12, summary: 'Be transformed' },
  { ref: 'Joshua 1:9', book: 'Josh', chapter: 1, summary: 'Be strong and courageous' },
  { ref: 'Psalm 46:10', book: 'Ps', chapter: 46, summary: 'Be still and know' },
  { ref: 'Hebrews 11:1', book: 'Heb', chapter: 11, summary: 'Faith is the substance' },
  { ref: '1 Corinthians 13:4', book: '1Cor', chapter: 13, summary: 'Love is patient' },
  { ref: 'Galatians 5:22', book: 'Gal', chapter: 5, summary: 'Fruit of the Spirit' },
  { ref: 'Ephesians 2:8', book: 'Eph', chapter: 2, summary: 'By grace you have been saved' },
  { ref: 'Psalm 119:105', book: 'Ps', chapter: 119, summary: 'A lamp to my feet' },
  { ref: 'Genesis 1:1', book: 'Gen', chapter: 1, summary: 'In the beginning' },
  { ref: 'John 1:1', book: 'John', chapter: 1, summary: 'In the beginning was the Word' },
  { ref: 'Matthew 6:33', book: 'Matt', chapter: 6, summary: 'Seek first the kingdom' },
  { ref: 'John 14:6', book: 'John', chapter: 14, summary: 'The way, the truth, the life' },
  { ref: 'Romans 5:8', book: 'Rom', chapter: 5, summary: 'God demonstrates his love' },
  { ref: '2 Timothy 1:7', book: '2Tim', chapter: 1, summary: 'Spirit of power' },
  { ref: 'Psalm 27:1', book: 'Ps', chapter: 27, summary: 'The Lord is my light' },
  { ref: 'Isaiah 53:5', book: 'Isa', chapter: 53, summary: 'By his wounds we are healed' },
  { ref: 'Colossians 3:23', book: 'Col', chapter: 3, summary: 'Work heartily' },
  { ref: 'James 1:2', book: 'Jas', chapter: 1, summary: 'Count it all joy' },
  { ref: '1 Peter 5:7', book: '1Pet', chapter: 5, summary: 'Cast all your anxieties' },
  { ref: 'Revelation 21:4', book: 'Rev', chapter: 21, summary: 'Wipe away every tear' },
  { ref: 'Psalm 91:1', book: 'Ps', chapter: 91, summary: 'Dwelling in the secret place' },
  { ref: 'Matthew 28:19', book: 'Matt', chapter: 28, summary: 'Go and make disciples' },
];

export function getVerseOfDay() {
  // Use date to deterministically select a verse
  const today = new Date();
  const dayOfYear = Math.floor(
    (today.getTime() - new Date(today.getFullYear(), 0, 0).getTime()) / (1000 * 60 * 60 * 24)
  );

  const index = dayOfYear % popularVerses.length;
  return popularVerses[index];
}
