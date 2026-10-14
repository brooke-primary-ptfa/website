import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';
import { parse, type HTMLElement } from 'node-html-parser';

export const BUILD_DIR = join(import.meta.dirname, '..', '..', 'build');

export function readBuiltFile(path: string): string {
	const full = join(BUILD_DIR, path);
	if (!existsSync(full)) {
		throw new Error(`${full} does not exist. Run "npm run build" before the tests.`);
	}
	return readFileSync(full, 'utf8');
}

export function loadBuiltPage(path = 'index.html'): HTMLElement {
	return parse(readBuiltFile(path));
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
