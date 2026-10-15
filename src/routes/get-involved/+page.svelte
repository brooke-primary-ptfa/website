<script lang="ts">
	import PageHeading from '#lib/components/PageHeading.svelte';
	import { siteContent } from '#lib/content/site-content.ts';
	import GetInvolved from '#lib/sections/GetInvolved.svelte';
</script>

<svelte:head>
	<title>Get involved — Brooke Primary PTFA</title>
	<meta
		name="description"
		content="Help at an event, bake or donate, join the committee, or support Brooke Primary PTFA with money."
	/>
</svelte:head>

<PageHeading title="Get involved">
	An hour, a cake or a few pounds. You don't need to join the committee to make a difference.
</PageHeading>
<GetInvolved links={siteContent.links} />
