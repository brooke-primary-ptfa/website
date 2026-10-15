import type { Accent } from '#lib/components/accents.ts';
import type { IconName } from '#lib/components/icons.ts';

export interface SiteEvent {
	/** ISO date, e.g. 2026-10-23. Weekday, day and month are derived from it. */
	date: string;
	title: string;
	time: string;
	location: string;
	price: string;
	accent: Accent;
	helpersWanted: boolean;
}

export interface Promotion {
	overline: string;
	title: string;
	text: string;
	buttonText: string;
	/** Absent until known; the button is not shown without it. */
	href?: string;
	icon: IconName;
	colour: 'blue' | 'pink';
}

/** Links that are absent are not shown on the site. */
export interface SiteLinks {
	ptaEvents: string;
	donate?: string;
	easyfundraising?: string;
	lottery?: string;
	facebook?: string;
	whatsapp?: string;
}

export interface SiteDocument {
	title: string;
	note: string;
	icon: IconName;
	href: string;
	linkKind: 'pdf' | 'external';
}

export interface CommitteeMember {
	role: string;
	name: string;
}

/** Lists that are empty are not shown on the site. */
export interface SiteContent {
	events: SiteEvent[];
	promotions: Promotion[];
	links: SiteLinks;
	documents: SiteDocument[];
	committee: CommitteeMember[];
}
