<div class="about_page">
    <h2>About</h2>
    <div class="about_metadata">
        <div class="about_text">
            <p>These pages outline aspects of {' '}
                <a href="https://github.com/membranes">membranes
                </a>{' '}
                The objective - transparency and modelling best practices.
            </p>
            <p>
                This is ...
            </p>
        </div>
    </div>
</div>

<style>
    .about_page h2 {
        font-size: 40px;
        margin-bottom: 20px;
    }
    .about_metadata {
        display: flex;
        width: 100%;
        justify-content: space-between;
        gap: 20px;
    }
    @media (max-width: 700px) {
        .about_metadata {
            flex-direction: column;
        }
    }
    .about_text {
        flex-basis: 50%;
    }
    .about_text p {
        margin-bottom: 20px;
        font-size: 18px;
    }
    @media (max-width: 700px) {
        .about_metadata {
            flex-direction: column;
        } 
    }
</style>