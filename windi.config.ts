import filters from 'windicss/plugin/filters';

export default {
	theme: {
		filter: {
			none: 'none',
			grayscale: 'grayscale(1)',
			invert: 'invert(1)',
			brightness: 'brightness(1)'
		},
		brightness: {
			sm: '50',
			md: '100',
			lg: '150'
		}
	},
	variants: {
		filter: ['responsive']
	},
	plugins: [filters]
};
