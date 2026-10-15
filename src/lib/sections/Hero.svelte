<script lang="ts">
	import LinkButton from '#lib/components/LinkButton.svelte';
</script>

<section class="hero">
	<div class="copy">
		<span class="overline">Parents · Teachers · Friends</span>
		<h1>Little things. <span>Big difference.</span></h1>
		<p>
			We're the parents, carers, staff and friends who run events and raise money for the extras that make
			Brooke Primary even better.
		</p>
		<div class="buttons">
			<LinkButton href="/whats-on" size="lg" iconRight="arrow-right">See what's on</LinkButton>
			<LinkButton href="/get-involved" size="lg" variant="secondary">Get involved</LinkButton>
		</div>
	</div>
	<div class="photo">
		<div class="blob" aria-hidden="true"></div>
		<img
			src="/images/school-from-above-640.webp"
			srcset="/images/school-from-above-640.webp 640w, /images/school-from-above-1200.webp 1200w"
			sizes="(max-width: 859px) 100vw, 560px"
			width="1200"
			height="900"
			alt="Brooke Primary School and its field, seen from above"
		/>
	</div>
</section>

<style>
	.hero {
		max-width: var(--container-max);
		margin: 0 auto;
		padding: 64px var(--gutter) 0;
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(min(100%, 380px), 1fr));
		gap: 48px;
		align-items: center;
	}
	.copy {
		display: flex;
		flex-direction: column;
		gap: 22px;
	}
	.overline {
		font-size: 13px;
		font-weight: 700;
		letter-spacing: 0.08em;
		text-transform: uppercase;
		color: var(--pond-pink-600);
	}
	h1 {
		font-size: 72px;
		line-height: 1;
		letter-spacing: -0.01em;
		color: var(--brooke-blue-800);
	}
	h1 span {
		color: var(--brooke-blue-500);
	}
	p {
		font-size: 20px;
		color: var(--fg-2);
		max-width: 480px;
	}
	.buttons {
		display: flex;
		gap: 12px;
		flex-wrap: wrap;
	}
	.photo {
		position: relative;
		padding: 18px 18px 18px 0;
	}
	.blob {
		position: absolute;
		right: -6px;
		top: 0;
		width: 62%;
		height: 74%;
		background: var(--duckbill-yellow-300);
		border-radius: 58% 42% 63% 37% / 45% 55% 45% 55%;
	}
	img {
		position: relative;
		display: block;
		width: 100%;
		height: auto;
		aspect-ratio: 4 / 3;
		object-fit: cover;
		border-radius: 32px;
		box-shadow: var(--shadow-2);
	}
	@media (max-width: 859px) {
		.hero {
			padding-top: 32px;
		}
		h1 {
			font-size: 48px;
		}
	}
</style>
