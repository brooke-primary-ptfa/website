<script lang="ts">
	import { accentColours, type Accent } from '#lib/components/accents.ts';
	import Icon from '#lib/components/Icon.svelte';
	import type { IconName } from '#lib/components/icons.ts';
	import { charity } from '#lib/content/charity.ts';
	import type { SiteLinks } from '#lib/content/types.ts';

	let { links }: { links: SiteLinks } = $props();

	interface Channel {
		title: string;
		text: string;
		icon: IconName;
		href?: string;
		external: boolean;
		accent: Accent;
	}

	const channels = $derived(
		(
			[
				{ title: 'Facebook', text: 'News, photos and reminders', icon: 'facebook', href: links.facebook, external: true, accent: 'blue' },
				{ title: 'WhatsApp community', text: 'Chat with other Brooke families', icon: 'message-circle', href: links.whatsapp, external: true, accent: 'green' },
				{ title: 'Email', text: charity.email, icon: 'mail', href: `mailto:${charity.email}`, external: false, accent: 'yellow' }
			] satisfies Channel[]
		).filter((channel) => Boolean(channel.href))
	);
</script>

<section class="section stay-in-touch">
	<h2>Stay in touch</h2>
	<div class="grid">
		{#each channels as channel (channel.title)}
			{@const colours = accentColours[channel.accent]}
			<a
				href={channel.href}
				target={channel.external ? '_blank' : undefined}
				rel={channel.external ? 'noopener' : undefined}
				style:background={colours.tint}
			>
				<div class="icon-disc" style:background={colours.solid} style:color={colours.solidInk}>
					<Icon name={channel.icon} size={22} />
				</div>
				<div class="text">
					<strong>{channel.title}</strong>
					<span>{channel.text}</span>
				</div>
			</a>
		{/each}
	</div>
</section>

<style>
	.stay-in-touch {
		padding-top: 40px;
	}
	h2 {
		font-size: 26px;
		margin-bottom: 16px;
	}
	.grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(min(100%, 280px), 1fr));
		gap: 16px;
	}
	a {
		text-decoration: none;
		color: inherit;
		border-radius: 24px;
		padding: 20px;
		display: flex;
		gap: 14px;
		align-items: center;
		transition: transform 200ms var(--ease-out);
	}
	a:hover {
		transform: translateY(-2px);
		color: inherit;
	}
	.icon-disc {
		width: 48px;
		height: 48px;
		border-radius: 999px;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-shrink: 0;
	}
	.text {
		display: flex;
		flex-direction: column;
		flex: 1;
		min-width: 0;
	}
	strong {
		font-family: var(--font-display);
		font-size: 19px;
		font-weight: 600;
	}
	span {
		font-size: 15px;
		color: var(--fg-2);
		overflow-wrap: anywhere;
	}
</style>
