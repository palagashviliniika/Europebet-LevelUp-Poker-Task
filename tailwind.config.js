/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'main-black': {
          DEFAULT: "#1C1D1E",
          icons: "#25292B",
          buttons: "#44494B",
          containers: "#2C3234"
        },
        'main-orange': {
          DEFAULT: "#EF5A21"
        }
      }
    },
  },
  plugins: [],
}