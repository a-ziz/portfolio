/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        primary: "var(--color-bg-primary)",
        secondary: "var(--color-bg-secondary)",
        button: "var(--color-bg-button)",
        icon: "var(--color-bg-icon)",
      },
      textColor: {
        accent: "var(--color-text-accent)",
        primary: "var(--color-text-primary)",
        secondary: "var(--color-text-secondary)",
        btnText: "var(--color-bg-secondary)",
        hoverblue: "var(--color-text-hoverblue)",
      },
      borderColor: {
        primary: "var(--color-text-primary)",
        secondary: "var(--color-border-secondary)",
        input: "var(--color-bg-input)",
        accent: "var(--color-text-accent)",
      },
      boxShadow: {
        primary: "var(--color-shadow-primary)",
      },
    },
  },
  plugins: [],
};
