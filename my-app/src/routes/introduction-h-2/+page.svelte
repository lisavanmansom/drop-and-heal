<script>
    import BlurgradRed from '$lib/blurgrad-red.svelte';
    import NavButtons from '$lib/NavButtons.svelte';
    import HeaderIntro from '$lib/HeaderIntro.svelte'
    //export let task;
    //console.log('Task:', task);
  
    let sub = "Ontmoet Yana"
  
  </script>
  
  <main class="intro-main">
    <HeaderIntro headerText_l1="Hulp op maat, of" headerText_l2="liever zelf kiezen?" progressValue={90} />
    <article class="intro-content">
      <section class="content-grid">
          <h2>{sub}</h2>
          <p>Maak kennis met Yana, jouw persoonlijke digitale hulp. Yana is getraind met informatie uit een breed scala literatuur over rouw.<br><br>
            Yana kan je voorzien van een programma dat bij jou aansluit.</p> 
      </section>
    </article>

    <BlurgradRed customStyles="bottom: -120px; right: -100px" />

    <section class="intro-buttons">
      <NavButtons leftLink="./introduction-h-1" rightLink="./introduction-h-3" borderColor="var(--rt-2)"/>
    </section>
  </main>
  