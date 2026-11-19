import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#f0fdf4",
          100: "#dcfce7",
          200: "#bbf7d0",
          300: "#86efac",
          400: "#4ade80",
          500: "#22c55e",
          600: "#16a34a",
          700: "#15803d",
          800: "#166534",
          900: "#14532d",
          950: "#052e16",
        },
        accent: {
          50: "#fff7ed",
          100: "#ffedd5",
          200: "#fed7aa",
          300: "#fdba74",
          400: "#fb923c",
          500: "#f97316",
          600: "#ea580c",
          700: "#c2410c",
          800: "#9a3412",
          900: "#7c2d12",
        },
      },
      boxShadow: {
        card: "0 2px 12px -2px rgba(0, 0, 0, 0.06), 0 4px 16px -2px rgba(0, 0, 0, 0.04)",
        "card-hover": "0 12px 28px -4px rgba(22, 163, 74, 0.12), 0 8px 20px -4px rgba(0, 0, 0, 0.08)",
        glow: "0 0 25px -5px rgba(234, 88, 12, 0.3)",
      },
    },
  },
  plugins: [],
};

export default config;

