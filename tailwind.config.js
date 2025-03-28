import { Poppins } from "next/font/google";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["var(--font-roboto)"],
        lato: ["var(--font-lato)",],
        poppins: ["var(--font-poppins)"],
        
      },
    },
  },
  plugins: [],
};
