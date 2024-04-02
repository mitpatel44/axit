module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        gray: { 600: "#777777", 900: "#222222", "600_01": "#757575" },
        yellow: { 600: "#fed330" },
        black: { 900: "#000000", "900_6c": "#0000006c" },
        amber: { 500: "#f1c40f" },
        red: { 300: "#e4897b", 400: "#de5753", 500: "#e74c3c" },
        blue_gray: { 900: "#263238" },
        white: { A700: "#ffffff" },
      },
      fontFamily: { rubik: "Rubik" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
