<script>
  export let task;
  console.log('Task:', task);

  function stripHtml(html) {
    return html.replace(/<\/?[^>]+(>|$)/g, "");
    // Verwijderd HTML tags die meegegeven zijn vanuit directus
  }

  import {MeshgradBlue, MeshgradRed, MeshgradGreen, MeshgradPink, ArrowL, ArrowR} from '$lib'

  let current = 1;

</script>

<header>
    <h1>Introductie rouwtaken</h1>
</header>

<main>
      <section id="rt-1" class:show={current === 1} class:hide={current != 1}>
        <h2>Rouwtaak <em>1</em></h2>
        <h3>Het verlies aanvaarden</h3>
        <p>Ontdek hoe je de realiteit van het verlies kunt omarmen.</p> 
        <MeshgradBlue class="meshgrad" />

        <div aria-busy="true" aria-describedby="progress-bar"></div>
        <progress value="20" max="100"></progress>

        <div class="d-a">
            <a href="#rt-2" on:click={() => current = 2}><ArrowR /></a>
        </div>
      </section>


    <section id="rt-2" class:show={current === 2} class:hide={current != 2}>
        <h2>Rouwtaak <em>2</em></h2>
        <h3>De pijn doorvoelen</h3>
        <p>Sta jezelf toe om de pijn te voelen en leer om deze op jouw manier te verwerken. </p>
        <MeshgradRed class="meshgrad" />

        <div aria-busy="true" aria-describedby="progress-bar"></div>
        <progress value="40" max="100"></progress>
        
        <div class="d-a">
            <a href="#rt-1" on:click={() => current = 1}><ArrowL /></a>
            <a href="#rt-3" on:click={() => current = 3}><ArrowR /></a>
        </div>
    </section>

    <section id="rt-3" class:show={current === 3} class:hide={current !== 3}>
        <h2>Rouwtaak <em>3</em></h2>
        <h3>Verder in verandering</h3>
        <p>Vind jouw weg in een wereld die nu anders is door het verlies van je dierbare.</p>
        <MeshgradGreen class="meshgrad" />

        <div aria-busy="true" aria-describedby="progress-bar"></div>
        <progress value="60" max="100"></progress>

        <div class="d-a">
            <a href="#rt-2" on:click={() => current = 2}><ArrowL /></a>
            <a href="#rt-4" on:click={() => current = 4}><ArrowR /></a>
        </div>
    </section>

    <section id="rt-4" class:show={current === 4} class:hide={current != 4}>
        <h2>Rouwtaak <em>4</em></h2>
        <h3>Emotioneel verder gaan</h3>
        <p>Ontdek hoe je een nieuw pad kunt inslaan terwijl je het verlies een betekenisvolle plek geeft in je leven.</p>
        <MeshgradPink class="meshgrad" />

        <div aria-busy="true" aria-describedby="progress-bar"></div>
        <progress value="80" max="100"></progress>

        <div class="d-a">
            <a href="#rt-3" on:click={() => current = 3}>
                <ArrowL />
            </a>
            
        </div>
    </section>
</main>


<style>
    
    h1, h2  { font-family: Calvino; }
    h1      { font-size: 2em; font-weight: 600; }
    h2      { font-weight: 100; font-size: 1.6em;}
    h3      { font-weight: 100; text-wrap: nowrap;}

    em      { font-family: dm-serif; font-size: 1em; font-style: normal; margin: 0 .25em;}
    p       { color: var(--g); font-weight: 100;}

    main {
        align-items: center;
        background-color: var(--b);
        color: var(--w);
        display: flex;
        flex-direction: column;
        justify-content: center;
        overflow: hidden;
        position: relative;
        min-height: 100vh;
        width: 100%;
    }

    header {
        background-color: var(--b);
        color: var(--w);
        padding: 2em 2em .5em 2em;
        text-align: left;
        display: block;
    }

    /* sections w. griefing-tasks */
    #rt-1, #rt-2, #rt-3, #rt-4 {
        align-items: center;
        background-color: var(--b);
        display: grid;
        grid-template-columns: repeat(5, 20%);
        grid-template-rows: repeat(10, 60px); /* no responsive units grid-rows */
        padding: 2em;
        min-height: 100vh;
        width: 100%;

        position: absolute;
        transition: opacity 1s ease, visibility 0.5s ease;
    }

    section h2 {
        grid-column: 1 / 5;
        grid-row: 7 / 8;
    }

    section h3 {
        grid-column: 1 / 5;
        grid-row: 7 / 9;
    }

    section p {
        grid-column: 1 / 5;
        grid-row: 8 / 10;
    }

    section a {
        border-radius: 50%;
        height: 3em;
        width: 3em;
        padding: 0.5em;
    }

    /* div w. arrows */
    .d-a {
        display: flex;
        flex-direction: row;
        gap: 1.5em;
        justify-content: center;
        grid-column: 1 / -1;
        grid-row: 10 / -1;
    }

    progress {
        grid-column: 1 / 5;
        grid-row: -12 / 1;
    }

    progress[value] {
        appearance: none;
        border: none;
        height: .2em;
        -moz-appearance: none;
        -webkit-appearance: none;
        width: 15em;
    }

    progress[value]::-webkit-progress-bar {
        background-color: var(--progress-bg);
        border-radius: 20px;
    }

    progress[value]::-webkit-progress-value {
        background-color: var(--w);
    }

    #rt-4 p {
        margin: 1em 0 0 0;
    }

    #rt-1 a {
        border: .2em solid var(--rt-1);
    }

    #rt-2 a {
        border: .2em solid var(--b-2);
    }

    #rt-3 a {
        border: .2em solid var(--rt-3);
    }

    #rt-4 a {
        border: .2em solid var(--b-4);
    }

    .show {
        opacity: 1;
        visibility: visible;
    }

    .hide {
        opacity: 0;
        visibility: hidden;
     }

    


</style>