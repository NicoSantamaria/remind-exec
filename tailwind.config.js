/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      listStyleImage: {
        checked: 'url("./assets/checkbox_checked.svg")',
        unchecked: 'url("./assets/checkbox_unchecked.svg")',
      },
    },
  },
  plugins: [],
}

