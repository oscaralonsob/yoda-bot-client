<template>
  <div>
    <div v-if="loading">
      writing...
    </div>
  </div>
</template>
<script>
export default {
  props: ["loading"],
};
</script>