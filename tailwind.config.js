/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,ts,jsx,tsx,md,mdx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          50: '#f6f7f5',
          100: '#e9ece8',
          200: '#d3d9d1',
          300: '#aeb8a6',
          400: '#828f78',
          500: '#647059',
          600: '#4f5846',
          700: '#404739',
          800: '#363c30',
          900: '#2d322a',
          950: '#1a1d18',
        },
        forest: {
          50: '#f0faf4',
          100: '#dcf3e6',
          200: '#bce6cf',
          300: '#8ad1ab',
          400: '#54b583',
          500: '#319a67',
          600: '#207c52',
          700: '#1a6343',
          800: '#174f37',
          900: '#13412e',
          950: '#0a2519',
        },
        amber: {
          50: '#fffaeb',
          100: '#fff0c6',
          200: '#ffe088',
          300: '#ffc94a',
          400: '#ffb320',
          500: '#f99007',
          600: '#dd6c02',
          700: '#b74e06',
          800: '#943d0c',
          900: '#7a330d',
          950: '#461a02',
        },
        cream: {
          50: '#fdfcf8',
          100: '#faf6ea',
          200: '#f4ebd0',
          300: '#ecdaa8',
          400: '#e2c077',
          500: '#d9a852',
        },
      },
      fontFamily: {
        display: ['Sora Variable', 'Sora', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 1px 2px rgba(19,65,46,0.04), 0 8px 24px -8px rgba(19,65,46,0.10)',
        lift: '0 2px 4px rgba(19,65,46,0.05), 0 20px 48px -12px rgba(19,65,46,0.18)',
        glow: '0 0 0 1px rgba(49,154,103,0.18), 0 12px 40px -8px rgba(49,154,103,0.28)',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'float': {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'shimmer': {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        'pulse-ring': {
          '0%': { transform: 'scale(0.9)', opacity: '0.6' },
          '70%': { transform: 'scale(1.6)', opacity: '0' },
          '100%': { opacity: '0' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s cubic-bezier(0.16,1,0.3,1) both',
        'fade-in': 'fade-in 0.8s ease both',
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
        'pulse-ring': 'pulse-ring 2s cubic-bezier(0.4,0,0.6,1) infinite',
      },
    },
  },
  plugins: [],
};
