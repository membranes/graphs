<script lang="ts">
    let { children } = $props();
</script>

<nav>
    <a href="/">home</a>
    <a href="/about">about</a>
    <a href="/datasheets">datasheets</a>
</nav>

{@render children()}