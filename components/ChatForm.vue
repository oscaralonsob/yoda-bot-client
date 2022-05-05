<template>
  <div class="input-group">
    <input
      id="btn-input"
      type="text"
      name="message"
      class="form-control input-sm"
      placeholder="Type your message here..."
      v-model="newMessage"
      @keyup.enter="sendMessage"
    />
    <span class="input-group-btn">
      <button class="btn btn-primary btn-sm" id="btn-chat" @click="sendMessage">
        Send
      </button>
    </span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newMessage: "",
    };
  },
  methods: {
    sendMessage() {
      if (this.newMessage != "") {
        //emit the message and user
        this.$emit("messagesent", {
          messageText: this.newMessage,
          user: "user"
        });
        this.newMessage = "";
      }
    },
  },
};
</script>