<script lang="ts">
	import { onMount } from "svelte"

	const version = "2022.11.28.1"

	onMount(() => {
		const circle0_ = [new_animation(circle00), new_animation(circle01), new_animation(circle02)]

		const circle1_ = [new_animation(circle10), new_animation(circle11), new_animation(circle12)]

		const circle2_ = [new_animation(circle20), new_animation(circle21), new_animation(circle22)]

		let timeout: NodeJS.Timeout

		start_consuming = () => {
			const circle0 = circle0_.at(-1)!
			const circle1 = circle1_.at(-1)!
			const circle2 = circle2_.at(-1)!

			consume = true
			refill = false
			deplete = false

			circle0.currentTime = 1
			circle1.currentTime = 1
			circle2.currentTime = 1

			circle0.playbackRate = 1
			circle1.playbackRate = 1
			circle2.playbackRate = 1

			audio_90.load()
			audio_90.play()

			circle0.play()
			circle1.play()
			circle2.play()

			chain_consume()

			timeout = setTimeout(() => {
				deplete = true
			}, consume_duration - deplete_duration)
		}

		start_depleting = () => {
			deplete = true
			consume = true
			refill = false

			chain_deplete()

			circle2_.forEach((circle2) => {
				circle2.onfinish = () => {}
				circle2.finish()
			})

			const circle0 = circle0_.find((a) => a.playState === "running") ?? circle0_.at(-1)!
			const circle1 = circle1_.find((a) => a.playState === "running") ?? circle1_.at(-1)!
			const circle2 = circle2_[0]!

			circle0.playbackRate = 0
			circle1.playbackRate = multiplier
			circle2.currentTime = consume_duration / circles - deplete_duration

			circle1.play()
			circle2.play()

			audio_90.pause()
			audio_15.load()
			audio_15.play()

			setTimeout(() => {
				circle0.playbackRate = multiplier
				circle0.play()
			}, hang_duration)

			clearTimeout(timeout)
		}

		start_refilling = () => {
			;(circle2_.find((a) => a.playState === "running") ?? circle2_[0])!.playbackRate = -multiplier
			;(circle1_.find((a) => a.playState === "running") ?? circle1_[0])!.playbackRate = -multiplier
			;(circle0_.find((a) => a.playState === "running") ?? circle0_[0])!.playbackRate = -multiplier

			consume = true
			deplete = true
			refill = true

			audio_90.pause()
			audio_15.pause()

			chain_refill()

			clearTimeout(timeout)
		}

		function chain_consume() {
			;[circle0_, circle1_, circle2_].forEach((circle__) =>
				circle__.forEach(
					(a, i) =>
						(a.onfinish = () => {
							const circle = circle__[i - 1]
							if (circle) {
								circle.playbackRate = 1
								circle.play()
							}
						})
				)
			)
		}

		function chain_deplete() {
			;[circle0_, circle1_].forEach((circle__) =>
				circle__.forEach(
					(a, i) =>
						(a.onfinish = () => {
							const circle = circle__[i - 1]
							if (circle) {
								circle.playbackRate = multiplier
								circle.play()
							}
						})
				)
			)
			circle2_.forEach((circle2) => (circle2.playbackRate = 1))
		}

		function chain_refill() {
			let count = 0
			;[circle0_, circle1_, circle2_].forEach((circle__) =>
				circle__.forEach(
					(a, i) =>
						(a.onfinish = () => {
							const circle = circle__[i + 1]
							if (circle) {
								circle.playbackRate = -multiplier
								circle.play()
							} else {
								count += 1
								if (count === 2) consume = false
							}
						})
				)
			)
		}

		const audio_90 = new Audio("/90.mp3")
		const audio_15 = new Audio("/15.mp3")

		function new_animation(element: SVGCircleElement) {
			return new Animation(
				new KeyframeEffect(
					element,
					[
						{ strokeDashoffset: "0px" },
						{
							strokeDashoffset: `${-2 * Math.PI * element.r.baseVal.value}px`
						}
					],
					{ duration: consume_duration / circles, fill: "forwards" }
				)
			)
		}
	})

	/** MILISECONDS */
	const consume_duration = 90000
	/** MILISECONDS */
	const deplete_duration = 15000
	/** MILISECONDS */
	const hang_duration = 1000
	const multiplier = 90

	console.log(`TIMER LOOSELY BASED ON BOTW STAMINA WHEEL VERSION ${version}`)

	let circle00: SVGCircleElement,
		circle01: SVGCircleElement,
		circle02: SVGCircleElement,
		circle10: SVGCircleElement,
		circle11: SVGCircleElement,
		circle12: SVGCircleElement,
		circle20: SVGCircleElement,
		circle21: SVGCircleElement,
		circle22: SVGCircleElement

	let consume = false,
		deplete = true,
		refill = true

	let start_consuming: () => void, start_depleting: () => void, start_refilling: () => void

	const circles = 3
</script>

<svelte:head>
	<title>LTS20050703 > TIMER</title>
</svelte:head>

<div class="flex flex-col justify-center items-center">
	<div
		class="breadcrumbs flex-1 gap-2 text-sm max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl"
	>
		<ul>
			<li><a href="../" class="btn btn-link btn-sm text-sm">LTS20050703</a></li>
			<li>TIMER LOOSELY BASED ON BOTW STAMINA WHEEL VERSION {version}</li>
		</ul>
	</div>

	<div class="flex flex-row items-center justify-center text-3xl gap-2 flex-1">
		<button on:click={start_consuming} class="btn btn-primary gap-2 flex-1" disabled={consume}
			>CONSUME</button
		>
		<button on:click={start_depleting} class="btn btn-error gap-2 flex-1" disabled={deplete}
			>DEPLETE</button
		>
		<button on:click={start_refilling} class="btn btn-success gap-2 flex-1" disabled={refill}
			>REFILL</button
		>
	</div>
	<div class="w-40 h-40 flex justify-center items-center -rotate-90 -scale-y-100 flex-1 p-4">
		<svg class="h-32 w-32">
			<circle
				bind:this={circle00}
				class="fill-transparent stroke-red-500 [stroke-dasharray:1000px]"
				cx="50%"
				cy="50%"
				r="23%"
				stroke-width="10%"
			/>
			<circle
				bind:this={circle10}
				cx="50%"
				cy="50%"
				r="23%"
				stroke-width="10%"
				class="fill-transparent stroke-yellow-500 [stroke-dasharray:1000px]"
			/>
			<circle
				bind:this={circle20}
				cx="50%"
				cy="50%"
				r="23%"
				stroke-width="10%"
				class="fill-transparent stroke-green-500 [stroke-dasharray:1000px]"
			/>

			<circle
				bind:this={circle01}
				cx="50%"
				cy="50%"
				r="34%"
				stroke-width="10%"
				class="fill-transparent stroke-red-500 [stroke-dasharray:1000px]"
			/>
			<circle
				bind:this={circle11}
				cx="50%"
				cy="50%"
				r="34%"
				stroke-width="10%"
				class="fill-transparent stroke-yellow-500 [stroke-dasharray:1000px]"
			/>
			<circle
				bind:this={circle21}
				cx="50%"
				cy="50%"
				r="34%"
				stroke-width="10%"
				class="fill-transparent stroke-green-500 [stroke-dasharray:1000px]"
			/>

			<circle
				bind:this={circle02}
				cx="50%"
				cy="50%"
				r="45%"
				stroke-width="10%"
				class="fill-transparent stroke-red-500 [stroke-dasharray:1000px]"
			/>
			<circle
				bind:this={circle12}
				cx="50%"
				cy="50%"
				r="45%"
				stroke-width="10%"
				class="fill-transparent stroke-yellow-500 [stroke-dasharray:1000px]"
			/>
			<circle
				bind:this={circle22}
				cx="50%"
				cy="50%"
				r="45%"
				stroke-width="10%"
				class="fill-transparent stroke-green-500 [stroke-dasharray:1000px]"
			/>
		</svg>
	</div>
</div>
