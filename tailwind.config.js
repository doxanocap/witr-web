/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-spread': 'linear-gradient(0deg, #8000FF, #8000FF)',
      },
      fontSize: {
        'h1': '40px',
        'h2': '26px',
        'h3': '20px',
        'h4': '16px',
      },
      colors: {
        'cblue': '#8000FF',
        'cdark-blue': '#230342',
        'cwhite':'#F9F6FF'
      }
    },
  },
  plugins: [],
}
