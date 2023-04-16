<script lang="ts">
	import { onMount } from "svelte"
	import type { PageData } from "./$types"
	import v from "$lib/v"

	export let data: PageData

	let live = false

	function check() {
		live = !live
	}

	let show_answer = false

	function clear() {
		inputs = []
	}

	let answers = data.text.split(/{|}/).filter((_, i) => i % 2 === 1)
	let stored: string[] = []

	let autosave = ""
	let last_save = 0

	let mounted = false

	function save() {
		autosave = "saving"
		last_save = Date.now()
		setTimeout(() => {
			if (Date.now() - last_save >= 500) autosave = "saved!"
		}, 500)
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

		inputs = stored ?? answers.map((_) => "")

		mounted = true
	})
</script>

<svelte:head>
	<title
		>In Real Xperience / Openclozes {v} / {data.title[0] + data.title.slice(1).toLowerCase()}</title
	>
</svelte:head>

<div class="absolute top-0 left-0 right-0 flex items-center flex-col px-4 pt-1 pb-10">
	<div class="dark:text-white w-full lg:w-[48rem]">
		<div class="text-center mt-12">In Real Xperience / Openclozes {v}</div>
		<div class="text-center text-3xl font-bold my-4">
			{data.title[0] + data.title.slice(1).toLowerCase()}
		</div>
		<div class="fixed top-0 left-0 right-0 flex justify-center">
			<div class="m-1 p-1 rounded-md bg-base-100">
				<div class="flex sm:hidden flex-row justify-center gap-4 m-1">
					<a href="../" class="btn btn-primary btn-sm">Back</a>
					<button class="btn btn-error btn-sm" on:click={clear}>Clear </button>
					<div
						class="fixed bottom-0 right-0 bg-base-100 m-1 p-1 rounded-md flex flex-row gap-2 items-center"
					>
						Answer: {show_answer ? "Show" : "Hide"}
						<input type="checkbox" class="toggle toggle-primary" bind:checked={show_answer} />
					</div>
					<div
						class="fixed bottom-0 left-0 bg-base-100 m-1 p-1 rounded-md flex flex-row gap-2 items-center"
					>
						Check: {live ? "On" : "Off"}
						<input type="checkbox" class="toggle toggle-primary" bind:checked={live} />
					</div>
				</div>
				<div class="hidden text-center sm:flex sm:flex-row gap-4 justify-center m-1 items-center">
					<a href="../" class="btn btn-primary btn-sm">Back</a>
					<div class="flex flex-row gap-2 items-center">
						<span>Check: {live ? "On" : "Off"}</span>
						<input type="checkbox" class="toggle toggle-primary" bind:checked={live} />
					</div>
					<div class="flex flex-row gap-2 items-center">
						<span>Answer: {show_answer ? "Show" : "Hide"}</span>
						<input type="checkbox" class="toggle toggle-primary" bind:checked={show_answer} />
					</div>

					<button class="btn btn-error btn-sm" on:click={clear}>Clear</button>
					<span
						class="fixed bottom-0 py-1 px-2 rounded-md bg-base-100 {autosave === 'saved!'
							? 'text-success'
							: 'text-warning'}"
					>
						{autosave}
					</span>
				</div>
			</div>
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
