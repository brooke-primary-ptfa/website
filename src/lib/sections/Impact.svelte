<script lang="ts">
	import Icon from '#lib/components/Icon.svelte';
	import type { IconName } from '#lib/components/icons.ts';

	const funded: { title: string; icon: IconName }[] = [
		{ title: 'Books and book bags for Reception', icon: 'book-open' },
		{ title: "Year 6 leavers' hoodies", icon: 'shirt' },
		{ title: 'School trips and visits', icon: 'bus' },
		{ title: 'Mini Beast activities', icon: 'bug' },
		{ title: 'Fish and equipment for Bluebells', icon: 'fish' },
		{ title: 'Artwork tea towels', icon: 'palette' },
		{ title: 'Reception classroom furniture', icon: 'armchair' },
		{ title: 'Next up: a new outdoor hut', icon: 'trees' }
	];
</script>

<section class="section">
	<div class="band">
		<div class="blob" aria-hidden="true"></div>
		<h2>Look what you've helped make happen</h2>
		<ul>
			{#each funded as item (item.title)}
				<li><span class="icon"><Icon name={item.icon} /></span>{item.title}</li>
			{/each}
		</ul>
	</div>
</section>

<style>
	.band {
		background: var(--duckbill-yellow-100);
		border-radius: 32px;
		padding: 48px;
		display: flex;
		flex-direction: column;
		gap: 20px;
		position: relative;
		overflow: hidden;
	}
	.blob {
		position: absolute;
		right: -60px;
		top: -60px;
		width: 240px;
		height: 210px;
		background: var(--duckbill-yellow-300);
		border-radius: 58% 42% 63% 37% / 45% 55% 45% 55%;
	}
	h2 {
		position: relative;
		font-size: 40px;
		line-height: 1.1;
		color: var(--brooke-blue-800);
		max-width: 560px;
	}
	ul {
		position: relative;
		display: flex;
		flex-wrap: wrap;
		gap: 10px;
		list-style: none;
		margin: 0;
		padding: 0;
	}
	li {
		background: var(--white);
		border-radius: 999px;
		padding: 10px 18px 10px 12px;
		display: inline-flex;
		gap: 10px;
		align-items: center;
		font-weight: 600;
		font-size: 16px;
		box-shadow: var(--shadow-1);
	}
	.icon {
		color: var(--brooke-blue-600);
		display: flex;
	}
	@media (max-width: 859px) {
		.band {
			padding: 28px 22px;
		}
		h2 {
			font-size: 30px;
		}
	}
</style>
