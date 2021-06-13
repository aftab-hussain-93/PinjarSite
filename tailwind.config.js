module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#30AB11',
        secondary: {
          100: '#E2E2D5',
          200: '#888883'
        }
      },
      fontFamily: {
        body: ['Montserrat']
      },
      height: {
        heroHeight: '90vh'
      },
      backgroundImage: {
        hero: "linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(3, 3, 3, 0.3)), url('../public/jumbotron_img.png')",
      },
      maxWidth: {
        '1/4': '25%',
        '1/2': '50%',
        '2/3': '66.6%',
        '3/4': '75%',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
