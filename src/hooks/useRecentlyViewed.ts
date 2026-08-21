import { useState } from "react";

const KEY = "ev-recent";
const MAX = 6;

interface RecentEntry { id: number; ts: number; }

function load(): RecentEntry[] {
  try {
    const raw = localStorage.getItem(KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function save(entries: RecentEntry[]) {
  try { localStorage.setItem(KEY, JSON.stringify(entries)); } catch {}
}

export function useRecentlyViewed() {
  const [recent, setRecent] = useState<RecentEntry[]>(load);

  const track = (id: number) => {
    setRecent((prev) => {
      const filtered = prev.filter((e) => e.id !== id);
      const next = [{ id, ts: Date.now() }, ...filtered].slice(0, MAX);
      save(next);
      return next;
    });
  };

  return { recent, track };
}
