<script lang="ts">
	import v from "$lib/v"
</script>

<svelte:head>
	<title>LTS20050703 {v}</title>
</svelte:head>

<div class="flex flex-col items-center justify-center">
	<div class="text-3xl flex-1 gap-2 flex flex-row pt-3 text-black dark:text-white">
		<img src="./favicon.png" alt="" class="h-12" />LTS20050703 {v}
	</div>
	<a href="https://cohost.org/lts20050703" class="btn btn-link btn-lg gap-2 text-3xl flex-1"
		><img src="./cohost.ico" alt="" class="h-12" />cohost!</a
	>
	<a
		rel="me"
		href="https://mastodon.social/@lts20050703"
		class="btn btn-link btn-lg gap-2 text-3xl flex-1"
		><img src="./mastodon.ico" alt="" class="h-12" />Mastodon</a
	>
	<div class="gap-2 text-3xl flex-1 flex flex-row pt-10 text-white">
		<img src="./irx.png" alt="" class="h-12" />In Real Xperience
	</div>
	<a href="https://wist.lts20050703.repl.co" class="btn btn-link btn-lg gap-2 text-3xl flex-1"
		><img src="./wist.png" alt="" class="h-12" />WIST</a
	>
	<a href="https://codeberg.org/lts20050703/e5y" class="btn btn-link btn-lg gap-2 text-3xl flex-1"
		><img src="./e5y.png" alt="" class="h-12" />Entropy</a
	>
</div>
