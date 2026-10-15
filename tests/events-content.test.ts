import { describe, expect, it } from 'vitest';
import { loadBuiltPage, textOf } from './helpers/built-site';

const page = loadBuiltPage('whats-on.html');
const main = textOf(page.querySelector('main')!);

describe("What's on page", () => {
	it.each([
		['Halloween Family Fun', /Sat\s*31\s*Oct/, '4:30pm onwards', 'Treats, colouring and a drink for the children'],
		['Glow lights and glow toys', /Sat\s*7\s*Nov/, '6pm–7pm', 'Brooke Village Hall']
	])('describes %s with its date, time and details', (title, date, time, detail) => {
		expect(main).toContain(title);
		expect(main).toMatch(date);
		expect(main).toContain(time);
		expect(main).toContain(detail);
	});

	it('only links an event card when the event has a booking link', () => {
		// Given neither event is booked through PTA Events
		const linkedCards = page.querySelectorAll('main a .card');

		expect(linkedCards).toHaveLength(0);
	});
});

describe('Get involved page', () => {
	it('lists the pre-loved uniform prices from the PTFA poster', () => {
		const text = textOf(loadBuiltPage('get-involved.html').querySelector('main')!);

		expect(text).toContain('Logo jumpers, cardigans and fleeces £3');
		expect(text).toContain('Logo polo shirts and PE tops £2');
		expect(text).toContain('Non-logo items £1');
		expect(text).toContain('Bags £2');
		expect(text).toContain('donations of Brooke logo items');
	});
});
