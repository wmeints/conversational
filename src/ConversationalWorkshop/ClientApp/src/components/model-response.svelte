<script lang="ts">
	export let content: string | null = '';
</script>

<div class="card">
	<div class="card-body">
		<p class="text-dimmed">Bot said:</p>
		{@html content}
	</div>
</div>
