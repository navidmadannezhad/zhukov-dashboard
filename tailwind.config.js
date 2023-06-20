/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    './src/**/*.{html,js}',
    './node_modules/tw-elements/dist/js/**/*.js'
  ],
  theme: {
    extend: {},
    colors:{
      "dark-mode-primary": "#151419",
      "dark-mode-secondary": "#1f1e25",

      "light-mode-primary": "#fbfbfb",
      "light-mode-secondary": "#f8efe0",

      "purple": "#aa70d6",
      "transparentPurple":"rgba(170,112,214,0.5)",
      "dark": "#1f1e25",
      "gray": "#2a292e",
      "white": "#ffffff",
      "green": "#2eb62c",

      "lightWhite": "rgba(184, 184, 184, 0.77)",
      "lightDark": "#737373",

      "text-gray": "#939298",
    }
  },
  plugins: [
    require('tw-elements/dist/plugin'),
    function ({ addVariant }) {
        addVariant('child', '& > *');
        addVariant('child-hover', '& > *:hover');
    }
  ]
}
