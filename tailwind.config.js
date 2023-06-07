/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blue-color': '#2a68ff',
        'grey-ish': '#f1f4f8',
        'card-shadow': "#f7f8f9",
        'text-color': '#25ab36',
      }
    },
  },
  plugins: [],
}

