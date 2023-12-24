/** @type {import('tailwindcss').Config} */
import tokens from "@app/foundations/lib/tailwindExtends";
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
    "../../node_modules/@app/ui-library/**/*.{js,vue,ts,html}",
  ],

  theme: {
    extend: {
      ...tokens,
    },
  },
  darkMode: "class",
  plugins: [],
};
