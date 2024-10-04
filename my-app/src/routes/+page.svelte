<script>
    import MeshgradBlue from '$lib/meshgrad-blue.svelte';
    import BlurgradBlue from '$lib/blurgrad-blue.svelte';
    import BlurgradRed from '$lib/blurgrad-red.svelte';
    import BlurgradGreen from '$lib/blurgrad-green.svelte';
    import BlurgradPink from '$lib/blurgrad-pink.svelte';
    import ArrowL from '$lib/arrow-l.svelte';
    import ArrowR from '$lib/arrow-r.svelte';

    // Current active section
    let currentSection = 1;

    // Functions to navigate sections
    function goToSection(section) {
        if (section > 0 && section <= 5) {
            currentSection = section;
        }
    }
</script>

<main>
    <!-- Section 1 -->
    <section class:active={currentSection === 1}>
        <header>
            <h2>Drop & Heal</h2>
        </header>
        <MeshgradBlue />
        <p>Welkom bij Drop & Heal. Een veilige plek voor jouw reis door rouwverwerking.</p>
        <p>Er volgt eerst een introductie en kennismaking, hierna kan je op eigen tempo aan de slag in de omgeving.</p>
        <button class="start-button" on:click={() => goToSection(2)}>Starten</button>
    </section>

    <!-- Section 2 -->
    <section class:active={currentSection === 2}>
        <header>
            <p>Drop & Heal is een metafoor voor het loslaten van de zware last van verdriet en het starten van een helend proces. Als een druppel in het water valt, wordt het onderdeel van een groter, krachtiger geheel, dit gebeurt ook wanneer we ons verdriet delen. 'Drop' verwijst naar het moment waarop je je verdriet of emoties deelt, laat vallen, of erkent. 'Heal' staat voor het genezingsproces dat volgt, waarbij je op je eigen tempo de stappen zet naar herstel en acceptatie. Het is een uitnodiging om je verdriet te erkennen, het los te laten en jezelf toe te staan te helen, stap voor stap, druppel voor druppel.</p>
        </header>
        <BlurgradBlue />
        <div class="nav-buttons">
            <button on:click={() => goToSection(1)}><ArrowL /></button>
            <button on:click={() => goToSection(3)}><ArrowR /></button>
        </div>
    </section>

    <!-- Section 3 -->
    <section class:active={currentSection === 3}>
        <header>
            <h2>Introductie algemeen</h2>
            <h3>Privacy</h3>
            <p>Jouw privacy en comfort zijn onze prioriteit. Alles wat je deelt blijft vertrouwelijk.</p>
        </header>
        <BlurgradRed />
        <div class="nav-buttons">
            <button on:click={() => goToSection(2)}><ArrowL /></button>
            <button on:click={() => goToSection(4)}><ArrowR /></button>
        </div>
    </section>

    <!-- Section 4 -->
    <section class:active={currentSection === 4}>
        <header>
            <h2>Introductie algemeen</h2>
            <h3>Tools</h3>
            <p>We hebben tools samengesteld om je te ondersteunen in je reis door rouw. Straks geven we een rondleiding binnen de omgeving.</p>
        </header>
        <BlurgradGreen />
        <div class="nav-buttons">
            <button on:click={() => goToSection(3)}><ArrowL /></button>
            <button on:click={() => goToSection(5)}><ArrowR /></button>
        </div>
    </section>

    <!-- Section 5 -->
    <section class:active={currentSection === 5}>
        <header>
            <h2>Introductie algemeen</h2>
            <h3>Rouwtaken</h3>
            <p>Onze methode is gebaseerd op de erkende rouwtaken van William Worden, Amerikaans rouwexpert...</p>
        </header>
        <BlurgradPink />
        <div class="nav-buttons">
            <button on:click={() => goToSection(4)}><ArrowL /></button>
            <button disabled><ArrowR /></button>
        </div>
    </section>

    <style>
        main {
            height: 100vh;
            overflow: hidden;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            color: white;
            background-color: black;
        }
    
        section {
            display: none;
            flex-direction: column;
            align-items: center;
            justify-content: center; 
            height: 100%;
            padding: 20px;
            text-align: center;
            position: relative; 
        }

    
        section.active {
            display: flex;
        }
    
        header {
            margin-bottom: 20px;
            width: 60%;
        }

        header h2 {
            margin-bottom: 3rem;
        }
        
        .nav-buttons, .start-button {
            position: absolute;
            bottom: 20px; /* Keep button/nav-buttons at the bottom */
        }

        .nav-buttons {
            display: flex;
            justify-content: space-between;
            width: 100%;
            max-width: 7rem;
        }

        .start-button {
            background: none;
            border: 1px solid #F5F5F5;
            color: white;
            padding: 10px 20px;
            font-size: 1em;
            cursor: pointer;
            border-radius: 25px;
            transition: background-color 0.3s;
        }

        .start-button:hover {
            background-color: rgba(245, 245, 245, 0.1);
        }

        button {
            background: none;
            border: none;
            cursor: pointer;
            color: white;
            font-size: 2em;
        }

        button:disabled {
            opacity: 0.5;
            cursor: not-allowed;
        }
    </style>
    
</main>
