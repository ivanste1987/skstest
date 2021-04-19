const colors = require("tailwindcss/colors");
module.exports = {
  purge: {
    mode: 'layers',
    content: ['./public/**/*.html', './src/**/*.vue']
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        grey: colors.trueGray,
        yellow: {
          light: '#fbeb7d',
          DEFAULT: '#ffde00',
          dark: '#fff9da',
        },
        blue: {
          DEFAULT: '#00aeef',
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
