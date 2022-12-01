/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/assets/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      // fontFamily: {
      //   poppins: ['"Poppins"', '"sans-serif"'],
      //   workSans: ['"Work Sans"', '"sans-serif"'],
      //   publicSans: ['"Public Sans"', '"sans-serif"'],
      // },
    },
  },
  plugins: [],
}
