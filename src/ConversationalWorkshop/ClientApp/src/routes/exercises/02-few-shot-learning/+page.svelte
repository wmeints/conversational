<script lang="ts">
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
					<label class="label">Post content</label>
					<textarea
						value={sample.text}
						class="form-control mb-3"
						placeholder="Enter the LinkedIn post content here."
					/>
					<label>Tags</label>
					<input
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
		<textarea class="form-control mb-3" value={$fewshotInput} rows="15" />
	</div>
</div>
