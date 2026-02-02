# Open Bible Translation

An open source, AI-assisted Bible translation platform with radical transparency. Every word is traceable to the original Hebrew, Aramaic, and Greek sources.

**Status: MVP / Proof of Concept**

## What This Project Does

Open Bible Translation provides:

1. **Source Transparency**: Hover over any translated word to see the original Hebrew/Greek text, transliteration, morphology, and lexicon references.

2. **Multiple Translation Layers**:
   - **Literal**: Word-for-word, preserving source language word order
   - **Idiomatic**: Meaning-based, natural English
   - **Literary**: Poetic/stylistic rendering

3. **Honest Uncertainty**: Confidence indicators show where translation choices were made. Alternative readings are displayed, not hidden.

4. **Variant Awareness**: Textual variants between manuscript traditions are explicitly shown.

5. **Open Source**: All code, data, and translations are open source with permissive licenses.

## Important Disclaimer

**This is a draft translation project, not an authoritative text.**

All translations are AI-assisted drafts intended for study and human review. They have not been approved by qualified biblical scholars or translation committees. For authoritative translations, use established translations like NASB, ESV, NIV, NRSV, etc.

## Quick Start

### Prerequisites

- Node.js 20+
- pnpm 9+

### Installation

```bash
# Clone the repository
git clone https://github.com/jeremiahjordanisaacson/Bible.git
cd Bible

# Install dependencies
pnpm install

# Build all packages
pnpm build

# Start development server
pnpm dev
```

The web app will be available at `http://localhost:3000`.

### Sample Data

The MVP includes sample data for:
- **Genesis 1:1-3** (Hebrew with morphology)
- **John 1:1-3** (Greek with morphology)

This demonstrates the full token-level alignment and hover functionality.

## Project Structure

```
Bible/
├── apps/
│   └── web/                 # Next.js web application
├── packages/
│   ├── schemas/             # TypeScript types and JSON schemas
│   └── pipeline/            # Data processing pipeline
├── data/
│   ├── sources/             # Source text files (Hebrew, Greek)
│   └── output/              # Generated output
└── docs/                    # Documentation
```

## Features

### Currently Working

- [x] Monorepo structure with pnpm workspaces
- [x] TypeScript schemas for all data types
- [x] Next.js web application with:
  - [x] Verse reading view
  - [x] Translation layer toggle (literal/idiomatic/literary)
  - [x] Hover popovers showing source text, transliteration, morphology
  - [x] Study notes display
  - [x] Confidence indicators
  - [x] Basic search
- [x] Sample data for Genesis 1 and John 1
- [x] Pipeline scaffolding
- [x] Static export for GitHub Pages deployment

### Roadmap

- [ ] Full pipeline implementation with real source data
- [ ] Complete Genesis and John books
- [ ] Textual variant display
- [ ] Multilingual translations (Spanish, French, German)
- [ ] GitHub Actions CI/CD
- [ ] Community contribution workflow
- [ ] Full canon coverage

## Data Sources & Licenses

This project only uses permissive or public domain resources:

| Source | Content | License |
|--------|---------|---------|
| Open Hebrew Bible (Tanach.us) | Hebrew OT text | Public Domain |
| SBLGNT | Greek NT text | CC BY 4.0 |
| Open Scriptures Hebrew Bible | Hebrew morphology | CC BY 4.0 |
| MorphGNT | Greek morphology | CC BY-SA 3.0 |

See [Licenses](/apps/web/src/app/licenses/page.tsx) for full details.

## Contributing

Contributions are welcome! You can help by:

1. **Reviewing translations**: Check AI-generated drafts for accuracy
2. **Adding study notes**: Contribute explanatory notes
3. **Improving the pipeline**: Enhance data processing
4. **Adding languages**: Implement new target languages
5. **Reporting issues**: File bugs or suggest improvements

### Contribution Workflow

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request
5. Await review

All contributions go through code review. Translation changes require scholarly review.

## Architecture

### Schemas (`packages/schemas`)

Defines canonical data structures:
- `SourceToken`: Original language words with morphology
- `Verse`: Complete verse with segments
- `VerseTranslation`: Multi-layer translations
- `VerseAlignment`: Token-to-span mappings
- `StudyNote`: Explanatory notes
- `VariantUnit`: Textual variants

### Pipeline (`packages/pipeline`)

Staged data processing:
1. **Ingest**: Load source texts
2. **Tokenize**: Break into words, attach morphology
3. **Translate**: Generate translation layers
4. **Align**: Map translations to source tokens
5. **Notes**: Generate study notes
6. **Index**: Build search indexes

### Web App (`apps/web`)

Next.js application with:
- Server-side rendering
- Static export support
- Radix UI components
- Tailwind CSS styling
- Zustand state management

## Additional Features Considered

Per the spec, here are 20+ features that could improve the platform:

1. Per-verse change history and blame view
2. Citations panel linking to lexicons
3. Community annotations (separate from canonical translation)
4. Interpretive choice highlighting
5. Export to JSON/offline bundles
6. Reading plans
7. Compare translation profiles side-by-side
8. Accessibility (ARIA, keyboard navigation, screen readers)
9. Performance metrics and caching
10. Data provenance view per verse
11. Cross-reference linking
12. Parallel passage display
13. Audio pronunciation guides
14. Flashcard study mode
15. Personal notes and highlights
16. Reading progress tracking
17. API for third-party apps
18. Embed widgets for other sites
19. Print-optimized views
20. Mobile-responsive design
21. Dark mode support
22. Offline-first PWA

**MVP implements**: #8 (basic), #10, #20, #21

## Commands

```bash
# Development
pnpm dev              # Start all services in dev mode
pnpm build            # Build all packages
pnpm test             # Run tests
pnpm lint             # Lint code
pnpm typecheck        # Type check

# Pipeline
pnpm pipeline:full    # Run full pipeline
pnpm pipeline:ingest  # Run ingest stage only
```

## License

- **Code**: MIT License
- **Translation Output**: CC BY 4.0

## Acknowledgments

- [Tanach.us](https://tanach.us) for public domain Hebrew text
- [SBLGNT](https://sblgnt.com) for CC-licensed Greek text
- [Open Scriptures](https://openscriptures.org) for morphological data
- The open source community for tools and inspiration

---

**Note**: This project is an independent effort and is not affiliated with any religious organization or publishing house.
