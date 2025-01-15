<script>
  // Props voor dynamische data
  export let imageSrc = "";
  export let imageAlt = "";
  export let actionText = "Start oefening";
  export let description = "Beschrijving";
  export let title = "Titel";
  export let communityDrops = "0";
  export let communityImages = [];
  export let buttonColor = "black";
</script>

<article class="card">
  <img class="card-image" src={imageSrc} alt={imageAlt} />
  <div class="exercise-info">
    <div class="startbutton" style="background-color: {buttonColor};">
      <a href="#">{actionText}</a>
    </div>
    <div class="exercise-text">
      <p>{description}</p>
      <h3>{title}</h3>
      <div class="exercise-subinfo">
        <a class="communitydrop" href="#">
          <div class="community-images">
            {#each communityImages as image}
              <img
                class="community-image"
                loading="lazy"
                src={image}
                alt="Community Image"
              />
            {/each}
          </div>
          <p>{communityDrops} community drops</p>
        </a>
      </div>
    </div>
  </div>
</article>

<style>
  .card {
    background-color: rgb(17, 17, 17);
    border-radius: 10px;
    padding: 1em;
    overflow: hidden;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    position: relative;
    padding-bottom: 4em;
    min-width: 100%;
    gap: 5em;
  }

  .card-image {
    display: flex;
    justify-content: center;
    width: -webkit-fill-available;
    border-radius: 20px 20px 0 0;
    margin-top: 1em;
    height: 250px;
  }

  .exercise-info {
    background-color: var(--b);
    border-left: #434343 solid 1px;
    border-right: #434343 solid 1px;
    border-bottom: #434343 solid 1px;
    border-radius: 0 0 20px 20px;
    padding: 0.1em;
    margin-top: -100px;
    position: absolute;
    left: 0;
    right: 0;
    z-index: 1;
  }

  .startbutton {
    position: absolute;
    bottom: 85%;
    left: 52%;
    background-color: var(--rt-1);
    text-decoration: none;
    border-radius: 80px;
    padding: 0.6em 1.2em;
    color: white;
    text-align: center;
  }

  .startbutton a {
    color: white;
    text-decoration: none;
  }

  .startbutton h3 {
    margin: 0;
  }

  .exercise-text {
    margin: 1em;
  }

  .exercise-text a {
    text-decoration: none;
    align-items: center;
    color: white;
    border: solid var(--g) 2px;
    border-radius: 20px;
    padding: 0.2em;
    padding-left: 1em;
    padding-right: 1em;
  }

  .exercise-subinfo {
    margin-top: 1em;
  }

  .communitydrop {
    display: flex;
    width: 14.1em;
    margin-bottom: 3em;
  }

  .community-images {
    margin-right: 0.5em;
    justify-content: center;
    align-items: center;
    display: flex;
  }

  .community-image {
    margin-right: -0.2em;
    border-radius: 50%;
  }

  h3 {
    color: white;
    margin-top: 0.2em;    
    margin-bottom: 0.2em;

  }
</style>
