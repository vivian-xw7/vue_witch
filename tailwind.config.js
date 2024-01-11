/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto Mono", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        white: "#ffffff",
        black: "#03001C",
        witch: {
          night: '#202040',
          bat: '#202060',
          dusk: '#602080',
          dawn: '#B030B0',
          moon: '#E6E641',
          g: "#82FBA5",
          pk: "#B14283",
          pur: "#9D57E0",
          b: "#4F5FF5",
          db: "#211D46",
          d: "#131128",
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
    content: [
      "./src/**/*.vue",
    ],
    safelist: [
      'bg-witch-night', 'text-witch-night', // Add your custom color classes here
      'bg-witch-bat', 'text-witch-bat',
      'bg-witch-dusk', 'text-witch-dusk',
      'bg-witch-dawn', 'text-witch-dawn',
      'bg-witch-moon', 'text-witch-moon',
    ],
  },
};

