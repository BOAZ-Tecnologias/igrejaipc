import type { Config } from 'tailwindcss';

const config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      fontSize: {
        h1: '52px',
        h2: '40px',
        h3: '32px',
        h4: '26px',
        h5: '22px',
        large: '20px',
        regular: '16px',
        'regular-sm': '14px',
        subtitle: '12px',
        'subtitle-sm': '10px',
      },
      colors: {
        'black-50': '#646D85',
        'black-60': '#3D4353',
        'black-70': '#333844',
        'black-80': '#2A2E39',
        'black-90': '#252932',
        'black-100': '#222429',
        'secondary-60': '#E7E7E7',
        'secondary-70': '#C1C5CF',
        'secondary-80': '#7A7F8D',
        'subtitle-color': '#929292',
        'secondary-100': '#393D49',
        'light-green': '#ADFF2F',
        'medium-green': '#ADDF45',
        'dark-green': '#93BC1E',
        error: '#F96C6C',
        white: '#FFFFFF',
        'dashboard-bg': '#1E1E1E',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        fade: 'fadeIn 0.9s ease-in-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;

export default config;
