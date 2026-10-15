import { describe, expect, it } from 'vitest';
import { PAGES, listBuiltFiles, loadBuiltPage, textAt } from './helpers/built-site';

const builtFiles = new Set(listBuiltFiles());
const pages = PAGES.map((page) => ({ ...page, html: loadBuiltPage(page.file) }));

describe('site pages', () => {
	it('builds a file for every page', () => {
		expect(PAGES.map((page) => page.file).filter((file) => !builtFiles.has(file))).toEqual([]);
	});

	it('gives every page its own title and description', () => {
		const titles = pages.map((page) => textAt(page.html, 'title', page.file));
		const descriptions = pages.map((page) => page.html.querySelector('meta[name="description"]')?.getAttribute('content'));

		expect(new Set(titles).size).toBe(PAGES.length);
		expect(new Set(descriptions).size).toBe(PAGES.length);
		expect(descriptions.every(Boolean)).toBe(true);
	});

	it.each(PAGES)('links $path to each section page from the main navigation', ({ file }) => {
		const page = loadBuiltPage(file);
		const navTargets = page.querySelectorAll('nav[aria-label="Main"] a').map((link) => link.getAttribute('href'));

		expect(navTargets).toEqual(['/whats-on', '/get-involved', '/about', '/contact']);
	});

	it.each(PAGES)('only links $path to pages that exist', ({ file }) => {
		// Given every local link on the page
		const page = loadBuiltPage(file);
		const localPaths = page
			.querySelectorAll('a')
			.map((link) => link.getAttribute('href') ?? '')
			.filter((href) => href.startsWith('/'))
			.map((href) => href.split('#')[0]);

		// Then each one is a built page or file
		const missing = localPaths.filter((path) => {
			const page = PAGES.find((candidate) => candidate.path === path);
			return page ? false : !builtFiles.has(path.slice(1));
		});
		expect(missing).toEqual([]);
	});
});
