import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';
import { parse, type HTMLElement } from 'node-html-parser';

export const BUILD_DIR = join(import.meta.dirname, '..', '..', 'build');

/** Every page the site has, by URL path, with the file the static build writes for it. */
export const PAGES = [
	{ path: '/', file: 'index.html' },
	{ path: '/about', file: 'about.html' },
	{ path: '/whats-on', file: 'whats-on.html' },
	{ path: '/get-involved', file: 'get-involved.html' },
	{ path: '/contact', file: 'contact.html' },
	{ path: '/privacy', file: 'privacy.html' }
] as const;

export function readBuiltFile(path: string): string {
	const full = join(BUILD_DIR, path);
	if (!existsSync(full)) {
		throw new Error(`${full} does not exist. Run "npm run build" before the tests.`);
	}
	return readFileSync(full, 'utf8');
}

export function loadBuiltPage(file = 'index.html'): HTMLElement {
	return parse(readBuiltFile(file));
}

export function listBuiltFiles(dir = BUILD_DIR): string[] {
	return readdirSync(dir).flatMap((name) => {
		const full = join(dir, name);
		return statSync(full).isDirectory() ? listBuiltFiles(full) : [relative(BUILD_DIR, full)];
	});
}

export function builtFileSize(path: string): number {
	return statSync(join(BUILD_DIR, path)).size;
}

export function textOf(element: HTMLElement): string {
	return element.textContent.replace(/\s+/g, ' ').trim();
}

/** The text of the element matching `selector`, or a loud failure naming the page. */
export function textAt(page: HTMLElement, selector: string, file: string): string {
	const element = page.querySelector(selector);
	if (!element) throw new Error(`No element matches "${selector}" in ${file}`);
	return textOf(element);
}
