import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-blue': '#0c1a3e',
        'brand-accent': '#059669',
        'brand-accent-hover': '#047857',
        'editor-bg': '#1e1e1e',
      }
    },
  },
  plugins: [],
};
export default config;
