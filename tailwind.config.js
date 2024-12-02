/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./dist/*.{html,js}'],
  theme: {
    extend: {
      fontFamily: {
        IbmPlexSansThai: ['"IBM plex sans thai"', 'sans-serif'],
      },
    
    },
  },
  plugins: [],
}

