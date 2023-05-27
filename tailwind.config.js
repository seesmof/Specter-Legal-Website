/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,html}"],
  theme: {
    extend: {
      colors: {
        background: "#0e0e0e",
        accent: "#dac5a6",
        secondary: "#23211e",
      },
    },
  },
  plugins: [],
};
