<script>
    import MeshgradRed from '$lib/meshgrad-red.svelte'
    import NavButtons from '$lib/NavButtons.svelte'
    import HeaderIntro from '$lib/HeaderIntro.svelte'
    import BlurgradRed from '../../lib/blurgrad-red.svelte';

    // export let task;
    // console.log('Task:', task);

    function stripHtml(html) {
    return html.replace(/<\/?[^>]+(>|$)/g, "");
    // Verwijderd HTML tags die meegegeven zijn vanuit directus
    }
    let rt = "Rouwtaak"
    let sub2 = "De pijn doorvoelen"
    let d2 = "Sta jezelf toe om de pijn te voelen en leer om deze op jouw manier te verwerken."
</script>

<main class="intro-main">
    <a href="./introduction-h-1">skip</a>
    <HeaderIntro headerText_l1="Introductie" headerText_l2="rouwtaken" progressValue={50} />

    <article class="intro-content">
            <h2>{rt}<em>2</em></h2>
            <h4>{sub2}</h4>
            <p>{d2}</p>
        <MeshgradRed />
    </article>

    <BlurgradRed customStyles="bottom: -120px; right: -50px" />

    <section class="intro-buttons">
        <NavButtons leftLink="./introduction-task-1" rightLink="./introduction-task-3" borderColor="#FF4D4D"/>
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
        border: 1px solid var(--rt-2);
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
        z-index: 100;
        position: relative;
        padding: 0rem 10rem;
    }

</style>