/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
     colors:{
      'primary': '#ffffff',
      'secondary': '#1E1324',
      'accent': '#1083FF'
     },
     fontWeight: {
      400: '400',
      600: '600',
      800: '800'
     }
    },
  },
  plugins: [],
}
