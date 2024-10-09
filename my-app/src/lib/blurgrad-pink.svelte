<img src="/gradients/Meshgrad-pink.png" alt="" width="100" height="100" class="blurred-image" />

 
<style>
    .blurred-image {
        background-color: rgba(45, 45, 255, 0.872);
        position: absolute;
        width: 300px;
        height: 300px;
        filter: blur(200px) brightness(1.7);
        right: -80px;
        bottom: 180px;
        opacity: 0.8;
        z-index: 1;
    }

    .blurred-image::before {
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        border-radius: 100%;
        filter: blur(200px);
        z-index: 0;
    }
</style>