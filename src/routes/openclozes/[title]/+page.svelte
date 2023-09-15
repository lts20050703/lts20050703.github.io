<script lang="ts">
	import v from "$lib/v"
	import { onMount } from "svelte"
	import { themeChange } from "theme-change"
	import type { PageData } from "./$types"

	export let data: PageData

	let live = false

	let show_answer = false

	let stored: string[] = []

	let text = data.text.split(/{|}/)

	let answers = text.filter((_, i) => i % 2 === 1)

	let mounted = false

	let inputs: string[] = []

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

<div class="absolute left-0 right-0 top-0 flex flex-col items-center">
	<div class="fixed m-1 rounded-md bg-base-100 p-1">
		<div class="flex flex-row items-center gap-4">
			<div class="flex flex-row items-center gap-1">
				Check: {live ? "On" : "Off"}
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
			<div class="flex flex-row items-center gap-1">
				Answers: {show_answer ? "Show" : "Hide"}
				<input type="checkbox" class="toggle toggle-primary" bind:checked={show_answer} />
			</div>
		</div>
	</div>

	<div class="mt-6 w-full max-w-[48rem] p-4">
		<div class="mb-2 flex flex-row items-center justify-center gap-2">
			Theme: <select class="select select-primary select-sm" data-choose-theme>
				<option value="">System</option>
				<option value="dark">Dark</option>
				<option value="light">Light</option>
			</select>
		</div>

		<div class="flex flex-row justify-center gap-1">
			<a href="../" class="btn btn-primary">Back</a>
			<button
				class="btn btn-error"
				on:click={() => {
					inputs = answers.map(() => "")
					localStorage.setItem(`inputs${data.title}`, inputs.join())
				}}
				>Clear
			</button>
		</div>

		<div class="my-4 text-center text-3xl font-bold">
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
						class="input input-info mx-1 h-7 p-1"
						size={answers[(i - 1) / 2].length}
						value={answers[(i - 1) / 2]}
						readonly
					/>
				{:else}
					<input
						type="text"
						class="input mx-1 h-7 p-1 lowercase {!inputs[(i - 1) / 2] || !live
							? 'input-primary'
							: inputs[(i - 1) / 2]?.toLowerCase().split(/ +/).join(' ').trim() ===
							  answers[(i - 1) / 2]
							? 'input-success'
							: 'input-error'}"
						size={answers[(i - 1) / 2].length}
						bind:value={inputs[(i - 1) / 2]}
						on:change={() => {
							if (!mounted) return
							localStorage.setItem(`inputs${data.title}`, inputs.join())
						}}
					/>
				{/if}
			{/each}
		</div>
	</div>
</div>
