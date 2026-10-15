import { charity } from './charity.ts';
import type { SiteContent } from './types.ts';

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
		ptaEvents: 'https://www.pta-events.co.uk/ptfabrookeprimarynorfolk/'
	},
	documents: [
		{ title: 'Charity Commission entry', note: 'Charity No. 1034707', icon: 'landmark', href: charity.register.entry, linkKind: 'external' }
	],
	committee: []
};
