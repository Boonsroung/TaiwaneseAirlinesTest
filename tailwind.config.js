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
      fontFamily: {
        sans: ['Roboto', 'sans-serif'], // ใช้ Roboto เป็นฟอนต์หลัก
      },
      fontWeight: {
        normal: 400,
      },
      padding: {
        'default': '16px',  // กำหนด padding เริ่มต้นสำหรับทุกอุปกรณ์
        'lg': '32px',       // กำหนด padding สำหรับหน้าจอขนาดใหญ่
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
          paddingLeft: "16px",  // กำหนด padding ด้านซ้าย
          paddingRight: "16px", // กำหนด padding ด้านขวา
          "@screen sm": {
            maxWidth: "540px",
          },
          "@screen md": {
            maxWidth: "720px",
            paddingLeft: "24px",  // สำหรับขนาดหน้าจอใหญ่ขึ้น
            paddingRight: "24px",
          },
          "@screen lg": {
            maxWidth: "960px",
            paddingLeft: "32px",  // สำหรับหน้าจอใหญ่ขึ้น
            paddingRight: "32px",
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
