/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#050505',
          surface: '#0F0F0F',
          'surface-light': '#1A1A1A',
        },
        text: {
          primary: '#FFFFFF',
          secondary: '#A0A0A0',
          muted: '#606060',
        },
        accent: {
          DEFAULT: '#00F5FF',
          green: '#00FF88',
        },
        border: {
          DEFAULT: '#252525',
          light: '#353535',
        },
      },
      fontFamily: {
        sans: ['var(--font-alliance)', 'Alliance No. 1', 'Inter', '-apple-system', 'BlinkMacSystemFont', 'system-ui', 'sans-serif'],
      },
      animation: {
        'slide-in-right': 'slideInRight 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)',
        'slide-in-up': 'slideInUp 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)',
        'scale-in': 'scaleIn 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
        'shimmer': 'shimmer 3s infinite',
        'grid-area-pulse': 'gridAreaPulse 2s ease-in-out infinite',
      },
      keyframes: {
        slideInRight: {
          'from': { opacity: '0', transform: 'translateX(-30px)' },
          'to': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInUp: {
          'from': { opacity: '0', transform: 'translateY(30px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          'from': { opacity: '0', transform: 'scale(0.9)' },
          'to': { opacity: '1', transform: 'scale(1)' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(0, 245, 255, 0.1)' },
          '50%': { boxShadow: '0 0 40px rgba(0, 245, 255, 0.2)' },
        },
        shimmer: {
          '100%': { left: '100%' },
        },
        slideGlow: {
          '0%, 100%': { opacity: '0.3' },
          '50%': { opacity: '1' },
        },
        gridAreaPulse: {
          '0%': {
            backgroundPosition: '0 0, 0 0, 30% 40%, 70% 60%, 50% 20%',
            opacity: '0.8'
          },
          '33%': {
            backgroundPosition: '0 0, 0 0, 60% 30%, 40% 70%, 80% 50%',
            opacity: '1'
          },
          '66%': {
            backgroundPosition: '0 0, 0 0, 20% 70%, 80% 30%, 40% 80%',
            opacity: '0.9'
          },
          '100%': {
            backgroundPosition: '0 0, 0 0, 30% 40%, 70% 60%, 50% 20%',
            opacity: '0.8'
          },
        },
      },
      backdropBlur: {
        'xl': '20px',
      },
    },
  },
  plugins: [],
}
