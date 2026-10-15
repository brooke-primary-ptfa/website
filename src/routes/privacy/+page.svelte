<script lang="ts">
	import PageHeading from '#lib/components/PageHeading.svelte';
	import { charity } from '#lib/content/charity.ts';
</script>

<svelte:head>
	<title>Privacy — Brooke Primary PTFA</title>
	<meta name="description" content="What information the Brooke Primary PTFA website collects, and who handles it." />
</svelte:head>

<PageHeading title="Privacy" />
<section class="section privacy">
	<h2>This website</h2>
	<p>
		This website does not set cookies. It has no analytics, advertising or tracking, and no forms. Its fonts and images
		are served from this website, not from other companies.
	</p>
	<p>
		The website is hosted on Google's Firebase Hosting. As with any website, your browser sends Google your IP address
		and the address of the page you ask for, so that Google can send the page back. Google handles that information
		under the
		<a href="https://policies.google.com/privacy" target="_blank" rel="noopener">Google Privacy Policy</a>.
	</p>

	<h2>Other websites we link to</h2>
	<p>
		Links to PTA Events, the Charity Commission and the school website take you to those sites. Their own privacy
		policies apply there.
	</p>

	<h2>If you email us</h2>
	<p>
		Email sent to {charity.email} is received by the PTFA's Google Workspace account. If you have a question about
		your information, email us at that address.
	</p>

	<h2>Who we are</h2>
	<p>
		{charity.registeredName}, registered charity No. {charity.number}, {charity.address.join(', ')}.
	</p>
</section>

<style>
	.privacy {
		padding-top: 40px;
		display: flex;
		flex-direction: column;
		gap: 14px;
		max-width: 760px;
	}
	h2 {
		font-size: 24px;
		margin-top: 12px;
	}
	p {
		color: var(--fg-2);
	}
</style>
