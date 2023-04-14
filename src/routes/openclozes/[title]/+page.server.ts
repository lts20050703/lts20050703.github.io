import type { PageServerLoad } from "./$types"

import { readFileSync } from "fs"

export const load = (async ({ params }) => {
	try {
		const text = readFileSync(`./src/routes/openclozes/[title]/${params.title}.txt`, "utf8")
		return { title: params.title.replaceAll("-", " ").toUpperCase(), text }
	} catch {
		return { title: "404 Not Found", text: "404 Not Found" }
	}
}) satisfies PageServerLoad
