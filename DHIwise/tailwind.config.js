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
        blue_gray_200: "#bcc3cd",
        blue_gray_50: "#eff2f4",
        blue_gray_300: "#8a96a4",
        blue_A400: "#0d6efd",
        gray_800: "#4f4f4f",
        gray_900: "#1c1c1c",
        amber_100: "#ffe5bf",
        red_500: "#fa3434",
        green_A100: "#c3ffcb",
        gray_300: "#dde1e6",
        gray_50: "#f7fafc",
        blue_50: "#e3efff",
        green_A700: "#00b517",
        black_900: "#000000",
        yellow_900: "#ff9017",
        white_A700: "#ffffff",
      },
      fontFamily: { inter: "Inter" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
