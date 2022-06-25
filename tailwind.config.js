/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html", "./src/**/*.tsx"],
  theme: {
    fontFamily: {
      display: ["Montserrat", "sans-serif"],
      body: ["Montserrat", "sans-serif"],
    },
    extend: {
      colors: {
        amarillo: "#f9c626",
        azul: "#003e8b",
        naranjado: "#ffa003",
        azulOscuro: "#002149",
      },
    },
  },
  plugins: [],
};
