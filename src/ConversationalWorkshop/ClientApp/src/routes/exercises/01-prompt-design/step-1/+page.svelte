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
			<h1>Oefening 1: Het maken van een eerste Prompt</h1>
			<p>
				Laten we beginnen door het model te vragen een stuk tekst te schrijven over een recept met
				het thema 'Food of the future'.
			</p>
			<p>Bijvoorbeeld: Schrijf een recept over het thema 'Food of the future'?</p>
			<PromptDesigner bind:prompt={$prompt} bind:response={$response} />
			<p class="mt-4">
				<a href="/exercises/01-prompt-design/step-2">Ga verder met stap 2</a>
			</p>
		</div>
	</div>
</div>
