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
        cream: {
          DEFAULT: "#faf7f2",
          light: "#fefcf8",
        },
        espresso: {
          DEFAULT: "#3b2e25",
          light: "#4a3a2f",
          dark: "#2d221a",
        },
        gold: {
          DEFAULT: "#c4a77d",
          light: "#d4b896",
          soft: "#c4a77d",
        },
        "gold-soft": "#c4a77d",
        "gold-light": "#d4b896",
        clay: {
          DEFAULT: "#d9c9b5",
          light: "#e8ddd0",
        },
        olive: {
          DEFAULT: "#5b5849",
          light: "#6d6a5a",
        },
      },
      fontFamily: {
        heading: ["var(--font-playfair)", "serif"],
        script: ["var(--font-script)", "cursive"],
        sans: ["var(--font-inter)", "sans-serif"],
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};

export default config;
