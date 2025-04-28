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
        "fade-in": "fade-in 0.3s ease-out",
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
        "fade-in": {
          from: {
            opacity: 0,
            transform: "scale(0.95)",
          },
          to: {
            opacity: 1,
            transform: "scale(1)",
          },
        },
      },
    },
  },
  plugins: [],
};
