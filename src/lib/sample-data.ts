/**
 * Dashboard data model (starter)
 * ----------------------------
 * This file defines the shape of one "item" you track (habit, book, task, expense, etc.).
 *
 * After you decide what you are tracking (see README.md), you will often:
 * - Add or rename fields (e.g. `dueDate`, `pagesRead`, `amount`)
 * - Keep `id` + `createdAt` so every row is unique and sortable by time
 *
 * The sample array below is only for learning — your real data will be saved
 * in the browser via src/lib/storage.ts (localStorage).
 */

/** One row in your dashboard (customize fields for your use case). */
export type DashboardItem = {
  /** Stable unique id (use crypto.randomUUID() in the browser when creating new items). */
  id: string;
  /** Short label shown in the list (book title, habit name, task text, etc.). */
  title: string;
  /** When the item was first created (ISO 8601 string, e.g. from new Date().toISOString()). */
  createdAt: string;
  /** When the item was last changed, if you support edits (optional). */
  updatedAt?: string;
  /** Simple done / not-done flag — handy for filters like "show only incomplete". */
  completed: boolean;
  /** Extra text the user can add later (optional). */
  notes?: string;
  /** Optional grouping: "Work", "Health", genre, etc. */
  category?: string;
};

/**
 * Example items so you can see the shape in code and in TypeScript autocomplete.
 * Your app should load/save the real list with loadItems() / saveItems() in storage.ts.
 */
export const SAMPLE_ITEMS: DashboardItem[] = [
  {
    id: "sample-1",
    title: "Morning stretch",
    createdAt: "2026-04-01T08:00:00.000Z",
    completed: true,
    category: "Health",
    notes: "5 minutes after waking up",
  },
  {
    id: "sample-2",
    title: "Read chapter 3",
    createdAt: "2026-04-02T19:30:00.000Z",
    completed: false,
    category: "Reading",
  },
  {
    id: "sample-3",
    title: "Review project brief",
    createdAt: "2026-04-03T12:00:00.000Z",
    updatedAt: "2026-04-03T14:00:00.000Z",
    completed: false,
    notes: "Define fields before building the add form",
  },
];
