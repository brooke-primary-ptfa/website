<script lang="ts">
	import Icon from '#lib/components/Icon.svelte';
	import { charity } from '#lib/content/charity.ts';
</script>

<section class="section address-section">
	<h2>Registered address</h2>
	<div class="card">
		<span class="icon"><Icon name="landmark" size={22} /></span>
		<address>
			{#each charity.address as line (line)}<span>{line}</span>{/each}
		</address>
	</div>
	<p>
		This is the school's address. The PTFA does not own or lease any premises of its own.
	</p>
</section>

<style>
	.address-section {
		padding-top: 40px;
		display: flex;
		flex-direction: column;
		gap: 16px;
	}
	h2 {
		font-size: 26px;
	}
	.card {
		background: var(--white);
		border: 1px solid var(--border-1);
		border-radius: 24px;
		box-shadow: var(--shadow-1);
		padding: 20px 24px;
		display: flex;
		gap: 14px;
		align-items: flex-start;
		max-width: 480px;
	}
	.icon {
		color: var(--brooke-blue-600);
		display: flex;
	}
	address {
		font-style: normal;
		display: flex;
		flex-direction: column;
		font-size: 18px;
	}
	p {
		color: var(--fg-2);
		max-width: 640px;
	}
</style>
