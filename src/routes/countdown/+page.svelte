<script lang="ts">
	import { page } from "$app/stores"
	import v from "$lib/v"
	import { onMount } from "svelte"
	import { themeChange } from "theme-change"

	const start_hours = $page.url.searchParams.get("start_hours")
	const start_minutes = $page.url.searchParams.get("start_minutes")
	const start_seconds = $page.url.searchParams.get("start_seconds")
	const time_hours = $page.url.searchParams.get("time_hours")
	const time_minutes = $page.url.searchParams.get("time_minutes")
	const time_seconds = $page.url.searchParams.get("time_seconds")

	const data = {
		countdown:
			start_hours && start_minutes && start_seconds && time_hours && time_minutes && time_seconds,
		start: {
			hours: parseInt(start_hours ?? ""),
			minutes: parseInt(start_minutes ?? ""),
			seconds: parseInt(start_seconds ?? "")
		},
		time: {
			hours: parseInt(time_hours ?? ""),
			minutes: parseInt(time_minutes ?? ""),
			seconds: parseInt(time_seconds ?? "")
		}
	}

	const date = new Date()
	const input_start = {
		hours: date.getHours(),
		minutes: date.getMinutes(),
		seconds: date.getSeconds()
	}

	const input_time = {
		hours: 0,
		minutes: 45,
		seconds: 0
	}

	function countdown(ev: KeyboardEvent | MouseEvent) {
		if (ev instanceof KeyboardEvent && ev.key !== "Enter") return
		location.href = `./?start_hours=${input_start.hours}&start_minutes=${input_start.minutes}&start_seconds=${input_start.seconds}&time_hours=${input_time.hours}&time_minutes=${input_time.minutes}&time_seconds=${input_time.seconds}`
	}

	const start = new Date(
		date.getFullYear(),
		date.getMonth(),
		date.getDate(),
		data.start.hours,
		data.start.minutes,
		data.start.seconds
	).getTime()
	const time = ((data.time.hours * 60 + data.time.minutes) * 60 + data.time.seconds) * 1000

	let left = {
		hours: data.time.hours.toString().padStart(2, "0"),
		minutes: data.time.minutes.toString().padStart(2, "0"),
		seconds: data.time.seconds.toString().padStart(2, "0")
	}

	let now = {
		hours: date.getHours().toString().padStart(2, "0"),
		minutes: date.getMinutes().toString().padStart(2, "0"),
		seconds: date.getSeconds().toString().padStart(2, "0")
	}

	onMount(() => {
		themeChange(false)

		requestAnimationFrame(callback)

		function callback() {
			if (Date.now() >= start + 1000) {
				const time_left = start + time - Date.now() + 1000
				if (time_left < 0) {
					left = { hours: "00", minutes: "00", seconds: "00" }
				} else {
					left = {
						hours: Math.floor(time_left / 3600000)
							.toString()
							.padStart(2, "0"),
						minutes: Math.floor((time_left % 3600000) / 60000)
							.toString()
							.padStart(2, "0"),
						seconds: Math.floor((time_left % 60000) / 1000)
							.toString()
							.padStart(2, "0")
					}
				}
			}

			const date = new Date()
			now = {
				hours: date.getHours().toString().padStart(2, "0"),
				minutes: date.getMinutes().toString().padStart(2, "0"),
				seconds: date.getSeconds().toString().padStart(2, "0")
			}
			requestAnimationFrame(callback)
		}
	})
</script>

<svelte:head>
	<title>LTS20050703 / Countdown {v}</title>
</svelte:head>

{#if data.countdown}
	<div class="fixed inset-0 flex flex-col items-center">
		<div class="time text-[384px] text-white">{left.minutes}:{left.seconds}</div>
		<div class="text-7xl text-white">{now.hours}:{now.minutes}:{now.seconds}</div>
	</div>
{:else}
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
				bind:value={input_start.hours}
				on:keydown={countdown}
			/>
			HOURS
			<input
				class="input input-primary input-lg text-3xl"
				type="number"
				min="0"
				max="59"
				bind:value={input_start.minutes}
				on:keydown={countdown}
			/>
			MINUTES
			<input
				class="input input-primary input-lg text-3xl"
				type="number"
				min="0"
				max="59"
				bind:value={input_start.seconds}
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
				bind:value={input_time.hours}
				on:keydown={countdown}
			/>
			HOURS
			<input
				class="input input-primary input-lg text-3xl"
				type="number"
				min="0"
				max="59"
				bind:value={input_time.minutes}
				on:keydown={countdown}
			/>
			MINUTES
			<input
				class="input input-primary input-lg text-3xl"
				type="number"
				min="0"
				max="59"
				bind:value={input_time.seconds}
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
{/if}
