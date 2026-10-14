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
});
