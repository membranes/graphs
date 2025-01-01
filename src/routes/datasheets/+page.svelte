<script lang="ts">
	let { data } = $props();
</script>

<h1>datasheets</h1>

<ul>
	{#each data.summaries as {slug, title}}
		<li><a href="/datasheets/{slug}">{title}</a></li>
	{/each}
</ul>