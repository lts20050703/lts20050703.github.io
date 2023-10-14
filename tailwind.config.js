/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{html,js,svelte,ts}"],
	plugins: [require("daisyui")],
	daisyui: {
		themes: [
			{
				light: {
					...require("daisyui/src/theming/themes")["[data-theme=light]"] // eslint-disable-line @typescript-eslint/no-var-requires
				}
			},
			{
				dark: {
					...require("daisyui/src/theming/themes")["[data-theme=dark]"], // eslint-disable-line @typescript-eslint/no-var-requires
					"base-content": "#FFF"
				}
			}
		]
	}
}
