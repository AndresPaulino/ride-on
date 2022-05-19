module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#264653',
        secondary: '#2a9d8f',
        tertiary: '#e9c46a',
        textColor: '#f1faee',
        quinary: '#f4a261',
        quinaryDark: '#e76f51',
      },
      height: {
        '10v': '10vh',
        '20v': '20vh',
        '30v': '30vh',
        '40v': '40vh',
        '50v': '50vh',
        '60v': '60vh',
        '70v': '70vh',
        '80v': '80vh',
        '90v': '90vh',
        '100v': '100vh',
      },
      fontFamily: {
        dancing: ['Dancing Script', 'cursive'],
        poppins: ['Poppins', 'sans-serif'],
      },
      dropShadow: {
        right: '0 10px 35px rgba(0, 0, 0, 0.25)',
        all: '10px 10px 10px rgba(0, 0, 0, 0.45)',
        bottom: ['0 0 15px rgba(0, 0, 0, 0.50)', '0 0 15px rgba(0, 0, 0, 0.50)'],
      },
    },
  },
};
