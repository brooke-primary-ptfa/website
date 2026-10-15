import { describe, expect, it } from 'vitest';
import { PAGES, loadBuiltPage, textAt, textOf } from './helpers/built-site';

const home = loadBuiltPage('index.html');

describe('page content, prerendered without JavaScript', () => {
	it('has the PTFA title and description on the home page', () => {
		expect(textAt(home, 'title', 'index.html')).toBe('Brooke Primary PTFA — Little things. Big difference.');
		expect(home.querySelector('meta[name="description"]')?.getAttribute('content')).toContain('Registered charity 1034707');
	});

	it('shows the hero headline', () => {
		expect(textAt(home, 'h1', 'index.html')).toBe('Little things. Big difference.');
	});

	it('summarises the mission on the home page and links to the full version', () => {
		const summary = textAt(home, '#what-we-do', 'index.html');

		expect(summary).toContain('advance the education of pupils');
		expect(home.querySelector('#what-we-do a[href="/about"]')).not.toBeNull();
	});

	it('sends visitors to PTA Events for tickets from the What\'s on page', () => {
		const page = loadBuiltPage('whats-on.html');
		const link = page.querySelector('main a[href="https://www.pta-events.co.uk/ptfabrookeprimarynorfolk/"]');

		expect(link && textOf(link)).toBe('All events and tickets');
	});

	it.each(PAGES)('shows no placeholder or example content on $path', ({ file }) => {
		const page = loadBuiltPage(file);
		const text = textOf(page);

		expect(text).not.toContain('Example events');
		expect(text).not.toContain('To be confirmed');
		expect(text).not.toContain('Awaiting approved copy');
		expect(page.querySelector('[aria-label="Promotions"]')).toBeNull();
	});
});
