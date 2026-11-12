import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: { DEFAULT: "#0b1020", 2: "#121a33", 3: "#1b2547" },
        mist: "#9aa6c4",
        signal: { DEFAULT: "#7c5cff", 2: "#22d3ee" },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "system-ui", "sans-serif"],
      },
      boxShadow: { glow: "0 0 0 1px rgba(124,92,255,.35), 0 20px 60px -20px rgba(124,92,255,.55)" },
    },
  },
  plugins: [],
} satisfies Config;
