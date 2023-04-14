import type { PageServerLoad } from "./$types"

import { readFileSync } from "fs"

export const load = (async ({ params }) => {
	try {
		const text = readFileSync(
			`./src/routes/2023/[subject]/[id]/${params.subject}${params.id}.txt`,
			"utf8"
		)
		const data = text.split("\n")
		const title = data.shift()
		const azota = data.shift()
		const questions: { question: string; answers: string[]; right?: number }[] = []
		for (let i = 0; i < data.length; i += 1) {
			if (data[i].startsWith("Câu")) {
				questions.push({ question: data[i], answers: [] })
			} else if (data[i].startsWith("A")) {
				const question = questions.at(-1)
				if (!question) continue
				question.answers[0] = data[i]
			} else if (data[i].startsWith("B")) {
				const question = questions.at(-1)
				if (!question) continue
				question.answers[1] = data[i]
			} else if (data[i].startsWith("C")) {
				const question = questions.at(-1)
				if (!question) continue
				question.answers[2] = data[i]
			} else if (data[i].startsWith("D")) {
				const question = questions.at(-1)
				if (!question) continue
				question.answers[3] = data[i]
			} else if (data[i].startsWith("*A")) {
				const question = questions.at(-1)
				if (!question) continue
				question.right = 0
				question.answers[0] = data[i].slice(1)
			} else if (data[i].startsWith("*B")) {
				const question = questions.at(-1)
				if (!question) continue
				question.answers[1] = data[i].slice(1)
				question.right = 1
			} else if (data[i].startsWith("*C")) {
				const question = questions.at(-1)
				if (!question) continue
				question.answers[2] = data[i].slice(1)
				question.right = 2
			} else if (data[i].startsWith("*D")) {
				const question = questions.at(-1)
				if (!question) continue
				question.answers[3] = data[i].slice(1)
				question.right = 3
			} else {
				const question = questions.at(-1)
				if (!question) continue
				question.question += `<br>${data[i]}`
			}
		}
		return { subject: params.subject, title, questions, azota }
	} catch {
		return { subject: "404 Not Found", title: "404 Not Found", questions: [], azota: "" }
	}
}) satisfies PageServerLoad
