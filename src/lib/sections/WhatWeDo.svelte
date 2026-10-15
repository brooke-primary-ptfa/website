<script lang="ts">
	import LinkButton from '#lib/components/LinkButton.svelte';
	import SectionHeading from '#lib/components/SectionHeading.svelte';
	import { charity } from '#lib/content/charity.ts';
</script>

<section id="what-we-do" class="section">
	<div class="body">
		<SectionHeading>What we do</SectionHeading>
		<p>
			{charity.shortName} raises money for equipment and resources at {charity.schoolName}, and brings staff,
			parents and others connected with the school together. Our charitable purpose is to advance the education of
			pupils at the school.
		</p>
		<div>
			<LinkButton href="/about" variant="secondary" iconRight="arrow-right">About us</LinkButton>
		</div>
	</div>
</section>

<style>
	.body {
		display: flex;
		flex-direction: column;
		gap: 14px;
		max-width: 720px;
	}
	p {
		font-size: 18px;
		color: var(--fg-2);
	}
</style>
