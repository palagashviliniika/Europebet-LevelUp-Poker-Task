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
          containers: "#2C3234",
          subContainers: "#171718",
          text: "#7D7D7D",
          leaderboard: "#1E2122",
          prize: "#202324",
          play: "#171718"
        },
        'main-orange': {
          DEFAULT: "#EF5A21"
        },
        'services': {
          DEFAULT: "#0D649B",
          orange: "#EF541C",
          purple: "#1A176C"
        }
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}