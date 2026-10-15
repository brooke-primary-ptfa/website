<script lang="ts">
	import EventCard from '#lib/components/EventCard.svelte';
	import LinkButton from '#lib/components/LinkButton.svelte';
	import type { SiteEvent } from '#lib/content/types.ts';

	let { events, ptaEventsUrl }: { events: SiteEvent[]; ptaEventsUrl: string } = $props();
</script>

<section class="section whats-on">
	{#if events.length > 0}
		<div class="list">
			{#each events as event (event.date + event.title)}
				<a href={ptaEventsUrl} target="_blank" rel="noopener"><EventCard {event} /></a>
			{/each}
		</div>
	{/if}
	<div>
		<LinkButton href={ptaEventsUrl} variant="secondary" iconRight="external-link" newTab>All events and tickets</LinkButton>
	</div>
</section>

<style>
	.whats-on {
		padding-top: 32px;
		display: flex;
		flex-direction: column;
		gap: 24px;
	}
	.list {
		display: flex;
		flex-direction: column;
		gap: 14px;
		max-width: 760px;
	}
	.list a {
		text-decoration: none;
		color: inherit;
		display: block;
	}
</style>
