export default function LicensesPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8">Licenses & Attribution</h1>

      <p className="text-lg text-[var(--muted-foreground)] mb-8">
        Open Bible Translation uses only permissive or public domain resources. This page documents
        all data sources and their licenses.
      </p>

      {/* Project License */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Project License</h2>
        <div className="bg-[var(--muted)] rounded-lg p-6">
          <h3 className="font-semibold mb-2">Open Bible Translation Project</h3>
          <p className="text-[var(--muted-foreground)] mb-4">
            The Open Bible Translation project code is licensed under the MIT License.
          </p>
          <p className="text-[var(--muted-foreground)]">
            Translation outputs and study notes are released under Creative Commons Attribution 4.0
            (CC BY 4.0), allowing free use with attribution.
          </p>
        </div>
      </section>

      {/* Source Text Licenses */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Source Text Data</h2>
        <div className="space-y-6">
          <LicenseEntry
            name="Open Hebrew Bible (Tanach.us)"
            type="Hebrew Source Text"
            license="Public Domain"
            licenseUrl="https://tanach.us/License.html"
            description="The Westminster Leningrad Codex with cantillation marks. This text is in the public domain."
            attribution="Tanach.us - Open Hebrew Bible Project"
          />

          <LicenseEntry
            name="SBLGNT"
            type="Greek Source Text"
            license="CC BY 4.0"
            licenseUrl="https://sblgnt.com/license/"
            description="The Society of Biblical Literature Greek New Testament, a critically edited Greek text."
            attribution='The Greek text is the SBLGNT, copyright 2010 Society of Biblical Literature and Logos Bible Software. See https://sblgnt.com.'
          />

          <LicenseEntry
            name="Open Scriptures Hebrew Bible"
            type="Hebrew Morphology"
            license="CC BY 4.0"
            licenseUrl="https://github.com/openscriptures/morphhb/blob/master/LICENSE"
            description="Morphological analysis data for the Hebrew Bible."
            attribution="Open Scriptures Hebrew Bible Morphology - https://hb.openscriptures.org"
          />

          <LicenseEntry
            name="MorphGNT"
            type="Greek Morphology"
            license="CC BY-SA 3.0"
            licenseUrl="https://github.com/morphgnt/sblgnt/blob/master/LICENSE.md"
            description="Morphological analysis data for the Greek New Testament."
            attribution="MorphGNT - https://github.com/morphgnt"
          />
        </div>
      </section>

      {/* Lexicon Data */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Lexicon References</h2>
        <div className="space-y-6">
          <LicenseEntry
            name="Strong&apos;s Concordance"
            type="Lexicon Reference Numbers"
            license="Public Domain"
            description="Strong's numbering system for Hebrew and Greek words. The original concordance is in the public domain."
            attribution="Strong's Exhaustive Concordance, James Strong (1890)"
          />

          <div className="border border-amber-200 bg-amber-50 dark:bg-amber-900/20 dark:border-amber-800 rounded-lg p-6">
            <h3 className="font-semibold text-amber-800 dark:text-amber-200 mb-2">
              Note on Lexicon Data
            </h3>
            <p className="text-amber-800 dark:text-amber-200 text-sm">
              While Strong&apos;s numbers are in the public domain, full lexicon definitions from
              sources like BDB (Brown-Driver-Briggs) or BDAG are under copyright. This project
              provides links to external lexicon resources rather than embedding copyrighted
              definitions.
            </p>
          </div>
        </div>
      </section>

      {/* Software */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Software Libraries</h2>
        <p className="text-[var(--muted-foreground)] mb-4">
          This project uses various open source software libraries. Key dependencies include:
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          <SoftwareLicense name="Next.js" license="MIT" url="https://nextjs.org" />
          <SoftwareLicense name="React" license="MIT" url="https://react.dev" />
          <SoftwareLicense name="TypeScript" license="Apache 2.0" url="https://www.typescriptlang.org" />
          <SoftwareLicense name="Tailwind CSS" license="MIT" url="https://tailwindcss.com" />
          <SoftwareLicense name="Radix UI" license="MIT" url="https://www.radix-ui.com" />
          <SoftwareLicense name="Zod" license="MIT" url="https://zod.dev" />
          <SoftwareLicense name="Zustand" license="MIT" url="https://zustand-demo.pmnd.rs" />
          <SoftwareLicense name="pnpm" license="MIT" url="https://pnpm.io" />
        </div>
      </section>

      {/* Attribution Requirements */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Attribution Requirements</h2>
        <p className="text-[var(--muted-foreground)] mb-4">
          If you use this project&apos;s translations or data, please include the following
          attribution:
        </p>
        <div className="bg-[var(--muted)] rounded-lg p-4 font-mono text-sm">
          <p>Translation data from Open Bible Translation Project</p>
          <p>(https://github.com/jeremiahjordanisaacson/Bible)</p>
          <p>Licensed under CC BY 4.0</p>
          <p className="mt-2">Source texts:</p>
          <p>- Hebrew: Open Hebrew Bible (Tanach.us) - Public Domain</p>
          <p>- Greek: SBLGNT (sblgnt.com) - CC BY 4.0</p>
        </div>
      </section>

      {/* What We Do NOT Include */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Excluded Content</h2>
        <p className="text-[var(--muted-foreground)] mb-4">
          To ensure compliance with copyright law, this project does <strong>not</strong> include:
        </p>
        <ul className="list-disc list-inside space-y-2 text-[var(--muted-foreground)]">
          <li>Text from copyrighted modern Bible translations (NIV, ESV, NASB, etc.)</li>
          <li>Full text from copyrighted lexicons (BDAG, BDB enhanced editions, etc.)</li>
          <li>Copyrighted commentary content</li>
          <li>Scraped or unauthorized content from any source</li>
        </ul>
        <p className="text-[var(--muted-foreground)] mt-4">
          If you believe any content in this project infringes on copyright, please{' '}
          <a
            href="https://github.com/jeremiahjordanisaacson/Bible/issues"
            className="text-[var(--accent)] hover:underline"
          >
            open an issue
          </a>{' '}
          immediately.
        </p>
      </section>
    </div>
  );
}

function LicenseEntry({
  name,
  type,
  license,
  licenseUrl,
  description,
  attribution,
}: {
  name: string;
  type: string;
  license: string;
  licenseUrl?: string;
  description: string;
  attribution: string;
}) {
  return (
    <div className="border border-[var(--border)] rounded-lg p-6">
      <div className="flex justify-between items-start mb-2">
        <div>
          <h3 className="font-semibold">{name}</h3>
          <span className="text-sm text-[var(--muted-foreground)]">{type}</span>
        </div>
        {licenseUrl ? (
          <a
            href={licenseUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm bg-green-100 text-green-800 px-2 py-1 rounded hover:bg-green-200"
          >
            {license}
          </a>
        ) : (
          <span className="text-sm bg-green-100 text-green-800 px-2 py-1 rounded">{license}</span>
        )}
      </div>
      <p className="text-[var(--muted-foreground)] text-sm mb-3">{description}</p>
      <div className="bg-[var(--muted)] rounded p-3">
        <div className="text-xs uppercase tracking-wide text-[var(--muted-foreground)] mb-1">
          Attribution
        </div>
        <p className="text-sm">{attribution}</p>
      </div>
    </div>
  );
}

function SoftwareLicense({
  name,
  license,
  url,
}: {
  name: string;
  license: string;
  url: string;
}) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="border border-[var(--border)] rounded-lg p-4 hover:border-[var(--accent)] transition flex justify-between items-center"
    >
      <span className="font-medium">{name}</span>
      <span className="text-sm text-[var(--muted-foreground)]">{license}</span>
    </a>
  );
}
