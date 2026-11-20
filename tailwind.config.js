module.exports = {
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./data/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0E1014",
        paper: "#F2F3F5",
        muted: "#5B616E",
        line: "#D9DCE2",
      },
      fontFamily: {
        display: ["'Bricolage Grotesque Variable'", "ui-sans-serif", "system-ui", "sans-serif"],
        sans: ["'Geist Variable'", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      keyframes: {
        rise: {
          "0%": { opacity: "0", transform: "translateY(28px) scale(0.98)" },
          "100%": { opacity: "1", transform: "translateY(0) scale(1)" },
        },
      },
      animation: {
        rise: "rise 0.9s cubic-bezier(0.2, 0.7, 0.2, 1) both",
      },
    },
  },
  plugins: [],
};
