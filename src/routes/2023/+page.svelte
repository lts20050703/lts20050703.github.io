<script lang="ts">
	import v from "$lib/v"
	import { onMount } from "svelte"
	import { themeChange } from "theme-change"
	import type { PageData } from "./$types"
	export let data: PageData
	onMount(() => themeChange(false))
</script>

<svelte:head><title>In Real Xperience / 2023 {v}</title></svelte:head>

<div class="absolute top-0 left-0 right-0 flex flex-col p-4">
	<a href="../" class="absolute btn btn-primary">Quay lại</a>
	<div class="w-full">
		<div class="text-center mb-5 mt-16">In Real Xperience / 2023 {v}</div>
		<div class="flex flex-col sm:grid sm:grid-cols-2 lg:grid lg:grid-cols-4 gap-4">
			{#each data.subjects as subject}
				<a href="./{subject}" class="btn btn-primary flex-1">{subject.toUpperCase()}</a>
			{/each}
		</div>
	</div>
</div>
