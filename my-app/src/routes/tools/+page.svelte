<script>
    import BlurgradGreen from '$lib/blurgrad-green.svelte';
    import ArrowL from '$lib/arrow-l.svelte';
    import ArrowR from '$lib/arrow-r.svelte';
    import { goto } from '$app/navigation';
</script>

<main class="intro-main">
    <article class="intro-article">
        <header>
            <h3>Introductie <br> algemeen</h3>
        </header>
        <section class="content">
            <h2>Tools</h2>
            <p>
                We hebben tools samengesteld om je te ondersteunen in je reis door rouw. 
                Straks geven we een rondleiding binnen de omgeving. 
                Laten we nu eerst samen het landschap van rouw verkennen.
            </p>
        </section>
    </article>

    <BlurgradGreen />

    <div class="nav-buttons">
        <button on:click={() => goto('/privacy')}>
            <ArrowL />
        </button>
        <button on:click={() => goto('/rouwtaken')}>
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
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        color: white;
        background-color: black;
        width: 100%;
        height: 100vh;
        overflow: hidden;
        position: relative;
        padding: 2rem 2rem;
    }

    .intro-article {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        height: 100%;
        width: 100%;
    }

    header {
        text-align: left;
        align-self: flex-start;
        width: 100%;
        margin-top: 2rem;
    }

    .content {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        padding-top: 20rem;
    }

    .content h2 {
        margin-bottom: 1rem;
        font-size: 2.5em;
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
        border: 2px solid rgba(255, 175, 122, 0.8);
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