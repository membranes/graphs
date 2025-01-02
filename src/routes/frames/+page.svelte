<script lang="ts">
    export let data;
    const frames = data.frames;
</script>

<div class="frames_page">
    <h2>Critical Preliminaries</h2>
    <div class="frames_grid">
        {#each frames as frame}
            <h3>{@html frame.title}</h3>
            <p>{@html frame.desc}</p>
        {/each}        
    </div>
    
</div>

<style>
    .frames_page h2 {
        font-size: 40px;
        margin-bottom: 20px;
    }
    .frames_grid {
        display: grid;
        grid-template-columns: 1fr 3fr;
        gap: 20px;
    }
    @media (max-width: 600px) {
        .frames_grid {
            grid-template-columns: 1fr;
        }
    }
</style>


