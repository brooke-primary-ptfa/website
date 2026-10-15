import { describe, expect, it } from 'vitest';
import { PAGES, listBuiltFiles, loadBuiltPage } from './helpers/built-site';

const builtFiles = new Set(listBuiltFiles());

describe.each(PAGES)('structure of $path', ({ file }) => {
	const page = loadBuiltPage(file);

	it('never nests a button or link inside a link', () => {
		// Given the prototype wrapped <button> elements in <a> elements
		// When looking for interactive elements inside links
		const nested = page.querySelectorAll('a button, a a');

		// Then there are none
		expect(nested.map((element) => element.outerHTML.slice(0, 80))).toEqual([]);
	});

	it('has no placeholder links that go nowhere', () => {
		const placeholderLinks = page
			.querySelectorAll('a')
			.filter((link) => ['#', ''].includes(link.getAttribute('href') ?? ''))
			.map((link) => link.textContent.trim());

		expect(placeholderLinks).toEqual([]);
	});

	it('has none of the prototype preview controls', () => {
		const html = page.outerHTML;

		expect(html).not.toContain('__bundler');
		expect(html).not.toContain('x-dc');
		expect(html).not.toMatch(/data-screen-label/);
	});

	it('renders every inline style as CSS, not leftover code', () => {
		// Given a destructured $derived once rendered a function into a style attribute
		const badStyles = page
			.querySelectorAll('[style]')
			.map((element) => element.getAttribute('style') ?? '')
			.filter((style) => /function|=>|undefined|\[object/.test(style));

		expect(badStyles).toEqual([]);
	});

	it('serves every local image it references', () => {
		const paths = page.querySelectorAll('img').flatMap((img) => [
			img.getAttribute('src') ?? '',
			...(img.getAttribute('srcset') ?? '').split(',').map((entry) => entry.trim().split(' ')[0])
		]);
		const missing = paths.filter((path) => path.startsWith('/') && !builtFiles.has(path.slice(1)));

		expect(paths.length).toBeGreaterThan(0);
		expect(missing).toEqual([]);
	});

	it('gives every image alt text', () => {
		const missingAlt = page.querySelectorAll('img').filter((img) => img.getAttribute('alt') === undefined);

		expect(missingAlt.map((img) => img.getAttribute('src'))).toEqual([]);
	});

	it('has exactly one main heading', () => {
		expect(page.querySelectorAll('h1')).toHaveLength(1);
	});
});
