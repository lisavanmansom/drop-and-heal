<script>
    // export let csr = true;
  </script>
  
  <div class="header">
    <div class="title">
      <div class="title-row">
        <h1>De pijn doorvoelen</h1>
        <a href="#"
          ><img loading="lazy" src="/icon/arrow-down.png" alt="arrow down" /></a
        >
      </div>
      <progress value="25" max="100"></progress>
    </div>
  </div>
  npm 
  <div class="main-page">
    <div class="images">
      <img id="image1" src="/icon/mesh-grad.png" alt="" />
      <img src="/icon/rouwtaak1.png" alt="" />
      <img id="image3" src="/icon/mesh-grad.png" alt="" />
    </div>
    <h2>Rouwstappen van de dag</h2>
    <h4>1 oefening open vandaag</h4>
  </div>
  
  <div class="exercises">
    <div class="card">
      <div class="card-image">
        <img src="/icon/storm.png" alt="" />
      </div>
      <div class="exercise-info">
        <div class="startbutton">
          <a href="#"><h3>Start oefening</h3></a>
        </div>
        <div class="exercise-text">
          <p>Oefening</p>
          <h2>Emoties herkennen</h2>
          <div class="exercise-subinfo">
            <a class="communitydrop" href="#">
              <div class="community-images">
                <img class="community-image" src="/icon/community1.png" alt="" />
                <img class="community-image" src="/icon/community2.png" alt="" />
                <img class="community-image" src="/icon/community3.png" alt="" />
              </div>
              <p>47 community drops</p></a
            >
          </div>
        </div>
      </div>
    </div>
  
    <div class="card">
      <div class="card-image">
        <img src="/icon/storm.png" alt="" />
      </div>
      <div class="exercise-info">
        <div class="startbutton">
          <a href="#"><h3>Start oefening</h3></a>
        </div>
        <div class="exercise-text">
          <p>Oefening</p>
          <h2>Emoties herkennen</h2>
          <div class="exercise-subinfo">
            <a class="communitydrop" href="#">
              <div class="community-images">
                <img class="community-image" src="/icon/community1.png" alt="" />
                <img class="community-image" src="/icon/community2.png" alt="" />
                <img class="community-image" src="/icon/community3.png" alt="" />
              </div>
              <p>47 community drops</p></a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
  
  <!-- Sticky Footer -->
  <footer class="footer">
    <div class="item">
      <img src="/icon/square.png" alt="" />
      <h5>Vandaag</h5>
    </div>
    <div class="item">
      <img src="/icon/messages.png" alt="" />
      <h5>Praten</h5>
    </div>
    <div class="item">
      <img src="/icon/drops.png" alt="" />
      <h5>Drops</h5>
    </div>
    <div class="item">
      <img src="/icon/profile.png" alt="" />
      <h5>Profiel</h5>
    </div>
  </footer>
  
  <style>
    :root {
      --w: #ffff;
      --g: #434343;
      --b: #111111;
      --rt-1: #64aac7;
      --rt-2: #984a4a;
      --rt-3: #6e9158;
      --rt-4: #7c6097;
    }
  
    h1,
    h2 {
      font-family: Calvino;
    }
  
    em {
      font-family: dm-serif;
    }
  
    /* Flexbox voor body */
    body {
      display: flex;
      flex-direction: column;
      min-height: 100vh;
      margin: 0;
      background-color: var(--b);
    }
  
    .header {
      background-color: var(--b);
      padding-top: 1em;
      width: 100%;
      color: var(--w);
      border-bottom: 1px solid var(--g);
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
  
    .title-row img {
      width: 15px;
    }
  
    .title progress {
      width: 55%;
      height: 2px;
      margin-top: 1em;
      appearance: none;
    }
  
    progress::-webkit-progress-bar {
      margin-top: -0.5em;
      background-color: var(--g);
      border-radius: 5px;
      border: none;
    }
  
    progress::-webkit-progress-value {
      background-color: var(--rt-2);
    }
  
    .main-page {
      position: relative;
      background-color: var(--b);
      color: white;
      justify-content: center;
      text-align: center;
      padding-top: 3em;
      flex-grow: 1;
      overflow: hidden;
      padding-bottom: 2em; 
    }
  
    #image1 {
      position: absolute;
      top: -65%;
      right: 40%;
      width: 800px;
    }
  
    #image3 {
      position: absolute;
      top: -65%;
      left: 40%;
      width: 800px;
    }
  
    .main-page h2 {
      margin-top: 1em;
      margin-bottom: 0.3em;
    }
  
    .main-page h4 {
      color: grey;
    }
  
    .main-page img {
      width: 200px;
    }
  
    .exercises {
      background-color: #1d1d1d;
      border-radius: 20px 20px 0 0;
      width: 100%;
      margin-top: -1.1em;
      padding-bottom: 8em;
      position: relative;
      z-index: 0; 
      padding-bottom: 10em;
    }
  
    .card {
      margin: 1.25em;
      position: relative; 
      overflow: hidden;
      padding-bottom: 4em;
    }
  
    .card-image {
      display: flex;
      justify-content: center;
    }
  
    .card-image img {
      margin-top: 1em;
      border-radius: 20px 20px 0 0;
      width: 400px;
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
      background-color: var(--rt-2);
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
  
    .footer {
      display: flex;
      justify-content: space-between;
      background-color: var(--b);
      color: white;
      padding: 0.5em;
      width: 100%;
      border-top: 1px solid var(--g);
      position: fixed;
      bottom: 0;
      left: 0;
    }
  
    .item {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin: 1em;
      gap: 10px;
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
  </style>
  