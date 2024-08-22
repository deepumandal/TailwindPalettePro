import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "var(--primary)",
          light: "var(--primary-light)",
          dark: "var(--primary-dark)",
        },
        secondary: {
          DEFAULT: "var(--secondary)",
          light: "var(--secondary-light)",
          dark: "var(--secondary-dark)",
        },
        thitiary: {
          DEFAULT: "var(--thitiary)",
          light: "var(--thitiary-light)",
          dark: "var(--thitiary-dark)",
        },
        confirm: {
          DEFAULT: "var(--confirm)",
          light: "var(--confirm-light)",
          dark: "var(--confirm-dark)",
        },
        alert: {
          DEFAULT: "var(--alert)",
          light: "var(--alert-light)",
          dark: "var(--alert-dark)",
        },
        warning: {
          DEFAULT: "var(--warning)",
          light: "var(--warning-light)",
          dark: "var(--warning-dark)",
        },
        error: {
          DEFAULT: "var(--error)",
          light: "var(--error-light)",
          dark: "var(--error-dark)",
        },
        destructive: {
          DEFAULT: "var(--destructive)",
          light: "var(--destructive-light)",
          dark: "var(--destructive-dark)",
        },
        background: {
          DEFAULT: "var(--background)",
          light: "var(--background-light)",
          dark: "var(--background-dark)",
        },
        heading: {
          DEFAULT: "var(--heading)",
          light: "var(--heading-light)",
          dark: "var(--heading-dark)",
        },
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".scrollbar": {
          "&::-webkit-scrollbar": {
            width: "12px",
          },
          "&::-webkit-scrollbar-track": {
            background: "#f1f1f1",
          },
          "&::-webkit-scrollbar-thumb": {
            background: "#888",
            borderRadius: "10px",
          },
          "&::-webkit-scrollbar-thumb:hover": {
            background: "#555",
          },
        },
      };

      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
};
