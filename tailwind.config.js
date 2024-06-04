/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      width: {
        sm: "380px",
        md: "738px",
        lg: "1280px",
      },
      screens: {
        // xs: { min: '0px', max: '480px' },
        sm: { min: "0px", max: "450px" },
        md: { min: "451px", max: "1280px" },
        lg: { min: "1281px", max: "9999px" },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-spread": "linear-gradient(0deg, #8000FF, #8000FF)",
      },
      fontSize: {
        h40: "40px",
        h36: "36px",
        h30: "30px",
        h28: "28px",
        h26: "26px",
        h24: "24px",
        h20: "20px",
        h18: "18px",
        h14: "14px",
        h16: "16px",
        h12: "12px",
        h10: "10px",
      },
      padding: {
        xsm: "7.5px",
        xmd: "15px",
        xlg: "30px",
        ysm: "2.5px",
        ymd: "4px",
        ylg: "7.5px",
      },
      colors: {
        cblue: "#8000FF",
        "cdark-blue": "#230342",
        cwhite: "#F9F6FF",
      },
      boxShadow: {
        card: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")({ nocompatible: true })],
};
