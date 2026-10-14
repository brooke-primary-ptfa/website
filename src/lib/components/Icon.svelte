<script lang="ts">
	import { icons, type IconName } from './icons.ts';

	let {
		name,
		size = 20,
		color = 'currentColor'
	}: { name: IconName; size?: number; color?: string } = $props();

	const Glyph = $derived(icons[name]);
</script>

<span class="icon" aria-hidden="true"><Glyph {size} {color} /></span>

<style>
	.icon {
		display: inline-flex;
		flex-shrink: 0;
	}
</style>
