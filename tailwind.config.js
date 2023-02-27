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
        sans: ['"Barlow"', 'sans-serif'],
        'sans-condensed': ['"Barlow Condensed"', 'sans-serif'],
        serif: ['"Bellefair"', 'serif'],
      },
      fontSize: {
        xs: '0.875rem', // 14px
        sm: ['0.9375rem', '1.625'], // 15px
        base: ['1rem', '1.75'], // 16px
        lg: ['1.125rem', '1.75'], // 18px
        '3xl': ['1.75rem', '1.25'], // 28px
        '4xl': '2rem', // 32px
        '5xl': '2.5rem', // 40px
        '6xl': '3.5rem', // 56px
        '7xl': ['5rem', '1.25'], // 80px
        '8xl': '6.25rem', // 100px
        '9xl': ['9.375rem', '1'], // 150px
      },
      screens: {
        'lg': '1158px',
        '2xl': '1440px',
      },
    },
  },
  plugins: [],
};
