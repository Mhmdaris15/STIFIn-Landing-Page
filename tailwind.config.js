/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        ubuntu: ["'Ubuntu'", "sans-serif"],
        philosopher: ["'Philosopher'", "sans-serif"],
        satisfy: ["'Satisfy'", "cursive"],
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
