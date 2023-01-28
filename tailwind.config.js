/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        "herobanner": "url('../public/maxresdefault.jpg')",
        "overlay":'linear-gradient(to top,rgba(0, 0, 0, 0.8),rgba(0, 0, 0, 0) 60%)',
        "textclip": "url('../public/textbackground.gif')",
        "01": "url('../public/01.jpeg')",
        "02": "url('../public/02.jpeg')",
        "03": "url('../public/03.jpeg')",
        "investor": "url('../public/investor.jpeg')",
        "investor01": "url('../public/investor01.jpeg')",
        "investor02": "url('../public/investor2.jpeg')",
        "farmphoto": "url('../public/farmphoto.jpg')",
        "farmphoto1": "url('../public/farmphoto1.jpg')",
        "farmphoto2": "url('../public/farmphoto2.jpg')",
        "farmphoto3": "url('../public/farmphoto3.jpg')",
        "farmphoto4": "url('../public/farmphoto4.jpg')",
        "farmphoto5": "url('../public/farmphoto5.jpg')",
        "veggies": "url('../public/veggies.jpg')",
      },
      fontFamily:{
        'Julius':['Julius Sans One', 'sans-serif']
      }
    },
  },
  plugins: [],
}
