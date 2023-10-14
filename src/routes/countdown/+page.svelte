<script lang="ts">
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

<div class="fixed inset-0 m-3 flex flex-col items-center gap-3 text-7xl text-white">
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
