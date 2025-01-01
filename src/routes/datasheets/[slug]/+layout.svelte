<script>
	let { data, children } = $props();
</script>

<div class="layout">
	<main>
		{@render children()}
	</main>
	<aside>
		{#each data.summaries as {slug, title} }
			<li><a href="/datasheets/{slug}">{title}</a></li>
		{/each}
	</aside>
</div>

<style>
	@media (min-width: 640px) {
		.layout {
			display: grid;
			gap: 2em;
			grid-template-columns: 1fr 16em;
		}
	}
</style>
