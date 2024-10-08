/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      blue: {
        100: "#cbe9f0",
        200: "#89cee7"
      },
      red: {
        100: "#d18d79",
        200: "#d38f7b",
      },
      white: "#ffffff",
      black: "#000000",
    },
  },
  plugins: [],
}

