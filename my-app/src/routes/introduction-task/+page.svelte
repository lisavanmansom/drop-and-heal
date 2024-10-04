<script>
    	import MeshgradBlue from '$lib/meshgrad-blue.svelte';
        import MeshgradRed from '$lib/meshgrad-red.svelte';
        import MeshgradGreen from '$lib/meshgrad-green.svelte';
        import MeshgradPink from '$lib/meshgrad-pink.svelte';
        import ArrowL from '$lib/arrow-l.svelte';
        import ArrowR from '$lib/arrow-r.svelte';

</script>

<main>
    <header>
        <h1>Introductie rouwtaken</h1>
    </header>

    <section id="rt-1">
        <h2>Rouwtaak <em>1</em></h2>
        <h3>Het verlies aanvaarden</h3>
        <p>Ontdek hoe je de realiteit van het verlies kunt omarmen.</p>
        <MeshgradBlue />

        <div aria-busy="true" aria-describedby="progress-bar"></div>
        <progress value="20" max="100"></progress>

        <a href="#rt-2">
            <ArrowR /></a>
    </section>

    <section id="rt-2">
        <h2>Rouwtaak <em>2</em></h2>
        <h3>De pijn doorvoelen</h3>
        <p>Sta jezelf toe om de pijn te voelen en leer om deze op jouw manier te verwerken. </p>
        <MeshgradRed />

        <div aria-busy="true" aria-describedby="progress-bar"></div>
        <progress value="40" max="100"></progress>

        <a href="#rt-1">
            <ArrowL /></a>
        <a href="#rt-3">
            <ArrowR /></a>
    </section>

    <section id="rt-3">
        <h2>Rouwtaak <em>3</em></h2>
        <h3>Verder in verandering</h3>
        <p>Vind jouw weg in een wereld die nu anders is door het verlies van je dierbare.</p>
        <MeshgradGreen />

        <div aria-busy="true" aria-describedby="progress-bar"></div>
        <progress value="60" max="100"></progress>

        <a href="#rt-2">
            <ArrowL /></a>
        <a href="#rt-4">
            <ArrowR /></a>
    </section>

    <section id="rt-4">
        <h2>Rouwtaak <em>4</em></h2>
        <h3>Emotioneel verder gaan</h3>
        <p>Ontdek hoe je een nieuw pad kunt inslaan terwijl je het verlies een betekenisvolle plek geeft in je leven.</p>
        <MeshgradPink />

        <div aria-busy="true" aria-describedby="progress-bar"></div>
        <progress value="80" max="100"></progress>

        <a href="#rt-3">
            <ArrowL /></a>
        <a href="#rt-3">
            <ArrowR /></a>

    </section>

</main>


<style>
    
    h1, h2 {
        font-family: Calvino;
    }

    em {
        font-family: dm-serif;
    }

</style>