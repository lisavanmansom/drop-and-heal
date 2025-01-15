<script>
    import MeshgradBlue from '$lib/meshgrad-blue.svelte'
    import NavButtons from '$lib/NavButtons.svelte'
    import HeaderIntro from '$lib/HeaderIntro.svelte'
    import BlurgradBlue from '../../lib/blurgrad-blue.svelte';

    // export let task;
    // console.log('Task:', task);

    function stripHtml(html) {
    return html.replace(/<\/?[^>]+(>|$)/g, "");
    // Verwijderd HTML tags die meegegeven zijn vanuit directus
    }
    let rt = "Rouwtaak"
    let sub1 = "Het verlies aanvaarden"
    let d1 = "Ontdek hoe je de realiteit van het verlies kunt omarmen."
</script>

<main class="intro-main">
    <a href="./introduction-h-1">skip</a>
    <HeaderIntro headerText_l1="Introductie" headerText_l2="rouwtaken" progressValue={40} />

    <article class="intro-content"> 
        <h2>{rt}<em>1</em></h2>
        <h4>{sub1}</h4>
        <p>{d1}</p> 
        <MeshgradBlue />
    </article>

    <BlurgradBlue customStyles="bottom: -120px; right: -100px" />
    
    <section class="intro-buttons">
        <NavButtons leftLink="./rouwtaken" rightLink="./introduction-task-2" borderColor="#4DB3FF"/>
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
        border: 1px solid var(--rt-1);
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