/** @type {import('tailwindcss').Config} */
import tokens from "@app/foundations/lib/tailwindExtends";

export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts}"],
  theme: {
    extend: {
      ...tokens,
    },
  },
  darkMode: "class",
  plugins: [],
};
