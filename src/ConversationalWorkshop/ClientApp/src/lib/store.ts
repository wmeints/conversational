import { derived, writable } from 'svelte/store';

export interface Sample {
	text: string;
	tags: string;
}

export const prompt = writable('');
export const response = writable('');
export const samples = writable<Sample[]>([]);

export const fewshotInput = derived([response, samples], ([$response, $samples]) => {
	if (!$response || !$samples) return '';

	const sampleData = $samples
		.map((sample: Sample) => `${sample.text}\n\nTags: ${sample.tags}`)
		.join('\n----------------------------------------\n\n');

	return `Given the following examples\n\n${sampleData}\n\n${$response}\n\nPlease write a linkedin post, use the tags above as inspiration`;
});
