/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      dosis: ["Dosis"],
    },
    colors: {
      'primary': '#86C232',
      'background': '#222629',
      'secondary': '#6b6E70'
    },
  },
  plugins: [],
}
