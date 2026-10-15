<script lang="ts">
	import type { Snippet } from 'svelte';

	let { title, children }: { title: string; children?: Snippet } = $props();
</script>

<div class="page-heading">
	<h1>{title}</h1>
	<div class="rule"></div>
	{#if children}<p class="lead">{@render children()}</p>{/if}
</div>

<style>
	.page-heading {
		max-width: var(--container-max);
		margin: 0 auto;
		padding: 64px var(--gutter) 0;
		display: flex;
		flex-direction: column;
		gap: 14px;
	}
	h1 {
		font-size: 56px;
		line-height: 1.05;
		color: var(--brooke-blue-800);
	}
	.rule {
		width: 56px;
		border-top: 3px solid var(--pond-pink-500);
	}
	.lead {
		font-size: 20px;
		color: var(--fg-2);
		max-width: 640px;
	}
	@media (max-width: 859px) {
		.page-heading {
			padding-top: 32px;
		}
		h1 {
			font-size: 40px;
		}
	}
</style>
