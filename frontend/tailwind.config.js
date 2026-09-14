/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        sand: "#f7f2e8",
        ink: "#181613",
        clay: "#935132",
        moss: "#59634a",
        cream: "#fffaf2"
      },
      fontFamily: {
        display: ["Fraunces", "serif"],
        sans: ["Manrope", "sans-serif"]
      },
      boxShadow: {
        glow: "0 24px 70px rgba(79, 51, 30, 0.16)"
      },
      backgroundImage: {
        halo: "radial-gradient(circle at top left, rgba(147, 81, 50, 0.18), transparent 28%)"
      }
    }
  },
  plugins: []
};
