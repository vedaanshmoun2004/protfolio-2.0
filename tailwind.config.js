/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'dark': '#0a0a0a',
        'dark-accent': '#1a1a1a',
        'primary': '#40E0D0', // Turquoise
        'primary-glow': '#20B2AA', // Medium Turquoise
        'secondary': '#008080', // Teal
        'accent': '#00CED1', // Dark Turquoise
        'gradient-1': '#40E0D0',
        'gradient-2': '#20B2AA',
        'gradient-3': '#008080',
        'gradient-4': '#00CED1',
      },
      animation: {
        'gradient': 'gradient 8s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'color-change': 'colorChange 8s infinite',
      },
      keyframes: {
        gradient: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        colorChange: {
          '0%, 100%': { color: '#40E0D0' },
          '50%': { color: '#20B2AA' },
        },
      },
    },
  },
  plugins: [],
};