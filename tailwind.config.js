/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      // theme-aware tokens resolve to CSS variables set in App.css (light on :root, dark on html.dark)
      colors: {
        primaryColor: "rgb(var(--c-primary) / <alpha-value>)",
        accent: "#2CC4C4",
        ink: "rgb(var(--c-fg) / <alpha-value>)",
        muted: "rgb(var(--c-muted) / <alpha-value>)",
        mist: "rgb(var(--c-alt) / <alpha-value>)",
        paper: "rgb(var(--c-bg) / <alpha-value>)",
        card: "rgb(var(--c-card) / <alpha-value>)",
        night: "#0b0b0f",
      },
      fontFamily: {
        display: ['"Space Grotesk"', "system-ui", "sans-serif"],
        body: ["Inter", "system-ui", "sans-serif"],
        mono: ['"JetBrains Mono"', "ui-monospace", "SFMono-Regular", "monospace"],
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(44,196,196,.35), 0 24px 60px -24px rgba(11,122,122,.45)",
        card: "0 1px 2px rgba(11,11,15,.06), 0 12px 32px -16px rgba(11,11,15,.18)",
      },
      maxWidth: { page: "72rem" },
    },
  },
  plugins: [],
};
