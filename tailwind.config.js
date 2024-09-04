/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
      xxl: "1400px",
    },
    extend: {
      roboto: ["Roboto", "sans-serif"],
      noto: ["Noto Sans Thai", "sans-serif"],
      fontWeight: {
        normal: 400,
      },
      colors: {
        blue: {
          bg: "#F4F7FF",
          primary: "#3E62AD",
        },
        primary: "#ED1556",
        "primary-text": "#515151",
      },
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        ".container": {
          maxWidth: "100%",
          marginLeft: "auto",
          marginRight: "auto",
          "@screen sm": {
            maxWidth: "540px",
          },
          "@screen md": {
            maxWidth: "720px",
          },
          "@screen lg": {
            maxWidth: "960px",
          },
          "@screen xl": {
            maxWidth: "1140px",
          },
          "@screen xxl": {
            maxWidth: "1320px",
          },
        },
      });
    },
  ],
  corePlugins: {
    preflight: false,
  },
};
