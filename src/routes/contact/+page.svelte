<script lang="ts">
	import PageHeading from '#lib/components/PageHeading.svelte';
	import { siteContent } from '#lib/content/site-content.ts';
	import Address from '#lib/sections/Address.svelte';
	import StayInTouch from '#lib/sections/StayInTouch.svelte';
</script>

<svelte:head>
	<title>Contact us — Brooke Primary PTFA</title>
	<meta name="description" content="Email and registered address for Brooke Primary PTFA, registered charity 1034707." />
</svelte:head>

<PageHeading title="Contact us">Email us with questions, offers of help or ideas.</PageHeading>
<StayInTouch links={siteContent.links} />
<Address />
