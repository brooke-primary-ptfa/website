<script lang="ts">
	import Icon from '#lib/components/Icon.svelte';
	import SectionHeading from '#lib/components/SectionHeading.svelte';
	import { charity } from '#lib/content/charity.ts';

	const { latestFinances: finances } = charity;
</script>

<section id="governance" class="section">
	<div class="body">
		<SectionHeading>How we're run</SectionHeading>
		<p>
			{charity.shortName} is an independent charity, run by elected trustees in partnership with the school. Everyone
			is welcome at our meetings. The current trustees are listed on the
			<a href={charity.register.trustees} target="_blank" rel="noopener">Charity Commission register</a>.
		</p>
	</div>
</section>

<section id="charity-details" class="section">
	<SectionHeading>Charity details</SectionHeading>
	<dl>
		<dt>Registered name</dt>
		<dd>{charity.registeredName}</dd>
		<dt>Charity number</dt>
		<dd>{charity.number}, registered with the Charity Commission for England and Wales on {charity.registeredOn}</dd>
		<dt>Registered address</dt>
		<dd><address>{charity.address.join(', ')}</address></dd>
		<dt>Governing document</dt>
		<dd>{charity.governingDocument}</dd>
		<dt>Area of benefit</dt>
		<dd>{charity.areaOfBenefit}</dd>
		<dt>Latest accounts</dt>
		<dd>
			Year ending {finances.yearEnding}: income {finances.income}, spending {finances.expenditure}.
			<a href={charity.register.accounts} target="_blank" rel="noopener">
				Accounts and annual returns <Icon name="external-link" size={16} />
			</a>
		</dd>
	</dl>
	<p class="register-link">
		<a href={charity.register.entry} target="_blank" rel="noopener">
			View our entry on the Charity Commission register <Icon name="external-link" size={16} />
		</a>
	</p>
</section>

<style>
	.body {
		display: flex;
		flex-direction: column;
		gap: 14px;
		max-width: 720px;
	}
	.body p {
		font-size: 18px;
		color: var(--fg-2);
	}
	dl {
		margin: 24px 0 0;
		background: var(--white);
		border: 1px solid var(--border-1);
		border-radius: 24px;
		box-shadow: var(--shadow-1);
		padding: 8px 24px;
		display: grid;
		grid-template-columns: minmax(160px, 220px) 1fr;
	}
	dt,
	dd {
		padding: 14px 0;
		margin: 0;
	}
	dt:not(:first-of-type),
	dd:not(:first-of-type) {
		border-top: 1px solid var(--border-1);
	}
	dt {
		font-weight: 700;
	}
	dd {
		color: var(--fg-2);
	}
	address {
		font-style: normal;
	}
	a {
		font-weight: 600;
		display: inline-flex;
		gap: 6px;
		align-items: center;
	}
	.register-link {
		margin-top: 16px;
	}
	@media (max-width: 599px) {
		dl {
			grid-template-columns: 1fr;
		}
		dd {
			padding-top: 0;
		}
		dd:not(:first-of-type) {
			border-top: 0;
		}
	}
</style>
