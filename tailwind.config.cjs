/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily : {
				poppins : "Poppins"
			},
			colors : {
				kiwi : "#97c976",
				aguaje : "#dfb74c"
			}
		},
	},
	plugins: [],
}
