<script lang="ts">
	import { onMount } from "svelte"
	import { themeChange } from "theme-change"
	onMount(() => {
		themeChange(false)
	})
</script>

<svelte:head>
	<title>LTS20050703 / Projects</title>
</svelte:head>

<div
	class="my-4 flex flex-col items-center gap-1 sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl"
>
	<img src="/img/bg.jpg" class="h-32" alt="" />

	<div class="flex flex-row items-center gap-1">
		<img src="/android-chrome-512x512.png" class="h-16" alt="" />
		<div class="font-bold">LTS20050703</div>
	</div>

	<div class="mb-4 font-bold">Projects</div>

	<a
		href="https://wist.lts20050703.repl.co"
		class="btn btn-primary flex flex-row items-center gap-1 lg:btn-lg sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl"
		><img src="/img/wist.png" class="h-8 lg:h-12" alt="" />
		<div class="flex-1">WIST</div>
	</a>

	<a
		href="/2023"
		class="btn btn-primary lg:btn-lg sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl"
		>2023</a
	>

	<a
		href="/openclozes"
		class="btn btn-primary lg:btn-lg sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl"
		>Openclozes</a
	>

	<a
		href="/library"
		class="btn btn-primary lg:btn-lg sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl"
		>Library</a
	>
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

<a href="../" class="btn btn-primary fixed left-0 top-0 m-4">Back</a>
