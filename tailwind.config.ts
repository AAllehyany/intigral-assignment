import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "open": ['var(--font-open)'],
        "montserrat": ['var(--font-montserrat)']
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

      colors: {
        "ott-blue-1": "#0B2868",
        "ott-blue-2": "#010F29",
        "ott-red-1": "#C1272D",
        "ott-red-2": "#9B1318",
        "ott-green": "#2DA24A"


      },

      maxWidth: {
        "ott-width": "1600px"
      }

    },
  },
  plugins: [],
};
export default config;
