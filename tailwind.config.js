/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        title: ["Tangerine", "serif"],
        heading: ["Tangerine", "serif"],
        sans: ["Metrophobic", "sans-serif"],
        serif: ["Unna", "serif"],
        motterdam: ["Tangerine", "serif"],
        script: ["Great Vibes", "cursive"],
        tangerine: ["Tangerine", "serif"],
      },
      colors: {
        red: '#C22636',
        gold: '#FFCB11',
        black: '#000000',
        orange: '#D88810',
        fog: '#E5E2DE',
        darkred: '#700018',
      },
      keyframes: {
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-100px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(100px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        fadeInWord: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        slideInLeft: 'slideInLeft 0.8s ease-out forwards',
        slideInRight: 'slideInRight 0.8s ease-out 0.3s forwards',
        fadeInWord: 'fadeInWord 0.6s ease-out forwards',
        fadeInUp: 'fadeInUp 0.8s ease-out forwards',
      },
    },
  },
  plugins: [],
}
