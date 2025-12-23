/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#FFD700', // Amarillo WiNet
          dark: '#E5C100',
        },
        secondary: {
          DEFAULT: '#1A1A1A', // Negro
          light: '#333333',
        },
        accent: {
          DEFAULT: '#4B5563', // Gris
          light: '#9CA3AF',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      container: {
        center: true,
        padding: '1rem',
        screens: {
          '2xl': '1400px',
        },
      },
    },
  },
  plugins: [],
}
