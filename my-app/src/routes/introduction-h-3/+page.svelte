<script>
    export let task;
    console.log('Task:', task);
  
    function stripHtml(html) {
      return html.replace(/<\/?[^>]+(>|$)/g, "");
      // Verwijderd HTML tags die meegegeven zijn vanuit directus
    }
  
    import {ArrowR} from '$lib'
    import ViewTransition from '../navigation.svelte'
  
    let title = "Hulp op maat, of liever zelf kiezen?"
    let sub = "Jouw keuze"
    let des = "Als Yana iets vraagt wat je liever niet beantwoordt, is dat helemaal oké. Je kunt vragen overslaan wanneer jij dat wilt, je hoeft dit alleen maar aan te geven. Liever zelf kiezen waar je start? Dat is ook mogelijk. Kies hieronder dan voor je eigen pad. Je kan op elk moment schakelen tussen de verschillende rouwtaken. Jouw reis, jouw tempo."
    
  </script>

<div class="app">
  <ViewTransition />
</div>
  
  <main>
    <header>
        <h1>{title}</h1>
        <a href="../chatbot">skip</a>

        <div aria-busy="true" aria-describedby="progress-bar"></div>
        <progress value="95" max="100"></progress>

    </header>
    <section>
        <article>
            <h2>{sub}</h2>
            <p>{des}</p> 
                <div class="d-a">
                    <a href="./introduction-task-3">Eigen pad</a>
                    <a href="./chatbot">Gepersonaliseerd</a>
                </div>
        </article>
    </section>
  </main>
  
  <style>
      h1, h2  { font-family: Calvino; }
      h1      { font-size: 2em; font-weight: 600; z-index:3; max-width: 8em;}
      h2      { font-weight: 100; font-size: 1.6em;}
  
      p       { color: var(--g); font-weight: 100; font-size: 1.2em;}
      a       { text-decoration: none; color: var(--w); border: .1em solid var(--rt-3);}
  
      main {
        background-color: var(--b);
        background-image: url("/gradients/Gr-green.png");
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
        height: 15em;
        justify-content: space-between;
        padding: 0 0 0 1em;
      }

      header a {
        border-radius: .5em;
        font-size: 1em;
        padding: .3em .6em;
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
        position: absolute;
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
  
      article div { padding: 2em 0 2em 0; }
  
      section a {
        border: .1em solid var(--w);
        border-radius: 1.2em;
        height: 3em;
        width: 9.9em;
        text-align: center;
        padding: 0.8em 0em;
      }
  
      /* div w. arrows */
      .d-a {
        display: flex;
        flex-direction: column;
        gap: .5em;
        justify-content: space-evenly;
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
  
      @media (min-width:500px) {
        h1      { font-size: 2.5em; max-width: 10em;  }
        h2      { font-size: 2.2em; }
        p       { font-size: 1.4em; }
        main    { padding: 2em;}

        header a { font-size: 1.1em;}

        section { padding: 4em 4em 6em 2em; }

        article p { width: 80%;}
        .d-a { flex-direction: row; justify-content: start;}
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