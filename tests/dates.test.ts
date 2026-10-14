import { describe, expect, it } from 'vitest';
import { calendarParts } from '../src/lib/content/dates';

describe('calendarParts', () => {
	it.each([
		['2026-10-23', { weekday: 'Fri', day: 23, month: 'Oct' }],
		['2026-12-03', { weekday: 'Thu', day: 3, month: 'Dec' }],
		['2028-02-29', { weekday: 'Tue', day: 29, month: 'Feb' }]
	])('splits %s into weekday, day and month', (isoDate, expected) => {
		expect(calendarParts(isoDate)).toEqual(expected);
	});

	it.each(['23/10/2026', '2026-10-23T10:00', 'Friday', ''])('refuses %j, which is not YYYY-MM-DD', (input) => {
		expect(() => calendarParts(input)).toThrow('is not a date in YYYY-MM-DD form');
	});

	it.each(['2026-02-29', '2026-13-01', '2026-04-31'])('refuses %s, which does not exist', (input) => {
		expect(() => calendarParts(input)).toThrow('is not a real calendar date');
	});
});
