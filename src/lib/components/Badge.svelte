<script lang="ts">
	import type { Snippet } from 'svelte';

	let { children }: { children: Snippet } = $props();
</script>

<span class="badge"><span class="dot"></span>{@render children()}</span>

<style>
	.badge {
		display: inline-flex;
		align-items: center;
		gap: 6px;
		height: 26px;
		padding: 0 10px;
		border-radius: 999px;
		background: var(--success-bg);
		color: var(--success-fg);
		font-size: 13px;
		font-weight: 700;
		line-height: 1;
		white-space: nowrap;
	}
	.dot {
		width: 7px;
		height: 7px;
		border-radius: 50%;
		background: currentColor;
	}
</style>
