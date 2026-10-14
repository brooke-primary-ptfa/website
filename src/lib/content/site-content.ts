import type { SiteContent } from './types.ts';

const CHARITY_REGISTER_URL =
	'https://register-of-charities.charitycommission.gov.uk/charity-search/-/charity-details/1034707';

/**
 * Content from the Claude Design prototype. Slices 3 and 5–7 of DESIGN.md
 * replace each part with rows read from the PTFA Google Sheet.
 */
export const siteContent: SiteContent = {
	eventsAreExamples: true,
	events: [
		{ date: '2026-10-23', title: 'Autumn Bake Sale', time: '3:15pm', location: 'Playground', price: 'From 50p', accent: 'yellow', helpersWanted: true },
		{ date: '2026-11-13', title: 'Whole-School Disco', time: '5:30–7pm', location: 'School hall', price: '£3', accent: 'pink', helpersWanted: false },
		{ date: '2026-12-03', title: 'Elfridges Christmas Gift Shop', time: 'School day', location: 'School hall', price: 'Gifts from £1', accent: 'blue', helpersWanted: true }
	],
	promotions: [
		{
			overline: 'Now on',
			title: "Order your children's artwork tea towels",
			text: "Every child's drawing on one keepsake tea towel. Orders close Fri 20 Nov.",
			buttonText: 'Order now',
			icon: 'palette',
			colour: 'pink'
		},
		{
			overline: 'Tickets on sale',
			title: 'Whole-School Disco · Fri 13 Nov',
			text: 'Lights, music and glow sticks in the school hall, 5:30–7pm. £3 per child.',
			buttonText: 'Book tickets',
			href: 'https://www.pta-events.co.uk/ptfabrookeprimarynorfolk/',
			icon: 'music',
			colour: 'blue'
		}
	],
	links: {
		ptaEvents: 'https://www.pta-events.co.uk/ptfabrookeprimarynorfolk/',
		email: 'brookeprimaryptfa@gmail.com'
	},
	documents: [
		{ title: 'Constitution', note: 'Awaiting approved copy', icon: 'file-text', linkKind: 'pdf' },
		{ title: 'Latest annual accounts', note: 'Awaiting approved copy', icon: 'file-spreadsheet', linkKind: 'pdf' },
		{ title: 'AGM minutes', note: 'Awaiting approved copy', icon: 'file-text', linkKind: 'pdf' },
		{ title: 'Charity Commission entry', note: 'Charity No. 1034707', icon: 'landmark', href: CHARITY_REGISTER_URL, linkKind: 'external' }
	]
};

export { CHARITY_REGISTER_URL };
