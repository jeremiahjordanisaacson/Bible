# Contributing to Open Bible Translation

Thank you for your interest in contributing! This document explains how to participate in the project.

## Ways to Contribute

### 1. Review Translations
The most valuable contribution is reviewing AI-generated translation drafts:
- Check accuracy against the original language
- Flag errors or unclear renderings
- Suggest improvements
- Add confidence assessments

### 2. Write Study Notes
Add scholarly notes explaining:
- Translation choices
- Alternative readings
- Cultural/historical context
- Textual criticism issues

### 3. Improve Code
Enhance the platform:
- Fix bugs
- Add features
- Improve performance
- Write tests

### 4. Add Languages
Implement new target languages:
- Create language configuration
- Adapt pipeline for the language
- Generate initial drafts
- Recruit reviewers

### 5. Documentation
Improve documentation:
- User guides
- Developer documentation
- Contribution guides
- Tutorials

## Getting Started

### Prerequisites
- Node.js 20+
- pnpm 9+
- Git

### Setup
```bash
git clone https://github.com/jeremiahjordanisaacson/Bible.git
cd Bible
pnpm install
pnpm dev
```

### Project Structure
- `apps/web/` - Next.js web application
- `packages/schemas/` - TypeScript types
- `packages/pipeline/` - Data processing
- `data/` - Source texts and output
- `docs/` - Documentation

## Contribution Workflow

### For Code Changes
1. Fork the repository
2. Create a feature branch: `git checkout -b feature/my-feature`
3. Make changes
4. Run tests: `pnpm test`
5. Run type check: `pnpm typecheck`
6. Commit with clear message
7. Push and open a Pull Request

### For Translation Reviews
1. Navigate to the verse in the web app
2. Review the translation against the original
3. Open an issue or PR with corrections
4. Include:
   - Verse reference
   - Current translation
   - Suggested correction
   - Reason/evidence

### For Study Notes
1. Identify a verse needing notes
2. Write note following the schema:
   - Category (lexical, grammatical, theological, etc.)
   - Title
   - Content (markdown)
   - Confidence level
   - References
3. Submit via PR

## Code Standards

### TypeScript
- Strict mode enabled
- Proper types (no `any` without comment)
- JSDoc for public APIs

### Testing
- Unit tests for utilities
- Integration tests for pipeline
- E2E tests for critical paths

### Style
- Use Prettier for formatting
- Follow ESLint rules
- Meaningful variable names
- Comments for complex logic

## Commit Messages

Follow conventional commits:
```
type(scope): description

[optional body]

[optional footer]
```

Types:
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation
- `style`: Formatting
- `refactor`: Code restructuring
- `test`: Tests
- `chore`: Maintenance

Examples:
```
feat(web): add verse history view
fix(pipeline): correct Hebrew tokenization
docs: update contribution guide
```

## Pull Request Process

1. Fill out the PR template
2. Link related issues
3. Ensure CI passes
4. Request review
5. Address feedback
6. Await merge

### PR Requirements
- [ ] Tests pass
- [ ] Type check passes
- [ ] Lint passes
- [ ] Documentation updated (if needed)
- [ ] Changelog updated (for features)

## Review Guidelines

### For Code Reviews
- Functionality: Does it work?
- Tests: Are they sufficient?
- Style: Does it follow conventions?
- Performance: Any concerns?
- Security: Any vulnerabilities?

### For Translation Reviews
- Accuracy: Does it match the source?
- Clarity: Is it understandable?
- Consistency: Does it match project style?
- Confidence: Is uncertainty flagged?

## Community Guidelines

### Be Respectful
- Assume good faith
- Be constructive in feedback
- Welcome newcomers
- Respect different perspectives

### On Theological Matters
- This is a translation project, not a theological advocacy project
- Present scholarly views fairly
- Flag contested interpretations
- Don't promote specific doctrines

### Licensing
- Only contribute content you have rights to
- Ensure compatibility with project licenses
- Never include copyrighted material without permission

## Getting Help

- **Questions**: Open a Discussion
- **Bugs**: Open an Issue
- **Ideas**: Open a Discussion first
- **Security**: Email maintainers directly

## Recognition

Contributors are recognized in:
- Git commit history
- CONTRIBUTORS.md file
- Release notes

## License

By contributing, you agree that your contributions will be licensed under:
- MIT License (code)
- CC BY 4.0 (translations and notes)
