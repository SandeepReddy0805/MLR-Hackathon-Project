/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        "herobanner": "url('../public/maxresdefault.jpg')",
        "overlay":'linear-gradient(to top,rgba(0, 0, 0, 0.8),rgba(0, 0, 0, 0) 60%,rgba(0, 0, 0, 0.8) 100%)',
        "textclip": "url('../public/textbackground.gif')"
      },
      fontFamily:{
        'Julius':['Julius Sans One', 'sans-serif']
      }
    },
  },
  plugins: [],
}
