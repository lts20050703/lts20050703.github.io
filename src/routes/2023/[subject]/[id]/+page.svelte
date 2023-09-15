<script lang="ts">
	import { onMount } from "svelte"
	import { themeChange } from "theme-change"
	import type { PageData } from "./$types"
	export let data: PageData

	let filter: "" | "wrong" | "unanswered" | "marked" = ""

	let show_answer = false

	let live = false

	let mounted = false

	let marked: boolean[] = []

	function save_section() {
		localStorage.setItem(
			`section${data.subject}${data.id}`,
			JSON.stringify(
				sections.map((section) => ({
					id: section.id,
					questions: section.questions.map((question) => ({
						id: question.id,
						answers: question.answers.map((answer) => answer.id)
					}))
				}))
			)
		)
	}

	function shuffle_section() {
		const pre_sections = data.sections.map((section) => {
			if (section.shuffle) section.questions = shuffle_array(section.questions)
			section.questions.forEach((question) => (question.answers = shuffle_array(question.answers)))
			return section
		})

		data.sections.forEach((section) => {
			if (section.shuffle) section.questions = shuffle_array(section.questions)

			section.questions.forEach((question) => {
				question.answers = shuffle_array(question.answers)
			})
		})

		sections = shuffle_array(pre_sections)

		let fake_id = 0

		sections.forEach((section) => {
			let arr: string[] | null = null
			if (!section.shuffle) arr = section.title.match(/(\(\d+\))/g)

			section.questions.forEach((question, j) => {
				question.fake_id = fake_id
				if (arr) section.title = section.title.replace(arr[j], `(${fake_id + 1})`)
				fake_id += 1
			})
		})
	}

	let inputs: number[] = []

	let sections: {
		id: number
		title: string
		shuffle: boolean
		questions: {
			question: string
			id: number
			answers: { answer: string; id: number }[]
			right?: number
			fake_id?: number
		}[]
	}[] = []

	onMount(async () => {
		live = localStorage.getItem("live") !== null

		const stored = (localStorage.getItem(`inputs${data.subject}${data.id}`) ?? "").split(",")

		let length = data.sections
			.map((section) => section.questions.length)
			.reduce((prev, curr) => prev + curr, 0)

		if (stored.length < length) stored.push(...Array(length - stored.length).fill("-1"))

		inputs = stored.map((stored) => parseInt(stored))

		let stored_mark = (localStorage.getItem(`marked${data.subject}${data.id}`) ?? "").split(",")

		if (stored_mark.length < length)
			stored_mark.push(...Array(length - stored_mark.length).fill(""))

		marked = stored_mark.map((mark) => mark === "true")

		mounted = true

		themeChange(false)

		const section = localStorage.getItem(`section${data.subject}${data.id}`) ?? "[]"
		const parsed = JSON.parse(section) as {
			id: number
			questions: { id: number; answers: number[] }[]
		}[]

		if (parsed.length < data.sections.length) {
			shuffle_section()
			save_section()
		} else {
			let fake_id = 0

			parsed.forEach((obj) => {
				const section: (typeof sections)[number] = {
					id: obj.id,
					shuffle: data.sections[obj.id].shuffle,
					title: data.sections[obj.id].title,
					questions: []
				}

				// Re-number paragraph text
				let arr: string[] | null = null

				if (!section.shuffle) {
					arr = section.title.match(/(\(\d+\))/g)
				}

				obj.questions.forEach((obj2, j) => {
					let question: (typeof sections)[number]["questions"][number] | undefined

					data.sections[obj.id].questions.forEach((_question) => {
						if (_question.id === obj2.id) {
							question = { ..._question, fake_id }
							fake_id += 1

							if (arr) section.title = section.title.replace(arr[j], `(${fake_id})`)
						}

						// Re-number paragraph text
					})

					if (!question) return

					const answers = question.answers

					question.answers = obj2.answers.map((answer) => answers[answer])

					section.questions.push(question)
				})

				sections.push(section)
			})
		}

		if (data.subject === "lý") {
			let script = document.createElement("script")
			script.src = "https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"
			document.head.append(script)
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
</script>

<svelte:head>
	<title>
		LTS20050703 / 2023 / {data.subject[0].toUpperCase() + data.subject.slice(1)} / {data.title?.[0].toUpperCase()}{data.title
			?.slice(1)
			.toLowerCase()}
	</title>
	{#if data.subject === "lý"}
		<script>
			window.MathJax = { tex: { inlineMath: [["$", "$"]] } }
		</script>
		<script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
	{/if}
</svelte:head>

<div class="absolute left-0 right-0 top-0 flex flex-col items-center">
	<div class="fixed m-1 rounded-md bg-base-100 p-1">
		<div class="flex flex-row gap-4">
			<div class="flex flex-row gap-1">
				Kiểm tra: {live ? "Bật" : "Tắt"}
				<input
					type="checkbox"
					class="toggle toggle-primary"
					bind:checked={live}
					on:change={() => {
						if (!mounted) return

						if (live) localStorage.setItem("live", "true")
						else localStorage.removeItem("live")
					}}
				/>
			</div>
			<div class="flex flex-row gap-1">
				Đáp Án: {show_answer ? "Hiện" : "Ẩn"}
				<input type="checkbox" class="toggle toggle-primary" bind:checked={show_answer} />
			</div>
		</div>
	</div>

	<div class="mt-6 w-full max-w-[48rem] p-4">
		<div class="mb-2 flex flex-row items-center justify-center gap-1">
			Chủ đề: <select class="select select-primary select-sm" data-choose-theme>
				<option value="">Hệ thống</option>
				<option value="dark">Tối</option>
				<option value="light">Sáng</option>
			</select>
		</div>

		<div class="flex flex-row justify-center gap-1">
			<a href="../" class="btn btn-primary">Quay lại</a>
			<button
				class="btn btn-error"
				on:click={() => {
					inputs = new Array(
						data.sections
							.map((section) => section.questions.length)
							.reduce((prev, curr) => prev + curr, 0)
					).fill(-1)

					shuffle_section()

					save_section()

					if (data.subject === "lý") {
						location.reload()
					}
				}}
				>Xóa
			</button>
			<a class="btn btn-secondary" href={data.azota}>AZOTA</a>
		</div>

		<div class="my-4 text-center text-3xl font-bold">
			{data.title}
		</div>
		<div
			class="flex flex-row items-center gap-2 {filter === 'wrong' || filter === 'unanswered'
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
		{#each sections as section}
			<div
				class={section.questions.some((question) => {
					switch (filter) {
						case "":
							return true
						case "wrong":
							return inputs[question.id] !== -1 && inputs[question.id] !== question.right
						case "unanswered":
							return inputs[question.id] === -1
						case "marked":
							return marked[question.id]
					}
				})
					? ""
					: "hidden"}
			>
				<br />
				{#if section.title}
					<div>{@html section.title}</div>
				{/if}
				{#each section.questions as question}
					<div
						class={filter === "wrong"
							? inputs[question.id] !== -1 && inputs[question.id] !== question.right
								? ""
								: "hidden"
							: filter === "unanswered"
							? inputs[question.id] === -1
								? ""
								: "hidden"
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
								on:change={() => {
									if (!mounted) return

									localStorage.setItem(`marked${data.subject}${data.id}`, marked.join(","))
								}}
							/>
							{#each question.question.split("<br>") as line, j}
								{#if j === 0}
									{#if data.subject === "anh"}
										Question
									{:else}
										Câu
									{/if}

									{(question.fake_id ?? 0) + 1}:
									<span class={line.startsWith("*") && show_answer ? "text-success" : ""}>
										{@html line.replace("*", "")}
									</span>
								{:else}
									<div class={line.startsWith("*") && show_answer ? "text-success" : ""}>
										{#if line.trim().startsWith("<table>")}
											<table
												class="border-separate border-spacing-x-4 border-spacing-y-2 px-4 py-2 text-center"
											>
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
								class="m-3 flex flex-row items-center gap-4 {show_answer
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
									on:click={() => {
										if (inputs[question.id] === answer.id) inputs[question.id] = -1
									}}
									bind:group={inputs[question.id]}
									on:change={() => {
										if (!mounted) return
										localStorage.setItem(`inputs${data.subject}${data.id}`, inputs.join(","))

										if (!live) return

										inputs.forEach((input, id) => {
											let right = -1
											data.sections.forEach((section) => {
												section.questions.forEach((question) => {
													if (question.id === id) right = question.right
												})
											})

											if (input !== -1 && input !== right) {
												marked[id] = true
												localStorage.setItem(`marked${data.subject}${data.id}`, marked.join(","))
											}
										})
									}}
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
			</div>
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
	</div>
</div>
