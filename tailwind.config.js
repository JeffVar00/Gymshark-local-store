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
        // Add your personalized colors here
        webprimary: '#0B1215',
        websecundary: '#f5f5f5',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      animation: {
        'scroll-indicator': 'scroll-indicator 6s ease',
      },
      keyframes: {
        'scroll-indicator': {
          '0%': { transform: 'translateX(0)' },
          '25%': { transform: 'translateX(-30px)' },
          '50%': { transform: 'translateX(0)' },
        }
      }
    },
  },
  plugins: [],
}
