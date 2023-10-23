<script lang="ts">
	import type { PageData } from "./$types"
	export let data: PageData
</script>

<svelte:head>
	<meta
		http-equiv="refresh"
		content="0;url='https://lts20050703.srht.site/{data[0]}/{data[1]}/{data[2]}'"
	/>
</svelte:head>
