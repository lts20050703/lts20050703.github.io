<script lang="ts">
	import type { PageData } from "./$types"
	import v from "$lib/v"
	export let data: PageData
</script>

<svelte:head><title>In Real Xperience / 2023 {v}</title></svelte:head>

<div class="absolute top-0 left-0 right-0 flex items-center flex-col p-4">
	<div class=" leading-loose w-full">
		<div class="text-center mb-5 mt-16">In Real Xperience / 2023 {v}</div>
		<div class="flex flex-col sm:grid sm:grid-cols-2 lg:flex lg:flex-row gap-4">
			{#each data.subjects as subject}
				<a href="./{subject}" class="btn btn-primary flex-1">{subject.toUpperCase()}</a>
			{/each}
		</div>
	</div>
</div>

<a href="../" class="absolute btn btn-primary m-4">Quay lại</a>
