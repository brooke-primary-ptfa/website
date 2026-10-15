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
	Coming up from the PTFA. Tickets and helper sign-ups for ticketed events are on PTA Events.
</PageHeading>
<WhatsOn events={siteContent.events} ptaEventsUrl={siteContent.links.ptaEvents} />
