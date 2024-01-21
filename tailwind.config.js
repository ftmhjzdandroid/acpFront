/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,tsx}",
    // "../**/src/**/*.{html,js,ts,tsx}",
    "./**/*.{ts,tsx}",
    // "../../../packages/components/**/*.{js,ts,jsx,tsx}", // here is path to Tailwind CSS components package
  ],
  theme: {
    extend: {
      colors: {
        sampleColor: "red",
        sampleColor2: "yellow",
        primary: {
          DEFAULT: "#1876d2",
          dark: "#115ea9",
        },
        white: {
          DEFAULT: "white",
          dark: "#e8e8e8",
        },
        br: {
          DEFAULT: "#DCEBEF",
          200: "#eeeeee",
        },
        error: "#C62D33",
        background: "#F6FAFB",
      },
      borderRadius: {
        default: "1rem",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
