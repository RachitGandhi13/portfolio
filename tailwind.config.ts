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
        sans: ["var(--font-space-grotesk)", "system-ui", "sans-serif"],
        mono: ["var(--font-space-mono)", "monospace"],
        display: ["var(--font-bebas)", "sans-serif"],
      },
      colors: {
        paper: "#F5F4F0",
        dark: "#111111",
        muted: "#888888",
        surface: "#E9E7E2",
        red: "#E8300A",
        cream: "#F0EDE8",
        ink: "#111111",
        neon: "#C5FF00",
      },
      animation: {
        "spin-slow": "spin 12s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
