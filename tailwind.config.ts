import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        charcoal: "#191919",
        cream: "#F7F4ED",
        olive: {
          DEFAULT: "#777C60", // brand olive: decoration and large text only (3.9:1 on cream)
          deep: "#5B5F48", // darker olive for small text and buttons (6:1 on cream)
          soft: "#A9AE92", // light olive for text on charcoal (7.7:1)
        },
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      maxWidth: { page: "72rem" },
    },
  },
  plugins: [],
};
export default config;
