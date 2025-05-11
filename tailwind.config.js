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
        pacifico: ['Pacifico', 'cursive'],
        raleway: ['Raleway', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif']
      },
      colors: {
        "bgColor": "#F2F7FC",
        "bgColor-1": "#E1E8EF",
        "gradient-1": "#FF9C1A",
        "gradient-2": "#ED250A",
        "orange-1": "#FFE3BF",
        "orange-2": "#FFEED9",
      },
    },
  },
  plugins: [],
}

export default config

