module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          xs: "1rem",
          sm: "1rem",
          lg: "2rem",
          xl: "5rem",
          "2xl": "6rem",
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
