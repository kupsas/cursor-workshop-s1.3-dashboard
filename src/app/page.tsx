import { SAMPLE_ITEMS } from "@/lib/sample-data";

/**
 * Home page — boilerplate only.
 * The real dashboard (add form, list, filters) comes next; see README.md and prd_project2_dashboard.md.
 * SAMPLE_ITEMS.length is static (bundled at build time) — we do not read localStorage here to avoid SSR/hydration issues.
 */
export default function Home() {
  return (
    <div className="flex min-h-full flex-col items-center justify-center bg-zinc-50 px-6 py-16 dark:bg-zinc-950">
      <main className="w-full max-w-lg text-center">
        <h1 className="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
          Personal dashboard boilerplate
        </h1>
        <p className="mt-4 text-zinc-600 dark:text-zinc-400">
          Next.js, TypeScript, and Tailwind are wired up. Follow{" "}
          <code className="rounded bg-zinc-200 px-1.5 py-0.5 text-sm dark:bg-zinc-800">
            README.md
          </code>{" "}
          to decide what you track and build the add form and list using{" "}
          <code className="rounded bg-zinc-200 px-1.5 py-0.5 text-sm dark:bg-zinc-800">
            src/lib/storage.ts
          </code>
          .
        </p>
        <p className="mt-6 text-sm text-zinc-500 dark:text-zinc-500">
          Sample data model includes {SAMPLE_ITEMS.length} example items in{" "}
          <code className="rounded bg-zinc-200 px-1 py-0.5 dark:bg-zinc-800">
            src/lib/sample-data.ts
          </code>
          .
        </p>
      </main>
    </div>
  );
}
