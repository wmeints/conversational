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
		<h1>Oefening 1: Prompt design - Stap 2</h1>
		<p>
			In de vorige stap hebben we een basisprompt ontworpen. Het antwoord is goed, maar kan nog
			beter. Laten we een paar dingen proberen om het te verbeteren.
		</p>
		<p>
			Wijzig de volgende onderdelen van jouw prompt en kijk hoe het resultaat beter wordt. Zorg
			ervoor dat je een reactie krijgt na elke wijziging.
		</p>
		<ul>
			<li>Laat ChatGPT een rol spelen, bijvoorbeeld de rol van hele onhandige kok.</li>
			<li>Geef voorkeur aan een bepaalde keuken, bijvoorbeeld: chinees.</li>
			<li>
				Zorg voor bepaalde instructies of eisen, bijvoorbeeld: het moet in 15 minuten klaar zijn.
			</li>
			<li>
				Verander de schrijfstijl, laat ChatGPT een recept genereren door straattaal te gebruiken.
			</li>
			<li>Wil je een kort recept? Geef aan dat het slechts 100 woorden mag bevatten.</li>
		</ul>

		<p>
			De mogelijkheden zijn eindeloos, kom zelf met ideeën om jouw recept beter te maken. Deel de
			resultaten met andere studenten.
		</p>
		<PromptDesigner bind:prompt={$prompt} bind:response={$response} />
		<!-- <p>
			<a href="/exercises/02-few-shot-learning/" class="mt-4">Continue with the second exercise</a>
		</p> -->
	</div>
</div>
