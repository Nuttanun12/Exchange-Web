/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        IbmPlexSans: ['"ibm-plex-sans"', 'sans-serif'],
      },
    
    },
  },
  plugins: [],
}

