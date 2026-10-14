<script lang="ts">
	import { calendarParts } from '#lib/content/dates.ts';
	import type { SiteEvent } from '#lib/content/types.ts';
	import Badge from './Badge.svelte';

	let { event }: { event: SiteEvent } = $props();

	const when = $derived(calendarParts(event.date));
</script>

<div class="card">
	<div class="date {event.accent}">
		<span class="weekday">{when.weekday}</span>
		<span class="day">{when.day}</span>
		<span class="month">{when.month}</span>
	</div>
	<div class="details">
		<div class="title-row">
			<h4>{event.title}</h4>
			{#if event.helpersWanted}<Badge>Helpers wanted</Badge>{/if}
		</div>
		<div class="meta">
			<span>{event.time}</span>
			<span>{event.location}</span>
			<span class="price">{event.price}</span>
		</div>
	</div>
</div>

<style>
	.card {
		display: flex;
		gap: 18px;
		align-items: stretch;
		padding: 16px;
		background: var(--surface-card);
		border: 1px solid var(--border-1);
		border-radius: var(--radius-lg);
		box-shadow: var(--shadow-1);
		transition: all var(--dur-base) var(--ease-out);
	}
	:global(a:hover) > .card {
		box-shadow: var(--shadow-2);
		transform: translateY(-2px);
	}
	.date {
		width: 76px;
		flex-shrink: 0;
		border-radius: var(--radius-md);
		color: #fff;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 10px 0;
		line-height: 1;
	}
	.blue {
		background: var(--brooke-blue-500);
	}
	.green {
		background: var(--duck-green-500);
	}
	.yellow {
		background: var(--duckbill-yellow-400);
		color: var(--ink-900);
	}
	.pink {
		background: var(--pond-pink-500);
	}
	.weekday {
		font-size: 12px;
		font-weight: 700;
		letter-spacing: 0.08em;
		text-transform: uppercase;
		opacity: 0.9;
	}
	.day {
		font-family: var(--font-display);
		font-size: 34px;
		font-weight: 600;
		margin: 4px 0;
	}
	.month {
		font-size: 13px;
		font-weight: 700;
		letter-spacing: 0.08em;
		text-transform: uppercase;
	}
	.details {
		flex: 1;
		min-width: 0;
		display: flex;
		flex-direction: column;
		gap: 6px;
		justify-content: center;
	}
	.title-row {
		display: flex;
		gap: 8px;
		align-items: center;
		flex-wrap: wrap;
	}
	h4 {
		font-size: 21px;
		color: var(--fg-1);
	}
	.meta {
		display: flex;
		gap: 14px;
		flex-wrap: wrap;
		font-size: 15px;
		color: var(--fg-3);
	}
	.price {
		color: var(--fg-1);
		font-weight: 600;
	}
</style>
