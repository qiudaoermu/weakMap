<template lang="html">
  <div class="home">
    <vModelChild  v-model="modeValue"></vModelChild>
    <button class="" @click="confirm">
      confirm
    </button>
  </div>
</template>

<script>
import vModelChild from './vModelChild.vue'
export default {
  data() {
    return {
      text: '',
      showAddressPicker: true,
      address: '广东-深圳市-福田区',
      modeValue: 1
    }
  },
  watch: {
    modeValue (v) {
      console.log(v)
    }
  },
  components: {
    vModelChild
  },
  created () {
    this.$on('slotValueChange', this.slotValueChange);
  },
  methods: {
    confirm () {
      console.log(this.modeValue)
    },
    slotValueChange () {
      debugger
    },
    hidePicker() {
      // 接受子组件关闭popup事件
      this.showAddressPicker = false
    },
    showPicker() {
      this.showAddressPicker = !this.showAddressPicker
    },
    saveAddress( val ) {
      // 从子组件接受返回所选值 val
      this.address = val
      this.showAddressPicker = !this.showAddressPicker
    }
  }
}
</script>

<style lang="css">
</style>
