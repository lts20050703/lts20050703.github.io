<script lang="ts">
	import v from "$lib/v"
	import { onMount } from "svelte"
	import { themeChange } from "theme-change"
	onMount(() => {
		themeChange(false)
	})

	function discord() {
		navigator.clipboard.writeText("@lts20050703")
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

<div class="fixed top-0 left-0 right-0 flex flex-row justify-center">
	<div class="m-1 p-1 rounded-md bg-base-100">
		Theme: <select class="select select-primary select-sm" data-choose-theme>
			<option value="">System</option>
			<option value="dark">Dark</option>
			<option value="light">Light</option>
		</select>
	</div>
</div>

<div
	class="flex flex-col items-center mt-4 gap-1 sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl"
>
	<img src="./img/bg.jpg" class="h-32" alt="" />

	<div class="flex flex-row items-center gap-1">
		<img src="./android-chrome-512x512.png" class="h-16" alt="" />
		<div class="font-bold">LTS20050703</div>
	</div>

	<div class="font-bold mb-4">Projects</div>

	<a
		target="_blank"
		rel="noopener noreferrer"
		href="https://codeberg.org/lts20050703/entropy-qualifier"
		class="flex flex-row items-center gap-1 btn lg:btn-lg btn-primary sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl"
	>
		<img src="./img/e5y.png" class="h-8 lg:h-12" alt="" />
		<div class="flex-1">WIP: Entropy Qualifier</div>
	</a>

	<a
		target="_blank"
		rel="noopener noreferrer"
		href="https://codeberg.org/lts20050703/entropy-final"
		class="flex flex-row items-center gap-1 btn lg:btn-lg btn-primary sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl"
	>
		<img src="./img/e5y.png" class="h-8 lg:h-12" alt="" />
		<div class="flex-1">Entropy Final</div>
	</a>

	<a
		target="_blank"
		rel="noopener noreferrer"
		href="https://wist.lts20050703.repl.co"
		class="flex flex-row items-center gap-1 btn lg:btn-lg btn-primary sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl"
		><img src="./img/wist.png" class="h-8 lg:h-12" alt="" />
		<div class="flex-1">WIST</div>
	</a>

	<a
		target="_blank"
		rel="noopener noreferrer"
		href="./2023"
		class="btn lg:btn-lg btn-primary sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl"
		>2023</a
	>

	<a
		target="_blank"
		rel="noopener noreferrer"
		href="./openclozes"
		class="btn lg:btn-lg btn-primary sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl"
		>Openclozes</a
	>

	<div class="font-bold my-4">Gaming™</div>

	<a
		target="_blank"
		rel="noopener noreferrer"
		href="https://ch.tetr.io/u/lts20050703"
		class="flex flex-row items-center gap-1 btn lg:btn-lg btn-primary sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl"
		><img src="./img/tetr.io.ico" alt="" class="h-8 lg:h-12" />
		<div class="flex-1">TETR.IO @LTS20050703</div>
	</a>

	<button
		class="flex flex-row items-center gap-1 btn lg:btn-lg btn-primary sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl"
		on:click={minecraft}
		><img src="./img/minecraft.webp" alt="" class="h-8 lg:h-12" />
		<div class="flex-1">Minecraft @lts20050703 (Click to copy)</div>
	</button>

	<a
		target="_blank"
		rel="noopener noreferrer"
		href="https://steamcommunity.com/id/lts20050703"
		class="flex flex-row items-center gap-1 btn lg:btn-lg btn-primary sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl"
		><img src="./img/steam.ico" alt="" class="h-8 lg:h-12" />
		<div class="flex-1">STEAM @LTS20050703</div>
	</a>
	<a
		target="_blank"
		rel="noopener noreferrer"
		href="https://lts20050703.itch.io"
		class="flex flex-row items-center gap-1 btn lg:btn-lg btn-primary sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl"
		><img src="./img/itch.io.ico" alt="" class="h-8 lg:h-12" />
		<div class="flex-1">Itch.io @lts20050703</div>
	</a>

	<a
		target="_blank"
		rel="noopener noreferrer"
		href="https://speedrun.com/user/lts20050703"
		class="flex flex-row items-center gap-1 btn lg:btn-lg btn-primary sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl"
		><img src="./img/speedrun.com.png" alt="" class="h-8 lg:h-12" />
		<div class="flex-1">SPEEDRUN.COM @lts20050703</div>
	</a>
	<a
		target="_blank"
		rel="noopener noreferrer"
		href="https://splits.io/users/lts20050703"
		class="flex flex-row items-center gap-1 btn lg:btn-lg btn-primary sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl"
		><img src="./img/splits.io.png" alt="" class="h-8 lg:h-12" />
		<div class="flex-1">Splits.io @lts20050703</div>
	</a>

	<div class="font-bold my-4">Social accounts</div>

	<a
		target="_blank"
		rel="noopener noreferrer"
		href="https://cohost.org/lts20050703"
		class="flex flex-row items-center gap-1 btn lg:btn-lg btn-primary sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl"
		><img src="./img/cohost.ico" alt="" class="h-8 lg:h-12" />
		<div class="flex-1">cohost! @lts20050703</div>
	</a>
	<a
		target="_blank"
		rel="noopener noreferrer me"
		href="https://mastodon.social/@lts20050703"
		class="flex flex-row items-center gap-1 btn lg:btn-lg btn-primary sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl"
		><img src="./img/mastodon.ico" alt="" class="h-8 lg:h-12" />
		<div class="flex-1">Mastodon @lts20050703@mastodon.social</div>
	</a>

	<a
		target="_blank"
		rel="noopener noreferrer"
		href="https://youtube.com/@lts0703"
		class="flex flex-row items-center gap-1 btn lg:btn-lg btn-primary sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl"
		><img src="./img/youtube.png" alt="" class="h-8 lg:h-12" />
		<div class="flex-1">YouTube @lts0703</div>
	</a>
	<a
		target="_blank"
		rel="noopener noreferrer"
		href="https://twitch.com/lts20050703"
		class="flex flex-row items-center gap-1 btn lg:btn-lg btn-primary sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl"
		><img src="./img/twitch.png" alt="" class="h-8 lg:h-12" />
		<div class="flex-1">Twitch @lts20050703</div>
	</a>

	<a
		target="_blank"
		rel="noopener noreferrer"
		href="https://codeberg.org/lts20050703"
		class="flex flex-row items-center gap-1 btn lg:btn-lg btn-primary sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl"
		><img src="./img/codeberg.svg" alt="" class="h-8 lg:h-12" />
		<div class="flex-1">CodeBerg @lts20050703</div>
	</a>

	<a
		target="_blank"
		rel="noopener noreferrer"
		href="https://github.com/lts20050703"
		class="flex flex-row items-center gap-1 btn lg:btn-lg btn-primary sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl"
		><img src="./img/github.ico" alt="" class="h-8 lg:h-12" />
		<div class="flex-1">GitHub @lts20050703</div></a
	>

	<a
		target="_blank"
		rel="noopener noreferrer"
		href="https://wakatime.com/@lts20050703"
		class="flex flex-row items-center gap-1 btn lg:btn-lg btn-primary sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl"
		><img src="./img/wakatime.png" alt="" class="h-8 lg:h-12" />
		<div class="flex-1">Wakatime @lts20050703</div>
	</a>

	<button
		class="flex flex-row items-center gap-1 btn lg:btn-lg btn-primary sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl"
		on:click={discord}
	>
		<img src="./img/discord.ico" alt="" class="h-8 lg:h-12" />
		<div class="flex-1">Discord @lts20050703 (Click to copy)</div></button
	>

	<a
		href="https://www.guilded.gg/u/lts20050703"
		class="flex flex-row items-center gap-1 btn lg:btn-lg btn-primary sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl"
		><img src="./img/guilded.png" alt="" class="h-8 lg:h-12" />
		<div class="flex-1">Guilded @lts20050703</div></a
	>

	<button
		class="flex flex-row items-center gap-1 btn lg:btn-lg btn-primary sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl"
		on:click={revolt}
		><img src="./img/revolt.ico" alt="" class="h-8 lg:h-12" />
		<div class="flex-1">Revolt @lts20050703 (Click to copy)</div></button
	>

	<button
		class="flex flex-row items-center gap-1 btn lg:btn-lg btn-primary sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl"
		on:click={element}
		><img src="./img/element.ico" alt="" class="h-8 lg:h-12" />
		<div class="flex-1">Element @lts20050703:matrix.org (Click to copy)</div></button
	>
</div>
