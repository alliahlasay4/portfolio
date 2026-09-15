/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: {
          dark: "#111827",  // Muted Slate-900 (Soft Dark)
          light: "#F8FAFC", // Soft Slate-50 (Soft Light)
        },
        surface: {
          dark: "#1F2937",  // Slate-800 Surface Card
          light: "#FFFFFF", // Pure White Surface Card
        },
        borderSubtle: {
          dark: "#374151",  // Muted Slate-700 Border
          light: "#E5E7EB", // Soft Gray Border
        },
        brand: {
          indigo: "#4F46E5",
          sky: "#0284C7",
          emerald: "#059669",
        },
      },
      fontFamily: {
        sans: ["Plus Jakarta Sans", "system-ui", "-apple-system", "sans-serif"],
        mono: ["JetBrains Mono", "ui-monospace", "monospace"],
      },
    },
  },
  plugins: [],
};