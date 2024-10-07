<script>
    import MeshBlue from '$lib/meshgrad-blue-static.svelte';
    import { goto } from '$app/navigation';
</script>


<main class="intro-main">
    <MeshBlue />
    <article class="intro-article">
        <h1>Drop <br> & Heal</h1>
        <p>
            Welkom bij Drop & Heal. Een veilige plek voor jouw reis door rouwverwerking.<br><br>
            Er volgt eerst een introductie en kennismaking, hierna kan je op eigen tempo aan de slag in de omgeving.
        </p>
    </article>
    <button class="start-button" on:click={() => goto('/uitleg-metafoor')}>
        Starten
    </button>
</main>

<style>

    h1, h2, h3  { font-family: Calvino-Grande;}
    h1      { font-size: 3em; font-weight: 600; z-index:2; max-width: 8em;}
    h2      { font-weight: 100; font-size: 48px;}
    h3      { font-weight: 100; text-wrap: nowrap; font-size: 32px;}
    em      { font-family: Figtree; font-weight: 100; font-size: 16px; font-style: normal; margin: 0 .25em;}
    p       { color: var(--w); font-weight: 100; font-size: 16px; line-height: 1.5rem;}

    .show {
        opacity: 1;
        visibility: visible;
        transition: opacity 0.5s ease-in-out;
    }

    .hide {
        opacity: 0;
        visibility: hidden;
        transition: opacity 0.5s ease-in-out;
    }

    .intro-main {
        overflow: hidden;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: white;
        background-color: black;
        width: 100%;
        height: 100vh;
    }

    .intro-main h1 {
        font-family: Calvino-Grande;
        font-size: 75px;
        line-height: 4.5rem;
        margin-bottom: 2rem;
    }

    .intro-article {
        padding: 11rem 2rem 3rem 2rem;
        z-index: 100;
    }
    
    .intro-article p {
        padding-right: 3rem;
    }

    .start-button {
        position: absolute;
        bottom: 35px;
        z-index: 2000;
    }

    .intro-main .start-button {
        background: none;
        border: 1px solid #F5F5F5;
        color: white;
        padding: 10px 20px;
        font-size: 1em;
        cursor: pointer;
        border-radius: 25px;
        margin-top: 1rem;
        transition: background-color 0.3s;
    }

    .intro-main button:hover {
        background-color: rgba(245, 245, 245, 0.1);
    }

    .intro-main button {
        background: none;
        border: none;
        cursor: pointer;
        color: white;
        font-size: 2em;
    }

    .intro-main button:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }
</style>