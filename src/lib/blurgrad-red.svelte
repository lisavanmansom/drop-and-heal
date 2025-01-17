<script>
    export let customStyles = {};
    export let pageStyle = 'default';
</script>

<img 
src="/gradients/Meshgrad-red.png" 
alt="" width="100" 
height="100" 
class={`blurred-image ${pageStyle}`}
style="{customStyles}"/>

 
<style>
    .blurred-image {
        position: absolute;
        width: 500px;
        height: 500px;
        filter: blur(120px) brightness(1.4);
        opacity: 0.6;
        z-index: 0;
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
        filter: blur(300px);
        z-index: 0;
    }
</style>