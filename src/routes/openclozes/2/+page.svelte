<script lang="ts">
	const input = `The alarm clock in Mr. and Mrs. Jackson {went off} at 6:30 AM. Sleepily, Mr. Jackson reached toward it to {turn} it {off}. He {gave up} trying to reach it and let it {run down}. Mrs. Jackson was awake. She {turned on} the light beside the bed and shook her husband. It's time to {get up}, George," she told him. "Aw-don't" he muttered. But she {kept on} shaking him until he was awake. He {sat up}, but he kept his eyes closed. Finally, he {stood up}. Mr. Jackson put on a bathrobe. He {went in} to take a shower and went downstairs to help Mrs. Jackson set the table. In the kitchen, Mrs. Jackson {plugged in} the coffee maker. She also wanted to boil eggs, but remembered that they had {used up} the eggs the day before. She put bread into the toaster and waited for it to {pop up}. Mr. Jackson put cereal, milk and juice on the table. Then Mrs. Jackson {let out} the cat. She called the sixteen year-old twins. "Breakfast!" she shouted. "Jim! Jane!" In a few minutes four were at the table. "What on the world do you {have on}?" Jim asked Jane. "I forgot to {wash out} my clothes last night, so this morning I {hunted up} these things to wear." "I thought you had {given away} those old things," Jim told her. "They look shabby." "{get off} my back!" she said angrily. "Children," Mrs. Jackson begged, "please don't {get into} a fight. I'm {running out of} patience with both of you. I don't {feel like} listening to another argument. Tom didn't often argue before he left for college. Jane, you should {put} your clothes {away}. Then you should find something better to wear. I've told both of you again and again, to {hang up} your clothes." George Jackson was reading a newspaper. He laughed softly. If you {come across} something funny or even interesting, you might {let} us {in on} it," his wife said. "I'm just {looking at} the sports pages, Edna," he told her. "You usually don't {care for} professional sports." She went to {see about} the cat and {let} it {in}. The twins {picked up} their schoolbooks and went to school. George {put on} his coat. As he was {set out} for work, he said to his wife, "Have a good day, Edna."`
	let answers = input.split(/{|}/).filter((_, i) => i % 2 === 1)
	let stored = localStorage.getItem("inouts2")?.split(",")
	if (stored && stored.length < answers.length)
		stored.push(...Array(answers.length - stored.length).fill(""))
	let inputs = stored ?? answers.map((_) => "")
	let live = !!localStorage.getItem("live")
	$: inputs, live, save()
	function clear() {
		localStorage.removeItem("inouts2")
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
		localStorage.setItem("inouts2", inputs.join())
		live ? localStorage.setItem("live", "true") : localStorage.removeItem("live")
	}
</script>

<svelte:head>
	<title>GETTING UP WITH THE JACKSONS</title>
</svelte:head>

<div class="absolute top-0 left-0 right-0 flex items-center flex-col px-4 pt-1 pb-10">
	<div class="text-black dark:text-white leading-[2.5rem] w-full lg:w-[48rem]">
		<div class="text-center text-3xl font-bold mt-11">GETTING UP WITH THE JACKSONS</div>
		<div class="fixed top-0 left-0 right-0 flex justify-center">
			<div class="m-1 px-3 rounded-md bg-white dark:bg-base-100">
				<div class="flex sm:hidden flex-row justify-center gap-4 m-1">
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
						class="flex flex-row gap-2 items-center fixed bottom-0 right-0 m-1 px-3 rounded-md bg-white dark:bg-base-100"
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
						class="fixed bottom-0 left-0 bg-white dark:bg-base-100 m-1 px-3 rounded-md {autosave ===
						'saved!'
							? 'text-green-500'
							: 'text-yellow-500'}"
					>
						{autosave}
					</span>
				</div>
				<div class="hidden text-center sm:flex sm:flex-row gap-4 justify-center m-1 items-center">
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
				</div>
			</div>
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
