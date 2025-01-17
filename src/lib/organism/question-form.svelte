<script>
  import QuestionSet from '../molecules/question-set.svelte';
  let currentStep = 0;

  let questions = [{
    legend: "Hoe denk je over het verlies?",
    name: "question1",
    class:"show={current === 1} class:hide={current != 1}",
    options: [
      {value: "f1-i-1", labelText: "Ik voel intens verdriet of pijn wanneer ik aan het verlies denk."},
      {value: "f1-i-2", labelText: "Het voelt nog steeds onwerkelijk, alsof het niet echt is gebeurd."},
      {value: "f1-i-3", labelText: "Ik probeer manieren te vinden om mijn dagelijkse leven aan te passen."},
      {value: "f1-i-4", labelText: "Ik begin de persoon een plek te geven in mijn herinneringen en probeer door te gaan."}
    ]
  },
  {
    class:"show={current === 2} class:hide={current != 2}",
    legend: "Hoe vaak ervaar je emotionele pijn gerelateerd aan het verlies?",
    name: "question2",
    options: [
      { value: "f2-i-1", labelText: "Vrijwel constant voel ik verdriet en rouw."},
      { value: "f2-i-2", labelText: "Soms voel ik pijn, maar ik probeer verder te gaan."},
      { value: "f2-i-3", labelText: "Het wordt minder intens en ik vind troost in herinneringen."},
      { value: "f2-i-4", labelText: "Ik voel geen sterke emoties over het verlies, meer verwarring."}
    ]
  },
  {    
    class:"show={current === 3} class:hide={current != 3}",
    legend: "Hoe kijk je naar een toekomst zonder je dierbare?",
    name: "question3",
    options: [
      { value: "f3-i-1", labelText: "Ik kan me een toekomst zonder hen niet voorstellen."},
      { value: "f3-i-2", labelText: "Ik probeer nieuwe routines te ontwikkelen zonder hen."},
      { value: "f3-i-3", labelText: "Ik begin hoop te zien voor de toekomst en herinner me hen met liefde."},
      { value: "f3-i-4", labelText: "Ik voel me overweldigd door het verdriet en kan niet aan de toekomst denken."}
    ]
  }]

  function nextStep() {
    if (currentStep < questions.length - 1) currentStep++;
  }

  function prevStep() {
    if (currentStep > 0) currentStep--;
  }
</script>

<form  method="POST" action="?/submit">
  <div>
  {#each questions as question, index}
    <!-- QuestionSet / fieldsets-->
    <QuestionSet
      index={index}
      currentStep={currentStep}
      legend={question.legend}
      name={question.name}
      options={question.options}
    />
  {/each}
  </div>

  <div>
    <button class="curButton" type="button" on:click={prevStep} disabled={currentStep === 0}>
      Terug</button>
    <button class="curButton" type="button" on:click={nextStep} disabled={currentStep === questions.length - 1}>
      Volgende</button>
    {#if currentStep === questions.length - 1}
      <button type="submit">Bekijk uw resultaat</button>
    {/if}
  </div>

  <button class="submitButton" type="submit">Submit</button>
</form>

<style>
  form {
    align-items: center;
    container-name: form-banner;
    container-type: inline-size;
    display: flex;
    flex-direction: column;
    width: 100%;
    z-index: 10;
  }

  div:nth-of-type(1) {
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 7.5em;
    position: relative;
    text-align: center;
    width: 100%;
  }

  button {
    background-color: transparent;
    border: .1em solid var(--b-z);
    border-radius: 1em;
    color: var(--w);
    cursor: pointer;
    font-size:clamp(1rem, 5vw, 1.2rem);
    padding: 1em 1.5em;
    width: 9em;
    transition: all 0.5s ease-in;
  }

  button:active {
    background-color: var(--w);
    border: .1em solid var(--w);
    color: var(--b);
  }

  button:hover {
    background-color: var(--b-h);
    border: .1em solid var(--w);
    color: var(--b);
  }

  button:focus-within {
    outline: 3px solid var(--b-f);
  }

  .curButton:disabled {
    display: none;
  }

  .submitButton {
    margin: 5em 0 0 0;
  }

  div:nth-of-type(2) {
    display: flex;
    gap: 1em;
    justify-content: space-evenly;
    width: 100%;
  }

  /* media query if script is on */
  @media (scripting: enabled) {
    .submitButton { display: none; }
    div:nth-of-type(1) {
      height: 40em;
    }
    @container form-banner (width > 22em) {
      div:nth-of-type(1) { 
        height: 32em;
      }
      div:nth-of-type(2) {
        gap: 2em;
      }
    }

    @container form-banner (width > 40em) {
      div:nth-of-type(1) { 
        height: 25em;
      }
      div:nth-of-type(2) {
        gap: 4em;
      }
    }
  }

  /* media query if script is off */
  @media (scripting: none) {
    .curButton { display: none; }
  }
</style>
