/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      display: ["Raleway", "sans-serif"],
      // 'body': ['"Open Sans"', ...],
    },
    extend: {
      backgroundImage: {
        "hero-image1": "url('/src/assets/hero-coding-Image.jpg')",
      },
      colors: {
        pcolor: "#0E1F51",
        scolor: "#FF3E54",
        tcolor: "#F7F7F7",
        fColor: "#0D1C34",
        white: "#ffffff",
        black: "#000000",
        customBlueColor: {
          100: "#1976D2",
          200: "#235D97",
          300: "#27539A",
          400: "#0D1C34",
        },
      },
      boxShadow: {
        "inner-custom": "inset 0px 4px 8px rgba(0, 0, 0, 0.25)",
      },
    },

    screens: {
      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }

      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }
    },
  },
  plugins: [],
};
