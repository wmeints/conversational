<script lang="ts">
	import PromptDesigner from '$components/prompt-designer.svelte';
	import { prompt, response, title } from '$lib/store';

	$title = 'Exercise 1: Prompt design - Step 1';
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
			<li class="breadcrumb-item"><a href="/exercises/01-prompt-design/">Prompt design</a></li>
			<li class="breadcrumb-item active">Step 1</li>
		</ol>
	</div>
</div>
<div class="container">
	<div class="row">
		<div class="col">
			<h1>Exercise 1: Prompt design - Step 1</h1>
			<p>
				In this first step, we're going to ask ChatGPT a basic question and see what sort of
				response it generates.
			</p>
			<PromptDesigner bind:prompt={$prompt} bind:response={$response} />
			<p class="mt-4">
				<a href="/exercises/01-prompt-design/step-2">Move on to step 2</a>
			</p>
		</div>
	</div>
</div>
