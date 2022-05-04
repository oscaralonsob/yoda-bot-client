<template>
  <ul class="chat">
    <li class="left clearfix" v-for="message in messages" :key="message.id">
      <div class="clearfix">
        <p>
          <b> {{ message.user }}: </b> {{ message.messageText }}
        </p>
      </div>
    </li>
  </ul>
</template>
<script>
export default {
  props: ["messages"],
};
</script>