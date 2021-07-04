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
        },
        lightPrimary: '#4df00c',
        davysGrey: '#494947',
        scremingGreen: '#35ff69',
        vividSkyBlue: '#44ccff'
      },
      fontFamily: {
        body: ['Montserrat']
      },
      height: {
        heroHeight: '85vh',
        navHeight: '15vh'
      },
      backgroundImage: {
        "hero-pattern":
          // "url('https://cdn.statically.io/gh/afkcodes/megbytdev-web/main/public/bg.svg')",
          "url('../public/jumbotron_img.png')",
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
