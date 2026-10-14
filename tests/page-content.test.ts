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

	it('sends visitors to PTA Events for tickets while no events are listed', () => {
		// Given no confirmed events yet
		const link = page.querySelector('#events a[href="https://www.pta-events.co.uk/ptfabrookeprimarynorfolk/"]');

		// Then the section still links to PTA Events
		expect(link && textOf(link)).toBe('All events and tickets');
	});

	it('shows no placeholder or example content', () => {
		const text = textOf(page);

		expect(text).not.toContain('Example events');
		expect(text).not.toContain('To be confirmed');
		expect(text).not.toContain('Awaiting approved copy');
		expect(page.querySelector('[aria-label="Promotions"]')).toBeNull();
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

	it.each(['about', 'footer'])('shows the registered charity name and number in the %s', (where) => {
		// Given the Charity Commission registers the PTFA under a longer name
		const text = where === 'footer' ? textOf(page.querySelector('footer')!) : sectionText(where);

		// Then a reviewer can match the site to the register
		expect(text).toContain('Brooke Parent-Teacher and Friends Association');
		expect(text).toContain('1034707');
	});

	it('gives an email address on the PTFA domain, never a Gmail one', () => {
		expect(sectionText('contact')).toContain('treasurer@brookeprimaryptfa.org.uk');
		expect(page.outerHTML).not.toContain('gmail.com');
	});
});
