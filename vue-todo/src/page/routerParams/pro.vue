<template>
  <div class="right-content"></div>
</template>

<script>
export default {
  name: "pro",
  data() {
    return {};
  },
  components: {},
  created() {},
  mounted() {
    console.log(typeof this.$route.query.flag);
    console.log(typeof this.$route.query.bool);
  },
  methods: {}
};
</script>
<style lang='less' scoped>
</style>
