import type { PageServerLoad } from "./$types"

import { readFileSync } from "fs"

export const load = (async ({ params }) => {
	try {
		const text = readFileSync(`./src/routes/2023/${params.subject}/${params.id}.txt`, "utf8")
		const data = text.split("\n").map((text) => text.replace(/ +/, " ").trim())
		while (data[0]?.startsWith("//") || data[0] === "") data.shift()
		const title = data.shift()
		while (data[0]?.startsWith("//") || data[0] === "") data.shift()
		const azota = data.shift()
		const questions: {
			question: string
			id: number
			answers: { answer: string; id: number }[]
			right?: number
		}[] = []
		let id = 0
		let prev: "cau" | "a" | "b" | "c" | "d" = "cau"
		for (let i = 0; i < data.length; i += 1) {
			if (data[i].startsWith("//") || data[i] === "") {
				continue
			} else if (data[i].toUpperCase().startsWith("CÂU")) {
				const question = data[i].split(/\.|:/)
				question.shift()
				questions.push({ question: question.join("."), answers: [], id })
				id += 1
				prev = "cau"
			} else if (/^\*?A\./i.test(data[i])) {
				const question = questions.at(-1)
				if (!question) continue
				const answer = data[i].split(/\.|:/)
				answer.shift()
				question.answers[0] = { answer: answer.join("."), id: 0 }
				if (data[i].startsWith("*")) question.right = 0
				prev = "a"
			} else if (/^\*?B(\.|:)/i.test(data[i])) {
				const question = questions.at(-1)
				if (!question) continue
				const answer = data[i].split(/\.|:/)
				answer.shift()
				question.answers[1] = { answer: answer.join("."), id: 1 }
				if (data[i].startsWith("*")) question.right = 1
				prev = "b"
			} else if (/^\*?C(\.|:)/i.test(data[i])) {
				const question = questions.at(-1)
				if (!question) continue
				const answer = data[i].split(/\.|:/)
				answer.shift()
				question.answers[2] = { answer: answer.join("."), id: 2 }
				if (data[i].startsWith("*")) question.right = 2
				prev = "c"
			} else if (/^\*?D(\.|:)/i.test(data[i])) {
				const question = questions.at(-1)
				if (!question) continue
				const answer = data[i].split(/\.|:/)
				answer.shift()
				question.answers[3] = { answer: answer.join("."), id: 3 }
				if (data[i].startsWith("*")) question.right = 3
				prev = "d"
			} else {
				const question = questions.at(-1)
				if (!question) continue
				switch (prev) {
					case "cau":
						question.question += `<br>${data[i]}`
						break
					case "a":
						question.answers[0].answer += `<br>${data[i]}`
						break
					case "b":
						question.answers[1].answer += `<br>${data[i]}`
						break
					case "c":
						question.answers[2].answer += `<br>${data[i]}`
						break
					case "d":
						question.answers[3].answer += `<br>${data[i]}`
						break
				}
			}
		}
		return { subject: params.subject, title, questions, azota }
	} catch {
		return { subject: "404 Not Found", title: "404 Not Found", questions: [], azota: "" }
	}
}) satisfies PageServerLoad
