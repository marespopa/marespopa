/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      transitionProperty: {
        border: 'border',
        'border-width': 'border-width',
      },
      backgroundImage: {
        'hero-pattern': "url('/dolooper.jpg')",
      },
      fontFamily: {
        roboto: ['var(--font-roboto-mono)'],
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
