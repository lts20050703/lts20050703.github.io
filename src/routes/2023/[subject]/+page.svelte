<script lang="ts">
	import v from "$lib/v"
	import { onMount } from "svelte"
	import { themeChange } from "theme-change"
	import type { PageData } from "./$types"
	export let data: PageData
	onMount(() => {
		themeChange(false)
	})
</script>

<svelte:head
	><title>
		LTS20050703 / 2023 {v} / {data.subject[0].toUpperCase() + data.subject.slice(1)}</title
	></svelte:head
>

<div
	class="mt-12 flex flex-col items-center gap-1 sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl"
>
	<div class="flex flex-row items-center gap-1">
		<img src="/android-chrome-512x512.png" class="h-16" alt="" />
		<div class="font-bold">LTS20050703</div>
	</div>

	<div class="mb-4 font-bold">
		2023 {v} / {data.subject[0].toUpperCase() + data.subject.slice(1)}
	</div>

	{#if data.subject === "sinh"}
		<div class="mx-4 mb-4 flex w-full justify-center">
			<img class="min-w-0 max-w-lg" src="/img/2023/sinh.jpg" alt="" />
		</div>
	{/if}
	<div class="flex w-full flex-col gap-4 sm:grid sm:grid-cols-2 lg:grid-cols-4">
		{#each data.titles as title}
			<a class="btn btn-primary" href="./{title.id}">{title.title}</a>
		{/each}
	</div>
</div>

<div class="fixed left-0 right-0 top-0 flex flex-row justify-center">
	<div class="m-1 rounded-md bg-base-100 p-1">
		Chủ đề: <select class="select select-primary select-sm" data-choose-theme>
			<option value="">Hệ thống</option>
			<option value="dark">Tối</option>
			<option value="light">Sáng</option>
		</select>
	</div>
</div>

<a href="../" class="btn btn-primary fixed left-0 top-0 m-4">Quay lại</a>
