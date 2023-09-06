async function getModelResponse(prompt: string): Promise<string> {
	const response = await fetch('/api/chat', {
		method: 'POST',
		body: JSON.stringify({ prompt }),
		headers: {
			'Content-Type': 'application/json',
			Accept: 'application/json'
		}
	});

	const data = await response.json();

	return data;
}
