import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#090c14",
        "bg-card": "#0d1520",
        "bg-border": "#1a2030",
        text: "#e8edf5",
        "text-dim": "#6b7a99",
        accent: "#00ff88",
      },
      fontFamily: {
        mono: ["Departure Mono", "Courier New", "monospace"],
        sans: ["var(--font-instrument-sans)", "sans-serif"],
      },
      animation: {
        "pulse-green": "pulse-green 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        blink: "blink 1s step-end infinite",
      },
      keyframes: {
        "pulse-green": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.4" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
