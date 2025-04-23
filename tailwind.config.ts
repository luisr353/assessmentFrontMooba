import type { Config } from 'tailwindcss'

export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1C58B7',
          50: '#E8EFF8',
          100: '#D1DFF2',
          200: '#A3BFE5',
          300: '#759FD8',
          400: '#477FCB',
          500: '#1C58B7',
          600: '#164790',
          700: '#103568',
          800: '#0A2340',
          900: '#041118'
        },
        secondary: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        },
      },
      fontFamily: {
        sans: ['Inter var', 'sans-serif'],
        display: ['Cal Sans', 'Inter var', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config 