import { useEffect, useState } from "react";

// Theme lives on <html class="dark">. Light is the default; dark only when the visitor asks for it.
// index.html restores a stored choice before first paint; this module switches and remembers it.
const KEY = "theme";

export const getTheme = () => (document.documentElement.classList.contains("dark") ? "dark" : "light");

function apply(theme) {
  const root = document.documentElement;
  root.classList.toggle("dark", theme === "dark");
  root.dataset.theme = theme;
  root.style.colorScheme = theme;
  document.querySelector('meta[name="theme-color"]')?.setAttribute("content", theme === "dark" ? "#111318" : "#ffffff");
  window.dispatchEvent(new CustomEvent("themechange", { detail: theme }));
}

export function setTheme(theme) {
  try {
    localStorage.setItem(KEY, theme);
  } catch {
    /* private mode: the choice just isn't remembered */
  }
  apply(theme);
}

export function useTheme() {
  const [theme, set] = useState(getTheme);
  useEffect(() => {
    const on = (e) => set(e.detail);
    window.addEventListener("themechange", on);
    return () => window.removeEventListener("themechange", on);
  }, []);
  return [theme, setTheme];
}
