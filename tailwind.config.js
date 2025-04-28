/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
    },
    extend: {
      colors: {
        mainColor: "#ff8904",
        navBg: "#161d26",
      },
      width: {
        "custom-width": "50%",
      },
      animation: {
        bounceX: "bounceX 1s ease-in-out infinite",
      },
      keyframes: {
        bounceX: {
          "0%": { transform: "translateX(0)" },
          "50%": {
            transform: "translateX(10%)",
            "animation-timing-function": "cubic-bezier(0, 0, 0.2, 1)",
          },
          "100%": {
            transform: "translateX(0%)",
            "animation-timing-function": "cubic-bezier(0.8, 0, 1, 1)",
          },
        },
      },
    },
  },
  plugins: [],
};
