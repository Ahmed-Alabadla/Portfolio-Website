module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        light: "#f8f9fa",
      },
      darkMode: "class",
      backgroundImage: {
        imgHome: `url('/src/assets/header_background.jpg')`,
      },
      keyframes: {
        show: {
          "0%": {
            width: "0%",
            height: "0%",
            opacity: 0,
          },
          "100%": {
            width: "100%",
            height: "100%",
            opacity: 0.7,
          },
        },
      },
      animation: {
        show: "show 0.5s ease-in-out ",
      },
    },
    fontFamily: {
      signature: ["Great Vibes"],
    },
  },
  plugins: [require("flowbite/plugin")],
};
