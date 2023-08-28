import { readdirSync } from "fs"
import type { PageServerLoad } from "./$types"
export const load = (async () => {
	return {
		subjects: readdirSync("./src/routes/2023", { withFileTypes: true })
			.filter((dirent) => dirent.isDirectory() && dirent.name[0] !== "[")
			.map((dirent) => dirent.name)
	}
}) satisfies PageServerLoad
