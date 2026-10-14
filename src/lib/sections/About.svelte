<script lang="ts">
	import Icon from '#lib/components/Icon.svelte';
	import SectionHeading from '#lib/components/SectionHeading.svelte';
	import type { SiteDocument } from '#lib/content/types.ts';

	let { documents }: { documents: SiteDocument[] } = $props();

	const committeeRoles = ['Chair', 'Vice-Chair', 'Treasurer', 'Secretary'];
</script>

<section id="about" class="section about">
	<div class="intro">
		<SectionHeading>About us</SectionHeading>
		<p>
			Brooke Primary PTFA is an independent registered charity (No. 1034707), run by elected trustees in
			partnership with the school. Everyone is welcome at our meetings.
		</p>
		<div class="committee">
			{#each committeeRoles as role (role)}
				<div class="member">
					<span class="role">{role}</span>
					<span class="name">To be confirmed</span>
				</div>
			{/each}
		</div>
	</div>
	<div class="documents">
		{#each documents as document (document.title)}
			<div class="row">
				<span class="doc-icon"><Icon name={document.icon} size={22} /></span>
				<div class="row-text">
					<strong>{document.title}</strong>
					<span>{document.note}</span>
				</div>
				{#if document.href}
					<a href={document.href} target="_blank" rel="noopener">
						{document.linkKind === 'pdf' ? 'PDF' : 'View'}
						<Icon name={document.linkKind === 'pdf' ? 'download' : 'external-link'} size={16} />
					</a>
				{/if}
			</div>
		{/each}
	</div>
</section>

<style>
	.about {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(min(100%, 340px), 1fr));
		gap: 40px;
		align-items: start;
	}
	.intro {
		display: flex;
		flex-direction: column;
		gap: 14px;
	}
	.intro p {
		color: var(--fg-2);
	}
	.committee {
		display: grid;
		grid-template-columns: repeat(2, minmax(0, 1fr));
		gap: 12px;
		margin-top: 8px;
	}
	.member {
		background: var(--white);
		border: 1px solid var(--border-1);
		border-radius: 16px;
		padding: 14px 16px;
		display: flex;
		flex-direction: column;
	}
	.role {
		font-size: 12px;
		font-weight: 700;
		letter-spacing: 0.08em;
		text-transform: uppercase;
		color: var(--pond-pink-600);
	}
	.name {
		font-family: var(--font-display);
		font-weight: 600;
		font-size: 17px;
		color: var(--fg-3);
	}
	.documents {
		background: var(--white);
		border: 1px solid var(--border-1);
		border-radius: 24px;
		box-shadow: var(--shadow-1);
		padding: 8px 24px;
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
	.doc-icon {
		color: var(--brooke-blue-600);
		display: flex;
	}
	.row-text {
		flex: 1;
		min-width: 160px;
		display: flex;
		flex-direction: column;
	}
	.row-text strong {
		font-size: 17px;
	}
	.row-text span {
		font-size: 14px;
		color: var(--fg-3);
	}
	.row a {
		font-weight: 600;
		display: inline-flex;
		gap: 6px;
		align-items: center;
		min-height: 44px;
	}
</style>
