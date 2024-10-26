/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'header-1' : '#311E49E5',
        'btn-1' : '#8571BDD4',
        'sky-blue' : '#A1C4FF',
        'btn-text' : '#A0A8B5',
        'be-foot' : '#3A3B41'
      },
    },
  },
  plugins: [],
}

