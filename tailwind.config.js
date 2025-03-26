/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Lobster: ["Lobster", "cursive"],
        Poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        indigo: "#4F46E5",
        primary: "#3366FF",
        secondary: "#1a53ff",
        gray1: "#f7f9ff",
        gray2: "#c4c4c4",
      },
      screens: {
        "3xl": "1600px",
      },
    },
  },
  plugins: [],
};
