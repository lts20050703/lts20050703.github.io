import type { PageServerLoad } from "./$types"

import { readdirSync } from "fs"

export const load = (async () => {
	const subjects = readdirSync("./src/routes/2023", { withFileTypes: true })
	return {
		subjects: subjects
			.filter((subject) => subject.isDirectory() && !subject.name.startsWith("["))
			.map((subject) => subject.name)
	}
}) satisfies PageServerLoad
