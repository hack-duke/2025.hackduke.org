/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      home_bg1: '#000000',
      home_bg2: '#1f1d6a',
      secondary: '#9DD6FB',
      background: '#193D91',
      white: '#FFF',
      black: '#170738',
      navbar: '#010104',
      about_ticket_text:'#D2CCFC'

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
