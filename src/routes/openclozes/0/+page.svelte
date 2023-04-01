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
	let override = !!localStorage.getItem("override")
	$: inputs, live, override, save()
	function clear() {
		localStorage.removeItem("inputs0")
		location.reload()
	}
	function check() {
		live = !live
	}
	let show_answer_pls = false
	function show_answer() {
		show_answer_pls = !show_answer_pls
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
		override ? localStorage.setItem("override", "true") : localStorage.removeItem("override")
	}
	function toggle() {
		override = !override
	}
</script>

<svelte:head>
	<title>AN OLD MAN LOOKED BACK ON HIS LIFE</title>
</svelte:head>

<div class="absolute top-0 left-0 right-0 flex items-center flex-col px-4 pt-1 pb-10">
	<div class="text-black dark:text-white leading-[2.5rem] w-full lg:w-[48rem]">
		<div class="text-center text-3xl font-bold {override ? '' : 'mt-11 sm:mt-0'}">
			AN OLD MAN LOOKED BACK ON HIS LIFE
		</div>
		<div class="{override ? 'hidden' : 'flex sm:hidden'} flex-row justify-center gap-4 m-2">
			<a href="../" class="btn btn-primary btn-sm"
				><svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="w-6 h-6"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3"
					/>
				</svg>
			</a>
			<div
				class="flex flex-row gap-2 items-center fixed top-0 right-0 m-1 px-3 rounded-md bg-white dark:bg-[#2a303c]"
			>
				<span>Live update</span>
				<input type="checkbox" class="checkbox checkbox-primary" bind:checked={live} />
			</div>
			<button class="btn btn-success btn-sm" on:click={check}
				><svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="w-6 h-6"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
					/>
				</svg>
			</button>
			{#if show_answer_pls}
				<button class="btn btn-warning btn-sm" on:click={show_answer}
					><svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						class="w-6 h-6"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
						/>
					</svg>
				</button>
			{:else}
				<button class="btn btn-warning btn-sm" on:click={show_answer}
					><svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						class="w-6 h-6"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
						/>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
						/>
					</svg>
				</button>
			{/if}
			<button class="btn btn-error btn-sm" on:click={clear}
				><svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="w-6 h-6"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
					/>
				</svg>
			</button>
			<span
				class="fixed top-0 left-0 bg-white dark:bg-[#2a303c] m-1 px-3 rounded-md {autosave ===
				'saved!'
					? 'text-green-500'
					: 'text-yellow-500'}"
			>
				{autosave}
			</span>
			<button class="btn btn-secondary btn-sm" on:click={toggle}
				><svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="w-6 h-6"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25"
					/>
				</svg>
			</button>
		</div>
		<div
			class="{override
				? 'flex'
				: 'hidden'} text-center grid grid-cols-2 sm:flex sm:flex-row gap-4 justify-center mt-2 items-center"
		>
			<a href="../" class="btn btn-primary btn-sm">Back</a>
			<div class="flex flex-row gap-2 items-center">
				<span>Live update</span>
				<input type="checkbox" class="checkbox checkbox-primary" bind:checked={live} />
			</div>
			<button class="btn btn-success btn-sm" on:click={check}>Check</button>
			{#if show_answer_pls}
				<button class="btn btn-warning btn-sm" on:click={show_answer}>Hide answers</button>
			{:else}
				<button class="btn btn-warning btn-sm" on:click={show_answer}>Show answers</button>
			{/if}
			<button class="btn btn-error btn-sm" on:click={clear}>Clear</button>
			<span class={autosave === "saved!" ? "text-green-500" : "text-yellow-500"}>
				{autosave}
			</span>
			<button on:click={toggle} class="block sm:hidden btn btn-secondary btn-sm">Mobile view</button
			>
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
			{:else if show_answer_pls}
				<input
					type="text"
					class="input h-7 mx-1 p-1"
					size={answers[(i - 1) / 2].length}
					value={answers[(i - 1) / 2]}
					disabled
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
