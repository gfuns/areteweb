/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blackTransparent: 'rgba(26, 26, 26, 0.5)'
      },
      backgroundImage: {
        'gradientBlue': "url('/src/images/bg-gradient-blue.png')"
      }
    },
  },
  plugins: [],
}