<script>
    import HeaderIntro from '$lib/HeaderIntro.svelte'
    import BlurgradGreen from '$lib/blurgrad-green.svelte';

    //export let task;
    //console.log('Task:', task);
  
    function stripHtml(html) {
      return html.replace(/<\/?[^>]+(>|$)/g, "");
      // Verwijderd HTML tags die meegegeven zijn vanuit directus
    }
  
    let sub = "Jouw keuze"
    
  </script>
  
  <main class="intro-main">
    <HeaderIntro headerText_l1="Hulp op maat, of" headerText_l2="liever zelf kiezen?" progressValue={100} />
    <article class="intro-content">
      <section class="content-grid">
        <h2>{sub}</h2>
        <p>Als Yana iets vraagt wat je liever niet beantwoordt, is dat helemaal oké. Je kunt vragen overslaan wanneer jij dat wilt, je hoeft dit alleen maar aan te geven.<br><br>
          Liever zelf kiezen waar je start? Dat is ook mogelijk. Kies hieronder dan voor je eigen pad. Je kan op elk moment schakelen tussen de verschillende rouwtaken.<br><br>
          Jouw reis, jouw tempo.</p> 
      </section>
    </article>

    <BlurgradGreen customStyles="bottom: -120px; right: -100px" />

    <div class="intro-buttons">
      <div class="nav-buttons">
        <button>
          <a href="./multiple-task-1" class="nav-link">Eigen pad</a>
        </button>
        <button>
          <a href="./form-intro" class="nav-link">Gepersonaliseerd</a>
        </button>
      </div>

  </main>

<style>
    .nav-buttons {
        display: flex;
        justify-content: space-between;
        width: 100%;
        gap: 1rem;
        margin-bottom: 0.5rem; 
    }

    .nav-buttons button {
        padding: 1rem;
        background: none;
        border-radius: 50px;
        border: 1px solid white;
        white-space: nowrap;
        width: min-content; 
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        transition: background-color 0.3s, color 0.3s, border-color 0.3s;
    }

    .nav-buttons button:hover {
        background-color: rgba(255, 255, 255, 0.1); 
        border-color: rgba(255, 255, 255, 1); 
        color: rgba(255, 255, 255, 1); 
    }

    .nav-buttons button:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }

    .nav-link {
        text-decoration: none;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        color: white;
    }
</style>