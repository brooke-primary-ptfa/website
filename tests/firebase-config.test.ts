import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { describe, expect, it } from 'vitest';

const root = join(import.meta.dirname, '..');
const readJson = (name: string) => JSON.parse(readFileSync(join(root, name), 'utf8'));

describe('Firebase Hosting configuration', () => {
	it('serves the SvelteKit build folder', () => {
		expect(readJson('firebase.json').hosting.public).toBe('build');
	});

	it('targets the PTFA Firebase project', () => {
		expect(readJson('.firebaserc').projects.default).toBe('tactical-racer-511622-r1');
	});

	it('makes browsers and the CDN check for a newer page on every visit', () => {
		// Given Firebase's default lets pages be cached for an hour, a published
		// change could stay invisible for that long
		const catchAll = readJson('firebase.json').hosting.headers.find(
			(rule: { source: string }) => rule.source === '**'
		);
		const cacheControl = catchAll.headers.find((header: { key: string }) => header.key === 'Cache-Control');

		expect(cacheControl?.value).toBe('no-cache');
	});
});

