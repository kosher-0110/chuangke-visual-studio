import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#050505",
        bone: "#f2f0ea",
        mist: "#9d9d98",
        graphite: "#171717",
        line: "rgba(255,255,255,0.13)"
      },
      fontFamily: {
        display: ["var(--font-display)", "Inter", "Arial", "sans-serif"],
        sans: ["var(--font-sans)", "Inter", "Arial", "sans-serif"]
      },
      letterSpacing: {
        studio: "0.14em"
      },
      transitionTimingFunction: {
        cinematic: "cubic-bezier(0.16, 1, 0.3, 1)"
      }
    }
  },
  plugins: []
};

export default config;
