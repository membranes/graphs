<script lang="ts">
	let { data } = $props();
</script>

<h1>datasheets</h1>

<ul>
	<li><a href="/datasheets/motivation">motivation</a></li>
	<li><a href="/datasheets/collection">collection mechanism</a></li>
	<li><a href="/datasheets/features">data features</a></li>
    <li><a href="/datasheets/statements">nlp data statements</a></li>
	{#each data.summaries as { slug, title}}
		<li><a href="/datasheets/{slug}">{title}</a></li>
	{/each}
</ul>