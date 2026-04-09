# Personal Dashboard — Cursor workshop starter

Welcome. This repo is a **small, ready-to-run web app** you will **extend into your own dashboard** during the workshop. You do not start from zero: the tooling and folder layout are already set up so you can focus on **using Cursor** to write and change code.

---

## What you are building (in one sentence)

A **simple dashboard** in the browser to track something you care about—habits, books, tasks, expenses, OKRs, or anything else—with data saved on **your computer** (no database, no login).

---

## Before you start (checklist)

You will need:

1. **This repo on your machine** — clone it or download the zip, then open the folder.
2. **[Node.js](https://nodejs.org/)** (LTS is fine) — so `npm` works in the terminal.
3. **[Cursor](https://cursor.com/)** — open this **same folder** as a project (`File → Open Folder…`).

If the instructor gave you a different branch or fork, use that instead of `main` if they say so.

---

## Right after you open the repo (do this first)

### 1. Install dependencies

Open the **terminal** in Cursor (`Terminal → New Terminal` or the shortcut your instructor shows). Run:

```bash
npm install
```

Wait until it finishes without errors.

### 2. Start the dev server

```bash
npm run dev
```

### 3. See the app in the browser

Open **[http://localhost:3000](http://localhost:3000)**. You should see a short “boilerplate ready” page. That means Next.js and Tailwind are working.

**Tip:** Leave `npm run dev` running while you work. When you change code, the page often refreshes by itself.

To stop the server later: click the terminal and press `Ctrl+C` (Windows/Linux) or `Cmd+C` (Mac).

---

## What is already in this project?

| Piece | What it is for |
| ----- | -------------- |
| **`src/app/`** | Pages and layout. **`page.tsx`** is the home screen you will replace with your real dashboard over time. |
| **`src/components/`** | Put reusable UI here (forms, cards, lists) as you build them. |
| **`src/lib/sample-data.ts`** | Example **TypeScript type** (`DashboardItem`) and fake rows so you can see how data is shaped. |
| **`src/lib/storage.ts`** | Helpers to **read and write** your list in **localStorage** (browser-only storage). |
| **`.cursorrules`** | Hints for Cursor about this stack—Cursor reads this to stay on track. |

You are **not** expected to understand every file on day one. Use Cursor to jump to files and explain them as you go.

---

## Using Cursor if you are new (short version)

**Goal:** You describe what you want in **plain English**, and Cursor helps edit the right files.

1. **Open the AI panel** — Chat or Composer (your instructor will show where; often a side panel or `Cmd+L` / `Cmd+I`-style shortcuts).
2. **Give context** — Mention files when it helps, e.g. “Look at `src/lib/sample-data.ts` and `src/lib/storage.ts`.”
3. **Work in small steps** — e.g. “First only change the data model,” then “add the form,” then “show the list.” Small steps are easier to fix if something breaks.
4. **Read the diff** — Before accepting changes, skim what Cursor added or removed so you learn what the code does.

---

## Decide what *you* are tracking (no extra file needed)

Before you build UI, pick **one** thing to track and **what fields** each row needs.

Examples:

- **Habits:** title, completed today?, notes  
- **Reading list:** book title, author, finished?  
- **Tasks:** title, due date, done?

You will encode that in **`src/lib/sample-data.ts`** (the `DashboardItem` type and any new fields). Cursor can help rename or extend the type—just say what you want each “item” to contain.

---

## What you build (three core features)

Build these **in order**:

1. **Add form** — A way to create a new item (inputs + submit).
2. **List or grid** — Show all items with the info that matters to you.
3. **Filter or status toggle** — e.g. “show only not done” or “this week only.”

**Persistence:** When you save or load the list, use **`loadItems`** and **`saveItems`** from **`src/lib/storage.ts`** from **client** code (components with `"use client"` at the top, or logic inside `useEffect`). The comments in `storage.ts` explain why.

After each step works, **commit** (if you are using git) so you can undo mistakes easily.

---

## Suggested first prompt to Cursor (copy and adapt)

After you know what you are tracking, try something like:

> Read **`src/lib/sample-data.ts`**. I want to track: *[describe your thing—e.g. books I’m reading]*. Each item should have these fields: *[list them]*. Update the `DashboardItem` type and sample data to match. Then help me build an Add form that saves new items with **`saveItems`** and loads them with **`loadItems`**.

Then iterate: list view → filters. Adjust the wording to match your idea.

---

## Stretch goals (if you finish early)

- Summary stats (totals, completed %, streak, etc.)
- Edit and delete items
- Categories or tags with colors
- Deploy to **[Vercel](https://vercel.com)** (connect the repo; use the default Next.js settings)

---

## Commands cheat sheet

| Command | What it does |
| ------- | ------------ |
| `npm install` | Install packages (run once after clone). |
| `npm run dev` | Local dev server at [http://localhost:3000](http://localhost:3000). |
| `npm run build` | Check that the app builds for production (good before deploy). |
| `npm run lint` | Run ESLint. |

You can use `pnpm` or `yarn` instead of `npm` if you already use them—ask the instructor if unsure.

---

## If something goes wrong

- **Port 3000 in use** — Stop the other app using that port, or run `npx next dev -p 3001` and open port `3001`.
- **`npm install` errors** — Confirm Node is installed (`node -v`). Try deleting `node_modules` and `package-lock.json`, then `npm install` again (ask for help before deleting if unsure).
- **Blank or confusing errors in the browser** — Read the message in the terminal where `npm run dev` is running; copy it into Cursor and ask what it means.

---

## Learn more

- [Next.js documentation](https://nextjs.org/docs)

You’ve got the boilerplate and a path: run the app, then pair with Cursor one feature at a time.
