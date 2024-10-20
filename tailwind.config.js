/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      home_bg1: '#000000',
      home_bg2: '#1f1d6a',
      about_bg1: '#152b84',
      about_bg2: '#252786',
      tracks_bg1:'#252786',
      tracks_bg2: '#381a7a',
      schedule_bg1: '#381a7a',
      schedule_bg2: '#330d66',
      faq_bg1: '#330d66',
      faq_bg2: '#2a0855',
      sponsors_bg1: '#2a0855',
      sponsors_bg2: '#180739',
      secondary: '#9DD6FB',
      background: '#193D91',
      white: '#FFF',
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
