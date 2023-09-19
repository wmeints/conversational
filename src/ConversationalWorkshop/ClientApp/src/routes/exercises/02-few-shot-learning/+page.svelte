<script lang="ts">
	import PromptDesigner from '$components/prompt-designer.svelte';
	import { samples, response, fewshotInput, type Sample } from '$lib/store';

	function addSample() {
		$samples = [...$samples, { text: '', tags: '' }];
	}

	function removeSample(index: number) {
		$samples = $samples.filter((_, i) => i !== index);
	}
</script>

<div class="container">
	<div class="nav">
		<ol class="breadcrumb">
			<li class="breadcrumb-item">
				<a href="/">Advanced Prompt Engineering</a>
			</li>
			<li class="breadcrumb-item">
				<a href="/exercises">Exercises</a>
			</li>
			<li class="breadcrumb-item active">Few-shot learning</li>
		</ol>
	</div>
</div>
<div class="container">
	<div class="col">
		<h1>Exercise 2: Few-shot learning</h1>
		<p>
			In this exercise we're going to use a technique called few-shot learning. We're going to
			perform three steps:
		</p>
		<ul>
			<li>
				First, we're going to give the model a few examples of tags that we used for linkedin posts
			</li>
			<li>Next, we're going to give the model our article</li>
			<li>Finally, we're going to ask the model to give us a linkedin post for our article</li>
		</ul>
		<p>Let's get started</p>
		<h2>Step 1: Enter samples</h2>
		<p>
			Please add a few samples of linkedIn posts and the associated tags. Use a comma to separate
			tags.
		</p>
		{#each $samples as sample, index}
			<div class="card mb-3">
				<div class="card-body">
					<label class="label" for={`prompt-${index}`}>Post content</label>
					<textarea
						id={`prompt-${index}`}
						value={sample.text}
						class="form-control mb-3"
						placeholder="Enter the LinkedIn post content here."
					/>
					<label for={`tags-${index}`}>Tags</label>
					<input
						id={`tags-${index}`}
						type="text"
						class="form-control mb-3"
						value={sample.tags}
						placeholder="Enter the tags here. Separate tags with a comma."
					/>
					<button class="btn btn-outline-secondary" on:click={() => removeSample(index)}
						>Remove</button
					>
				</div>
			</div>
		{/each}
		<button class="btn btn-primary mb-4" on:click={addSample}>Add another sample</button>

		<h2 class="mt-2">Step 2: Enter your content</h2>
		<p>Please enter the text of your article.</p>
		<textarea class="form-control mb-3" value={$response} rows="15" />

		<h2>Final prompt</h2>
		<p>
			Now that we've collected the samples, and the article, we can create the prompt. For your
			convenience we've created the prompt for you based on what you entered above.
		</p>
		<p>Note the structure of the prompt. It consists of three parts:</p>
		<ul>
			<li>An introduction to the task</li>
			<li>Context information for the model to learn from</li>
			<li>The task that the model needs to perform</li>
		</ul>
		<p>Press send to submit the prompt!</p>
		<PromptDesigner prompt={$fewshotInput} />
	</div>
</div>
