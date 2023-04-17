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

		const prequestions = data.questions.map((question) => ({
			...question,
			answers: shuffle(question.answers)
		}))

		questions = shuffle(prequestions)

		localStorage.setItem(
			`question${data.subject}${data.title}`,
			JSON.stringify(
				questions.map((question) => ({
					id: question.id,
					answers: question.answers.map((answer) => answer.id)
				}))
			)
		)
	}

	let stored: string[] = []

	let mounted = false

	let marked: boolean[] = []

	let first: string[] = []

	function save() {
		if (live) {
			inputs.forEach((input, i) => {
				if (first[i] === "" && input !== "" && input !== `${i}${data.questions[i].right}`) {
					first[i] = input
					marked[i] = true
				}
			})
		}
		localStorage.setItem(`inputs${data.subject}${data.title}`, inputs.join(","))
		localStorage.setItem(`marked${data.subject}${data.title}`, marked.join(","))
		live ? localStorage.setItem("live", "true") : localStorage.removeItem("live")
	}

	let inputs: string[] = []

	$: inputs, live, marked, mounted && save()

	function uncheck(question: number, answer: number) {
		if (inputs[question] === `${question}${answer}`) inputs[question] = ""
	}

	let questions = data.questions

	onMount(() => {
		live = localStorage.getItem("live") !== null

		stored = (localStorage.getItem(`inputs${data.subject}${data.title}`) ?? "").split(",")

		if (stored.length < data.questions.length)
			stored.push(...Array(data.questions.length - stored.length).fill(""))

		inputs = stored
		first = JSON.parse(JSON.stringify(stored))

		let stored_mark = (localStorage.getItem(`marked${data.subject}${data.title}`) ?? "")
			.split(",")
			.map((marked) => marked === "true")

		if (stored_mark.length < data.questions.length)
			stored_mark.push(...Array(data.questions.length - stored_mark.length).fill(""))

		marked = stored_mark

		mounted = true

		const question = localStorage.getItem(`question${data.subject}${data.title}`)
		if (question) {
			questions = []
			const parsed = JSON.parse(question) as {
				id: number
				answers: [number, number, number, number]
			}[]
			parsed.forEach((obj) => {
				const question = data.questions.find((question) => question.id === obj.id)!
				const answers = [
					question.answers.find((answer) => answer.id === obj.answers[0])!,
					question.answers.find((answer) => answer.id === obj.answers[1])!,
					question.answers.find((answer) => answer.id === obj.answers[2])!,
					question.answers.find((answer) => answer.id === obj.answers[3])!
				]
				questions.push({ ...question, answers: answers })
			})
		} else {
			const prequestions = data.questions.map((question) => ({
				...question,
				answers: shuffle(question.answers)
			}))

			questions = shuffle(prequestions)
			localStorage.setItem(
				`question${data.subject}${data.title}`,
				JSON.stringify(
					questions.map((question) => ({
						id: question.id,
						answers: question.answers.map((answer) => answer.id)
					}))
				)
			)
		}

		themeChange(false)

		if (questions.length === 0) {
			azota = true
		}
	})

	function shuffle<T>(arr: T[]): T[] {
		let array = structuredClone(arr)
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
				<div class="flex justify-center">
					<a
						class="btn btn-secondary btn-lg"
						href={data.azota}
						target="_blank"
						rel="noopener noreferrer"
						>AZOTA
					</a>
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
					<option class="text-white" value="">Hiện tất cả</option>
					<option class="text-error" value="wrong">Chỉ hiện câu sai</option>
					<option class="text-error" value="unanswered">Chỉ hiện câu chưa làm</option>
					<option class="text-warning" value="marked">Chỉ hiện câu đã đánh dấu xem lại</option>
				</select>
			</div>
			{#each questions as question, i}
				<div
					class={filter === "wrong"
						? inputs[question.id] && inputs[question.id] !== `${question.id}${question.right}`
							? ""
							: "hidden"
						: filter === "unanswered"
						? inputs[question.id]
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
								Câu {i + 1}:
								<span class={line.startsWith("*") && show_answer ? "text-success" : ""}>
									{@html line.replace("*", "")}
								</span>
							{:else}
								<div class={line.startsWith("*") && show_answer ? "text-success" : ""}>
									{@html line.replace("*", "")}
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
								: ''} {(live || show_answer) && inputs[question.id] === `${question.id}${answer.id}`
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
								value={`${question.id}${answer.id}`}
								id={`${question.id}${answer.id}`}
							/>
							<label for={`${question.id}${answer.id}`}
								>{["A", "B", "C", "D"][j]}. {@html answer.answer}</label
							>
						</div>
					{/each}
				</div>
			{/each}
			<br />
			<div class="">Tổng cộng: {questions.length} Câu</div>
			<div
				class="{inputs.some((input) => input) ? '' : 'hidden'} {inputs.every((input) => input)
					? 'text-success'
					: 'text-warning'}"
			>
				Đã làm: {inputs.filter((input) => input).length} Câu
			</div>
			<div class={live || show_answer ? "" : "hidden"}>
				<div
					class="text-success {questions.some(
						(question) =>
							inputs[question.id] && inputs[question.id] === `${question.id}${question.right}`
					)
						? ''
						: 'hidden'}"
				>
					Đúng: {questions.filter(
						(question) => `${question.id}${question.right}` === inputs[question.id]
					).length} Câu
				</div>
				<div
					class="text-error {questions.some(
						(question) =>
							inputs[question.id] && inputs[question.id] !== `${question.id}${question.right}`
					)
						? ''
						: 'hidden'}"
				>
					Sai: {questions
						.map((question, i) =>
							inputs[question.id] && inputs[question.id] !== `${question.id}${question.right}`
								? `Câu ${i + 1}`
								: undefined
						)
						.filter((question) => question)
						.join(", ")}
				</div>
			</div>

			<div
				class="{inputs.every((input) => input) ? 'text-success' : 'text-error'} {inputs.some(
					(input) => !input
				)
					? ''
					: 'hidden'}"
			>
				Chưa làm: {questions
					.map((question, i) => (inputs[question.id] ? undefined : `Câu ${i + 1}`))
					.filter((question) => question)
					.join(", ")}
			</div>
			<div
				class="{live || show_answer ? '' : 'hidden'} {questions.length ===
				questions.filter((question) => `${question.id}${question.right}` === inputs[question.id])
					.length
					? 'text-success'
					: 'text-warning'}"
			>
				<div>
					Điểm: {(
						(questions.filter(
							(question) => `${question.id}${question.right}` === inputs[question.id]
						).length /
							questions.length) *
						10
					).toFixed(1)}
				</div>
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
