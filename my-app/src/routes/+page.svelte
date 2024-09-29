<script>
    let messages = [];
    let newMessage = '';
  
    function sendMessage() {
      messages = [...messages, { text: newMessage, timestamp: new Date().getTime() }];
      newMessage = '';
    }
  </script>
  
  <div class="chatroom">
    <h1>Chatroom</h1>
    <ul>
      {#each messages as message}
        <li>{message.text} ({new Date(message.timestamp).toLocaleTimeString()})</li>
      {/each}
    </ul>
    <input type="text" bind:value={newMessage} />
    <button on:click={sendMessage}>Send</button>
  </div>
  
  <style>
    .chatroom {
      max-width: 400px;
      margin: 40px auto;
      padding: 20px;
      border: 1px solid #ccc;
      border-radius: 10px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }
  </style>