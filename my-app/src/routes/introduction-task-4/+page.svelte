<script>
    import MeshgradPink from '$lib/meshgrad-pink.svelte'
    import NavButtons from '$lib/NavButtons.svelte'
    import HeaderIntro from '$lib/HeaderIntro.svelte'
    import BlurgradPink from '../../lib/blurgrad-pink.svelte';
    export let task;
    console.log('Task:', task);

    function stripHtml(html) {
        return html.replace(/<\/?[^>]+(>|$)/g, "");
        // Verwijderd HTML tags die meegegeven zijn vanuit directus
    }

    let rt = "Rouwtaak"
    let sub4 = "Emotioneel verder gaan"
    let d4 = "Ontdek hoe je een nieuw pad kunt inslaan terwijl je het verlies een betekenisvolle plek geeft in je leven."
</script>


<main class="intro-main">
    <a href="./introduction-h-1">skip</a>
    <HeaderIntro headerText_l1="Introductie" headerText_l2="rouwtaken" progressValue={70} />

    <article class="intro-content">
        <h2>{rt}<em>4</em></h2>
        <h4>{sub4}</h4>
        <p>{d4}</p>
        <MeshgradPink />
    </article>

    <BlurgradPink customStyles="bottom: -20px; right: 0"/>

    <section class="intro-buttons">
        <NavButtons leftLink="./introduction-task-3" rightLink="./introduction-h-1" borderColor="var(--rt-4)"/>
    </section>

</main>


<style>

    p {
        color: var(--g);
    }

    .intro-main {
        display: grid;
        grid-template-rows: auto 1fr auto;
        min-block-size: 100dvh;
        gap: 2rem; 
        align-items: center;
        color: white;
        background-color: black;
        width: 100%;
        height: 100vh;
        overflow: hidden;
        position: relative;
        padding: 2rem;
    }

    .intro-main a {
        position: absolute;
        top: 1rem;
        left: 1.4rem;
        border: 1px solid var(--rt-4);
        border-radius: .9em;
        color: var(--w);
        font-size: 1em;
        padding: .3em .8em;
        text-decoration: none;
        width: max-content;
    }

    .intro-content {
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        padding: 0rem 10rem;
        z-index: 100;
        position: relative;
    }

</style>