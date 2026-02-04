/**
 * Bible API client for fetching public domain Bible text
 * Uses bible-api.com which defaults to World English Bible (public domain)
 */

export interface BibleApiVerse {
  book_id: string;
  book_name: string;
  chapter: number;
  verse: number;
  text: string;
}

export interface BibleApiResponse {
  reference: string;
  verses: BibleApiVerse[];
  text: string;
  translation_id: string;
  translation_name: string;
  translation_note: string;
}

// Book code mapping from OSIS to bible-api format
const bookCodeMap: Record<string, string> = {
  Gen: 'Genesis',
  Exod: 'Exodus',
  Lev: 'Leviticus',
  Num: 'Numbers',
  Deut: 'Deuteronomy',
  Josh: 'Joshua',
  Judg: 'Judges',
  Ruth: 'Ruth',
  '1Sam': '1 Samuel',
  '2Sam': '2 Samuel',
  '1Kgs': '1 Kings',
  '2Kgs': '2 Kings',
  '1Chr': '1 Chronicles',
  '2Chr': '2 Chronicles',
  Ezra: 'Ezra',
  Neh: 'Nehemiah',
  Esth: 'Esther',
  Job: 'Job',
  Ps: 'Psalms',
  Prov: 'Proverbs',
  Eccl: 'Ecclesiastes',
  Song: 'Song of Solomon',
  Isa: 'Isaiah',
  Jer: 'Jeremiah',
  Lam: 'Lamentations',
  Ezek: 'Ezekiel',
  Dan: 'Daniel',
  Hos: 'Hosea',
  Joel: 'Joel',
  Amos: 'Amos',
  Obad: 'Obadiah',
  Jonah: 'Jonah',
  Mic: 'Micah',
  Nah: 'Nahum',
  Hab: 'Habakkuk',
  Zeph: 'Zephaniah',
  Hag: 'Haggai',
  Zech: 'Zechariah',
  Mal: 'Malachi',
  Matt: 'Matthew',
  Mark: 'Mark',
  Luke: 'Luke',
  John: 'John',
  Acts: 'Acts',
  Rom: 'Romans',
  '1Cor': '1 Corinthians',
  '2Cor': '2 Corinthians',
  Gal: 'Galatians',
  Eph: 'Ephesians',
  Phil: 'Philippians',
  Col: 'Colossians',
  '1Thess': '1 Thessalonians',
  '2Thess': '2 Thessalonians',
  '1Tim': '1 Timothy',
  '2Tim': '2 Timothy',
  Titus: 'Titus',
  Phlm: 'Philemon',
  Heb: 'Hebrews',
  Jas: 'James',
  '1Pet': '1 Peter',
  '2Pet': '2 Peter',
  '1John': '1 John',
  '2John': '2 John',
  '3John': '3 John',
  Jude: 'Jude',
  Rev: 'Revelation',
};

export function getApiBookName(osisCode: string): string {
  return bookCodeMap[osisCode] || osisCode;
}

/**
 * Fetch a chapter from bible-api.com
 */
export async function fetchChapter(
  bookCode: string,
  chapter: number
): Promise<BibleApiResponse | null> {
  const bookName = getApiBookName(bookCode);
  const reference = `${bookName} ${chapter}`;

  try {
    const response = await fetch(
      `https://bible-api.com/${encodeURIComponent(reference)}?translation=web`
    );

    if (!response.ok) {
      console.error(`Failed to fetch ${reference}:`, response.status);
      return null;
    }

    const data = await response.json();
    return data as BibleApiResponse;
  } catch (error) {
    console.error(`Error fetching ${reference}:`, error);
    return null;
  }
}

/**
 * Convert API response to simplified verse data for display
 */
export function convertToSimpleVerses(response: BibleApiResponse) {
  return response.verses.map((verse) => ({
    ref: `${verse.book_id}.${verse.chapter}.${verse.verse}`,
    verseNumber: verse.verse,
    text: verse.text.trim(),
  }));
}
