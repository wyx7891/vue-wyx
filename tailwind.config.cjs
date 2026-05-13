import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif', ...defaultTheme.fontFamily.sans],
        mono: ['JetBrains Mono Variable', 'JetBrains Mono', ...defaultTheme.fontFamily.mono],
      },
      borderRadius: {
        'large': '1rem',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
