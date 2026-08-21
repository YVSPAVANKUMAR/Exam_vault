import { useState } from "react";

function load(): Set<number> {
  try {
    const raw = localStorage.getItem("ev-favorites");
    return raw ? new Set(JSON.parse(raw)) : new Set();
  } catch {
    return new Set();
  }
}

function save(s: Set<number>) {
  try {
    localStorage.setItem("ev-favorites", JSON.stringify([...s]));
  } catch {}
}

export function useFavorites() {
  const [favs, setFavs] = useState<Set<number>>(load);

  const toggle = (id: number) => {
    setFavs((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      save(next);
      return next;
    });
  };

  return { favs, toggle, isFav: (id: number) => favs.has(id) };
}
