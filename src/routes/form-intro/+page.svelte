<script>
  import {BlurgradPink, QuestionForm} from '$lib'
  
</script>
  
<main>
  <div>
    <h1>Vragenlijst gepersonaliseerd programma</h1>
    <label>
      <progress value="70" max="100">70 %</progress>
    </label>
  </div>

  <hgroup>
    <h2>We stellen 12 vragen om een programma op maat voor je samen te stellen.</h2>
    <p>*Mocht je een vraag niet prettig vinden om te beantwoorden dan kan je deze altijd overslaan. </p>
  </hgroup>
  <QuestionForm />

  <div aria-hidden="true">
    <BlurgradPink pageStyle="form-page" />
  </div>

  <div aria-hidden="true">
    <BlurgradPink pageStyle="form-page"/>
  </div>
</main>
  
<style>
  h1  { font-family: Calvino; z-index: 10; }
  h2, p { font-family: Figtree;}
  h1  { font-size: clamp(2.2rem, 10vw, 3.5rem); font-weight: 600;}
  h2  { font-weight: 100; font-size:clamp(1.6rem, 5vw, 2rem);}
  
  p   { color:var(--b-h); font-weight: 100; font-size:clamp(1rem, 5vw, 1.2rem); font-style: italic;}

  main {
    align-items: center;
    background-color: var(--b);
    color: var(--w);
    display: flex;
    flex-direction: column;
    gap: 7.5em;
    justify-content: center;
    min-height: 100dvh;
    overflow: hidden;
    padding: 10em 2em 5em;
    position: relative;
    text-align: center;
    width: 100%;
  }

  div:nth-of-type(1), hgroup {
    display: flex;
    flex-direction: column;
    gap: 1em;
    z-index: 10;
  }

  div:nth-of-type(1) {
    gap: 2em;
  }

  div:nth-of-type(1) h1 {
    max-width: 15em;
  }

  progress[value] {
    appearance: none;
    border: none;
    height: .25em;
    -moz-appearance: none;
    -webkit-appearance: none;
    min-width: 100%;
  }
  
  progress[value]::-webkit-progress-bar {
    background-color: var(--progress-bg);
    border-radius: 20px;
  }
  
  progress[value]::-webkit-progress-value { background-color: var(--w); }


  div:nth-of-type(2) {
    position: absolute;
    top: 33em;
    transform: matrix(0, 1, 1, 0, 0, 0);
  }

  div:nth-of-type(3) {
    position: absolute;
    right: 0em;
    bottom: 0em;
  }
</style>