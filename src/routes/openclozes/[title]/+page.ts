import type { PageLoad } from "./$types"

import { readFileSync } from "fs"

export const load = (async ({ params }) => {
	try {
		const text = readFileSync(`/openclozes/${params.title}.txt`, "utf8")
		return { title: params.title.replaceAll("-", " ").toUpperCase(), text }
	} catch {
		return { title: "404 Not Found", text: "404 Not Found" }
	}
}) satisfies PageLoad
