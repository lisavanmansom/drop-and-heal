<script>
    import MeshCarousel from '$lib/molecules/meshgrad-carousel.svelte';

    import { onMount } from 'svelte';

let button;

// Functie om href aan te passen op basis van schermgrootte
function updateButtonLink() {
    if (window.matchMedia("(min-width: 65rem)").matches) {
        button.href = "./privacy";
    } else {
        button.href = "./uitleg-metafoor";
    }
}

onMount(() => {
    button = document.querySelector('.start-button');
    updateButtonLink(); 
    window.addEventListener('resize', updateButtonLink); 

    return () => {
        window.removeEventListener('resize', updateButtonLink);
    };
});
</script>


<main>
    
    <div class="animation-carousel">
        <MeshCarousel />
    </div>

    <article class="main-content">
        <h1 class=header-mobile>Drop <br> & Heal</h1>
        <h1 class=header-browser>Welkom bij Drop & Heal</h1>
        <p>
            Welkom bij Drop & Heal. Een veilige plek voor jouw reis door rouwverwerking.<br><br>
            Er volgt eerst een introductie en kennismaking, hierna kan je op eigen tempo aan de slag in de omgeving.
        </p>
        <p class="uitleg-metafoor">
            Drop & Heal is een metafoor voor het loslaten van de zware last van verdriet en het starten van een helend proces. 
            Als een druppel in het water valt, wordt het onderdeel van een groter, krachtiger geheel, dit gebeurt ook wanneer we ons verdriet delen. 
        </p>
        <section class="start-button-container">
            <a href="./uitleg-metafoor" class="start-button">Starten</a>
        </section>
    </article>

</main>

<style>

    main {
        position: relative;
        overflow: hidden;
        display: flex;
        justify-content: flex-start; 
        align-items: center;
        color: white;
        background-color: black;
        width: 100%;
        height: 100vh;
        padding: 0 2rem; 
    }   

    main h1 {
        font-family: Calvino-Grande;
        font-size: 75px;
        line-height: 4.5rem;
        margin-bottom: 2rem;
        min-width: max-content;
        max-width: none;
    }

    .header-browser{
        display: none;
    }

    .main-content {
        position: relative;
        padding: 12rem 2rem 3rem 2rem;
        margin-top: 14rem;
        z-index: 100;
        justify-content: center;
    }
    
    .main-content p {
        padding-right: 3rem;
    }

    .uitleg-metafoor {
        display: none;
    }

    .animation-carousel {
        position: absolute; 
        width: 100%;
        height: 320px;
        z-index: 0;
        left: -8rem;
        top: 10rem;
    }

    .start-button-container{
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .start-button {
        position: relative;
        display: inline-block; 
        background: none;
        border: 1px solid #F5F5F5;
        color: white;
        padding: 10px 20px;
        font-size: 1em;
        cursor: pointer;
        border-radius: 25px;
        margin-top: 3rem;
        text-align: center;
        text-decoration: none; 
        transition: background-color 0.3s;
    }

    .start-button:hover {
        background-color: rgba(245, 245, 245, 0.1);
    }

    .start-button:active {
        background-color: rgba(245, 245, 245, 0.2);
    }

    @media (min-width: 48rem){

    }

    @media (min-width: 65rem){
        .header-browser{
            display: block;
        }

        .header-mobile{
            display: none;
        }

        .animation-carousel {
            left: 18rem;
            top: 13rem;
            height: 400px;
        }
        .uitleg-metafoor {
            display: block;
        }

        .main-content {
            position: relative;
            padding: 2rem 10rem;
            z-index: 100;
            justify-content: center;
            max-width: 60rem;
        }

        .start-button-container {
            justify-content: left;
            align-items: flex-start;
        }

        .start-button {
            margin-top: 6rem;
        }

    }

</style>