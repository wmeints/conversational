import { derived, writable } from 'svelte/store';

export interface Sample {
  text: string;
  tags: string;
}

export const title = writable('');
export const prompt = writable('');
export const response = writable('');
export const samples = writable<Sample[]>([]);

export const fewshotInput = derived([response, samples], ([$response, $samples]) => {
  if (!$response || !$samples || $samples.length === 0) return '';

  const divider = '----------------------------------------';

  const sampleData = $samples
    .map((sample: Sample) => `${sample.text}\nTags: ${sample.tags}\n`)
    .join(`${divider}\n`);

  return `Given the following examples\n\n${divider}\n${sampleData}${divider}\n\n${$response}\n\nPlease write a linkedin post, use the tags above as inspiration`;
});
