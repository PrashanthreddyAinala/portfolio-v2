/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Lobster: ["Lobster", "cursive"],
        Poppins: ["Poppins", "sans-serif"],
      },
      backgroundImage: (theme) => ({
        "gradient-text": "linear-gradient(to right, #ff7e5f, #feb47b)",
      }),

      colors: {
        indigo: "#4F46E5",
      },
      screens: {
        "3xl": "1600px",
      },
    },
  },
  plugins: [],
};
