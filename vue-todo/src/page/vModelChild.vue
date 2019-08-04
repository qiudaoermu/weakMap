<template lang="html">
    <div class="parent">
        <button class="child" @click="onPCick">changeCurrentValue</button>
        <p>{{currentValue}}</p>
    </div>
</template>

<script>
export default {
  data() {
    return {
      currentValue: this.value
    }
  },
  components: {

  },
  watch: {
    currentValue(val) {
      let a = 1;
      let b = 2;
      this.$emit('input',val,a,b)
      // this.dispatch('picker', 'slotValueChange', this);
    }
  },
  props:{
      value: {},
  },
  methods: {
    onPCick() {
      this.currentValue++
    }
  },
  mounted(){
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
