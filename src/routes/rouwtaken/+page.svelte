<script>
    import BlurgradPink from '$lib/blurgrad-pink.svelte';
    import NavButtons from '$lib/NavButtons.svelte';
    import HeaderIntro from '$lib/HeaderIntro.svelte'
</script>

<main class="intro-main">
    <HeaderIntro headerText_l1="Introductie" headerText_l2="algemeen" progressValue={30} />
    <article class="intro-content">
        <h2>Rouwtaken</h2>
        <p>
            Onze methode is gebaseerd op de erkende rouwtaken van William Worden, Amerikaans rouwexpert, 
            zorgvuldig samengesteld om jou te ondersteunen tijdens je rouwreis. <br><br>
            Ontdek met ons de betekenis en steun die het jou kan bieden.
        </p>
    </article>

    <BlurgradPink />

    <section class="intro-buttons">
        <NavButtons leftLink="./tools" rightLink="./introduction-task-1" borderColor="var(--rt-4)"/>
    </section>

</main>

<style>
    
</style>


