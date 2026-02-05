# Additional Features for Trust, Correctness, Usability, and Scholarly Value

## Feature List (25 items)

### Trust & Transparency
1. **Per-verse change history and blame view** - Show git-based history of every translation revision with diffs
2. **Data provenance view per verse** - Display pipeline version, source dataset, engine ID, and timestamp for every generated output
3. **Confidence heat map** - Color-code verses/words by confidence level so readers instantly see uncertain areas
4. **Interpretive choice highlighting** - Visually mark spans where a theological or interpretive decision was made
5. **Audit trail export** - Export full provenance chain for any verse as JSON for external review

### Correctness & Scholarship
6. **Citations panel** - Link study notes to specific lexicon entries, grammar references, and academic sources
7. **Cross-reference linking** - Show related passages inline with hover preview
8. **Parallel passage display** - Side-by-side view of synoptic passages or parallel accounts
9. **Lemma frequency analysis** - Show how often a lemma appears across the canon and where
10. **Back-translation verification** - Display machine back-translation to help verify meaning preservation

### Usability
11. **Compare translation profiles side by side** - Literal, idiomatic, and literary in columns
12. **Export to JSON and offline bundles** - Download verse data, full books, or entire dataset
13. **Reading plans** - Curated reading sequences (chronological, thematic, book-by-book)
14. **Keyboard navigation** - Arrow keys for verse navigation, shortcuts for layers/modes
15. **Text-to-speech** - Audio playback of translations and original language pronunciation
16. **Personal bookmarks and highlights** - Save favorite verses with color-coded highlights
17. **Offline-first PWA** - Service worker for offline access with background sync
18. **Print-optimized views** - Clean print layouts for study groups and personal use

### Accessibility
19. **WCAG 2.1 AA compliance** - Proper ARIA labels, keyboard focus, screen reader support
20. **High contrast mode** - Dedicated theme for visual impairments
21. **Adjustable font sizes and line spacing** - Already partially implemented, expand with presets

### Performance & Developer Experience
22. **Performance metrics and caching** - Page load budgets, Lighthouse scores, aggressive caching
23. **Community annotations** - Separate layer for community notes distinct from canonical translation
24. **API for third-party apps** - REST/GraphQL API for external tools to query verse data
25. **Embed widgets** - Embeddable verse cards for other websites

---

## Top 5 Selected for MVP Implementation

### 1. Compare translation profiles side by side (Feature #11)
**Why:** Core to the transparency mission. Users need to see all three layers simultaneously.
**Scope:** Split-pane view showing literal, idiomatic, and literary with aligned highlighting.

### 2. Export to JSON and offline bundles (Feature #12)
**Why:** Open data mission. Researchers and developers should be able to access raw data.
**Scope:** Download buttons for verse JSON, book JSON, and full dataset ZIP.

### 3. Keyboard navigation (Feature #14)
**Why:** Power users and accessibility. Essential for study workflow.
**Scope:** Arrow keys, j/k navigation, layer switching, mode toggles.

### 4. Data provenance view per verse (Feature #2)
**Why:** Transparency requirement from spec. Users must see how data was generated.
**Scope:** Expandable metadata panel showing pipeline version, sources, engine, timestamp.

### 5. Cross-reference linking (Feature #7)
**Why:** Scholarly value. Understanding related passages is essential for Bible study.
**Scope:** Inline cross-reference chips that show related verse text on hover.
