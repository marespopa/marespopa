/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      transitionProperty: {
        'border-width': 'border-width',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
