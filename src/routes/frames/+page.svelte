<script lang="ts">
    export let data;
    const frames = data.frames;
</script>

<div class="frames_page">
    <div class="frames_grid">
        <p></p>
        <h2>Critical Preliminaries</h2>
    </div>
    <div class="frames_grid">
        {#each frames as frame}
            <p></p>
            <h3>{@html frame.title}</h3>
            <p>{@html frame.desc}</p>
            <p></p>
        {/each}        
    </div>
</div>

<style>
    .frames_page h2 {
        font-size: 40px;
        margin-bottom: 20px;
    }
    h2 {
        font-variant: small-caps;
    }
    .frames_grid {
        display: grid;
        grid-template-columns: 1fr 1fr 3fr 1fr;
        gap: 20px;
    }
    @media (max-width: 600px) {
        .frames_grid {
            grid-template-columns: 1fr;
        }
    }
</style>


