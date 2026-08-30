/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Outfit", "sans-serif"],
      },
      colors: {
        primary: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
          950: '#052e16',
        },
      },
      animation: {
        'spin-slow': 'spin 12s linear infinite',
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(15, 23, 42, 0.05)',
        'soft-lg': '0 10px 30px -4px rgba(15, 23, 42, 0.08)',
        'soft-xl': '0 20px 40px -6px rgba(15, 23, 42, 0.08)',
        'soft-2xl': '0 25px 55px -10px rgba(15, 23, 42, 0.12)',
      },
    },
  },
  plugins: [],
}
