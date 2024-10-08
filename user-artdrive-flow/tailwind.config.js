/** @type {import('tailwindcss').Config} */
module.exports = {
    plugins: [
        require("@tailwindcss/typography"),
        // other plugins...
    ],
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            keyframes: {
                "bg-pulse": {
                    "0%, 100%": { backgroundColor: "#662d91" }, // light purple
                    "50%": { backgroundColor: "#1d1160" }, // darker purplish colorr
                },
            },
            animation: {
                "bg-pulse": "bg-pulse 2s infinite",
            },
            backgroundImage: {
                "custom-gradient":
                    "linear-gradient(315deg, hsla(117, 88%, 47%, 1) 0%, hsla(142, 74%, 58%, 1) 50%, hsla(184, 86%, 56%, 1) 100%)",
                "text-gradient": "linear-gradient(90deg, #818cf8, #21E342)",
                "gradient-button":
                    "linear-gradient(315deg, #fd7b4f, #e13db3, #47affc)",
                // "bg-image": "url('/images/Main.svg')",
                "bg-image": "linear-gradient(30deg, #22133B 8%, #1F0B24 25%, #000000 100%)",
                "bg-about": "url('/images/BGabout.svg')",
                "bg-how": "url('/images/howBg.svg')",
            },
            fontFamily: {
                dinround: ["dinround", "sans-serif"],
                dinroundbold: ["dinroundbold", "sans-serif"],
                dinroundmedium: ["dinroundmedium", "sans-serif"],
                custom: ["italiana", "sans-serif"],
                montserrat: ["Montserrat", "sans-serif"],
                particiana: ["particiana", "sans-serif"],
            },
        },
    },
    plugins: [],
};
