module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      animation: {
        "spin-slow": "spin 20s linear infinite",
        "bounce-slow": "bounce 4s infinite",
      },
      blur: {
        "3xl": "64px",
      },
    },
    plugins: [],
  },
};
