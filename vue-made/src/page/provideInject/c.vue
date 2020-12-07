<template lang="html">
  <div class="">
    <div class="">
      CCC
    </div>
    {{foo}}
  </div>
</template>

<script>
export default {
  inject: ["foo"],
  created() {
    console.log(this.foo);
  }
};
</script>

<style lang="css">
</style>
