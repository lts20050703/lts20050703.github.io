<script lang="ts">
	import { onMount } from "svelte"
	import { themeChange } from "theme-change"
	onMount(() => {
		themeChange(false)
	})
</script>

<svelte:head>
	<title>LTS20050703</title>
</svelte:head>

<div
	class="mt-12 flex flex-col items-center gap-1 sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl"
>
	<div class="flex flex-row items-center gap-1">
		<img src="/android-chrome-512x512.png" class="h-16" alt="" />
		<div class="font-bold">LTS20050703</div>
	</div>

	<a class="link-hover link-primary link text-base" href="/deathlylonelinessattacks">Hyah</a>

	<a
		href="/projects"
		class="btn btn-primary lg:btn-lg sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl"
		>Projects</a
	>
	<a
		href="/gaming"
		class="btn btn-primary lg:btn-lg sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl"
		>Gaming™</a
	>
	<a
		href="/social"
		class="btn btn-primary lg:btn-lg sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl"
		>Social accounts</a
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

<a rel="me" href="https://mastodon.social/@lts20050703" class="hidden">Mastodon</a>
