/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        "bai-jamjuree": ["'Bai Jamjuree'", "san-serif"],
        roboto: ["Roboto Mono", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        white: "#ffffff",
        black: "#03001C",
        "alt-black": "#010101",
        green: "#00deb9",
        grey: "#bec0c0",
        charcoal: "#080808",
        witch: {
          night: "#202040",
          dusk: "#602080",
          dawn: "#B030B0",
          green: "#82FBA5",
          purple: "#9D57E0",
          blue: "#4F5FF5",
          darkblue: "#211D46",
          space: "#131128",
        },
      },
      fontSize: {
        sm: 14 / 16 + "rem",
        base: 16 / 16 + "rem",
        lg: 18 / 16 + "rem",
        xl: 20 / 16 + "rem",
        "2xl": 24 / 16 + "rem",
        "3xl": 32 / 16 + "rem",
        "4xl": 40 / 16 + "rem",
        "5xl": 48 / 16 + "rem",
        "6xl": 64 / 16 + "rem",
        "7xl": 80 / 16 + "rem",
        "8xl": 96 / 16 + "rem",
      },
      lineHeight: {
        none: "1",
        tight: "1.25",
        snug: "1.375",
        normal: "1.5",
        relaxed: "1.625",
        loose: "2",
      },
      letterSpacing: {
        tighter: "-0.05em",
        tight: "-0.025em",
        normal: "0em",
        wide: ".025em",
        wider: ".05em",
        widest: ".1em",
      },
      screens: {
        sm: "640px",
        // => @media (min-width: 640px) { ... }

        md: "768px",
        // => @media (min-width: 768px) { ... }

        lg: "1024px",
        // => @media (min-width: 1024px) { ... }

        xl: "1280px",
        // => @media (min-width: 1280px) { ... }

        "2xl": "1536px",
        // => @media (min-width: 1536px) { ... }
      },
    },
  },
  plugins: [],
  purge: {
    content: ["./src/**/*.vue"],
    safelist: [],
  },
};
