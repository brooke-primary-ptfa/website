<script lang="ts">
	import { CHARITY_REGISTER_URL } from '#lib/content/site-content.ts';
	import type { SiteLinks } from '#lib/content/types.ts';

	let { links }: { links: SiteLinks } = $props();

	const footerLinks = $derived(
		[
			{ label: 'Charity Commission', href: CHARITY_REGISTER_URL, external: true },
			{ label: 'Privacy', href: links.privacy, external: false },
			{ label: 'Accessibility', href: links.accessibility, external: false },
			{ label: 'School website', href: 'https://www.brooke.norfolk.sch.uk', external: true }
		].filter((link) => Boolean(link.href))
	);
</script>

<footer>
	<div class="stripe" aria-hidden="true">
		<div class="blue"></div>
		<div class="green"></div>
		<div class="yellow"></div>
		<div class="pink"></div>
	</div>
	<div class="content">
		<div class="about">
			<span class="name">Brooke Primary PTFA</span>
			<span>
				An independent registered charity (No. 1034707) supporting Brooke Church of England VC Primary School,
				Brooke, Norfolk.
			</span>
		</div>
		<div class="links">
			{#each footerLinks as link (link.label)}
				<a href={link.href} target={link.external ? '_blank' : undefined} rel={link.external ? 'noopener' : undefined}>
					{link.label}
				</a>
			{/each}
		</div>
	</div>
</footer>

<style>
	footer {
		background: var(--brooke-blue-800);
		color: var(--brooke-blue-100);
		margin-top: 96px;
	}
	.stripe {
		display: flex;
		height: 6px;
	}
	.stripe div {
		flex: 1;
	}
	.blue {
		background: var(--brooke-blue-500);
	}
	.green {
		background: var(--duck-green-500);
	}
	.yellow {
		background: var(--duckbill-yellow-400);
	}
	.pink {
		background: var(--pond-pink-500);
	}
	.content {
		max-width: var(--container-max);
		margin: 0 auto;
		padding: 40px var(--gutter);
		display: flex;
		gap: 24px 48px;
		flex-wrap: wrap;
		justify-content: space-between;
		font-size: 15px;
	}
	.about {
		display: flex;
		flex-direction: column;
		gap: 6px;
		max-width: 520px;
	}
	.name {
		font-family: var(--font-display);
		font-size: 21px;
		font-weight: 600;
		color: var(--white);
	}
	.links {
		display: flex;
		gap: 8px 24px;
		flex-wrap: wrap;
		align-items: flex-end;
	}
	a {
		color: var(--brooke-blue-100);
	}
	a:hover {
		color: var(--white);
	}
</style>
