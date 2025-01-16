/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
     "./app/**/*.{js,jsx,ts,tsx}",
     "./App.{js,jsx,ts,tsx}" ,      // Include the root `App.tsx` file if it exists
     "./components.{js,jsx,ts,tsx}",       // Include the root `App.tsx` file if it exists
     "./components/*.{js,jsx,ts,tsx}"       // Include the root `App.tsx` file if it exists

  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {},
  },
  plugins: [],
}

