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
          DEFAULT: '#F7F5F0',
          light: '#FFFFFF',
          dark: '#EAE5DB',
        },
        ivory: {
          DEFAULT: '#F7F5F0',
          50: '#FDFCFB',
          100: '#F7F5F0',
          200: '#EFEAE0',
          300: '#E4DDCB',
        },
        charcoal: {
          DEFAULT: '#202124',
          light: '#2D2E32',
          surface: '#282A2E',
          card: '#242528',
          border: '#37393E',
        },
        nearblack: {
          DEFAULT: '#202124',
          surface: '#282A2E',
          card: '#222326',
          border: '#323438',
        },
        orange: {
          DEFAULT: '#FF7417',
          hover: '#E8630A',
          glow: 'rgba(255, 116, 23, 0.22)',
          subtle: 'rgba(255, 116, 23, 0.08)',
        },
        sand: {
          DEFAULT: '#EAE5DB',
          light: '#F4EFE6',
          border: '#DED7C8',
        },
        muted: {
          DEFAULT: '#5F6368',
          light: '#80868B',
        }
      },
      fontFamily: {
        heading: ['"Space Grotesk"', 'sans-serif'],
        sans: ['"Inter"', 'sans-serif'],
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
