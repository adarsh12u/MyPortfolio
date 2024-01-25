
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '820px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {},
  },
  plugins: [],
}