/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './app/components/**/*.{js,vue,ts}',
    './app/layouts/**/*.vue',
    './app/data/**/*.{js,ts}',
    './app/pages/**/*.vue',
    './app/app.vue',
  ],
  theme: {
    extend: {
      animation: {
        'marquee': 'marquee 30s linear infinite'
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      
      colors: {
        blue: {
          DEFAULT: '#2563EB',
          dark: '#1D4ED8',
          light: '#3B82F6',
          soft: '#EFF6FF',
          mid: '#BFDBFE',
        },
        red: {
          DEFAULT: '#DC2626',
          light: '#EF4444',
          soft: '#FEF2F2',
          mid: '#FECACA',
        },
        purple: {
          DEFAULT: '#7C3AED',
          soft: '#F5F3FF',
        },
        green: {
          DEFAULT: '#059669',
          soft: '#ECFDF5',
        },
        orange: {
          DEFAULT: '#EA580C',
          soft: '#FFF7ED',
        },
        ink: {
          DEFAULT: '#0F172A', // --txt
          2: '#334155',       // --txt2
          3: '#64748B',       // --txt3
          4: '#94A3B8',        // --txt4
        },
        surface: {
          DEFAULT: '#F8FAFC', // --bg
          alt: '#F1F5F9',     // --bg2
          card: '#FFFFFF',
        },
        border: {
          DEFAULT: '#E2E8F0',
          dark: '#CBD5E1',
        },
        clinic: {
          900: '#0A1628',
          800: '#0F2456',
          950: '#1A0B3A',
        },
      },
      fontFamily: {
        heading: ['Manrope', 'sans-serif'],
        body: ['Plus Jakarta Sans', 'sans-serif'],
      },
      maxWidth: {
        container: '1280px',
      },
      borderRadius: {
        xl2: '18px',
        xl3: '20px',
        xl4: '22px',
      },
      boxShadow: {
        card: '0 8px 32px rgba(0,0,0,0.06)',
        'card-hover': '0 16px 48px rgba(0,0,0,0.08)',
        glow: '0 4px 20px rgba(37,99,235,0.3)',
        'glow-red': '0 4px 20px rgba(220,38,38,0.35)',
      },
      backgroundImage: {
        'grad-primary': 'linear-gradient(135deg, #2563EB, #3B82F6)',
        'grad-accent': 'linear-gradient(135deg, #2563EB, #7C3AED)',
        'grad-red': 'linear-gradient(135deg, #DC2626, #EF4444)',
        'grad-clinic': 'linear-gradient(135deg, #0A1628 0%, #0F2456 55%, #1A0B3A 100%)',
        'hero-top-line': 'linear-gradient(90deg, #2563EB, #7C3AED, #DC2626)',
      },
    },
  },
  plugins: [],
}