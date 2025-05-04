// tailwind.config.js
import { Config } from 'tailwindcss'

/** @type {Config} */
const config = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        pacifico: ['Pacifico', 'cursive'], // Add Pacifico font family
      },
      colors: {
        "bgColor": "#F2F7FC",
        "gradient-1": "#FF9C1A",
        "gradient-2": "#ED250A",
      },
    },
  },
  plugins: [],
}

export default config

