<template lang="html">
  <div>
    <div ref="test">{{test}}</div>
    <button @click="handleClick">text</button>
    <div>{{number}}</div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        test: 'begin',
        number: 0
      }
    },
    components: {
  
    },
    methods: {
      handleClick() {
        this.test = 'end';
        console.log(this.$refs.test.innerText); //打印“begin”
      }
    },
    mounted () {
      for(let i = 0; i < 1000; i++) {
        this.number++;
      }
    }
  }
</script>

<style lang="css">
  .parent {
    width: 100px;
    height: 100px;
    background: red
  }
  .child {
    height: 50px;
    background: blue
  }
</style>
