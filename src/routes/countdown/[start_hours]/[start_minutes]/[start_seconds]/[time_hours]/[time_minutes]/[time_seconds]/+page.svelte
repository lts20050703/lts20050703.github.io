<script lang="ts">
	import { onMount } from "svelte"
	import type { PageData } from "./$types"

	export let data: PageData

	const date = new Date()
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

<div class="fixed inset-0 flex flex-col items-center">
	<div class="time text-[512px] text-white">{left.minutes}:{left.seconds}</div>
	<div class="text-9xl text-white">{now.hours}:{now.minutes}:{now.seconds}</div>
</div>
