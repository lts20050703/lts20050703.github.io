<script lang="ts">
	const input = `Mr. Jackson's father had just {passed away}. He had died of cancer. George had {sat up with} him during the last night at the hospital. Both men knew that the end was {drawing near} but the older man {kept on} talking cheerfully.
"I am not unhappy," he told his son. "Sometimes life has been difficult, but I usually {faced up to} its problems. When I was a student, I {tried out for} the football team and I didn't meet with success. I {dropped out of} high school for a year after that. I {fell in with} some young men who were robbing people on the streets. We didn't use real guns. We {held} people {up} with wooden guns that looked real.
The police arrested five of us and made us {line up} at the station. They {called in} people who had been robbed and asked them to {pick out} the robber. The boy who had done most of the robbing was not there. He had {got away}.
"One of the people picked out another boy and me. But of course we didn't {let on} that we were guilty. I promised myself that if I {got out of} trouble, I'd {go back} to school and never steal again. I've never {gone back on} that promise.
"I {met with} a lawyer several times, and at the trial the judge {let} me {off} with a warning. Back in school, I worked very hard and graduated, and then I {looked for} a job. A couple of years later I met your mother and we really {fell for} each other. I was ready to {settle down} and we got married.
"Your mother always {stood by} me, even times were hard and food was scarce. When I needed help, she always gave it to me. She never {hung back} She was a wonderful woman, George. I {looked back on} our years of marriage with no regrets. Sara and I always {pulled together} like a team of - a team of good horses."
He was getting tired and was beginning to {drift off}, but he tried to keep talking. His son could hardly {hold back} the tears.
"She was a - was a wonderful - wonderful..." The old man's voice faded, and his breathing suddenly stopped. George {rang for} the nurse.`
	let answers = input.split(/{|}/).filter((_, i) => i % 2 === 1)
	let stored = localStorage.getItem("inputs0")?.split(",")
	if (stored && stored.length < answers.length)
		stored.push(...Array(answers.length - stored.length).fill(""))
	let inputs = stored ?? answers.map((_) => "")
	let live = !!localStorage.getItem("live")
	$: inputs, live, save()
	function clear() {
		localStorage.removeItem("inputs0")
		location.reload()
	}
	function check() {
		live = true
	}
	function show_answer() {
		inputs = answers
	}
	let autosave = ""
	let last_save = 0
	function save() {
		autosave = "saving"
		last_save = Date.now()
		setTimeout(() => {
			if (Date.now() - last_save >= 500) autosave = "saved!"
		}, 500)
		localStorage.setItem("inputs0", inputs.join())
		live ? localStorage.setItem("live", "true") : localStorage.removeItem("live")
	}
</script>

<svelte:head>
	<title>AN OLD MAN LOOKED BACK ON HIS LIFE</title>
</svelte:head>

<div class="absolute top-0 left-0 right-0 flex items-center flex-col px-4 py-1">
	<div class="text-black dark:text-white leading-loose w-full lg:w-[48rem]">
		<div class="text-center text-3xl font-bold">AN OLD MAN LOOKED BACK ON HIS LIFE</div>
		<div class="text-center grid grid-cols-2 sm:flex sm:flex-row gap-4 justify-center mt-2 mb-3">
			<a href="../" class="btn btn-primary btn-sm">Back</a>
			<div class="flex flex-row gap-2 items-center">
				<span>Live update</span>
				<input type="checkbox" class="checkbox checkbox-primary" bind:checked={live} />
			</div>
			<button class="btn btn-success btn-sm" on:click={check}>Check</button>
			<button class="btn btn-warning btn-sm" on:click={show_answer}>Show answers</button>
			<button class="btn btn-error btn-sm" on:click={clear}>Clear</button>
			<span class={autosave === "saved!" ? "text-green-500" : "text-yellow-500"}>
				{autosave}
			</span>
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
					size={answers[(i - 1) / 2].length}
					bind:value={inputs[(i - 1) / 2]}
				/>
			{/if}
		{/each}
	</div>
</div>
