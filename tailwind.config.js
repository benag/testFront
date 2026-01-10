/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'orange-primary': '#FF6B35',
        'orange-gradient-start': '#FF8A50',
        'orange-gradient-end': '#FF6B35',
      },
      fontFamily: {
        'display': ['Arial Black', 'sans-serif'],
        'body': ['Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
