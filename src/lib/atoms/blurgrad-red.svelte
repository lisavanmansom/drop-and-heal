<img src="/gradients/Meshgrad-red.png" alt="" width="100" height="100" class="blurred-image"/>

 
<style>
    .blurred-image {
        position: absolute;
        width: 400px;
        height: 400px;
        filter: blur(150px) brightness(1.4);
        opacity: 0.8;
        z-index: 0;
        bottom: -160px;
        right: -70px;
    }

    .blurred-image::before {
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        border-radius: 100%;
        filter: blur(300px);
        z-index: 0;
    }
</style>