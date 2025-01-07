<script>
    import Navigation from "$lib/Navigation.svelte";
    import Footer from "$lib/Footer.svelte";
    import '../styles/global.css';
</script>

<div class="layout">
    <div class="layout-item">
        <h1>$\xi$</h1>
    </div>
    <div class="layout-item"></div>

    <div class="layout-item"><Navigation /></div>
    <div class="layout-item"><slot /></div>
    
    <div class="layout-item"></div>
    <div class="layout-item"><Footer /></div>
</div>
