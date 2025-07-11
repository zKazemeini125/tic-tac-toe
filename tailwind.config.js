/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      //lightGray: "#282828",
      modalBackgroundColor:"#424242c0",
      modalBoxReceiveInformation:"#2b2b2bc0",
      modalTextColor:"#e0e0e0",
      modalInputBackgroundcolor:"#676767",
      grid: "#3C3C3C",
      cells:"#444444",
      txtColor:"#7b7b7b",
      txtColorSharp:"#d0d0d0" ,
      XColor:"#FF4500",
      OColor:"#00CED1",
      red:"#ff0000",
      black:"#000000"
    },
  },
  plugins: [],
};
