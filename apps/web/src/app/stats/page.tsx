import { Metadata } from 'next';
import { allBooks, bibleStats, categories, getBooksByCategory, oldTestamentBooks, newTestamentBooks } from '@/data/books-metadata';

export const metadata: Metadata = {
  title: 'Bible Statistics | Open Bible',
  description: 'Statistics and coverage of the Open Bible Translation project',
};

// Books with rich sample data
const RICH_DATA_BOOKS = ['Gen', 'John'];

export default function StatsPage() {
  const richChapters = 2; // Gen 1 and John 1
  const coveragePercent = ((richChapters / bibleStats.totalChapters) * 100).toFixed(2);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Bible Statistics</h1>

      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="bg-[var(--muted)] rounded-lg p-6">
          <div className="text-3xl font-bold text-[var(--accent)]">{bibleStats.totalBooks}</div>
          <div className="text-[var(--muted-foreground)]">Total Books</div>
        </div>
        <div className="bg-[var(--muted)] rounded-lg p-6">
          <div className="text-3xl font-bold text-[var(--accent)]">{bibleStats.totalChapters.toLocaleString()}</div>
          <div className="text-[var(--muted-foreground)]">Total Chapters</div>
        </div>
        <div className="bg-[var(--muted)] rounded-lg p-6">
          <div className="text-3xl font-bold text-[var(--accent)]">{coveragePercent}%</div>
          <div className="text-[var(--muted-foreground)]">Rich Data Coverage</div>
        </div>
      </div>

      {/* Testament Breakdown */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="border border-[var(--border)] rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Old Testament</h2>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-[var(--muted-foreground)]">Books</span>
              <span className="font-medium">{bibleStats.oldTestamentBooks}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[var(--muted-foreground)]">Chapters</span>
              <span className="font-medium">{bibleStats.oldTestamentChapters}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[var(--muted-foreground)]">Primary Language</span>
              <span className="font-medium">Hebrew</span>
            </div>
          </div>
        </div>

        <div className="border border-[var(--border)] rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">New Testament</h2>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-[var(--muted-foreground)]">Books</span>
              <span className="font-medium">{bibleStats.newTestamentBooks}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[var(--muted-foreground)]">Chapters</span>
              <span className="font-medium">{bibleStats.newTestamentChapters}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[var(--muted-foreground)]">Primary Language</span>
              <span className="font-medium">Greek</span>
            </div>
          </div>
        </div>
      </div>

      {/* Data Coverage */}
      <div className="border border-[var(--border)] rounded-lg p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4">Data Coverage</h2>
        <p className="text-[var(--muted-foreground)] mb-4">
          All 66 books have basic text available via the World English Bible (public domain).
          Rich morphological data with study tools is currently available for:
        </p>
        <div className="flex gap-4">
          {RICH_DATA_BOOKS.map((code) => {
            const book = allBooks.find(b => b.code === code);
            return (
              <a
                key={code}
                href={`/read/${code}/1/`}
                className="px-4 py-2 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 rounded-lg hover:bg-green-200 dark:hover:bg-green-900/50 transition-colors"
              >
                {book?.name} 1
              </a>
            );
          })}
        </div>
      </div>

      {/* Category Breakdown */}
      <div className="border border-[var(--border)] rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">Books by Category</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {categories.map((category) => {
            const books = getBooksByCategory(category);
            const totalChapters = books.reduce((sum, b) => sum + b.chapters, 0);

            return (
              <div key={category} className="bg-[var(--muted)] rounded-lg p-4">
                <h3 className="font-medium mb-2">{category}</h3>
                <div className="text-sm text-[var(--muted-foreground)] mb-2">
                  {books.length} books · {totalChapters} chapters
                </div>
                <div className="text-xs text-[var(--muted-foreground)]">
                  {books.map(b => b.name).join(', ')}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
