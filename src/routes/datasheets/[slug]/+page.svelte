<script lang='ts'>
	let { data } = $props();
</script>

<h1>{ data.node.title }</h1>
<div>{@html data.node.content}</div>
