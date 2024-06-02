import {nextui} from '@nextui-org/react'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'error-bg': "url('/Nether_Portal_background.webp')",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui({
    addCommonColors: true,
    defaultTheme: 'dark',
    themes: {
      light: {
        colors: {
          primary: "#17c964",
        }
      },
      dark: {
        colors: {
          background: "#121212",
          primary: "#17c964",
        }
      },
    }
  })],
}
