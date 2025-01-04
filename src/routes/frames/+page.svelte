<script lang="ts">
    export let data;
    const frames = data.frames;
</script>

<div class="frames-page">
    <div class="frames-grid">
        <div class="grid-item"></div>
        <div class="grid-item"><h2>Fundamentals</h2></div>
        <div class="grid-item"></div>
    </div>
    <div class="frames-grid">
        <div class="grid-item"></div>
        <div class="grid-item">
            {#each frames as frame}
                <h3>{@html frame.title}</h3>
                <p>{@html frame.desc}</p>
            {/each} 
        </div>
        <div class="grid-item"></div>    
    </div>
</div>

<style>
    h2 {
        font-variant: small-caps;
    }
    .frames-page h2 {
        font-size: 40px;
        margin-bottom: 20px;
    }
    .frames-grid {
        display: grid;
        grid-template-columns: 1fr 3fr 1fr;
        gap: 20px;
    }
    .grid-item {
        border: 0 solid;
        padding: 5px;
        margin-bottom: 35px;
        text-align: left;
    }
    @media (max-width: 600px) {
        .frames-grid {
            grid-template-columns: 1fr;
        }
    }
</style>


