/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({

  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "customPurple": '#7843E9',
        "soft-black": '#F1F1F1',

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
