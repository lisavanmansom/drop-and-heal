<script>
  let {name, value, labelText, bindGroup, ...others} = $props();
</script>

<!-- input component-->
<label>
  <input type="radio" name={name} value={value} bind:group={bindGroup} />
  {labelText}
</label>


<style>
  input[type='radio'] {
    position: absolute;
    left: -10000px;
  }

  label {
    border: .1em solid var(--b-z);
    border-radius: 15px;
    cursor: pointer;
    font-size: 1.25em;
    overflow: hidden;
    padding: .5em .45em;
    position: relative;
  }

  label:has(input[type=radio]) {
    transition: all 0.5s ease-in;
  }

  label:has(input[type=radio]:hover) {
    background-color: var(--b-h);
    border: .1em solid var(--w);
    color: var(--b);
  }

  label:has(input[type=radio]:checked) {
    background-color: var(--w);
    border: .1em solid var(--w);
    color: var(--b);
  }

  label:focus-within {
    outline: 3px solid var(--b-f);
  }
</style>