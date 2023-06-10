<script lang="ts">
	import { onMount } from "svelte"
	import type { PageData } from "./$types"
	import v from "$lib/v"
	import { themeChange } from "theme-change"

	export let data: PageData

	let live = false

	let show_answer = false

	function clear() {
		inputs = []
	}

	let stored: string[] = []

	let text = data.text.split(/{|}/)

	let answers: string[] = []

	for (let i = 0; i < text.length; i += 1) {
		if (i % 2 === 0) continue
		answers.push(text[i])
	}

	let mounted = false

	function save() {
		localStorage.setItem(`inputs${data.title}`, inputs.join())
		live ? localStorage.setItem("live", "true") : localStorage.removeItem("live")
	}

	let inputs: string[] = []

	$: inputs, live, mounted && save()

	onMount(() => {
		live = localStorage.getItem("live") !== null
		stored = (localStorage.getItem(`inputs${data.title}`) ?? "").split(",")

		if (stored.length < answers.length)
			stored.push(...Array(answers.length - stored.length).fill(""))

		inputs = stored

		mounted = true

		themeChange(false)
	})
</script>

<svelte:head>
	<title>LTS20050703 / Openclozes {v} / {data.title[0] + data.title.slice(1).toLowerCase()}</title>
</svelte:head>

<div class="absolute top-0 left-0 right-0 flex flex-col items-center">
	<div class="fixed m-1 p-1 rounded-md bg-base-100">
		<div class="flex flex-row gap-4">
			<div class="flex flex-row gap-1">
				Check: {live ? "On" : "Off"}
				<input type="checkbox" class="toggle toggle-primary" bind:checked={live} />
			</div>
			<div class="flex flex-row gap-1">
				Answers: {show_answer ? "Show" : "Hide"}
				<input type="checkbox" class="toggle toggle-primary" bind:checked={show_answer} />
			</div>
		</div>
	</div>

	<div class=" w-full max-w-[48rem] p-4 mt-8">
		<div class="flex flex-row justify-center gap-1">
			<a href="../" class="btn btn-primary">Back</a>
			<button class="btn btn-error" on:click={clear}>Clear </button>
		</div>
		<div class="flex flex-row justify-center items-center gap-1 mt-1">
			Theme: <select class="select select-primary select-sm" data-choose-theme>
				<option value="">System</option>
				<option value="dark">Dark</option>
				<option value="light">Light</option>
			</select>
		</div>

		<div class="text-center mt-4">LTS20050703 / Openclozes {v}</div>
		<div class="text-center text-3xl font-bold my-4">
			{data.title[0] + data.title.slice(1).toLowerCase()}
		</div>
		<div class="leading-loose">
			{#each data.text.split(/{|}/) as text, i}
				{#if i % 2 === 0}
					{#if text.includes("\n")}
						{text.split("\n")[0]}
						<br />
						{text.split("\n")[1]}
					{:else}
						{text}
					{/if}
				{:else if show_answer}
					<input
						type="text"
						class="input input-info h-7 mx-1 p-1"
						size={answers[(i - 1) / 2].length}
						value={answers[(i - 1) / 2]}
						readonly
					/>
				{:else}
					<input
						type="text"
						class="input h-7 mx-1 p-1 lowercase {inputs[(i - 1) / 2] === '' || !live
							? 'input-primary'
							: inputs[(i - 1) / 2].toLowerCase().split(/ +/).join(' ').trim() ===
							  answers[(i - 1) / 2]
							? 'input-success'
							: 'input-error'}"
						size={answers[(i - 1) / 2].length}
						bind:value={inputs[(i - 1) / 2]}
					/>
				{/if}
			{/each}
		</div>
	</div>
</div>
