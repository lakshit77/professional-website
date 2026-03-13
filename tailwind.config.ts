import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#eff6ff",
          100: "#dbeafe",
          200: "#bfdbfe",
          300: "#7bb8f5",
          400: "#4A9AF5",
          500: "#2B7DE9",
          600: "#1d6ad4",
          700: "#0B3D8C",
          800: "#0a3070",
          900: "#071e47",
        },
        teal: {
          500: "#14B8A6",
        },
        whatsapp: {
          500: "#25D366",
        },
        surface: {
          base: "#0B1120",
          elevated: "#0f1830",
          floating: "#142040",
          card: "#111c35",
          border: "#1e2d50",
        },
      },
      fontFamily: {
        display: ["var(--font-plus-jakarta)", "system-ui", "sans-serif"],
        body: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
      boxShadow: {
        glow: "0 0 40px rgba(43, 125, 233, 0.15)",
        "glow-lg": "0 0 80px rgba(43, 125, 233, 0.2)",
        "glow-sm": "0 0 20px rgba(43, 125, 233, 0.1)",
        card: "0 4px 24px rgba(0, 0, 0, 0.4), 0 0 1px rgba(255,255,255,0.05)",
      },
      borderRadius: {
        button: "8px",
      },
    },
  },
  plugins: [],
};
export default config;
