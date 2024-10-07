<script>
    import BlurgradPink from '$lib/blurgrad-pink.svelte';
    import ArrowL from '$lib/arrow-l.svelte';
    import ArrowR from '$lib/arrow-r.svelte';
    import { goto } from '$app/navigation';
</script>

<main class="intro-main">
    <article class="intro-article">
        <h3>Introductie algemeen</h3>
        <h2>Rouwtaken</h2>
        <p>
            Onze methode is gebaseerd op de erkende rouwtaken van William Worden, Amerikaans rouwexpert, 
            zorgvuldig samengesteld om jou te ondersteunen tijdens je rouwreis. Ontdek met ons de betekenis en steun die het jou kan bieden.
        </p>
    </article>
    <BlurgradPink />
    <div class="nav-buttons">
        <button on:click={() => goto('/tools')}>
            <ArrowL />
        </button>
        <button on:click={() => goto('/introduction-task')}>
            <ArrowR />
        </button>
    </div>
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
        padding: 2em 0;
        width: 100%;
        height: 100vh;
    }

    .intro-article {
        padding: 0rem 2rem;
    }
    
    .nav-buttons {
        position: absolute;
        bottom: 35px;
        display: flex;
        justify-content: space-between;
        width: 100%;
        max-width: 7rem;
    }

    .intro-main button {
        background: none;
        border: none;
        cursor: pointer;
        color: rgb(255, 255, 255);
        font-size: 2em;
    }

    .intro-main button:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }
</style>


