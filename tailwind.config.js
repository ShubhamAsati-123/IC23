/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        nightcore: ["Nightcore", "sans"],
        miso: ["miso", "sans"],
        newshape: ["NewShape","sans"],
        captainamerica:['CaptainAmerica',"sans"],
      },
      colors:{
        "lockoutred":"#571d20",
      },
      width: {
        128: "32rem",
      },
    },
  },
  plugins: [],
};
