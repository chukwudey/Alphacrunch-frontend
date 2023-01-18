const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['"inter"', ...defaultTheme.fontFamily.sans],
        'Space-Grotesk': "Space Grotesk"
      },
      backgroundImage: {
        'striped-down': "url('../src/assets/striped_gray_line_bg.svg')",
        'striped-up': "url('../src/assets/striped_bg.svg')",
        'gold-card': "url('../src/assets/gold_card.png')"
      },
      colors: {
      'pri-pink':{
        DEFAULT: '#EFDFBD',
        light: '#F8F8F8'
      },
      'pri-black':{
        DEFAULT: '#000000',
        light: '#F8F8F8'
      },
      'cream-pink': '#F8F8F8',
      'pri-grey': '#333333'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
