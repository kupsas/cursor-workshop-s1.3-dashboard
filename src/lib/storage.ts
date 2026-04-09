/**
 * Browser localStorage helpers
 * ----------------------------
 * Next.js renders React on the server first, where `window` and `localStorage` do not exist.
 * Every function here checks for the browser before touching storage so imports are safe
 * from Server Components. When you build the add form / list, use these from a Client
 * Component ("use client") or inside useEffect after mount.
 */

import type { DashboardItem } from "@/lib/sample-data";

/** Key used in localStorage — bump the version suffix if you change the saved JSON shape. */
export const DASHBOARD_STORAGE_KEY = "dashboard-items-v1";

/** True when code is running in the browser (not during SSR). */
export function isBrowser(): boolean {
  return typeof window !== "undefined";
}

/**
 * Read saved items from localStorage.
 * Returns [] if empty, missing, or JSON is invalid (corrupt data won't crash the app).
 */
export function loadItems(): DashboardItem[] {
  if (!isBrowser()) {
    return [];
  }

  try {
    const raw = window.localStorage.getItem(DASHBOARD_STORAGE_KEY);
    if (raw === null || raw === "") {
      return [];
    }
    const parsed: unknown = JSON.parse(raw);
    if (!Array.isArray(parsed)) {
      return [];
    }
    // Minimal runtime check: every element should look like our item (id + title).
    return parsed.filter(isDashboardItemLike) as DashboardItem[];
  } catch {
    return [];
  }
}

/** Narrow unknown JSON to a shape we can treat as DashboardItem (best-effort). */
function isDashboardItemLike(value: unknown): value is DashboardItem {
  if (value === null || typeof value !== "object") {
    return false;
  }
  const o = value as Record<string, unknown>;
  return (
    typeof o.id === "string" &&
    typeof o.title === "string" &&
    typeof o.createdAt === "string" &&
    typeof o.completed === "boolean"
  );
}

/**
 * Save the full list to localStorage (replace entire value).
 * No-op on the server. Call this after add / edit / delete in the UI.
 */
export function saveItems(items: DashboardItem[]): void {
  if (!isBrowser()) {
    return;
  }
  try {
    window.localStorage.setItem(DASHBOARD_STORAGE_KEY, JSON.stringify(items));
  } catch {
    // Quota exceeded or private mode — fail silently; you could surface a toast later.
  }
}

/** Remove saved data (useful while debugging). */
export function clearStorage(): void {
  if (!isBrowser()) {
    return;
  }
  window.localStorage.removeItem(DASHBOARD_STORAGE_KEY);
}
