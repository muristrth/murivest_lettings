/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#0a0f1a',
          900: '#0d1424',
          800: '#131c33',
          700: '#1a2742',
          600: '#243456',
          500: '#2e436f',
          400: '#3d5688',
          300: '#5a7aad',
          200: '#8aa5c9',
          100: '#b8cbe3',
          50: '#e2eaf4',
        },
        ivory: {
          50: '#fdfbf6',
          100: '#f9f5ec',
          200: '#f2ead7',
          300: '#e8dcc0',
          400: '#d9c9a3',
          500: '#c4b181',
        },
        gold: {
          50: '#fbf7ee',
          100: '#f5ecd4',
          200: '#ecd9a8',
          300: '#ddbf78',
          400: '#c9a25c',
          500: '#b8893f',
          600: '#9a6f33',
          700: '#7c5729',
          800: '#5f4220',
          900: '#4a331a',
        },
        forest: {
          50: '#f0f6f1',
          100: '#dceae0',
          200: '#bbd4c2',
          300: '#8fb89b',
          400: '#5e9470',
          500: '#3e7a52',
          600: '#2d6340',
          700: '#234f33',
          800: '#1c4029',
          900: '#163322',
        },
        stone: {
          50: '#f7f6f4',
          100: '#eeece8',
          200: '#ddd9d2',
          300: '#c4beb3',
          400: '#a59d8e',
          500: '#8a8170',
          600: '#6f6759',
          700: '#57504a',
          800: '#3e3935',
          900: '#292522',
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      letterSpacing: {
        'label': '0.18em',
        'wide-lg': '0.12em',
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      },
      maxWidth: {
        '8xl': '88rem',
        '9xl': '96rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'fade-in-up': 'fadeInUp 0.7s ease-out',
        'fade-in-delay': 'fadeInUp 0.7s ease-out 0.2s both',
        'slide-in-right': 'slideInRight 0.5s ease-out',
        'scale-in': 'scaleIn 0.4s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [],
};
