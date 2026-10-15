<script lang="ts">
	import { accentColours, type Accent } from '#lib/components/accents.ts';
	import Icon from '#lib/components/Icon.svelte';
	import type { IconName } from '#lib/components/icons.ts';
	import LinkButton from '#lib/components/LinkButton.svelte';
	import { charity } from '#lib/content/charity.ts';
	import type { SiteLinks } from '#lib/content/types.ts';

	let { links }: { links: SiteLinks } = $props();

	const mailTo = (subject: string) => `mailto:${charity.email}?subject=${encodeURIComponent(subject)}`;

	const timeWays: { title: string; icon: IconName; text: string; buttonText: string; href: string; external: boolean; accent: Accent }[] = $derived([
		{ title: 'Help at an event', icon: 'party-popper', text: 'Run a stall, serve teas or help tidy up. Sign up for a slot on PTA Events.', buttonText: 'Pick a slot', href: links.ptaEvents, external: true, accent: 'pink' },
		{ title: 'Bake or donate', icon: 'cake-slice', text: 'Cakes for bake sales, raffle prizes or gifts for Elfridges. Drop them at the school office.', buttonText: 'Tell us', href: mailTo('I can bake or donate'), external: false, accent: 'yellow' },
		{ title: 'Join the committee', icon: 'users', text: 'Help plan events and decide how funds are spent, as a trustee.', buttonText: 'Get in touch', href: mailTo('Joining the PTFA committee'), external: false, accent: 'green' }
	]);

	const moneyWays = $derived(
		[
			{ title: 'Easyfundraising', icon: 'shopping-bag' as IconName, text: 'Shop online and retailers donate to us, at no extra cost.', linkText: 'Sign up', href: links.easyfundraising, accent: 'blue' as Accent },
			{ title: 'Your School Lottery', icon: 'ticket' as IconName, text: '£1 a week. 18+ only — please play responsibly.', linkText: 'Play', href: links.lottery, accent: 'yellow' as Accent }
		].filter((way): way is typeof way & { href: string } => Boolean(way.href))
	);
</script>

<section class="section get-involved">
	<h3><Icon name="clock" size={22} color="var(--duck-green-700)" />Give a little time</h3>
	<div class="time-grid">
		{#each timeWays as way (way.title)}
			<div class="time-card" style:background={accentColours[way.accent].tint}>
				<div class="icon-disc" style:color={accentColours[way.accent].ink}><Icon name={way.icon} size={22} /></div>
				<h4>{way.title}</h4>
				<p>{way.text}</p>
				<div>
					<LinkButton href={way.href} variant="secondary" size="sm" iconRight={way.external ? 'external-link' : 'mail'} newTab={way.external}>
						{way.buttonText}
					</LinkButton>
				</div>
			</div>
		{/each}
	</div>

	<h3 class="money-heading"><Icon name="heart" size={22} color="var(--pond-pink-600)" />Give a little money</h3>
	<div class="money-grid">
		{#if links.donate}
			<div class="donate-card">
				<h4>Make a donation</h4>
				<p>One-off gifts of any size help pay for trips, books and equipment. Thank you.</p>
				<LinkButton href={links.donate} variant="sunny" size="lg" fullWidth iconLeft="heart" newTab>Donate online</LinkButton>
				<p class="small">Handled securely by our donation provider. We never take card details on this site.</p>
			</div>
		{/if}
		{#if moneyWays.length > 0}
			<div class="list-card">
				{#each moneyWays as way (way.title)}
					<div class="row">
						<div class="icon-disc small-disc" style:background={accentColours[way.accent].tint} style:color={accentColours[way.accent].ink}>
							<Icon name={way.icon} size={20} />
						</div>
						<div class="row-text">
							<strong>{way.title}</strong>
							<span>{way.text}</span>
						</div>
						<a href={way.href} target="_blank" rel="noopener" class="row-link">{way.linkText}<Icon name="external-link" size={16} /></a>
					</div>
				{/each}
			</div>
		{/if}
		<div class="uniform-card">
			<div class="uniform-head">
				<div class="icon-disc small-disc" style:color="var(--duck-green-700)"><Icon name="shirt" size={20} /></div>
				<div class="row-text">
					<strong>Pre-loved uniform</strong>
					<span>Save money and support the PTFA. Ask at the school office.</span>
				</div>
			</div>
			<div class="prices">
				<span>Logo jumpers, cardigans and fleeces <strong>£3</strong></span>
				<span>Logo polo shirts and PE tops <strong>£2</strong></span>
				<span>Non-logo items <strong>£1</strong></span>
				<span>Bags <strong>£2</strong></span>
			</div>
			<p class="uniform-note">We're always looking for donations of Brooke logo items.</p>
		</div>
	</div>
</section>

<style>
	.get-involved {
		padding-top: 40px;
	}
	h3 {
		font-size: 22px;
		margin-bottom: 16px;
		display: flex;
		gap: 10px;
		align-items: center;
	}
	.money-heading {
		margin-top: 48px;
	}
	.time-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(min(100%, 280px), 1fr));
		gap: 20px;
	}
	.time-card {
		border-radius: 24px;
		padding: 26px;
		display: flex;
		flex-direction: column;
		gap: 12px;
	}
	.time-card h4 {
		font-size: 21px;
	}
	.time-card p {
		color: var(--fg-2);
		font-size: 16px;
		flex: 1;
	}
	.icon-disc {
		width: 48px;
		height: 48px;
		border-radius: 999px;
		background: var(--white);
		display: flex;
		align-items: center;
		justify-content: center;
		flex-shrink: 0;
	}
	.small-disc {
		width: 44px;
		height: 44px;
	}
	.money-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(min(100%, 340px), 1fr));
		gap: 20px;
		align-items: stretch;
	}
	.donate-card {
		background: var(--brooke-blue-500);
		color: var(--white);
		border-radius: 24px;
		padding: 28px;
		display: flex;
		flex-direction: column;
		gap: 12px;
		grid-row: span 2;
	}
	.donate-card h4 {
		font-size: 26px;
		color: var(--white);
	}
	.donate-card p {
		color: var(--brooke-blue-50);
		flex: 1;
	}
	.donate-card .small {
		font-size: 13px;
		color: var(--brooke-blue-100);
		flex: 0;
	}
	.list-card {
		background: var(--white);
		border: 1px solid var(--border-1);
		border-radius: 24px;
		box-shadow: var(--shadow-1);
		padding: 8px 24px;
		display: flex;
		flex-direction: column;
	}
	.row {
		display: flex;
		gap: 14px;
		align-items: center;
		padding: 16px 0;
		flex-wrap: wrap;
	}
	.row + .row {
		border-top: 1px solid var(--border-1);
	}
	.row-text {
		flex: 1;
		min-width: 180px;
		display: flex;
		flex-direction: column;
	}
	.row-text strong {
		font-family: var(--font-display);
		font-weight: 600;
		font-size: 18px;
	}
	.row-text span {
		font-size: 15px;
		color: var(--fg-2);
	}
	.row-link {
		font-weight: 600;
		display: inline-flex;
		gap: 6px;
		align-items: center;
		min-height: 44px;
	}
	.uniform-card {
		background: var(--duck-green-50);
		border-radius: 24px;
		padding: 24px;
		display: flex;
		flex-direction: column;
		gap: 12px;
	}
	.uniform-head {
		display: flex;
		gap: 14px;
		align-items: center;
	}
	.prices {
		display: flex;
		gap: 8px;
		flex-wrap: wrap;
	}
	.uniform-note {
		font-size: 15px;
		color: var(--fg-2);
	}
	.prices span {
		background: var(--white);
		border-radius: 999px;
		padding: 6px 14px;
		font-size: 15px;
	}
	@media (max-width: 859px) {
		.donate-card {
			grid-row: span 1;
		}
	}
</style>
