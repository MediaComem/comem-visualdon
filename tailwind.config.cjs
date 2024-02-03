/** @type {import('tailwindcss').Config} */
const production = !process.env.ROLLUP_WATCH;

module.exports = {
  content: ["./src/**/*.{svelte,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
  purge: {
    content: [
     "./src/**/*.svelte",

    ],
    enabled: production
  },
	important: true,
}
