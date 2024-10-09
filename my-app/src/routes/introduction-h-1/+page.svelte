<script>
    export let task;
    console.log('Task:', task);
  
    import {ArrowR, ArrowL} from '$lib'
    import ViewTransition from '../navigation.svelte'
  
    let title = "Hulp op maat, of liever zelf kiezen?"
    let sub = "Persoonlijke reis"
    let des = "Nu je meer weet over de rouwtaken zelf, is het tijd om jouw persoonlijke reis te samen te stellen. Rouw is een uniek proces en niet lineair, daarom bieden we ondersteuning om je verder te helpen."
  </script>

  <div class="app">
    <ViewTransition />
  </div>
  
  <main>
    <header>
        <h1>{title}</h1>
        <a href="../introduction-h-3">skip</a>

        <div aria-busy="true" aria-describedby="progress-bar"></div>
        <progress value="80" max="100"></progress>

    </header>
    <section>
        <article>
            <h2>{sub}</h2>
            <p>{des}</p> 
                <div class="d-a">
                  <a href="./introduction-task-4"><ArrowL /></a>
                    <a href="./introduction-h-2"><ArrowR /></a>
                </div>
        </article>
    </section>
  </main>
  
  <style>
      h1, h2  { font-family: Calvino; }
      h1      { font-size: 2em; font-weight: 600; z-index:3; max-width: 8em;}
      h2      { font-weight: 100; font-size: 1.6em;}
  
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
        padding: 1em 0;
        position: relative;
        min-height: 100dvh;
        width: 100%;
        text-align: left;
      }

      header {
        display: flex;
        flex-direction: column-reverse;
        /* gap: 1.5em; */
        height: 15em;
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
      section {
        align-items: stretch;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        padding: 4em 2em 6em 2em;
        min-height: 100vh;
        position: relative;
        /* position: absolute; */
        transition: opacity 1s ease, visibility 0.5s ease;
        width: 100%;
      }
  
      article {
        display: flex;
        flex-direction: column;
        gap: 2em;
        height: 20em;
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
        height: .25em;
        -moz-appearance: none;
        -webkit-appearance: none;
        min-width: 90%;
      }
  
      progress[value]::-webkit-progress-bar {
        background-color: var(--progress-bg);
        border-radius: 20px;
      }
  
      progress[value]::-webkit-progress-value { background-color: var(--w); }
  
      section a { border: .2em solid var(--rt-1); }
  
      @media (min-width:500px) {
        h1      { font-size: 2.5em; max-width: 10em;  }
        h2      { font-size: 2.2em; }
        p       { font-size: 1.4em; }
        main    { padding: 2em;}

        header a { font-size: 1.1em;}

        section { padding: 4em 4em 6em 2em; }

        article p { width: 80%;}
      }
  
       @media (min-width:875px) {
          h1      { font-size: 2.7em; max-width: 10em;  }
          h2      { font-size: 2.4em; }
          p       { font-size: 1.6em; }
  
          header a { font-size: 1.2em;}

          progress[value] { min-width: 60%; }

          section { 
            align-items: end;
            padding: 7em 2em 0em 2em; 
        }

        article {  text-align: end; height: 28em;
                width: 25em; padding: 0 3.5em 0 0;}
        article p { width: 100%;}
        .d-a { justify-content: end; }
          

       }
  </style>