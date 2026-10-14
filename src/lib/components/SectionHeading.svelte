<script lang="ts">
	import type { Snippet } from 'svelte';

	let { children }: { children: Snippet } = $props();
</script>

<h2>{@render children()}</h2>
<div class="rule"></div>

<style>
	h2 {
		font-size: 40px;
		line-height: 1.1;
		color: var(--brooke-blue-800);
	}
	.rule {
		width: 56px;
		border-top: 3px solid var(--pond-pink-500);
	}
	@media (max-width: 859px) {
		h2 {
			font-size: 30px;
		}
	}
</style>
