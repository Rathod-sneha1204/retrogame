/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily:{
        poppins:["Poppins", "sans-serif"]
      },
      colors:{
        primary: "#ffd978",
        secondary: "#69a79c",
        light: "#f7f7f7",
        dark:"#333333",
        dark2:"#999999"
      },
      container:{
        center:true,
        padding:{
          DEFAULT:"1rem",
          sm:"2rem",
          lg:"4rem",
          xl:"5rem",
          "2xml":"6rem",
        }
      }
    },
  },
  plugins: [],
}