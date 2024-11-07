 /** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        colors: {
          textColor:"#194641",
          primary: "#f6f4f1",
          secondary:"#ffffff",
          active:"#d8e1cc",
          card:"#f4714b"
        }
      
    },
  },
  plugins: [],
}