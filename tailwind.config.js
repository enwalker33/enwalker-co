module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'profile-image': "url('/public/EW2020.png')",
      })

    },
  },
  plugins: [],
}
