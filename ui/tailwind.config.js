module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}'
    ],
    theme: {
        extend: {
            backgroundImage: {
                bannerOne: "url('/banner-one.jpeg')",
                bannerTwo: "url('/banner-two.jpeg')"
            }
        }
    },
    plugins: []
};
