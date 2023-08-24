/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],  theme: {
    extend: {
      colors: {
        'fondo': 'rgb(242, 243, 247)',
        'dark_bg': '#121212',
        'dark_secction':'#1E1E1E',
        'dark_card':'#22303C',
        'dark_white':'#E1E8ED',
        'footer': '#FFD782'
      },
    },
  },
  plugins: [],
}
