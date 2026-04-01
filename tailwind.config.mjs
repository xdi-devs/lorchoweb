/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        brand: {
          cyan: '#00cdff',
          orange: '#f58a20',
          white: '#FFFFFF',
          dark: '#080c12',
          darker: '#050810',
          slate: '#0d1520',
          muted: '#8a9ab5',
        },
      },
      fontFamily: {
        display: ['"Barlow Condensed"', '"Arial Narrow"', 'sans-serif'],
        body: ['"DM Sans"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'hero-gradient': 'linear-gradient(135deg, #080c12 0%, #0d1a2e 50%, #080c12 100%)',
        'cyan-glow': 'radial-gradient(ellipse at center, rgba(0,205,255,0.15) 0%, transparent 70%)',
        'orange-glow': 'radial-gradient(ellipse at center, rgba(245,138,32,0.15) 0%, transparent 70%)',
      },
      boxShadow: {
        'cyan': '0 0 30px rgba(0,205,255,0.3), 0 0 60px rgba(0,205,255,0.1)',
        'orange': '0 0 30px rgba(245,138,32,0.3), 0 0 60px rgba(245,138,32,0.1)',
        'card': '0 4px 24px rgba(0,0,0,0.4), 0 1px 4px rgba(0,205,255,0.1)',
        'glass': '0 8px 32px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.08)',
      },
      animation: {
        'fade-up': 'fadeUp 0.7s ease forwards',
        'fade-in': 'fadeIn 0.6s ease forwards',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4,0,0.6,1) infinite',
        'ticker': 'ticker 30s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'scan-line': 'scanLine 3s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        ticker: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        scanLine: {
          '0%, 100%': { opacity: '0.3', transform: 'scaleX(0.8)' },
          '50%': { opacity: '1', transform: 'scaleX(1)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
    },
  },
  plugins: [],
};
