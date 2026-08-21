import { useEffect, useState } from "react";

export function useTheme() {
  const [dark, setDark] = useState(() => {
    try {
      return localStorage.getItem("ev-theme") === "dark";
    } catch {
      return false;
    }
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", dark ? "dark" : "light");
    try {
      localStorage.setItem("ev-theme", dark ? "dark" : "light");
    } catch {}
  }, [dark]);

  return { dark, toggle: () => setDark((d) => !d) };
}
