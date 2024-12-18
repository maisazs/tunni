/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    colors: {
      'primary': '#01A25A',
      'primary-2': '#EEFFF6',
      'primary-3': '#00361F',
      'primary-4': '#EEFFF6',

      'gray-2': '#F7F7F7',
      'gray-3': '#6D6D6D',
      'gray-4': '#888888',
      'gray-5': '#E7E7E7',
      'gray-6': '#6D6D6D',
      'gray-7': '#D9D9D9',
      'gray-9': '#E8E8EA',
      'gray-10': '#97989F',

      'white-2': '#EEFFF6',

      'title-2': '#181A2A',
    },
    fontFamily: {
      inter: ['Inter', 'sans-serif'],
      manrope: ['Manrope', 'sans-serif'],
      roboto: ['Roboto', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
}

