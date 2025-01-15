<script>
  import QuestionOption from '../atoms/question-option.svelte';
  let {name, index, currentStep, value, labelText, selectedOption, options, legend, ...others} = $props();
</script>

<!-- fieldset component-->
<fieldset class={index === currentStep ? 'show' : 'hide'}>
  <legend>{legend}</legend>
  {#each options as option}
  <!-- Question option / input component-->
    <QuestionOption
      name={name}
      value={option.value}
      labelText={option.labelText}
      bindGroup={selectedOption} 
    />
  {/each}
</fieldset>

<style>
  fieldset {
    border: none;
    display: flex;
    flex-direction: column;
    gap: 1.1em;
  }

  legend {
    font-size: 1.75em;
    margin: 0 0 1em 0;
  }

  @media (scripting: enabled) {
    fieldset {
    opacity: 0;
    visibility: hidden;
    position: absolute;
    transition: opacity 1s ease, visibility 0.5s ease;
  }

  .show {
    opacity: 1;
    visibility: visible;
  }

  .hide {
    opacity: 0;
    visibility: hidden;
  }
}
</style>
