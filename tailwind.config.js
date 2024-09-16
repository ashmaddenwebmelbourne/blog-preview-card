/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				figtree: ['Figtree', 'sans-serif'],
			},
		},
	},
	screens: {
		tablet: '768px',
	},
	colors: {
		yellow: '#F4D04E',
		'gray-950': '#111111',
		'gray-500': '#6B6B6B',
		white: '#FFFFFF',
	},
	plugins: [],
};
