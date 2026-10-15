<script lang="ts">
	import { siteContent } from '#lib/content/site-content.ts';
	import Hero from '#lib/sections/Hero.svelte';
	import Impact from '#lib/sections/Impact.svelte';
	import PromoCarousel from '#lib/sections/PromoCarousel.svelte';
	import WhatWeDo from '#lib/sections/WhatWeDo.svelte';
</script>

<svelte:head>
	<title>Brooke Primary PTFA — Little things. Big difference.</title>
	<meta
		name="description"
		content="Brooke Primary PTFA brings parents, teachers and friends together to support Brooke Church of England VC Primary School. Registered charity 1034707."
	/>
</svelte:head>

<PromoCarousel promotions={siteContent.promotions} />
<Hero />
<WhatWeDo />
<Impact />
