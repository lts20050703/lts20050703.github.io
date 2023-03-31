<script lang="ts">
	const input = `Mr. Jackson's father had just {passed away}. He had died of cancer. George had {sat up with} him during the last night at the hospital. Both men knew that the end was {drawing near} but the older man {kept on} talking cheerfully.
"I am not unhappy," he told his son. "Sometimes life has been difficult, but I usually {face up to} its problems. When I was a student, I {tried out for} the football team and didn't meet with sueces. I {dropped out of} high school for a year after that. I {fell in with} some young men who were robbing people on the streets. We didn't use real guns. We {held} people {up} with wooden guns that looked real.`
	let answers = input.split(/{|}/).filter((_, i) => i % 2 === 1)
	let inputs = answers.map((_) => "")
	let live = false
	$: live, console.log(live)
</script>

<div class="w-screen flex items-center flex-col p-4">
	<div class="text-white leading-loose xl:w-[48rem]">
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

<div class="text-white fixed bottom-4 left-0 right-0 flex gap-4 justify-center">
	Live update <input type="checkbox" class="checkbox checkbox-primary" bind:checked={live} />
</div>
