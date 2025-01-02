<!-- src/routes/+page.svelte -->

<div class="model">
    <h1>Dynamic Model Card: Illustration</h1>
    <p>Automatic continuous updates of</p>
    <a href="https://github.com/membranes" target="_blank">
        <div class="button">Read more</div>
    </a>
</div>

<style>
    .model {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        text-align: center;
    }
    .model h1 {
        font-size: 60px;
        width: 70%;
    }
    .model p {
        color: #6e7076;
        font-size: 20px;
    }
    .button {
        background-color: goldenrod;
        padding: 20px 30px;
        margin-top: 40px;
        border-radius: 5px;
        color: #fff;
    }

    @media (max-width: 700px) {
        .model h1 {
            font-size: 40px;
        }
        .model p {
            font-size: 16px;
        }
    }
</style>
