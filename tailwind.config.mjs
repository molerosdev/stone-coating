/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: '#0B1F3A',
        'deep-blue': '#123C69',
        'royal-blue': '#145CFF',
        'sky-blue': '#4DB8FF',
        'ice-gray': '#F3F8FC',
        'concrete-gray': '#B7C0C8',
        silver: '#D8E2EA',
        charcoal: '#101820',
        'off-white': '#FFFFFF',
        // Legacy aliases retained so any older references degrade gracefully.
        'deep-gray': '#123C69',
        bronze: '#145CFF',
        'stone-beige': '#4DB8FF',
      },
      fontFamily: {
        heading: ['Montserrat', 'Poppins', 'Inter Tight', 'system-ui', 'sans-serif'],
        body: ['Inter', 'Lato', 'Open Sans', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #0B1F3A 0%, #123C69 45%, #145CFF 100%)',
        'gloss-accent': 'linear-gradient(90deg, #145CFF 0%, #4DB8FF 50%, #D8E2EA 100%)',
        'card-shine':
          'linear-gradient(135deg, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.04) 45%, rgba(255,255,255,0.12) 100%)',
        'button-gradient': 'linear-gradient(135deg, #145CFF 0%, #4DB8FF 100%)',
        'dark-card': 'linear-gradient(145deg, #0B1F3A, #123C69)',
      },
      boxShadow: {
        'gloss-button': '0 12px 30px rgba(20, 92, 255, 0.28)',
        'gloss-card': '0 18px 45px rgba(11, 31, 58, 0.12)',
        'gloss-card-dark': '0 18px 45px rgba(20, 92, 255, 0.18)',
        'gloss-glow': '0 0 0 1px rgba(77,184,255,0.35), 0 24px 60px rgba(20, 92, 255, 0.25)',
      },
    },
  },
  plugins: [],
};
