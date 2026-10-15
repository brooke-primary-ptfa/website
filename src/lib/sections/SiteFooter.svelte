<script lang="ts">
	import { charity } from '#lib/content/charity.ts';

	const footerLinks = [
		{ label: 'Charity Commission entry', href: charity.register.entry, external: true },
		{ label: 'Privacy', href: '/privacy', external: false },
		{ label: 'School website', href: charity.schoolWebsite, external: true }
	];
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
			<span class="name">{charity.shortName}</span>
			<span>
				{charity.registeredName}, registered charity No. {charity.number}, supporting {charity.schoolName}.
			</span>
			<address>{charity.address.join(', ')}</address>
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
		max-width: 560px;
	}
	.name {
		font-family: var(--font-display);
		font-size: 21px;
		font-weight: 600;
		color: var(--white);
	}
	address {
		font-style: normal;
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
