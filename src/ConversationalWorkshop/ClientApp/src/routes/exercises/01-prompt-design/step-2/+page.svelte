<script>
	import PromptDesigner from '$components/prompt-designer.svelte';
	import { prompt, response, title } from '$lib/store';

	$title = 'Exercise 1: Prompt design - Step 2';
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
			<li class="breadcrumb-item active">Step 2</li>
		</ol>
	</div>
</div>
<div class="container">
	<div class="col">
		<h1>Exercise 1: Prompt design - Step 2</h1>
		<p>
			In the previous step we designed a basic prompt. The answer is rather dissapointing. Let's try
			a few things to improve it.
		</p>
		<p>
			Change the following aspects of your prompt, and see how it improves. Make sure to generate a
			response after each change.
		</p>
		<ul>
			<li>Let ChatGPT play a role, for example, let it play the role of marketeer.</li>
			<li>Change the style, tell ChatGPT to make a compelling argument.</li>
			<li>Do you prefer long or short? Tell ChatGPT you want it in 200 words or 2 sentences.</li>
			<li>
				Change it up completely! Ask ChatGPT to give you a bullet list of reasons why you should use
				generative AI in marketing
			</li>
		</ul>
		<PromptDesigner bind:prompt={$prompt} bind:response={$response} />
		<p>
			<a href="/exercises/02-few-shot-learning/" class="mt-4">Continue with the second exercise</a>
		</p>
	</div>
</div>
