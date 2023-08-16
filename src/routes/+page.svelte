<script lang="ts">
	import { onMount } from "svelte"
	import { themeChange } from "theme-change"
	onMount(() => {
		themeChange(false)
	})
</script>

<svelte:head>
	<title>LTS20050703</title>
</svelte:head>

<div
	class="my-4 flex flex-col items-center gap-1 sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl"
>
	<img src="/img/bg.jpg" class="h-32" alt="" />

	<div class="flex flex-row items-center gap-1">
		<img src="/android-chrome-512x512.png" class="h-16" alt="" />
		<div class="font-bold">LTS20050703</div>
	</div>

	<div class="tweet-embed">
		<div class="timeline-item">
			<div class="tweet-body">
				<div>
					<div class="tweet-header">
						<a class="tweet-avatar link-hover" href="https://nitter.net/fireship_dev"
							><img
								class="round avatar"
								src="https://nitter.net/pic/profile_images%2F1436819851566219267%2FHEffZjvP_bigger.jpg"
								alt=""
							/></a
						>
						<div class="tweet-name-row">
							<div class="fullname-and-username">
								<a
									class="fullname link-hover"
									href="https://nitter.net/fireship_dev"
									title="Fireship"
									>Fireship
								</a>
								<a
									class="username link-hover"
									href="https://nitter.net/fireship_dev"
									title="@fireship_dev">@fireship_dev</a
								>
							</div>
							<span class="tweet-date link-hover"
								><a
									href="https://nitter.net/fireship_dev/status/1567936669529305088"
									title="Sep 8, 2022 · 6:03 PM UTC">8 Sep 2022</a
								></span
							>
						</div>
					</div>
				</div>
				<pre class="tweet-content media-body" dir="auto">Be careful using any of these tools:

- TypeScript 
- Tailwind 
- Svelte 

They make it really hard to go back to whatever thing you were using before.</pre>
				<p class="tweet-published text-gray-500">Sep 8, 2022 · 6:03 PM UTC</p>
			</div>
		</div>
	</div>

	<a
		href="/projects"
		class="btn btn-primary lg:btn-lg sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl"
		>Projects</a
	>
	<a
		href="/gaming"
		class="btn btn-primary lg:btn-lg sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl"
		>Gaming™</a
	>
	<a
		href="/social"
		class="btn btn-primary lg:btn-lg sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl"
		>Social accounts</a
	>
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

<style>
	.media-body {
		flex: 1;
		padding: 0;
		white-space: pre-wrap;
	}

	.tweet-body {
		flex: 1;
		min-width: 0;
		margin-left: 58px;
		pointer-events: none;
	}

	.tweet-content {
		font-family: sans-serif;
		line-height: 1.3em;
		pointer-events: all;
		display: inline;
	}

	.tweet-header {
		padding: 0;
		vertical-align: bottom;
		flex-basis: 100%;
		margin-bottom: 0.2em;
	}
	.tweet-header a {
		display: inline-block;
		word-break: break-all;
		max-width: 100%;
		pointer-events: all;
	}

	.tweet-name-row {
		padding: 0;
		display: flex;
		justify-content: space-between;
	}

	.fullname-and-username {
		display: flex;
		min-width: 0;
	}

	.fullname {
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		flex-shrink: 2;
		max-width: 80%;
		font-size: 14px;
		font-weight: 700;
	}

	.username {
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		min-width: 1.6em;
		margin-left: 0.4em;
		word-wrap: normal;

		font-size: 14px;
	}

	.tweet-date {
		display: flex;
		flex-shrink: 0;
		margin-left: 4px;

		font-size: 14px;
	}

	.tweet-published {
		margin: 0;
		margin-top: 5px;
		pointer-events: all;

		font-size: 14px;
	}

	.tweet-avatar {
		display: contents;
	}
	.tweet-avatar img {
		float: left;
		margin-top: 3px;
		margin-left: -58px;
		width: 48px;
		height: 48px;
	}

	.avatar.round {
		border-radius: 50%;
		user-select: none;
	}

	.tweet-embed {
		display: flex;
		flex-direction: column;
		justify-content: center;
		height: 100%;
	}
	.tweet-embed .tweet-content {
		font-size: 18px;
	}
	.tweet-embed .tweet-body {
		display: flex;
		flex-direction: column;
		max-height: calc(100vh - 0.75em * 2);
	}
	.tweet-embed .card-image img {
		height: auto;
	}
	.tweet-embed .avatar {
		position: absolute;
	}

	.timeline-item {
		overflow-wrap: break-word;
		border-left-width: 0;
		min-width: 0;
		padding: 0.75em;
		display: flex;
		position: relative;
	}
</style>
