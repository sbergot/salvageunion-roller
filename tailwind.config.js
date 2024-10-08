/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      blue: {
        100: "#dceaed",
        200: "#73c9e6"
      },
      greyblue: {
        100: "#d1e3e6",
        200: "#58a9c7"
      },
      orange: {
        100: "#f5c0a0",
        200: "#ef894f"
      },
      red: {
        100: "#e9c3b0",
        200: "#9e4432"
      },
      purple: "#ce5897",
      white: "#ffffff",
      black: "#000000",
    },
  },
  plugins: [],
}

