<script lang="ts">
	import v from "$lib/v"
	import { onMount } from "svelte"
	import { themeChange } from "theme-change"
	import type { PageData } from "./$types"
	export let data: PageData
	onMount(() => themeChange(false))
</script>

<svelte:head>
	<title>LTS20050703 / 2023 {v}</title>
</svelte:head>

<div
	class="m-4 flex flex-col items-center gap-1 sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl"
>
	<img src="/img/bg.jpg" class="h-32" alt="" />

	<div class="flex flex-row items-center gap-1">
		<img src="/android-chrome-512x512.png" class="h-16" alt="" />
		<div class="font-bold">LTS20050703</div>
	</div>

	<div class="mb-4 font-bold">2023 {v}</div>

	<div class="flex w-full flex-col gap-4 sm:grid sm:grid-cols-2 lg:grid lg:grid-cols-4">
		{#each data.subjects as subject}
			<a href="./{subject}" class="btn btn-primary flex-1">{subject.toUpperCase()}</a>
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

<a href="/projects" class="btn btn-primary fixed left-0 top-0 m-4">Quay lại</a>
