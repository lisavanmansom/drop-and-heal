<script>  
import { page } from '$app/stores';
export let pageStyle = 'default';
export let customStyles = {};
</script>

<img 
src="/gradients/Meshgrad-pink.png" 
alt="" 
width="100" height="100" 
class={`blurred-image ${pageStyle}`}
style="{customStyles}" />
 
<style>
    .blurred-image {
        background-color: rgba(45, 45, 255, 0.872);
        position: absolute;
        width: 300px;
        height: 300px;
        filter: blur(200px) brightness(1.7);
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

    .blurred-image.form-page {
        transform: scale(2);
        /* animation: bg-gradient 10s linear infinite; */
    }

    @keyframes bg-gradient {
        25% { transform: scale(1.2); }
        50% { transform: scale(1.1); }
        75% { transform: scale(1.2); }
    }


    @media (prefers-reduced-motion) {
        .blurred-image.form-page  {
            animation: none; 
        }
    }
</style>