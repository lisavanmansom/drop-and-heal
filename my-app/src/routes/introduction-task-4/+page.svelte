<script>
  export let task;
  console.log('Task:', task);

  function stripHtml(html) {
    return html.replace(/<\/?[^>]+(>|$)/g, "");
    // Verwijderd HTML tags die meegegeven zijn vanuit directus
  }

  import {MeshgradPink, ArrowL, ArrowR} from '$lib'
  import ViewTransition from '../navigation.svelte'


  let rt = "Rouwtaak"
  let sub4 = "Emotioneel verder gaan"
  let d4 = "Ontdek hoe je een nieuw pad kunt inslaan terwijl je het verlies een betekenisvolle plek geeft in je leven."
</script>

<div class="app">
    <ViewTransition />
  </div>

<main>
    <h1>Introductie rouwtaken</h1>

    <section id="rt-4">
        <article>
            <h2>{rt}<em>4</em></h2>
            <h3>{sub4}</h3>
            <p>{d4}</p>
            <div class="d-a">
                <a href="./introduction-task-3"><ArrowL /></a>
                <a href="./introduction-h-1"><ArrowR /></a>
            </div>
        </article>
        
        <MeshgradPink class="meshgrad" />

        <div aria-busy="true" aria-describedby="progress-bar"></div>
            <progress value="80" max="100"></progress>
    </section>
</main>

<style>
    h1, h2  { font-family: Calvino; }
    h1      { font-size: 2em; font-weight: 600; z-index:2; max-width: 8em; padding: 0 0 0 1em;}
    h2      { font-weight: 100; font-size: 1.6em;}
    h3      { font-weight: 100; text-wrap: nowrap; font-size: 1.3em;}

    em      { font-family: dm-serif; font-size: 1em; font-style: normal; margin: 0 .25em;}
    p       { color: var(--g); font-weight: 100; font-size: 1.2em;}

    main {
        background-color: var(--b);
        color: var(--w);
        display: flex;
        flex-direction: column;
        overflow-x: hidden;
        padding: 2em 0;
        position: relative;
        min-height: 100dvh;
        width: 100%;
        text-align: left;
    }

    /* sections w. griefing-tasks */
    #rt-4 {
        align-items: stretch;
        background-color: var(--b);
        background-image: url("/gradients/Gr-pink.png");
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        padding: 4em 2em 2em 2em;
        position: relative;
        position: absolute;
        min-height: 100vh;
        transition: opacity 1s ease, visibility 0.5s ease;
        width: 100%;
    }

    article {
        display: flex;
        flex-direction: column;
        gap: .5em;
        z-index: 2;
    }

    article div { padding: 2em 0 0 0; }

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
        justify-content: space-around;
    }

    progress { order: -2; }

    progress[value] {
        appearance: none;
        border: none;
        height: .2em;
        -moz-appearance: none;
        -webkit-appearance: none;
        min-width: 90%;
    }

    progress[value]::-webkit-progress-bar {
        background-color: var(--progress-bg);
        border-radius: 20px;
    }

    progress[value]::-webkit-progress-value { background-color: var(--w); }

    #rt-4 p { margin: 1em 0 0 0; }

    #rt-4 a { border: .2em solid var(--b-4); }

     @media (min-width:575px) {
        h1      { padding: .75em 0 0 1.5em; }
        p       { max-width: 20em; }

        #rt-4   { padding: 5.5em 4em 3em 3em; }

        article {
            align-items: end;
            gap: .75em;
            margin: 2em 0 0 0;
            text-align: end;
        }

        .d-a {
            gap: 2em;
            justify-content: end;
        }

        progress { margin: 2em 0em; }

        progress[value] {
            height: .25em;
            min-width: 25em;
        }
     }

     @media (min-width:875px) {
        h1      { font-size: 2.5em; max-width: 10em;  }
        h2      { font-size: 2.2em; }
        h3      { font-size: 1.7em; }

        em      { font-size: 1em; }
        p       { font-size: 1.4em; max-width: 22em; }

        #rt-4   { padding: 7em 2em 0em 2em; }

        progress { margin: 2em 2em; }
     }


@media (min-width:1175px) {
        #rt-4   { padding: 7.5em 4em 3em 4em; }

        progress { margin: 2em 0em; }
     }

     @media (min-width:1500px) {

        main { place-items: center; }

        #rt-4 {
            align-items: stretch;
            justify-content: space-around;
            width: 80em;
        }

        h1 { transform: translateX(-430px); }
     }
</style>