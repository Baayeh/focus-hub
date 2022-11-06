/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryColor: "#dd1818",
        secondaryColor: "#333333",
        primaryLightColor: "rgb(221 24 24 / 34%)",
        primaryDarkColor: "#b50b0b",
      },
      boxShadow: {
        "inner-custom": "inset 0 2px 4px 0 rgb(0 0 0 / 0.15)",
        "white-shadow": "5px 5px 15px #d1d9e6, -5px -5px 15px #ffffff",
      },
      fontFamily: {
        Comfortaa: ["Comfortaa", "Segoe UI"],
      },
    },
  },
  plugins: [],
};
