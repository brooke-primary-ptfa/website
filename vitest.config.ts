import { defineConfig } from 'vitest/config';

// Tests inspect the prerendered output in build/, so they run without the
// SvelteKit plugin. `npm test` builds first.
export default defineConfig({
	test: {
		include: ['tests/**/*.test.ts']
	}
});
