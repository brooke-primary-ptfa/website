export interface CalendarParts {
	weekday: string;
	day: number;
	month: string;
}

const ISO_DATE = /^(\d{4})-(\d{2})-(\d{2})$/;

/** Splits an ISO date into the parts an event card shows. Refuses anything that is not a real date. */
export function calendarParts(isoDate: string): CalendarParts {
	const match = ISO_DATE.exec(isoDate);
	if (!match) throw new Error(`"${isoDate}" is not a date in YYYY-MM-DD form`);
	const [, year, month, day] = match.map(Number);
	const date = new Date(Date.UTC(year, month - 1, day));
	if (date.getUTCMonth() !== month - 1 || date.getUTCDate() !== day) {
		throw new Error(`"${isoDate}" is not a real calendar date`);
	}
	const format = (options: Intl.DateTimeFormatOptions) =>
		new Intl.DateTimeFormat('en-GB', { ...options, timeZone: 'UTC' }).format(date);
	return { weekday: format({ weekday: 'short' }), day, month: format({ month: 'short' }) };
}
