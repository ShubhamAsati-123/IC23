/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        nightcore: ["Nightcore", "sans"],
        miso: ["miso", "sans"],
        newshape: ["NewShape","sans"],
      },
      colors:{
        "lockoutPink":"#D50068",
      },
      width: {
        128: "32rem",
      },
    },
  },
  plugins: [],
};
