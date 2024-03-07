/** @type {import('tailwindcss').Config} */
export default {
   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
   theme: {
      extend: {
         fontFamily: { Orbit: ["Orbitron", "sans-serif"] },
         animation: {
            cursor: "cursor 1s ease-in infinite",
         },
         keyframes: {
            cursor: {
               "0%": { opacity: "0" },
               "100%": { opacity: "1" },
            },
         },
      },
   },
   plugins: [],
};
