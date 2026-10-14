import type { SiteContent } from './types.ts';

const CHARITY_REGISTER_URL =
	'https://register-of-charities.charitycommission.gov.uk/charity-search/-/charity-details/1034707';

/**
 * Content from the Claude Design prototype. Slices 3 and 5–7 of DESIGN.md
 * replace each part with rows read from the PTFA Google Sheet.
 */
export const REGISTERED_NAME = 'Brooke Parent-Teacher and Friends Association';

/**
 * Only confirmed content. The prototype's example events and promotions,
 * "To be confirmed" committee and "Awaiting approved copy" documents are left
 * out until real versions exist. Slices 3 and 5–7 of DESIGN.md move each list
 * to the PTFA Google Sheet.
 */
export const siteContent: SiteContent = {
	events: [],
	promotions: [],
	links: {
		ptaEvents: 'https://www.pta-events.co.uk/ptfabrookeprimarynorfolk/',
		email: 'treasurer@brookeprimaryptfa.org.uk'
	},
	documents: [
		{ title: 'Charity Commission entry', note: 'Charity No. 1034707', icon: 'landmark', href: CHARITY_REGISTER_URL, linkKind: 'external' }
	],
	committee: []
};

export { CHARITY_REGISTER_URL };
