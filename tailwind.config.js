/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#2262EA',
          blueDark: '#0F56BC',
          navy: '#07163F',
          soft: '#F3F7FF',
          line: '#DCE6F7',
          muted: '#53627A',
        },
      },
      borderRadius: {
        brand: '1.5rem',
      },
      boxShadow: {
        brand: '0 14px 40px rgba(15, 86, 188, 0.10)',
        brandHover: '0 20px 48px rgba(15, 86, 188, 0.17)',
      },
      fontFamily: {
        figtree: ['Figtree', 'system-ui', 'sans-serif'],
        insaniburger: ['Insaniburger', 'sans-serif'],
        insaniburgerCheese: ['"Insaniburger with Cheese"', 'sans-serif'],

        poppins: ['Poppins', 'sans-serif'],

        degular: ['"Degular Demo"', 'system-ui', 'sans-serif'],
        passionate: ['"Feeling Passionate"', 'cursive'],

        sans: [
          'Poppins',
          'ui-sans-serif',
          'system-ui',
          'Segoe UI',
          'Roboto',
          'Helvetica',
          'Arial',
        ],
      },
    },
  },
  plugins: [],
}
