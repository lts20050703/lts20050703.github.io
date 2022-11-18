<svelte:head>
	<title>LTS20050703</title>
</svelte:head>

<div>
	<span>LTS20050703</span>
	<a id="assc" href="https://antisoftware.club/"
		><img src="./assc.png" alt="anti software software club icon" />anti software software club</a
	>
	<a id="cohost" href="https://cohost.org/lts20050703"
		><img src="./cohost.ico" alt="cohost! icon" />cohost!</a
	>
	<a id="mastodon" href="https://mastodon.social/@lts20050703"
		><img src="./mastodon.ico" alt="Mastodon icon" />Mastodon</a
	>
	<a id="sfc" href="https://sfconservancy.org/GiveUpGitHub/"
		><img src="./sfc.ico" alt="software freedom conservancy icon" />Give Up GitHub</a
	>
	<a id="wist" href="https://wist.lts20050703.repl.co"
		><img src="./wist.ico" alt="WIST icon" />WIST</a
	>
	<a id="timer" href="https://lts20050703.codeberg.page/timer">
		Timer loosely based on BOTW Stamina Wheel
	</a>
	<span>Work In Progress | In Development</span>
	<span>Rewrite from scratch to SvelteKit</span>
	<a id="entrots" href="https://codeberg.org/lts20050703/entropykit">Entropy kit</a>
	<a id="wistkit" href="https://codeberg.org/lts20050703/wistkit">WIST kit</a>
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

	span {
		text-align: center;
	}
</style>
