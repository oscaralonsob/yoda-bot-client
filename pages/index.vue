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
            //Receives the message, maybe I need to add the user (since there is only one is not needed I think)
            addMessage(message) {
                this.messages.push(message);
                this.makeRequest(message);
            },
            makeRequest(message) {
              this.loading = true; 

              //useless web with delay just to test
              axios.get('https://httpbin.org/delay/2')
              .then(response => { 
                alert(message.message);
                console.log(message);
              }).catch(error => {  
                //do nothin rn 
              }).finally(() => (this.loading = false));
          }
        }
    }


</script>