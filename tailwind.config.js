/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        themeyellow: "#F5E60D",
        themepurple: "#502EC3",

      }
    },
  },
  plugins: [],
}