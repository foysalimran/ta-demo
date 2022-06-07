module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'primary': {
          DEFAULT: '#44DC46', /// Change your color  theme here
          '50': '#FFFFFF',
          '100': '#F0FCF0',
          '200': '#C5F4C6',
          '300': '#9AEC9B',
          '400': '#6FE471',
          '500': '#44DC46',
          '600': '#25C827',
          '700': '#1D9D1F',
          '800': '#157216',
          '900': '#0D470E'
        },
      },
    },
    fontFamily: {
      'display': ['Poppins', 'sans-serif'],
      'body': ['Montserrat', 'sans-serif'],
     }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
