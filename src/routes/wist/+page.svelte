<script>
	import version from "$lib/version"
</script>

<svelte:head>
	<title>LTS20050703 > WIST</title>
</svelte:head>

<div class="flex flex-col items-center justify-center">
	<div
		class="breadcrumbs text-sm flex-1 gap-2 max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl"
	>
		<ul>
			<li><a href="../" class="btn btn-link btn-sm text-sm">LTS20050703</a></li>
			<li>WIST VERSION {version}</li>
		</ul>
	</div>
	<a href="./singleplayer/" class="btn btn-link btn-lg text-3xl flex-1 gap-2">Singleplayer</a>
	<a href="./options/" class="btn btn-link btn-lg text-3xl flex-1 gap-2	">Options</a>
</div>
