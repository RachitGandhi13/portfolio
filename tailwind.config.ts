import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-space-mono)", "monospace"],
        italic: ["var(--font-cormorant)", "serif"],
      },
      colors: {
        paper: "#F5F4F0",
        dark: "#0A0A0A",
        muted: "#555555",
        surface: "#141414",
        cream: "#F0EDE8",
        ink: "#0A0A0A",
        white: "#F5F4F0",
      },
      animation: {
        "spin-slow": "spin 12s linear infinite",
        "marquee": "marquee-scroll 20s linear infinite",
        "marquee-rev": "marquee-scroll 20s linear infinite reverse",
      },
    },
  },
  plugins: [],
};

export default config;
