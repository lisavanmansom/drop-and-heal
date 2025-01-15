<script>
  let active = "Vandaag"; // Standaard geselecteerde item
</script>

<nav>
  <a 
    class="item {active === 'Vandaag' ? 'active' : ''}" 
    href="#" >
    <!-- Vandaag SVG -->
    <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0.689453 11.5345L1.37491 11.2907C7.18987 9.2232 13.5535 9.30967 19.3101 11.5345" 
            stroke="currentColor" stroke-linecap="round"></path>
      <path d="M0.5 6.5C0.5 3.46243 2.96243 1 6 1H14C17.0376 1 19.5 3.46243 19.5 6.5V14.5C19.5 17.5376 17.0376 20 14 20H6C2.96243 20 0.5 17.5376 0.5 14.5V6.5Z" 
            fill="currentColor" stroke="currentColor"></path>
    </svg>
    <h5>Vandaag</h5>
  </a>
  
  <a 
    class="item {active === 'Praten' ? 'active' : ''}" 
    href="/chatbot" 

  >
    <!-- Praten SVG -->
    <svg width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M19.4138 14.6058C19.3657 14.4327 19.4715 14.1923 19.5724 14.0193C19.6033 13.9678 19.637 13.918 19.6734 13.8702C20.537 12.587 20.9989 11.0756 21.0003 9.52887C21.0148 5.09616 17.2744 1.5 12.6493 1.5C8.61568 1.5 5.25028 4.2452 4.46182 7.88944C4.34387 8.42957 4.28423 8.98081 4.28394 9.53368C4.28394 13.9712 7.8801 17.6635 12.5051 17.6635C13.2407 17.6635 14.2311 17.4423 14.7743 17.2933C15.3176 17.1443 15.8561 16.9472 15.9955 16.8943C16.1384 16.8404 16.2899 16.8127 16.4426 16.8125C16.6093 16.8119 16.7744 16.8446 16.9282 16.9087L19.6542 17.875C19.7139 17.9003 19.7771 17.9165 19.8417 17.9231C19.9437 17.9231 20.0415 17.8826 20.1136 17.8105C20.1858 17.7383 20.2263 17.6405 20.2263 17.5385C20.2229 17.4945 20.2149 17.451 20.2022 17.4087L19.4138 14.6058Z" 
            stroke="currentColor"></path>
    </svg>
    <h5>Praten</h5>
  </a>

  <a 
    class="item {active === 'Drops' ? 'active' : ''}" 
    href="#"  >
    <!-- Drops SVG -->
    <svg width="15" height="21" viewBox="0 0 15 21" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M13.4865 13.4425C13.4865 15.4743 12.8497 17.0673 11.766 18.151C10.6823 19.2346 9.08936 19.8715 7.05752 19.8715C5.02569 19.8715 3.43273 19.2346 2.34904 18.151C1.26536 17.0673 0.628522 15.4743 0.628522 13.4425C0.628522 11.3056 1.80844 8.70401 3.25929 6.34055C4.67469 4.03484 6.2798 2.06267 7.05776 1.15034C7.83556 2.06275 9.44051 4.03489 10.8558 6.34054C12.3066 8.70401 13.4865 11.3056 13.4865 13.4425Z" 
            stroke="currentColor"></path>
    </svg>
    <h5>Drops</h5>
  </a>

  <a 
    class="item {active === 'Profiel' ? 'active' : ''}" 
    href="#" >
    <!-- Profiel SVG -->
    <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 10C12.2091 10 14 8.20914 14 6C14 3.79086 12.2091 2 10 2C7.79086 2 6 3.79086 6 6C6 8.20914 7.79086 10 10 10Z" 
            stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M16 18.5C16 15.4624 13.3137 13 10 13C6.68629 13 4 15.4624 4 18.5" 
            stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
    <h5>Profiel</h5>
  </a>
</nav>

<style>
  nav {
    display: flex;
    justify-content: space-between;
    background-color: #111;
    padding: 0.5em;
    position: fixed;
    bottom: 0;
    width: 100%;
    z-index: 72;
    border-top: 2px solid var(--border-color);
  }

  .item {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: var(--g); /* Grijze kleur */
    cursor: pointer;
    transition: color 0.2s;
    margin: 0.5em;
    margin-left: 1em;
    text-decoration: none;
  }

  .item.active {
    color: var(--w); /* Witte kleur */
  }

  svg {
    fill: currentColor; /* Past de kleur aan */
  }
</style>
