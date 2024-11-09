module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-navbg': '#000',  // Dark background
        'light-text': '#c9c9c9',  // Light text color
        'light-navbg': '#edf2f7', // Light background for the nav
      },
    },
  },
  darkMode: 'class',  // This ensures dark mode is enabled with the class
  plugins: [],
};
