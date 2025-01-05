<script lang="ts">
    import item from '$lib/data/project/fundamentals.json';
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
            <h3>Problem Statement</h3>
            {@html item.problem}            
        </div>
        <div class="grid-item"></div>    
    </div>
    <div class="frames-grid">
        <div class="grid-item"></div>
        <div class="grid-item">
            <h3>Outcome Expectations / Underlying Aims</h3>
            {@html item.expectations}            
        </div>
        <div class="grid-item"></div>    
    </div>
    <div class="frames-grid">
        <div class="grid-item"></div>
        <div class="grid-item">
            <h3>Deployment Goal</h3>
            {@html item.deployment}
        </div>
        <div class="grid-item"></div>
    </div>
</div>

<style>
    .frames-page h2 {
        font-size: 40px;
        margin-bottom: 5px;
    }
    .frames-grid {
        display: grid;
        grid-template-columns: 1fr 3fr 1fr;
        gap: 20px;
    }
    .grid-item {
        border: 0 solid;
        padding: 5px;
        margin-bottom: 25px;
        text-align: left;
    }
    @media (max-width: 600px) {
        .frames-grid {
            grid-template-columns: 1fr;
        }
    }
</style>


