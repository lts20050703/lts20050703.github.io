<script lang="ts">
	import v from "$lib/v"
	import { onMount } from "svelte"
	import { themeChange } from "theme-change"
	onMount(() => {
		themeChange(false)
	})

	function discord() {
		navigator.clipboard.writeText("@lts20050703#2195")
		alert("Copied discord username to clipboard!")
	}

	function element() {
		navigator.clipboard.writeText("@lts20050703:matrix.org")
		alert("Copied element username to clipboard!")
	}

	function revolt() {
		navigator.clipboard.writeText("@lts20050703")
		alert("Copied revolt username to clipboard!")
	}

	function minecraft() {
		navigator.clipboard.writeText("@lts20050703")
		alert("Copied minecraft username to clipboard!")
	}
</script>

<svelte:head>
	<title>LTS20050703 {v}</title>
</svelte:head>

<div class="flex flex-col items-center mt-4 gap-1 text-xl">
	<img src="./bg.jpg" class="h-32" alt="" />

	<div class="flex flex-row items-center gap-1">
		<img src="./favicon.png" class="h-16" alt="" />
		<div class="font-bold">LTS20050703</div>
	</div>

	<div class="font-bold">Projects</div>

	<a
		target="_blank"
		rel="noopener noreferrer"
		href="https://codeberg.org/lts20050703/e5y"
		class="flex flex-row items-center gap-1 btn btn-primary text-lg"
	>
		<img src="./e5y.png" class="h-8" alt="" />
		<div class="flex items-center">Entropy</div></a
	>

	<a
		target="_blank"
		rel="noopener noreferrer"
		href="https://wist.lts20050703.repl.co"
		class="flex flex-row items-center gap-1 btn btn-primary text-lg"
		><img src="./wist.png" class="h-8" alt="" />
		<div class="flex items-center">WIST</div>
	</a>

	<a target="_blank" rel="noopener noreferrer" href="./2023" class="btn btn-primary text-lg">2023</a
	>

	<a target="_blank" rel="noopener noreferrer" href="./openclozes" class="btn btn-primary text-lg"
		>Openclozes</a
	>

	<div class="font-bold">Gaming™</div>

	<a
		target="_blank"
		rel="noopener noreferrer"
		href="https://ch.tetr.io/u/lts20050703"
		class="flex flex-row items-center gap-1 btn btn-primary text-lg"
		><img src="./tetr.io.ico" alt="" class="h-8" />TETR.IO @LTS20050703</a
	>

	<button class="flex flex-row items-center gap-1 btn btn-primary text-lg" on:click={minecraft}
		><img src="./minecraft.webp" alt="" class="h-8" />Minecraft @lts20050703 (Click to copy)</button
	>

	<a
		target="_blank"
		rel="noopener noreferrer"
		href="https://steamcommunity.com/id/lts20050703"
		class="flex flex-row items-center gap-1 btn btn-primary text-lg"
		><img src="./steam.ico" alt="" class="h-8" />STEAM @LTS20050703</a
	>
	<a
		target="_blank"
		rel="noopener noreferrer"
		href="https://lts20050703.itch.io"
		class="flex flex-row items-center gap-1 btn btn-primary text-lg"
		><img src="./itch.io.ico" alt="" class="h-8" />Itch.io @lts20050703</a
	>

	<a
		target="_blank"
		rel="noopener noreferrer"
		href="https://speedrun.com/user/lts20050703"
		class="flex flex-row items-center gap-1 btn btn-primary text-lg"
		><img src="./speedrun.com.png" alt="" class="h-8" />SPEEDRUN.COM @lts20050703</a
	>
	<a
		target="_blank"
		rel="noopener noreferrer"
		href="https://splits.io/users/lts20050703"
		class="flex flex-row items-center gap-1 btn btn-primary text-lg"
		><img src="./splits.io.png" alt="" class="h-8" />Splits.io @lts20050703</a
	>

	<div class="font-bold">Social accounts</div>

	<a
		target="_blank"
		rel="noopener noreferrer"
		href="https://cohost.org/lts20050703"
		class="flex flex-row items-center gap-1 btn btn-primary text-lg"
		><img src="./cohost.ico" alt="" class="h-8" />cohost! @lts20050703</a
	>
	<a
		target="_blank"
		rel="noopener noreferrer me"
		href="https://mastodon.social/@lts20050703"
		class="flex flex-row items-center gap-1 btn btn-primary text-lg"
		><img src="./mastodon.ico" alt="" class="h-8" />Mastodon @lts20050703@mastodon.social</a
	>

	<a
		target="_blank"
		rel="noopener noreferrer"
		href="https://youtube.com/@lts0703"
		class="flex flex-row items-center gap-1 btn btn-primary text-lg"
		><img src="./youtube.png" alt="" class="h-8" />YouTube @lts0703</a
	>
	<a
		target="_blank"
		rel="noopener noreferrer"
		href="https://twitch.com/lts20050703"
		class="flex flex-row items-center gap-1 btn btn-primary text-lg"
		><img src="./twitch.png" alt="" class="h-8" />Twitch @lts20050703</a
	>

	<a
		target="_blank"
		rel="noopener noreferrer"
		href="https://codeberg.org/lts20050703"
		class="flex flex-row items-center gap-1 btn btn-primary text-lg"
		><img src="./codeberg.svg" alt="" class="h-8" />CodeBerg @lts20050703</a
	>

	<a
		target="_blank"
		rel="noopener noreferrer"
		href="https://github.com/lts20050703"
		class="flex flex-row items-center gap-1 btn btn-primary text-lg"
		><img src="./github.ico" alt="" class="h-8" />GitHub @lts20050703</a
	>

	<a
		target="_blank"
		rel="noopener noreferrer"
		href="https://wakatime.com/@lts20050703"
		class="flex flex-row items-center gap-1 btn btn-primary text-lg"
		><img src="./wakatime.png" alt="" class="h-8" />Wakatime @lts20050703</a
	>

	<button class="flex flex-row items-center gap-1 btn btn-primary text-lg" on:click={discord}>
		<img src="./discord.ico" alt="" class="h-8" />
		Discord @lts20050703#2195 (Click to copy)</button
	>

	<a
		href="https://www.guilded.gg/u/lts20050703"
		class="flex flex-row items-center gap-1 btn btn-primary text-lg"
		><img src="./guilded.png" alt="" class="h-8" />Guilded @lts20050703</a
	>

	<button class="flex flex-row items-center gap-1 btn btn-primary text-lg" on:click={revolt}
		><img src="./revolt.ico" alt="" class="h-8" />Revolt @lts20050703 (Click to copy)</button
	>

	<button class="flex flex-row items-center gap-1 btn btn-primary text-lg" on:click={element}
		><img src="./element.ico" alt="" class="h-8" />Element @lts20050703:matrix.org (Click to copy)</button
	>
</div>

<div class="fixed top-0 left-0 right-0 flex flex-row justify-center">
	<div class="m-1 p-1 rounded-md bg-base-100">
		Theme: <select class="select select-primary select-sm" data-choose-theme>
			<option value="">System</option>
			<option value="dark">Dark</option>
			<option value="light">Light</option>
		</select>
	</div>
</div>
