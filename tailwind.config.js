/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    colors: {
      'primary': '#01A25A',
      'primary-2': '#EEFFF6',
      'primary-3': '#00361F',
      'primary-4': '#EEFFF6',
      'primary-5': '#077444',
      'primary-6': '#00FF9D',
      'primary-7': '#00462B',
      'primary-8': '#00301E',

      'gray-2': '#F7F7F7',
      'gray-3': '#6D6D6D',
      'gray-4': '#888888',
      'gray-5': '#E7E7E7',
      'gray-6': '#6D6D6D',
      'gray-7': '#D9D9D9',
      'gray-9': '#E8E8EA',
      'gray-10': '#97989F',
      'gray-11': '#D9D6CE',
      'gray-12': '#668273',

      'white': '#fff',
      'white-2': '#EEFFF6',
      'white-3': '#FFFCF2',

      'black': '#000',

      'title-2': '#181A2A',
    },
    fontFamily: {
      inter: ['Inter', 'sans-serif'],
      manrope: ['Manrope', 'sans-serif'],
      roboto: ['Roboto', 'sans-serif'],
    },
    extend: {
      backgroundImage: {
        'bg-teste': "url('/img/bg-teste.png')",
        'bg-teste-sm': "url('/img/bg-teste-sm.png')",
        'bg-teste-auto': "url('/img/bg-teste-auto.png')",
      },
    },
  },
  plugins: [],
}

