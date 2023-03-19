/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors:{
        'sidebar':'#30354a'
      },
      margin:{
        'main-top':'64px',
        'main-left':'240px'
      }
    },
  },
  variants: {
    extend: {
        visibility: ["group-hover"],
    },
},
  plugins: [],
}
