import { readdirSync, readFileSync } from "fs"
import type { PageServerLoad } from "./$types"
export const load = (async ({ params }) => {
	const dirents = readdirSync(`./src/routes/2023/${params.subject}`)
	const titles: { id: string; title: string }[] = []
	for (let i = 0; i < dirents.length; i += 1) {
		const dirent = dirents[i]
		titles.push({
			id: dirent.slice(0, -4),
			title: readFileSync(`./src/routes/2023/${params.subject}/${dirent}`, "utf8").split("\n")[0]
		})
	}
	return { subject: params.subject, titles }
}) satisfies PageServerLoad
