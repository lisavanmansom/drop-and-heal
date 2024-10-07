<script>
    import MeshBlue from '$lib/meshgrad-blue-static.svelte';
    import BlurgradBlue from '$lib/blurgrad-blue.svelte';
    import ArrowL from '$lib/arrow-l.svelte';
    import ArrowR from '$lib/arrow-r.svelte';
    import { goto } from '$app/navigation';
</script>

<main class="intro-main">
    <div class="background-image">
        <MeshBlue />
    </div>
    <article class="intro-article">
        <p>
            Drop & Heal is een metafoor voor het loslaten van de zware last van verdriet en het starten van een helend proces. 
            Als een druppel in het water valt, wordt het onderdeel van een groter, krachtiger geheel, dit gebeurt ook wanneer we ons verdriet delen.<br><br> 
            'Drop' verwijst naar het moment waarop je je verdriet of emoties deelt, laat vallen, of erkent.<br><br>
            'Heal' staat voor het genezingsproces dat volgt, waarbij je op je eigen tempo de stappen zet naar herstel en acceptatie. 
            Het is een uitnodiging om je verdriet te erkennen, het los te laten en jezelf toe te staan te helen, stap voor stap, druppel voor druppel.
        </p>
    </article>
    <BlurgradBlue />

    <div class="nav-buttons">
        <button on:click={() => goto('/')}>
            <ArrowL />
        </button>
        <button on:click={() => goto('/privacy')}>
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
        padding: 0 3rem;
        z-index: 100;
    }

    .background-image {
        opacity: 40%;
    }
    
    .intro-main .nav-buttons {
        position: absolute;
        bottom: 35px;
        display: flex;
        justify-content: space-between;
        width: 100%;
        max-width: 7rem;
    }

    .nav-buttons button {
        background: none;
        border: 2px solid rgba(122, 206, 255, 0.8);
        border-radius: 50%;
        width: 50px; 
        height: 50px; 
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        transition: background-color 0.3s, color 0.3s, border-color 0.3s;
    }

    .nav-buttons button:hover {
        background-color: rgba(255, 255, 255, 0.1); 
        border-color: rgba(255, 255, 255, 1); 
        color: rgba(255, 255, 255, 1); 
    }

    .nav-buttons button:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }
</style>



