/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'yellow': '#FFC900',
      },
      fontFamily: {
        'mabry': 'MabryPro'
      }
    },
  },
  plugins: [],
}

