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
        'xl': '40px',       // สำหรับหน้าจอขนาดใหญ่พิเศษ
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
          paddingLeft: "16px",  // กำหนด padding ด้านซ้ายเริ่มต้น
          paddingRight: "16px", // กำหนด padding ด้านขวาเริ่มต้น
          "@screen sm": {
            maxWidth: "540px",
            paddingLeft: "20px", // สำหรับหน้าจอขนาดเล็ก
            paddingRight: "20px",
          },
          "@screen md": {
            maxWidth: "720px",
            paddingLeft: "24px",  // สำหรับหน้าจอขนาดกลาง
            paddingRight: "24px",
          },
          "@screen lg": {
            maxWidth: "960px",
            paddingLeft: "32px",  // สำหรับหน้าจอใหญ่
            paddingRight: "32px",
          },
          "@screen xl": {
            maxWidth: "1140px",
            paddingLeft: "40px",  // สำหรับหน้าจอใหญ่พิเศษ
            paddingRight: "40px",
          },
          "@screen xxl": {
            maxWidth: "1320px",
            paddingLeft: "48px",  // สำหรับหน้าจอขนาดใหญ่มาก
            paddingRight: "48px",
          },
        },
      });
    },
  ],
  corePlugins: {
    preflight: false,
  },
};
