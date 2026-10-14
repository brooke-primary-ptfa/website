<script lang="ts">
	import EventCard from '#lib/components/EventCard.svelte';
	import LinkButton from '#lib/components/LinkButton.svelte';
	import SectionHeading from '#lib/components/SectionHeading.svelte';
	import type { SiteEvent } from '#lib/content/types.ts';

	let { events, ptaEventsUrl }: { events: SiteEvent[]; ptaEventsUrl: string } = $props();
</script>

<section id="events" class="section whats-on">
	<div class="intro">
		<SectionHeading>What's on</SectionHeading>
		<p class="lead">Tickets and helper sign-ups are on PTA Events.{#if events.length > 0} Tap an event to book.{/if}</p>
		<div class="all-events">
			<LinkButton href={ptaEventsUrl} variant="secondary" iconRight="external-link" newTab>All events and tickets</LinkButton>
		</div>
	</div>
	{#if events.length > 0}
		<div class="list">
			{#each events as event (event.date + event.title)}
				<a href={ptaEventsUrl} target="_blank" rel="noopener"><EventCard {event} /></a>
			{/each}
		</div>
	{/if}
</section>

<style>
	.whats-on {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(min(100%, 320px), 1fr));
		gap: 40px;
		align-items: start;
	}
	.intro {
		display: flex;
		flex-direction: column;
		gap: 12px;
	}
	.lead {
		color: var(--fg-2);
		font-size: 18px;
		max-width: 360px;
	}
	.all-events {
		margin-top: 8px;
	}
	.list {
		display: flex;
		flex-direction: column;
		gap: 14px;
		grid-column: span 2;
	}
	.list a {
		text-decoration: none;
		color: inherit;
		display: block;
	}
	@media (max-width: 859px) {
		.list {
			grid-column: span 1;
		}
	}
</style>
