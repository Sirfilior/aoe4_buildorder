module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        bluelight: "#013e64;",
        bluedark: "#2d3750;",
        yellow: "#ffdf91",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
