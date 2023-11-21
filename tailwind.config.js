/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        calibreReg: ["Calibre Regular", "san serif"],
        calibreMeduim: ["Calibre Medium", "san serif"],
        calibreSemBold: ["Calibre SemiBold", "san serif"],
        courierItalic: ["Courier Italic", "san serif"],
        courierReg: ["Courier Regular", "san serif"],
      },
      colors: {
        colorBlack: ["#181817"],
        colorWhite: ["#FFFFFF"],
        colorYellow: ["#CFCA16"],
        colorgray: ["rgba(249, 247, 243, 0.66)"],
        colorOverlay: ["rgba(24, 24, 23, 0.39)"],
      },
      fontSize: {
        "7xl": ["5rem", "4.6875rem"],
      },
    },
  },
};
