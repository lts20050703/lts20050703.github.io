import type { PageServerLoad } from "./$types"

import { readFileSync } from "fs"

export const load = (async ({ params }) => {
	try {
		const text = readFileSync(`./src/routes/2023/${params.subject}/${params.id}.txt`, "utf8")
		const raw = text.split("\n")
		const data: string[] = []
		for (let i = 0; i < raw.length; i += 1) {
			const line = raw[i].replace(/ +/, " ").trim()
			if (line === "" || line.startsWith("//")) continue
			data.push(line)
		}
		const title = data.shift()
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
			const words = data[i].split(" ")
			for (let i = 0; i < words.length; i += 1) {
				const word = words[i]
				if (word.toLowerCase().startsWith("câu")) {
					questions.push({ question: "", answers: [], id })
					id += 1
					prev = "cau"
					// skip the question number
					i += 1
					continue
				}
				const question = questions.at(-1)
				if (!question) continue
				if (
					word[word.startsWith("*") ? 2 : 1] !== "." &&
					word[word.startsWith("*") ? 2 : 1] !== ":"
				) {
					switch (prev) {
						case "cau":
							question.question += ` ${word}`
							break
						case "a":
							question.answers[0].answer += ` ${word}`
							break
						case "b":
							question.answers[1].answer += ` ${word}`
							break
						case "c":
							question.answers[2].answer += ` ${word}`
							break
						case "d":
							question.answers[3].answer += ` ${word}`
							break
					}
					continue
				}
				switch (word[word.startsWith("*") ? 1 : 0].toLowerCase()) {
					case "a":
						question.answers[0] = { answer: word.slice(word.startsWith("*") ? 3 : 2), id: 0 }
						prev = "a"
						break
					case "b":
						question.answers[1] = { answer: word.slice(word.startsWith("*") ? 3 : 2), id: 1 }
						prev = "b"
						break
					case "c":
						question.answers[2] = { answer: word.slice(word.startsWith("*") ? 3 : 2), id: 2 }
						prev = "c"
						break
					case "d":
						question.answers[3] = { answer: word.slice(word.startsWith("*") ? 3 : 2), id: 3 }
						prev = "d"
						break
				}
				if (!word.startsWith("*")) continue
				switch (prev) {
					case "a":
						question.right = 0
						break
					case "b":
						question.right = 1
						break
					case "c":
						question.right = 2
						break
					case "d":
						question.right = 3
						break
				}
			}
		}
		return { subject: params.subject, title, questions, azota, id: params.id }
	} catch {
		return {
			subject: "404 Not Found",
			title: "404 Not Found",
			questions: [] as {
				question: string
				id: number
				answers: { answer: string; id: number }[]
				right?: number
			}[],
			azota: ""
		}
	}
}) satisfies PageServerLoad
