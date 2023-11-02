/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        "sm": "375px",
        "lg": "1440px",
      },
      colors: {
        "primary-red": "hsl(1, 90%, 64%)",
        "primary-blue": "hsl(219, 85%, 26%)",
        "very-light-grayish-blue": "hsl(210, 60%, 98%)",
        "light-grayish-blue-1": "hsl(211, 68%, 94%)",
        "light-grayish-blue-2": "hsl(205, 33%, 90%)",
        "grayish-blue": "hsl(219, 14%, 63%)",
        "dark-grayish-blue": "hsl(219, 12%, 42%)",
        "very-dark-blue": "hsl(224, 21%, 14%)",
        "neutral-white": "hsl(0, 0%, 100%)",
        "unread-gray": "hsl(206,63.6%,97.8%)",
        "lg-background-color": "hsl(228,71.4%,98.6%)"
      },
      fontFamily: {
        "Plus-Jakarta-Sans": ["Plus Jakarta Sans", "sans-serif"]
      }
    },
  },
  plugins: [],
}