/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './pages/**/*.{js,ts,jsx,tsx,mdx,md}',
      './components/**/*.{js,ts,jsx,tsx,md,mdx}',
      './theme.config.jsx'
    ],
    theme: {
      extend: {}
    },
    plugins: [],
    darkMode: 'class'
  }