<script lang="ts">
	import { onMount } from "svelte"
	import { themeChange } from "theme-change"
	onMount(() => {
		themeChange(false)
	})
</script>

<svelte:head>
	<title>LTS20050703 / Social Accounts</title>
</svelte:head>

<div
	class="my-4 flex flex-col items-center gap-1 sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl"
>
	<img src="/img/bg.jpg" class="h-32" alt="" />

	<div class="flex flex-row items-center gap-1">
		<img src="/android-chrome-512x512.png" class="h-16" alt="" />
		<div class="font-bold">LTS20050703</div>
	</div>

	<div class="mb-4 font-bold">Social Accounts</div>

	<a
		href="https://cohost.org/lts20050703"
		class="btn btn-primary flex flex-row items-center gap-1 lg:btn-lg sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl"
		><img src="/img/cohost.ico" alt="" class="h-8 lg:h-12" />
		<div class="flex-1">cohost! @lts20050703</div>
	</a>
	<a
		rel="me"
		href="https://mastodon.social/@lts20050703"
		class="btn btn-primary flex flex-row items-center gap-1 lg:btn-lg sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl"
		><img src="/img/mastodon.ico" alt="" class="h-8 lg:h-12" />
		<div class="flex-1">Mastodon @lts20050703@mastodon.social</div>
	</a>

	<a
		href="https://youtube.com/@lts0703"
		class="btn btn-primary flex flex-row items-center gap-1 lg:btn-lg sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl"
		><img src="/img/youtube.png" alt="" class="h-8 lg:h-12" />
		<div class="flex-1">YouTube @lts0703</div>
	</a>
	<a
		href="https://twitch.com/lts20050703"
		class="btn btn-primary flex flex-row items-center gap-1 lg:btn-lg sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl"
		><img src="/img/twitch.png" alt="" class="h-8 lg:h-12" />
		<div class="flex-1">Twitch @lts20050703</div>
	</a>

	<a
		href="https://codeberg.org/lts20050703"
		class="btn btn-primary flex flex-row items-center gap-1 lg:btn-lg sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl"
		><img src="/img/codeberg.svg" alt="" class="h-8 lg:h-12" />
		<div class="flex-1">CodeBerg @lts20050703</div>
	</a>

	<a
		href="https://github.com/lts20050703"
		class="btn btn-primary flex flex-row items-center gap-1 lg:btn-lg sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl"
		><img src="/img/github.ico" alt="" class="h-8 lg:h-12" />
		<div class="flex-1">GitHub @lts20050703</div></a
	>

	<a
		href="https://wakatime.com/@lts20050703"
		class="btn btn-primary flex flex-row items-center gap-1 lg:btn-lg sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl"
		><img src="/img/wakatime.png" alt="" class="h-8 lg:h-12" />
		<div class="flex-1">Wakatime @lts20050703</div>
	</a>

	<a
		href="https://stackoverflow.com/users/16118261/lts20050703"
		class="btn btn-primary flex flex-row items-center gap-1 lg:btn-lg sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl"
		><img src="/img/stackoverflow.ico" alt="" class="h-8 lg:h-12" />
		<div class="flex-1">Stack Overflow @lts20050703</div></a
	>

	<button
		class="btn btn-primary flex flex-row items-center gap-1 lg:btn-lg sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl"
		on:click={() => {
			navigator.clipboard.writeText("@lts20050703")
			alert("Copied discord username to clipboard!")
		}}
	>
		<img src="/img/discord.ico" alt="" class="h-8 lg:h-12" />
		<div class="flex-1">Discord @lts20050703 (Click to copy)</div></button
	>

	<a
		href="https://www.guilded.gg/u/lts20050703"
		class="btn btn-primary flex flex-row items-center gap-1 lg:btn-lg sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl"
		><img src="/img/guilded.png" alt="" class="h-8 lg:h-12" />
		<div class="flex-1">Guilded @lts20050703</div></a
	>

	<button
		class="btn btn-primary flex flex-row items-center gap-1 lg:btn-lg sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl"
		on:click={() => {
			navigator.clipboard.writeText("@lts20050703")
			alert("Copied revolt username to clipboard!")
		}}
		><img src="/img/revolt.ico" alt="" class="h-8 lg:h-12" />
		<div class="flex-1">Revolt @lts20050703 (Click to copy)</div></button
	>

	<button
		class="btn btn-primary flex flex-row items-center gap-1 lg:btn-lg sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl"
		on:click={() => {
			navigator.clipboard.writeText("@lts20050703:matrix.org")
			alert("Copied element username to clipboard!")
		}}
		><img src="/img/element.ico" alt="" class="h-8 lg:h-12" />
		<div class="flex-1">Element @lts20050703:matrix.org (Click to copy)</div></button
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
