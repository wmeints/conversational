<script lang="ts">
	import ModelResponse from '$components/model-response.svelte';
	import ErrorIndicator from '$components/error-indicator.svelte';
	import LoadingIndicator from '$components/loading-indicator.svelte';
	import { complete } from '$lib/api';

	let prompt: string = '';
	let response: string | undefined = undefined;
	let isLoading: boolean = false;
	let isFailed: boolean = false;

	async function submitPrompt() {
		try {
			isFailed = false;
			isLoading = true;
			response = await complete(prompt);
		} catch (e) {
			isLoading = false;
			isFailed = true;
		}
	}

	function resetPrompt() {
		prompt = '';
		response = undefined;
	}
</script>

<form class="mb-4">
	<div class="mb-3">
		<label for="prompt" class="form-label">Prompt</label>
		<textarea class="form-control" id="prompt" rows="10" bind:value={prompt} />
	</div>
	{#if isLoading}
		<div class="mb-3">
			<LoadingIndicator />
		</div>
	{/if}
	{#if isFailed}
		<div class="mb-3">
			<ErrorIndicator
				description="Can't get a response for your prompt right now. Please try again or ask the instructor for help."
			/>
		</div>
	{/if}
	<div class="mb-3">
		<button type="submit" class="btn btn-primary" on:click={submitPrompt}>Send</button>
		<button type="reset" class="btn btn-outline-secondary" on:click={resetPrompt}>Reset</button>
	</div>
</form>
{#if response}
	<ModelResponse content={response || ''} />
{/if}
