<script lang="ts">
	import { renderMarkdown } from '$lib/markdown';
	export let content: string | null = '';
</script>

<div class="card">
	<div class="card-body">
		<p class="text-dimmed">Model response:</p>
		{@html renderMarkdown(content || '')}
	</div>
</div>
