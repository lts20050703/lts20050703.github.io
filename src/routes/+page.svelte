<script lang="ts">
	const version = '2022.11.18.0';
	console.log(`LTS20050703 | Work In Progress | VERSION ${version}`);
</script>

<svelte:head>
	<title>LTS20050703 | Work In Progress | VERSION {version}</title>
</svelte:head>

<div>
	<span>LTS20050703 | Work In Progress | VERSION {version}</span>
	<a id="assc" href="https://antisoftware.club/"
		><img src="./assc.png" alt="Anti Software Software Club Icon" />Anti Software Software Club</a
	>
	<a id="cohost" href="https://cohost.org/lts20050703"
		><img src="./cohost.ico" alt="Cohost Icon" />Cohost</a
	>
	<a id="mastodon" href="https://mastodon.social/@lts20050703"
		><img src="./mastodon.ico" alt="Mastodon Icon" />Mastodon</a
	>
	<a id="sfc" href="https://sfconservancy.org/GiveUpGitHub/"
		><img src="./sfc.ico" alt="Software Freedom Conservancy Icon" />Give Up GitHub</a
	>
	<a id="wist" href="https://wist.lts20050703.repl.co"
		><img src="./wist.ico" alt="Wist Icon" />Wist</a
	>
	<a id="entrots" href="https://codeberg.org/lts20050703/entrots">Entrots</a>
	<a id="timer" href="https://lts20050703.codeberg.page/timer">
		Timer loosely based on BOTW Stamina Wheel
	</a>
	<a id="tunic" href="https://tunicgame.com"><img src="./tunic.png" alt="Tunic Icon" />TUNIC</a>
</div>

<style>
	@import 'https://cdn.jsdelivr.net/npm/firacode@6.2.0/distr/fira_code.css';

	:global(html) {
		background: #000;
		color: #fff;
		font-family: Fira Code, monospace;
	}

	div {
		align-items: center;
		display: flex;
		flex-direction: column;
		font-size: 2rem;
		justify-content: center;
	}

	a {
		color: #00f;
	}

	img {
		height: 2rem;
	}

	#assc {
		color: #a4021f;
	}

	#cohost {
		color: #83254f;
	}

	#mastodon {
		color: #6364ff;
	}

	#sfc {
		color: #afe478;
	}

	#tunic {
		color: #ff7f00;
	}
</style>
