<script lang="ts">
	import Icon from '#lib/components/Icon.svelte';
	import LinkButton from '#lib/components/LinkButton.svelte';
	import type { Promotion } from '#lib/content/types.ts';

	let { promotions }: { promotions: Promotion[] } = $props();

	// Measured in the prototype: one promotion every 6 seconds.
	const ROTATE_EVERY_MS = 6000;

	let index = $state(0);
	let paused = $state(false);
	let stopped = $state(false);

	const current = $derived(promotions[index]);
	const slideColours = {
		pink: { background: 'var(--pond-pink-500)', blob: 'var(--pond-pink-600)' },
		blue: { background: 'var(--brooke-blue-500)', blob: 'var(--brooke-blue-700)' }
	};
	const colours = $derived(slideColours[current.colour]);

	const show = (next: number) => (index = (next + promotions.length) % promotions.length);
	const choose = (next: number) => {
		stopped = true;
		show(next);
	};

	$effect(() => {
		const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
		if (promotions.length < 2 || paused || stopped || reduceMotion) return;
		const timer = setInterval(() => show(index + 1), ROTATE_EVERY_MS);
		return () => clearInterval(timer);
	});
</script>

{#if promotions.length > 0}
	<section
		class="promotions"
		aria-roledescription="carousel"
		aria-label="Promotions"
		onmouseenter={() => (paused = true)}
		onmouseleave={() => (paused = false)}
		onfocusin={() => (paused = true)}
		onfocusout={() => (paused = false)}
	>
		<div class="slide" aria-live={paused ? 'polite' : 'off'} style:background={colours.background}>
			<div class="blob" aria-hidden="true" style:background={colours.blob}></div>
			<div class="icon-disc" style:color={colours.blob}><Icon name={current.icon} size={26} /></div>
			<div class="copy">
				<span class="overline">{current.overline}</span>
				<strong>{current.title}</strong>
				<span class="text">{current.text}</span>
			</div>
			<div class="controls">
				{#if current.href}
					<LinkButton href={current.href} variant="sunny" iconRight="arrow-right" newTab>{current.buttonText}</LinkButton>
				{/if}
				{#if promotions.length > 1}
					<div class="stepper">
						<button type="button" class="step" aria-label="Previous promotion" onclick={() => choose(index - 1)}>
							<Icon name="chevron-left" />
						</button>
						<div class="dots">
							{#each promotions as promotion, i (promotion.title)}
								<button
									type="button"
									class="dot-button"
									aria-label="Show {promotion.title}"
									aria-current={i === index ? 'true' : undefined}
									onclick={() => choose(i)}
								>
									<span class="dot" class:current={i === index}></span>
								</button>
							{/each}
						</div>
						<button type="button" class="step" aria-label="Next promotion" onclick={() => choose(index + 1)}>
							<Icon name="chevron-right" />
						</button>
					</div>
				{/if}
			</div>
		</div>
	</section>
{/if}

<style>
	.promotions {
		max-width: var(--container-max);
		margin: 0 auto;
		padding: 24px var(--gutter) 0;
	}
	.slide {
		color: var(--white);
		border-radius: 24px;
		padding: 20px 24px;
		display: flex;
		gap: 18px 24px;
		align-items: center;
		flex-wrap: wrap;
		position: relative;
		overflow: hidden;
		transition: background 200ms var(--ease-out);
	}
	.blob {
		position: absolute;
		right: -40px;
		top: -50px;
		width: 200px;
		height: 170px;
		border-radius: 58% 42% 63% 37% / 45% 55% 45% 55%;
		transition: background 200ms var(--ease-out);
	}
	.icon-disc {
		position: relative;
		width: 56px;
		height: 56px;
		border-radius: 999px;
		background: var(--white);
		display: flex;
		align-items: center;
		justify-content: center;
		flex-shrink: 0;
	}
	.copy {
		position: relative;
		flex: 1;
		min-width: 220px;
		display: flex;
		flex-direction: column;
		gap: 2px;
	}
	.overline {
		font-size: 13px;
		font-weight: 700;
		letter-spacing: 0.08em;
		text-transform: uppercase;
		color: var(--duckbill-yellow-300);
	}
	strong {
		font-family: var(--font-display);
		font-weight: 600;
		font-size: 24px;
		line-height: 1.15;
	}
	.text {
		font-size: 16px;
		opacity: 0.92;
	}
	.controls {
		position: relative;
		display: flex;
		gap: 12px;
		align-items: center;
		flex-wrap: wrap;
	}
	.stepper {
		display: flex;
		gap: 6px;
		align-items: center;
	}
	.step {
		width: 40px;
		height: 40px;
		border-radius: 999px;
		border: 1.5px solid rgba(255, 255, 255, 0.6);
		background: transparent;
		color: var(--white);
		display: flex;
		align-items: center;
		justify-content: center;
		cursor: pointer;
	}
	.step:hover {
		background: rgba(255, 255, 255, 0.15);
	}
	.dots {
		display: flex;
		gap: 2px;
	}
	.dot-button {
		width: 24px;
		height: 40px;
		border: 0;
		background: transparent;
		cursor: pointer;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 0;
	}
	.dot {
		display: block;
		width: 8px;
		height: 8px;
		border-radius: 999px;
		background: var(--white);
		opacity: 0.5;
		transition: all 200ms var(--ease-out);
	}
	.dot.current {
		width: 20px;
		opacity: 1;
	}
</style>
