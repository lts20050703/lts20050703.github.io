/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.svelte"],
	plugins: [require("daisyui")],
	daisyui: { themes: ["light", "dark"] }
}