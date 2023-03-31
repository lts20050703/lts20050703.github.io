<script lang="ts">
	const input = ``
	let answers = input.split(/{|}/).filter((_, i) => i % 2 === 1)
	let stored = localStorage.getItem("inputs2")?.split(",")
	if (stored && stored.length < answers.length)
		stored.push(...Array(answers.length - stored.length).fill(""))
	let inputs = stored ?? answers.map((_) => "")
	let live = Boolean(localStorage.getItem("live")) ?? false
	$: inputs, localStorage.setItem("inputs2", inputs.join())
	$: live, localStorage.setItem("live", live ? "true" : "false")
	function clear() {
		localStorage.removeItem("inputs2")
		location.reload()
	}

	function check() {
		live = true
	}

	function show_answer() {
		inputs = answers
	}
</script>

<svelte:head>
	<title>OPEN CLOZES</title>
</svelte:head>

<div class="w-screen flex items-center flex-col p-4">
	<div class="text-black dark:text-white leading-loose xl:w-[48rem]">
		<div class="text-red-500 text-center">WORK IN PROGRESS, NOT COMPLETED YET</div>
		<div class="text-center flex flex-row gap-4 justify-center">
			<a href="../" class="btn btn-primary btn-sm">Back</a>
			<div>
				Live update <input type="checkbox" class="checkbox checkbox-primary" bind:checked={live} />
			</div>
			<button class="btn btn-success btn-sm" on:click={check}>Check</button>
			<button class="btn btn-warning btn-sm" on:click={show_answer}>Show answers</button>

			<button class="btn btn-error btn-sm" on:click={clear}>Clear</button>
		</div>
		{#each input.split(/{|}/) as text, i}
			{#if i % 2 === 0}
				{#if text.includes("\n")}
					{text.split("\n")[0]}
					<br />
					{text.split("\n")[1]}
				{:else}
					{text}
				{/if}
			{:else}
				<input
					type="text"
					class="input h-7 mx-1 p-1 {inputs[(i - 1) / 2] === '' || !live
						? 'input-primary'
						: inputs[(i - 1) / 2].toLowerCase().split(/ +/).join(' ').trim() ===
						  answers[(i - 1) / 2]
						? 'input-success'
						: 'input-error'}"
					bind:value={inputs[(i - 1) / 2]}
				/>
			{/if}
		{/each}
	</div>
</div>
