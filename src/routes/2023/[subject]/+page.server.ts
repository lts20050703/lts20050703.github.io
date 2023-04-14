import type { PageServerLoad } from "./$types"

export const load = (async ({ params }) => {
	return { subject: params.subject }
}) satisfies PageServerLoad
