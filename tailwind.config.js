/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#A32020",
        border: "#ccc",
      },
      screens: {},
    },
    fontFamily: {
      pretendard: ["Pretendard", "sans-serif"],
    },
  },
  plugins: [],
};
