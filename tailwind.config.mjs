/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
      },
      colors: {
        green: {
          50: '#f0f9f5',
          100: '#dcf2e5',
          200: '#bbe5cf',
          300: '#8cd3b0',
          400: '#5cbd8a',
          500: '#357960', // Primary green
          600: '#2d6651',
          700: '#255043',
          800: '#1e3f36',
          900: '#1a352e',
        },
        gray: {
          50: '#f8faf9',
          100: '#f1f5f2',
          200: '#e4ebe6',
          300: '#d1ddd4',
          400: '#9eb0a3',
          500: '#6b7c70',
          600: '#556059',
          700: '#454e48',
          800: '#3a403c',
          900: '#323733',
        }
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      letterSpacing: {
        'tight': '-0.025em',
        'tighter': '-0.05em',
      },
      boxShadow: {
        'green': '0 4px 14px 0 rgba(53, 121, 96, 0.15)',
        'green-lg': '0 10px 25px -3px rgba(53, 121, 96, 0.2), 0 4px 6px -2px rgba(53, 121, 96, 0.1)',
      }
    },
  },
  plugins: [],
} 