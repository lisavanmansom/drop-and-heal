<script>
    let messages = [];
    let newMessage = '';
  
    function sendMessage() {
      messages = [...messages, { text: newMessage, timestamp: new Date().getTime() }];
      newMessage = '';
    }
  </script>

  <main>

  
  <section class="chatroom">
    <h1>Chatroom</h1>
    <ul>
      {#each messages as message}
        <li>{message.text} ({new Date(message.timestamp).toLocaleTimeString()})</li>
      {/each}
    </ul>
    
    
    <input type="text" bind:value={newMessage} placeholder="Type je bericht"/>
    <button on:click={sendMessage}>Verstuur</button>
 

  </section>

 

              

  


</main>
  
  <style>

    main {
      display: flex;
      justify-content: center;
       width: 100%;
       margin: auto;
       margin-top: 2rem;
       letter-spacing: 0.5px;
       height: 100%;
    }

    
    .chatroom {
      max-width: 100%;
      height: 100vh;
      margin: 40px auto;
      padding: 20px;
      border: 1px solid #ccc;
      border-radius: 10px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      background-color: #303030;
      color: #d9d9d9;
    }

    h1 {
      color: #efefef;
      
    }

    ul li {
      list-style-type: none;
      position: relative;
      width: 200px;
      height: 100px;
      color: #f5f5f5;
      background-color: #1f1f1f;
      border: 2px solid #1f1f1f;
      border-radius: 10px;
      padding: 20px;
      margin: 2.5em;
    }

    ul li::before {
      content: "";
      position: absolute;
      bottom: -20px;
      right: 30%;
      border-width: 20px 20px 0;
      border-style: solid;
      border-color: #020202 transparent;
      display: block;
      width: 0;
}

input[type=text] {
  padding: .8em;
  border-radius: 50px;
  width: 90%;
}

input[type=text]:focus-visible {
  outline: 2px solid teal;
  border-radius: 3px;
}



    /* Desktop styles */
@media only screen and (min-width: 1025px) {
  .chatroom {
    width: 100%;
    margin: 40px auto;
  }
}

    @media only screen and (max-width: 768px) {
  .chatroom {
    width: 100%;
    margin: 0;
    padding: 10px;
  }
}

/* styles here will apply to extra small mobile devices */
@media only screen and (max-width: 480px) {
  .chatroom {
    width: 100%;
    margin: 0;
    padding: 10px;
  }
  
}



  </style>