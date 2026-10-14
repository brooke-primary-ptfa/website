import { describe, expect, it } from 'vitest';
import { loadBuiltPage, textOf } from './helpers/built-site';

const page = loadBuiltPage();
const sectionText = (id: string) => {
	const section = page.querySelector(`#${id}`);
	if (!section) throw new Error(`No element with id "${id}" in the built page`);
	return textOf(section);
};

describe('home page content, prerendered without JavaScript', () => {
	it('has the PTFA title and description for search results', () => {
		// Given the built home page
		// When reading its head
		const title = page.querySelector('title');
		const description = page.querySelector('meta[name="description"]');

		// Then it names the PTFA and its charity number
		expect(title && textOf(title)).toBe('Brooke Primary PTFA — Little things. Big difference.');
		expect(description?.getAttribute('content')).toContain('Registered charity 1034707');
	});

	it('shows the hero headline', () => {
		const heading = page.querySelector('h1');

		expect(heading && textOf(heading)).toBe('Little things. Big difference.');
	});

	it('lists each event with its date, time, place and price', () => {
		const events = sectionText('events');

		expect(events).toContain('Autumn Bake Sale');
		expect(events).toContain('Whole-School Disco');
		expect(events).toContain('Elfridges Christmas Gift Shop');
		expect(events).toMatch(/Fri\s*23\s*Oct/);
		expect(events).toContain('School hall');
		expect(events).toContain('Gifts from £1');
	});

	it('labels the events as examples until real dates are confirmed', () => {
		expect(sectionText('events')).toContain('Example events — real dates to follow.');
	});

	it('shows the first promotion', () => {
		const promotions = page.querySelector('[aria-label="Promotions"]');

		expect(promotions && textOf(promotions)).toContain("Order your children's artwork tea towels");
	});

	it('has every section the navigation links to', () => {
		const navTargets = page
			.querySelectorAll('nav[aria-label="Main"] a')
			.map((link) => link.getAttribute('href'));

		expect(navTargets).toEqual(['#events', '#help', '#about', '#contact']);
		for (const target of navTargets) {
			expect(page.querySelector(target!), `${target} exists`).not.toBeNull();
		}
	});

	it('shows the charity number in the about section and the footer', () => {
		expect(sectionText('about')).toContain('1034707');
		expect(textOf(page.querySelector('footer')!)).toContain('No. 1034707');
	});

	it('shows the contact email', () => {
		expect(sectionText('contact')).toContain('brookeprimaryptfa@gmail.com');
	});
});
