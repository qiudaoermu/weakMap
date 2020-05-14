<template lang="html">
  <div class="">
    AAA
    <B :code="1"/>
    <ul>
      <li v-for="item in list" v-if="item.is">
        {{item.data}}
      </li>
      </ul>
  </div>
</template>

<script>
import B from "./B.vue";
export default {
  data() {
    return {
      list: [{ is: false, data: 1 }, { is: true, data: 2 }]
    };
  },
  components: {
    B
  },
  provide() {
    return {
      foo: "foo"
    };
  }
};
</script>

<style lang="css">
</style>
