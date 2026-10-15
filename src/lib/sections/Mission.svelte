<script lang="ts">
	import SectionHeading from '#lib/components/SectionHeading.svelte';
	import { charity } from '#lib/content/charity.ts';
</script>

<section id="mission" class="section">
	<div class="body">
		<SectionHeading>Our mission</SectionHeading>
		<p>{charity.objects.lead}</p>
		<ul>
			{#each charity.objects.means as means (means)}
				<li>{means}</li>
			{/each}
		</ul>
		<p class="source">From the charitable objects in our constitution, as recorded by the Charity Commission.</p>
		<h3>In practice</h3>
		<p>
			We run fundraising events and activities through the school year to raise money for school equipment and
			resources, and we organise volunteers from the school community to help run them.
		</p>
	</div>
</section>

<style>
	.body {
		display: flex;
		flex-direction: column;
		gap: 14px;
		max-width: 720px;
	}
	p,
	li {
		font-size: 18px;
		color: var(--fg-2);
	}
	ul {
		margin: 0;
		padding-left: 1.2em;
		display: flex;
		flex-direction: column;
		gap: 8px;
	}
	.source {
		font-size: 15px;
		color: var(--fg-3);
	}
	h3 {
		font-size: 22px;
		margin-top: 12px;
	}
</style>
