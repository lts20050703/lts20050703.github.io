<script lang="ts">
	import v from "$lib/v"
	export let data: PageData
	import type { PageData } from "./$types"

	import { onMount } from "svelte"
	import { themeChange } from "theme-change"
	onMount(() => {
		themeChange(false)
	})
</script>

<svelte:head
	><title>
		In Real Xperience / 2023 {v} / {data.subject[0].toUpperCase() + data.subject.slice(1)}</title
	></svelte:head
>

<div class="absolute top-0 left-0 right-0 flex items-center flex-col p-4">
	<div class=" leading-loose w-full">
		<div class="text-center mb-5 mt-16">
			In Real Xperience / 2023 {v} / {data.subject[0].toUpperCase() + data.subject.slice(1)}
		</div>
		{#if data.subject === "sinh"}
			<div class="flex justify-center mb-4">
				<img class="max-w-lg min-w-0" src="/2023/sinh.jpg" alt="" />
			</div>
		{/if}
		<div class="flex flex-col sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
			{#each data.titles as title}
				<a class="btn btn-primary" href="./{title.id}">{title.title}</a>
			{/each}
		</div>
	</div>
</div>

<a href="../" class="absolute btn btn-primary m-4">Quay lại</a>
