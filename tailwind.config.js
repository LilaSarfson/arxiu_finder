/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],  theme: {
    extend: {
      colors: {
        'verde_oliva':'#81B29A',
        'azul_clarito':'#A8DADC',
        'fondo': '#e1e8ed',
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
