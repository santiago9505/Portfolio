module.exports = {
  theme: {
    extend: {
      darkMode: "media",
      screens: {
        "3xl": "2034px",
      },
      colors: {
        darks: {
          100: "#313335",
        },
        blue: {
          200: "#e0e7f0",
          450: "#1E2D42",
        },
        softblue: {
          350: "#99AECC",
          400: "#3475cf",
          500: "#5884C3",
        },
        red: {
          200: "#FF0000",
        },
      },
      fontFamily: {
        body: ["Montserrat"],
      },
      width: {
        "1/7": "14.2857143%",
        "2/7": "28.5714286%",
        "3/7": "42.8571429%",
        "4/7": "57.1428571%",
        "5/7": "71.4285714%",
        "8/7": "100%",
        "6/7": "120%",
      },
      height: {
        "9/7": "130%",
      },
      maxHeight: {
        0: "0",
        "1/4": "25%",
        "1/2": "50%",
        "3/4": "75%",
        full: "100%",
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
