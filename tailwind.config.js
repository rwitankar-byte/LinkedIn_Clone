/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        linkedin: {
          50: "#eef8ff",
          500: "#0a66c2",
          600: "#004182",
        },
      },
    },
  },
  plugins: [],
};
