<script>
	import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
	import '../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';

	import NavigationBar from '../components/navigation-bar.svelte';
	import { title } from '$lib/store';
</script>

<svelte:head>
	<title>{$title} - Prompt engineering workshop</title>
</svelte:head>

<NavigationBar />
<slot />
