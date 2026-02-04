/**
 * Complete Bible book metadata
 * Contains all 66 books with chapter counts and source language info
 */

export interface BookMetadata {
  code: string;           // OSIS abbreviation
  name: string;           // Full English name
  chapters: number;       // Number of chapters
  testament: 'OT' | 'NT';
  language: 'hebrew' | 'aramaic' | 'greek';
  order: number;          // Canonical order
  category: string;       // Book category
}

// Old Testament Books (39)
export const oldTestamentBooks: BookMetadata[] = [
  // Pentateuch / Torah
  { code: 'Gen', name: 'Genesis', chapters: 50, testament: 'OT', language: 'hebrew', order: 1, category: 'Pentateuch' },
  { code: 'Exod', name: 'Exodus', chapters: 40, testament: 'OT', language: 'hebrew', order: 2, category: 'Pentateuch' },
  { code: 'Lev', name: 'Leviticus', chapters: 27, testament: 'OT', language: 'hebrew', order: 3, category: 'Pentateuch' },
  { code: 'Num', name: 'Numbers', chapters: 36, testament: 'OT', language: 'hebrew', order: 4, category: 'Pentateuch' },
  { code: 'Deut', name: 'Deuteronomy', chapters: 34, testament: 'OT', language: 'hebrew', order: 5, category: 'Pentateuch' },

  // Historical Books
  { code: 'Josh', name: 'Joshua', chapters: 24, testament: 'OT', language: 'hebrew', order: 6, category: 'Historical' },
  { code: 'Judg', name: 'Judges', chapters: 21, testament: 'OT', language: 'hebrew', order: 7, category: 'Historical' },
  { code: 'Ruth', name: 'Ruth', chapters: 4, testament: 'OT', language: 'hebrew', order: 8, category: 'Historical' },
  { code: '1Sam', name: '1 Samuel', chapters: 31, testament: 'OT', language: 'hebrew', order: 9, category: 'Historical' },
  { code: '2Sam', name: '2 Samuel', chapters: 24, testament: 'OT', language: 'hebrew', order: 10, category: 'Historical' },
  { code: '1Kgs', name: '1 Kings', chapters: 22, testament: 'OT', language: 'hebrew', order: 11, category: 'Historical' },
  { code: '2Kgs', name: '2 Kings', chapters: 25, testament: 'OT', language: 'hebrew', order: 12, category: 'Historical' },
  { code: '1Chr', name: '1 Chronicles', chapters: 29, testament: 'OT', language: 'hebrew', order: 13, category: 'Historical' },
  { code: '2Chr', name: '2 Chronicles', chapters: 36, testament: 'OT', language: 'hebrew', order: 14, category: 'Historical' },
  { code: 'Ezra', name: 'Ezra', chapters: 10, testament: 'OT', language: 'hebrew', order: 15, category: 'Historical' }, // Contains Aramaic
  { code: 'Neh', name: 'Nehemiah', chapters: 13, testament: 'OT', language: 'hebrew', order: 16, category: 'Historical' },
  { code: 'Esth', name: 'Esther', chapters: 10, testament: 'OT', language: 'hebrew', order: 17, category: 'Historical' },

  // Wisdom/Poetry
  { code: 'Job', name: 'Job', chapters: 42, testament: 'OT', language: 'hebrew', order: 18, category: 'Wisdom' },
  { code: 'Ps', name: 'Psalms', chapters: 150, testament: 'OT', language: 'hebrew', order: 19, category: 'Wisdom' },
  { code: 'Prov', name: 'Proverbs', chapters: 31, testament: 'OT', language: 'hebrew', order: 20, category: 'Wisdom' },
  { code: 'Eccl', name: 'Ecclesiastes', chapters: 12, testament: 'OT', language: 'hebrew', order: 21, category: 'Wisdom' },
  { code: 'Song', name: 'Song of Solomon', chapters: 8, testament: 'OT', language: 'hebrew', order: 22, category: 'Wisdom' },

  // Major Prophets
  { code: 'Isa', name: 'Isaiah', chapters: 66, testament: 'OT', language: 'hebrew', order: 23, category: 'Major Prophets' },
  { code: 'Jer', name: 'Jeremiah', chapters: 52, testament: 'OT', language: 'hebrew', order: 24, category: 'Major Prophets' },
  { code: 'Lam', name: 'Lamentations', chapters: 5, testament: 'OT', language: 'hebrew', order: 25, category: 'Major Prophets' },
  { code: 'Ezek', name: 'Ezekiel', chapters: 48, testament: 'OT', language: 'hebrew', order: 26, category: 'Major Prophets' },
  { code: 'Dan', name: 'Daniel', chapters: 12, testament: 'OT', language: 'hebrew', order: 27, category: 'Major Prophets' }, // Contains Aramaic

  // Minor Prophets
  { code: 'Hos', name: 'Hosea', chapters: 14, testament: 'OT', language: 'hebrew', order: 28, category: 'Minor Prophets' },
  { code: 'Joel', name: 'Joel', chapters: 3, testament: 'OT', language: 'hebrew', order: 29, category: 'Minor Prophets' },
  { code: 'Amos', name: 'Amos', chapters: 9, testament: 'OT', language: 'hebrew', order: 30, category: 'Minor Prophets' },
  { code: 'Obad', name: 'Obadiah', chapters: 1, testament: 'OT', language: 'hebrew', order: 31, category: 'Minor Prophets' },
  { code: 'Jonah', name: 'Jonah', chapters: 4, testament: 'OT', language: 'hebrew', order: 32, category: 'Minor Prophets' },
  { code: 'Mic', name: 'Micah', chapters: 7, testament: 'OT', language: 'hebrew', order: 33, category: 'Minor Prophets' },
  { code: 'Nah', name: 'Nahum', chapters: 3, testament: 'OT', language: 'hebrew', order: 34, category: 'Minor Prophets' },
  { code: 'Hab', name: 'Habakkuk', chapters: 3, testament: 'OT', language: 'hebrew', order: 35, category: 'Minor Prophets' },
  { code: 'Zeph', name: 'Zephaniah', chapters: 3, testament: 'OT', language: 'hebrew', order: 36, category: 'Minor Prophets' },
  { code: 'Hag', name: 'Haggai', chapters: 2, testament: 'OT', language: 'hebrew', order: 37, category: 'Minor Prophets' },
  { code: 'Zech', name: 'Zechariah', chapters: 14, testament: 'OT', language: 'hebrew', order: 38, category: 'Minor Prophets' },
  { code: 'Mal', name: 'Malachi', chapters: 4, testament: 'OT', language: 'hebrew', order: 39, category: 'Minor Prophets' },
];

// New Testament Books (27)
export const newTestamentBooks: BookMetadata[] = [
  // Gospels
  { code: 'Matt', name: 'Matthew', chapters: 28, testament: 'NT', language: 'greek', order: 40, category: 'Gospels' },
  { code: 'Mark', name: 'Mark', chapters: 16, testament: 'NT', language: 'greek', order: 41, category: 'Gospels' },
  { code: 'Luke', name: 'Luke', chapters: 24, testament: 'NT', language: 'greek', order: 42, category: 'Gospels' },
  { code: 'John', name: 'John', chapters: 21, testament: 'NT', language: 'greek', order: 43, category: 'Gospels' },

  // History
  { code: 'Acts', name: 'Acts', chapters: 28, testament: 'NT', language: 'greek', order: 44, category: 'History' },

  // Pauline Epistles
  { code: 'Rom', name: 'Romans', chapters: 16, testament: 'NT', language: 'greek', order: 45, category: 'Pauline Epistles' },
  { code: '1Cor', name: '1 Corinthians', chapters: 16, testament: 'NT', language: 'greek', order: 46, category: 'Pauline Epistles' },
  { code: '2Cor', name: '2 Corinthians', chapters: 13, testament: 'NT', language: 'greek', order: 47, category: 'Pauline Epistles' },
  { code: 'Gal', name: 'Galatians', chapters: 6, testament: 'NT', language: 'greek', order: 48, category: 'Pauline Epistles' },
  { code: 'Eph', name: 'Ephesians', chapters: 6, testament: 'NT', language: 'greek', order: 49, category: 'Pauline Epistles' },
  { code: 'Phil', name: 'Philippians', chapters: 4, testament: 'NT', language: 'greek', order: 50, category: 'Pauline Epistles' },
  { code: 'Col', name: 'Colossians', chapters: 4, testament: 'NT', language: 'greek', order: 51, category: 'Pauline Epistles' },
  { code: '1Thess', name: '1 Thessalonians', chapters: 5, testament: 'NT', language: 'greek', order: 52, category: 'Pauline Epistles' },
  { code: '2Thess', name: '2 Thessalonians', chapters: 3, testament: 'NT', language: 'greek', order: 53, category: 'Pauline Epistles' },
  { code: '1Tim', name: '1 Timothy', chapters: 6, testament: 'NT', language: 'greek', order: 54, category: 'Pauline Epistles' },
  { code: '2Tim', name: '2 Timothy', chapters: 4, testament: 'NT', language: 'greek', order: 55, category: 'Pauline Epistles' },
  { code: 'Titus', name: 'Titus', chapters: 3, testament: 'NT', language: 'greek', order: 56, category: 'Pauline Epistles' },
  { code: 'Phlm', name: 'Philemon', chapters: 1, testament: 'NT', language: 'greek', order: 57, category: 'Pauline Epistles' },

  // General Epistles
  { code: 'Heb', name: 'Hebrews', chapters: 13, testament: 'NT', language: 'greek', order: 58, category: 'General Epistles' },
  { code: 'Jas', name: 'James', chapters: 5, testament: 'NT', language: 'greek', order: 59, category: 'General Epistles' },
  { code: '1Pet', name: '1 Peter', chapters: 5, testament: 'NT', language: 'greek', order: 60, category: 'General Epistles' },
  { code: '2Pet', name: '2 Peter', chapters: 3, testament: 'NT', language: 'greek', order: 61, category: 'General Epistles' },
  { code: '1John', name: '1 John', chapters: 5, testament: 'NT', language: 'greek', order: 62, category: 'General Epistles' },
  { code: '2John', name: '2 John', chapters: 1, testament: 'NT', language: 'greek', order: 63, category: 'General Epistles' },
  { code: '3John', name: '3 John', chapters: 1, testament: 'NT', language: 'greek', order: 64, category: 'General Epistles' },
  { code: 'Jude', name: 'Jude', chapters: 1, testament: 'NT', language: 'greek', order: 65, category: 'General Epistles' },

  // Apocalyptic
  { code: 'Rev', name: 'Revelation', chapters: 22, testament: 'NT', language: 'greek', order: 66, category: 'Apocalyptic' },
];

// All books combined
export const allBooks: BookMetadata[] = [...oldTestamentBooks, ...newTestamentBooks];

// Lookup by code
export const booksByCode: Record<string, BookMetadata> = Object.fromEntries(
  allBooks.map(book => [book.code, book])
);

// Get book by code
export function getBook(code: string): BookMetadata | undefined {
  return booksByCode[code];
}

// Get books by category
export function getBooksByCategory(category: string): BookMetadata[] {
  return allBooks.filter(book => book.category === category);
}

// Get books by testament
export function getBooksByTestament(testament: 'OT' | 'NT'): BookMetadata[] {
  return allBooks.filter(book => book.testament === testament);
}

// Categories in order
export const categories = [
  'Pentateuch',
  'Historical',
  'Wisdom',
  'Major Prophets',
  'Minor Prophets',
  'Gospels',
  'History',
  'Pauline Epistles',
  'General Epistles',
  'Apocalyptic',
];

// Total chapters in the Bible
export const totalChapters = allBooks.reduce((sum, book) => sum + book.chapters, 0);

// Statistics
export const bibleStats = {
  totalBooks: allBooks.length,
  oldTestamentBooks: oldTestamentBooks.length,
  newTestamentBooks: newTestamentBooks.length,
  totalChapters,
  oldTestamentChapters: oldTestamentBooks.reduce((sum, book) => sum + book.chapters, 0),
  newTestamentChapters: newTestamentBooks.reduce((sum, book) => sum + book.chapters, 0),
};

export default allBooks;
