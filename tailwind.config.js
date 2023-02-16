/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,ts,vue}',
    './pages/**/*.{js,ts,vue}',
    './app.vue',
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          100: 'rgb(var(--color-blue-100) / <alpha-value>)',
          900: 'rgb(var(--color-blue-900) / <alpha-value>)',
        },
        white: 'rgb(var(--color-white) / <alpha-value>)',
      },
      fontFamily: {
        sans: ['"Barlow Condensed"', 'sans-serif'],
        serif: ['"Bellefair"', 'serif'],
      },
      fontSize: {
        xs: '0.875rem',
        sm: '0.9375rem',
      },
    },
  },
  plugins: [],
};
