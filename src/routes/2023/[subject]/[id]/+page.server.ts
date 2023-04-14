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
		const questions: {
			question: string
			id: number
			answers: { answer: string; id: number }[]
			right?: number
		}[] = []
		for (let i = 0; i < data.length; i += 1) {
			if (data[i].toUpperCase().startsWith("CÂU")) {
				const question = data[i].split(/\.|:/)
				question.shift()
				questions.push({ question: question.join("."), answers: [], id: i })
			} else if (/^\*?A/i.test(data[i])) {
				const question = questions.at(-1)
				if (!question) continue
				const answer = data[i].split(/\.|:/)
				answer.shift()
				question.answers[0] = { answer: answer.join("."), id: 0 }
				if (data[i].startsWith("*")) question.right = 0
			} else if (/^\*?B/i.test(data[i])) {
				const question = questions.at(-1)
				if (!question) continue
				const answer = data[i].split(/\.|:/)
				answer.shift()
				question.answers[1] = { answer: answer.join("."), id: 1 }
				if (data[i].startsWith("*")) question.right = 1
			} else if (/^\*?C/i.test(data[i])) {
				const question = questions.at(-1)
				if (!question) continue
				const answer = data[i].split(/\.|:/)
				answer.shift()
				question.answers[2] = { answer: answer.join("."), id: 2 }
				if (data[i].startsWith("*")) question.right = 2
			} else if (/^\*?D/i.test(data[i])) {
				const question = questions.at(-1)
				if (!question) continue
				const answer = data[i].split(/\.|:/)
				answer.shift()
				question.answers[3] = { answer: answer.join("."), id: 3 }
				if (data[i].startsWith("*")) question.right = 3
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
