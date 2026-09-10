/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          navy: '#071A2B',
          darkBlue: '#0B2942',
          sciBlue: '#1A659E',
          sciBlueLight: '#2C82C9',
          warmWhite: '#F5F3EE',
          warmCard: '#FAF9F6',
          softGray: '#D9DEE3',
          borderLight: '#E2E6EA',
          borderDark: '#1E3A56',
          gold: '#D6A84F',
          goldHover: '#E5B962',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        mono: ['"JetBrains Mono"', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      letterSpacing: {
        'tightest': '-0.04em',
        'widest-scientific': '0.18em',
      },
    },
  },
  plugins: [],
}
