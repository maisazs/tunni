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
      'primary-9': '#03E47E',
      'primary-10': '#1B5E20',

      'primary-disc': '#085F3B',

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
      'gray-13': '#454545',
      'gray-15': '#242424',

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
      merriweather: ['Merriweather', 'sans-serif'],
    },
    extend: {
      backgroundImage: {
        'bg-teste': "url('./img/bg-teste.png')",
        'bg-teste-sm': "url('./img/bg-teste-sm.png')",
        'bg-teste-auto': "url('./img/bg-teste-auto.png')",

        'bg-disc': "url('./img/bg-disc.png')",
      },
    },
  },
  plugins: [],
}

