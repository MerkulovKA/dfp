module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'main': "url('../src/img/main.png')",
        'mobile': "url('../src/img/mobile.png')",
      },
    },
    colors: {
      'white': '#ffffff',
      'orange': '#F59C00',
      'gray': '#242046',
      'blue': '#3A3186',
    }
  },
  plugins: [],
}