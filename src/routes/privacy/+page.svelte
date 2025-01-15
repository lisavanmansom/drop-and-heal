<script>
    import BlurgradRed from '$lib/blurgrad-red.svelte';
    import NavButtons from '$lib/NavButtons.svelte';
    import HeaderIntro from '$lib/HeaderIntro.svelte'
</script>

<main class="intro-main">
    <HeaderIntro headerText_l1="Introductie" headerText_l2="algemeen" progressValue={10} />
    <article class="intro-content">
        <h2>Privacy</h2>
        <p>Jouw privacy en comfort zijn onze prioriteit. Alles wat je deelt blijft vertrouwelijk.</p>
    </article>
    <section class="intro-buttons">
        <NavButtons leftLink="./uitleg-metafoor" rightLink="./tools" borderColor="var(--rt-2)"/>
    </section>
    <BlurgradRed />

</main>

<style>
    
    @container (min-width: 600px) {
        .intro-content {
            padding-top: 8rem;
        }
        .intro-content h2 {
            font-size: 48px;
        }
    }

</style>
