import filters from 'windicss/plugin/filters';

export default {
	theme: {
		extend: {
			fontFamily: {
				merriweather: ['Merriweather', 'serif'],
				sans: ['Open Sans', 'serif'],
			}
		}
	},
	variants: {
		filter: ['responsive']
	},
	plugins: [filters]
};
