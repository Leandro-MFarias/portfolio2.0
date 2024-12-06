/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        social: "inset 3px 3px 3px #707070, inset -3px -3px 3px #454545"
      },
      screens: {
        'xxl': '1700px',
        'xl2': '1400px',
        'xl3': '1366px',
      }
    },
  },
  plugins: [],
}