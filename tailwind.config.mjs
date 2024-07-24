/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				'poppins': ['"Poppins"', 'sans-serif'],
				'opensans': ['"Open Sans Variable"', 'sans-serif']
			}
		},
		colors: {
			'ppink': 'hsl(322, 100%, 66%)',
			'plpink': 'hsl(321, 100%, 78%)',
			'plred': 'hsl(0, 100%, 63%)',
			'pvdcyan': 'hsl(192, 100%, 9%)',
			'pvpblue': 'hsl(207, 100%, 98%)',
		}
	},
	plugins: [],
}
