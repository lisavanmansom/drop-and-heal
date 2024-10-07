<img src="/gradients/Meshgrad-green.png" alt="" width="100" height="100" class="blurred-image"/>

 
<style>
    .blurred-image {
        position: absolute;
        background-color: rgba(255, 158, 31, 0.608);
        width: 400px;
        height: 400px;
        filter: blur(200px) brightness(1.4);
        opacity: 0.8;
        z-index: 1;
        left: -140px;
    }

    .blurred-image::before {
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        border-radius: 100%;
        filter: blur(400px);
        z-index: 0;
    }
</style>