import { readdirSync, readFileSync } from "fs"
import type { PageServerLoad } from "./$types"
export const load = (async ({ params }) => {
	const dirents = readdirSync(`./src/routes/2023/${params.subject}`)
	return {
		subject: params.subject,
		titles: dirents.map((dirent) => ({
			id: dirent.slice(0, -4),
			title: readFileSync(`./src/routes/2023/${params.subject}/${dirent}`, "utf8").split("\n")[0]
		}))
	}
}) satisfies PageServerLoad
