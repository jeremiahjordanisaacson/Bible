'use client';

import * as React from 'react';
import Link from 'next/link';
import { getBook } from '@/data/books-metadata';

// Simple reading plans
const PLANS = {
  gospels: {
    name: 'Gospels in 30 Days',
    description: 'Read through Matthew, Mark, Luke, and John',
    readings: [
      { day: 1, book: 'Matt', chapters: [1, 2, 3] },
      { day: 2, book: 'Matt', chapters: [4, 5, 6] },
      { day: 3, book: 'Matt', chapters: [7, 8, 9] },
      { day: 4, book: 'Matt', chapters: [10, 11, 12] },
      { day: 5, book: 'Matt', chapters: [13, 14, 15] },
      { day: 6, book: 'Matt', chapters: [16, 17, 18] },
      { day: 7, book: 'Matt', chapters: [19, 20, 21] },
      { day: 8, book: 'Matt', chapters: [22, 23, 24] },
      { day: 9, book: 'Matt', chapters: [25, 26, 27, 28] },
      { day: 10, book: 'Mark', chapters: [1, 2, 3] },
      { day: 11, book: 'Mark', chapters: [4, 5, 6] },
      { day: 12, book: 'Mark', chapters: [7, 8, 9] },
      { day: 13, book: 'Mark', chapters: [10, 11, 12] },
      { day: 14, book: 'Mark', chapters: [13, 14, 15, 16] },
      { day: 15, book: 'Luke', chapters: [1, 2, 3] },
      { day: 16, book: 'Luke', chapters: [4, 5, 6] },
      { day: 17, book: 'Luke', chapters: [7, 8, 9] },
      { day: 18, book: 'Luke', chapters: [10, 11, 12] },
      { day: 19, book: 'Luke', chapters: [13, 14, 15] },
      { day: 20, book: 'Luke', chapters: [16, 17, 18] },
      { day: 21, book: 'Luke', chapters: [19, 20, 21] },
      { day: 22, book: 'Luke', chapters: [22, 23, 24] },
      { day: 23, book: 'John', chapters: [1, 2, 3] },
      { day: 24, book: 'John', chapters: [4, 5, 6] },
      { day: 25, book: 'John', chapters: [7, 8, 9] },
      { day: 26, book: 'John', chapters: [10, 11, 12] },
      { day: 27, book: 'John', chapters: [13, 14, 15] },
      { day: 28, book: 'John', chapters: [16, 17, 18] },
      { day: 29, book: 'John', chapters: [19, 20] },
      { day: 30, book: 'John', chapters: [21] },
    ],
  },
  genesis: {
    name: 'Genesis in 10 Days',
    description: 'Read through the book of Genesis',
    readings: [
      { day: 1, book: 'Gen', chapters: [1, 2, 3, 4, 5] },
      { day: 2, book: 'Gen', chapters: [6, 7, 8, 9, 10] },
      { day: 3, book: 'Gen', chapters: [11, 12, 13, 14, 15] },
      { day: 4, book: 'Gen', chapters: [16, 17, 18, 19, 20] },
      { day: 5, book: 'Gen', chapters: [21, 22, 23, 24, 25] },
      { day: 6, book: 'Gen', chapters: [26, 27, 28, 29, 30] },
      { day: 7, book: 'Gen', chapters: [31, 32, 33, 34, 35] },
      { day: 8, book: 'Gen', chapters: [36, 37, 38, 39, 40] },
      { day: 9, book: 'Gen', chapters: [41, 42, 43, 44, 45] },
      { day: 10, book: 'Gen', chapters: [46, 47, 48, 49, 50] },
    ],
  },
  psalms: {
    name: 'Psalms in 30 Days',
    description: 'Read 5 Psalms each day',
    readings: Array.from({ length: 30 }, (_, i) => ({
      day: i + 1,
      book: 'Ps',
      chapters: Array.from({ length: 5 }, (_, j) => i * 5 + j + 1).filter(c => c <= 150),
    })),
  },
};

const STORAGE_KEY = 'reading-plan';

interface PlanProgress {
  planId: string;
  startDate: string;
  completedDays: number[];
}

function getPlanProgress(): PlanProgress | null {
  if (typeof window === 'undefined') return null;
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : null;
  } catch {
    return null;
  }
}

function savePlanProgress(progress: PlanProgress): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
}

function startPlan(planId: string): PlanProgress {
  const progress: PlanProgress = {
    planId,
    startDate: new Date().toISOString(),
    completedDays: [],
  };
  savePlanProgress(progress);
  return progress;
}

export function ReadingPlan() {
  const [progress, setProgress] = React.useState<PlanProgress | null>(null);
  const [showPlans, setShowPlans] = React.useState(false);

  React.useEffect(() => {
    setProgress(getPlanProgress());
  }, []);

  const handleStartPlan = (planId: string) => {
    const newProgress = startPlan(planId);
    setProgress(newProgress);
    setShowPlans(false);
  };

  const handleMarkComplete = (day: number) => {
    if (!progress) return;
    const updated = {
      ...progress,
      completedDays: progress.completedDays.includes(day)
        ? progress.completedDays.filter((d) => d !== day)
        : [...progress.completedDays, day],
    };
    savePlanProgress(updated);
    setProgress(updated);
  };

  const handleResetPlan = () => {
    localStorage.removeItem(STORAGE_KEY);
    setProgress(null);
  };

  if (!progress) {
    return (
      <div className="bg-[var(--card)] border border-[var(--border)] rounded-lg p-4">
        <h3 className="font-semibold mb-2 flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4 h-4 text-[var(--accent)]"
          >
            <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
            <line x1="16" x2="16" y1="2" y2="6" />
            <line x1="8" x2="8" y1="2" y2="6" />
            <line x1="3" x2="21" y1="10" y2="10" />
          </svg>
          Reading Plans
        </h3>
        {showPlans ? (
          <div className="space-y-2">
            {Object.entries(PLANS).map(([id, plan]) => (
              <button
                key={id}
                onClick={() => handleStartPlan(id)}
                className="w-full text-left p-2 rounded hover:bg-[var(--muted)] transition-colors"
              >
                <div className="font-medium text-sm">{plan.name}</div>
                <div className="text-xs text-[var(--muted-foreground)]">
                  {plan.description}
                </div>
              </button>
            ))}
            <button
              onClick={() => setShowPlans(false)}
              className="text-xs text-[var(--muted-foreground)] hover:text-[var(--foreground)]"
            >
              Cancel
            </button>
          </div>
        ) : (
          <div>
            <p className="text-sm text-[var(--muted-foreground)] mb-3">
              Start a structured reading plan to read through Scripture systematically.
            </p>
            <button
              onClick={() => setShowPlans(true)}
              className="px-3 py-1.5 text-sm bg-[var(--accent)] text-[var(--accent-foreground)] rounded"
            >
              Choose a Plan
            </button>
          </div>
        )}
      </div>
    );
  }

  const plan = PLANS[progress.planId as keyof typeof PLANS];
  if (!plan) return null;

  const completedCount = progress.completedDays.length;
  const totalDays = plan.readings.length;
  const percentComplete = Math.round((completedCount / totalDays) * 100);

  return (
    <div className="bg-[var(--card)] border border-[var(--border)] rounded-lg p-4">
      <div className="flex items-center justify-between mb-2">
        <h3 className="font-semibold flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4 h-4 text-[var(--accent)]"
          >
            <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
            <line x1="16" x2="16" y1="2" y2="6" />
            <line x1="8" x2="8" y1="2" y2="6" />
            <line x1="3" x2="21" y1="10" y2="10" />
          </svg>
          {plan.name}
        </h3>
        <button
          onClick={handleResetPlan}
          className="text-xs text-[var(--muted-foreground)] hover:text-red-500"
        >
          Reset
        </button>
      </div>
      <div className="mb-3">
        <div className="flex justify-between text-xs text-[var(--muted-foreground)] mb-1">
          <span>{completedCount} of {totalDays} days</span>
          <span>{percentComplete}%</span>
        </div>
        <div className="h-2 bg-[var(--muted)] rounded-full overflow-hidden">
          <div
            className="h-full bg-[var(--accent)] transition-all"
            style={{ width: `${percentComplete}%` }}
          />
        </div>
      </div>
      <div className="space-y-1 max-h-48 overflow-y-auto">
        {plan.readings.slice(0, 7).map((reading) => {
          const isComplete = progress.completedDays.includes(reading.day);
          const book = getBook(reading.book);
          return (
            <div
              key={reading.day}
              className="flex items-center gap-2 text-sm"
            >
              <button
                onClick={() => handleMarkComplete(reading.day)}
                className={`w-5 h-5 rounded border flex items-center justify-center ${
                  isComplete
                    ? 'bg-[var(--accent)] border-[var(--accent)] text-[var(--accent-foreground)]'
                    : 'border-[var(--border)] hover:border-[var(--accent)]'
                }`}
              >
                {isComplete && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    className="w-3 h-3"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                )}
              </button>
              <span className={`flex-1 ${isComplete ? 'line-through text-[var(--muted-foreground)]' : ''}`}>
                Day {reading.day}: {book?.name || reading.book} {reading.chapters.join(', ')}
              </span>
              <Link
                href={`/read/${reading.book}/${reading.chapters[0]}/`}
                className="text-[var(--accent)] hover:underline text-xs"
              >
                Read
              </Link>
            </div>
          );
        })}
        {plan.readings.length > 7 && (
          <div className="text-xs text-[var(--muted-foreground)] pt-1">
            +{plan.readings.length - 7} more days
          </div>
        )}
      </div>
    </div>
  );
}

export default ReadingPlan;
