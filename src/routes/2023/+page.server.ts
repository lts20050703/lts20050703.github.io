import type { PageServerLoad } from "./$types"
import { readdirSync } from "fs"
export const load = (async () => {
	const dirents = readdirSync("./src/routes/2023", { withFileTypes: true })
	const subjects: string[] = []
	for (let i = 0; i < dirents.length; i += 1) {
		const dirent = dirents[i]
		const name = dirent.name
		if (!dirent.isDirectory() || name[0] === "[") continue
		subjects.push(name)
	}
	return { subjects }
}) satisfies PageServerLoad
