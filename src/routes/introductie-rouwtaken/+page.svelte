<script>
    import NavButtons from '$lib/NavButtons.svelte';
    import HeaderIntro from '$lib/HeaderIntro.svelte';
    import BlurgradBlue from '$lib/blurgrad-blue.svelte';
    import MeshgradBlue from '$lib/meshgrad-blue.svelte';
    import MeshgradRed from '$lib/meshgrad-red.svelte';
    import MeshgradGreen from '$lib/meshgrad-green.svelte';
    import MeshgradPink from '$lib/meshgrad-pink.svelte';

    let rt = "Rouwtaak";
    let sub1 = "Het verlies aanvaarden";
    let d1 = "Ontdek hoe je de realiteit van het verlies kunt omarmen.";
</script>

<main class="intro-main">
    <HeaderIntro headerText_l1="Introductie" headerText_l2="rouwtaken" progressValue={60} />
    <section class="intro-content">
        <article class="column">
            <h2>{rt}<em>1</em></h2>
            <h4>{sub1}</h4>
            <p>{d1}</p>
            <MeshgradBlue />
        </article>

        <article class="column">
            <h2>{rt}<em>2</em></h2>
            <h4>De pijn doorvoelen</h4>
            <p>Sta jezelf toe om de pijn te voelen en leer om deze op jouw manier te verwerken.</p>
            <MeshgradRed />
        </article>

        <article class="column">
            <h2>{rt}<em>3</em></h2>
            <h4>Verder in verandering</h4>
            <p>Vind jouw weg in een wereld die nu anders is door het verlies van je dierbare.</p>
            <MeshgradGreen />
        </article>

        <article class="column">
            <h2>{rt}<em>4</em></h2>
            <h4>Emotioneel verder gaan</h4>
            <p>Ontdek hoe je een nieuw pad kunt inslaan terwijl je het verlies een betekenisvolle plek geeft in je leven.</p>
            <MeshgradPink />
        </article>
    </section>

    <section class="intro-buttons">
        <NavButtons leftLink="./introductie-algemeen" rightLink="./introductie-hulp" borderColor="var(--w)"/>
    </section>
</main>

<style>

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
        overflow-y: auto;
        padding: 2rem;
        position: relative;
    }

    .intro-content {
        display: grid;
        grid-template-columns: 1fr; 
        gap: 8rem;
        padding: 8rem 0rem 5% 0rem;
        justify-items: center;
    }

    .column {
        max-width: 25rem;
        max-height: 30rem;
        transition: all 0.3s ease;
        display: flex;
        flex-direction: column;
        justify-content: center;
        transition: all 1s ease;   
    }

    .column p {
        color: var(--g);
    }

    .column h2 {
        margin-top: 1.5rem;
    }


    @media (min-width: 45rem) {
        .intro-main {
            overflow: hidden;
        }

        .intro-content {
            display: grid;
            grid-template-columns: repeat(4, 1fr); 
            gap: 3rem;
            padding: 1rem 3rem 0 3rem;
        }

        .column {
            width: 100%;
            margin-bottom: 1rem;
        }

        .column {
            max-width: 13rem;
            max-height: 30rem;
            transition: all 0.3s ease;
            opacity: 0.6;
            filter: brightness(0.7);
            display: flex;
            flex-direction: column;
            justify-content: center;
            transition: all 1s ease;   
        }

        .column h2 {
            font-size: 27px;
            margin-bottom: 0.2rem;
            margin-top: 0;
        }

        .column h4 {
            font-size: 14px;
            margin-bottom: 0.2rem;
        }

        .column p {
            font-size: 12px;
            line-height: 1.2rem;
        }

        .column em {
            font-size: 22px;
        }

        .column:hover {
            opacity: 1;
            filter: none;
            transform: scale(1.4); 
        }

        .column h2, .column h4, .column p {
            display: none;
        }

        .column:hover h2, .column:hover h4, .column:hover p {
            display: block;
        }
    }
</style>
