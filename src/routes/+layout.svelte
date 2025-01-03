<script>
    import Navigation from "$lib/Navigation.svelte";
    import Footer from "$lib/Footer.svelte";
    import '../styles/global.css';
</script>

<div class="layout">    
    <Navigation />
    <slot />
    <Footer />
</div>
