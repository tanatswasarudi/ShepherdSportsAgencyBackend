/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.js', './src/**/*.jsx', './src/**/*.html'
  ],
  theme: {
    extend: {
      colors:{
        "dark-purple": "#081A51",
        "light-white" : "rgba(255,255,255,0.17)",
        primary: "#F5385D",
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
    require('tailwindcss'), 
    require('autoprefixer')
  ],
}

