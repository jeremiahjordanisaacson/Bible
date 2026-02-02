import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8">About Open Bible Translation</h1>

      {/* Mission */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
        <p className="text-lg text-[var(--muted-foreground)] leading-relaxed">
          Open Bible Translation is an open source project that uses AI to assist humans in
          producing Bible translations that stay as close as possible to the earliest available
          source texts, while being radically transparent about uncertainty, variants, and
          interpretive choices.
        </p>
      </section>

      {/* Principles */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Core Principles</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <PrincipleCard
            title="Source Transparency"
            description="Every translated word links back to the original Hebrew, Aramaic, or Greek text. Readers can verify translations against the source at any time."
          />
          <PrincipleCard
            title="Multiple Layers"
            description="We provide literal, idiomatic, and literary translation layers so readers can see how meaning is conveyed differently in each approach."
          />
          <PrincipleCard
            title="Honest About Uncertainty"
            description="We never hide ambiguity. When there are multiple valid interpretations, we show them. Confidence levels indicate where choices were made."
          />
          <PrincipleCard
            title="Variant Awareness"
            description="Textual variants between manuscript traditions are explicitly represented, not hidden. Readers can see where ancient sources differ."
          />
          <PrincipleCard
            title="Human Review"
            description="AI-generated translations are drafts for human review, not final authoritative texts. All output goes through a GitHub-based review workflow."
          />
          <PrincipleCard
            title="Open Source"
            description="All code, data, and translations are open source. Anyone can contribute, review, or build upon this work."
          />
        </div>
      </section>

      {/* Important Disclaimer */}
      <section className="mb-12 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4 text-amber-800 dark:text-amber-200">
          Important Disclaimer
        </h2>
        <div className="text-amber-800 dark:text-amber-200 space-y-4">
          <p>
            <strong>This is a draft translation project, not an authoritative text.</strong>
          </p>
          <p>
            All translations provided here are AI-assisted drafts intended for study and review.
            They have not been reviewed by qualified biblical scholars or translation committees.
          </p>
          <p>
            For authoritative translations, please consult established Bible translations such as
            the NASB, ESV, NIV, NRSV, or others produced by qualified translation teams.
          </p>
          <p>
            The purpose of this project is to make the process of translation more transparent
            and to provide tools for studying the original biblical languages, not to replace
            scholarly translations.
          </p>
        </div>
      </section>

      {/* How It Works */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">How It Works</h2>
        <div className="space-y-6">
          <ProcessStep
            number={1}
            title="Source Text Ingestion"
            description="We ingest Hebrew (Masoretic Text), Aramaic, and Greek (NA28/UBS5) source texts from permissive or public domain sources. Each word is tokenized with morphological analysis."
          />
          <ProcessStep
            number={2}
            title="AI-Assisted Translation"
            description="AI generates draft translations at multiple levels: literal (word-for-word), idiomatic (natural English), and literary (poetic). Each translation includes alignment data back to source tokens."
          />
          <ProcessStep
            number={3}
            title="Study Notes Generation"
            description="AI generates explanatory notes for translation choices, ambiguous passages, and scholarly considerations. Notes clearly distinguish certainty levels."
          />
          <ProcessStep
            number={4}
            title="Human Review"
            description="All AI output is treated as a draft. Humans review through GitHub pull requests. Changes are tracked with full version history."
          />
          <ProcessStep
            number={5}
            title="Continuous Improvement"
            description="The pipeline can be rerun to incorporate improvements. Regression tests ensure changes don&apos;t break existing alignments or introduce errors."
          />
        </div>
      </section>

      {/* Data Sources */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Data Sources & Licenses</h2>
        <p className="text-[var(--muted-foreground)] mb-6">
          We only use permissive or public domain resources. See the{' '}
          <Link href="/licenses/" className="text-[var(--accent)] hover:underline">
            Licenses page
          </Link>{' '}
          for complete details.
        </p>
        <div className="space-y-4">
          <DataSource
            name="Open Hebrew Bible (Tanach.us)"
            description="Masoretic Hebrew text with cantillation marks"
            license="Public Domain"
          />
          <DataSource
            name="SBLGNT"
            description="Society of Biblical Literature Greek New Testament"
            license="CC BY 4.0"
          />
          <DataSource
            name="Open Scriptures Hebrew Bible"
            description="Morphological data for Hebrew text"
            license="CC BY 4.0"
          />
          <DataSource
            name="MorphGNT"
            description="Morphological data for Greek text"
            license="CC BY-SA 3.0"
          />
        </div>
      </section>

      {/* Contributing */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Contributing</h2>
        <p className="text-[var(--muted-foreground)] mb-4">
          This is an open source project and contributions are welcome. You can help by:
        </p>
        <ul className="list-disc list-inside space-y-2 text-[var(--muted-foreground)]">
          <li>Reviewing AI-generated translations for accuracy</li>
          <li>Adding study notes and cross-references</li>
          <li>Improving the translation pipeline</li>
          <li>Adding support for new target languages</li>
          <li>Reporting issues and suggesting improvements</li>
          <li>Contributing to documentation</li>
        </ul>
        <div className="mt-6">
          <a
            href="https://github.com/jeremiahjordanisaacson/Bible"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--foreground)] text-[var(--background)] rounded hover:opacity-90"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            View on GitHub
          </a>
        </div>
      </section>

      {/* Contact */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Contact</h2>
        <p className="text-[var(--muted-foreground)]">
          For questions, suggestions, or issues, please{' '}
          <a
            href="https://github.com/jeremiahjordanisaacson/Bible/issues"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--accent)] hover:underline"
          >
            open an issue on GitHub
          </a>
          .
        </p>
      </section>
    </div>
  );
}

function PrincipleCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="border border-[var(--border)] rounded-lg p-4">
      <h3 className="font-semibold mb-2">{title}</h3>
      <p className="text-sm text-[var(--muted-foreground)]">{description}</p>
    </div>
  );
}

function ProcessStep({
  number,
  title,
  description,
}: {
  number: number;
  title: string;
  description: string;
}) {
  return (
    <div className="flex gap-4">
      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[var(--accent)] text-[var(--accent-foreground)] flex items-center justify-center font-bold">
        {number}
      </div>
      <div>
        <h3 className="font-semibold">{title}</h3>
        <p className="text-[var(--muted-foreground)] mt-1">{description}</p>
      </div>
    </div>
  );
}

function DataSource({
  name,
  description,
  license,
}: {
  name: string;
  description: string;
  license: string;
}) {
  return (
    <div className="border border-[var(--border)] rounded-lg p-4">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="font-semibold">{name}</h3>
          <p className="text-sm text-[var(--muted-foreground)] mt-1">{description}</p>
        </div>
        <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">{license}</span>
      </div>
    </div>
  );
}
