/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				figtree: ['Figtree', 'sans-serif'],
			},
			boxShadow: {
				solid: '8px 8px 0 0 #000000',
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
	},
	plugins: [],
};
