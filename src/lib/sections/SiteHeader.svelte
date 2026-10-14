<script lang="ts">
	import Icon from '#lib/components/Icon.svelte';
	import LinkButton from '#lib/components/LinkButton.svelte';

	let { donateUrl }: { donateUrl?: string } = $props();

	const navItems = [
		{ label: "What's on", href: '#events' },
		{ label: 'Get involved', href: '#help' },
		{ label: 'About', href: '#about' },
		{ label: 'Contact', href: '#contact' }
	];

	let menuOpen = $state(false);
</script>

<header>
	<div class="bar">
		<a href="#top" class="brand">
			<img src="/images/badge-44.webp" srcset="/images/badge-88.webp 2x" width="44" height="44" alt="Brooke Primary School badge" />
			<span>Brooke Primary PTFA</span>
		</a>
		<nav aria-label="Main" class="wide-nav">
			{#each navItems as item (item.href)}
				<a href={item.href}>{item.label}</a>
			{/each}
		</nav>
		<div class="actions">
			{#if donateUrl}
				<LinkButton href={donateUrl} variant="sunny" size="sm" iconLeft="heart" newTab>Donate</LinkButton>
			{/if}
			<button
				type="button"
				class="menu-button"
				aria-expanded={menuOpen}
				aria-controls="mobile-nav"
				aria-label="Menu"
				onclick={() => (menuOpen = !menuOpen)}
			>
				<Icon name={menuOpen ? 'x' : 'menu'} size={22} />
			</button>
		</div>
	</div>
	{#if menuOpen}
		<nav aria-label="Mobile" id="mobile-nav" class="mobile-nav">
			{#each navItems as item (item.href)}
				<a href={item.href} onclick={() => (menuOpen = false)}>{item.label}</a>
			{/each}
		</nav>
	{/if}
</header>

<style>
	header {
		position: sticky;
		top: 0;
		z-index: 30;
		background: rgba(251, 249, 244, 0.92);
		backdrop-filter: blur(10px);
		-webkit-backdrop-filter: blur(10px);
		border-bottom: 1px solid var(--border-1);
	}
	.bar {
		max-width: var(--container-max);
		margin: 0 auto;
		padding: 10px var(--gutter);
		display: flex;
		align-items: center;
		gap: 20px;
	}
	.brand {
		display: flex;
		align-items: center;
		gap: 12px;
		text-decoration: none;
		flex-shrink: 0;
	}
	.brand img {
		display: block;
	}
	.brand span {
		font-family: var(--font-display);
		font-weight: 600;
		font-size: 21px;
		line-height: 1.05;
		color: var(--brooke-blue-700);
	}
	.wide-nav {
		display: flex;
		gap: 2px;
		margin-left: auto;
	}
	.wide-nav a {
		padding: 9px 14px;
		border-radius: 999px;
		font-weight: 600;
		font-size: 16px;
		text-decoration: none;
		color: var(--fg-2);
		transition: background 120ms ease-out;
	}
	.wide-nav a:hover {
		background: var(--brooke-blue-50);
		color: var(--brooke-blue-700);
	}
	.actions {
		display: flex;
		align-items: center;
		gap: 8px;
	}
	.menu-button {
		display: none;
		width: 44px;
		height: 44px;
		border-radius: 999px;
		border: 1.5px solid var(--border-2);
		background: var(--white);
		color: var(--fg-1);
		align-items: center;
		justify-content: center;
		cursor: pointer;
	}
	.mobile-nav {
		display: none;
	}
	@media (max-width: 859px) {
		.wide-nav {
			display: none;
		}
		.actions {
			margin-left: auto;
		}
		.menu-button {
			display: flex;
		}
		.mobile-nav {
			border-top: 1px solid var(--border-1);
			padding: 8px 16px 16px;
			display: flex;
			flex-direction: column;
			gap: 2px;
		}
		.mobile-nav a {
			display: flex;
			align-items: center;
			min-height: 52px;
			padding: 0 16px;
			border-radius: 16px;
			font-family: var(--font-display);
			font-weight: 600;
			font-size: 20px;
			text-decoration: none;
			color: var(--fg-1);
		}
	}
</style>
