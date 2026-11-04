/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#0b2545',
          950: '#07162c',
        },
        brand: {
          orange: '#FF6B00',
          orangeDark: '#E05300',
          orangeLight: '#FF8A33',
          navy: '#0B2545',
          navyLight: '#133E87',
          gold: '#F59E0B',
          whatsapp: '#25D366',
          whatsappDark: '#128C7E',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        marathi: ['"Noto Sans Devanagari"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'card-hover': '0 20px 25px -5px rgba(11, 37, 69, 0.1), 0 8px 10px -6px rgba(11, 37, 69, 0.1)',
        'whatsapp-glow': '0 8px 30px -4px rgba(37, 211, 102, 0.5)',
        'orange-glow': '0 8px 30px -4px rgba(255, 107, 0, 0.4)',
      }
    },
  },
  plugins: [],
}
