<template>
  <div class="right-content">
    <el-button @click="goNext" type="success"> pre next</el-button>
    <el-button @click="goSameLocation" type="primary"> pre current</el-button>
  </div>
</template>

<script>
export default {
  name: "pre",
  data() {
    return {};
  },
  components: {},
  created() {},
  mounted() {},
  methods: {
    goNext() {
      this.$router.push({
        name: "routerPro",
        query: {
          flag: 1,
          bool: true
        }
      });
    },
    goSameLocation() {
      this.$router.push({
        name: "routerPre",
        query: {
          flag: 1,
          bool: true
        }
      });
      console.log(typeof this.$route.query.flag);
      console.log(typeof this.$route.query.bool);
    }
  }
};
</script>
<style lang='less' scoped>
</style>
