/**
 * Cross-reference data for sample verses
 * Maps verse references to related passages
 */

export interface CrossReference {
  targetRef: string;
  targetText: string;
  relationship: 'parallel' | 'allusion' | 'quotation' | 'thematic' | 'fulfillment';
  note?: string;
}

const crossRefs: Record<string, CrossReference[]> = {
  'Gen.1.1': [
    { targetRef: 'John.1.1', targetText: 'In the beginning was the Word...', relationship: 'allusion', note: 'John echoes Genesis creation language' },
    { targetRef: 'Heb.11.3', targetText: 'By faith we understand that the universe was created by the word of God', relationship: 'thematic' },
    { targetRef: 'Ps.33.6', targetText: 'By the word of the LORD the heavens were made', relationship: 'thematic' },
    { targetRef: 'Isa.40.28', targetText: 'The LORD is the everlasting God, the Creator of the ends of the earth', relationship: 'thematic' },
  ],
  'Gen.1.2': [
    { targetRef: 'Ps.104.30', targetText: 'When you send forth your Spirit, they are created', relationship: 'thematic', note: 'Spirit hovering over creation' },
    { targetRef: 'Jer.4.23', targetText: 'I looked at the earth, and it was formless and empty', relationship: 'allusion' },
  ],
  'Gen.1.3': [
    { targetRef: '2Cor.4.6', targetText: 'For God, who said, "Let light shine out of darkness"', relationship: 'quotation' },
    { targetRef: 'Ps.33.9', targetText: 'For he spoke, and it came to be', relationship: 'thematic' },
  ],
  'Gen.1.26': [
    { targetRef: 'Gen.5.1', targetText: 'When God created mankind, he made them in the likeness of God', relationship: 'parallel' },
    { targetRef: 'Col.1.15', targetText: 'The Son is the image of the invisible God', relationship: 'thematic' },
    { targetRef: 'Jas.3.9', targetText: 'people, who have been made in God\'s likeness', relationship: 'allusion' },
  ],
  'Gen.1.27': [
    { targetRef: 'Matt.19.4', targetText: 'He who created them from the beginning made them male and female', relationship: 'quotation' },
    { targetRef: 'Gen.5.2', targetText: 'He created them male and female and blessed them', relationship: 'parallel' },
  ],
  'Gen.3.15': [
    { targetRef: 'Rom.16.20', targetText: 'The God of peace will soon crush Satan under your feet', relationship: 'fulfillment', note: 'Protoevangelium — first gospel promise' },
    { targetRef: 'Gal.4.4', targetText: 'God sent his Son, born of a woman', relationship: 'fulfillment' },
    { targetRef: 'Rev.12.9', targetText: 'that ancient serpent called the devil', relationship: 'allusion' },
  ],
  'Gen.12.1': [
    { targetRef: 'Acts.7.2-3', targetText: 'The God of glory appeared to our father Abraham...and said to him, "Leave your country"', relationship: 'quotation' },
    { targetRef: 'Heb.11.8', targetText: 'By faith Abraham obeyed when he was called to go out', relationship: 'allusion' },
  ],
  'John.1.1': [
    { targetRef: 'Gen.1.1', targetText: 'In the beginning God created the heavens and the earth', relationship: 'allusion', note: 'Intentional echo of Genesis 1:1' },
    { targetRef: '1John.1.1', targetText: 'That which was from the beginning, which we have heard', relationship: 'parallel' },
    { targetRef: 'Rev.19.13', targetText: 'He is dressed in a robe dipped in blood, and his name is the Word of God', relationship: 'thematic' },
    { targetRef: 'Prov.8.22', targetText: 'The LORD brought me forth as the first of his works', relationship: 'thematic', note: 'Wisdom personified — background to Logos theology' },
  ],
  'John.1.3': [
    { targetRef: 'Col.1.16', targetText: 'For in him all things were created', relationship: 'parallel' },
    { targetRef: 'Heb.1.2', targetText: 'through whom also he made the universe', relationship: 'parallel' },
  ],
  'John.1.14': [
    { targetRef: 'Exod.33.18-23', targetText: 'Moses said, "Please show me your glory"', relationship: 'allusion', note: 'Glory/tabernacle language echoes Exodus' },
    { targetRef: '1Tim.3.16', targetText: 'He appeared in the flesh', relationship: 'thematic' },
  ],
};

export function getCrossReferences(verseRef: string): CrossReference[] {
  return crossRefs[verseRef] || [];
}

export function hasCrossReferences(verseRef: string): boolean {
  return verseRef in crossRefs;
}
