# Creative coding spikes

## Beschrijving

Een spike is een taak gericht op het beantwoorden van een vraag of het verzamelen van informatie. In plaats van het produceren van een verzendbaar product. Bij sommige taken kan niet goed ingeschat worden tot het ontwikkelteam daadwerkelijk wat werk verricht om een technische vraag of ontwerpprobleem op te lossen. De oplossing is dan om een zogenaamde 'spike' te creëren.

<img width="100%" alt="Scherm­afbeelding 2024-12-22 om 13 05 18" src="https://github.com/user-attachments/assets/9b4234c4-c6cc-4876-bdcd-0f6fd7590f3d" />

## Kenmerken

De creative spikes zijn gemaakt met het framework Sveltekit. Met de creative spike zijn er nieuwe technieken uitgetest zoals view transitions en scroll driven animations. Om volledig creatief los te kunnen gaan is er gekozen om niet de huisstijl te volgen van de opdrachtgever maar met thema's te werken bij elke creative spike. Door dit te doen is er meer conceptueel gewerkt en zijn er verschillende creative mogelijkheden uitgeprobeerd.

# Scroll driven animation

**Live-link: https://dry-drop-and-heal-git-homepage-s-6f2274-lisavanmansoms-projects.vercel.app/homepage**

### Thema

![Image](https://github.com/user-attachments/assets/bfb73bca-5e4b-404b-9805-1365e3c28d16)

### Scrolldriven animation 1

Ik heb in Figma 2 'glass windows' gemaakt, deze wil ik via een scrolldriven-animation uit het scherm animeren. Als je de site opent is de bedoeling dat je niks ziet door het glass-effect. Als je scrollt verplaatsen de png's uit de viewport en kan je de inhoud van de site bekijken

### Scrolldriven animation 2

De _sticky skeleton_ animatie is op dezelfde manier opgebouwd als de _glass animation_ alleen blijft de skeleton sticky in beeld tijdens het scrollen. Dit zou eventueel ook met `position: sticky;` mogelijk zijn. Aan de onderkant van de section verdwijnt de skeleton, hierdoor is er een mogelijkheid om verder te gaan met andere sections.

### Scrolldriven animation 3 / Horizontal scroll section

Ik heb de `section` een volledige viewport height gegeven voor zodat het eenvoudige kan scrollen. Door de viewtimeline kan de er getracked worden wanneer er gehorizontaal moet worden gescrolled.

Bij `.pin-wrap-sticky` is de property `position: sticky;` meegegeven zodat het in beeld blijft tijdens het scrollen. De `.pin-wrap` wordt uiteindelijk geanimeerd op de `viewtimeline`. Verder staan er properties voor de positie bij `.pin-wrap` class, hierdoor kan alles zichtbaar worden tijdens de horizontal scroll.

## Visuals

<img width="100%" alt="Scherm­afbeelding 2024-12-22 om 13 24 55" src="https://github.com/user-attachments/assets/778ac655-5152-4e0b-8f24-0870d6d34be3" />


# Christmas edition

**Live-link: https://dry-drop-and-heal-git-hhh-glamou-d0f130-lisavanmansoms-projects.vercel.app/form-intro**

### Thema

<img width="100%" alt="Scherm­afbeelding 2024-12-16 om 14 19 55" src="https://github.com/user-attachments/assets/05a8c416-a85d-467e-9d74-7d01598eb0e0" />

### Form-page

Voor de form-page heb ik de kleurpalette aangepast naar rood om het meer kerst te maken. Verder heb ik ook de animatie van de fieldsets aangepast. Tot slot heb ik een draaiende kerstboom toegevoegd om het helemaal kerst te maken.

Ik heb [christmastree-gradient file](https://github.com/lisavanmansom/dry-drop-and-heal/blob/hhh-glamour-christmas/my-app/src/lib/atoms/christmastree-gradient.svelte) aangemaakt om een kerstboom shader toe te voegen aan de layout. Onder 'Fragment Shader' staat de shader code daaronder staat de code om de shader te implementeren in svelte. Ik maak gebruik van comments om onderscheid en hiërarchie te creëren in het file.

### View transition

De view transition is zichtbaar  bij elke pagina als je gaat navigeren naar een andere pagina. De view transition crossfade naar een statisch beeld wat zichtbaar is voor 3 secondes daarna crossfade het terug naar de pagina waar de gebruiker naar navigeert.

## Visuals

<img width="100%" alt="Scherm­afbeelding 2024-12-22 om 13 18 28" src="https://github.com/user-attachments/assets/fd63a32b-f2ad-4ff2-b54f-1f8327d5823a" />

## Installatie
- Installeer NodeJs;
- Fork/clone deze repository;
- Open het in een code editor;
- Ga naar de directory 'my-app' door in de terminal cd my-app te typen;
- Run de command npm install;
- Run de command npm run dev;
- Klik op de localhost link en begin met coden.

## Bronnen
- https://scroll-driven-animations.style
- https://css-tricks.com/unleash-the-power-of-scroll-driven-animations/
- https://developer.mozilla.org/en-US/docs/Web/API/View_Transition_API
- https://developer.chrome.com/docs/web-platform/view-transitions?hl=nl

