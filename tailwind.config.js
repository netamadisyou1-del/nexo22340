/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        nexo: {
          DEFAULT: '#0d0847',
          light: '#1a1466',
          accent: '#2d27a0',
          pale: '#eeedf9',
        }
      }
    },
  },
  plugins: [],
}
