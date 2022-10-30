/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryColor: '#dd1818',
        secondaryColor: '#333333'
      },
      boxShadow: {
        'inner-custom': 'inset 0 2px 4px 0 rgb(0 0 0 / 0.15)',
      }
    },
  },
  plugins: [],
}