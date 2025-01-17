<script>
    export let headerText_l1 = "Introductie"; 
    export let headerText_l2 = "drop-and-heal";
    export let progressValue = 0; 
    export let progressMax = 100; 
</script>

<header class="header">
    <h3>{headerText_l1}<br>{headerText_l2}</h3>
    <div class="progress-container" aria-busy="true" aria-describedby="progress-bar">
        <progress id="progress-bar" value={progressValue} max={progressMax}></progress>
    </div>
</header>

<style>
    .header {
        text-align: left;
        align-self: flex-start;
        width: 100%;
        margin-top: 2rem;
    }

    .header h3 {
        font-family: Calvino-Grande;
        font-size: 32px;
        font-weight: 100;
        margin-bottom: 1rem;
    }

    .progress-container {
        display: flex;
        align-items: center;
    }

    progress {
        appearance: none;
        border: none;
        height: 2px;
        width: 100%;
        background-color: transparent;
    }

    progress::-webkit-progress-bar {
        background-color: rgba(255, 255, 255, 0.2);
        border-radius: 10px;
    }

    progress::-webkit-progress-value {
        background-color: white;
        border-radius: 10px;
        border-right: 3px solid black;
        border-left: 3px solid black;
    }

    progress::-moz-progress-bar {
        background-color: white;
        border-radius: 10px;
    }

    @media (min-width: 65rem){
        .header {
            padding: 0 2rem 0 2rem;
        }

        .header h3 {
            font-size: 50px;
        }
    } 
</style>
