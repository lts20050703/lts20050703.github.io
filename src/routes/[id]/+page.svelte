<script lang="ts">
	import { onMount } from "svelte"
	import { themeChange } from "theme-change"
	import type { PageData } from "./$types"
	export let data: PageData

	let name: Record<string, string> = {
		social: "Social Accounts",
		gaming: "Gaming™",
		projects: "Projects"
	}

	let back: Record<string, string> = {
		"/social": "Social Accounts",
		"/gaming": "Gaming™",
		"/projects": "Projects"
	}

	onMount(() => {
		themeChange(false)
	})
</script>

<svelte:head>
	<title
		>LTS20050703 / {data.back
			? `${back[data.back]} / ${data.id[0].toUpperCase() + data.id.slice(1)}`
			: name[data.id]}</title
	>
	{#if data.href}
		<meta http-equiv="refresh" content="0;url='{data.href}'" />
	{/if}
</svelte:head>

{#if data.links}
	<div
		class="mt-12 flex flex-col items-center gap-1 sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl"
	>
		<div class="flex flex-row items-center gap-1">
			<img src="/android-chrome-512x512.png" class="h-16" alt="" />
			<div class="font-bold">LTS20050703</div>
		</div>

		<div class="mb-4 font-bold">{name[data.id]}</div>

		{#each data.links as link}
			<a
				href={link.href}
				class="btn btn-primary flex flex-row items-center gap-1 lg:btn-lg sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl"
			>
				{#if link.img}<img src={link.img} class="h-8 lg:h-12" alt="" />{/if}
				<div class="flex-1">{link.name}{link.username ? ` ${link.username}` : ""}</div>
			</a>
		{/each}
	</div>
{:else if data.href}
	<div class="flex h-screen w-screen items-center justify-center">
		<a
			class="link-hover link-primary link sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl"
			href={data.href}>{data.href}</a
		>
	</div>
{:else if data.username && data.img}
	<div class="flex h-screen w-screen items-center justify-center">
		<button
			class="btn btn-primary flex flex-row items-center gap-1 lg:btn-lg sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl"
			on:click={() => {
				navigator.clipboard.writeText(data.username ?? "")
				alert(`Copied ${data.id} username to clipboard!`)
			}}
			><img src={data.img} alt="" class="h-8 lg:h-12" />
			<div class="flex-1">{data.id} {data.username} (Click to copy)</div>
		</button>
	</div>
{/if}

<div class="fixed left-0 right-0 top-0 flex flex-row justify-center">
	<div class="m-1 rounded-md bg-base-100 p-1">
		Theme: <select class="select select-primary select-sm" data-choose-theme>
			<option value="">System</option>
			<option value="dark">Dark</option>
			<option value="light">Light</option>
		</select>
	</div>
</div>

<a href={data.back ?? "/"} class="btn btn-primary fixed left-0 top-0 m-4">Back</a>
