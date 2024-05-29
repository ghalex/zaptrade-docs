import starlightPlugin from '@astrojs/starlight-tailwind'
import colors from 'tailwindcss/colors';

const primary = {
	25: '#FCFAFF',
	50: '#F9F5FF',
	100: '#F4EBFF',
	200: '#E9D7FE',
	300: '#D6BBFB',
	400: '#B692F6',
	500: '#7F56D9',
	600: '#6941C6',
	700: '#53389E',
	800: '#42307D',
	900: '#42307D'
}

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	plugins: [starlightPlugin()],
	theme: {
		extend: {
			colors: {
        accent: primary,
        gray: colors.gray,
      },
		},
	}
}
