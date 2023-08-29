<script lang="ts">
	import { onMount } from "svelte"
	import { themeChange } from "theme-change"
	onMount(() => {
		themeChange(false)
	})
</script>

<svelte:head>
	<title>LTS20050703 / Gaming™</title>
</svelte:head>

<div
	class="my-4 flex flex-col items-center gap-1 sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl"
>
	<img src="/img/bg.jpg" class="h-32" alt="" />

	<div class="flex flex-row items-center gap-1">
		<img src="/android-chrome-512x512.png" class="h-16" alt="" />
		<div class="font-bold">LTS20050703</div>
	</div>

	<div class="mb-4 font-bold">Gaming™</div>

	<a
		href="https://ch.tetr.io/u/lts20050703"
		class="btn btn-primary flex flex-row items-center gap-1 lg:btn-lg sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl"
		><img src="/img/tetr.io.ico" alt="" class="h-8 lg:h-12" />
		<div class="flex-1">TETR.IO @LTS20050703</div>
	</a>

	<button
		class="btn btn-primary flex flex-row items-center gap-1 lg:btn-lg sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl"
		on:click={() => {
			navigator.clipboard.writeText("@lts20050703")
			alert("Copied minecraft username to clipboard!")
		}}
		><img src="/img/minecraft.webp" alt="" class="h-8 lg:h-12" />
		<div class="flex-1">Minecraft @lts20050703 (Click to copy)</div>
	</button>

	<a
		href="https://steamcommunity.com/id/lts20050703"
		class="btn btn-primary flex flex-row items-center gap-1 lg:btn-lg sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl"
		><img src="/img/steam.ico" alt="" class="h-8 lg:h-12" />
		<div class="flex-1">STEAM @LTS20050703</div>
	</a>
	<a
		href="https://lts20050703.itch.io"
		class="btn btn-primary flex flex-row items-center gap-1 lg:btn-lg sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl"
		><img src="/img/itch.io.ico" alt="" class="h-8 lg:h-12" />
		<div class="flex-1">Itch.io @lts20050703</div>
	</a>

	<a
		href="https://speedrun.com/user/lts20050703"
		class="btn btn-primary flex flex-row items-center gap-1 lg:btn-lg sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl"
		><img src="/img/speedrun.com.png" alt="" class="h-8 lg:h-12" />
		<div class="flex-1">SPEEDRUN.COM @lts20050703</div>
	</a>
	<a
		href="https://splits.io/users/lts20050703"
		class="btn btn-primary flex flex-row items-center gap-1 lg:btn-lg sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl"
		><img src="/img/splits.io.png" alt="" class="h-8 lg:h-12" />
		<div class="flex-1">Splits.io @lts20050703</div>
	</a>
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
