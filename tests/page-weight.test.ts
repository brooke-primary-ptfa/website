import { describe, expect, it } from 'vitest';
import { builtFileSize, listBuiltFiles } from './helpers/built-site';

// Firebase Hosting's free plan allows about 360 MB of transfer a day
// (DESIGN.md). 500 KB per first visit allows roughly 700 first visits a day.
const FIRST_VISIT_BUDGET_BYTES = 500 * 1024;

// Files a phone downloads on a first visit: the page, its scripts and styles,
// the fonts, and the smaller image sizes. The large hero image is only
// fetched by wide or high-density screens.
const isFetchedOnPhoneFirstVisit = (path: string) =>
	path === 'index.html' ||
	path.startsWith('_app/') ||
	path.startsWith('fonts/') ||
	/^images\/(school-from-above-640|badge-(44|88))\.webp$/.test(path);

describe('page weight', () => {
	it('keeps a first visit on a phone under the transfer budget', () => {
		// Given the built files a phone fetches on a first visit
		const files = listBuiltFiles().filter(isFetchedOnPhoneFirstVisit);

		// When adding up their sizes
		const total = files.reduce((sum, path) => sum + builtFileSize(path), 0);

		// Then the total is within budget
		expect(files).toContain('index.html');
		expect(total).toBeLessThan(FIRST_VISIT_BUDGET_BYTES);
	});
});
