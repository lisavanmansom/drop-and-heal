<img src="/gradients/Meshgrad-blue.png" alt="" width="100" height="100" class="blurred-image" />

 
<style>
    .blurred-image {
        position: absolute;
        background-color: rgb(107, 139, 255);
        width: 300px;
        height: 300px;
        filter: blur(100px) brightness(1.4);
        opacity: 0.8;
        z-index: 0;
        top: -120px;
        right: -100px;
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