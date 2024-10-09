<script>
  export let task;
  console.log('Task:', task);

  function stripHtml(html) {
    return html.replace(/<\/?[^>]+(>|$)/g, "");
    // Verwijderd HTML tags die meegegeven zijn vanuit directus
  }

  import {MeshgradBlue, ArrowR} from '$lib'
  import ViewTransition from '../navigation.svelte'

  let rt = "Rouwtaak"
  let sub1 = "Het verlies aanvaarden"
  let d1 = "Ontdek hoe je de realiteit van het verlies kunt omarmen."
  
</script>

<div class="app">
    <ViewTransition />
  </div>

<main>
    <header>
        <h1>Introductie rouwtaken</h1>
        <a href="./introduction-h-1">skip</a>
    </header>
    

      <section id="rt-1">
            <article>
                <h2>{rt}</h2>
                <h3>{sub1}</h3>
                <p>{d1}</p> 

                <div class="d-a">
                    <a href="./introduction-task-2"><ArrowR /></a>
                </div>
            </article>

            <MeshgradBlue class="meshgrad" />
        
            <div aria-busy="true" aria-describedby="progress-bar"></div>
            <progress value="20" max="100"></progress>
      </section>
</main>

<style>
    h1, h2  { font-family: Calvino; }
    h1      { font-size: 2em; font-weight: 600; z-index:2; max-width: 8em;}
    h2      { font-weight: 100; font-size: 1.6em;}
    h3      { font-weight: 100; text-wrap: nowrap; font-size: 1.3em;}

    p       { color: var(--g); font-weight: 100; font-size: 1.2em;}

    main {
        background-color: var(--b);
        background-image: url("/gradients/Gr-blue.png");
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
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

    header { 
        align-items: start;
        display: flex;
        flex-direction: column-reverse;
        height: 10em;
        z-index: 10;
        justify-content: space-between;
        padding: 0 0 0 1em;
    }

    header a {
        border: .1em solid var(--rt-1);
        border-radius: .5em;
        color: var(--w);
        font-size: 1em;
        padding: .3em .6em;
        text-decoration: none;
        width: max-content;
      }

    /* sections w. griefing-tasks */
    #rt-1 {
        align-items: stretch;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        padding: 1em 2em 2em 1em;
        min-height: 100vh;
        position: relative;
        /* position: absolute; */
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

    #rt-1 a { border: .2em solid var(--rt-1); }


     @media (min-width:575px) {
        p       { max-width: 20em; }

       header { padding: 0 0 0 3em; justify-content: space-around;}

        #rt-1 { padding: .5em 4em 3em 3em; }

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

        p       { font-size: 1.4em; max-width: 22em; }

        header { padding: 0 0 0 3.7em;}

        #rt-1 { padding: 0em 2em 2em 1.8em; }

        progress { margin: 2em 2em; }
     }


@media (min-width:1175px) {
        #rt-1 { padding: 0em 4em 3em 3.5em; }

        progress { margin: 2em 0em; }
     }

     @media (min-width:1500px) {

        main { place-items: center; }

        header {padding: 0 25em 0 0em;}

        #rt-1 {
            align-items: stretch;
            justify-content: space-around;
            width: 56em;
        }
     }
</style>