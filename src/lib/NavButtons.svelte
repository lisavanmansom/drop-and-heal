<script>
    import ArrowL from '$lib/arrow-l.svelte';
    import ArrowR from '$lib/arrow-r.svelte';

    export let leftLink = "#"; 
    export let rightLink = "#"; 
    export let borderColor = "#FFFFFF";
</script>

<div class="nav-buttons">
    <a href={leftLink} class="nav-link" style="border: 1px solid {borderColor}">
        <ArrowL />
    </a>
    <a href={rightLink} class="nav-link" style="border: 1px solid {borderColor}">
        <ArrowR />
    </a>
</div>

<style>
    .nav-buttons {
        display: flex;
        justify-content: space-between;
        width: 100%;
        max-width: 7rem;
        gap: 0.5rem;
        margin-bottom: 0.5rem; 
    }

    .nav-buttons a {
        background: none;
        border-radius: 50%;
        width: 50px;
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        transition: background-color 0.3s, color 0.3s, border-color 0.3s;
        text-decoration: none;
    }

    .nav-buttons a:hover {
        background-color: rgba(255, 255, 255, 0.1); 
        border-color: rgba(255, 255, 255, 1); 
        color: rgba(255, 255, 255, 1); 
    }

    .nav-buttons a:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }

    .nav-link {
        color: inherit;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
    }
</style>