<script>
  export let title = "Geen titel";
  export let progressValue = Math.random() * 100;
  export let progressColor = "red";
  
  let isMenuOpen = false; 
  
  function toggleMenu() {
    isMenuOpen = !isMenuOpen;
  }
</script>

<header class="header">
  <div class="title">
    <div class="title-row">
      <h1>{title}</h1>
    </div>
    <progress value={progressValue} max="100" style="--progress-color: {progressColor}"></progress>
  </div>

  <button class="hamburger" on:click={toggleMenu}>
    &#9776;
  </button>

  <div class="navigation-items {isMenuOpen ? 'open' : ''}">
    <a href="multiple-task-1" class="item">
      <img src="/icon/rouwtaak-1.png" alt="">
      Het verlies aanvaarden
    </a>
    <a href="multiple-task-2" class="item">
      <img src="/icon/rouwtaak-2.png" alt="">
      De pijn doorvoelen
    </a>
    <a href="multiple-task-3" class="item">
      <img src="/icon/rouwtaak-3.png" alt="">
      Verder in verandering
    </a>
    <a href="multiple-task-4" class="item">
      <img src="/icon/rouwtaak-4.png" alt="">
      Emotioneel verder
    </a>
  </div>
</header>

<style>
  :root {
    --w: #ffff;
    --b: #111;
    --g: #a6a6a6;
    --progress-bg: #595959;
    --border-color: #1F1F1F;
  }

  header {
    background-color: var(--b);
    width: 100%;
    color: var(--w);
    border-bottom: 2px solid var(--border-color);
    margin-bottom: 1em;
    margin: 0em;
    position: relative;
  }

  .header {
    display: flex;
    margin-left: auto;
    justify-content: space-between;
    align-items: center;
  }

  .title {
    margin: 1em;
  }

  .title-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }

  .title-row h1 {
    font-family: Calvino;
    margin: 0;
    font-size: 2em;
    max-width: none;
  }

  progress {
    width: 55%;
    height: 2px;
    margin-top: 1em;
    appearance: none;
  }

  progress::-webkit-progress-bar {
    background-color: var(--g);
    border-radius: 5px;
  }

  progress::-webkit-progress-value {
    background-color: var(--progress-color);
  }

  /* Hamburger button */
  .hamburger {
    display: none;
    background: none;
    border: none;
    color: var(--w);
    font-size: 30px;
    cursor: pointer;
    margin-right: 1em;
  }

  .navigation-items {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    display: block;
  }

  .navigation-items.open {
    display: flex;
  }

  .item {
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 1em;
    color: var(--w);
    margin-right: 20px;
    text-align: center;
    flex-direction: column;
    transition: 0.5s all;
    border: 2px solid transparent;
    border-radius: 5px; 
  }

  .item img {
    width: 50px;
    height: 50px;
    background-color: #1F1F1F;
    padding: 0.2em;
    border-radius: 5px;
    margin-bottom: 10px; 
  }

  .item:hover {
    scale: 1.1;
  }

  /* Mobile - Hamburger Menu */
  @media (max-width: 1200px) {
    .hamburger {
      display: block;
    }

    .navigation-items {
      display: none;
      flex-direction: column;
      align-items: flex-start;
      width: 100%;
      background-color: var(--b);
      padding: 1em;
      position: absolute;
      top: 70px;
      left: 0;
      z-index: 10;
      margin: 0;
    }

    .navigation-items.open {
      display: flex;
    }

    .navigation-items .item {
      margin: 1em 0;
      width: 100%;
      text-align: left;
    }

    .navigation-items.open .item {
      border: 2px solid var(--border-color);
    }
  }

  @media (min-width: 1201px) {
    .navigation-items {
      display: flex;
      flex-wrap: wrap;
    }

    .item {
      margin: 0 1em;
      flex-direction: column;
      max-width: 10ch;
    }
  }
</style>
