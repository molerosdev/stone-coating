/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        charcoal: '#000000',
        'deep-gray': '#141414',
        'concrete-gray': '#9CA3AF',
        'off-white': '#FFFFFF',
        bronze: 'rgb(230 0 19 / <alpha-value>)',
        'stone-beige': '#FF4D55',
      },
      fontFamily: {
        heading: ['Montserrat', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
