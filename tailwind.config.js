/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        mainShade: "#004733",
        mainTint: "#1ee07f",
        mainTint2: "#017848",
        textLight: "#292b29",
        textLight2: "#dfe0dc",
      },
      fontFamily: {
        custom: ["CarmenSans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
