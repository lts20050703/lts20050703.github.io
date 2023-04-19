<script lang="ts">
	import { onMount } from "svelte"
	import type { PageData } from "./$types"
	import v from "$lib/v"
	import { themeChange } from "theme-change"

	export let data: PageData

	let filter: "" | "wrong" | "unanswered" | "marked" = ""

	let show_answer = false

	let live = false

	function clear() {
		inputs = []

		shuffle_section()

		save_section()
	}

	let mounted = false

	let marked: boolean[] = []

	let first: number[] = []

	function save_section() {
		const mini_sections: {
			id: number
			questions: { id: number; answers: number[] }[]
		}[] = []

		for (let i = 0; i < sections.length; i += 1) {
			const questions: { id: number; answers: number[] }[] = []
			const section = sections[i]
			for (let j = 0; j < section.questions.length; j += 1) {
				const question = section.questions[j]
				const answers: number[] = []
				for (let k = 0; k < question.answers.length; k += 1) {
					answers.push(question.answers[k].id)
				}
				questions.push({ id: question.id, answers })
			}
			mini_sections.push({ id: section.id, questions })
		}

		localStorage.setItem(`section${data.subject}${data.id}`, JSON.stringify(mini_sections))
	}

	function shuffle_section() {
		const pre_sections: typeof data.sections = []

		for (let i = 0; i < data.sections.length; i += 1) {
			const section = structuredClone(data.sections[i])

			if (section.shuffle) {
				section.questions = shuffle_array(section.questions)
			}

			for (let j = 0; j < data.sections[i].questions.length; j += 1) {
				section.questions[j].answers = shuffle_array(section.questions[j].answers)
			}

			pre_sections.push(section)
		}

		sections = shuffle_array(pre_sections)
	}

	function save() {
		if (live) {
			for (let id = 0; id < inputs.length; id += 1) {
				const input = inputs[id]

				let right: number = -1

				for (let i = 0; i < data.sections.length; i += 1) {
					const section = data.sections[i]
					for (let j = 0; j < section.questions.length; j += 1) {
						if (section.questions[j].id === id) right = section.questions[j].right!
					}
				}

				if (first[id] === -1 && input !== -1 && input !== right) {
					first[id] = input
					marked[id] = true
				}
			}
		}
		localStorage.setItem(`inputs${data.subject}${data.id}`, inputs.join(","))
		localStorage.setItem(`marked${data.subject}${data.id}`, marked.join(","))
		live ? localStorage.setItem("live", "true") : localStorage.removeItem("live")
	}

	let inputs: number[] = []

	$: inputs, live, marked, mounted && save()

	function uncheck(question: number, answer: number) {
		if (inputs[question] === answer) inputs[question] = -1
	}

	let sections: typeof data.sections = []

	onMount(() => {
		live = localStorage.getItem("live") !== null

		const stored = (localStorage.getItem(`inputs${data.subject}${data.id}`) ?? "-1").split(",")

		let length = 0

		for (let i = 0; i < data.sections.length; i += 1) {
			length += data.sections[i].questions.length
		}

		if (stored.length < length) stored.push(...Array(length - stored.length).fill("-1"))

		inputs = []

		for (let i = 0; i < stored.length; i += 1) {
			inputs.push(parseInt(stored[i]))
		}

		first = structuredClone(inputs)

		let stored_mark = (localStorage.getItem(`marked${data.subject}${data.id}`) ?? "").split(",")

		if (stored_mark.length < length)
			stored_mark.push(...Array(length - stored_mark.length).fill(""))

		marked = []

		for (let i = 0; i < stored_mark.length; i += 1) {
			marked.push(stored_mark[i] === "true")
		}

		mounted = true

		const section = localStorage.getItem(`section${data.subject}${data.id}`)

		if (section) {
			const parsed = JSON.parse(section) as {
				id: number
				questions: { id: number; answers: number[] }[]
			}[]

			for (let i = 0; i < parsed.length; i += 1) {
				const obj = parsed[i]
				const section = structuredClone(data.sections[obj.id])
				section.questions = []
				for (let j = 0; j < obj.questions.length; j += 1) {
					const obj2 = obj.questions[j]

					let question: (typeof data.sections)[number]["questions"][number] | undefined

					for (let k = 0; k < data.sections[obj.id].questions.length; k += 1) {
						if (data.sections[obj.id].questions[k].id === obj2.id)
							question = structuredClone(data.sections[obj.id].questions[k])
					}

					if (!question) continue

					const answers = structuredClone(question.answers)

					question.answers = []
					for (let k = 0; k < obj2.answers.length; k += 1) {
						const id = obj2.answers[k]
						question.answers.push(answers[id])
					}

					section.questions.push(question)
				}
				sections.push(section)
			}
		} else {
			shuffle_section()
			save_section()
		}

		themeChange(false)

		if (sections.length === 0) {
			azota = true
		}
	})

	function shuffle_array<T>(array: T[]): T[] {
		let currentIndex = array.length,
			randomIndex

		// While there remain elements to shuffle.
		while (currentIndex != 0) {
			// Pick a remaining element.
			randomIndex = Math.floor(Math.random() * currentIndex)
			currentIndex--

			// And swap it with the current element.
			;[array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]]
		}

		return array
	}

	let azota = false
</script>

<div class="absolute top-0 left-0 right-0 flex flex-col items-center">
	{#if !azota}
		<div class="fixed m-1 p-1 rounded-md bg-base-100">
			<div class="flex flex-row gap-4">
				<div class="flex flex-row gap-1">
					Kiểm tra: {live ? "Bật" : "Tắt"}
					<input type="checkbox" class="toggle toggle-primary" bind:checked={live} />
				</div>
				<div class="flex flex-row gap-1">
					Đáp Án: {show_answer ? "Hiện" : "Ẩn"}
					<input type="checkbox" class="toggle toggle-primary" bind:checked={show_answer} />
				</div>
			</div>
		</div>
	{/if}

	<div class="w-full max-w-[48rem] p-4 {azota ? '' : 'mt-8'}">
		{#if azota}
			<a href="../" class="btn btn-primary">Quay lại</a>
			<div class="text-center text-3xl font-bold my-4">
				{data.title}
			</div>
			{#if data.azota}
				<div class="flex justify-center gap-1">
					<a
						class="btn btn-secondary btn-lg"
						href={data.azota}
						target="_blank"
						rel="noopener noreferrer"
						>AZOTA
					</a>
					{#if data.word}
						<a
							class="btn btn-primary btn-lg"
							href={data.word}
							target="_blank"
							rel="noopener noreferrer"
							>WORD
						</a>
					{/if}
				</div>
			{:else}
				<div class="text-3xl text-center">HIỆN TẠI CHƯA CÓ AZOTA, QUAY LẠI SAU!</div>
			{/if}
		{:else}
			<div class="flex flex-row justify-center gap-1">
				<a href="../" class="btn btn-primary">Quay lại</a>
				<button class="btn btn-error" on:click={clear}>Xóa </button>
				<a class="btn btn-secondary" href={data.azota} target="_blank" rel="noopener noreferrer"
					>AZOTA</a
				>
			</div>
			<div class="flex flex-row justify-center items-center gap-1 mt-1">
				Chủ đề: <select class="select select-primary select-sm" data-choose-theme>
					<option value="">Hệ thống</option>
					<option value="dark">Tối</option>
					<option value="light">Sáng</option>
				</select>
			</div>
			<div class="text-center mt-4">
				In Real Xperience / 2023 {v} / {data.subject[0].toUpperCase() + data.subject.slice(1)}
			</div>
			<div class="text-center text-3xl font-bold my-4">
				{data.title}
			</div>
			<div
				class={filter === "wrong" || filter === "unanswered"
					? "text-error"
					: filter === "marked"
					? "text-warning"
					: ""}
			>
				Lọc:
				<select class="select select-primary select-sm" bind:value={filter}>
					<option class="text-base-content" value="">Hiện tất cả</option>
					<option class="text-error" value="wrong">Chỉ hiện câu sai</option>
					<option class="text-error" value="unanswered">Chỉ hiện câu chưa làm</option>
					<option class="text-warning" value="marked">Chỉ hiện câu đã đánh dấu xem lại</option>
				</select>
			</div>
			{#each sections as section}
				<br />
				{#if section.title}
					<div>{@html section.title}</div>
				{/if}
				{#each section.questions as question, i}
					<div
						class={filter === "wrong"
							? inputs[question.id] !== -1 && inputs[question.id] !== question.right
								? ""
								: "hidden"
							: filter === "unanswered"
							? inputs[question.id] !== -1
								? "hidden"
								: ""
							: filter === "marked"
							? marked[question.id]
								? ""
								: "hidden"
							: ""}
					>
						<br />
						<div class={marked[question.id] ? "text-warning" : ""}>
							<input
								type="checkbox"
								class="toggle toggle-warning"
								bind:checked={marked[question.id]}
							/>
							{#each question.question.split("<br>") as line, j}
								{#if j === 0}
									{#if data.subject === "anh"}
										Question
									{:else}
										Câu
									{/if}

									{i + 1}:
									<span class={line.startsWith("*") && show_answer ? "text-success" : ""}>
										{@html line.replace("*", "")}
									</span>
								{:else}
									<div class={line.startsWith("*") && show_answer ? "text-success" : ""}>
										{#if line.trim().startsWith("<table>")}
											<table class="px-4 border-spacing-x-4 text-center border-separate">
												{@html line.trim().slice(7, -8)}
											</table>
										{:else}
											{@html line.replace("*", "")}
										{/if}
									</div>
								{/if}
							{/each}
						</div>
						{#each question.answers as answer, j}
							<div
								class="flex flex-row gap-4 m-3 items-center {show_answer
									? answer.id === question.right
										? 'text-success'
										: ''
									: ''} {(live || show_answer) && inputs[question.id] === answer.id
									? answer.id === question.right
										? 'text-success'
										: 'text-error'
									: ''}"
							>
								<input
									on:click={() => uncheck(question.id, answer.id)}
									bind:group={inputs[question.id]}
									class="input input-primary input-xs"
									type="radio"
									name={`${question.id}`}
									value={answer.id}
									id={`${question.id}${answer.id}`}
								/>
								<label for={`${question.id}${answer.id}`}
									>{["A", "B", "C", "D"][j]}. {@html answer.answer}</label
								>
							</div>
						{/each}
					</div>
				{/each}
			{/each}
			<div
				class="flex {filter === 'wrong' || filter === 'unanswered'
					? 'text-error'
					: filter === 'marked'
					? 'text-warning'
					: ''}"
			>
				Lọc:
				<select class="select select-primary select-sm" bind:value={filter}>
					<option class="text-base-content" value="">Hiện tất cả</option>
					<option class="text-error" value="wrong">Chỉ hiện câu sai</option>
					<option class="text-error" value="unanswered">Chỉ hiện câu chưa làm</option>
					<option class="text-warning" value="marked">Chỉ hiện câu đã đánh dấu xem lại</option>
				</select>
			</div>
		{/if}
	</div>
</div>

<svelte:head
	><title>
		In Real Xperience / 2023 / {data.subject[0].toUpperCase() + data.subject.slice(1)} / {data.title?.[0].toUpperCase()}{data.title
			?.slice(1)
			.toLowerCase()}</title
	></svelte:head
>
