<script>
	import NavigationBar from '../components/navigation-bar.svelte';
	import { title } from '$lib/store';
</script>

<svelte:head>
	<title>{$title} - Prompt engineering workshop</title>
</svelte:head>

<NavigationBar />
<slot />
