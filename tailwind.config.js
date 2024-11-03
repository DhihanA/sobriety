/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", // Adjust path as needed if using different folder structure
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
}

