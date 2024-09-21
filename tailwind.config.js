/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({

  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        'blink': 'blink 1s infinite',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0 },
        },
      },
      animation: {
        'slide': 'slide 2s ease-in-out infinite',
      },
      keyframes: {
        slide: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
      animation: {
        'slide-left': 'slide-left 2s ease-in-out forwards',
      },
      keyframes: {
        'slide-left': {
          '0%': { transform: 'translateX(-100%)', opacity: 0 },
          '100%': { transform: 'translateX(0)', opacity: 1 },
        },
      },



      colors: {
        "customPurple": '#7843E9',
        "soft-black": '#F1F1F1',
        "desktop": "#F6F6F6",

      },

      screens: {
        '22xl': { 'max': '1536px' },
        'xxl': { 'max': '1280px' },
        'llg': { 'max': '1024px' },
        'mmd': { 'max': '768px' },
        'ssm': { 'max': '640px' },
      }

    },

  },
  plugins: [],
});
