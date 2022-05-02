<template>
  <div>
    <div v-if="loading">
      Typing
    </div>
  </div>
</template>
<script>
export default {
  props: ["loading"],
};
</script>