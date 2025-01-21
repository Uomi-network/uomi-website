/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2d3436',
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },
      keyframes: {
        wave: {
          '0%, 100%': { 
            transform: 'translateX(-100%)', 
            opacity: 0 
          },
          '50%': { 
            transform: 'translateX(100%)', 
            opacity: 1 
          },
        },
        'wave-vertical': {
          '0%, 100%': { 
            transform: 'translateY(-100%)', 
            opacity: 0 
          },
          '50%': { 
            transform: 'translateY(100%)', 
            opacity: 1 
          },
        }
      },
      animation: {
        'wave': 'wave 8s ease-in-out infinite',
        'wave-slow': 'wave 12s ease-in-out infinite',
        'wave-slower': 'wave 16s ease-in-out infinite',
        'wave-vertical': 'wave-vertical 10s ease-in-out infinite',
        'wave-vertical-slow': 'wave-vertical 14s ease-in-out infinite',
        'wave-vertical-slower': 'wave-vertical 18s ease-in-out infinite',
      }
    },
  },
  plugins: [],
};