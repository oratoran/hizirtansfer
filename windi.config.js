import { defineConfig } from 'windicss/helpers';
import filters from 'windicss/plugin/filters';

export default defineConfig({
  theme: {
    extend: {
      fontFamily: {
        lora: ['Lora', 'serif'],
        sans: ['Open Sans', 'serif'],
      },
      colors: {
        yellow: {
          400: '#E6C473',
        },
      },
    },
  },
  variants: {
    filter: ['responsive'],
  },
  plugins: [filters],
});
