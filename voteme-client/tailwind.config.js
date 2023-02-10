/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      width: {
        "1/7": "14.2857143%",
        "2/7": "28.5714286%",
        "3/7": "42.8571429%",
        "4/7": "57.1428571%",
        "5/7": "71.4285714%",
        "6/7": "85.7142857%",
        50: "50rem",
      },
      boxShadow: {
        "3xl": "0 35px 60px -15px #1F2941",
        "5xl": "20px rgb(0 0 0 / 0.1), 20px rgb(0 0 0 / 0.1)",
        "6xl": " 0 0 9px 10px  rgb(0 0 0 / 0.1)",
      },
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      blue: {
        light: "#85d7ff",
        DEFAULT: "#1fb6ff",
        dark: "#1F2941",
        dark200: "#141B2D",
      },
      pink: {
        light: "#ff7ce5",
        DEFAULT: "#ff49db",
        dark: "#ff16d1",
      },
      gray: {
        darkest: "#1f2d3d",
        dark: "#3c4858",
        DEFAULT: "#c0ccda",
        light: "#e0e6ed",
        lightest: "#f9fafc",
      },
    },
  },
  plugins: [],
};
