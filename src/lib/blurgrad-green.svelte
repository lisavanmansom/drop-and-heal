<script>
    export let customStyles = {};
    export let pageStyle = 'default';
</script>

<img src="/gradients/Meshgrad-green.png"
alt="" width="100" 
height="100" 
class={`blurred-image ${pageStyle}`}
style="{customStyles}"/>

 
<style>
    .blurred-image {
        position: absolute;
        background-color: rgba(255, 158, 31, 0.608);
        width: 400px;
        height: 400px;
        filter: blur(100px) brightness(1.3);
        opacity: 0.6;
        z-index: 1;
    }

    .blurred-image.intro_algemeen {
        bottom: -160px;
        right: -70px;
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