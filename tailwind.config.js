module.exports = {
    content: ["./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        fontFamily: {
            'display': ['Montserrat'],
            'body': ['Montserrat']
        },
        fontSize: {
            xs: "0.75rem",
            sm: "0.875rem",
            base: "1rem",
            lg: "1.125rem",
            xl: "1.25rem",
            "2xl": "1.5rem",
            "3xl": "1.875rem",
            "4xl": "2.25rem",
            "5xl": "3rem",
            "6xl": "4rem",
        },
        extend: {
            colors: {
                primary: {
                    100: "#fffcee",
                    200: "#fff0ab",
                    300: "#ffe779",
                    400: "#ffe468",
                    500: "#ffe157",
                    600: "#e6cb4e",
                    700: "#ccb446",
                    800: "#b39e3d",
                    900: "#998734",
                },
                secondary: {
                    500: "#1a202c",
                },
                gray: {
                    100: "#f7fafc",
                    200: "#edf2f7",
                    300: "#e2e8f0",
                    400: "#cbd5e0",
                    500: "#a0aec0",
                    600: "#718096",
                    700: "#4a5568",
                    800: "#2d3748",
                    900: "#1a202c",
                },
            },
            lineHeight: {
                hero: "4.5rem",
            },
        },
    },
    variants: {},
    plugins: [],
};