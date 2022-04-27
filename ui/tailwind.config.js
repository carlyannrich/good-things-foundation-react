module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}'
    ],
    theme: {
        extend: {
            backgroundImage: {
                heroImage: "url('/banner-one.jpeg')",
                sideBySideImage: "url('/banner-two.jpeg')"
            }
        }
    },
    plugins: []
};
