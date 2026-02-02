# Adding a New Language to Open Bible Translation

This guide explains how to add support for a new target language to the translation platform.

## Overview

The system is designed to scale to many languages while preserving alignment back to the original Hebrew/Greek/Aramaic source tokens. Each language maintains:

1. **Language metadata** - Configuration for the language
2. **Translation files** - Verse-by-verse translations with alignment data
3. **Reviewer overrides** - Human corrections to AI-generated drafts

## Step 1: Configure the Language

Add your language to `packages/pipeline/src/stages/multilingual.ts`:

```typescript
export const TARGET_LANGUAGES: Record<string, LanguageConfig> = {
  // ... existing languages

  // Add your new language:
  sw: {
    code: 'sw',
    name: 'Swahili',
    nativeName: 'Kiswahili',
    direction: 'ltr',  // or 'rtl' for right-to-left
    script: 'Latin',   // Script name
  },
};
```

## Step 2: Add Translation Engine Support

If using AI translation, ensure your translation engine supports the language. The stub engine generates placeholder translations from glosses.

For a real implementation, update `packages/pipeline/src/engines/translation-engine.ts`:

```typescript
export class MyTranslationEngine implements TranslationEngine {
  async translateVerse(
    verseRef: string,
    tokens: VerseTokens,
    targetLanguage: string,  // Use this to select the target
    layers: TranslationLayerType[]
  ): Promise<VerseTranslation> {
    // Your translation logic here
  }
}
```

## Step 3: Run the Pipeline

Generate translations for your language:

```bash
# Add language to config
pnpm pipeline:full --languages en,sw

# Or process a specific book
pnpm pipeline:translate --languages sw --books Gen
```

## Step 4: Review and Override

AI-generated translations are drafts. Create reviewer overrides:

1. Navigate to `data/output/translations/{lang}/overrides/`
2. Create or edit `{lang}.json`:

```json
{
  "languageCode": "sw",
  "overrides": [
    {
      "verseRef": "Gen.1.1",
      "layer": "idiomatic",
      "spanId": "Gen.1.1.sw.idi.0",
      "originalText": "AI generated text",
      "correctedText": "Human corrected text",
      "reason": "Better idiomatic rendering",
      "reviewerId": "reviewer-id",
      "timestamp": "2024-01-15T10:00:00Z",
      "approved": true
    }
  ],
  "count": 1,
  "lastUpdated": "2024-01-15T10:00:00Z"
}
```

## Step 5: Web Interface (Optional)

To add the language to the web UI:

1. Update `apps/web/src/data/` with language data
2. Add language selector to the UI
3. Ensure fonts support the script (update `tailwind.config.ts`)

## Translation Guidelines

### Alignment Preservation

Every translated span **must** reference the source tokens it translates:

```typescript
{
  id: 'Gen.1.1.sw.idi.0',
  text: 'Hapo mwanzo',
  position: 0,
  sourceTokenIds: ['Gen.1.1.0'],  // References Hebrew token
  confidence: 'medium',
}
```

### Layer Consistency

Generate all three layers consistently:

| Layer | Goal | Example (Swahili Gen 1:1) |
|-------|------|---------------------------|
| Literal | Word-for-word | Mwanzo aliuumba Mungu mbingu na nchi |
| Idiomatic | Natural flow | Hapo mwanzo, Mungu aliziuumba mbingu na nchi |
| Literary | Poetic | Zamani za kale, Mungu aliuumba ulimwengu... |

### Confidence Levels

Set appropriate confidence:
- `high` - Well-established translation
- `medium` - Some interpretation involved
- `low` - Significant uncertainty
- `uncertain` - Best guess, needs review

### Notes for Translators

Include translation notes for:
- Cultural adaptations
- Terms without direct equivalents
- Theological term choices
- Idiom handling

## File Structure

After adding a language, the structure should be:

```
data/output/translations/
├── en/
│   ├── metadata.json
│   ├── Gen.translations.json
│   └── overrides/
│       └── en.json
└── sw/
    ├── metadata.json
    ├── Gen.translations.json
    └── overrides/
        └── sw.json
```

## Quality Checklist

Before releasing a new language:

- [ ] All source tokens are aligned
- [ ] Confidence levels are accurate
- [ ] Key terms are consistent
- [ ] Human review completed for sample verses
- [ ] Override file exists (even if empty)
- [ ] Metadata file is complete
- [ ] Fonts render correctly in UI

## Supported Languages

Currently implemented:
- English (en) - Primary target
- Spanish (es) - Sample
- French (fr) - Sample
- German (de) - Sample

Planned:
- Arabic (ar)
- Chinese (zh)
- Portuguese (pt)
- Russian (ru)
- Korean (ko)
- Japanese (ja)

## Getting Help

- Open an issue for technical problems
- Use discussions for translation questions
- Contact language coordinators for review help
