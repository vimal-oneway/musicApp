/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      colors: {
        primary: '#371B58',
        'secondary-natural-500': '#4C3575CC',
        'secondary-natural-400': '#4c3575AA',
        'secondary-500': '#4C3575',
        'secondary-400': '#5B4B8A',
        secondary: '#7858A6',
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
