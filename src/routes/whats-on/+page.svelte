<script lang="ts">
	import PageHeading from '#lib/components/PageHeading.svelte';
	import { siteContent } from '#lib/content/site-content.ts';
	import WhatsOn from '#lib/sections/WhatsOn.svelte';
</script>

<svelte:head>
	<title>What's on — Brooke Primary PTFA</title>
	<meta name="description" content="Brooke Primary PTFA events, with tickets and helper sign-ups on PTA Events." />
</svelte:head>

<PageHeading title="What's on">
	Tickets and helper sign-ups are on PTA Events.{#if siteContent.events.length > 0} Tap an event to book.{/if}
</PageHeading>
<WhatsOn events={siteContent.events} ptaEventsUrl={siteContent.links.ptaEvents} />
