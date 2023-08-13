<script>
	import v from "$lib/v"
	import { onMount } from "svelte"
	import { themeChange } from "theme-change"
	onMount(() => {
		themeChange(false)
	})
</script>

<svelte:head>
	<title>LTS20050703 / Openclozes {v}</title>
</svelte:head>

<div
	class="m-4 flex flex-col items-center gap-1 sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl"
>
	<img src="/img/bg.jpg" class="h-32" alt="" />

	<div class="flex flex-row items-center gap-1">
		<img src="/android-chrome-512x512.png" class="h-16" alt="" />
		<div class="font-bold">LTS20050703</div>
	</div>

	<div class="mb-4 font-bold">Openclozes {v}</div>

	<div class="flex flex-col gap-4 sm:grid sm:grid-cols-2 lg:flex lg:flex-row">
		<a href="./an-old-man-looked-back-on-his-life" class="btn btn-primary flex-1"
			>AN OLD MAN LOOKED BACK ON HIS LIFE</a
		>
		<a href="./getting-along-in-one's-school-work" class="btn btn-primary flex-1"
			>GETTING ALONG IN ONE'S SCHOOL WORK</a
		>
		<a href="./getting-up-with-the-jacksons" class="btn btn-primary flex-1"
			>GETTING UP WITH THE JACKSONS</a
		>
		<a href="./what-was-going-on-on-friday-morning" class="btn btn-primary flex-1"
			>WHAT WAS GOING ON ON FRIDAY MORNING?</a
		>
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
