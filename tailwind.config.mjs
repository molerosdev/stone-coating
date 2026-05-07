/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        charcoal: '#111111',
        'deep-gray': '#2B2B2B',
        'concrete-gray': '#8A8A8A',
        'off-white': '#F5F3EF',
        bronze: 'rgb(255 204 7 / <alpha-value>)',
        'stone-beige': '#D8C7A3',
      },
      fontFamily: {
        heading: ['Montserrat', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
