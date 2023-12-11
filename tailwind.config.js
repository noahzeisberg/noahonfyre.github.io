import colors from "tailwindcss/colors.js";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
      "./src/components/**/*.vue",
      "./src/components/*.vue",
      "./src/App.vue",
  ],
  theme: {
      extend: {
          colors: {
              primary: colors.indigo,
              secondary: colors.zinc
          }
      }
  },
  plugins: [],
}

