/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '420px',
      },
      colors: {
        race: {
          navy: {
            DEFAULT: '#0B1B3D',
            50: '#F0F4FA',
            100: '#E1E9F5',
            200: '#C3D3EC',
            300: '#94B2DE',
            400: '#5E8CCB',
            500: '#386DB5',
            600: '#255298',
            700: '#1B3E77',
            800: '#142C57',
            900: '#0B1B3D',
            950: '#060F24',
          },
          orange: {
            DEFAULT: '#F37021',
            hover: '#E05F10',
            light: '#FFF4ED',
            dark: '#C85108',
          },
          cyan: {
            DEFAULT: '#00B4D8',
            hover: '#0096B4',
            light: '#E0F7FA',
            dark: '#007791',
          },
          gold: '#F59E0B',
          gray: {
            light: '#F8FAFC',
            subtle: '#EEF2F6',
            border: '#E2E8F0',
            text: '#64748B',
            heading: '#0F172A',
          }
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
      },
      boxShadow: {
        'card': '0 4px 20px -2px rgba(11, 27, 61, 0.08), 0 2px 6px -1px rgba(11, 27, 61, 0.04)',
        'card-hover': '0 20px 30px -10px rgba(11, 27, 61, 0.16), 0 10px 15px -3px rgba(11, 27, 61, 0.08)',
        'elevated': '0 25px 50px -12px rgba(11, 27, 61, 0.25)',
      },
      animation: {
        'marquee': 'marquee 35s linear infinite',
        'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.85' },
        }
      }
    },
  },
  plugins: [],
}
