/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],  theme: {
    extend: {
      colors: {
        'fondo': 'rgb(242, 243, 247)',
      },
    },
  },
  plugins: [],
}
