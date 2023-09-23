/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        cor1: '#EAEFF4',
        cor2: '#EBF3FE',
        corcard: '#5D87FF'
      },

      width: {
        lgr: '820px',
        lgrh: '720px'
      },

      height: {
        hg1: '300px'
      }
    },
  },
  plugins: [],
}

