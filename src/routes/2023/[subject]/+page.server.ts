import { readdirSync, readFileSync } from "fs"

import type { PageServerLoad } from "./$types"

export const load = (async ({ params }) => {
	return {
		subject: params.subject,
		titles: readdirSync(`./src/routes/2023/${params.subject}`).map((id) => ({
			id: id.split(".")[0],
			title: readFileSync(`./src/routes/2023/${params.subject}/${id}`, "utf8").split("\n")[0]
		}))
	}
}) satisfies PageServerLoad
