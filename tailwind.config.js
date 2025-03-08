/** @type {import('tailwindcss').Config} */
const { colors } = require("./theme/colors");

module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: colors.light.primary.primaryBase,
        secondary: colors.light.secondary.secondaryBase,
        success: colors.light.success.successBase,
        warning: colors.light.warning.warningBase,
        error: colors.light.error.errorBase,
        informative: colors.light.informative.informativeBase,
        gray: colors.light.grayscale.grayscaleOp16,
        grayText: colors.light.grayscale.grayscaleDark,
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
