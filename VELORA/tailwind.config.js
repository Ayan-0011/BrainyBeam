/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: '#F7F0E4',
          light: '#FCF9F3',
          dark: '#EFE5D5',
        },
        orange: {
          DEFAULT: '#FF7417',
          hover: '#E8630A',
          glow: 'rgba(255, 116, 23, 0.22)',
          subtle: 'rgba(255, 116, 23, 0.08)',
        },
        nearblack: {
          DEFAULT: '#171717',
          surface: '#1C1C1C',
          card: '#222222',
          border: '#2E2E2E',
        },
        sand: {
          DEFAULT: '#E8D5BB',
          light: '#F4E9D8',
          border: '#D8C4A9',
        },
        muted: {
          DEFAULT: '#555149',
          light: '#7F786E',
        }
      },
      fontFamily: {
        heading: ['"Space Grotesk"', 'sans-serif'],
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'pulse-subtle': 'pulseSubtle 4s ease-in-out infinite',
        'marquee': 'marquee 30s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: 0.8, transform: 'scale(1)' },
          '50%': { opacity: 1, transform: 'scale(1.03)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      }
    },
  },
  plugins: [],
}
