import type { PageServerLoad } from "./$types"

const links: Record<string, { name: string; href: string; img?: string; username?: string }[]> = {
	projects: [
		{ name: "E5Y Qualifier", href: "/e5y-qualifier", img: "/img/e5y.png" },
		{ name: "E5Y Final", href: "/e5y-final", img: "/img/e5y.png" },
		{ name: "Wist", href: "/wist", img: "/img/wist.png" },
		{ name: "2023", href: "/2023" },
		{ name: "Openclozes", href: "/openclozes" },
		{ name: "Library", href: "/library" },
		{ name: "Countdown", href: "/countdown" }
	],
	gaming: [
		{ name: "TETR.IO", href: "/tetr", img: "/img/tetr.ico", username: "@lts20050703" },
		{ name: "Minecraft", href: "/minecraft", img: "/img/minecraft.webp", username: "@lts20050703" },
		{ name: "Steam", href: "/steam", img: "/img/steam.ico", username: "@lts20050703" },
		{ name: "Itch", href: "/itch", img: "/img/itch.ico", username: "@lts20050703" },
		{ name: "Speedrun", href: "/speedrun", img: "/img/speedrun.png", username: "@lts20050703" },
		{ name: "Splits", href: "/splits", img: "/img/splits.png", username: "@lts20050703" }
	],
	social: [
		{ name: "Cohost", href: "/cohost", img: "/img/cohost.ico", username: "@lts20050703" },
		{
			name: "Mastodon",
			href: "/mastodon",
			img: "/img/mastodon.ico",
			username: "@lts20050703@mastodon.social"
		},
		{ name: "YouTube", href: "/youtube", img: "/img/youtube.png", username: "@lts0703" },
		{ name: "Twitch", href: "/twitch", img: "/img/twitch.png", username: "@lts20050703" },
		{ name: "Facebook", href: "/facebook", img: "/img/facebook.png", username: "@lts20050703" },
		{ name: "SourceHut", href: "/srht", img: "/img/srht.svg", username: "~lts20050703" },
		{ name: "CodeBerg", href: "/codeberg", img: "/img/codeberg.svg", username: "@lts20050703" },
		{ name: "GitHub", href: "/github", img: "/img/github.ico", username: "@lts20050703" },
		{ name: "Wakatime", href: "/wakatime", img: "/img/wakatime.png", username: "@lts20050703" },
		{
			name: "StackOverflow",
			href: "/stackoverflow",
			img: "/img/stackoverflow.ico",
			username: "@lts20050703"
		},
		{ name: "Discord", href: "/discord", img: "/img/discord.ico", username: "@lts20050703" },
		{ name: "Guilded", href: "/guilded", img: "/img/guilded.png", username: "@lts20050703" },
		{ name: "Revolt", href: "/revolt", img: "/img/revolt.ico", username: "@lts20050703" },
		{ name: "Element", href: "/element", img: "/img/element.ico", username: "@lts20050703" }
	]
}

const data: Record<string, { href?: string; username?: string; img?: string; back?: string }> = {
	starfruitsupernova: { href: "https://youtu.be/RPLUiubenkQ" },
	deathlylonelinessattacks: { href: "https://youtu.be/HZyOMZaOFRc" },
	fireship: { href: "https://nitter.net/fireship_dev/status/1567936669529305088" },
	svelte: { href: "https://nitter.net/stolinski/status/1438173489479958536" },
	// Projects
	"e5y-qualifier": { href: "https://sr.ht/~lts20050703/e5y-qualifier", back: "/projects" },
	"e5y-final": { href: "https://sr.ht/~lts20050703/e5y-final", back: "/projects" },
	wist: { href: "https://wist.lts20050703.repl.co", back: "/projects" },
	// Gaming™
	tetr: { href: "https://ch.tetr.io/u/lts20050703", back: "/gaming" },
	steam: { href: "https://steamcommunity.com/id/lts20050703", back: "/gaming" },
	itch: { href: "https://lts20050703.itch.io", back: "/gaming" },
	speedrun: { href: "https://speedrun.com/user/lts20050703", back: "/gaming" },
	splits: { href: "https://splits.io/users/lts20050703", back: "/gaming" },
	minecraft: { username: "@lts20050703", img: "/img/minecraft.webp", back: "/gaming" },
	// Social accounts
	cohost: { href: "https://cohost.org/lts20050703", back: "/social" },
	mastodon: { href: "https://mastodon.social/@lts20050703", back: "/social" },
	youtube: { href: "https://youtube.com/@lts0703", back: "/social" },
	twitch: { href: "https://twitch.com/lts20050703", back: "/social" },
	facebook: { href: "https://facebook.com/lts20050703", back: "/social" },
	srht: { href: "https://sr.ht/~lts20050703", back: "/social" },
	sourcehut: { href: "https://sr.ht/~lts20050703", back: "/social" },
	codeberg: { href: "https://codeberg.org/lts20050703", back: "/social" },
	github: { href: "https://github.com/lts20050703", back: "/social" },
	wakatime: { href: "https://wakatime.com/@lts20050703", back: "/social" },
	stackoverflow: { href: "https://stackoverflow.com/users/16118261/lts20050703", back: "/social" },
	guilded: { href: "https://www.guilded.gg/u/lts20050703", back: "/social" },
	discord: { username: "@lts20050703", img: "/img/discord.ico", back: "/social" },
	revolt: { username: "@lts20050703", img: "/img/revolt.ico", back: "/social" },
	element: { username: "@lts20050703:matrix.org", img: "/img/element.ico", back: "/social" }
}

export const load = (async ({ params }) => {
	switch (params.id) {
		case "projects":
		case "gaming":
		case "social":
			return {
				id: params.id,
				links: links[params.id]
			}
		default:
			return {
				id: params.id,
				href: data[params.id]?.href,
				username: data[params.id]?.username,
				img: data[params.id]?.img,
				back: data[params.id]?.back
			}
	}
}) satisfies PageServerLoad
