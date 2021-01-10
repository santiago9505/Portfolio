module.exports = {
  theme: {
    extend: {
      colors: {
        blue: {
          450: "#1E2D42",
        },
        softblue: {
          350: "#99AECC",
          500: "#5884C3",
        },
        red: {
          200: "#FF0000",
        },
      },
      fontFamily: {
        body: ["Montserrat"],
      },
    },
  },
  variants: {
    textColor: ["responsive", "active"],
    textDecoration: ["responsive", "active"],
    extend: {
      // ...
      animation: ["hover", "focus"],
    },
  },
};
