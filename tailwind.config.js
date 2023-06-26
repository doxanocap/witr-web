/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      width: {
        // sm: '1080px',
        md: '738px',
        lg: '1280px',
      },
      screens: {
        xs: { min: '0px', max: '480px' },
        sm: { min: '480px', max: '768px' },
        md: { min: '768px', max: '1280px' },
        lg: { min: '1280px', max: '9990px' },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-spread': 'linear-gradient(0deg, #8000FF, #8000FF)',
      },
      fontSize: {
        h1: '40px',
        h2: '26px',
        h3: '20px',
        h4: '16px',
        h5: '12px',
      },
      padding: {
        xsm: '7.5px',
        xmd: '15px',
        xlg: '30px',
        ysm: '2.5px',
        ymd: '4px',
        ylg: '7.5px',
      },
      colors: {
        cblue: '#8000FF',
        'cdark-blue': '#230342',
        cwhite: '#F9F6FF',
      },
    },
  },
  plugins: [],
}
