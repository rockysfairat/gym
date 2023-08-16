/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      babyBlue: "#BFD7ED",
      blueGrotto: "#60A3D9",
      royalBlue: "#0074B7",
      navyBlue: "#0f172a",
      red: "#f00f",
    },
    screens: {
      sm: "800px",
    },
    extend: {
      fontFamily: {
        BlackOpsOne: ["Black Ops One", "cursive"],
      },
    },
  },
  plugins: [],
};
