<template>
  <div class="container">
    <div class="card">
      <div class="card-header">Chats</div>
      <div class="card-body">
        <chat-messages :messages="messages"></chat-messages>
      </div>
      <div class="card-footer">
        <chat-form v-on:messagesent="addMessage"></chat-form>
        <chat-typing-text :loading="loading"></chat-typing-text>
      </div>
    </div>
  </div>
</template>
<script>
    import ChatForm from '~/components/ChatForm.vue'
    import ChatMessages from '~/components/ChatMessages.vue'
    import ChatTypingText from '~/components/ChatTypingText.vue'

    import axios from 'axios' 

    export default {
        name: 'App',
        components: { ChatForm, ChatMessages, ChatTypingText },

        data() {
            return {
                messages: [],
                loading: false
            }
        },
        methods: {
            // Receives the message
            addMessage(message) {
              this.messages.push(message);
              this.makeRequest(message);
            },
            makeRequest(message) {
              this.loading = true; 
              
              axios.post('/message', 
                {
                  messageText: message.messageText,
                  lastMessageWasFound: localStorage.getItem('lastMessageWasFound'),
                  storeSession: localStorage.getItem('storeSession')
                }
              ).then(response => { 
                this.messages.push(response.data.answer);

                // I used localStorage for this since I have no session and olny one user. Otherwise I'd use DB and session to store this info
                localStorage.setItem('conversation', JSON.stringify(this.messages));
                localStorage.setItem('lastMessageWasFound', response.data.answer.resultFound);
                localStorage.setItem('storeSession', response.data.storeSession);
              }).catch(error => {  
                this.messages.push({user: "bot", messageText: "Sorry I am. A mistake has ocurred. You can try again if you want."});
              }).finally(() => (this.loading = false));
          }
        },
        // Loads the history
        beforeMount(){
          if (localStorage.getItem('conversation') != null) {
            this.messages = JSON.parse(localStorage.getItem('conversation')) || [];
            console.log(this.messages)
          }
        },
    }


</script>