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
        "deep-navy": "#081225",
        navy: "#0F1E3A",
        "primary-blue": "#2563EB",
        "secondary-blue": "#3B82F6",
        "steel-blue": "#5B7FA6",
        "pale-blue": "#DCEBFF",
        "text-dark": "#0F172A",
        gray: "#7C8CA3",
        "soft-white": "#F8FAFC",
      },
      fontFamily: {
        sans: ["var(--font-outfit)", "system-ui", "sans-serif"],
        display: ["var(--font-syne)", "system-ui", "sans-serif"],
        body: ["var(--font-outfit)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "ui-monospace", "monospace"],
      },
      borderRadius: {
        DEFAULT: "0.375rem",
        sm: "0.25rem",
        md: "0.5rem",
        lg: "0.75rem",
        xl: "1rem",
      },
      boxShadow: {
        "card-soft": "0 1px 2px 0 rgba(0, 0, 0, 0.03)",
        "card-elevated":
          "0 4px 6px -1px rgba(15, 30, 58, 0.06), 0 2px 4px -2px rgba(15, 30, 58, 0.04)",
      },
      spacing: {
        18: "4.5rem",
        22: "5.5rem",
        30: "7.5rem",
      },
    },
  },
  plugins: [],
};

export default config;
