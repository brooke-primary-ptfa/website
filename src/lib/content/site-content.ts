import { charity } from './charity.ts';
import type { SiteContent } from './types.ts';

/**
 * Only confirmed content. The prototype's example events and promotions,
 * "To be confirmed" committee and "Awaiting approved copy" documents are left
 * out until real versions exist. Slices 3 and 5–7 of DESIGN.md move each list
 * to the PTFA Google Sheet.
 */
export const siteContent: SiteContent = {
	// From the PTFA's event posters, October 2026.
	events: [
		{
			date: '2026-10-31',
			title: 'Halloween Family Fun',
			time: '4:30pm onwards',
			location: 'With The White Lion, Brooke',
			price: 'Free',
			accent: 'pink',
			helpersWanted: false,
			details:
				"Treats, colouring and a drink for the children, in partnership with The White Lion public house. Donations welcome: they all go towards the pupils' experience at school."
		},
		{
			date: '2026-11-07',
			title: 'Glow lights and glow toys at Fireworks Night',
			time: '6pm–7pm',
			location: 'Brooke Village Hall',
			price: '£6 for one, £10 for two',
			accent: 'blue',
			helpersWanted: false,
			details: 'The PTFA is selling glow lights and glow toys at the village fireworks night.'
		}
	],
	promotions: [],
	links: {
		ptaEvents: 'https://www.pta-events.co.uk/ptfabrookeprimarynorfolk/'
	},
	documents: [
		{ title: 'Charity Commission entry', note: 'Charity No. 1034707', icon: 'landmark', href: charity.register.entry, linkKind: 'external' }
	],
	committee: []
};
