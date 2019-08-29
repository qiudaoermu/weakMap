<template lang="html">
  <div>
    <div ref="test">{{test}}</div>
    <button @click="handleClick">text</button>
    <div>{{number}}</div>
    <ul>
        <li>{{obj.name}}</li>
        <li>{{obj.sex}}</li>
        <li>{{obj.caree}}</li>
        <li>{{obj.height}}</li>
        <li>{{obj.country}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      test: "begin",
      number: 0,
      obj: {}
    };
  },
  components: {},
  methods: {
    handleClick() {
      this.test = "end";
      console.log(this.$refs.test.innerText); //打印“begin”
    }
  },
  mounted() {
    for (let i = 0; i < 1000; i++) {
      this.number++;
    }
    let objs = {
      name: "test",
      sex: "nan",
      caree: "kaifa",
      height: 180,
      country: "country"
    };
    ({ name: this.obj.name, caree: this.obj.caree } = objs);
    ({ height: this.obj.height,sex:this.obj.sex, country: this.obj.country } = objs);
  }
};
</script>

<style lang="css">
.parent {
  width: 100px;
  height: 100px;
  background: red;
}
.child {
  height: 50px;
  background: blue;
}
</style>
