import type { Config } from 'tailwindcss';

export default {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      main: '#D95D28',
      black: '#111111',
      white: '#FFFFFF',
      gray: {
        900: '#1B1B1B',
        800: '#2B2B2B',
        700: '#616161',
        600: '#757575',
        500: '#9E9E9E',
        400: '#B5B5B5',
        300: '#E0E0E0',
        200: '#EEEEEE',
        100: '#F5F5F5',
        50: '#FAFAFA',
      },
    },
  },
  plugins: [],
} satisfies Config;
