<script lang="ts">
	import v from "$lib/v"
	import { onMount } from "svelte"
	import { themeChange } from "theme-change"
	onMount(() => {
		themeChange(false)
	})

	const date = new Date()
	const start = {
		hours: date.getHours(),
		minutes: date.getMinutes(),
		seconds: date.getSeconds()
	}

	const time = {
		hours: 0,
		minutes: 45,
		seconds: 0
	}

	function countdown(ev: KeyboardEvent | MouseEvent) {
		if (ev instanceof KeyboardEvent && ev.key !== "Enter") return
		location.href = `./${start.hours}/${start.minutes}/${start.seconds}/${time.hours}/${time.minutes}/${time.seconds}`
	}
</script>

<svelte:head>
	<title>LTS20050703 / Openclozes {v}</title>
</svelte:head>

<div
	class="mt-12 flex flex-col items-center gap-1 sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl"
>
	<div class="flex flex-row items-center gap-1">
		<img src="/android-chrome-512x512.png" class="h-16" alt="" />
		<div class="font-bold">LTS20050703</div>
	</div>

	<div class="mb-4 font-bold">Openclozes {v}</div>

	<div class="flex items-center justify-center gap-3">
		START
		<input
			class="input input-primary input-lg text-3xl"
			type="number"
			min="0"
			max="23"
			bind:value={start.hours}
			on:keydown={countdown}
		/>
		HOURS
		<input
			class="input input-primary input-lg text-3xl"
			type="number"
			min="0"
			max="59"
			bind:value={start.minutes}
			on:keydown={countdown}
		/>
		MINUTES
		<input
			class="input input-primary input-lg text-3xl"
			type="number"
			min="0"
			max="59"
			bind:value={start.seconds}
			on:keydown={countdown}
		/>
		SECONDS
	</div>
	<div class="flex items-center justify-center gap-3">
		TIME
		<input
			class="input input-primary input-lg text-3xl"
			type="number"
			min="0"
			max="99"
			bind:value={time.hours}
			on:keydown={countdown}
		/>
		HOURS
		<input
			class="input input-primary input-lg text-3xl"
			type="number"
			min="0"
			max="59"
			bind:value={time.minutes}
			on:keydown={countdown}
		/>
		MINUTES
		<input
			class="input input-primary input-lg text-3xl"
			type="number"
			min="0"
			max="59"
			bind:value={time.seconds}
			on:keydown={countdown}
		/>
		SECONDS
	</div>
	<div class="flex items-center justify-center gap-3">
		<button class="btn btn-primary" on:click={countdown}>COUNTDOWN</button>
	</div>
</div>

<div class="fixed left-0 right-0 top-0 flex flex-row justify-center">
	<div class="m-1 rounded-md bg-base-100 p-1">
		Theme: <select class="select select-primary select-sm" data-choose-theme>
			<option value="">System</option>
			<option value="dark">Dark</option>
			<option value="light">Light</option>
		</select>
	</div>
</div>

<a href="/projects" class="btn btn-primary fixed left-0 top-0 m-4">Back</a>
