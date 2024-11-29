/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#A32020",
        secondary: "#0C0A09",
        border: "#ccc",
      },
      borderWidth: {
        1: "1px",
      },
      screens: {},
    },
    fontFamily: {
      pretendard: ["Pretendard", "sans-serif"],
    },
  },
  plugins: [],
};
