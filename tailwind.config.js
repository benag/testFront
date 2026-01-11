/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'orange-primary': '#F95D2D',
        'orange-gradient-start': '#F95D2D',
        'orange-gradient-end': '#F95D2D',
      },
      fontFamily: {
        'display': ['Arial Black', 'sans-serif'],
        'body': ['Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
