/** The four brand colours content can choose between. */
export type Accent = 'blue' | 'green' | 'yellow' | 'pink';

/** Colour roles for each accent: soft background, text/icon, solid fill, text on solid. */
export const accentColours: Record<Accent, { tint: string; ink: string; solid: string; solidInk: string }> = {
	blue: { tint: 'var(--brooke-blue-50)', ink: 'var(--brooke-blue-600)', solid: 'var(--brooke-blue-500)', solidInk: '#fff' },
	green: { tint: 'var(--duck-green-50)', ink: 'var(--duck-green-700)', solid: 'var(--duck-green-700)', solidInk: '#fff' },
	yellow: { tint: 'var(--duckbill-yellow-100)', ink: 'var(--duckbill-yellow-700)', solid: 'var(--duckbill-yellow-400)', solidInk: 'var(--ink-900)' },
	pink: { tint: 'var(--pond-pink-50)', ink: 'var(--pond-pink-600)', solid: 'var(--pond-pink-500)', solidInk: '#fff' }
};
