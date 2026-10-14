<script lang="ts">
	import { siteContent } from '#lib/content/site-content.ts';
	import About from '#lib/sections/About.svelte';
	import GetInvolved from '#lib/sections/GetInvolved.svelte';
	import Hero from '#lib/sections/Hero.svelte';
	import Impact from '#lib/sections/Impact.svelte';
	import PromoCarousel from '#lib/sections/PromoCarousel.svelte';
	import SiteFooter from '#lib/sections/SiteFooter.svelte';
	import SiteHeader from '#lib/sections/SiteHeader.svelte';
	import StayInTouch from '#lib/sections/StayInTouch.svelte';
	import WhatsOn from '#lib/sections/WhatsOn.svelte';

	const { events, eventsAreExamples, promotions, links, documents } = siteContent;
</script>

<svelte:head>
	<title>Brooke Primary PTFA — Little things. Big difference.</title>
	<meta
		name="description"
		content="Brooke Primary PTFA brings parents, teachers and friends together to support Brooke Church of England VC Primary School. Registered charity 1034707."
	/>
</svelte:head>

<SiteHeader donateUrl={links.donate} />
<main id="top">
	<PromoCarousel {promotions} />
	<Hero />
	<WhatsOn {events} {eventsAreExamples} ptaEventsUrl={links.ptaEvents} />
	<GetInvolved {links} />
	<Impact />
	<About {documents} />
	<StayInTouch {links} />
</main>
<SiteFooter {links} />
