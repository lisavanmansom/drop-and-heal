<script>
    import BlurgradBlue from '$lib/blurgrad-blue.svelte';
    import NavButtons from '$lib/NavButtons.svelte';
    import HeaderIntro from '$lib/HeaderIntro.svelte'
    //export let task;
    //console.log('Task:', task);
  
    let sub = "Persoonlijke reis"
  </script>
  
  <main class="intro-main">
    <HeaderIntro headerText_l1="Hulp op maat, of" headerText_l2="liever zelf kiezen?" progressValue={80} />
    <article class="intro-content">
        <section class="intro-content-grid">
            <h2>{sub}</h2>
            <p>Nu je meer weet over de rouwtaken zelf, is het tijd om jouw persoonlijke reis te samen te stellen.<br><br>
              Rouw is een uniek proces en niet lineair, daarom bieden we ondersteuning om je verder te helpen.</p> 
        </section>
      </article>

    <BlurgradBlue customStyles="bottom: -120px; right: -100px" />

    <section class="intro-buttons">
      <NavButtons leftLink="./introduction-task-4" rightLink="./introduction-h-2" borderColor="var(--rt-1)"/>
    </section>
  </main>
  