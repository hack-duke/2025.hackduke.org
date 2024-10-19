/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      home_bg1: '#000000',
      home_bg2: '#00014C',
      secondary: '#9DD6FB',
      accent1: '#DE86E9',
      background: '#193D91',
      white: '#FFF',
      accent2: '#FEF751',
      accent3: '#DE035E',
      black: '#170738',

    },
    extend: {},
    fontFamily: {
      sans: ['Urbanist', 'ui-sans-serif', 'system-ui'],
      mono: [
        'Aldrich',
        'source-code-pro',
        'Menlo',
        'Monaco',
        'Consolas',
        'Courier New'
      ]
    }
  },
  plugins: []
}
