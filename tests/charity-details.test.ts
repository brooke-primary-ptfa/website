import { describe, expect, it } from 'vitest';
import { PAGES, loadBuiltPage, textAt, textOf } from './helpers/built-site';

// What Goodstack asked for: the charity ID, a physical street address and a
// mission statement, matching the Charity Commission register.
const REGISTERED_NAME = 'Brooke Parent-Teacher and Friends Association';
const ADDRESS_PARTS = ['Brooke Primary School', 'High Green', 'Norwich', 'Norfolk', 'NR15 1HP'];
const CONTACT_EMAIL = 'contact@brookeprimaryptfa.org.uk';

describe('charity details', () => {
	it.each(PAGES)('shows the registered name, number and address in the footer of $path', ({ file }) => {
		const footer = textAt(loadBuiltPage(file), 'footer', file);

		expect(footer).toContain(REGISTERED_NAME);
		expect(footer).toContain('1034707');
		for (const part of ADDRESS_PARTS) expect(footer).toContain(part);
	});

	it('states the mission from the charitable objects on the About page', () => {
		const mission = textAt(loadBuiltPage('about.html'), '#mission', 'about.html');

		expect(mission).toContain('advance the education of pupils');
		expect(mission).toContain('developing effective relationships between the staff, parents and others');
		expect(mission).toContain('providing facilities or equipment');
	});

	it('gives the charity facts on the About page', () => {
		const details = textAt(loadBuiltPage('about.html'), '#charity-details', 'about.html');

		expect(details).toContain('1034707');
		expect(details).toContain('8 March 1994');
		expect(details).toContain('£4,188');
		expect(details).toContain('£12,481');
	});

	it('gives the registered address and email on the Contact page', () => {
		const contact = textOf(loadBuiltPage('contact.html').querySelector('main')!);

		for (const part of ADDRESS_PARTS) expect(contact).toContain(part);
		expect(contact).toContain(CONTACT_EMAIL);
	});

	it.each(PAGES)('uses only the registered contact email on $path', ({ file }) => {
		const emails = loadBuiltPage(file).outerHTML.match(/[\w.+-]+@[\w-]+\.[\w.]+/g) ?? [];

		expect(emails.filter((email) => email !== CONTACT_EMAIL)).toEqual([]);
	});

	it('says on the Privacy page that the site sets no cookies', () => {
		expect(textOf(loadBuiltPage('privacy.html').querySelector('main')!)).toContain('does not set cookies');
	});
});
