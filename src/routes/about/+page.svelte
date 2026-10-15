<script lang="ts">
	import PageHeading from '#lib/components/PageHeading.svelte';
	import { charity } from '#lib/content/charity.ts';
	import CharityDetails from '#lib/sections/CharityDetails.svelte';
	import Impact from '#lib/sections/Impact.svelte';
	import Mission from '#lib/sections/Mission.svelte';
</script>

<svelte:head>
	<title>About us — Brooke Primary PTFA</title>
	<meta
		name="description"
		content="Our mission, how we're run and our charity details: Brooke Parent-Teacher and Friends Association, registered charity 1034707."
	/>
</svelte:head>

<PageHeading title="About us">
	{charity.shortName} is the parent-teacher and friends association of {charity.schoolName} in Brooke, Norfolk. It
	is an independent registered charity.
</PageHeading>
<Mission />
<Impact />
<CharityDetails />
