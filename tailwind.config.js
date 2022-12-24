module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
      'pri-pink':{
        DEFAULT: '#EFDFBD',
        light: '#F8F8F8'
      },
      'pri-black':{
        DEFAULT: '#000000',
        light: '#F8F8F8'
      },
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
