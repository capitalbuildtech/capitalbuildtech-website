/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#171717',
          deep: '#111111',
          light: '#E8E8E6',
          white: '#F5F5F5',
          ink: '#191919',
          blue: '#1F6FB2',
          muted: '#8A8A8A',
        },
      },
      fontFamily: {
        heading: ['Manrope', 'Inter', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 18px 50px rgba(0, 0, 0, 0.16)',
      },
      transitionTimingFunction: {
        premium: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
    },
  },
  plugins: [],
};
