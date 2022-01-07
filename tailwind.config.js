module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        screens: {
          sm: "500px",
          md: "768px",
          lg: "1000px",
          xl: "1100px",
          xxl: "1440px",
        },
      },
    },
    colors: {
      blue: "#25A4AD",
      black: "#313131",
      white: "#FFFFFF",
      bg_gray: "#D8D8D8",
      bg_black: "#2C2C2C",
    },
  },
  plugins: [],
};
