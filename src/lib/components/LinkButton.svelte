<!-- A link styled as a design-system button. Links, not <button>s, because every one navigates. -->
<script lang="ts">
	import type { Snippet } from 'svelte';
	import Icon from './Icon.svelte';
	import type { IconName } from './icons.ts';

	type Variant = 'primary' | 'secondary' | 'sunny';
	type Size = 'sm' | 'md' | 'lg';

	let {
		href,
		variant = 'primary',
		size = 'md',
		iconLeft,
		iconRight,
		fullWidth = false,
		newTab = false,
		children
	}: {
		href: string;
		variant?: Variant;
		size?: Size;
		iconLeft?: IconName;
		iconRight?: IconName;
		fullWidth?: boolean;
		newTab?: boolean;
		children: Snippet;
	} = $props();

	const iconSize = $derived(size === 'sm' ? 16 : 20);
</script>

<a
	{href}
	class="button {variant} {size}"
	class:full-width={fullWidth}
	target={newTab ? '_blank' : undefined}
	rel={newTab ? 'noopener' : undefined}
>
	{#if iconLeft}<Icon name={iconLeft} size={iconSize} />{/if}
	{@render children()}
	{#if iconRight}<Icon name={iconRight} size={iconSize} />{/if}
</a>

<style>
	.button {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		font-family: var(--font-display);
		font-weight: 600;
		letter-spacing: 0.01em;
		line-height: 1;
		white-space: nowrap;
		text-decoration: none;
		color: var(--fg);
		background: var(--bg);
		border: var(--border-w-strong) solid var(--bd);
		border-radius: var(--radius-pill);
		transition:
			background var(--dur-fast) var(--ease-out),
			transform var(--dur-fast) var(--ease-out);
	}
	.button:hover {
		background: var(--bg-hover);
		color: var(--fg);
	}
	.button:active {
		transform: translateY(1px) scale(0.98);
	}
	.full-width {
		width: 100%;
	}
	.primary {
		--bg: var(--accent-primary);
		--bg-hover: var(--accent-primary-hover);
		--fg: var(--fg-on-brand);
		--bd: transparent;
	}
	.secondary {
		--bg: var(--surface-card);
		--bg-hover: var(--brooke-blue-50);
		--fg: var(--brooke-blue-700);
		--bd: var(--brooke-blue-500);
	}
	.sunny {
		--bg: var(--accent-fun);
		--bg-hover: var(--accent-fun-hover);
		--fg: var(--ink-900);
		--bd: transparent;
	}
	.sm {
		height: 36px;
		padding: 0 16px;
		font-size: 15px;
		gap: 6px;
	}
	.md {
		height: 46px;
		padding: 0 22px;
		font-size: 17px;
		gap: 8px;
	}
	.lg {
		height: 56px;
		padding: 0 30px;
		font-size: 19px;
		gap: 10px;
	}
</style>
