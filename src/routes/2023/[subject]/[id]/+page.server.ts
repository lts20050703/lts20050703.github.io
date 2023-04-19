import type { PageServerLoad } from "./$types"

import { readFileSync } from "fs"

export const load = (async ({ params }) => {
	try {
		const text = readFileSync(`./src/routes/2023/${params.subject}/${params.id}.txt`, "utf8")
		const raw = text.split("\n")
		const data: string[] = []
		for (let i = 0; i < raw.length; i += 1) {
			const line = raw[i].replace(/[ \t]+/g, " ").trim()
			if (line === "" || line.startsWith("//")) continue
			data.push(
				line.startsWith("/")
					? `<img src="${line}">`
					: line
							.replace(/_{3,}/g, "...")
							.replace(/__(.+?)__/g, "<u>$1</u>")
							.replace(/\*\*(.+?)\*\*/g, "<b>$1</b>")
							.replace(/_(.)/g, "<sub>$1</sub>")
							.replace(/\^(.)/g, "<sup>$1</sup>")
			)
		}
		const title = data.shift()
		const azota = data.shift()
		let word = ""
		if (data[0].startsWith("/")) {
			word = data[0]
			data.shift()
		}
		const sections: {
			id: number
			title: string
			shuffle: boolean
			questions: {
				question: string
				id: number
				answers: { answer: string; id: number }[]
				right?: number
			}[]
		}[] = []
		let question_id = 0
		let section_id = 0
		let prev: "question" | "a" | "b" | "c" | "d" | "section" = "section"
		for (let i = 0; i < data.length; i += 1) {
			const words = data[i].split(" ")
			for (let j = 0; j < words.length; j += 1) {
				const word = words[j]

				if (word.startsWith("#")) {
					sections.push({ title: word.slice(1), shuffle: true, questions: [], id: section_id })
					section_id += 1
					prev = "section"
					continue
				}
				if (word.startsWith("$")) {
					sections.push({ title: word.slice(1), shuffle: false, questions: [], id: section_id })
					section_id += 1
					prev = "section"
					continue
				}

				if (sections.length === 0) {
					sections.push({ title: "", shuffle: true, questions: [], id: section_id })
					section_id += 1
				}

				const section = sections.at(-1)
				if (!section) continue

				if (
					(word.toLowerCase().startsWith("câu") || word.toLowerCase().startsWith("question")) &&
					!isNaN(parseInt(words[j + 1]))
				) {
					section.questions.push({
						question: "",
						answers: [],
						id: question_id
					})

					question_id += 1
					prev = "question"

					// skip the number
					j += 1
					continue
				}

				const question = section.questions.at(-1)
				if (
					(word[word.startsWith("*") ? 2 : 1] !== "." &&
						word[word.startsWith("*") ? 2 : 1] !== ":") ||
					(word.toLowerCase()[word.startsWith("*") ? 1 : 0] !== "a" &&
						word.toLowerCase()[word.startsWith("*") ? 1 : 0] !== "b" &&
						word.toLowerCase()[word.startsWith("*") ? 1 : 0] !== "c" &&
						word.toLowerCase()[word.startsWith("*") ? 1 : 0] !== "d")
				) {
					switch (prev) {
						case "question":
							if (!question) continue
							question.question += ` ${word}`
							break
						case "a":
							if (!question) continue
							question.answers[0].answer += ` ${word}`
							break
						case "b":
							if (!question) continue
							question.answers[1].answer += ` ${word}`
							break
						case "c":
							if (!question) continue
							question.answers[2].answer += ` ${word}`
							break
						case "d":
							if (!question) continue
							question.answers[3].answer += ` ${word}`
							break
						case "section":
							section.title += ` ${word}`
							break
					}
					continue
				}
				if (!question) continue
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

			const section = sections.at(-1)
			if (!section) continue
			const question = section.questions.at(-1)

			switch (prev) {
				case "question":
					if (!question) continue
					question.question += "<br>"
					break
				case "a":
					if (!question) continue
					question.answers[0].answer += "<br>"
					break
				case "b":
					if (!question) continue
					question.answers[1].answer += "<br>"
					break
				case "c":
					if (!question) continue
					question.answers[2].answer += "<br>"
					break
				case "d":
					if (!question) continue
					question.answers[3].answer += "<br>"
					break

				case "section":
					section.title += "<br>"
			}
		}
		return { subject: params.subject, title, sections, azota, id: params.id, word }
	} catch {
		return {
			subject: "404 Not Found",
			title: "404 Not Found",
			sections: [] as {
				id: number
				title: string
				shuffle: boolean
				questions: {
					question: string
					id: number
					answers: { answer: string; id: number }[]
					right?: number
				}[]
			}[],
			azota: ""
		}
	}
}) satisfies PageServerLoad
