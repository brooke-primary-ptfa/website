<script lang="ts">
	import EventCard from '#lib/components/EventCard.svelte';
	import Icon from '#lib/components/Icon.svelte';
	import LinkButton from '#lib/components/LinkButton.svelte';
	import SectionHeading from '#lib/components/SectionHeading.svelte';
	import type { SiteEvent } from '#lib/content/types.ts';

	let {
		events,
		eventsAreExamples,
		ptaEventsUrl
	}: { events: SiteEvent[]; eventsAreExamples: boolean; ptaEventsUrl: string } = $props();
</script>

<section id="events" class="section whats-on">
	<div class="intro">
		<SectionHeading>What's on</SectionHeading>
		<p class="lead">Tickets and helper sign-ups are on PTA Events. Tap an event to book.</p>
		{#if eventsAreExamples}
			<p class="note"><Icon name="info" size={16} />Example events — real dates to follow.</p>
		{/if}
		<div class="all-events">
			<LinkButton href={ptaEventsUrl} variant="secondary" iconRight="external-link" newTab>All events and tickets</LinkButton>
		</div>
	</div>
	<div class="list">
		{#each events as event (event.date + event.title)}
			<a href={ptaEventsUrl} target="_blank" rel="noopener"><EventCard {event} /></a>
		{/each}
	</div>
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
	.note {
		font-size: 15px;
		color: var(--fg-3);
		display: flex;
		gap: 8px;
		align-items: center;
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
