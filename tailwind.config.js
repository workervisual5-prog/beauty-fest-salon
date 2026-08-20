/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
  bg: {
    DEFAULT: '#FFFFFF',
    panel: '#FAFAF8',
    card: '#FFFFFF',
  },
  teal: {
    accent: '#5EEAD4',
  },
},
      fontFamily: {
        script: ['"Alex Brush"', 'cursive'],
        display: ['"Alfa Slab One"', 'serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(6px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.25s ease-out',
      },
    },
  },
  plugins: [],
};
