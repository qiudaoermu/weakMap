<template lang="html">
<div class="">
  BBBB
  <c/>
</div>
</template>

<script>
import c from "./c.vue";
export default {
  props: ["code"],
  components: {
    c
  },
  mounted() {
    console.log(this.code);
    debugger;
  }
};
</script>

<style lang="css">
</style>
