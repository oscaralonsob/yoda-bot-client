<template>
  <ul class="chat">
    <li class="left clearfix" v-for="(message, index) in messages" :key="index">
         <p v-html="'<b>' + message.user + '</b>: '   + message.messageText"> </p>
    </li>
  </ul>
</template>
<script>
export default {
  props: ["messages"],
};
</script>