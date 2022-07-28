/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  extend: {},
  theme: {
    colors: {
      veryLightGray: "hsl(0, 0%, 98%)",
      veryDarkBlue: "hsl(207, 26%, 17%)",
      darkBlue: "hsl(209, 23%, 22%)",
      white: "hsl(0, 0%, 100%)",
      lightDarkBlue: "hsl(200, 15%, 8%)",
      darkGray: "hsl(0, 0%, 52%)",
    },
  },
  plugins: [],
};
