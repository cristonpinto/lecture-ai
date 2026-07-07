import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./hooks/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
    "./utils/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      colors: {
        background: "#09090B",
        foreground: "#FFFFFF",
        muted: "#A1A1AA",
        primary: "#3B82F6",
        accent: "#8B5CF6",
        border: "rgba(255,255,255,0.08)",
        card: "rgba(24,24,27,0.45)",
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.25rem",
        "3xl": "1.5rem",
      },
      boxShadow: {
        glow: "0 0 40px rgba(59,130,246,0.22)",
        glass: "0 24px 80px rgba(0,0,0,0.42)",
      },
      keyframes: {
        "glow-drift": {
          "0%": { transform: "translate3d(-2%, -1%, 0) scale(1)" },
          "100%": { transform: "translate3d(2%, 1.5%, 0) scale(1.06)" },
        },
        grain: {
          "0%": { transform: "translate(0, 0)" },
          "100%": { transform: "translate(-24px, 18px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "140% 0" },
          "100%": { backgroundPosition: "-80% 0" },
        },
      },
      animation: {
        "glow-drift": "glow-drift 18s ease-in-out infinite alternate",
        grain: "grain 7s steps(10) infinite",
        shimmer: "shimmer 2.2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
