// tailwind.config.js
const trueGray = {
  '50': '#fafafa',
  '100': '#f5f5f5',
  '200': '#e5e5e5',
  '300': '#d4d4d4',
  '400': '#a3a3a3',
  '500': '#737373',
  '600': '#525252',
  '700': '#404040',
  '800': '#262626',
  '900': '#171717'
};

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  mode: 'jit',
  theme: {
    extend: {
      fontFamily: {
        lora: ['Lora', 'serif'],
        sans: ['Open Sans', 'serif']
      },
      colors: {
        yellow: {
          400: '#E6C473',
          500: '#BF9F5E'
        }
      }
    },
    backgroundColor: theme => ({ ...theme('colors'), 'true-gray': trueGray }),
    textColor: theme => ({ ...theme('colors'), 'true-gray': trueGray }),
    borderColor: theme => ({ ...theme('colors'), 'true-gray': trueGray })
  },
  variants: {
    extend: {}
  },
  plugins: []
};
