import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        bayon: ['"Bayon"', "cursive"],
        lexend: ['"Lexend"', "cursive"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "pink-50": "#FFE9EF",
        "pink-100": "#FFCAD8",
        bordeaux: "#7B1818",
      },
    },
  },
  plugins: [],
} satisfies Config;
