/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        lime: '	#d7da2f',
        red: 'hsl(4, 69%, 50%)',
        Slate100: 'hsl(202, 86%, 94%)',
        Slate300: 'hsl(203, 41%, 72%)',
        Slate500: 'hsl(200, 26%, 54%)',
        Slate700: 'hsl(200, 24%, 40%)',
        Slate900: 'hsl(202, 55%, 16%)',
        SlateDark: '#0e2431'
      }
    }
  },
  plugins: []
}
