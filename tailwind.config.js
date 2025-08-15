/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#4AC4FC",
        ink: "#303030"
      },
      boxShadow: {
        glow: "0 10px 30px -10px rgba(74,196,252,.35), 0 0 50px -20px rgba(74,196,252,.45)"
      },
      borderRadius: {
        xl2: "1.25rem"
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', "system-ui", "Segoe UI", "Helvetica", "Arial", "sans-serif"]
      }
    }
  },
  plugins: [],
}
