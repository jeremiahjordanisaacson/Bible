# Open Bible Translation

An open source, AI-assisted Bible translation platform with radical transparency. Every word is traceable to the original Hebrew, Aramaic, and Greek sources.

**Status: Expanding — All 66 books have morphological data**

## What Works Now

- Full Next.js web application with 1,199 statically generated chapter pages (all 66 books)
- **~136 chapters** across all 66 books with rich morphological data
- **Old Testament**: Hebrew tokens with Strong's numbers, morphological codes, transliteration
- **New Testament**: Greek tokens with Strong's numbers, morphological codes, transliteration
- Hover/click popovers on every word showing original text, morphology, and lexicon links
- Three translation layers: literal, idiomatic, literary
- Compare view showing all translation layers side-by-side
- Study mode with alignment highlighting between source tokens and translated spans
- Cross-reference panel with linked related passages
- Textual variant display for known manuscript differences
- Data provenance panel showing pipeline version, engine, source data, timestamps
- Keyboard navigation (1/2/3 for layers, S=study, N=notes, C=compare, P=provenance, V=variants, ←/→ for chapters, G=jump, ?=help)
- Dynamic chapter registry for scalable data management
- Search across all chapters with morphological data
- Export to Text and JSON formats
- Dark mode (class-based toggle), reading themes (sepia, night), adjustable font sizes, line spacing
- Search within chapters, text-to-speech, print view, bookmarks
- **ADA/WCAG accessibility**: skip-to-content link, focus-visible indicators, ARIA labels, lang/dir attributes on Hebrew/Greek text, aria-live regions, reduced-motion support, high-contrast mode
- **GDPR compliance**: no cookies, no tracking, privacy policy page, clear-all-data button
- **Mobile responsive**: hamburger menu, touch-friendly targets
- **Error handling**: 404 page, error boundary with retry
- **SEO**: per-chapter metadata, Open Graph tags
- 69 automated tests (37 schema validation + 15 pipeline + 17 integration)
- GitHub Actions CI: typecheck, test, build, deploy to GitHub Pages
- Multilingual pipeline architecture with sample Spanish, French, and German translations

## What Data is Included

| Content | Scope | Detail Level |
|---------|-------|-------------|
| Genesis 1-29, 32, 35, 37, 39, 41-42, 45, 49-50 | Key chapters | Full Hebrew morphology, study notes |
| Exodus 1, 3, 12, 14, 15, 20, 33, 34 | Key chapters | Full Hebrew morphology, study notes |
| Leviticus 16, 19 | Key chapters | Hebrew morphology, Yom Kippur, holiness code |
| Numbers 6, 14 | Key chapters | Aaronic blessing, spies' report |
| Deuteronomy 6, 18, 30, 34 | Key chapters | Shema, prophet like Moses, death of Moses |
| Joshua 1, 24 | Key chapters | Charge, Shechem covenant |
| Judges 6 · Ruth 1, 4 | Key chapters | Gideon, Ruth and Naomi |
| 1 Samuel 3 · 2 Samuel 7 | Key chapters | Samuel's call, Davidic covenant |
| 1 Kings 18 · Ezra 1 · Nehemiah 8 · Esther 4 | Key chapters | Historical turning points |
| Job 1, 38 · Psalms 1, 23, 51, 103, 139 | Key chapters | Wisdom literature |
| Proverbs 1, 31 · Ecclesiastes 1, 12 · Song 1 | Key chapters | Wisdom & poetry |
| Isaiah 6, 9, 40, 53 · Jeremiah 1, 31 | Key chapters | Major prophets |
| Lamentations 3 · Ezekiel 37 · Daniel 7 | Key chapters | Exile & apocalyptic |
| Hosea 11 · Joel 2 · Amos 5 · Jonah 2 | Key chapters | Minor prophets |
| Micah 6 · Habakkuk 3 · Zechariah 9 · Malachi 3 | Key chapters | Minor prophets |
| Matthew 1, 5, 6, 16, 28 | Key chapters | Full Greek morphology |
| Mark 1, 10, 15, 16 | Key chapters | Full Greek morphology |
| Luke 1, 2, 10, 15, 24 | Key chapters | Full Greek morphology |
| John 1, 3, 4, 6, 10, 14, 17, 19, 20 | Key chapters | Full Greek morphology |
| Acts 2, 9, 17 | Key chapters | Pentecost, conversion, Athens |
| Romans 1, 8 · 1 Cor 13, 15 · Galatians 5 | Key chapters | Pauline theology |
| Ephesians 2 · Philippians 2 · Colossians 1 | Key chapters | Christ hymns |
| Hebrews 11 · James 1 · 1 Peter 1 · 1 John 4 | Key chapters | General epistles |
| Jude 1 | Complete book | Full Greek morphology |
| Revelation 1, 4, 21, 22 | Key chapters | Vision, throne, new creation |
| All 66 books | All chapters | World English Bible text (public domain) |
| Cross-references | Gen 1-3, 12; John 1 | Linked related passages |
| Textual variants | Sample entries | Manuscript tradition data |

## How to Run

### Prerequisites
- Node.js 20+
- pnpm 9+

### Installation
```bash
git clone https://github.com/jeremiahjordanisaacson/Bible.git
cd Bible
pnpm install
```

### Development
```bash
pnpm dev          # Start dev server at http://localhost:3000
pnpm build        # Production build (static export)
pnpm test         # Run all 69 tests
pnpm typecheck    # TypeScript type checking
```

### Single Command Experience
```bash
pnpm install && pnpm dev
```

## How to Contribute

See [CONTRIBUTING.md](CONTRIBUTING.md) for full details.

### Quick Start
1. Fork the repository
2. Create a feature branch
3. Make changes following the existing patterns
4. Run `pnpm test && pnpm typecheck` to verify
5. Submit a pull request

### Ways to Contribute
- **Review translations**: Check AI-generated drafts against original texts
- **Add study notes**: Contribute scholarly explanations for verses
- **Expand data**: Add morphological data for more chapters
- **Add languages**: Implement new target language translations
- **Improve the pipeline**: Enhance data processing stages
- **Report issues**: File bugs or suggest improvements

### Adding a New Language
1. Add language config in `packages/pipeline/src/stages/multilingual.ts`
2. Add sample translations for Genesis 1:1 and John 1:1
3. Create alignment mappings back to source tokens
4. Generate language pack metadata
5. Test with `pnpm test`

## Project Structure

```
Bible/
├── apps/
│   └── web/                   # Next.js 14 web application
│       ├── src/app/           # Pages (read, about, books, search, etc.)
│       ├── src/components/    # 37 React components
│       ├── src/data/          # Verse data (Genesis, John, metadata)
│       ├── src/hooks/         # Keyboard navigation
│       └── src/store/         # Zustand state management
├── packages/
│   ├── schemas/               # Zod schemas & TypeScript types
│   │   └── src/types/         # SourceToken, Verse, Translation, etc.
│   └── pipeline/              # Data processing pipeline
│       ├── src/stages/        # Ingest, tokenize, translate, align, notes
│       ├── src/engines/       # Translation engine interface & stub
│       └── src/cli/           # Command-line pipeline runner
├── docs/
│   └── ADDITIONAL_FEATURES.md # 25 proposed features, top 5 selected
├── .github/workflows/ci.yml  # CI: typecheck, test, build, deploy
└── vitest.config.ts           # Test configuration
```

## Architecture

### Schemas (`packages/schemas`)
Comprehensive Zod-validated types:
- `SourceToken` - Original words with morphology, transliteration, lemma, gloss, Strong's
- `VerseTranslation` - Three translation layers with confidence and review status
- `VerseAlignment` - Token-to-span mappings with quality scoring
- `StudyNote` - 17 categories including historical, theological, grammatical
- `VariantUnit` - Manuscript variant support for 13 traditions
- `Morphology` - POS, person, gender, number, tense, voice, mood, case, state, stem, suffix

### Pipeline (`packages/pipeline`)
Staged processing:
1. **Ingest** - Load and validate source datasets
2. **Tokenize** - Hebrew/Greek tokenization with transliteration
3. **Translate** - Generate literal, idiomatic, literary layers (plugin engine)
4. **Align** - Map translation spans to source tokens
5. **Notes** - Generate study notes for significant terms
6. **Index** - Build search indexes (translation, lemma, Strong's)
7. **Multilingual** - Generate language packs (es, fr, de sample)

### Web App (`apps/web`)
- Next.js 14 with static export (1,199 pages)
- Radix UI for accessible components (popovers, dialogs, tabs)
- Tailwind CSS with class-based dark mode
- Zustand for state management
- World English Bible API fallback for chapters without morphological data

### Accessibility
- **WCAG 2.1 AA** target compliance
- Skip-to-content link, landmark roles, focus-visible indicators
- ARIA labels on all icon-only buttons, `aria-pressed` on toggles
- `lang="he" dir="rtl"` on Hebrew text, `lang="el"` on Greek text
- `aria-live` regions for search results and error states
- `@media (prefers-reduced-motion: reduce)` support
- `@media (prefers-contrast: high)` support
- Skeleton loading states with `aria-busy`
- 11 keyboard shortcuts documented in `?` modal

## Data Sources & Licenses

Only permissive or public domain resources:

| Source | Content | License |
|--------|---------|---------|
| Open Hebrew Bible (Tanach.us) | Hebrew OT text | Public Domain |
| SBLGNT | Greek NT text | CC BY 4.0 |
| Open Scriptures Hebrew Bible | Hebrew morphology | CC BY 4.0 |
| MorphGNT | Greek morphology | CC BY-SA 3.0 |
| World English Bible | English fallback text | Public Domain |

## Roadmap

### Next Steps
- [ ] Load real Westminster Leningrad Codex and SBLGNT source texts
- [ ] Complete Genesis and John with full morphological data
- [ ] Implement real translation engine (beyond stub)
- [ ] Full textual variant coverage for key passages
- [ ] Per-verse change history from git log

### Future
- [ ] Full canon coverage (all 66 books with morphology)
- [ ] More target languages (Arabic, Chinese, and beyond)
- [ ] Community annotation layer (separate from canonical translation)
- [ ] Offline-first PWA with service worker
- [ ] REST API for third-party tools
- [ ] Audio pronunciation for original languages

## License

- **Code**: MIT License
- **Translation Output**: CC BY 4.0

## Acknowledgments

- [Tanach.us](https://tanach.us) for public domain Hebrew text
- [SBLGNT](https://sblgnt.com) for CC-licensed Greek text
- [Open Scriptures](https://openscriptures.org) for morphological data
- The open source community for tools and inspiration

---

**Note**: This is a draft translation project. All translations are AI-assisted and require human scholarly review. For authoritative translations, use established translations.
