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

<div class="absolute top-0 left-0 right-0 flex items-center flex-col p-4">
	<div class=" leading-loose w-full">
		<div class="text-center mt-16 mb-5">LTS20050703 / Openclozes {v}</div>
		<div class="flex flex-col sm:grid sm:grid-cols-2 lg:flex lg:flex-row gap-4">
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
</div>

<a href="../" class="absolute btn btn-primary m-4">Back</a>
