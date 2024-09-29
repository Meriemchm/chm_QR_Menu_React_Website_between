/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#4A6053",
        second: "#F3EADB",
        third: "#F7941D",
        four:"#E5287A",
      },
    },
  },
  plugins: [],
};
